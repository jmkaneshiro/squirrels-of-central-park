import "./styles/index.scss";
import "./config/keys";
import { Map } from './components/map';
import { Graph } from './components/graph';
import { Stories } from './components/stories';

window.addEventListener("DOMContentLoaded", () => {
  const map = document.querySelector("[component=map");
  new Map(map);
  new Stories();

  document.getElementById("squirrel-mascot").addEventListener("click", function () {
    document.getElementById("squirrel-mascot").classList.toggle("rotate-counter-clock-on-click");
  });
});

