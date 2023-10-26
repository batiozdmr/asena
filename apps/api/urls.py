from django.urls import path

from apps.api.views import asena

urlpatterns = [
    path('asena/', asena, name='asena'),
]