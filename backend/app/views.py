from django.shortcuts import redirect
from rest_framework.generics import ListAPIView, CreateAPIView

from .models import ExperienceYear, Service, Skill, Portfolio, Contact
from .serializers import ExperienceYearSerializer, ServiceSerializer, SkillSerializer, PortfolioSerializer, ContactSerializer


class ExperienceYearListAPIView(ListAPIView):
    queryset = ExperienceYear.objects.prefetch_related('resume_set').all()
    serializer_class = ExperienceYearSerializer


class ServiceListAPIView(ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


class SkillListAPIView(ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer


class PortfolioListAPIView(ListAPIView):
    queryset = Portfolio.objects.prefetch_related('portfoliotechnology_set').all()
    serializer_class = PortfolioSerializer


class ContactCreateAPIView(CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


def home_to_admin(request):
    return redirect('admin/')
