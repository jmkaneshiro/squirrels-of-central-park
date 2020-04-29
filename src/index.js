import "./styles/index.scss";
import "./config/keys";
import { Map } from './components/map';

const MAPBOX_TOKEN = require("./config/keys").MAPBOX_TOKEN;

window.addEventListener("DOMContentLoaded", () => {
  const map = document.querySelector("[component=map");
  new Map(map);
});