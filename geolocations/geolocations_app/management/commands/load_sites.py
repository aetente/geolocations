import os
import xlrd
from django.core.management import BaseCommand
import json
from geolocations_app.models import Site
from django.contrib.gis.geos import Polygon


class Command(BaseCommand):

    def add_arguments(self, parser):
        parser.add_argument('--path', type=str)

    def handle(self, *args, **kwargs):
        path = kwargs['path']
        # go through the file and save objects one by one
        if os.path.isfile(path):
            json_data = open(path)
            sites_data = json.load(json_data)

            for s in sites_data:
                the_site = Site.objects.create(
                    title=s['title'],
                    polygon=Polygon(s['points'])
                )
                the_site.save()

            json_data.close()
