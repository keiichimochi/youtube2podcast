import os
import base64
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from app.core.config import settings
from app.services.audio.youtube_service import YouTubeService
from app.services.text.gemini_service import GeminiTextService
from app.services.tts.openai_service import OpenAITTSService

app = FastAPI(title=settings.APP_NAME)

# CORS設定
origins = [
    "http://localhost:3000",  # Next.js development server
    # Add other origins if needed (e.g., production frontend URL)
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["POST", "OPTIONS"], # OPTIONS を追加
    allow_headers=["Content-Type"], # Content-Type のみ許可 (必要に応じて追加)
)

# 一時ディレクトリの作成
try:
    os.makedirs(settings.TEMP_DIR, exist_ok=True)
except OSError as e:
    # ディレクトリ作成失敗時のエラーハンドリング
    print(f"Error creating temporary directory {settings.TEMP_DIR}: {e}")
    # サーバー起動を中止するか、代替策を講じるか検討
    # ここではエラーを出力して続行するが、本番環境ではより堅牢な処理が必要
    pass 

# サービスのインスタンス化 (エラーハンドリングを追加)
try:
    youtube_service = YouTubeService()
    # TODO: settings.TEXT_SERVICE の値に応じて動的にインスタンス化する
    text_service = GeminiTextService()
    # TODO: settings.TTS_SERVICE の値に応じて動的にインスタンス化する
    tts_service = OpenAITTSService()
    
    # サービス初期化 (APIキーチェックなどをここで行う)
    # アプリケーション起動時に一度だけ実行されるように @app.on_event("startup") を使うのが一般的
    # ここでは簡易的にインスタンス化時に実行
    # await text_service.initialize() # initializeが非同期の場合
    # await tts_service.initialize()
except ValueError as e:
     print(f"Error initializing services: {e}")
     # 起動時にサービスが初期化できない場合のエラー処理
     # 例えば、APIキーがない場合にサーバーを停止させるなど
     raise RuntimeError(f"Service initialization failed: {e}")
except Exception as e:
     print(f"Unexpected error during service initialization: {e}")
     raise RuntimeError(f"Unexpected error during service initialization: {e}")


class URLInput(BaseModel):
    url: str # pydantic v2 では url: HttpUrl などより厳密な型も使える

class ConversionResponse(BaseModel):
    text: str
    audio: str # Base64 encoded audio data

# グローバルな例外ハンドラを追加して、予期せぬエラーもキャッチする
@app.exception_handler(Exception)
async def generic_exception_handler(request, exc):
    print(f"Unhandled exception: {exc}") # ログ出力
    return HTTPException(status_code=500, detail="An internal server error occurred.")


@app.post("/api/v1/convert", response_model=ConversionResponse)
async def convert_youtube_to_podcast(input: URLInput):
    try:
        # YouTubeから字幕を取得 (言語情報も受け取る)
        transcript, lang = await youtube_service.extract_transcript(input.url)
        
        # Geminiで文章を最適化 (言語情報を渡す)
        optimized_text = await text_service.process_text(transcript, source_lang=lang)
        
        # TTSで音声を生成
        audio_data_bytes = await tts_service.text_to_speech(optimized_text)
        
        # 音声データをBase64エンコードしてJSONで返す
        audio_data_base64 = base64.b64encode(audio_data_bytes).decode('utf-8')
        
        return ConversionResponse(text=optimized_text, audio=audio_data_base64)
        
    except ValueError as e:
        # 特定のエラー (字幕がない、APIキー無効など) は 400 Bad Request や 422 Unprocessable Entity を返す
        print(f"Validation Error: {e}")
        if "subtitles/captions found" in str(e) or "Could not retrieve video info" in str(e) or "VTT subtitle URL" in str(e):
             raise HTTPException(status_code=404, detail=f"Could not find suitable subtitles for the video: {e}")
        elif "Invalid Gemini API Key" in str(e):
             raise HTTPException(status_code=401, detail="Invalid Gemini API Key configured.")
        else:
             raise HTTPException(status_code=400, detail=str(e))
    except FileNotFoundError as e:
        # 音声ファイルが見つからない場合など
        print(f"File Error: {e}")
        raise HTTPException(status_code=500, detail="An error occurred during file processing.")
    except Exception as e:
        # 予期せぬエラーは上で定義したグローバルハンドラに任せるか、ここで500エラーを返す
        print(f"Unexpected Error in /convert: {e}") # 詳細ログ
        # 再度 raise するか、HTTPException を返す
        raise HTTPException(status_code=500, detail="An unexpected error occurred during conversion.")

# uvicornの起動は別ファイル (例: run.py) やコマンドラインから行うのが一般的
# if __name__ == "__main__":
#     import uvicorn
#     # reload=True は開発時のみ推奨
#     uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True) 