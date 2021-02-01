# Generated by Django 3.1.4 on 2021-01-31 21:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('elearningapp', '0019_auto_20210131_2111'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='question',
            name='hint_text',
        ),
        migrations.AddField(
            model_name='answer',
            name='text_source',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='question',
            name='solution_text_source',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='question',
            name='source_text',
            field=models.TextField(default=''),
        ),
        migrations.AlterField(
            model_name='answer',
            name='text',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='question',
            name='solution_text',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='question',
            name='text',
            field=models.TextField(),
        ),
    ]