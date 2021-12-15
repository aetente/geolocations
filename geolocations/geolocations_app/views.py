from django.shortcuts import render
from geolocations_app.models import Hazard, Site
from geolocations_app.serializers import SiteSerializer, SiteUrlSerializer, HazardSerializer, HazardUrlSerializer
from rest_framework.views import APIView
from rest_framework import generics, serializers
from rest_framework.response import Response
from rest_framework import status
from django.db import OperationalError
from geolocations_app.forms import HazardForm
from django.contrib.gis.geos import Point


class GetSites(generics.ListCreateAPIView):
    # just for testing
    queryset = Site.objects.all()
    serializer_class = SiteSerializer


class GetSitesUrls(APIView):
    # return list of all sites urls
    def get(self, request, format=None):
        try:
            sites = Site.objects.all()
        except OperationalError:
            return Response({'error': "database is not responding"},
                            status.HTTP_500_INTERNAL_SERVER_ERROR)
        serialized_sites = SiteUrlSerializer(sites, many=True)
        return Response({"items": serialized_sites.data})


class GetSiteDetails(generics.RetrieveAPIView):
    # get details of the site object by its title
    queryset = Site.objects.all()
    serializer_class = SiteSerializer
    lookup_field = "title"


class ListHazards(generics.ListCreateAPIView):
    # it is used to get details of the hazard object by its id
    queryset = Hazard.objects.all()
    serializer_class = HazardSerializer


class GetHazardUrls(APIView):
    # get all hazards urls
    def get(self, request, format=None):
        try:
            hazards = Hazard.objects.all()
        except OperationalError:
            return Response({'error': "database is not responding"},
                            status.HTTP_500_INTERNAL_SERVER_ERROR)
        serialized_hazards = HazardUrlSerializer(hazards, many=True)
        return Response({"items": serialized_hazards.data})


def get_hazard_form(request):
    # it is user for the form
    # render the form
    # if there is post body in the request
    # check the body and try to save new hazard object
    # and then rerender the form
    if request.method == 'POST':
        form = HazardForm(request.POST)
        if form.is_valid():
            serialized_hazard = HazardSerializer(data={
                "title": form.cleaned_data["title"],
                "point": Point([form.cleaned_data["lat"], form.cleaned_data["lon"]])
            })
            if serialized_hazard.is_valid():
                serialized_hazard.save()
            else:
                print("serializer not valid")
                print(serialized_hazard.errors)
            return render(request, 'hazard_form.html')
    else:
        form = HazardForm()

    return render(request, 'hazard_form.html')
