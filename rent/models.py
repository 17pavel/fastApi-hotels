from django.db import models
from django.core.validators import MaxValueValidator
from django.contrib.auth.models import AbstractUser
from django.forms import CharField

# Create your models here.

class User(AbstractUser):
    username = models.CharField(max_length=50)
    email = models.EmailField(max_length=50, unique=True)
    password = models.CharField(max_length=255)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    def __str__(self):
        return f'{self.username}'

class Owner (models.Model):
    emailSeller = models.EmailField(max_length=50, unique=True)
    nameSeller = models.CharField(max_length=50)
    def __str__(self):
        return f'{self.emailSeller} - {self.nameSeller}'


class Renter (models.Model):
    emailRenter = models.EmailField(max_length=50, unique=True)
    nameRenter = models.CharField(max_length=50)
    def __str__(self):
        return f'{self.emailRenter} - {self.nameRenter}'

class CityList(models.Model):
    countryName = models.CharField(max_length=50)
    regionName = models.CharField(max_length=50)
    cityName = models.CharField(max_length=50)
    subway = models.BooleanField(default=False)
    funicular = models.BooleanField(default=False)
    monorail = models.BooleanField(default=False)
    def __str__(self):
        return f'{self.cityName} - {self.countryName}'

class StreetType(models.Model):
    streetTypeName = models.CharField(max_length=50)
    streetTypeNameRus = models.CharField(max_length=50, unique=True)
    def __str__(self):
        return f'{self.streetTypeNameRus}'

class ApartmentsList(models.Model):
    appOwner =  models.EmailField(max_length=50, default='', verbose_name='Собственник') #Это поле буду заполнять автоматом по имени собственника при создании новой квартиры
    # appCountryName = models.CharField(max_length=50, verbose_name='Страна')
    # appRegionStateName = models.CharField(max_length=50, verbose_name='Область/Провинция/Штат и т.п.')
    appCityName = models.ForeignKey(CityList, on_delete=models.CASCADE, related_name='cities', verbose_name="Город")
    appStreetName = models.CharField(max_length=50, verbose_name='Улица')
    appHouseNumber = models.PositiveIntegerField(default=1, verbose_name='Номер дома')
    appHouseCorpusNumber = models.IntegerField(default=None, verbose_name='Корпус')
    appNumber = models.PositiveIntegerField(default=1, verbose_name='Номер апартаментов')
    appHouseNumberOfFloors = models.PositiveIntegerField(default=1, verbose_name='Количество этажей в доме')
    appFloorNumber = models.IntegerField(default=1, verbose_name='Этаж апартаментов')
    appNumberOfSquare = models.PositiveIntegerField(default=20, validators=[MaxValueValidator(1000)],
                                                    verbose_name='Площадь апартаментов')
    appNumberOfRooms = models.PositiveIntegerField(default=1, verbose_name='Количество комнат')
    appNumberOfBedrooms = models.PositiveIntegerField(default=1, validators=[MaxValueValidator(10)],
                                                      verbose_name='Количество спален')
    appShortDiscription = models.CharField(max_length=100, verbose_name='Краткое описание')
    appMaxGuests = models.PositiveIntegerField(default=1, validators=[MaxValueValidator(40)],
                                               verbose_name='Максимальное количество гостей')
    appPricePerPerson = models.PositiveIntegerField(default='', verbose_name='Цена на одного гостя')
    # appPhotoMain = models.JSONField()
    # appPhotoOthers = models.JSONField()
    # appHaveBooked = models.JSONField() # Буду там хранить dateStart, dateEnd, nameMainTenant, peoplesNumber
    def __str__(self):
        return f'{self.appCityName}, {self.appStreetName}, {self.appHouseNumber}/' \
               f'{self.appHouseCorpusNumber}, {self.appNumber}'

# Create your models here.