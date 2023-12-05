from django.urls import path

from .views import ExperienceYearListAPIView, ServiceListAPIView, SkillListAPIView, PortfolioListAPIView, ContactCreateAPIView

urlpatterns = [
    path('experience-years/', ExperienceYearListAPIView.as_view()),
    path('services/', ServiceListAPIView.as_view()),
    path('skills/', SkillListAPIView.as_view()),
    path('portfolios/', PortfolioListAPIView.as_view()),
    path('contacts/', ContactCreateAPIView.as_view()),
]
