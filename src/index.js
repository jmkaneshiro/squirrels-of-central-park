import "./styles/index.scss";
import "./config/keys";


const MAPBOX_TOKEN = require("./config/keys").MAPBOX_TOKEN;

window.addEventListener("DOMContentLoaded", () => {
  //Center of map set to 86th Street Central Park
  const squirrelMap = L.map('mapid').setView([40.782864, -73.965355], 15);

  L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${MAPBOX_TOKEN}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
  }).addTo(squirrelMap);
});