from django.contrib import admin
from mptt.admin import DraggableMPTTAdmin

from .models import *


class MenuAdmin(DraggableMPTTAdmin):
    mptt_level_indent = 20
    mptt_indent_field = 'parent'


admin.site.register(Menu, MenuAdmin,
                    list_display=(
                        'tree_actions',
                        'indented_title',
                        'menu_type',
                        'link',
                        'alignment',
                        # ...more fields if you feel like it...
                    ),
                    list_display_links=(
                        'indented_title',
                    ), )

admin.site.register(MenuType)
admin.site.register(SiteSettings)
admin.site.register(Icon)
admin.site.register(Slider)
admin.site.register(Country)
admin.site.register(Province)
admin.site.register(District)


