from django.contrib.auth.decorators import login_required
from django.shortcuts import render

from apps.memory.models import ConversationSession
from apps.profile.models import Profile


@login_required
def index(request):
    Profile.objects.get_or_create(user=request.user)
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
    return render(request, "ai/index.html", {"sessions": []})
