from django.urls import path
from geolocations_app.views import GetSites, GetSitesUrls, GetSiteDetails, GetHazardUrls, ListHazards, get_hazard_form

urlpatterns = [
    # just testing
    path("test/get/sites", GetSites.as_view(),
         name="test get sites"),
    # get list of urls to details of site objects
    path("get/sites", GetSitesUrls.as_view(), name="sites urls"),
    # get details of the site object by its title
    path("get/site/details/<title>/",
         GetSiteDetails.as_view(), name="site details"),
    # get list of urls to details of hazard objects
    path("get/hazards",
         GetHazardUrls.as_view(), name="hazard urls"),
    # get details of the hazard object by its id
    path("get/hazard/details/<int:pk>/",
         ListHazards.as_view(), name="hazard details"),
    # add hazard point
    path("form/hazard", get_hazard_form, name="form hazard")
]
