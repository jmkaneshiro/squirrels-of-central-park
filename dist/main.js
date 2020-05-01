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
  var fetchRandomStory = function fetchRandomStory() {
    return fetch('https://data.cityofnewyork.us/resource/gfqj-f768.json').then(function (response) {
      return response.json();
    }).then(function (data) {
      return document.getElementById('story-details').innerHTML = data[Math.floor(Math.random() * data.length)].note_squirrel_park_stories;
    });
  };

  var card = document.getElementById('card');
  document.getElementById('card-front').addEventListener('click', function () {
    fetchRandomStory();
    card.classList.toggle('flipped');
  }, false);
  document.getElementById('card-back').addEventListener('click', function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tYXBfaWNvbnMvYmxhY2stc3F1aXJyZWwtaWNvbi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tYXBfaWNvbnMvY2lubmFtb24tc3F1aXJyZWwtaWNvbi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tYXBfaWNvbnMvZ3JheS1zcXVpcnJlbC1pY29uLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3Rvcmllcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy9rZXlzX2Rldi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5zY3NzP2M4MDciXSwibmFtZXMiOlsiTWFwIiwic3F1aXJyZWxNYXAiLCJMIiwibWFwIiwiU3F1aXJyZWxJY29uIiwiSWNvbiIsImV4dGVuZCIsIm9wdGlvbnMiLCJpY29uU2l6ZSIsImljb25BbmNob3IiLCJwb3B1cEFuY2hvciIsImdyYXlTcXVpcnJlbEljb24iLCJpY29uVXJsIiwiZ3JheVNxdWlycmVsSW1nIiwiY2lubmFtb25TcXVpcnJlbEljb24iLCJjaW5uYW1vblNxdWlycmVsSW1nIiwiYmxhY2tTcXVpcnJlbEljb24iLCJibGFja1NxdWlycmVsSW1nIiwiZGVmYXVsdFBvcHVwIiwiZmVhdHVyZSIsImxheWVyIiwicHJvcGVydGllcyIsInByaW1hcnlfZnVyX2NvbG9yIiwic2hpZnQiLCJmb3JhZ2luZyIsImNsaW1iaW5nIiwicnVubmluZyIsImRhdGVTdHJpbmciLCJkYXRlIiwicmVwbGFjZSIsIkRhdGUiLCJiaW5kUG9wdXAiLCJ0aWxlTGF5ZXIiLCJhdHRyaWJ1dGlvbiIsIm1heFpvb20iLCJtaW5ab29tIiwidGlsZVNpemUiLCJ6b29tT2Zmc2V0IiwiYWRkVG8iLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJvbmxvYWQiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2UiLCJibGFja1NxdWlycmVscyIsImdlb0pTT04iLCJmaWx0ZXIiLCJwb2ludFRvTGF5ZXIiLCJsYXRsbmciLCJtYXJrZXIiLCJpY29uIiwib25FYWNoRmVhdHVyZSIsImNpbm5hbW9uU3F1aXJyZWxzIiwiZ3JheVNxdWlycmVscyIsImFsbFNxdWlycmVscyIsInByaW1hcnlGdXJDb2xvciIsImZpdEJvdW5kcyIsImdldEJvdW5kcyIsInBhZGRpbmciLCJhZGRMYXllciIsImZpbHRlckZ1ckJsYWNrIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZpbHRlckZ1ckNpbm5hbW9uIiwiZmlsdGVyRnVyR3JheSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGVja2VkIiwicmVtb3ZlTGF5ZXIiLCJzZW5kIiwiU3RvcmllcyIsImZldGNoUmFuZG9tU3RvcnkiLCJmZXRjaCIsInRoZW4iLCJqc29uIiwiaW5uZXJIVE1MIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwibm90ZV9zcXVpcnJlbF9wYXJrX3N0b3JpZXMiLCJjYXJkIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicHJvY2VzcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiTUFQQk9YX1RPS0VOIiwid2luZG93IiwicXVlcnlTZWxlY3RvciIsImUiLCJjdXJyZW50VGFyZ2V0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7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Q0MsT0FBUCxHQUFpQkMsbUJBQU8sQ0FBQyw0Q0FBRCxDQUF4QjtBQUNELEM7Ozs7Ozs7Ozs7O0FDSkRGLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmRSxjQUFZLEVBQ1Y7QUFGYSxDQUFqQixDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUFDLE1BQU0sQ0FBQ3ZCLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0FBQ2hELE1BQU1qRSxHQUFHLEdBQUc2RCxRQUFRLENBQUM0QixhQUFULENBQXVCLGdCQUF2QixDQUFaO0FBQ0EsTUFBSTVGLG1EQUFKLENBQVFHLEdBQVI7QUFDQSxNQUFJcUUsMkRBQUo7QUFFQVIsVUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixFQUEyQ0csZ0JBQTNDLENBQTRELE9BQTVELEVBQXFFLFVBQVV5QixDQUFWLEVBQWE7QUFDaEZBLEtBQUMsQ0FBQ0MsYUFBRixDQUFnQlYsU0FBaEIsQ0FBMEJDLE1BQTFCLENBQWlDLCtCQUFqQztBQUNELEdBRkQ7QUFHRCxDQVJELEU7Ozs7Ozs7Ozs7O0FDTEEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJkaXN0L2ltYWdlcy9ibGFjay1zcXVpcnJlbC1pY29uLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiZGlzdC9pbWFnZXMvY2lubmFtb24tc3F1aXJyZWwtaWNvbi5zdmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRpc3QvaW1hZ2VzL2dyYXktc3F1aXJyZWwtaWNvbi5zdmdcIjsiLCIvLyBpbXBvcnQgXCIuLi9jb25maWcva2V5c1wiO1xuaW1wb3J0IGdyYXlTcXVpcnJlbEltZyBmcm9tIFwiLi4vYXNzZXRzL21hcF9pY29ucy9ncmF5LXNxdWlycmVsLWljb24uc3ZnXCI7XG5pbXBvcnQgYmxhY2tTcXVpcnJlbEltZyBmcm9tIFwiLi4vYXNzZXRzL21hcF9pY29ucy9ibGFjay1zcXVpcnJlbC1pY29uLnN2Z1wiO1xuaW1wb3J0IGNpbm5hbW9uU3F1aXJyZWxJbWcgZnJvbSBcIi4uL2Fzc2V0cy9tYXBfaWNvbnMvY2lubmFtb24tc3F1aXJyZWwtaWNvbi5zdmdcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIE1hcCgpIHtcbiAgLy8gTmVlZCBmb2xsb3dpbmcgbGluZSBpZiBtYXBib3ggdXNlZFxuICAvLyBjb25zdCBNQVBCT1hfVE9LRU4gPSByZXF1aXJlKFwiLi4vY29uZmlnL2tleXNcIikuTUFQQk9YX1RPS0VOO1xuICBjb25zdCBzcXVpcnJlbE1hcCA9IEwubWFwKCdtYXBpZCcpO1xuICAvL0FkZCBpY29ucyBmb3IgZWFjaCBzcXVpcnJlbCB0eXBlXG4gIGNvbnN0IFNxdWlycmVsSWNvbiA9IEwuSWNvbi5leHRlbmQoe1xuICAgIG9wdGlvbnM6IHtcbiAgICAgIGljb25TaXplOiBbMjAsIDIwXSwgLy8gc2l6ZSBvZiBpY29uXG4gICAgICBpY29uQW5jaG9yOiBbMTAsIDIwXSwgLy8gc2V0IGFuY2hvciByZWxhdGl2ZSB0byBpY29uXG4gICAgICBwb3B1cEFuY2hvcjogWzUsIC0xOF0gLy9zZXQgcG9wdXAgcmVsYXRpdmUgdG8gYW5jaG9yXG4gICAgfVxuICB9KTtcblxuICBjb25zdCBncmF5U3F1aXJyZWxJY29uID0gbmV3IFNxdWlycmVsSWNvbih7IGljb25Vcmw6IGdyYXlTcXVpcnJlbEltZyB9KSxcbiAgICBjaW5uYW1vblNxdWlycmVsSWNvbiA9IG5ldyBTcXVpcnJlbEljb24oeyBpY29uVXJsOiBjaW5uYW1vblNxdWlycmVsSW1nIH0pLFxuICAgIGJsYWNrU3F1aXJyZWxJY29uID0gbmV3IFNxdWlycmVsSWNvbih7IGljb25Vcmw6IGJsYWNrU3F1aXJyZWxJbWcgfSk7XG5cbiAgZnVuY3Rpb24gZGVmYXVsdFBvcHVwKGZlYXR1cmUsIGxheWVyKSB7XG4gICAgY29uc3QgeyBwcmltYXJ5X2Z1cl9jb2xvciwgc2hpZnQsIGZvcmFnaW5nLCBjbGltYmluZywgcnVubmluZyB9ID0gZmVhdHVyZS5wcm9wZXJ0aWVzO1xuXG4gICAgY29uc3QgZGF0ZVN0cmluZyA9IGZlYXR1cmUucHJvcGVydGllcy5kYXRlLnJlcGxhY2UoLyhcXGR7Mn0pKFxcZHsyfSkoXFxkKykvLCAnJDEvJDIvJDMnKTtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZyk7XG5cbiAgICBsYXllci5iaW5kUG9wdXAoXG4gICAgICBgPGgyPkRldGFpbHM8aDI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+RGF0ZTogJHtkYXRlU3RyaW5nfTwvbGk+XG4gICAgICAgICAgPGxpPkZ1ciBDb2xvcjogJHtwcmltYXJ5X2Z1cl9jb2xvcn08L2xpPlxuICAgICAgICAgIDxsaT5TaGlmdDogJHtzaGlmdH08L2xpPlxuICAgICAgICAgIDxsaT5Gb3JhZ2luZzogJHtmb3JhZ2luZ308L2xpPlxuICAgICAgICAgIDxsaT5SdW5uaW5nOiAke3J1bm5pbmd9PC9saT5cbiAgICAgICAgICA8bGk+Q2xpbWliaW5nOiAke2NsaW1iaW5nfTwvbGk+XG4gICAgICAgIDwvdWw+YFxuICAgICk7XG4gIH1cbiAgLy9Gb3IgYSBwcmV0dGllciBtYXAsIGNvbnNpZGVyIHVzaW5nIE1hcGJveCBpbiB0aGUgZnV0dXJlXG4gIC8vTWFwYm94IHJlcXVpcmVzIHlvdSB0byBoYXZlIGFuIGFjY291bnQgYW5kIHVuaXF1ZSBBUEkga2V5XG4gIC8vIEwudGlsZUxheWVyKCdodHRwczovL2FwaS5tYXBib3guY29tL3N0eWxlcy92MS97aWR9L3RpbGVzL3t6fS97eH0ve3l9P2FjY2Vzc190b2tlbj17YWNjZXNzVG9rZW59Jywge1xuICAvLyAgIGF0dHJpYnV0aW9uOiAnTWFwIGRhdGEgJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9cIj5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnMsIDxhIGhyZWY9XCJodHRwczovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMi4wL1wiPkNDLUJZLVNBPC9hPiwgSW1hZ2VyeSDCqSA8YSBocmVmPVwiaHR0cHM6Ly93d3cubWFwYm94LmNvbS9cIj5NYXBib3g8L2E+JyxcbiAgLy8gICBtYXhab29tOiAxOCxcbiAgLy8gICBtaW5ab29tOiAxNCxcbiAgLy8gICBpZDogJ21hcGJveC9zdHJlZXRzLXYxMScsXG4gIC8vICAgdGlsZVNpemU6IDUxMixcbiAgLy8gICB6b29tT2Zmc2V0OiAtMSxcbiAgLy8gICBhY2Nlc3NUb2tlbjogYCR7TUFQQk9YX1RPS0VOfWBcbiAgLy8gfSkuYWRkVG8oc3F1aXJyZWxNYXApO1xuXG4gIC8vIENyZWF0ZSBiYXNlIHRpbGUgZm9yIG1hcCB3aXRoIG9wZW5zdHJlZXRtYXBcbiAgTC50aWxlTGF5ZXIoJ2h0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJywge1xuICAgIGF0dHJpYnV0aW9uOiAnJmNvcHk7IDxhIGhyZWY9XCJodHRwczovL29wZW5zdHJlZXRtYXAub3JnL2NvcHlyaWdodFwiPk9wZW5TdHJlZXRNYXAgY29udHJpYnV0b3JzPC9hPicsXG4gICAgbWF4Wm9vbTogMTgsXG4gICAgbWluWm9vbTogMTQsXG4gICAgdGlsZVNpemU6IDUxMixcbiAgICB6b29tT2Zmc2V0OiAtMSxcbiAgfSkuYWRkVG8oc3F1aXJyZWxNYXApO1xuXG4gIC8vIFBsb3Qgc3F1aXJyZWwgbWFya2VycyBhbmQgcG9wdXBzIG9uIG1hcHdoZW4gZ2VvSlNPTiBpcyBsb2FkZWQgZnJvbSBBcGlcbiAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIHhoci5vcGVuKCdHRVQnLCAnaHR0cHM6Ly9kYXRhLmNpdHlvZm5ld3lvcmsudXMvcmVzb3VyY2UvdmZueC12ZWJ3Lmdlb2pzb24nKTtcbiAgeGhyLm9ubG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpO1xuXG4gICAgY29uc3QgYmxhY2tTcXVpcnJlbHMgPSBMLmdlb0pTT04oZGF0YSwge1xuICAgICAgZmlsdGVyOiBmdW5jdGlvbihmZWF0dXJlLCBsYXllcikge1xuICAgICAgICAgcmV0dXJuIGZlYXR1cmUucHJvcGVydGllcy5wcmltYXJ5X2Z1cl9jb2xvciA9PT0gXCJCbGFja1wiO1xuICAgICAgfSxcbiAgICAgIHBvaW50VG9MYXllcjogZnVuY3Rpb24gKGZlYXR1cmUsIGxhdGxuZykge1xuICAgICAgICByZXR1cm4gTC5tYXJrZXIobGF0bG5nLCB7XG4gICAgICAgICAgaWNvbjogYmxhY2tTcXVpcnJlbEljb25cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgb25FYWNoRmVhdHVyZTogZGVmYXVsdFBvcHVwXG4gICAgfSk7XG5cbiAgICBjb25zdCBjaW5uYW1vblNxdWlycmVscyA9IEwuZ2VvSlNPTihkYXRhLCB7XG4gICAgICBmaWx0ZXI6IGZ1bmN0aW9uIChmZWF0dXJlLCBsYXllcikge1xuICAgICAgICByZXR1cm4gZmVhdHVyZS5wcm9wZXJ0aWVzLnByaW1hcnlfZnVyX2NvbG9yID09PSBcIkNpbm5hbW9uXCI7XG4gICAgICB9LFxuICAgICAgcG9pbnRUb0xheWVyOiBmdW5jdGlvbiAoZmVhdHVyZSwgbGF0bG5nKSB7XG4gICAgICAgIHJldHVybiBMLm1hcmtlcihsYXRsbmcsIHtcbiAgICAgICAgICBpY29uOiBjaW5uYW1vblNxdWlycmVsSWNvblxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBvbkVhY2hGZWF0dXJlOiBkZWZhdWx0UG9wdXBcbiAgICB9KTtcblxuICAgIGNvbnN0IGdyYXlTcXVpcnJlbHMgPSBMLmdlb0pTT04oZGF0YSwge1xuICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoZmVhdHVyZSwgbGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuIGZlYXR1cmUucHJvcGVydGllcy5wcmltYXJ5X2Z1cl9jb2xvciA9PT0gXCJHcmF5XCI7XG4gICAgICB9LFxuICAgICAgcG9pbnRUb0xheWVyOiBmdW5jdGlvbiAoZmVhdHVyZSwgbGF0bG5nKSB7XG4gICAgICAgIHJldHVybiBMLm1hcmtlcihsYXRsbmcsIHtcbiAgICAgICAgICBpY29uOiBncmF5U3F1aXJyZWxJY29uXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIG9uRWFjaEZlYXR1cmU6IGRlZmF1bHRQb3B1cFxuICAgIH0pO1xuXG4gICAgY29uc3QgYWxsU3F1aXJyZWxzID0gTC5nZW9KU09OKGRhdGEsIHtcbiAgICAgIC8vU2V0IHNxdWlycmVsIGljb24gYmFzZWQgb24gZ2VvSlNPTiBwcm9wZXJ0eSBwcmltYXJ5X2Z1cl9jb2xvclxuICAgICAgcG9pbnRUb0xheWVyOiBmdW5jdGlvbiAoZmVhdHVyZSwgbGF0bG5nKSB7XG4gICAgICAgIGNvbnN0IHByaW1hcnlGdXJDb2xvciA9IGZlYXR1cmUucHJvcGVydGllcy5wcmltYXJ5X2Z1cl9jb2xvcjtcbiAgICAgICAgaWYgKHByaW1hcnlGdXJDb2xvciA9PT0gXCJDaW5uYW1vblwiKSB7XG4gICAgICAgICAgcmV0dXJuIEwubWFya2VyKGxhdGxuZywgeyBpY29uOiBjaW5uYW1vblNxdWlycmVsSWNvbiB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChwcmltYXJ5RnVyQ29sb3IgPT09IFwiQmxhY2tcIikge1xuICAgICAgICAgIHJldHVybiBMLm1hcmtlcihsYXRsbmcsIHsgaWNvbjogYmxhY2tTcXVpcnJlbEljb24gfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIEwubWFya2VyKGxhdGxuZywgeyBpY29uOiBncmF5U3F1aXJyZWxJY29uIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzcXVpcnJlbE1hcC5maXRCb3VuZHMoYWxsU3F1aXJyZWxzLmdldEJvdW5kcygpLCB7XG4gICAgICBwYWRkaW5nOiBbMjAsMjBdXG4gICAgfSk7XG5cbiAgICBzcXVpcnJlbE1hcC5hZGRMYXllcihibGFja1NxdWlycmVscyk7XG4gICAgc3F1aXJyZWxNYXAuYWRkTGF5ZXIoY2lubmFtb25TcXVpcnJlbHMpO1xuICAgIHNxdWlycmVsTWFwLmFkZExheWVyKGdyYXlTcXVpcnJlbHMpO1xuICAgIC8vY2hhbmdlIHNxdWlycmVsIGZpbHRlciBvbiBjbGlja1xuICAgIGNvbnN0IGZpbHRlckZ1ckJsYWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbHRlci1mdXItYmxhY2snKTtcbiAgICBjb25zdCBmaWx0ZXJGdXJDaW5uYW1vbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItZnVyLWNpbm5hbW9uJyk7XG4gICAgY29uc3QgZmlsdGVyRnVyR3JheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWx0ZXItZnVyLWdyYXknKTtcblxuICAgIGZpbHRlckZ1ckJsYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgc3F1aXJyZWxNYXAuYWRkTGF5ZXIoYmxhY2tTcXVpcnJlbHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3F1aXJyZWxNYXAucmVtb3ZlTGF5ZXIoYmxhY2tTcXVpcnJlbHMpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZmlsdGVyRnVyQ2lubmFtb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICBzcXVpcnJlbE1hcC5hZGRMYXllcihjaW5uYW1vblNxdWlycmVscyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzcXVpcnJlbE1hcC5yZW1vdmVMYXllcihjaW5uYW1vblNxdWlycmVscyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBmaWx0ZXJGdXJHcmF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgc3F1aXJyZWxNYXAuYWRkTGF5ZXIoZ3JheVNxdWlycmVscyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzcXVpcnJlbE1hcC5yZW1vdmVMYXllcihncmF5U3F1aXJyZWxzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbiAgeGhyLnNlbmQoKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gU3RvcmllcygpIHtcblxuICBjb25zdCBmZXRjaFJhbmRvbVN0b3J5ID0gKCkgPT4gKFxuICAgIGZldGNoKCdodHRwczovL2RhdGEuY2l0eW9mbmV3eW9yay51cy9yZXNvdXJjZS9nZnFqLWY3NjguanNvbicpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGRhdGEgPT4gXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RvcnktZGV0YWlscycpLmlubmVySFRNTCA9IGRhdGFbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGF0YS5sZW5ndGgpXS5ub3RlX3NxdWlycmVsX3Bhcmtfc3Rvcmllc1xuICApKTtcblxuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmQnKTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FyZC1mcm9udCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGZldGNoUmFuZG9tU3RvcnkoKTtcbiAgICBjYXJkLmNsYXNzTGlzdC50b2dnbGUoJ2ZsaXBwZWQnKTtcbiAgfSwgZmFsc2UpO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkLWJhY2snKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBjYXJkLmNsYXNzTGlzdC50b2dnbGUoJ2ZsaXBwZWQnKTtcbiAgfSwgZmFsc2UpO1xufVxuIiwiaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2tleXNfcHJvZFwiKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4va2V5c19kZXZcIik7XG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIE1BUEJPWF9UT0tFTjpcbiAgICBcInBrLmV5SjFJam9pYW0xcllXNWxjMmhwY204aUxDSmhJam9pWTJzNWF6QnhPRFZqTVc5aGR6TmxjRFF6TTJwMVptdGhhQ0o5LmFlWFVMNl81U3FhSlVQazFyeG5SNmdcIlxufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL2NvbmZpZy9rZXlzXCI7XG5pbXBvcnQgeyBNYXAgfSBmcm9tICcuL2NvbXBvbmVudHMvbWFwJztcbmltcG9ydCB7IFN0b3JpZXMgfSBmcm9tICcuL2NvbXBvbmVudHMvc3Rvcmllcyc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IG1hcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbY29tcG9uZW50PW1hcFwiKTtcbiAgbmV3IE1hcChtYXApO1xuICBuZXcgU3RvcmllcygpO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3F1aXJyZWwtbWFzY290XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKFwicm90YXRlLWNvdW50ZXItY2xvY2stb24tY2xpY2tcIik7XG4gIH0pO1xufSk7XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=