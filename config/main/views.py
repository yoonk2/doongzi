from django.shortcuts import render
from .models import *

# Create your views here.

def index(request):
    posts = Post.objects.all()
    comments = Comment.objects.all()
    ctx = {
        'posts': posts,
        'comments': comments,
    }
    return render(request,'index.html', ctx)


import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_GET, require_POST

@require_POST
@csrf_exempt
def comment_ajax(request):
    req = json.loads(request.body)
    content = req['content']

    comment = Comment(content=content)
    comment.save()
    id = comment.id
    color = comment.color
    positionX = comment.positionX
    positionY = comment.positionY

    return JsonResponse({'content': content, 'id': id, 'color': color, 'positionX': positionX, 'positionY': positionY})