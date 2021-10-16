from django.db import models

class Tweet(models.Model):
    id = models.AutoField(primary_key=True)
    content = models.CharField(max_length=50)
    author = models.CharField(max_length=40)
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.content
