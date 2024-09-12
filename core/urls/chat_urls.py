from django.conf import settings
from django.conf.urls.static import static

from django.contrib import admin

admin.site.site_header = 'Sistem Yönetimi'
admin.site.index_title = 'Sistem Yönetimi'
admin.site.site_title = 'Sistem Yönetim Paneli'

from django.urls import include
from django.contrib import admin
from django.urls import path


urlpatterns = []

urlpatterns += [
    path('super/user/admin/', admin.site.urls),
    path('', include(('apps.chat.urls'), namespace='chat')),
    path('accounts/', include("allauth.urls")),
    path('ckeditor-secret/', include('ckeditor_uploader.urls')),
    path("i18n/", include("django.conf.urls.i18n")),
    path('rosetta/add/lang/', include('rosetta.urls')),
]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
