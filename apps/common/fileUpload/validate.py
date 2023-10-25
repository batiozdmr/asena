from django.core.exceptions import ValidationError


def validateFileExtension(value):
    import os
    ext = os.path.splitext(value.name)[1]
    valid_extensions = ['.pdf']
    if not ext in valid_extensions:
        raise ValidationError(u'File not supported!')
    limit = 100 * 1024 * 1024
    if value.size > limit:
        raise ValidationError('File too large. Size should not exceed 100 MiB.')


def validateFileExtensionPhoto(value):
    import os
    ext = os.path.splitext(value.name)[1]
    valid_extensions = ['.png', '.jpeg', '.jpg']
    if not ext in valid_extensions:
        raise ValidationError(u'File not supported!')
    limit = 100 * 1024 * 1024
    if value.size > limit:
        raise ValidationError('File too large. Size should not exceed 100 MiB.')
