run:
	@kill -9 $$(lsof -ti :8000) 2>/dev/null || true
	@if [ -d ".venv" ]; then \
		source .venv/bin/activate; \
	else \
		echo "Virtual environment .venv not found. Please run 'make setup' first."; exit 1; \
	fi
	@echo "Starting backend server..."
	@uvicorn app.main:app --port 8000

setup:
	@echo "Setting up virtual environment and installing dependencies..."
	@if [ -d ".venv" ]; then \
		echo "Virtual environment already exists."; \
	else \
		uv venv; \
	fi
	@source .venv/bin/activate && uv pip install -r requirements.txt
	@echo "Setup complete."

frontend:
	@kill -9 $$(lsof -ti :3000) 2>/dev/null || true
	@echo "Starting frontend server (assuming you are in the project root)..."
	@cd ../frontend && npm run dev

clean:
	@echo "Cleaning up temporary files and virtual environment..."
	@rm -rf temp/
	@rm -rf .venv/
	@rm -rf app/__pycache__/
	@rm -rf app/core/__pycache__/
	@rm -rf app/services/__pycache__/
	@rm -rf app/services/audio/__pycache__/
	@rm -rf app/services/text/__pycache__/
	@rm -rf app/services/tts/__pycache__/
	@echo "Clean up complete."