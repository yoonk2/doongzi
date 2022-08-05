"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from .views import *
from django.conf import settings
from django.conf.urls.static import static
from rest_framework import routers
from doongzipedia import views
from django.views.generic import TemplateView
from django.views.generic.base import RedirectView
from django.views.static import serve


router = routers.DefaultRouter()
# router.register(r"yoon", views.SupportView, basename="yoon")
router.register("words", views.WordView, basename="words")

urlpatterns = (
    [
        path("admin/", admin.site.urls),
        path("", include("main.urls")),
        path("projects/", include("projects.urls")),
        path("api/", include(router.urls)),
        path("doongzipedia/", include("doongzipedia.urls")),
        path("yoon/", RedirectView.as_view(pattern_name="projects:yoon-kwon")),
        path("yulaylist/", RedirectView.as_view(pattern_name="projects:yulaylist")),
        path("bestnayoun/", RedirectView.as_view(pattern_name="projects:bestnayoun")),
        path("cylee/", RedirectView.as_view(pattern_name="projects:cylee")),
        re_path(
            r"^static/(?P<path>.*)$", serve, {"document_root": settings.STATIC_ROOT}
        ),
    ]
    + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
)
