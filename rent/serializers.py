# Когда мы хотим гонять данные по сети (клиент-сервак) - это процесс преобразования данных для других приложений
# в какой-то формат - как правило - в общепризнанный формат. А "клиент" уже забирает и обратно сериализует и использует
# полученные данные далее, как ему требуется
# В джанго - обычно в json формате

from rest_framework import serializers
from .models import Owner, Renter, CityList, StreetType, ApartmentsList, User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = { # после хеширования убираем возвращение пароля, чтобы мы его больше не видели
            'password':  {"write_only": True}, # говорим, что поле парольно - используется ТОЛЬКО для записи
        }
# функция для хеширования пароля
        def create(self, validated_data):
            password = validated_data.pop('password', None)
            instance = self.Meta.model(**validated_data)
            if password is not None: # если пароль не равен нулю, то мы делаем "пароль на пароль"-  хешируем
                instance.set_password(password)

                instance.save()
                return instance
class OwnerSerializer(serializers.ModelSerializer):
    class Meta: # Meta - это данные (описание) о данных
        model = Owner
        fields = ['id', 'emailSeller', 'nameSeller']

class RenterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Renter
        fields = ['id', 'emailRenter', 'nameRenter']

class CityListSerializer(serializers.ModelSerializer):
    class Meta:
        model = CityList
        fields = ['id', 'countryName', 'regionName', 'cityName', 'subway', 'funicular', 'monorail']

class StreetTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = StreetType
        fields = ['id', 'streetTypeName', 'streetTypeNameRus']

class ApartmentsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApartmentsList
        fields = ['id', 'appOwner', 'appCityName', 'appStreetName', 'appHouseNumber',
                    'appHouseCorpusNumber', 'appHouseNumberOfFloors', 'appFloorNumber', 'appNumber',
                    'appNumberOfSquare', 'appNumberOfRooms', 'appNumberOfBedrooms', 'appShortDiscription',
                    'appMaxGuests', 'appPricePerPerson']