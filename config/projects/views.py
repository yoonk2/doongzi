from random import shuffle
from django.http import HttpResponse
from django.shortcuts import redirect, render
from .models import *
from django.views.decorators.http import require_GET, require_POST
from django.views.decorators.csrf import csrf_exempt
import json
from django.http import JsonResponse

# Create your views here.


def index(request):
    return render(request, "projects.html")


def yoon_kwon(request):
    supports = Support.objects.all()
    ctx = {"supports": supports}
    return render(request, "yoon-kwon.html", ctx)


@require_POST
@csrf_exempt
def support_yoon(request):
    if request.method == "POST":
        name = "익명의 응원자"
        support = Support.objects.create(
            name=name,
        )
        support.save()
        return redirect("projects:yoon-kwon")
    return redirect("projects:yoon-kwon")


def thank_you(request):
    return render(request, "thank-you.html")


def thank_you_1(request):
    ctx = {"name": "최장순 교수님"}
    return render(request, template_name="thank-you.html", context=ctx)


def thank_you_2(request):
    ctx = {"name": "김나연님"}
    return render(request, template_name="thank-you.html", context=ctx)


def thank_you_3(request):
    ctx = {"name": "이혜선 교수님"}
    return render(request, template_name="thank-you.html", context=ctx)


def thank_you_4(request):
    ctx = {"name": "노은유 교수님"}
    return render(request, template_name="thank-you.html", context=ctx)


def thank_you_5(request):
    ctx = {"name": "이화영 교수님"}
    return render(request, template_name="thank-you.html", context=ctx)


def thank_you_6(request):
    ctx = {"name": "이재준 선생님"}
    return render(request, template_name="thank-you.html", context=ctx)


def thank_you_7(request):
    ctx = {"name": "강수진 교수님"}
    return render(request, template_name="thank-you.html", context=ctx)


def thank_you_8(request):
    ctx = {"name": "류창수 교수님"}
    return render(request, template_name="thank-you.html", context=ctx)


def thank_you_9(request):
    ctx = {"name": "유현정 교수님"}
    return render(request, template_name="thank-you.html", context=ctx)


def thank_you_10(request):
    ctx = {"name": "김수영 교수님"}
    return render(request, template_name="thank-you.html", context=ctx)


def thank_you_11(request):
    ctx = {"name": "유상준 선생님"}
    return render(request, template_name="thank-you.html", context=ctx)


def thank_you_12(request):
    ctx = {"name": "민주경 선생님"}
    return render(request, template_name="thank-you.html", context=ctx)


def thank_you_13(request):
    ctx = {"name": "김진희 선생님"}
    return render(request, template_name="thank-you.html", context=ctx)


def thank_you_14(request):
    ctx = {"name": "도쌤"}
    return render(request, template_name="thank-you.html", context=ctx)


def thank_you_15(request):
    ctx = {"name": "김준환 선생님"}
    return render(request, template_name="thank-you.html", context=ctx)


def thank_you_16(request):
    ctx = {"name": "권오선 선생님"}
    return render(request, template_name="thank-you.html", context=ctx)


def thank_you_17(request):
    ctx = {"name": "이윤선 교수님"}
    return render(request, template_name="thank-you.html", context=ctx)


def thank_you_18(request):
    ctx = {"name": "박지현 교수님"}
    return render(request, template_name="thank-you.html", context=ctx)


def thank_you_19(request):
    ctx = {"name": "전문가집단 탁쌤/알쌤/황쌤"}
    return render(request, template_name="thank-you.html", context=ctx)


def piro(request):
    return render(request, "piro.html")


def gir1s_generation(request):
    credits = Credit.objects.order_by("?").all()
    ctx = {
        "credits": credits,
    }
    return render(request, template_name="gir1s-generation.html", context=ctx)


def chaeyoung(request):
    return render(request, "chaeyoung.html")


def yullee(request):
    return render(request, "yullee.html")


def nayoun(request):
    return render(request, "nayoun.html")


def invitation(request):
    return render(request, "invitation.html")


def invitation_withname(request, name):
    ctx = {"name": name}
    return render(request, "invitation.html", context=ctx)


@require_POST
@csrf_exempt
def support_ajax(request):
    req = json.loads(request.body)
    name = req["name"]
    support = Support(name=name)
    support.save()
    support_length = Support.objects.count()
    return JsonResponse({"supports": support_length})


def people(request):
    people = People.objects.order_by("?")
    ctx = {"people": people}
    return render(request, "people.html", context=ctx)
