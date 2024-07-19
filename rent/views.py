from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework.response import Response
from . import models
from .models import User
from rest_framework.exceptions import AuthenticationFailed
import jwt, datetime


# Create your views here.

class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('Пользователь не найден')

        #if not user.check_password(password):
        #    raise AuthenticationFailed('Неверный пароль')

        # payload - полезная нагрузка
        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=300), # время жизни токена успешного логина - то есть по истечении этого времени потребуется повторный вход
            'iat': datetime.datetime.utcnow() # временнАя зона
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256').decode('utf-8') # jwt авторизация. создаем токен с первой полезной нагрузкой и вторым параметром - секрет. используем стандартный алгоритм HS256 для rest_framework

        response = Response() # возвращаем jwt токен через cookie файлы взамен БЛОК 1 (см. ниже). Мы сделали ключ jwt, который будет храниться в файле cookie и значенимем установили наш токен
        response.set_cookie(key='jwt', value=token, httponly=True) # True  прописали для того, чтобы наша серверная часть не путалась с визуальной частью и не имела доступа к нашему токену
        response.data = {
            'jwt': token
        }

        return response

#        return Response({
#            'message': 'Успешно' # использовали для проверки корректности срабатывания   if not user.check_password(password):
#        })
#        return Response({ # БЛОК 1
#            'jwt': token
#        })


# С помощью файлов cookie будем получать данные для пользователя
class UserView(APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt') # получаем из файла cookie наш jwt ключ

        if not token: # если токен не установлен - обрабатываем исключение
            raise AuthenticationFailed('Не прошедший проверку подлинности') # так мы пытаемся получить полезную нагрузку (PAYLOAD) от jwt с первым параментом токен и вторым параментом секрет
        try:
            payload = jwt.decode(token, 'secret', algorithms=['HS256'])
        except jwt.ExpiredSignatureError: # ошибка для истечения времени нашего токена
            raise AuthenticationFailed('Не прошедший проверку подлинности')

        user = User.objects.filter(id=payload['id']).first() # получаем данные нашего пользователя из jwt ключа, который равен полученным данным и будем передавать ему полезную нагрузку
        serializer = UserSerializer(user)

        #return Response(token)
        return Response(serializer.data) # возвращаем данные

class Logout(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'Успешно (логаут)'
        }

        return response

# Create your views here.
