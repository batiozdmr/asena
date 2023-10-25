from apps.profile.models import Profile
from django.contrib.auth.models import Permission
from django.shortcuts import redirect

from core import settings


def profileCheck(function):
    def wrap(request, *args, **kwargs):
        profile = Profile.objects.filter(user=request.user)
        if not profile:
            return redirect('accounts/edit/')
        return function(request, *args, **kwargs)

    return wrap


def authorityCheck(function):
    def wrap(request, *args, **kwargs):
        if request.user.groups.filter(name='PERSONEL').exists():
            return function(request, *args, **kwargs)
        else:
            return redirect('externalMainPage')

    return wrap


def permissionCheck(modelInfo, permissionInfo):
    def methodWrap(viewMethod):

        def wrap(request, *args, **kwargs):
            status = False
            permissions = Permission.objects.filter(group__user=request.user).filter(
                content_type__model=modelInfo).filter(
                codename=permissionInfo)
            if permissions:
                status = True
            elif request.user.is_staff:
                status = True
            else:
                status = False

            if status == False:
                return redirect(settings.PERMISSION_DENIED_PAGE_URL)

            return viewMethod(request, *args, **kwargs)

        return wrap

    return methodWrap
