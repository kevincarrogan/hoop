# Generated by Django 2.1.7 on 2019-02-17 16:39

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Place',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('building_unit', models.CharField(max_length=255)),
                ('building_number', models.CharField(max_length=255)),
                ('street_number', models.CharField(max_length=255)),
                ('street_name', models.CharField(max_length=255)),
                ('town', models.CharField(max_length=255)),
                ('postcode', models.CharField(max_length=255)),
            ],
        ),
    ]
