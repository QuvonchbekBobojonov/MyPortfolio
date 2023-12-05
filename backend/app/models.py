from django.db import models
from django.core.validators import RegexValidator


class Resume(models.Model):
    year = models.ForeignKey('ExperienceYear', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    company = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class ExperienceYear(models.Model):
    year = models.CharField(max_length=100)

    def __str__(self):
        return self.year


class Service(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    icon_class = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Skill(models.Model):
    image = models.ImageField(upload_to='skills/')
    name = models.CharField(max_length=100)
    progress = models.IntegerField()

    def __str__(self):
        return self.name


class Portfolio(models.Model):
    image = models.ImageField(upload_to='portfolio/')
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class PortfolioTechnology(models.Model):
    portfolio = models.ForeignKey(Portfolio, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Contact(models.Model):

    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in the format: '+998999999999'. Up to 15 digits allowed.")

    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=15, validators=[phone_regex], blank=True, null=True)
    subject = models.CharField(max_length=100)
    budget = models.CharField(max_length=100)
    message = models.TextField()
    file = models.FileField(upload_to='contact/', blank=True, null=True)
    sent_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} - {self.subject} - {self.sent_at}"

