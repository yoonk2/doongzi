from django.contrib import admin
from .models import *
from import_export import resources
from import_export.admin import ImportExportModelAdmin

# Register your models here.
admin.site.register(Post)


class CommentResource(resources.ModelResource):
    class Meta:
        model = Comment
        fields = (
            "created_at",
            "content",
        )
        export_order = fields


class CommentAdmin(ImportExportModelAdmin):
    fields = (
        "created_at",
        "content",
    )
    list_display = ("created_at", "content")
    resource_class = CommentResource


admin.site.register(Comment, CommentAdmin)
