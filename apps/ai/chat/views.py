from django.contrib.auth.decorators import login_required
from django.shortcuts import render

from apps.ai.chat.models import Questions


@login_required
def index(request):
    questions = Questions.objects.filter(parent__isnull=True)
    context = {
        'questions': questions
    }
    return render(request, "ai/index.html", context)
