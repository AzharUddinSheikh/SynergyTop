from rest_framework.viewsets import ModelViewSet
from .models import Product
from .serializer import ProductSerializer


class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
