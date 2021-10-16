# Generated by Django 3.2.8 on 2021-10-08 21:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cheaptwitter', '0003_rename_tweets_tweet'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tweet',
            old_name='tweet_author',
            new_name='author',
        ),
        migrations.RenameField(
            model_name='tweet',
            old_name='tweet_content',
            new_name='content',
        ),
        migrations.RenameField(
            model_name='tweet',
            old_name='tweet_date',
            new_name='date',
        ),
        migrations.RenameField(
            model_name='tweet',
            old_name='tweet_id',
            new_name='id',
        ),
    ]