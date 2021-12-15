from django.contrib.gis.db import models


class Site(models.Model):
    #   Create model called Site with
    #       title (text, up to 100 characters)
    #       Polygon (default srid)

    title = models.CharField(max_length=64)
    polygon = models.PolygonField()

    def __str__(self):
        return f'{self.title}'

    def get_absolute_url(self):
        # Hint: use the __str__ of Site and get_absolute_url()
        # i guess here I shoud have used str method instead of self.title
        return f"/get/site/details/{self.title}/"


class Hazard(models.Model):
    point = models.PointField()
    title = models.CharField(max_length=64)
    # auto_now_add=True the time is set current at moment of creating
    creation_time = models.DateTimeField(auto_now_add=True)

    def get_absolute_url(self):
        # i decided to go with id for hazards
        # in production probably not good idea, but for quick test seems not so bad
        return f"/get/hazard/details/{self.id}/"
