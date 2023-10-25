from django.conf import settings
from django.conf.urls.static import static

from django.contrib import admin

admin.site.site_header = 'Sistem Yönetimi'
admin.site.index_title = 'Sistem Yönetimi'
admin.site.site_title = 'Sistem Yönetim Paneli'

from django.urls import include
from django.urls import path

urlpatterns = []

urlpatterns += [
    path('', include(('apps.main.mainpage.urls'), namespace='mainpage')),
]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
