from rest_framework import routers
from .api import OwnerViewSet, RenterViewSet, CityListViewSet, StreetTypeViewSet, ApartmentsListViewSet, UserViewSet
# from django.urls import path
# from .views import RegisterView, LoginView, UserView, Logout


router = routers.DefaultRouter()
router.register('api/owner', OwnerViewSet, 'owner')
router.register('api/renter', RenterViewSet, 'renter')
router.register('api/cityList', CityListViewSet, 'cityList')
router.register('api/streetType', StreetTypeViewSet, 'streetType')
router.register('api/apartmentsList', ApartmentsListViewSet, 'apartmentsList')
# router.register('api/register', RegisterView.as_view(), 'registerUser')
# router.register('api/login/', LoginView.as_view(), 'loginUser')
router.register('api/user', UserViewSet, 'userUser')
# router.register('api/logout/', Logout.as_view(), 'logoutUser')

urlpatterns = router.urls
