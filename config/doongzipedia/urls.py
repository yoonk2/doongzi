from django.contrib import admin
from django.urls import path, include
from .views import *
from . import views

app_name = "doongzipedia"

urlpatterns = [
    path("", index, name="index"),
]
