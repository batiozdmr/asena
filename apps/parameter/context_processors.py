from django.utils.translation import get_language

from apps.parameter.models import Menu, SiteSettings


def site(request):
    site_settings = SiteSettings.objects.last()
    urlObject = request.get_host()
    url = request.build_absolute_uri()
    path = request.path

    return {'site_settings': site_settings, 'showURL': urlObject, 'URL': url, 'path': path, }


def menu(request):
    header_menu_list = Menu.objects.filter(menu_type_id=1).order_by('alignment')
    footer_menu = Menu.objects.filter(menu_type_id=2).order_by('alignment')
    lang = get_language()
    return {'header_menu_list': header_menu_list, 'footer_menu': footer_menu, 'lang': lang}
