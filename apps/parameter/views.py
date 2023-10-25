import os

from django.contrib import messages
from django.contrib.auth.models import User
from django.db.models import Q
from django.http import HttpResponseRedirect, HttpResponse, JsonResponse
from django.shortcuts import render
from django.utils.translation import gettext_lazy as _
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_exempt

from .models import Province, District
from ..chat.models import Room


def get_province(request):
    contents = Province.objects.filter(country_id=request.GET.get('id')).order_by('text')
    paramter_text = _("İl")
    return render(request, 'apps/parameter/getContent.html', {'contents': contents, 'paramter_text': paramter_text})


def get_district(request):
    contents = District.objects.filter(province_id=request.GET.get('id')).order_by('text')
    paramter_text = _("Ülke")
    return render(request, 'apps/parameter/getContent.html', {'contents': contents, 'paramter_text': paramter_text})


def download_database(request):
    # Veritabanı dosyasının yolu
    db_file_path = os.path.join(os.getcwd(), 'db.sqlite3')

    # Veritabanı dosyasını açın ve dosyayı okuma modunda açın
    with open(db_file_path, 'rb') as db_file:
        response = HttpResponse(db_file.read(), content_type='application/octet-stream')

    # İndirilen dosyanın adını ayarlayın
    response['Content-Disposition'] = f'attachment; filename=db.sqlite3'

    return response


@ensure_csrf_cookie
@csrf_exempt
def search_user(request):
    if request.method == 'POST':
        search_query = request.POST.get('query', '')
        user_list = []
        if search_query:
            users = User.objects.filter(Q(username__icontains=search_query) | Q(first_name__icontains=search_query) | Q(
                last_name__icontains=search_query)).filter(~Q(id=request.user.id))
            for user in users:
                user_list.append({
                    'id': user.id,
                    'name': user.profile.get_full_name(),
                    'username': user.username,
                    'image': user.profile.get_profile_image_url.url,
                })

        return JsonResponse({'users': user_list}, safe=False)
    return JsonResponse({'error': 'Invalid request'}, status=400)


@ensure_csrf_cookie
@csrf_exempt
def create_chat(request):
    if request.method == 'POST':
        user_id = request.POST.get('id', '')
        if user_id:
            user = User.objects.get(id=user_id)
            if user:
                room_control = Room.objects.filter(users__in=[request.user]).filter(users__in=[user])
                if not room_control:
                    room = Room.objects.create()
                    room.users.add(request.user)
                    room.users.add(user)
                    room.save()
                else:
                    room = room_control.last()
                return JsonResponse({'room': room.chat_id, }, safe=False)
            return JsonResponse({'error': 'Invalid request'}, status=400)
        return JsonResponse({'error': 'Invalid request'}, status=400)
    return JsonResponse({'error': 'Invalid request'}, status=400)
