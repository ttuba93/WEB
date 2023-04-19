from django import forms
# from django.db import models
# from django.forms import fields
from .models import Product,Category

class Products(forms.ModelForm):
    class Meta:
        model=Product
        fields=[
            "product_id",
            "product_name",
            "price",
            "description",
            "count",
            "is_active",
            "category",
        ]

class Categories(forms.ModelForm):
    class Meta:
        model=Category
        fields=[
            "category_id",
            "category_name",
        ]