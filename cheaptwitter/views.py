from django.http.response import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from .models import Tweet

from rest_framework.parsers import JSONParser

from .serializers import TweetSerializer

@csrf_exempt
def index(request):
    if request.method == 'GET':
        return render(request, "cheaptwitter/index.html")
    elif request.method == 'POST':
        tweet_data = JSONParser().parse(request)
        tweets_serializer = TweetSerializer(data=tweet_data)
        if tweets_serializer.is_valid():
            tweets_serializer.save()
            return JsonResponse("Tweet sent", safe=False)
        return JsonResponse("Failed to sent", safe=False)

@csrf_exempt
def get_tweets(request):
    tweets = Tweet.objects.all().order_by('-date', 'author')
    tweets_serializer = TweetSerializer(tweets, many=True)
    return JsonResponse(tweets_serializer.data, safe=False)
