from django.urls import path

from apps.chat.views import edu, index
from apps.memory.views import memory_add, memory_delete, memory_page

app_name = "chat"

urlpatterns = [
    path("", index, name="index"),
    path("edu/", edu, name="edu"),
    path("memory/", memory_page, name="memory"),
    path("memory/add/", memory_add, name="memory_add"),
    path("memory/<int:memory_id>/delete/", memory_delete, name="memory_delete"),
]
