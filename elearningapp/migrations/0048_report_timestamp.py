# Generated by Django 3.1.6 on 2021-02-08 19:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('elearningapp', '0047_report'),
    ]

    operations = [
        migrations.AddField(
            model_name='report',
            name='timestamp',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
