from django.shortcuts import render
from . import models

# Create your views here.


def index(request):
    posts = models.Post.objects.all()
    ctx = {
        "posts": posts,
    }
    return render(request, "how_to_doongzi/index.html", context=ctx)


def post(request, url):
    post = models.Post.objects.get(url=url)
    try:
        next_post = models.Post.objects.get(order=post.order + 1)
    except:
        next_post = False

    ctx = {
        "post": post,
        "next_post": next_post,
    }
    return render(request, "how_to_doongzi/index.html", context=ctx)


# wrm qr 설명글용
def nesting(request):  # 둥지의 둥지
    return render(request, "how_to_doongzi/nesting.html")


def fabre(request):  # 파브르 프로젝트
    return render(request, "how_to_doongzi/fabre.html")


def celsius(request):  # 열
    return render(request, "how_to_doongzi/celsius.html")


def burnout(request):  # 번아웃 제곱
    return render(request, "how_to_doongzi/burnout.html")


def bricklayer(request):  # 벽돌공
    return render(request, "how_to_doongzi/bricklayer.html")


def doongsite(request):  # 둥사이트
    return render(request, "how_to_doongzi/doongsite.html")


def doongzipedia(request):  # 둥키백과
    return render(request, "how_to_doongzi/doongzipedia.html")


def a_piece_of_doongzi(request):  # 쪽글 프로젝트
    return render(request, "how_to_doongzi/a_piece_of_doongzi.html")


def doongzi_log(request):  # 둥지로그
    return render(request, "how_to_doongzi/doongzi_log.html")


def doongzi_workroom(request):  # 작업실
    return render(request, "how_to_doongzi/doongzi_workroom.html")
