import "./styles/index.scss";
import "./config/keys";
import { Map } from './components/map';

window.addEventListener("DOMContentLoaded", () => {
  const map = document.querySelector("[component=map");
  new Map(map);
});