from django.contrib.auth.decorators import login_required
from django.shortcuts import render

from apps.chat.models import Question


@login_required
def index(request):
    questions = Question.objects.filter(parent__isnull=True)
    context = {
        'questions': questions
    }
    return render(request, "ai/index.html", context)
