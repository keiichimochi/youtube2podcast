frontend:
	@echo "🧹 フロントエンドのキャッシュ削除中ナリ..."
	@rm -rf .next
	@kill -9 $$(lsof -ti :3000) 2>/dev/null || true
	@echo "🚀 Next.js 起動するナリ！（port:3000）"
	@PORT=3000 npm run dev