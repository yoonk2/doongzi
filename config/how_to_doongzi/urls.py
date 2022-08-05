from django.contrib import admin
from django.urls import path, include, re_path
from .views import *
from . import views
from django.conf import settings
from django.conf.urls.static import static

from django.views.generic import TemplateView
from django.views.static import serve

app_name = "how_to_doongzi"

urlpatterns = [
    path("", index, name="index"),
    path("p/<str:url>", post, name="post"),
    # wrm qr 설명글용
    path("doongzi-log", doongzi_log, name="doongzi-log"),
    path("doongzi-workroom", doongzi_workroom, name="doongzi-workroom"),
    path("doongsite", doongsite, name="doongsite"),
    path("fabre", fabre, name="fabre"),
    path("a-piece-of-doongzi", a_piece_of_doongzi, name="a-piece-of-doongzi"),
    path("nesting", nesting, name="nesting"),
    path("celsius", celsius, name="celsius"),
    path("burnout", burnout, name="burnout"),
    path("bricklayer", bricklayer, name="bricklayer"),
    path("doongzipedia", doongzipedia, name="doongzipedia"),
]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
