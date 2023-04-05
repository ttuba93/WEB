from django.contrib import admin
from django.urls import path, include
from api.views import mainpage

urlpatterns = [
    path('api/', mainpage),
    path('/api/products') ,
    path('/api/products/<int:id>/'),
    path('/api/categories/'), 
    path('/api/categories/<int:id>/'),
    path('/api/categories/<int:id>/products/') 
]