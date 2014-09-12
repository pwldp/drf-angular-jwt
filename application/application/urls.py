from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'application.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
)

#
# from DRF tutorial
#
from django.conf.urls import url, include
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets

# Serializers define the API representation.
class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'is_staff')

# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browseable API.
urlpatterns+= patterns(
    '',
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
)


#
# DRF JWT
#
urlpatterns+= patterns(
    '',
    url(r'^api/token-auth/', 'rest_framework_jwt.views.obtain_jwt_token'),
)

#
# Server AngularJS frontend
#
from django.views.generic import TemplateView

urlpatterns+= patterns(
    '',
    url(r'^$', TemplateView.as_view(template_name='index.html'), name="home"),  # see TEMPLATE_DIRS and STATICFILES_DIRS in settings.py
)
#
# http://blog.kevinastone.com/getting-started-with-django-rest-framework-and-angularjs.html
#