from django.contrib import admin
from .models import *
from import_export import resources
from import_export.admin import ImportExportModelAdmin

# Register your models here.


class WordResource(resources.ModelResource):
    class Meta:
        model = Word
        fields = (
            "id",
            "kor_word",
            "eng_word",
            "definition",
            "example",
            "doong_position",
            "link",
            "image",
        )
        export_order = fields


class WordAdmin(ImportExportModelAdmin):
    fields = (
        "kor_word",
        "eng_word",
        "definition",
        "example",
        "doong_position",
        "link",
        "image",
    )
    list_display = ("kor_word", "eng_word", "definition", "example", "doong_position")
    resource_class = WordResource


admin.site.register(Word, WordAdmin)
