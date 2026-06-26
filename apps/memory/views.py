from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.shortcuts import get_object_or_404, redirect, render
from django.views.decorators.http import require_http_methods

from apps.memory.models import ConversationSession, UserMemory
from apps.memory.services.vector_store import add_memory_to_index, remove_memory_from_index


@login_required
def index(request):
    sessions = ConversationSession.objects.filter(
        user=request.user,
        is_active=True,
    ).order_by("-updated_at")[:50]
    context = {
        "sessions": sessions,
    }
    return render(request, "ai/index.html", context)


@login_required
def edu(request):
    return render(request, "ai/index.html", {})


@login_required
def memory_page(request):
    memories = UserMemory.objects.filter(user=request.user, is_active=True).order_by("-updated_at")
    return render(request, "ai/memory.html", {"memories": memories})


@login_required
@require_http_methods(["POST"])
def memory_add(request):
    content = request.POST.get("content", "").strip()
    category = request.POST.get("category", UserMemory.CATEGORY_FACT)

    if not content:
        return JsonResponse({"error": "İçerik boş olamaz."}, status=400)

    if category not in dict(UserMemory.CATEGORY_CHOICES):
        category = UserMemory.CATEGORY_FACT

    memory = UserMemory.objects.create(
        user=request.user,
        category=category,
        content=content,
        confidence=1.0,
    )
    memory.chroma_id = str(memory.pk)
    memory.save(update_fields=["chroma_id"])
    add_memory_to_index(
        request.user.id,
        memory.pk,
        memory.content,
        metadata={"category": memory.category},
    )
    return redirect("chat:memory")


@login_required
@require_http_methods(["POST"])
def memory_delete(request, memory_id):
    memory = get_object_or_404(UserMemory, id=memory_id, user=request.user)
    memory.is_active = False
    memory.save(update_fields=["is_active", "updated_at"])
    remove_memory_from_index(request.user.id, memory.pk)
    return redirect("chat:memory")
