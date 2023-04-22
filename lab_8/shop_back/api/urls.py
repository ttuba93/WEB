from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("products/", views.products,name="productsList"),
    path("products/<int:product_id1>/", views.productById,name="productsList"),

    path("categories/", views.categories,name="categoriesList"),
    path("categories/<int:category_id1>/", views.categoryById,name="categoriesList"),
    path("categories/<int:category_id1>/products/",views.categoryProducts, name='djnknj'),
    # path('newProduct/',views.create,name="new Product"), 
]