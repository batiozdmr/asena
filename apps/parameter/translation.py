from modeltranslation.translator import translator, TranslationOptions

from .models import *


class SiteSettingsTranslationOptions(TranslationOptions):
    fields = (
        'text', 'copyright', 'logo', 'seo_title', 'seo_description', 'seo_author', 'seo_keywords',
    )


class MenuTranslationOptions(TranslationOptions):
    fields = ('name', 'link',)


class SliderTranslationOptions(TranslationOptions):
    fields = ('text', 'image')


translator.register(Slider, SliderTranslationOptions)
translator.register(SiteSettings, SiteSettingsTranslationOptions)
translator.register(Menu, MenuTranslationOptions)
