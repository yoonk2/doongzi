from django.shortcuts import render
from .models import *

# Create your views here.

def index(request):
    posts = Post.objects.all()
    ctx = {
        'posts': posts,
    }
    return render(request,'index.html', ctx)