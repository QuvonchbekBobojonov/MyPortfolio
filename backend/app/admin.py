from django.contrib import admin
from .models import Resume, ResumeItem


class ResumeItemInline(admin.TabularInline):
    model = ResumeItem
    extra = 0


@admin.register(Resume)
class ResumeAdmin(admin.ModelAdmin):
    list_per_page = 10
    inlines = [ResumeItemInline]
