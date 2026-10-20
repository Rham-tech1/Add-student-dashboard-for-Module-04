from django.urls import path
from . import views

urlpatterns = [
    path('', views.dynamic_form, name='dynamic_form'),
]