from django.conf import settings
from django.conf.urls.static import static

from django.contrib import admin

admin.site.site_header = 'Sistem Yönetimi'
admin.site.index_title = 'Sistem Yönetimi'
admin.site.site_title = 'Sistem Yönetim Paneli'

from django.urls import include
from django.urls import path

app_name = 'api'

urlpatterns = []

urlpatterns += [
    path('', include(('apps.api.urls'))),
]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
