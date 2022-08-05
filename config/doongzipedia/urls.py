from django.contrib import admin
from django.urls import path, include, re_path
from .views import *
from . import views
from django.conf import settings
from django.conf.urls.static import static

from django.views.generic import TemplateView
from django.views.static import serve

app_name = "doongzipedia"

urlpatterns = [
    # path("", index, name="index"),
    re_path(r"^static/(?P<path>.*)$", serve, {"document_root": settings.STATIC_ROOT}),
    re_path(r".*", TemplateView.as_view(template_name="index.html"), name="react-web"),
]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
