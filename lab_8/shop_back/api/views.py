from msilib.schema import ListView
from django.shortcuts import render
from models import Product


def mainpage(request):
    return render(request,"pages/index.html")

# Create your views here.

class Products(ListView):
    model = Product #model
    fields='__all__' # fields 
    template_name = 'product_list.html'
    