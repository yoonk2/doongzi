from django.contrib import admin
from django.urls import path, include
from .views import *
from . import views

app_name = 'main'

urlpatterns = [
    path('', index, name='index'),
    path('comment_ajax', view=views.comment_ajax, name='comment_ajax'),
]