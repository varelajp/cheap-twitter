# Generated by Django 3.2.8 on 2021-10-08 20:00

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('cheaptwitter', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tweets',
            old_name='TweetAuthor',
            new_name='tweet_author',
        ),
        migrations.RenameField(
            model_name='tweets',
            old_name='TweetContent',
            new_name='tweet_content',
        ),
        migrations.RenameField(
            model_name='tweets',
            old_name='TweetId',
            new_name='tweet_id',
        ),
        migrations.AddField(
            model_name='tweets',
            name='tweet_date',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
