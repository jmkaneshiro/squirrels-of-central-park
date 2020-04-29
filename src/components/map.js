import "../config/keys";


export function Map() {
  const MAPBOX_TOKEN = require("../config/keys").MAPBOX_TOKEN;
  const squirrelMap = L.map('mapid');
  //Add icons for each squirrel type
  const SquirrelIcon = L.Icon.extend({
    options: {
      iconSize: [20, 20], // size of icon
      iconAnchor: [10, 20], // set anchor relative to icon
      popupAnchor: [5, -18] //set popup relative to anchor
    }
  });

  const graySquirrelIcon = new SquirrelIcon({ iconUrl: "/assets/map_icons/gray-squirrel-icon.svg" }),
        cinnamonSquirrelIcon = new SquirrelIcon({ iconUrl: "/assets/map_icons/cinnamon-squirrel-icon.svg" }),
        blackSquirrelIcon = new SquirrelIcon({ iconUrl: "/assets/map_icons/black-squirrel-icon.svg" });

  function defaultPopup(feature, layer) {
    const { primary_fur_color, shift, foraging, climbing, running } = feature.properties;

    const dateString = feature.properties.date.replace(/(\d{2})(\d{2})(\d+)/, '$1/$2/$3');
    const date = new Date(dateString);

    layer.bindPopup(
      `<h2>Details<h2>
        <ul>
          <li>Date: ${dateString}</li>
          <li>Fur Color: ${primary_fur_color}</li>
          <li>Shift: ${shift}</li>
          <li>Foraging: ${foraging}</li>
          <li>Running: ${running}</li>
          <li>Climibing: ${climbing}</li>
        </ul>`
    );
  }

  // Create base tile for map
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom: 14,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: `${MAPBOX_TOKEN}`
  }).addTo(squirrelMap);

  // Plot squirrel markers and popups on mapwhen geoJSON is loaded from Api
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://data.cityofnewyork.us/resource/vfnx-vebw.geojson');
  xhr.onload = () => {
    const data = JSON.parse(xhr.response);

    const blackSquirrels = L.geoJSON(data, {
      filter: function(feature, layer) {
         return feature.properties.primary_fur_color === "Black";
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: blackSquirrelIcon
        });
      },
      onEachFeature: defaultPopup
    });

    const cinnamonSquirrels = L.geoJSON(data, {
      filter: function (feature, layer) {
        return feature.properties.primary_fur_color === "Cinnamon";
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: cinnamonSquirrelIcon
        });
      },
      onEachFeature: defaultPopup
    });

    const graySquirrels = L.geoJSON(data, {
      filter: function (feature, layer) {
        return feature.properties.primary_fur_color === "Gray";
      },
      pointToLayer: function (feature, latlng) {
        return L.marker(latlng, {
          icon: graySquirrelIcon
        });
      },
      onEachFeature: defaultPopup
    });

    const allSquirrels = L.geoJSON(data, {
      //Set squirrel icon based on geoJSON property primary_fur_color
      pointToLayer: function (feature, latlng) {
        const primaryFurColor = feature.properties.primary_fur_color;
        if (primaryFurColor === "Cinnamon") {
          return L.marker(latlng, { icon: cinnamonSquirrelIcon });
        } else if (primaryFurColor === "Black") {
          return L.marker(latlng, { icon: blackSquirrelIcon });
        } else {
          return L.marker(latlng, { icon: graySquirrelIcon });
        }
      }
    });

    squirrelMap.fitBounds(allSquirrels.getBounds(), {
      padding: [20,20]
    });

    squirrelMap.addLayer(blackSquirrels);
    squirrelMap.addLayer(cinnamonSquirrels);
    squirrelMap.addLayer(graySquirrels);
    //change squirrel filter on click
    const filterFurBlack = document.getElementById('filter-fur-black');
    const filterFurCinnamon = document.getElementById('filter-fur-cinnamon');
    const filterFurGray = document.getElementById('filter-fur-gray');

    filterFurBlack.addEventListener('change', function () {
      if (this.checked) {
        squirrelMap.addLayer(blackSquirrels);
      } else {
        squirrelMap.removeLayer(blackSquirrels);
      }
    });

    filterFurCinnamon.addEventListener('change', function () {
      if (this.checked) {
        squirrelMap.addLayer(cinnamonSquirrels);
      } else {
        squirrelMap.removeLayer(cinnamonSquirrels);
      }
    });

    filterFurGray.addEventListener('change', function () {
      if (this.checked) {
        squirrelMap.addLayer(graySquirrels);
      } else {
        squirrelMap.removeLayer(graySquirrels);
      }
    });
  };
  xhr.send();
}