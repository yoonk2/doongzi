from django.contrib import admin
from django.urls import path, include
from .views import *
from . import views

app_name = 'projects'

urlpatterns = [
    path('', index, name='index'),
    path('yoon-kwon/', yoon_kwon, name='yoon-kwon'),
]