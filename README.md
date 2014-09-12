drf-angular-jwt
===============

DjangoRestFramework + Angularjs + JWT


Simple application boilerplate using: 

* [Django Rest Framwork](http://www.django-rest-framework.org/)
* [AngularJS](https://angularjs.org/)
* [JSON Web Token JWT](https://auth0.com/blog/2014/01/07/angularjs-authentication-with-cookies-vs-token/) provided by [Django REST framework JWT Auth](https://github.com/GetBlimp/django-rest-framework-jwt)



## Examples


* Get token:
```curl -X POST -d "username=admin&password=abc123" http://localhost:8000/api/token-auth/```


* Get users list:
```curl -H "Authorization: JWT <TOKEN>" http://localhost:8000/api/users/```


