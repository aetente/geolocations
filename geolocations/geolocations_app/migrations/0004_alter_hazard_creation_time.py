# Generated by Django 3.2.8 on 2021-12-15 10:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('geolocations_app', '0003_hazard'),
    ]

    operations = [
        migrations.AlterField(
            model_name='hazard',
            name='creation_time',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]