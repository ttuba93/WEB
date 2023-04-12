from django.contrib import admin
from django.urls import path, include
from api.views import mainpage, Products,Category,cat,pro

urlpatterns = [
    path('', mainpage),
    path('products/', Products.as_view(), name="listP") ,
    # path('products/<int:id>/'),
    path('categories/',Category.as_view(),name="listc"), 
    path('cat/',cat),
    path('pro/',pro),


    # path('categories/<int:id>/'),
    # path('/api/categories/<int:id>/products/')
]