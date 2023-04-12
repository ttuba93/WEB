from django.db import models

class Category (models.Model):
    name = models.CharField(max_length=20)

class Product (models.Model):
    name = models.CharField(max_length=30)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category_id=models.ForeignKey(Category,on_delete=models.CASCADE)


# c1=Category.objects.create(name='Books')
# c2=Category.objects.create(name='Electronics')
# c3=Category.objects.create(name='Jewerly')
# c4=Category.objects.create(name='Fashion')
# c1.save()
# c2.save()
# c3.save()
# c4.save()


# p=Product.objects.create(name= 'Наушники Marshall Major IV коричневый',
#     price= 145845,
#       description=
#         'Bluetooth гарнитура MARSHALL Major IV благодаря своим особенностям подарит вам комфортное прослушивание музыки самых разных жанров.',
#         count=2,
#         is_active=1,
#         category=2)
# p.save()
# Create your models here.
