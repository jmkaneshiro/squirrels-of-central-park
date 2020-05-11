/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/map_icons/black-squirrel-icon.svg":
/*!******************************************************!*\
  !*** ./src/assets/map_icons/black-squirrel-icon.svg ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/images/black-squirrel-icon.svg");

/***/ }),

/***/ "./src/assets/map_icons/cinnamon-squirrel-icon.svg":
/*!*********************************************************!*\
  !*** ./src/assets/map_icons/cinnamon-squirrel-icon.svg ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/images/cinnamon-squirrel-icon.svg");

/***/ }),

/***/ "./src/assets/map_icons/gray-squirrel-icon.svg":
/*!*****************************************************!*\
  !*** ./src/assets/map_icons/gray-squirrel-icon.svg ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dist/images/gray-squirrel-icon.svg");

/***/ }),

/***/ "./src/components/map.js":
/*!*******************************!*\
  !*** ./src/components/map.js ***!
  \*******************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return Map; });
/* harmony import */ var _assets_map_icons_gray_squirrel_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/map_icons/gray-squirrel-icon.svg */ "./src/assets/map_icons/gray-squirrel-icon.svg");
/* harmony import */ var _assets_map_icons_black_squirrel_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/map_icons/black-squirrel-icon.svg */ "./src/assets/map_icons/black-squirrel-icon.svg");
/* harmony import */ var _assets_map_icons_cinnamon_squirrel_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/map_icons/cinnamon-squirrel-icon.svg */ "./src/assets/map_icons/cinnamon-squirrel-icon.svg");
// import "../config/keys";



function Map() {
  // Need following line if mapbox used
  // const MAPBOX_TOKEN = require("../config/keys").MAPBOX_TOKEN;
  var squirrelMap = L.map('mapid'); //Add icons for each squirrel type

  var SquirrelIcon = L.Icon.extend({
    options: {
      iconSize: [20, 20],
      // size of icon
      iconAnchor: [10, 20],
      // set anchor relative to icon
      popupAnchor: [5, -18] //set popup relative to anchor

    }
  });
  var graySquirrelIcon = new SquirrelIcon({
    iconUrl: _assets_map_icons_gray_squirrel_icon_svg__WEBPACK_IMPORTED_MODULE_0__["default"]
  }),
      cinnamonSquirrelIcon = new SquirrelIcon({
    iconUrl: _assets_map_icons_cinnamon_squirrel_icon_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
  }),
      blackSquirrelIcon = new SquirrelIcon({
    iconUrl: _assets_map_icons_black_squirrel_icon_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
  });

  function defaultPopup(feature, layer) {
    var _feature$properties = feature.properties,
        primary_fur_color = _feature$properties.primary_fur_color,
        shift = _feature$properties.shift,
        foraging = _feature$properties.foraging,
        climbing = _feature$properties.climbing,
        running = _feature$properties.running;
    var dateString = feature.properties.date.replace(/(\d{2})(\d{2})(\d+)/, '$1/$2/$3');
    var date = new Date(dateString);
    layer.bindPopup("<h2>Details<h2>\n        <ul>\n          <li>Date: ".concat(dateString, "</li>\n          <li>Fur Color: ").concat(primary_fur_color, "</li>\n          <li>Shift: ").concat(shift, "</li>\n          <li>Foraging: ").concat(foraging, "</li>\n          <li>Running: ").concat(running, "</li>\n          <li>Climibing: ").concat(climbing, "</li>\n        </ul>"));
  } //For a prettier map, consider using Mapbox in the future
  //Mapbox requires you to have an account and unique API key
  // L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  //   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  //   maxZoom: 18,
  //   minZoom: 14,
  //   id: 'mapbox/streets-v11',
  //   tileSize: 512,
  //   zoomOffset: -1,
  //   accessToken: `${MAPBOX_TOKEN}`
  // }).addTo(squirrelMap);
  // Create base tile for map with openstreetmap


  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
    maxZoom: 18,
    minZoom: 14,
    tileSize: 512,
    zoomOffset: -1
  }).addTo(squirrelMap); // Plot squirrel markers and popups on mapwhen geoJSON is loaded from Api

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://data.cityofnewyork.us/resource/vfnx-vebw.geojson');

  xhr.onload = function () {
    var data = JSON.parse(xhr.response);
    var blackSquirrels = L.geoJSON(data, {
      filter: function filter(feature, layer) {
        return feature.properties.primary_fur_color === "Black";
      },
      pointToLayer: function pointToLayer(feature, latlng) {
        return L.marker(latlng, {
          icon: blackSquirrelIcon
        });
      },
      onEachFeature: defaultPopup
    });
    var cinnamonSquirrels = L.geoJSON(data, {
      filter: function filter(feature, layer) {
        return feature.properties.primary_fur_color === "Cinnamon";
      },
      pointToLayer: function pointToLayer(feature, latlng) {
        return L.marker(latlng, {
          icon: cinnamonSquirrelIcon
        });
      },
      onEachFeature: defaultPopup
    });
    var graySquirrels = L.geoJSON(data, {
      filter: function filter(feature, layer) {
        return feature.properties.primary_fur_color === "Gray";
      },
      pointToLayer: function pointToLayer(feature, latlng) {
        return L.marker(latlng, {
          icon: graySquirrelIcon
        });
      },
      onEachFeature: defaultPopup
    });
    var allSquirrels = L.geoJSON(data, {
      //Set squirrel icon based on geoJSON property primary_fur_color
      pointToLayer: function pointToLayer(feature, latlng) {
        var primaryFurColor = feature.properties.primary_fur_color;

        if (primaryFurColor === "Cinnamon") {
          return L.marker(latlng, {
            icon: cinnamonSquirrelIcon
          });
        } else if (primaryFurColor === "Black") {
          return L.marker(latlng, {
            icon: blackSquirrelIcon
          });
        } else {
          return L.marker(latlng, {
            icon: graySquirrelIcon
          });
        }
      }
    });
    squirrelMap.fitBounds(allSquirrels.getBounds(), {
      padding: [20, 20]
    });
    squirrelMap.addLayer(blackSquirrels);
    squirrelMap.addLayer(cinnamonSquirrels);
    squirrelMap.addLayer(graySquirrels); //change squirrel filter on click

    var filterFurBlack = document.getElementById('filter-fur-black');
    var filterFurCinnamon = document.getElementById('filter-fur-cinnamon');
    var filterFurGray = document.getElementById('filter-fur-gray');
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

/***/ }),

/***/ "./src/components/stories.js":
/*!***********************************!*\
  !*** ./src/components/stories.js ***!
  \***********************************/
/*! exports provided: Stories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stories", function() { return Stories; });
function Stories() {
  var fetchRandomStory = function fetchRandomStory(elementId) {
    return fetch('https://data.cityofnewyork.us/resource/gfqj-f768.json').then(function (response) {
      return response.json();
    }).then(function (data) {
      return document.getElementById(elementId).innerHTML = data[Math.floor(Math.random() * data.length)].note_squirrel_park_stories;
    });
  };

  fetchRandomStory('story-details-front');
  var card = document.getElementById('card');
  document.getElementById('card-front').addEventListener('click', function () {
    fetchRandomStory('story-details-back');
    card.classList.toggle('flipped');
  }, false);
  document.getElementById('card-back').addEventListener('click', function () {
    fetchRandomStory('story-details-front');
    card.classList.toggle('flipped');
  }, false);
}

/***/ }),

/***/ "./src/config/keys.js":
/*!****************************!*\
  !*** ./src/config/keys.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./keys_dev */ "./src/config/keys_dev.js");
}

/***/ }),

/***/ "./src/config/keys_dev.js":
/*!********************************!*\
  !*** ./src/config/keys_dev.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  MAPBOX_TOKEN: "pk.eyJ1Ijoiam1rYW5lc2hpcm8iLCJhIjoiY2s5azBxODVjMW9hdzNlcDQzM2p1ZmthaCJ9.aeXUL6_5SqaJUPk1rxnR6g"
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/keys */ "./src/config/keys.js");
/* harmony import */ var _config_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/map */ "./src/components/map.js");
/* harmony import */ var _components_stories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/stories */ "./src/components/stories.js");




window.addEventListener("DOMContentLoaded", function () {
  var map = document.querySelector("[component=map");
  new _components_map__WEBPACK_IMPORTED_MODULE_2__["Map"](map);
  new _components_stories__WEBPACK_IMPORTED_MODULE_3__["Stories"]();
  document.getElementById("squirrel-mascot").addEventListener("click", function (e) {
    e.currentTarget.classList.toggle("rotate-counter-clock-on-click");
  });
});

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tYXBfaWNvbnMvYmxhY2stc3F1aXJyZWwtaWNvbi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tYXBfaWNvbnMvY2lubmFtb24tc3F1aXJyZWwtaWNvbi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tYXBfaWNvbnMvZ3JheS1zcXVpcnJlbC1pY29uLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3Rvcmllcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9rZXlzX2Rldi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2M4MDciXSwibmFtZXMiOlsiTWFwIiwic3F1aXJyZWxNYXAiLCJMIiwibWFwIiwiU3F1aXJyZWxJY29uIiwiSWNvbiIsImV4dGVuZCIsIm9wdGlvbnMiLCJpY29uU2l6ZSIsImljb25BbmNob3IiLCJwb3B1cEFuY2hvciIsImdyYXlTcXVpcnJlbEljb24iLCJpY29uVXJsIiwiZ3JheVNxdWlycmVsSW1nIiwiY2lubmFtb25TcXVpcnJlbEljb24iLCJjaW5uYW1vblNxdWlycmVsSW1nIiwiYmxhY2tTcXVpcnJlbEljb24iLCJibGFja1NxdWlycmVsSW1nIiwiZGVmYXVsdFBvcHVwIiwiZmVhdHVyZSIsImxheWVyIiwicHJvcGVydGllcyIsInByaW1hcnlfZnVyX2NvbG9yIiwic2hpZnQiLCJmb3JhZ2luZyIsImNsaW1iaW5nIiwicnVubmluZyIsImRhdGVTdHJpbmciLCJkYXRlIiwicmVwbGFjZSIsIkRhdGUiLCJiaW5kUG9wdXAiLCJ0aWxlTGF5ZXIiLCJhdHRyaWJ1dGlvbiIsIm1heFpvb20iLCJtaW5ab29tIiwidGlsZVNpemUiLCJ6b29tT2Zmc2V0IiwiYWRkVG8iLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJvbmxvYWQiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2UiLCJibGFja1NxdWlycmVscyIsImdlb0pTT04iLCJmaWx0ZXIiLCJwb2ludFRvTGF5ZXIiLCJsYXRsbmciLCJtYXJrZXIiLCJpY29uIiwib25FYWNoRmVhdHVyZSIsImNpbm5hbW9uU3F1aXJyZWxzIiwiZ3JheVNxdWlycmVscyIsImFsbFNxdWlycmVscyIsInByaW1hcnlGdXJDb2xvciIsImZpdEJvdW5kcyIsImdldEJvdW5kcyIsInBhZGRpbmciLCJhZGRMYXllciIsImZpbHRlckZ1ckJsYWNrIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZpbHRlckZ1ckNpbm5hbW9uIiwiZmlsdGVyRnVyR3JheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGVja2VkIiwicmVtb3ZlTGF5ZXIiLCJzZW5kIiwiU3RvcmllcyIsImZldGNoUmFuZG9tU3RvcnkiLCJlbGVtZW50SWQiLCJmZXRjaCIsInRoZW4iLCJqc29uIiwiaW5uZXJIVE1MIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwibm90ZV9zcXVpcnJlbF9wYXJrX3N0b3JpZXMiLCJjYXJkIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicHJvY2VzcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiTUFQQk9YX1RPS0VOIiwid2luZG93IiwicXVlcnlTZWxlY3RvciIsImUiLCJjdXJyZW50VGFyZ2V0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFF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QWYsQ0FBc0IsU0FBdEI7QUFDRCxHQUhELEVBR0csS0FISDtBQUlELEM7Ozs7Ozs7Ozs7O0FDckJELElBQUlDLEtBQUosRUFBMkMsRUFBM0MsTUFFTztBQUNMQyxRQUFNLENBQUNDLE9BQVAsR0FBaUJDLG1CQUFPLENBQUMsNENBQUQsQ0FBeEI7QUFDRCxDOzs7Ozs7Ozs7OztBQ0pERixNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZkUsY0FBWSxFQUNWO0FBRmEsQ0FBakIsQzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQyxNQUFNLENBQUN4QixnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsWUFBTTtBQUNoRCxNQUFNakUsR0FBRyxHQUFHNkQsUUFBUSxDQUFDNkIsYUFBVCxDQUF1QixnQkFBdkIsQ0FBWjtBQUNBLE1BQUk3RixtREFBSixDQUFRRyxHQUFSO0FBQ0EsTUFBSXFFLDJEQUFKO0FBRUFSLFVBQVEsQ0FBQ0MsY0FBVCxDQUF3QixpQkFBeEIsRUFBMkNHLGdCQUEzQyxDQUE0RCxPQUE1RCxFQUFxRSxVQUFVMEIsQ0FBVixFQUFhO0FBQ2hGQSxLQUFDLENBQUNDLGFBQUYsQ0FBZ0JWLFNBQWhCLENBQTBCQyxNQUExQixDQUFpQywrQkFBakM7QUFDRCxHQUZEO0FBR0QsQ0FSRCxFOzs7Ozs7Ozs7OztBQ0xBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiZGlzdC9pbWFnZXMvYmxhY2stc3F1aXJyZWwtaWNvbi5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvaW1hZ2VzL2Npbm5hbW9uLXNxdWlycmVsLWljb24uc3ZnXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJkaXN0L2ltYWdlcy9ncmF5LXNxdWlycmVsLWljb24uc3ZnXCI7IiwiLy8gaW1wb3J0IFwiLi4vY29uZmlnL2tleXNcIjtcbmltcG9ydCBncmF5U3F1aXJyZWxJbWcgZnJvbSBcIi4uL2Fzc2V0cy9tYXBfaWNvbnMvZ3JheS1zcXVpcnJlbC1pY29uLnN2Z1wiO1xuaW1wb3J0IGJsYWNrU3F1aXJyZWxJbWcgZnJvbSBcIi4uL2Fzc2V0cy9tYXBfaWNvbnMvYmxhY2stc3F1aXJyZWwtaWNvbi5zdmdcIjtcbmltcG9ydCBjaW5uYW1vblNxdWlycmVsSW1nIGZyb20gXCIuLi9hc3NldHMvbWFwX2ljb25zL2Npbm5hbW9uLXNxdWlycmVsLWljb24uc3ZnXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBNYXAoKSB7XG4gIC8vIE5lZWQgZm9sbG93aW5nIGxpbmUgaWYgbWFwYm94IHVzZWRcbiAgLy8gY29uc3QgTUFQQk9YX1RPS0VOID0gcmVxdWlyZShcIi4uL2NvbmZpZy9rZXlzXCIpLk1BUEJPWF9UT0tFTjtcbiAgY29uc3Qgc3F1aXJyZWxNYXAgPSBMLm1hcCgnbWFwaWQnKTtcbiAgLy9BZGQgaWNvbnMgZm9yIGVhY2ggc3F1aXJyZWwgdHlwZVxuICBjb25zdCBTcXVpcnJlbEljb24gPSBMLkljb24uZXh0ZW5kKHtcbiAgICBvcHRpb25zOiB7XG4gICAgICBpY29uU2l6ZTogWzIwLCAyMF0sIC8vIHNpemUgb2YgaWNvblxuICAgICAgaWNvbkFuY2hvcjogWzEwLCAyMF0sIC8vIHNldCBhbmNob3IgcmVsYXRpdmUgdG8gaWNvblxuICAgICAgcG9wdXBBbmNob3I6IFs1LCAtMThdIC8vc2V0IHBvcHVwIHJlbGF0aXZlIHRvIGFuY2hvclxuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgZ3JheVNxdWlycmVsSWNvbiA9IG5ldyBTcXVpcnJlbEljb24oeyBpY29uVXJsOiBncmF5U3F1aXJyZWxJbWcgfSksXG4gICAgY2lubmFtb25TcXVpcnJlbEljb24gPSBuZXcgU3F1aXJyZWxJY29uKHsgaWNvblVybDogY2lubmFtb25TcXVpcnJlbEltZyB9KSxcbiAgICBibGFja1NxdWlycmVsSWNvbiA9IG5ldyBTcXVpcnJlbEljb24oeyBpY29uVXJsOiBibGFja1NxdWlycmVsSW1nIH0pO1xuXG4gIGZ1bmN0aW9uIGRlZmF1bHRQb3B1cChmZWF0dXJlLCBsYXllcikge1xuICAgIGNvbnN0IHsgcHJpbWFyeV9mdXJfY29sb3IsIHNoaWZ0LCBmb3JhZ2luZywgY2xpbWJpbmcsIHJ1bm5pbmcgfSA9IGZlYXR1cmUucHJvcGVydGllcztcblxuICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBmZWF0dXJlLnByb3BlcnRpZXMuZGF0ZS5yZXBsYWNlKC8oXFxkezJ9KShcXGR7Mn0pKFxcZCspLywgJyQxLyQyLyQzJyk7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xuXG4gICAgbGF5ZXIuYmluZFBvcHVwKFxuICAgICAgYDxoMj5EZXRhaWxzPGgyPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPkRhdGU6ICR7ZGF0ZVN0cmluZ308L2xpPlxuICAgICAgICAgIDxsaT5GdXIgQ29sb3I6ICR7cHJpbWFyeV9mdXJfY29sb3J9PC9saT5cbiAgICAgICAgICA8bGk+U2hpZnQ6ICR7c2hpZnR9PC9saT5cbiAgICAgICAgICA8bGk+Rm9yYWdpbmc6ICR7Zm9yYWdpbmd9PC9saT5cbiAgICAgICAgICA8bGk+UnVubmluZzogJHtydW5uaW5nfTwvbGk+XG4gICAgICAgICAgPGxpPkNsaW1pYmluZzogJHtjbGltYmluZ308L2xpPlxuICAgICAgICA8L3VsPmBcbiAgICApO1xuICB9XG4gIC8vRm9yIGEgcHJldHRpZXIgbWFwLCBjb25zaWRlciB1c2luZyBNYXBib3ggaW4gdGhlIGZ1dHVyZVxuICAvL01hcGJveCByZXF1aXJlcyB5b3UgdG8gaGF2ZSBhbiBhY2NvdW50IGFuZCB1bmlxdWUgQVBJIGtleVxuICAvLyBMLnRpbGVMYXllcignaHR0cHM6Ly9hcGkubWFwYm94LmNvbS9zdHlsZXMvdjEve2lkfS90aWxlcy97en0ve3h9L3t5fT9hY2Nlc3NfdG9rZW49e2FjY2Vzc1Rva2VufScsIHtcbiAgLy8gICBhdHRyaWJ1dGlvbjogJ01hcCBkYXRhICZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvXCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzLCA8YSBocmVmPVwiaHR0cHM6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LXNhLzIuMC9cIj5DQy1CWS1TQTwvYT4sIEltYWdlcnkgwqkgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lm1hcGJveC5jb20vXCI+TWFwYm94PC9hPicsXG4gIC8vICAgbWF4Wm9vbTogMTgsXG4gIC8vICAgbWluWm9vbTogMTQsXG4gIC8vICAgaWQ6ICdtYXBib3gvc3RyZWV0cy12MTEnLFxuICAvLyAgIHRpbGVTaXplOiA1MTIsXG4gIC8vICAgem9vbU9mZnNldDogLTEsXG4gIC8vICAgYWNjZXNzVG9rZW46IGAke01BUEJPWF9UT0tFTn1gXG4gIC8vIH0pLmFkZFRvKHNxdWlycmVsTWFwKTtcblxuICAvLyBDcmVhdGUgYmFzZSB0aWxlIGZvciBtYXAgd2l0aCBvcGVuc3RyZWV0bWFwXG4gIEwudGlsZUxheWVyKCdodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZycsIHtcbiAgICBhdHRyaWJ1dGlvbjogJyZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly9vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwIGNvbnRyaWJ1dG9yczwvYT4nLFxuICAgIG1heFpvb206IDE4LFxuICAgIG1pblpvb206IDE0LFxuICAgIHRpbGVTaXplOiA1MTIsXG4gICAgem9vbU9mZnNldDogLTEsXG4gIH0pLmFkZFRvKHNxdWlycmVsTWFwKTtcblxuICAvLyBQbG90IHNxdWlycmVsIG1hcmtlcnMgYW5kIHBvcHVwcyBvbiBtYXB3aGVuIGdlb0pTT04gaXMgbG9hZGVkIGZyb20gQXBpXG4gIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICB4aHIub3BlbignR0VUJywgJ2h0dHBzOi8vZGF0YS5jaXR5b2ZuZXd5b3JrLnVzL3Jlc291cmNlL3ZmbngtdmVidy5nZW9qc29uJyk7XG4gIHhoci5vbmxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlKTtcblxuICAgIGNvbnN0IGJsYWNrU3F1aXJyZWxzID0gTC5nZW9KU09OKGRhdGEsIHtcbiAgICAgIGZpbHRlcjogZnVuY3Rpb24oZmVhdHVyZSwgbGF5ZXIpIHtcbiAgICAgICAgIHJldHVybiBmZWF0dXJlLnByb3BlcnRpZXMucHJpbWFyeV9mdXJfY29sb3IgPT09IFwiQmxhY2tcIjtcbiAgICAgIH0sXG4gICAgICBwb2ludFRvTGF5ZXI6IGZ1bmN0aW9uIChmZWF0dXJlLCBsYXRsbmcpIHtcbiAgICAgICAgcmV0dXJuIEwubWFya2VyKGxhdGxuZywge1xuICAgICAgICAgIGljb246IGJsYWNrU3F1aXJyZWxJY29uXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIG9uRWFjaEZlYXR1cmU6IGRlZmF1bHRQb3B1cFxuICAgIH0pO1xuXG4gICAgY29uc3QgY2lubmFtb25TcXVpcnJlbHMgPSBMLmdlb0pTT04oZGF0YSwge1xuICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoZmVhdHVyZSwgbGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuIGZlYXR1cmUucHJvcGVydGllcy5wcmltYXJ5X2Z1cl9jb2xvciA9PT0gXCJDaW5uYW1vblwiO1xuICAgICAgfSxcbiAgICAgIHBvaW50VG9MYXllcjogZnVuY3Rpb24gKGZlYXR1cmUsIGxhdGxuZykge1xuICAgICAgICByZXR1cm4gTC5tYXJrZXIobGF0bG5nLCB7XG4gICAgICAgICAgaWNvbjogY2lubmFtb25TcXVpcnJlbEljb25cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgb25FYWNoRmVhdHVyZTogZGVmYXVsdFBvcHVwXG4gICAgfSk7XG5cbiAgICBjb25zdCBncmF5U3F1aXJyZWxzID0gTC5nZW9KU09OKGRhdGEsIHtcbiAgICAgIGZpbHRlcjogZnVuY3Rpb24gKGZlYXR1cmUsIGxheWVyKSB7XG4gICAgICAgIHJldHVybiBmZWF0dXJlLnByb3BlcnRpZXMucHJpbWFyeV9mdXJfY29sb3IgPT09IFwiR3JheVwiO1xuICAgICAgfSxcbiAgICAgIHBvaW50VG9MYXllcjogZnVuY3Rpb24gKGZlYXR1cmUsIGxhdGxuZykge1xuICAgICAgICByZXR1cm4gTC5tYXJrZXIobGF0bG5nLCB7XG4gICAgICAgICAgaWNvbjogZ3JheVNxdWlycmVsSWNvblxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBvbkVhY2hGZWF0dXJlOiBkZWZhdWx0UG9wdXBcbiAgICB9KTtcblxuICAgIGNvbnN0IGFsbFNxdWlycmVscyA9IEwuZ2VvSlNPTihkYXRhLCB7XG4gICAgICAvL1NldCBzcXVpcnJlbCBpY29uIGJhc2VkIG9uIGdlb0pTT04gcHJvcGVydHkgcHJpbWFyeV9mdXJfY29sb3JcbiAgICAgIHBvaW50VG9MYXllcjogZnVuY3Rpb24gKGZlYXR1cmUsIGxhdGxuZykge1xuICAgICAgICBjb25zdCBwcmltYXJ5RnVyQ29sb3IgPSBmZWF0dXJlLnByb3BlcnRpZXMucHJpbWFyeV9mdXJfY29sb3I7XG4gICAgICAgIGlmIChwcmltYXJ5RnVyQ29sb3IgPT09IFwiQ2lubmFtb25cIikge1xuICAgICAgICAgIHJldHVybiBMLm1hcmtlcihsYXRsbmcsIHsgaWNvbjogY2lubmFtb25TcXVpcnJlbEljb24gfSk7XG4gICAgICAgIH0gZWxzZSBpZiAocHJpbWFyeUZ1ckNvbG9yID09PSBcIkJsYWNrXCIpIHtcbiAgICAgICAgICByZXR1cm4gTC5tYXJrZXIobGF0bG5nLCB7IGljb246IGJsYWNrU3F1aXJyZWxJY29uIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBMLm1hcmtlcihsYXRsbmcsIHsgaWNvbjogZ3JheVNxdWlycmVsSWNvbiB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc3F1aXJyZWxNYXAuZml0Qm91bmRzKGFsbFNxdWlycmVscy5nZXRCb3VuZHMoKSwge1xuICAgICAgcGFkZGluZzogWzIwLDIwXVxuICAgIH0pO1xuXG4gICAgc3F1aXJyZWxNYXAuYWRkTGF5ZXIoYmxhY2tTcXVpcnJlbHMpO1xuICAgIHNxdWlycmVsTWFwLmFkZExheWVyKGNpbm5hbW9uU3F1aXJyZWxzKTtcbiAgICBzcXVpcnJlbE1hcC5hZGRMYXllcihncmF5U3F1aXJyZWxzKTtcbiAgICAvL2NoYW5nZSBzcXVpcnJlbCBmaWx0ZXIgb24gY2xpY2tcbiAgICBjb25zdCBmaWx0ZXJGdXJCbGFjayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItZnVyLWJsYWNrJyk7XG4gICAgY29uc3QgZmlsdGVyRnVyQ2lubmFtb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLWZ1ci1jaW5uYW1vbicpO1xuICAgIGNvbnN0IGZpbHRlckZ1ckdyYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsdGVyLWZ1ci1ncmF5Jyk7XG5cbiAgICBmaWx0ZXJGdXJCbGFjay5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgIHNxdWlycmVsTWFwLmFkZExheWVyKGJsYWNrU3F1aXJyZWxzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNxdWlycmVsTWFwLnJlbW92ZUxheWVyKGJsYWNrU3F1aXJyZWxzKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGZpbHRlckZ1ckNpbm5hbW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgc3F1aXJyZWxNYXAuYWRkTGF5ZXIoY2lubmFtb25TcXVpcnJlbHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3F1aXJyZWxNYXAucmVtb3ZlTGF5ZXIoY2lubmFtb25TcXVpcnJlbHMpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZmlsdGVyRnVyR3JheS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgIHNxdWlycmVsTWFwLmFkZExheWVyKGdyYXlTcXVpcnJlbHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3F1aXJyZWxNYXAucmVtb3ZlTGF5ZXIoZ3JheVNxdWlycmVscyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIHhoci5zZW5kKCk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIFN0b3JpZXMoKSB7XG5cbiAgY29uc3QgZmV0Y2hSYW5kb21TdG9yeSA9IChlbGVtZW50SWQpID0+IChcbiAgICBmZXRjaCgnaHR0cHM6Ly9kYXRhLmNpdHlvZm5ld3lvcmsudXMvcmVzb3VyY2UvZ2Zxai1mNzY4Lmpzb24nKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKS5pbm5lckhUTUwgPSBkYXRhW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRhdGEubGVuZ3RoKV0ubm90ZV9zcXVpcnJlbF9wYXJrX3N0b3JpZXNcbiAgKSk7XG4gIGZldGNoUmFuZG9tU3RvcnkoJ3N0b3J5LWRldGFpbHMtZnJvbnQnKTtcblxuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQnKTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC1mcm9udCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGZldGNoUmFuZG9tU3RvcnkoJ3N0b3J5LWRldGFpbHMtYmFjaycpO1xuICAgIGNhcmQuY2xhc3NMaXN0LnRvZ2dsZSgnZmxpcHBlZCcpO1xuICB9LCBmYWxzZSk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQtYmFjaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGZldGNoUmFuZG9tU3RvcnkoJ3N0b3J5LWRldGFpbHMtZnJvbnQnKTtcbiAgICBjYXJkLmNsYXNzTGlzdC50b2dnbGUoJ2ZsaXBwZWQnKTtcbiAgfSwgZmFsc2UpO1xufVxuIiwiaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2tleXNfcHJvZFwiKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4va2V5c19kZXZcIik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIE1BUEJPWF9UT0tFTjpcbiAgICBcInBrLmV5SjFJam9pYW0xcllXNWxjMmhwY204aUxDSmhJam9pWTJzNWF6QnhPRFZqTVc5aGR6TmxjRFF6TTJwMVptdGhhQ0o5LmFlWFVMNl81U3FhSlVQazFyeG5SNmdcIlxufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL2NvbmZpZy9rZXlzXCI7XG5pbXBvcnQgeyBNYXAgfSBmcm9tICcuL2NvbXBvbmVudHMvbWFwJztcbmltcG9ydCB7IFN0b3JpZXMgfSBmcm9tICcuL2NvbXBvbmVudHMvc3Rvcmllcyc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IG1hcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbY29tcG9uZW50PW1hcFwiKTtcbiAgbmV3IE1hcChtYXApO1xuICBuZXcgU3RvcmllcygpO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3F1aXJyZWwtbWFzY290XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwicm90YXRlLWNvdW50ZXItY2xvY2stb24tY2xpY2tcIik7XG4gIH0pO1xufSk7XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=