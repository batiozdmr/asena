from apps.memory.models import UserMemory
from apps.memory.services.vector_store import search_memories


def get_relevant_memories(user, query, top_k=5):
    memory_ids = search_memories(user.id, query, top_k=top_k)
    if not memory_ids:
        return UserMemory.objects.filter(user=user, is_active=True).order_by("-updated_at")[:top_k]

    memories = list(
        UserMemory.objects.filter(
            id__in=memory_ids,
            user=user,
            is_active=True,
        )
    )
    id_order = {memory_id: index for index, memory_id in enumerate(memory_ids)}
    memories.sort(key=lambda memory: id_order.get(memory.id, 999))
    return memories
