# Generated by Django 3.1.7 on 2021-02-23 17:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
        ('elearningapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='coursepermission',
            name='user',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, to='users.coursespecificprofile'),
        ),
    ]