from django.contrib import admin
from .models import Owner, Renter, CityList, StreetType, ApartmentsList, User

class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'username', 'email') # Список видимых админу полей
    search_fields = ('id', 'username', 'email') # Указываем возможность поиска по этим полям
    list_editable = ('username',) # Что мы можем через админку менять
    list_filter = ('username', 'email')
admin.site.register(User, UserAdmin)

class OwnerAdmin(admin.ModelAdmin):
    list_display = ('id', 'emailSeller', 'nameSeller') # Список видимых админу полей
    search_fields = ('id', 'emailSeller', 'nameSeller') # Указываем возможность поиска по этим полям
    list_editable = ('nameSeller',) # Что мы можем через админку менять
    list_filter = ('emailSeller', 'nameSeller')

admin.site.register(Owner, OwnerAdmin)

class RenterAdmin(admin.ModelAdmin):
    list_display = ('id', 'emailRenter', 'nameRenter') # Список видимых админу полей
    search_fields = ('id', 'emailSeller', 'nameSeller') # Указываем возможность поиска по этим полям
    list_editable = ('nameRenter',) # Что мы можем через админку менять
    list_filter = ('emailRenter', 'nameRenter')
admin.site.register(Renter, RenterAdmin)

class CityListAdmin(admin.ModelAdmin):
    list_display = ('id', 'countryName', 'regionName', 'cityName', 'subway', 'funicular', 'monorail')
    search_fields = ('id', 'countryName', 'regionName', 'cityName')
    list_editable = ('countryName', 'regionName', 'cityName', 'subway', 'funicular', 'monorail')
    list_filter = ('countryName', 'regionName', 'cityName', 'subway', 'funicular', 'monorail')
admin.site.register(CityList, CityListAdmin)

class StreetTypeAdmin(admin.ModelAdmin):
    list_display = ('id', 'streetTypeName', 'streetTypeNameRus')
    search_fields = ('id', 'streetTypeName', 'streetTypeNameRus')
    list_editable = ('streetTypeName', 'streetTypeNameRus')
    list_filter = ('streetTypeName', 'streetTypeNameRus')
admin.site.register(StreetType, StreetTypeAdmin)

class ApartmentsListAdmin(admin.ModelAdmin):
    list_display = ('id', 'appOwner', 'appCityName', 'appStreetName', 'appHouseNumber',
                    'appHouseCorpusNumber', 'appHouseNumberOfFloors', 'appFloorNumber', 'appNumber',
                    'appNumberOfSquare', 'appNumberOfRooms', 'appNumberOfBedrooms', 'appShortDiscription',
                    'appMaxGuests', 'appPricePerPerson')
    search_fields = ('id', 'appOwner', 'appCityName', 'appStreetName', 'appHouseNumber',
                    'appHouseCorpusNumber', 'appNumber')
    list_editable = ('appOwner', 'appCityName', 'appStreetName', 'appHouseNumber',
                    'appHouseCorpusNumber', 'appHouseNumberOfFloors', 'appFloorNumber', 'appNumber',
                    'appNumberOfSquare', 'appNumberOfRooms', 'appNumberOfBedrooms', 'appShortDiscription',
                    'appMaxGuests')
    list_filter = ('appOwner', 'appCityName', 'appStreetName', 'appHouseNumber',
                    'appHouseCorpusNumber', 'appHouseNumberOfFloors', 'appFloorNumber', 'appNumber',
                    'appNumberOfSquare', 'appNumberOfRooms', 'appNumberOfBedrooms', 'appShortDiscription',
                    'appMaxGuests', 'appPricePerPerson')
admin.site.register(ApartmentsList, ApartmentsListAdmin)













# 6e1DwXHNBsA5JNVFE26qBwY0bjJ8uatKxsbbAwO8nt26Bs5zD6gcvlY4gYXfzPAGgn8nNiJp93PIz8t35JaETe2d3xY1jwSq3gOovEBJHWvAGDoCeK3DsUJAbMlNjPYW
