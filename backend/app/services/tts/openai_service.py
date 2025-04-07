from openai import AsyncOpenAI
import asyncio
import io
from app.core.config import settings
from .base import BaseTTSService

# OpenAI TTS APIの最大文字数制限 (安全マージンを考慮)
MAX_CHARS = 4000 

class OpenAITTSService(BaseTTSService):
    def __init__(self):
        self.client = None
        
    async def initialize(self) -> None:
        if not settings.OPENAI_API_KEY:
             raise ValueError("OPENAI_API_KEY is not set in the environment variables.")
        self.client = AsyncOpenAI(api_key=settings.OPENAI_API_KEY)
        
    async def text_to_speech(self, text: str) -> bytes:
        """Convert text to speech, handling long text by splitting into chunks."""
        if not self.client:
            await self.initialize()
            
        # テキストを句読点（「。」、「.」、「?」、「!」）で区切り、MAX_CHARSを超えないチャンクに分割
        chunks = []
        current_chunk = ""
        sentences = []
        temp_sentence = ""
        # 句読点で分割しつつ、区切り文字も保持するロジック
        import re
        split_points = iter(re.split(r'([。.?!])', text))
        for part in split_points:
            try:
                delimiter = next(split_points)
                sentences.append(part + delimiter)
            except StopIteration:
                 if part: # 最後の部分
                     sentences.append(part)
                 break
                 
        # for sentence in text.split('。'): # 単純な句点分割だと不十分
        for sentence in sentences:
            if len(current_chunk) + len(sentence) <= MAX_CHARS:
                current_chunk += sentence
            else:
                # 現在のチャンクが空でなく、かつ次の文を追加すると超える場合
                if current_chunk:
                    chunks.append(current_chunk.strip())
                # 次の文が単体で長すぎる場合の処理 (さらに分割するか、エラーにするか)
                if len(sentence) > MAX_CHARS:
                     # とりあえずエラーにする (より洗練された分割ロジックも検討可)
                     print(f"Warning: Sentence exceeds MAX_CHARS ({len(sentence)} > {MAX_CHARS}): {sentence[:100]}...")
                     # MAX_CHARSで強制的に分割する
                     for i in range(0, len(sentence), MAX_CHARS):
                          chunks.append(sentence[i:i+MAX_CHARS])
                     current_chunk = "" # 強制分割後はリセット
                else:
                     current_chunk = sentence # 新しいチャンクを開始
        
        # 最後のチャンクを追加
        if current_chunk:
            chunks.append(current_chunk.strip())

        # 各チャンクを非同期でTTS処理し、結果を結合
        audio_segments = []
        tasks = []
        for chunk in chunks:
            if chunk: # 空のチャンクはスキップ
                 tasks.append(self._generate_speech_chunk(chunk))
        
        audio_segments_results = await asyncio.gather(*tasks)
        
        # 結果を結合 (bytesを単純に結合)
        # より高度な結合 (無音部分の調整など) は pydub などが必要になるが、まずは単純結合
        full_audio = b"".join(filter(None, audio_segments_results))
        
        if not full_audio:
             raise ValueError("TTS generation resulted in empty audio.")
             
        return full_audio

    async def _generate_speech_chunk(self, chunk: str) -> bytes | None:
        """Generate speech for a single chunk."""
        try:
            response = await self.client.audio.speech.create(
                model="tts-1",
                voice="nova", # 好みのvoiceに変更可能
                input=chunk,
                response_format="mp3" # 形式を指定
            )
            # responseからbytesを取得 (非同期で読み取る)
            audio_bytes = await response.read()
            return audio_bytes
        except Exception as e:
             # 個々のチャンクでのエラーをログに残す
             print(f"Error generating speech for chunk: {e}, chunk: {chunk[:50]}...")
             # エラーが発生したチャンクはスキップして None を返す (あるいは例外を再raiseする)
             return None 