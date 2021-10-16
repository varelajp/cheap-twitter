from django.urls import path

from . import views


app_name = 'cheaptwitter'
urlpatterns = [
    # ex: /
    path('', views.index, name='index'),
    # ex: /get_tweets
    path('get_tweets/', views.get_tweets, name='get_tweets'),
]
