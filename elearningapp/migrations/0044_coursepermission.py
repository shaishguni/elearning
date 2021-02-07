# Generated by Django 3.1.4 on 2021-02-07 13:37

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('elearningapp', '0043_staffaction_timestamp'),
    ]

    operations = [
        migrations.CreateModel(
            name='CoursePermission',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('can_add_questions', models.BooleanField(default=True)),
                ('can_edit_questions', models.BooleanField(default=True)),
                ('can_add_contributors', models.BooleanField(default=False)),
                ('can_edit_contributors', models.BooleanField(default=False)),
                ('course', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='elearningapp.course')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
