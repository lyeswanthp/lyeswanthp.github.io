"""
Pre-compute embeddings for all profile documents and save them back into profile_documents.json.
Run once whenever profile_documents.json changes.
"""

import json
from pathlib import Path

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

LMSTUDIO_BASE_URL = "http://127.0.0.1:1234/v1"
EMBED_MODEL = "text-embedding-nomic-embed-text-v1.5"

client = OpenAI(base_url=LMSTUDIO_BASE_URL, api_key="lm-studio")


def embed_texts(texts: list[str]) -> list[list[float]]:
    response = client.embeddings.create(model=EMBED_MODEL, input=texts)
    return [item.embedding for item in response.data]


def cosine_similarity(a: list[float], b: list[float]) -> float:
    dot = sum(x * y for x, y in zip(a, b))
    norm_a = sum(x * x for x in a) ** 0.5
    norm_b = sum(x * x for x in b) ** 0.5
    return dot / (norm_a * norm_b) if norm_a and norm_b else 0.0


def main() -> None:
    docs_path = Path(__file__).parent / "profile_documents.json"
    with docs_path.open("r", encoding="utf-8") as f:
        docs = json.load(f)

    texts = [doc["text"] for doc in docs]
    print(f"Embedding {len(texts)} documents with model: {EMBED_MODEL}")
    embeddings = embed_texts(texts)

    for doc, embedding in zip(docs, embeddings):
        doc["embedding"] = embedding

    with docs_path.open("w", encoding="utf-8") as f:
        json.dump(docs, f, indent=2)

    # Spot-check: top-3 matches for a sample query
    sample_query = "what is he working on right now?"
    query_emb = embed_texts([sample_query])[0]
    scores = [(i, cosine_similarity(query_emb, e)) for i, e in enumerate(embeddings)]
    scores.sort(key=lambda x: x[1], reverse=True)
    print("\nSpot-check — top 3 matches for: 'what is he working on right now?'")
    for idx, score in scores[:3]:
        print(f"  [{score:.3f}] {docs[idx]['title']}: {docs[idx]['text'][:80]}...")


if __name__ == "__main__":
    main()
