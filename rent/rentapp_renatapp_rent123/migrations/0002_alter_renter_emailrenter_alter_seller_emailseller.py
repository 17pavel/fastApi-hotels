# Generated by Django 5.0.6 on 2024-06-06 19:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rent', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='renter',
            name='emailRenter',
            field=models.EmailField(max_length=50, unique=True),
        ),
        migrations.AlterField(
            model_name='seller',
            name='emailSeller',
            field=models.EmailField(max_length=50, unique=True),
        ),
    ]
