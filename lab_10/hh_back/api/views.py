from django.http import HttpResponse,HttpResponseRedirect
from django.views.generic.list import ListView
from api.models import Product,Category
from django.shortcuts import render
# from api.forms import Products

def index(request):
    return render(request, "mainpage.html")

def categories(request):    
    categories=Category.objects.all()
    data = {"Category":categories} #data
    return render( request,'categories.html',data)

def categoryProducts(request,category_id1):    
    products=Product.objects.raw("select*from api_product,api_category where category_id_id=category_id" % category_id1)
    return render( request,'categories.html',products)

def products(request):    
    products=Product.objects.all()
    data = {"Product":products} 
    return render( request,'products.html',data)

def productById(request,product_id1):
    response="You're looking at the product of id %s."
    product=Product.objects.get(product_id=product_id1)
    return HttpResponse(product.product_name)

def categoryById(request,category_id1 ):
    response="You're looking at the category of id %s."
    cat=Category.objects.get(category_id=category_id1)

    return HttpResponse(cat.category_name)
# response % category_id1,

# def create(request):
#     if request.method=="POST":
#         product=Product()
#         product.product_name=request.POST.get("product_name")
#         product.save()
#     return HttpResponseRedirect("")

