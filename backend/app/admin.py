from django.contrib import admin
from django.contrib.auth.models import Group
from .models import Resume, ExperienceYear, Service, Skill, Portfolio, PortfolioTechnology, Contact


@admin.register(ExperienceYear)
class ExperienceYearAdmin(admin.ModelAdmin):
    list_display = ('year',)
    search_fields = ('year',)


@admin.register(Resume)
class ResumeAdmin(admin.ModelAdmin):
    list_display = ('name', 'position', 'company', 'year')
    search_fields = ('name', 'position', 'company', 'year')


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'icon_class')
    search_fields = ('name', 'description', 'icon_class')


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name', 'progress')
    search_fields = ('name', 'progress')


@admin.register(Portfolio)
class PortfolioAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)


@admin.register(PortfolioTechnology)
class PortfolioTechnologyAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'message')
    search_fields = ('name', 'email', 'phone', 'message')

    def has_change_permission(self, request, obj=None):
        return False

    def has_add_permission(self, request):
        return False


admin.site.unregister(Group)
