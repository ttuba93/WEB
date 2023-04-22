from django.http import HttpResponse,HttpResponseRedirect
from django.views.generic.list import ListView
from api.models import Product,Category
from django.shortcuts import render
# from api.forms import Products

def index(request):
    return render(request, "mainpage.html")

def categories(request):    
    categories=Category.objects.all()
    data = {"Category":categories} 
    return render( request,'categories.html',data)

def categoryProducts(request,category_id1): 
    list_products=list()
    for i in Product.objects.all():
        if i.category_id==category_id1:
            list_products.append(i.product_id)
            list_products.append(i.product_name)
            list_products.append(i.price)
            list_products.append(i.description)
            list_products.append(i.count)
            list_products.append(i.is_active)
            list_products.append(i.category)
            list_products.append(i)
    # data = {"Product":list_products} 
    # product=list_products
    # return render( request,'products.html',data)
    # return render(request, 'products.html',data)
    return HttpResponse(str(list_products))


def products(request):    
    products=Product.objects.all()
    data = {"Product":products} 
    return render( request,'products.html',data)

def productById(request,product_id1):
    product=Product.objects.get(product_id=product_id1)
    return HttpResponse('Product of id: '+ str(product_id1) +'\nThis name: ' +product.product_name)

def categoryById(request,category_id1 ):
    cat=Category.objects.get(category_id=category_id1)
    return HttpResponse('Category of id: '+ str(category_id1) +'\nThis name: ' +cat.category_name)

def categoryProducts(request,category_id1): 
    list_products=list()
    for i in Product.objects.all():
        if i.category_id==category_id1:
            query='''
            select product_name,product_id,price,api_category.category_id
            from api_product,api_category 
            where api_category.category_id=api_product.category_id and api_category.category_id = %s''' %category_id1           
            products=Product.objects.raw(query)
            data = {"Product":products} 
            return render(request, 'categoryProduct.html',data)
    return HttpResponse(str(list_products))

# def create(request):
#     if request.method=="POST":
#         product=Product()
#         product.product_name=request.POST.get("product_name")
#         product.save()
#     return HttpResponseRedirect("")