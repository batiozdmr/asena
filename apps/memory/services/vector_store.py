import logging
import threading

from django.conf import settings

logger = logging.getLogger(__name__)

_lock = threading.Lock()
_embedding_model = None
_chroma_client = None


def _get_embedding_model():
    global _embedding_model

    if _embedding_model is not None:
        return _embedding_model

    with _lock:
        if _embedding_model is None:
            from sentence_transformers import SentenceTransformer

            model_name = getattr(
                settings,
                "ASENA_EMBEDDING_MODEL",
                "paraphrase-multilingual-MiniLM-L12-v2",
            )
            logger.info("Embedding modeli yükleniyor: %s", model_name)
            _embedding_model = SentenceTransformer(model_name)

    return _embedding_model


def _get_chroma_client():
    global _chroma_client

    if _chroma_client is not None:
        return _chroma_client

    with _lock:
        if _chroma_client is None:
            import chromadb

            chroma_path = str(settings.ASENA_CHROMA_PATH)
            settings.ASENA_CHROMA_PATH.mkdir(parents=True, exist_ok=True)
            _chroma_client = chromadb.PersistentClient(path=chroma_path)

    return _chroma_client


def _collection_name(user_id):
    return f"user_{user_id}_memories"


def _chromadb_available():
    try:
        import chromadb  # noqa: F401
        return True
    except ImportError:
        return False


def _embeddings_available():
    try:
        from sentence_transformers import SentenceTransformer  # noqa: F401
        return True
    except ImportError:
        return False


def embed_text(text):
    if not _embeddings_available():
        return [0.0]
    model = _get_embedding_model()
    return model.encode(text).tolist()


def add_memory_to_index(user_id, memory_id, content, metadata=None):
    if not _chromadb_available() or not _embeddings_available():
        return
    client = _get_chroma_client()
    collection = client.get_or_create_collection(name=_collection_name(user_id))
    payload = metadata or {}
    collection.upsert(
        ids=[str(memory_id)],
        documents=[content],
        embeddings=[embed_text(content)],
        metadatas=[payload],
    )


def remove_memory_from_index(user_id, memory_id):
    if not _chromadb_available():
        return
    client = _get_chroma_client()
    collection_name = _collection_name(user_id)
    try:
        collection = client.get_collection(name=collection_name)
        collection.delete(ids=[str(memory_id)])
    except Exception:
        logger.debug("Chroma koleksiyonu veya kayıt bulunamadı: %s", memory_id)


def search_memories(user_id, query, top_k=5):
    if not _chromadb_available() or not _embeddings_available():
        return []
    client = _get_chroma_client()
    collection_name = _collection_name(user_id)

    try:
        collection = client.get_collection(name=collection_name)
    except Exception:
        return []

    if collection.count() == 0:
        return []

    results = collection.query(
        query_embeddings=[embed_text(query)],
        n_results=min(top_k, collection.count()),
    )

    memory_ids = []
    if results.get("ids"):
        memory_ids = [int(memory_id) for memory_id in results["ids"][0]]

    return memory_ids
