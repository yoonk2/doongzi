from django.contrib import admin
from django.urls import path, include
from .views import *
from . import views

app_name = 'projects'

urlpatterns = [
    path('', index, name='index'),
    path('yoon-kwon/', yoon_kwon, name='yoon-kwon'),
    path('thank-you/', thank_you, name='thank-you'),
    path('thank-you/1', thank_you_1, name='thank-you-1'),
    path('thank-you/2', thank_you_2, name='thank-you-2'),
]