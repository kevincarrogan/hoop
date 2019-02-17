from django.conf.urls import include, url

from . import views


urlpatterns = [
    url(r'^$', views.PlacesView.as_view(), name='places'),
]
