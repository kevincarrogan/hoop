from django.db import models


class Place(models.Model):
    building_unit = models.CharField(max_length=255)
    building_name = models.CharField(max_length=255, null=True)
    street_number = models.CharField(max_length=255)
    street_name = models.CharField(max_length=255)
    town = models.CharField(max_length=255)
    postcode = models.CharField(max_length=255)
