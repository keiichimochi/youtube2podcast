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
        print(f"Processing {len(chunks)} chunks for TTS...") # Debug log
        for i, chunk in enumerate(chunks):
            if chunk: # 空のチャンクはスキップ
                 # print(f"Adding task for chunk {i+1}/{len(chunks)}: {chunk[:50]}...") # Verbose debug log
                 tasks.append(self._generate_speech_chunk(chunk, i+1))
        
        # asyncio.gather で並列実行、エラーが発生しても他のタスクは続行 (return_exceptions=True)
        audio_segments_results = await asyncio.gather(*tasks, return_exceptions=True)
        
        # 結果を結合 (成功したbytesのみ)
        full_audio_io = io.BytesIO()
        successful_chunks = 0
        for i, result in enumerate(audio_segments_results):
            if isinstance(result, bytes):
                full_audio_io.write(result)
                successful_chunks += 1
            elif isinstance(result, Exception):
                # gatherでキャッチした例外をログに出力
                print(f"Error processing chunk {i+1}: {result}")
            # else: # None の場合 (generate_speech_chunk内でエラー処理済み)
                 # print(f"Chunk {i+1} resulted in None.")
                 
        print(f"Successfully processed {successful_chunks}/{len(chunks)} chunks.") # Debug log
        
        full_audio = full_audio_io.getvalue()
        
        if not full_audio:
             # エラーの原因をもう少し詳しく示す
             error_details = "No audio data could be generated. Possible reasons: All text chunks failed TTS conversion, or the input text was empty after processing."
             # audio_segments_results に含まれるエラー情報を集約することも検討
             failed_count = len(chunks) - successful_chunks
             if failed_count > 0:
                  error_details += f" ({failed_count} chunk(s) failed). Check logs for details."
             raise ValueError(error_details)
             
        return full_audio

    async def _generate_speech_chunk(self, chunk: str, chunk_num: int) -> bytes | None:
        """Generate speech for a single chunk."""
        if not self.client:
             print(f"[Chunk {chunk_num}] Error: OpenAI client not initialized.")
             return None
        try:
            print(f"[Chunk {chunk_num}] Requesting TTS for chunk: {chunk[:50]}...") # Debug log
            response = await self.client.audio.speech.create(
                model="tts-1",
                voice="nova",
                input=chunk,
                response_format="mp3"
            )
            
            print(f"[Chunk {chunk_num}] Response type: {type(response)}")
            
            audio_bytes = None
            try:
                 print(f"[Chunk {chunk_num}] Attempting to await response.read()...")
                 audio_bytes = await response.read()
                 print(f"[Chunk {chunk_num}] Successfully read {len(audio_bytes)} bytes via await.")
            except TypeError as te:
                 print(f"[Chunk {chunk_num}] TypeError during await response.read(): {te}. Checking response.content...")
                 # TypeErrorの場合、response.content が bytes か確認
                 if hasattr(response, 'content') and isinstance(response.content, bytes):
                     audio_bytes = response.content
                     print(f"[Chunk {chunk_num}] Successfully got {len(audio_bytes)} bytes via response.content.")
                 else:
                     # response.content が bytes でない場合、エラー
                     content_type = type(response.content) if hasattr(response, 'content') else 'N/A'
                     print(f"[Chunk {chunk_num}] Failed to get bytes via response.content (type: {content_type}).")
                     raise ValueError(f"Cannot extract audio bytes after TypeError.") from te
            except Exception as read_err:
                 print(f"[Chunk {chunk_num}] Error reading audio data from response: {read_err}")
                 raise
            
            if not audio_bytes:
                 print(f"[Chunk {chunk_num}] Warning: TTS generation returned empty bytes for the chunk.")
                 return None
                 
            return audio_bytes
            
        except Exception as e:
             print(f"[Chunk {chunk_num}] Error generating speech for chunk via API: {e}")
             raise e 