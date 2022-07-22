from django.shortcuts import render
import json


def yoon(request):
    return render(request, "frontend/build/index.html")
