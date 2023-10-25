from django.urls import path
from .views import *

app_name = "parameter"

urlpatterns = [
    path('get/getProvince', get_province, name='getProvince'),
    path('get/getDistrict', get_district, name='getDistrict'),
    path('get/searchUser', search_user, name='user_search'),
    path('get/createChat', create_chat, name='create_chat'),

]
