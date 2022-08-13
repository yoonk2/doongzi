from django.contrib import admin
from django.urls import path, include
from .views import *
from . import views

app_name = "projects"

urlpatterns = [
    path("", index, name="index"),
    path("yoon-kwon/", yoon_kwon, name="yoon-kwon"),
    path("yoon-kwon/support-ajax/", support_ajax, name="support_ajax"),
    path("thank-you/", thank_you, name="thank-you"),
    path("thank-you/1", thank_you_1, name="thank-you-1"),
    path("thank-you/2", thank_you_2, name="thank-you-2"),
    path("thank-you/3", thank_you_3, name="thank-you-3"),
    path("thank-you/4", thank_you_4, name="thank-you-4"),
    path("thank-you/5", thank_you_5, name="thank-you-5"),
    path("thank-you/6", thank_you_6, name="thank-you-6"),
    path("thank-you/7", thank_you_7, name="thank-you-7"),
    path("thank-you/8", thank_you_8, name="thank-you-8"),
    path("thank-you/9", thank_you_9, name="thank-you-9"),
    path("thank-you/10", thank_you_10, name="thank-you-10"),
    path("thank-you/11", thank_you_11, name="thank-you-11"),
    path("thank-you/12", thank_you_12, name="thank-you-12"),
    path("thank-you/13", thank_you_13, name="thank-you-13"),
    path("thank-you/14", thank_you_14, name="thank-you-14"),
    path("thank-you/15", thank_you_15, name="thank-you-15"),
    path("thank-you/16", thank_you_16, name="thank-you-16"),
    path("thank-you/17", thank_you_17, name="thank-you-17"),
    path("thank-you/18", thank_you_18, name="thank-you-18"),
    path("thank-you/19", thank_you_19, name="thank-you-19"),
    path("piro", piro, name="piro"),
    path("gir1s-generation", gir1s_generation, name="gir1s-generation"),
    path("invitation", invitation, name="invitation"),
    path("invitation/<str:name>", invitation_withname, name="invitation"),
    path("cylee", chaeyoung, name="cylee"),
    path("yulaylist", yullee, name="yulaylist"),
    path("bestnayoun", nayoun, name="bestnayoun"),
]
