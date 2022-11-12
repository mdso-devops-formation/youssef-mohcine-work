from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from .models import TodoModel
from .serializers import TodoModelSerializer


class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoModelSerializer
    queryset = TodoModel.objects.all()