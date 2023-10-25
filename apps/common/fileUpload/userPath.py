import os

from django.utils.crypto import get_random_string


def userDirectoryPath(instance, filename):
    name=str(filename)
    ext = os.path.splitext(name)[1]  # [0] returns path+filename

    newName = get_random_string(length=32) + ext

    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>


    return 'upload/userFormUpload/{0}'.format(newName)


