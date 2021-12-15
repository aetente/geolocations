from rest_framework import serializers
from geolocations_app.models import Site, Hazard
import datetime


class SiteSerializer(serializers.ModelSerializer):

    polygon_json = serializers.SerializerMethodField()

    class Meta:
        model = Site
        fields = ("id", "title", "polygon", "polygon_json")
        lookup_field = "title"

    # I guessed the point was to return json representation of polygon
    def get_polygon_json(self, obj):
        return obj.polygon.geojson


class SiteUrlSerializer(serializers.ModelSerializer):

    class Meta:
        model = Site
        fields = ("web_url",)

    web_url = serializers.SerializerMethodField()

    # return url which is used to look at details
    def get_web_url(self, obj):
        return obj.get_absolute_url()


class HazardSerializer(serializers.ModelSerializer):

    point_json = serializers.SerializerMethodField()

    class Meta:
        model = Hazard
        fields = ("id", "title", "point", "point_json", "creation_time")

    # the same idea as for site serializer

    def get_point_json(self, obj):
        return obj.point.geojson

    def create(self, validated_data):
        return Hazard.objects.create(**validated_data)


class HazardUrlSerializer(serializers.ModelSerializer):

    class Meta:
        model = Hazard
        fields = ("web_url",)

    web_url = serializers.SerializerMethodField()

    # the same idea as for site serializer
    def get_web_url(self, obj):
        return obj.get_absolute_url()
