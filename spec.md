github リポジトリ
https://github.com/keiichimochi/youtube2podcast



Gemini 2.5 pro API sample

import base64
import os
from google import genai
from google.genai import types


def generate():
    client = genai.Client(
        api_key=os.environ.get("GEMINI_API_KEY"),
    )

    model = "gemini-2.5-pro-preview-03-25"
    contents = [
        types.Content(
            role="user",
            parts=[
                types.Part.from_text(text="""INSERT_INPUT_HERE"""),
            ],
        ),
    ]
    generate_content_config = types.GenerateContentConfig(
        response_mime_type="text/plain",
    )

    for chunk in client.models.generate_content_stream(
        model=model,
        contents=contents,
        config=generate_content_config,
    ):
        print(chunk.text, end="")

if __name__ == "__main__":
    generate()

# YouTube2Podcast 仕様書

## プロジェクト概要
YouTubeの解説動画の音声をPodcast用の原稿に変換し、TTSで音声を生成するWebアプリケーション。

## 主要機能

### 1. YouTube動画音声の取得
- YouTube URLからの動画音声の抽出
- 音声ファイルの一時保存機能

### 2. 音声からテキストへの変換
- 音声認識APIを使用した文字起こし
- テキストデータの保存と管理

### 3. Gemini 2.5 Proによるコンテンツ最適化
- Podcastフォーマットへの変換
- 文章の自然な流れの最適化
- 冗長な表現の削除
- 話し言葉から書き言葉への変換

### 4. TTS（Text-to-Speech）変換
- 最適化されたテキストの音声化
- 音声パラメータのカスタマイズ（速度、トーン等）

### 5. Webインターフェース
- シンプルで使いやすいUI
- 処理状況のリアルタイム表示
- 生成されたPodcastの試聴機能
- ダウンロード機能

## 技術スタック
- フロントエンド: Next.js
- バックエンド: Python (FastAPI)
- AI/ML: Gemini 2.5 Pro API
- 音声処理: yt-dlp
- TTS: OpenAI TTS API
- データベース: SQLite

## 開発チェックリスト

### 環境セットアップ
- [x] プロジェクトの初期化（Next.js + FastAPI）
- [x] 必要なパッケージのインストール
- [x] 開発環境の構築（仮想環境等）
- [x] 各種APIキーの設定 (.env + .gitignore)

### バックエンド開発
- [x] FastAPIサーバーの構築
- [ ] YouTube動画ダウンロード機能の実装 (音声ダウンロード部分は未実装・未使用)
- [x] 音声抽出処理の実装 (字幕抽出、日英対応)
- [x] Gemini APIとの連携実装 (日英対応、プロンプト調整)
- [x] TTS機能の実装 (OpenAI TTS、テキスト長分割対応)
- [ ] データベース設計と実装 (未着手)
- [x] APIエンドポイントの実装 (/api/v1/convert)
- [x] エラーハンドリングの実装 (基本的なHTTPException、CORS修正)

### フロントエンド開発
- [x] Next.jsプロジェクトのセットアップ
- [x] UIコンポーネントの作成 (shadcn/ui: Input, Button, Card, Alert)
- [x] YouTube URL入力フォームの実装
- [x] 処理状況表示機能の実装 (ローディングスピナー)
- [x] 音声プレビュー機能の実装 (AudioPlayerコンポーネント)
- [ ] ダウンロード機能の実装 (未着手)
- [x] エラー表示機能の実装 (詳細エラーメッセージ表示)

### テストとデバッグ
- [ ] ユニットテストの作成
- [ ] 統合テストの実施
- [x] エラーケースのテスト (APIキー無効、字幕なし等)
- [ ] パフォーマンステスト

### デプロイメント
- [ ] 本番環境の準備
- [ ] デプロイスクリプトの作成
- [ ] 環境変数の設定
- [ ] SSL証明書の設定

### ドキュメント
- [ ] APIドキュメントの作成
- [ ] セットアップガイドの作成
- [ ] 使用方法のドキュメント作成

## セキュリティ考慮事項
- [x] APIキーの安全な管理 (.env + .gitignore)
- [ ] ユーザー入力のバリデーション (基本的な型チェックのみ)
- [ ] ファイルアップロードの制限 (現状なし)
- [x] 一時ファイルの適切な管理 (tempディレクトリ使用、自動削除は未実装)

## 現在の開発状況と課題 (YYYY-MM-DD)

### 開発状況
- フロントエンドとバックエンドの基本的な連携は完了。
- YouTube URLを入力し、変換ボタンを押すと、バックエンドで処理（字幕取得→Geminiで最適化→TTSで音声生成）が実行される。
- 日本語・英語の字幕に対応し、どちらの場合も日本語のPodcast原稿を生成する。
- OpenAI TTSの文字数制限に対応するため、テキストチャンク分割処理を実装。
- フロントエンドでエラーメッセージを詳細に表示するように改善。

### 現在の課題
1.  **Backend: Gemini APIキーエラー:** `curl`でのテストは成功するが、アプリケーション実行時に `400 API key not valid` エラーが頻発する。`.env`ファイルの読み込みやサーバープロセス管理に問題がある可能性が高い。
2.  **Backend: `pydantic_settings` モジュールエラー:** `uvicorn --reload` 使用時に `ModuleNotFoundError: No module named 'pydantic_settings'` が発生することがある。仮想環境のサブプロセスへの引き継ぎ問題の可能性。
3.  **Backend: ポート競合エラー:** ポート8000が解放されず `Address already in use` エラーが頻発する。プロセスの確実な停止が必要。
4.  **Frontend: `Alert` コンポーネント解決エラー:** `shadcn add alert` は成功しているように見えるが、`Module not found: Can't resolve '@/components/ui/alert'` エラーが解消されない。キャッシュや依存関係の問題の可能性。
5.  **TTSチャンク処理:** 実装はしたが、他のエラーにより正常に動作するか未確認。

## 次の実装計画

1.  **課題解決 (最優先):**
    *   ポート8000を使用しているプロセスを確実に停止する手順を確立・実行。
    *   バックエンドの仮想環境と依存関係 (`requirements.txt`を使用) を再確認し、`pydantic_settings`エラーを解消する。
    *   Gemini APIキーがアプリケーション内で正しく読み込まれているかデバッグ・確認し、APIキーエラーを解消する。
    *   フロントエンドの依存関係 (`node_modules`, `.next`) を完全にクリーンアップし、`Alert`コンポーネントのエラーを解消する。
2.  **動作確認:** 上記課題解決後、日本語・英語の動画URLで一連の変換処理が正常に動作することを確認する。特にTTSのチャンク処理が機能するか確認する。
3.  **新機能追加:**
    *   フロントエンドに、過去に入力したYouTube URLを選択できる履歴機能（プルダウン等）を追加する。
4.  **改善:**
    *   バックエンドのエラーハンドリングをより詳細にする。
    *   一時ファイルの削除処理を追加する。
    *   YouTube音声ダウンロード機能の実装 (現在は字幕のみ使用)。
