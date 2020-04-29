import "./styles/index.scss";
import "./config/keys";


const MAPBOX_TOKEN = require("./config/keys").MAPBOX_TOKEN;

window.addEventListener("DOMContentLoaded", () => {
  //Center of map set to 86th Street Central Park
  const squirrelMap = L.map('mapid').setView([40.782864, -73.965355], 15);


  const cinnamonSquirrelIcon = L.icon ({
    iconUrl: "/assets/map_icons/cinnamon-squirrel-icon.svg",

    iconSize: [20, 20], // size of icon
    iconAnchor: [10, 20], // set anchor relative to icon
    popupAnchor: [5, -18] //set popup relative to anchor
  });

  const graySquirrelIcon = L.icon({
    iconUrl: "/assets/map_icons/gray-squirrel-icon.svg",

    iconSize: [20, 20], // size of icon
    iconAnchor: [10, 20], // set anchor relative to icon
    popupAnchor: [5, -18] //set popup relative to anchor
  });

  const blackSquirrelIcon = L.icon({
    iconUrl: "/assets/map_icons/black-squirrel-icon.svg",

    iconSize: [20, 20], // size of icon
    iconAnchor: [10, 20], // set anchor relative to icon
    popupAnchor: [5, -18] //set popup relative to anchor
  });

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom: 14,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: `${ MAPBOX_TOKEN }`
  }).addTo(squirrelMap);

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://data.cityofnewyork.us/resource/vfnx-vebw.geojson');
  xhr.onload = () => {
    const data = JSON.parse(xhr.response);
    L.geoJSON(data, {
      pointToLayer: function (feature, latlng) {
        const primaryFurColor = feature.properties.primary_fur_color;
        if (primaryFurColor === "Cinnamon") {
          return L.marker(latlng, { icon: cinnamonSquirrelIcon });
        } else if (primaryFurColor === "Black") {
          return L.marker(latlng, { icon: blackSquirrelIcon });
        } else {
          return L.marker(latlng, { icon: graySquirrelIcon });
        }
      },
      onEachFeature: function(feature, layer) {
        const { primary_fur_color, shift, foraging, climbing, running } = feature.properties;

        const dateString = feature.properties.date.replace(/(\d{2})(\d{2})(\d+)/ , '$1/$2/$3');
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
    }).addTo(squirrelMap);
  };
  xhr.send();
});