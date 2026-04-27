import json
import os
from pathlib import Path
from typing import Any, Optional

from dotenv import load_dotenv
from fastapi import FastAPI, Header, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from openai import OpenAI
from pydantic import BaseModel

load_dotenv()

LMSTUDIO_BASE_URL = os.getenv("LMSTUDIO_BASE_URL", "http://127.0.0.1:1234/v1")
CHAT_MODEL = os.getenv("LMSTUDIO_CHAT_MODEL", "qwen2.5-coder-3b-instruct-mlx")
EMBED_MODEL = os.getenv("LMSTUDIO_EMBED_MODEL", "text-embedding-nomic-embed-text-v1.5")
API_TOKEN = os.getenv("CHATBOT_API_TOKEN", "")
ALLOWED_ORIGIN = os.getenv("ALLOWED_ORIGIN", "https://lyeswanthp.github.io")
N_RESULTS = int(os.getenv("N_RESULTS", "3"))

app = FastAPI(title="Local Profile RAG API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[ALLOWED_ORIGIN, "http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

openai_client = OpenAI(base_url=LMSTUDIO_BASE_URL, api_key="lm-studio")

_documents: list[dict[str, Any]] = []


def _load_documents() -> None:
    global _documents
    file_path = Path(__file__).parent / "profile_documents.json"
    with file_path.open("r", encoding="utf-8") as f:
        _documents = json.load(f)


def _cosine_sim(a: list[float], b: list[float]) -> float:
    dot = sum(x * y for x, y in zip(a, b))
    norm_a = sum(x * x for x in a) ** 0.5
    norm_b = sum(x * x for x in b) ** 0.5
    return dot / (norm_a * norm_b) if norm_a and norm_b else 0.0


def _embed(texts: list[str]) -> list[list[float]]:
    response = openai_client.embeddings.create(model=EMBED_MODEL, input=texts)
    return [item.embedding for item in response.data]


def _retrieve(question: str) -> tuple[list[dict[str, Any]], list[list[float]]]:
    query_emb = _embed([question])[0]
    scored = [(i, _cosine_sim(query_emb, doc["embedding"])) for i, doc in enumerate(_documents)]
    scored.sort(key=lambda x: x[1], reverse=True)
    top_ids = [idx for idx, _ in scored[:N_RESULTS]]
    chunks = [_documents[i] for i in top_ids]
    return chunks, [query_emb]


SYSTEM_PROMPT = """You are a knowledgeable assistant for Lovely Yeswanth Panchumarthi's profile.

When answering:
1. Base your answers strictly on the provided profile context below.
2. If a question cannot be answered from the context, say: "I don't have that information in the profile data."
3. Keep answers concise: 2 to 4 sentences.
4. Do not invent or assume facts not present in the context.
5. Do not mention "context" or "documents" to the user.

Profile context:
{context}"""


class ChatRequest(BaseModel):
    question: str


def _check_token(token: Optional[str]) -> None:
    if API_TOKEN and token != API_TOKEN:
        raise HTTPException(status_code=401, detail="Unauthorized token")


@app.on_event("startup")
def _startup() -> None:
    _load_documents()


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.get("/reload")
def reload(x_chatbot_token: Optional[str] = Header(default=None)) -> dict[str, Any]:
    _check_token(x_chatbot_token)
    _load_documents()
    return {"loaded": len(_documents)}


@app.post("/chat")
def chat(
    payload: ChatRequest,
    x_chatbot_token: Optional[str] = Header(default=None),
) -> StreamingResponse:
    _check_token(x_chatbot_token)
    question = payload.question.strip()
    if not question:
        raise HTTPException(status_code=400, detail="Question is required")

    chunks, _ = _retrieve(question)

    context_block = "\n\n".join(
        f"[{chunk['title']}]\n{chunk['text']}" for chunk in chunks
    )
    system_content = SYSTEM_PROMPT.format(context=context_block)

    def stream_tokens():
        try:
            stream = openai_client.chat.completions.create(
                model=CHAT_MODEL,
                temperature=0.2,
                max_tokens=200,
                messages=[
                    {"role": "system", "content": system_content},
                    {"role": "user", "content": question},
                ],
                stream=True,
            )
            for chunk in stream:
                content = chunk.choices[0].delta.content
                if content:
                    yield f"data: {json.dumps({'token': content})}\n\n"
            # Send sources as a final event
            sources = [{"title": c["title"]} for c in chunks]
            yield f"data: {json.dumps({'sources': sources})}\n\n"
            yield "data: [DONE]\n\n"
        except Exception as e:
            yield f"data: {json.dumps({'error': str(e)})}\n\n"

    return StreamingResponse(stream_tokens(), media_type="text/event-stream")
