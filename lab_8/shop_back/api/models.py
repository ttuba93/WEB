from django.db import models

class Product (models.Model):
    name = models.CharField(max_length=30)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()

class Category (models.Model):
    name = models.CharField(max_length=20)

# Create your models here.
