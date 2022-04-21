from django.shortcuts import render
from .models import *
# Create your views here.

def index(request):
    return render(request,'projects.html')

def yoon_kwon(request):
    return render(request,'yoon-kwon.html')