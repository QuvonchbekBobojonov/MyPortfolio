from rest_framework import serializers
from .models import ExperienceYear, Resume, Service, Skill, Portfolio, PortfolioTechnology, Contact


class ExperienceYearSerializer(serializers.ModelSerializer):
    resumes = serializers.SerializerMethodField('get_resumes')

    class Meta:
        model = ExperienceYear
        fields = '__all__'

    @staticmethod
    def get_resumes(obj):
        return ResumeSerializer(obj.resume_set.all(), many=True).data


class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = '__all__'


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = '__all__'


class PortfolioTechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = PortfolioTechnology
        fields = '__all__'


class PortfolioSerializer(serializers.ModelSerializer):
    technologies = serializers.SerializerMethodField('get_technologies')

    class Meta:
        model = Portfolio
        fields = '__all__'

    @staticmethod
    def get_technologies(obj):
        return PortfolioTechnologySerializer(obj.portfoliotechnology_set.all(), many=True).data


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'
