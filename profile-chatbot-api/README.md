# Profile Chatbot API (RAG + OpenAI-compatible models)

This API powers portfolio chat for recruiter-facing questions. It supports LM Studio for local development and any hosted OpenAI-compatible provider for production.

## Local run

```bash
cd profile-chatbot-api
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python embed_all.py
uvicorn app:app --reload --port 8000
```

## Production deploy (Render)

1. Create a Render Web Service from `profile-chatbot-api`.
2. Runtime: Python 3.11+.
3. Build command: `pip install -r requirements.txt`
4. Start command: `uvicorn app:app --host 0.0.0.0 --port $PORT`
5. Add environment variables:
   - `MODEL_BASE_URL`
   - `MODEL_API_KEY`
   - `CHAT_MODEL`
   - `EMBED_MODEL`
   - `CHATBOT_API_TOKEN`
   - `ALLOWED_ORIGINS` (include `https://lyeswanthp.github.io`)
6. Run a one-off shell command on Render after first deploy:
   - `python embed_all.py`

## Wire frontend deploy (GitHub Pages)

Add GitHub repository secrets:

- `VITE_CHATBOT_API_URL` = your deployed API URL (example `https://your-api.onrender.com`)
- `VITE_CHATBOT_TOKEN` = same value as backend `CHATBOT_API_TOKEN`

GitHub Pages build injects these values into the chatbot frontend.

## Test

```bash
curl -X POST http://127.0.0.1:8000/chat \
  -H "content-type: application/json" \
  -H "x-chatbot-token: change-me" \
  -d '{"question":"What is Yeswanth currently working on?"}'
```
