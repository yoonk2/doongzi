from django.shortcuts import render
from .models import *
# Create your views here.

def index(request):
    return render(request,'projects.html')

def yoon_kwon(request):
    return render(request,'yoon-kwon.html')

def thank_you(request):
    return render(request,'thank-you.html')

def thank_you_1(request):
    ctx = {'name' : '최장순'}
    return render(request,template_name='thank-you.html', context=ctx)
def thank_you_2(request):
    ctx = {'name' : '김나연'}
    return render(request,template_name='thank-you.html', context=ctx)
def thank_you_3(request):
    ctx = {'name' : '최장순'}
    return render(request,template_name='thank-you.html', context=ctx)
def thank_you_4(request):
    ctx = {'name' : '최장순'}
    return render(request,template_name='thank-you.html', context=ctx)
def thank_you_5(request):
    ctx = {'name' : '최장순'}
    return render(request,template_name='thank-you.html', context=ctx)
def thank_you_6(request):
    ctx = {'name' : '최장순'}
    return render(request,template_name='thank-you.html', context=ctx)
def thank_you_7(request):
    ctx = {'name' : '최장순'}
    return render(request,template_name='thank-you.html', context=ctx)