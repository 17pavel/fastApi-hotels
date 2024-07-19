from .models import Owner, Renter, CityList, StreetType, ApartmentsList, User
from rest_framework import viewsets, permissions
from .serializers import OwnerSerializer, RenterSerializer, CityListSerializer, StreetTypeSerializer, \
    ApartmentsListSerializer, UserSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny #Здесь мы все разрешили, но можно делать так, как надо для конкретного проекта
    ]
    serializer_class = UserSerializer
class OwnerViewSet(viewsets.ModelViewSet):
    queryset = Owner.objects.all()
    permission_classes = [
        permissions.AllowAny #Здесь мы все разрешили, но можно делать так, как надо для конкретного проекта
    ]
    serializer_class = OwnerSerializer

class RenterViewSet(viewsets.ModelViewSet):
    queryset = Renter.objects.all()
    permission_classes = [
        permissions.AllowAny #Здесь мы все разрешили, но можно делать так, как надо для конкретного проекта
    ]
    serializer_class = RenterSerializer

class CityListViewSet(viewsets.ModelViewSet):
    queryset = CityList.objects.all()
    permission_classes = [
        permissions.AllowAny #Здесь мы все разрешили, но можно делать так, как надо для конкретного проекта
    ]
    serializer_class = CityListSerializer

class StreetTypeViewSet(viewsets.ModelViewSet):
    queryset = StreetType.objects.all()
    permission_classes = [
        permissions.AllowAny #Здесь мы все разрешили, но можно делать так, как надо для конкретного проекта
    ]
    serializer_class = StreetTypeSerializer

class ApartmentsListViewSet(viewsets.ModelViewSet):
    queryset = ApartmentsList.objects.all()
    permission_classes = [
        permissions.AllowAny #Здесь мы все разрешили, но можно делать так, как надо для конкретного проекта
    ]
    serializer_class = ApartmentsListSerializer