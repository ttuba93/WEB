from .views import *
from django.urls import path


urlpatterns = [
    path('', CompanyList),
    path('companies/', CompanyList),
    path('companies/<int:company_id>/', CompanyDetail),
    path('companies/<int:company_id>/vacancies/', CompanyVacancyList),
    path('vacancies/', VacancyList),
    path('vacancies/<int:vacancy_id>/', VacancyDetail),
    path('vacancies/top_ten/', TopTenVacanciesList),
]