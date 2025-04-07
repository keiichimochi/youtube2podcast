run:
	@kill -9 $$(lsof -ti :8000) 2>/dev/null || true
	@uvicorn app.main:app --reload --port 8000

frontend:
	@kill -9 $$(lsof -ti :3000) 2>/dev/null || true
	@npm run dev