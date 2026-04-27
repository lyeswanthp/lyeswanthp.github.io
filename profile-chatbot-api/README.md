# Local Profile Chatbot API (LM Studio + RAG)

## Run

```bash
cd profile-chatbot-api
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app:app --reload --port 8000
```

## Initialize RAG data

```bash
curl -X POST http://127.0.0.1:8000/ingest \
  -H "x-chatbot-token: change-me"
```

## Test

```bash
curl -X POST http://127.0.0.1:8000/chat \
  -H "content-type: application/json" \
  -H "x-chatbot-token: change-me" \
  -d '{"question":"What is Yeswanth currently working on?"}'
```
