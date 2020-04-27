# Squirrels of Central Park

## Summary
In October 2018, 323 volunteer Squirrel Sighters representing [Squirrel Census](https://www.thesquirrelcensus.com/) counted the Eastern gray squirrels in Central Park. This projects aims to visualize the data in a playful way that embodies the spirit of the project.

## Functionality & MVP
In Squirrels of Central Park, users will be able to:
+ [ ] see the prevalance of different colored squirrels mapped over Central Park
+ [ ] see fun details about other environmental details recorded during the sighting on click
+ [ ] plot squirrels sightings over time

Data will be sourced from two APIs available on NYC OpenData: 
+ [ ] [API for anonymized sightings data](https://data.cityofnewyork.us/resource/ej9h-v6g2.json) with focus on environmental details
+ [ ] [API for volunteer sightings data](https://data.cityofnewyork.us/resource/vfnx-vebw.geojson) with focus on color and coordinates

## Implementation Timeline

### Phase 1: Research D3, Collect Images (1 day)
+ Investigate the way to utilize D3 to visualize data 
+ Collect/create images to use for visualization

### Phase 2: Graph volunteer collected sightings over map (2 days)
+ Insert color based geolocation map for volunteer data
+ Enable search by color and date for geolocation map
+ Stylize data with squirrel images

### Phase 3: Graph anonymous sightings over time (2 days)
+ Insert sightings plotted over time with anonymous user data
+ Enable search by date with anonymous user data
+ Use images to visualize the weather and other environmental conditions at time of anonyous sightings

## Technology Used
+ Javascript
+ D3
+ Leaflet.js