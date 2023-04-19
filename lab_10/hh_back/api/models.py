from django.db import models

class Category (models.Model):
    category_id=models.IntegerField(primary_key=True)
    category_name = models.CharField(max_length=20)

class Product (models.Model):
    product_id=models.IntegerField(primary_key=True)
    product_name = models.CharField(max_length=30)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category=models.ForeignKey(Category,on_delete=models.CASCADE)

