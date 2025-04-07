import google.generativeai as genai
import asyncio # asyncio をインポート
from app.core.config import settings
from .base import BaseTextService

class GeminiTextService(BaseTextService):
    def __init__(self):
        self.model = None

    async def initialize(self) -> None:
        if not settings.GEMINI_API_KEY:
            raise ValueError("GEMINI_API_KEY is not set in the environment variables.")
        genai.configure(api_key=settings.GEMINI_API_KEY)
        # 使用可能なモデルリストを取得して確認 (デバッグ用)
        # for m in genai.list_models():
        #     if 'generateContent' in m.supported_generation_methods:
        #         print(m.name)
        self.model = genai.GenerativeModel('gemini-1.5-pro-latest') # モデル名を最新版に変更

    async def process_text(self, text: str, source_lang: str = 'ja') -> str:
        """Process text and convert it to podcast format, translating if necessary"""
        if not self.model:
            await self.initialize()

        if source_lang == 'ja':
            prompt = f"""
            あなたはプロのPodcast原稿エディターです。
            以下の日本語の文章を、自然で聞き取りやすい日本語のPodcast原稿に変換してください。

            変換ルール:
            1. 話し言葉に近づける (例: 「～です。」→「～ですね。」、「～ます。」→「～ますね。」など自然な範囲で)
            2. 不自然な接続詞や言い回しを修正する。
            3. 冗長な表現や繰り返しを削除し、簡潔にする。
            4. 専門用語は必要に応じて簡単な言葉に置き換えるか、短い説明を加える。
            5. 一文が長くなりすぎないように、適切に区切る。
            6. 全体として、ラジオやPodcastで話しているような、滑らかで魅力的な語り口にする。
            7. 字幕特有の短い区切りや体言止めは、自然な文章になるよう修正する。

            元の文章:
            {text}

            変換後のPodcast原稿:
            """
        elif source_lang == 'en':
            prompt = f"""
            You are a professional podcast script editor and translator.
            Translate the following English text into natural-sounding Japanese suitable for a podcast script.
            Then, refine the translated Japanese text into a high-quality podcast script.

            Translation and Editing Rules:
            1. Translate the English text accurately into Japanese.
            2. Convert the translated text into a natural, conversational Japanese style suitable for speaking (話し言葉).
            3. Correct any unnatural conjunctions or phrasing in the Japanese translation.
            4. Remove redundancy and repetition to make the Japanese script concise.
            5. If necessary, replace technical terms with simpler Japanese words or add brief explanations.
            6. Ensure sentences are not too long, breaking them up appropriately for easy listening.
            7. Make the overall tone engaging and smooth, as if spoken on a radio show or podcast.
            8. Correct short phrases or sentence fragments common in subtitles to form complete, natural sentences.
            9. Ensure the final output is **only the Japanese podcast script**, without any English text or explanatory notes.

            Original English Text:
            {text}

            Japanese Podcast Script:
            """
        else:
            raise ValueError(f"Unsupported source language: {source_lang}")

        try:
            # 同期的なSDK呼び出しを非同期で実行するために asyncio.to_thread を使用
            response = await asyncio.to_thread(self.model.generate_content, prompt)
            
            # レスポンス形式の確認とテキスト抽出 (以前のまま)
            if hasattr(response, 'text'):
                 return response.text
            elif response.candidates and response.candidates[0].content.parts:
                 return response.candidates[0].content.parts[0].text
            else:
                 # 予期しないレスポンス形式の場合のエラーハンドリング
                 print(f"Unexpected Gemini API response format: {response}")
                 raise ValueError("Failed to get valid response from Gemini API")
        except Exception as e:
            print(f"Error calling Gemini API: {e}") # エラーログ
            # APIキー関連のエラーか、他の問題かを判別してより詳細なエラーを返すことも検討
            if "API key not valid" in str(e):
                 raise ValueError("Invalid Gemini API Key.")
            # 他のSDKエラーも詳細にハンドリングする方が望ましい
            # 例: google.api_core.exceptions.PermissionDenied など
            raise ValueError(f"Failed to process text with Gemini API: {e}") 