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
    ctx = {'name' : '최장순 교수님'}
    return render(request,template_name='thank-you.html', context=ctx)
def thank_you_2(request):
    ctx = {'name' : '김나연님'}
    return render(request,template_name='thank-you.html', context=ctx)
def thank_you_3(request):
    ctx = {'name' : '이혜선 교수님'}
    return render(request,template_name='thank-you.html', context=ctx)
def thank_you_4(request):
    ctx = {'name' : '노은유 교수님'}
    return render(request,template_name='thank-you.html', context=ctx)
def thank_you_5(request):
    ctx = {'name' : '이화영 교수님'}
    return render(request,template_name='thank-you.html', context=ctx)
def thank_you_6(request):
    ctx = {'name' : '이재준 선생님'}
    return render(request,template_name='thank-you.html', context=ctx)
def thank_you_7(request):
    ctx = {'name' : '강수진 교수님'}
    return render(request,template_name='thank-you.html', context=ctx)
def thank_you_8(request):
    ctx = {'name' : '류창수 교수님'}
    return render(request,template_name='thank-you.html', context=ctx)
def thank_you_9(request):
    ctx = {'name' : '유현정 교수님'}
    return render(request,template_name='thank-you.html', context=ctx)
def thank_you_10(request):
    ctx = {'name' : '김수영 교수님'}
    return render(request,template_name='thank-you.html', context=ctx)
def thank_you_11(request):
    ctx = {'name' : '유상준 선생님'}
    return render(request,template_name='thank-you.html', context=ctx)
def thank_you_12(request):
    ctx = {'name' : '민주경 선생님'}
    return render(request,template_name='thank-you.html', context=ctx)
def thank_you_13(request):
    ctx = {'name' : '김진희 선생님'}
    return render(request,template_name='thank-you.html', context=ctx)
def thank_you_14(request):
    ctx = {'name' : '도쌤'}
    return render(request,template_name='thank-you.html', context=ctx)