from django.db import models


class Resume(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class ResumeItem(models.Model):
    resume = models.ForeignKey(Resume, on_delete=models.CASCADE)
    direction = models.CharField(max_length=200)
    company = models.CharField(max_length=200)

    def __str__(self):
        return f'{self.direction} from {self.company}'


