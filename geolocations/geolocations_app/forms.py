from django import forms
from django.contrib.gis.forms import OSMWidget, PointField


class HazardForm(forms.Form):
    title = forms.CharField(label='title', max_length=100)
    # I tried to understand how to use OSMWidget, but don't have enough time, so point is set with number fields
    # loc = PointField(widget=OSMWidget(attrs={
    #     'default_lat': 35,
    #     'default_lon': 35
    # }))
    lat = forms.FloatField(label='form_lat', min_value=-90, max_value=90, required=True, widget=forms.NumberInput(
        attrs={'id': 'form_lat', 'step': "0.0001"}))
    lon = forms.FloatField(label='form_lon', min_value=-90, max_value=90, required=True, widget=forms.NumberInput(
        attrs={'id': 'form_lon', 'step': "0.0001"}))
