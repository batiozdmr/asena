from django.conf import settings
from django_hosts import patterns, host

host_patterns = patterns(
    '',
    host(r'', settings.ROOT_URLCONF, name='main'),
    host(r'www', settings.ROOT_URLCONF, name='www'),
    host(r'ai', 'core.urls.ai_urls', name='ai'),
    host(r'api', 'core.urls.api_urls', name='api'),
)
