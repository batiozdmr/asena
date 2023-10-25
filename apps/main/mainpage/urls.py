from django.urls import path

from .views import *

app_name = "mainpage"

urlpatterns = [
    path('', index, name='index'),
]
