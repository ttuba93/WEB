from django.views.generic.list import ListView
from django.shortcuts import redirect, render
from django.http import HttpResponse, HttpResponseRedirect, HttpResponseNotFound
from api.models import Product,Category
from api.forms import CategoryForm


def mainpage(request):
    return render(request,"mainpage.html")

# Create your views here.



class Products(ListView):    
    products=Product.objects.all()
    model = Product #model
    fields='__all__' # fields 
    template_name = 'products.html'
def pro(request):
    return render(request,"products.html")
class Category(ListView):    
    categories=Category.objects.all()
    model = Category #model
    fields='__all__' # fields 
    template_name = 'categories.html'

def cat(request):
    return render(request,"categories.html")

