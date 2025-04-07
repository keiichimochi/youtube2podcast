import os
import yt_dlp
from app.core.config import settings
from typing import Tuple, Optional

class YouTubeService:
    def __init__(self):
        self.ydl_opts = {
            'format': 'bestaudio/best',
            'postprocessors': [{
                'key': 'FFmpegExtractAudio',
                'preferredcodec': 'mp3',
                'preferredquality': '192',
            }],
            'outtmpl': os.path.join(settings.TEMP_DIR, '%(id)s.%(ext)s'),
            'writesubtitles': True,         # 字幕をダウンロード
            'writeautomaticsub': True,   # 自動生成字幕もダウンロード
            'subtitleslangs': ['ja', 'en'],  # 日本語と英語の字幕を優先
            'skip_download': True,         # 音声は別途ダウンロードするのでスキップ
        }
    
    async def download_audio(self, url: str) -> str:
        """Download audio from YouTube video and return the file path"""
        audio_opts = {
            'format': 'bestaudio/best',
            'postprocessors': [{
                'key': 'FFmpegExtractAudio',
                'preferredcodec': 'mp3',
                'preferredquality': '192',
            }],
            'outtmpl': os.path.join(settings.TEMP_DIR, '%(id)s.%(ext)s'),
        }
        with yt_dlp.YoutubeDL(audio_opts) as ydl:
            info = ydl.extract_info(url, download=True)
            # ydl.prepare_filename で正しいパスを取得する
            filename = ydl.prepare_filename(info)
            # 拡張子を .mp3 に変更する
            base, _ = os.path.splitext(filename)
            audio_path = f"{base}.mp3"
            # ファイルが存在するか確認 (ダウンロードに時間がかかる場合があるため)
            if not os.path.exists(audio_path):
                # 必要であればリトライ処理などを追加
                 raise FileNotFoundError(f"Downloaded audio file not found at expected path: {audio_path}")
            return audio_path
            
    async def extract_transcript(self, url: str) -> Tuple[str, str]:
        """Extract transcript (Japanese or English) from YouTube video and return text and language"""
        transcript_text = None
        transcript_lang = None
        
        # まず字幕情報を取得（ダウンロードはしない）
        with yt_dlp.YoutubeDL(self.ydl_opts) as ydl:
            try:
                info = ydl.extract_info(url, download=False)
            except yt_dlp.utils.DownloadError as e:
                 # 動画が存在しない、非公開などの場合にエラー
                 raise ValueError(f"Could not retrieve video info: {e}")

            # 字幕データの処理
            subtitles = info.get('subtitles')
            automatic_captions = info.get('automatic_captions')

            # 1. 日本語の手動字幕
            if subtitles and 'ja' in subtitles:
                transcript_text = await self._get_subtitle_data(subtitles['ja'])
                transcript_lang = 'ja'
            # 2. 英語の手動字幕
            elif subtitles and 'en' in subtitles:
                transcript_text = await self._get_subtitle_data(subtitles['en'])
                transcript_lang = 'en'
            # 3. 日本語の自動生成字幕
            elif automatic_captions and 'ja' in automatic_captions:
                transcript_text = await self._get_subtitle_data(automatic_captions['ja'])
                transcript_lang = 'ja'
            # 4. 英語の自動生成字幕
            elif automatic_captions and 'en' in automatic_captions:
                transcript_text = await self._get_subtitle_data(automatic_captions['en'])
                transcript_lang = 'en'
                
        if transcript_text is None or transcript_lang is None:
            raise ValueError("No suitable Japanese or English subtitles/captions found")
            
        return transcript_text, transcript_lang

    async def _get_subtitle_data(self, subtitle_info_list: list) -> str:
        """Helper to download and extract subtitle text from VTT"""
        # subtitle_info_list は複数のフォーマットを含むことがある
        vtt_url = None
        for info in subtitle_info_list:
            if info.get('ext') == 'vtt':
                vtt_url = info.get('url')
                break
        
        if not vtt_url:
            raise ValueError("Could not find VTT subtitle URL")
            
        # yt-dlp を使って VTT ファイルの内容を取得
        # download=True にするとファイルに書き出そうとするので False のまま
        # request を使って直接ダウンロードする方が確実かもしれない
        # ここでは簡易的に yt-dlp の内部処理に頼る (将来的に改善の余地あり)
        # yt-dlp の文字起こし抽出は複雑なので、ここではテキストを結合する簡易実装
        # TODO: yt-dlp の字幕処理を詳しく調査し、より正確な抽出方法を実装する
        try:
             # yt-dlpで直接VTT内容を取得するのは難しいのでrequestsを使う
             import requests
             response = requests.get(vtt_url)
             response.raise_for_status() # エラーチェック
             vtt_content = response.text
             
             # VTTからテキスト部分のみを抽出 (簡単な正規表現を使用)
             import re
             lines = vtt_content.splitlines()
             text_lines = []
             for line in lines:
                 # WEBVTTヘッダー、空行、タイムスタンプ行、コメント行をスキップ
                 if line.strip() == '' or line.startswith('WEBVTT') or '-->' in line or line.startswith('NOTE'):
                     continue
                 # VTTタグを除去 (<v ja>テキスト</v> -> テキスト)
                 line = re.sub(r'<[^>]+>', '', line)
                 text_lines.append(line.strip())
             return ' '.join(text_lines)
             
        except Exception as e:
             raise ValueError(f"Failed to download or parse VTT subtitles: {e}") 