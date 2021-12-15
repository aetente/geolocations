# geolocations

Geolocations app using GeoDjango.

the sctructure:

there are two models: Site and Hazard

Site is a polygon on the map

Hazard is a dot

for the frontend:

on the root you can choose to open list of hazards or sites

/sites gives a list of sites where you can click on one and it should open Map component and show it on the map

/hazards is the same as /sites but for hazards (click on hazard, not implemented)

/map is the map component to look at site you clicked on

there are also comments in the code, just in case

# Installation instructions:

Backend

Start with:
```
pip install -r .\requirements.txt
```

Then just in case run:
```
python manage.py makemigrations
python manage.py migrate
```

After it run this to add sites from json file:
```
python manage.py load_sites --path .\sites.json
```

And then you should be able to run:
```
python manage.py runserver
```



Frontend:

Run:
```
npm install
```

And then:
```
npm start
```
