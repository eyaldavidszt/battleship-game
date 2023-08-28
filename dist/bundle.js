/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/static/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/static/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Playfair+Display&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Playfair+Display&family=VT323&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "VT323", monospace;
}
body {
  min-height: 100svh;
  background-color: rgb(127, 214, 255);
}
.board {
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 500px;
  width: 500px;
  > * {
    display: flex;
    flex: 1;
    > * {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 2rem;
    }
  }
}

.title {
  font-family: "Bungee Spice", serif;
  font-size: 4rem;
  text-align: center;
}

.boards-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

button {
  all: initial;
  background-color: rgb(209, 209, 209);
  border: 1px solid black;
}

.instructions {
  text-align: center;
  font-size: 2rem;
}
label {
  font-size: 2rem;
}
.angle-wrapper {
  display: flex;
  justify-content: center;
  margin: 1rem;
  gap: 1rem;
}

select {
  font-family: "VT323", monospace;
  font-size: 2rem;
}
`, "",{"version":3,"sources":["webpack://./src/static/style.css"],"names":[],"mappings":"AAGA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;EACtB,+BAA+B;AACjC;AACA;EACE,kBAAkB;EAClB,oCAAoC;AACtC;AACA;EACE,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,oBAAoB;EACpB,aAAa;EACb,YAAY;EACZ;IACE,aAAa;IACb,OAAO;IACP;MACE,OAAO;MACP,aAAa;MACb,uBAAuB;MACvB,mBAAmB;MACnB,iBAAiB;MACjB,eAAe;IACjB;EACF;AACF;;AAEA;EACE,kCAAkC;EAClC,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,oCAAoC;EACpC,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,+BAA+B;EAC/B,eAAe;AACjB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Playfair+Display&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Bungee+Spice&family=Playfair+Display&family=VT323&display=swap\");\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"VT323\", monospace;\n}\nbody {\n  min-height: 100svh;\n  background-color: rgb(127, 214, 255);\n}\n.board {\n  border: 1px solid black;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  height: 500px;\n  width: 500px;\n  > * {\n    display: flex;\n    flex: 1;\n    > * {\n      flex: 1;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-weight: bold;\n      font-size: 2rem;\n    }\n  }\n}\n\n.title {\n  font-family: \"Bungee Spice\", serif;\n  font-size: 4rem;\n  text-align: center;\n}\n\n.boards-container {\n  display: flex;\n  justify-content: center;\n  gap: 2rem;\n}\n\nbutton {\n  all: initial;\n  background-color: rgb(209, 209, 209);\n  border: 1px solid black;\n}\n\n.instructions {\n  text-align: center;\n  font-size: 2rem;\n}\nlabel {\n  font-size: 2rem;\n}\n.angle-wrapper {\n  display: flex;\n  justify-content: center;\n  margin: 1rem;\n  gap: 1rem;\n}\n\nselect {\n  font-family: \"VT323\", monospace;\n  font-size: 2rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/static/style.css":
/*!******************************!*\
  !*** ./src/static/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/static/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* eslint-disable no-console */


function Gameboard() {
  const board = [];
  const allShips = [];
  for (let i = 0; i < 10; i += 1) {
    const y = [];
    for (let j = 0; j < 10; j += 1) {
      const x = {
        beenHit: false,
        shipCell: null,
      };
      y.push(x);
    }
    board.push(y);
  }
  const placeShip = (startingArr, endingArr) => {
    if (startingArr[0] !== endingArr[0]) {
      if (startingArr[1] !== endingArr[1]) {
        throw new Error("Ship must be straightly aligned");
      }
    }
    for (let i = 0; i < 2; i += 1) {
      if (startingArr[i] > 9 || endingArr[i] > 9) return;
      // throw new Error("Invalid coordinates");
      if (startingArr[i] < 0 || endingArr[i] < 0) return;
      // throw new Error("Invalid coordinates");
    }
    let ship = "";
    if (startingArr[0] !== endingArr[0]) {
      ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])({ length: Math.abs(startingArr[0] - endingArr[0]) + 1 });
    } else if (startingArr[1] !== endingArr[1]) {
      ship = (0,_ship__WEBPACK_IMPORTED_MODULE_0__["default"])({ length: Math.abs(startingArr[1] - endingArr[1]) + 1 });
    }

    if (startingArr[0] !== endingArr[0]) {
      // 3,3 -> 8, 3

      const height = startingArr[1];
      for (
        let i = Math.min(startingArr[0], endingArr[0]);
        i <= Math.max(startingArr[0], endingArr[0]);
        i += 1
      ) {
        if (board[i][height].shipCell !== null) return;
        board[i][height].shipCell = ship;
      }
    }
    if (startingArr[1] !== endingArr[1]) {
      const x = startingArr[0];
      for (
        let i = Math.min(startingArr[1], endingArr[1]);
        i <= Math.max(startingArr[1], endingArr[1]);
        i += 1
      ) {
        if (board[x][i].shipCell !== null) return;
        board[x][i].shipCell = ship;
      }
    }
    allShips.push(ship);
  };
  const receiveAttack = (coords) => {
    for (let i = 0; i < 2; i += 1) {
      if (coords[i] > 9 || coords[i] < 0) return;
    }
    const x = coords[0];
    const y = coords[1];
    board[x][y].beenHit = true;
    if (board[x][y].shipCell !== null) {
      board[x][y].shipCell.hit();
    }
  };
  const allSunk = () => {
    for (let i = 0; i < allShips.length; i += 1) {
      if (allShips[i].isSunk() === false) return false;
    }
    return true;
  };
  return { placeShip, receiveAttack, allSunk, board, allShips };
}


/***/ }),

/***/ "./src/gamecontroller.js":
/*!*******************************!*\
  !*** ./src/gamecontroller.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gamecontroller)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* eslint-disable prefer-const */


function Gamecontroller(
  playerOneName = "Human",
  playerTwoName = "Robot"
) {
  let gameOver = false;
  let boardsFilled = false;
  const playerOne = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])({ name: playerOneName });
  const playerTwo = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])({ name: playerTwoName });
  let activePlayer = playerOne;
  let waitingPlayer = playerTwo;
  const changeActivePlayer = () => {
    if (activePlayer === playerOne) {
      activePlayer = playerTwo;
      waitingPlayer = playerOne;
    } else {
      activePlayer = playerOne;
      waitingPlayer = playerTwo;
    }
  };
  const playPlaceRound = (starting, ending) => {
    if (boardsFilled) throw new Error("all ships already placed");
    const oldShipCount = activePlayer.getBoard().allShips.length;
    activePlayer.getBoard().placeShip(starting, ending);
    if (
      activePlayer.getBoard().allShips.length >= 5 &&
      waitingPlayer.getBoard().allShips.length >= 5
    ) {
      boardsFilled = true;
    }
    if (activePlayer.getBoard().allShips.length > oldShipCount) {
      changeActivePlayer();
    }
  };
  const playRound = (coordinates) => {
    if (gameOver) throw new Error("game over");
    if (boardsFilled === false) throw new Error("not all ships placed");
    if (
      waitingPlayer.getBoard().board[coordinates[0]][coordinates[1]].beenHit ===
      true
    )
      return;
    waitingPlayer.getBoard().receiveAttack(coordinates);
    if (waitingPlayer.getBoard().allSunk()) {
      activePlayer.isWinner = true;
      gameOver = true;
    }
    console.log(gameOver);
    changeActivePlayer();
  };
  const getActivePlayer = () => activePlayer;
  const getWaitingPlayer = () => waitingPlayer;

  let lastComputerHit = [];
  const computerPlayRound = () => {
    const possibleMoves = [];
    if (activePlayer !== playerTwo) return;
    if (lastComputerHit[0] + 1 < 10) {
      if (
        waitingPlayer.getBoard().board[lastComputerHit[0] + 1][
          lastComputerHit[1]
        ].beenHit !== true
      ) {
        possibleMoves.push([lastComputerHit[0] + 1, lastComputerHit[1]]);
      }
    }
    if (lastComputerHit[0] - 1 > -1) {
      if (
        waitingPlayer.getBoard().board[lastComputerHit[0] - 1][
          lastComputerHit[1]
        ].beenHit !== true
      ) {
        possibleMoves.push([lastComputerHit[0] - 1, lastComputerHit[1]]);
      }
    }
    if (lastComputerHit[1] + 1 < 10) {
      if (
        waitingPlayer.getBoard().board[lastComputerHit[0]][
          lastComputerHit[1] + 1
        ].beenHit !== true
      ) {
        possibleMoves.push([lastComputerHit[0], lastComputerHit[1] + 1]);
      }
    }
    if (lastComputerHit[1] - 1 > -1) {
      if (
        waitingPlayer.getBoard().board[lastComputerHit[0]][
          lastComputerHit[1] - 1
        ].beenHit !== true
      ) {
        possibleMoves.push([lastComputerHit[0], lastComputerHit[1] - 1]);
      }
    }
    // select random move from possibleMoves.
    if (possibleMoves.length !== 0) {
      //
      const index = Math.floor(Math.random() * possibleMoves.length);
      playRound(possibleMoves[index]);
      if (
        playerOne.getBoard().board[possibleMoves[index][0]][
          possibleMoves[index][1]
        ].shipCell !== null
      ) {
        lastComputerHit = possibleMoves[index];
      }
      return;
    }

    // else, random path (verify args)
    let keepGoing = true;
    let randX = 0;
    let randY = 0;
    while (keepGoing) {
      randX = Math.floor(Math.random() * 10);
      randY = Math.floor(Math.random() * 10);
      if (playerOne.getBoard().board[randX][randY].beenHit === false) {
        playRound([randX, randY]);
        keepGoing = false;
      }
    }
    // check if this hit scored
    if (playerOne.getBoard().board[randX][randY].shipCell !== null) {
      lastComputerHit = [randX, randY];
    }
  };
  const getHuman = () => playerOne;
  const getCPU = () => playerTwo;

  const computerPlayPlaceRound = () => {};
  //
  return {
    playRound,
    playPlaceRound,
    getActivePlayer,
    getWaitingPlayer,
    computerPlayRound,
    computerPlayPlaceRound,
    getHuman,
    getCPU,
    boardsFilled,
    gameOver,
  };
}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


function Player({ name }) {
  // eslint-disable-next-line prefer-const
  let isWinner = false;
  const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const getBoard = () => gameboard;
  const getName = () => name;
  const attack = (board, coords) => {
    board.receiveAttack(coords);
  };
  return {
    getName,
    getBoard,
    attack,
    isWinner,
  };
}


/***/ }),

/***/ "./src/screencontroller.js":
/*!*********************************!*\
  !*** ./src/screencontroller.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Screencontroller)
/* harmony export */ });
/* harmony import */ var _gamecontroller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamecontroller */ "./src/gamecontroller.js");
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-restricted-globals */
/* eslint-disable radix */


function Screencontroller() {
  const game = (0,_gamecontroller__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const DOMLengths = [4, 3, 2, 2, 1];
  const DOMInstructions = [
    "Place carrier (length 5)",
    "Place battleship (length 4)",
    "Place cruiser (length 3)",
    "Place submarine (length 3",
    "Place destroyer (length 2)",
  ];
  let DOMIndex = 0;
  const DOMInstructor = document.querySelector(".instructions");
  DOMInstructor.textContent = DOMInstructions[DOMIndex];
  const boardsContainer = document.querySelector(".boards-container");
  const DOMboard1 = document.createElement("div");
  const DOMboard2 = document.createElement("div");
  const DOMBoards = [DOMboard1, DOMboard2];
  function DOMReceiveAttack(event) {
    // get dataset coordinates
    const row = parseInt(event.target.dataset.row);
    const cell = parseInt(event.target.dataset.cell);
    console.log(row, cell);
    if (game.getWaitingPlayer().getBoard().board[row][cell].beenHit === true)
      return;
    if (game.gameOver) return;
    try {
      game.playRound([row, cell]);
    } catch {
      DOMInstructor.textContent = "Game over! Player 2 wins!";
    }
    updateBoard();
    console.log(game.gameOver);

    if (game.gameOver === true) {
      // remove event listener from board.
      DOMBoards[1].removeEventListener("click", DOMReceiveAttack);
      return;
    }
    // generate random coords as long as theyre invalid...
    // eslint-disable-next-line no-constant-condition
    // while (true) {
    //   const randX = Math.floor(Math.random() * 10);
    //   const randY = Math.floor(Math.random() * 10);
    //   if (
    //     game.getWaitingPlayer().getBoard().board[randX][randY].beenHit === true
    //   ) {
    //     continue;
    //   }
    //   try {
    //     game.playRound([randX, randY]);
    //   } catch {
    //     DOMInstructor.textContent = "Game over! Human wins!";
    //   }
    //   break;
    // }
    try {
      game.computerPlayRound();
    } catch {
      DOMInstructor.textContent = "Game over! Player 1 wins!";
    }
    updateBoard();

    if (game.gameOver === true) {
      DOMBoards[1].removeEventListener("click", DOMReceiveAttack);
    }
  }
  const DOMShipPlace = (event) => {
    const row = parseInt(event.target.dataset.row);
    const cell = parseInt(event.target.dataset.cell);
    const starting = [row, cell];
    const ending = [row, cell];
    const angle = document.querySelector("#placement-angle").value;
    if (angle === "horizontal") {
      ending[1] += DOMLengths[DOMIndex];
    }
    if (angle === "vertical") {
      ending[0] += DOMLengths[DOMIndex];
    }
    for (let i = 0; i < 2; i += 1) {
      if (starting[i] > 9 || ending[i] > 9) return;
      if (starting[i] < 0 || ending[i] < 0) return;
    }
    // test here again
    if (starting[0] !== ending[0]) {
      // check every square in the path to see if bad. if bad, continue keyword
      const height = starting[1];
      for (let i = starting[0]; i <= ending[0]; i += 1) {
        if (game.getHuman().getBoard().board[i][height].shipCell !== null) {
          // eslint-disable-next-line no-continue
          return;
        }
      }
    }
    if (starting[1] !== ending[1]) {
      const x = starting[0];
      for (
        let i = Math.min(starting[1], ending[1]);
        i <= Math.max(starting[1], ending[1]);
        i += 1
      ) {
        if (game.getHuman().getBoard().board[x][i].shipCell !== null) return;
      }
    }

    game.playPlaceRound(starting, ending);
    // here make logic for new starting ending
    // I CAN DO A WHILE LOOP!
    const oldLength = game.getCPU().getBoard().allShips.length;
    while (game.getCPU().getBoard().allShips.length === oldLength) {
      const randX = Math.floor(Math.random() * 9);
      const randY = Math.floor(Math.random() * 9);
      const randAngles = ["vertical", "horizontal"];
      const randAngle = randAngles[Math.floor(Math.random() * 2)];
      const cpuStarting = [randX, randY];
      const cpuEnding = [randX, randY];
      if (randAngle === "horizontal") {
        cpuEnding[1] += DOMLengths[DOMIndex];
      }
      if (randAngle === "vertical") {
        cpuEnding[0] += DOMLengths[DOMIndex];
      }
      if (cpuEnding[0] > 9) continue;
      if (cpuEnding[1] > 9) continue;

      // check coordinate validity...
      // if angle is vertical... start[0] !== end[0]
      let count = 0;
      if (cpuStarting[0] !== cpuEnding[0]) {
        // check every square in the path to see if bad. if bad, continue keyword
        const height = cpuStarting[1];
        for (let i = cpuStarting[0]; i <= cpuEnding[0]; i += 1) {
          if (game.getCPU().getBoard().board[i][height].shipCell !== null) {
            // eslint-disable-next-line no-continue
            count += 1;
          }
        }
      }
      if (cpuStarting[1] !== cpuEnding[1]) {
        const x = cpuStarting[0];
        for (
          let i = Math.min(cpuStarting[1], cpuEnding[1]);
          i <= Math.max(cpuStarting[1], cpuEnding[1]);
          i += 1
        ) {
          if (game.getCPU().getBoard().board[x][i].shipCell !== null)
            count += 1;
        }
      }
      if (count !== 0) {
        continue;
      }

      game.playPlaceRound(cpuStarting, cpuEnding);
    }
    DOMIndex += 1;
    DOMInstructor.textContent = DOMInstructions[DOMIndex] || "";
    if (DOMIndex === 5) {
      //
      DOMBoards.forEach((board, index) => {
        board.removeEventListener("click", DOMShipPlace);
        if (index === 1) {
          board.addEventListener("click", DOMReceiveAttack);
        }
        boardsContainer.appendChild(DOMboard2);
        DOMInstructor.textContent = "Sink your opponent!";
      });
    }
    // eslint-disable-next-line no-use-before-define
    updateBoard();
  };
  DOMBoards.forEach((DOMBoard) => {
    DOMBoard.classList.add("board");
    DOMBoard.addEventListener("click", DOMShipPlace);
  });
  boardsContainer.appendChild(DOMboard1);

  function updateBoard() {
    const humanBoard = game.getHuman().getBoard().board;
    const computerBoard = game.getCPU().getBoard().board;
    const boards = [humanBoard, computerBoard];

    boards.forEach((board, boardIndex) => {
      DOMBoards[boardIndex].replaceChildren();
      board.forEach((row, rowIndex) => {
        const DOMRow = document.createElement("div");
        row.forEach((cell, cellIndex) => {
          const DOMCell = document.createElement("button");
          DOMCell.dataset.row = `${rowIndex}`;
          DOMCell.dataset.cell = `${cellIndex}`;
          // if (boardIndex === 0) {
          if (cell.shipCell !== null) {
            DOMCell.style.backgroundColor = "red";
          }
          // }
          if (cell.beenHit === true) {
            DOMCell.innerHTML = "&times;";
            if (cell.shipCell !== null) {
              DOMCell.style.backgroundColor = "red";
            }
          }
          DOMRow.appendChild(DOMCell);
        });
        DOMBoards[boardIndex].appendChild(DOMRow);
      });
    });
  }

  updateBoard();
}


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function Ship({ length }) {
  const possibleLengths = [5, 4, 3, 2];
  if (!possibleLengths.includes(length)) throw new Error("Invalid ship length");
  let hits = 0;
  const hit = () => {
    hits += 1;
  };
  const isSunk = () => {
    if (hits === length) return true;
    return false;
  };
  const getLength = () => length;
  return { isSunk, hit, getLength };
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _static_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static/style.css */ "./src/static/style.css");
/* harmony import */ var _screencontroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screencontroller */ "./src/screencontroller.js");



(0,_screencontroller__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDc0I7O0FBRWxELDZEQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3RhdGljL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdGF0aWMvc3R5bGUuY3NzPzI1Y2EiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWVjb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyZWVuY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJ1bmdlZStTcGljZSZmYW1pbHk9UGxheWZhaXIrRGlzcGxheSZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CdW5nZWUrU3BpY2UmZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXkmZmFtaWx5PVZUMzIzJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IFwiVlQzMjNcIiwgbW9ub3NwYWNlO1xufVxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHN2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEyNywgMjE0LCAyNTUpO1xufVxuLmJvYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogNTAwcHg7XG4gID4gKiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgID4gKiB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cbiAgfVxufVxuXG4udGl0bGUge1xuICBmb250LWZhbWlseTogXCJCdW5nZWUgU3BpY2VcIiwgc2VyaWY7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm9hcmRzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDJyZW07XG59XG5cbmJ1dHRvbiB7XG4gIGFsbDogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMjA5LCAyMDkpO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmluc3RydWN0aW9ucyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAycmVtO1xufVxubGFiZWwge1xuICBmb250LXNpemU6IDJyZW07XG59XG4uYW5nbGUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW46IDFyZW07XG4gIGdhcDogMXJlbTtcbn1cblxuc2VsZWN0IHtcbiAgZm9udC1mYW1pbHk6IFwiVlQzMjNcIiwgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDJyZW07XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdGF0aWMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLFlBQVk7RUFDWjtJQUNFLGFBQWE7SUFDYixPQUFPO0lBQ1A7TUFDRSxPQUFPO01BQ1AsYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLGVBQWU7SUFDakI7RUFDRjtBQUNGOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUJ1bmdlZStTcGljZSZmYW1pbHk9UGxheWZhaXIrRGlzcGxheSZkaXNwbGF5PXN3YXBcXFwiKTtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CdW5nZWUrU3BpY2UmZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXkmZmFtaWx5PVZUMzIzJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlZUMzIzXFxcIiwgbW9ub3NwYWNlO1xcbn1cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHN2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjcsIDIxNCwgMjU1KTtcXG59XFxuLmJvYXJkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICA+ICoge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICA+ICoge1xcbiAgICAgIGZsZXg6IDE7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4udGl0bGUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJCdW5nZWUgU3BpY2VcXFwiLCBzZXJpZjtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYWxsOiBpbml0aWFsO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMjA5LCAyMDkpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5pbnN0cnVjdGlvbnMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5sYWJlbCB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcbi5hbmdsZS13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMXJlbTtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuc2VsZWN0IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVlQzMjNcXFwiLCBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVib2FyZCgpIHtcbiAgY29uc3QgYm9hcmQgPSBbXTtcbiAgY29uc3QgYWxsU2hpcHMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgY29uc3QgeSA9IFtdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgY29uc3QgeCA9IHtcbiAgICAgICAgYmVlbkhpdDogZmFsc2UsXG4gICAgICAgIHNoaXBDZWxsOiBudWxsLFxuICAgICAgfTtcbiAgICAgIHkucHVzaCh4KTtcbiAgICB9XG4gICAgYm9hcmQucHVzaCh5KTtcbiAgfVxuICBjb25zdCBwbGFjZVNoaXAgPSAoc3RhcnRpbmdBcnIsIGVuZGluZ0FycikgPT4ge1xuICAgIGlmIChzdGFydGluZ0FyclswXSAhPT0gZW5kaW5nQXJyWzBdKSB7XG4gICAgICBpZiAoc3RhcnRpbmdBcnJbMV0gIT09IGVuZGluZ0FyclsxXSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTaGlwIG11c3QgYmUgc3RyYWlnaHRseSBhbGlnbmVkXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkgKz0gMSkge1xuICAgICAgaWYgKHN0YXJ0aW5nQXJyW2ldID4gOSB8fCBlbmRpbmdBcnJbaV0gPiA5KSByZXR1cm47XG4gICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvb3JkaW5hdGVzXCIpO1xuICAgICAgaWYgKHN0YXJ0aW5nQXJyW2ldIDwgMCB8fCBlbmRpbmdBcnJbaV0gPCAwKSByZXR1cm47XG4gICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvb3JkaW5hdGVzXCIpO1xuICAgIH1cbiAgICBsZXQgc2hpcCA9IFwiXCI7XG4gICAgaWYgKHN0YXJ0aW5nQXJyWzBdICE9PSBlbmRpbmdBcnJbMF0pIHtcbiAgICAgIHNoaXAgPSBTaGlwKHsgbGVuZ3RoOiBNYXRoLmFicyhzdGFydGluZ0FyclswXSAtIGVuZGluZ0FyclswXSkgKyAxIH0pO1xuICAgIH0gZWxzZSBpZiAoc3RhcnRpbmdBcnJbMV0gIT09IGVuZGluZ0FyclsxXSkge1xuICAgICAgc2hpcCA9IFNoaXAoeyBsZW5ndGg6IE1hdGguYWJzKHN0YXJ0aW5nQXJyWzFdIC0gZW5kaW5nQXJyWzFdKSArIDEgfSk7XG4gICAgfVxuXG4gICAgaWYgKHN0YXJ0aW5nQXJyWzBdICE9PSBlbmRpbmdBcnJbMF0pIHtcbiAgICAgIC8vIDMsMyAtPiA4LCAzXG5cbiAgICAgIGNvbnN0IGhlaWdodCA9IHN0YXJ0aW5nQXJyWzFdO1xuICAgICAgZm9yIChcbiAgICAgICAgbGV0IGkgPSBNYXRoLm1pbihzdGFydGluZ0FyclswXSwgZW5kaW5nQXJyWzBdKTtcbiAgICAgICAgaSA8PSBNYXRoLm1heChzdGFydGluZ0FyclswXSwgZW5kaW5nQXJyWzBdKTtcbiAgICAgICAgaSArPSAxXG4gICAgICApIHtcbiAgICAgICAgaWYgKGJvYXJkW2ldW2hlaWdodF0uc2hpcENlbGwgIT09IG51bGwpIHJldHVybjtcbiAgICAgICAgYm9hcmRbaV1baGVpZ2h0XS5zaGlwQ2VsbCA9IHNoaXA7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzdGFydGluZ0FyclsxXSAhPT0gZW5kaW5nQXJyWzFdKSB7XG4gICAgICBjb25zdCB4ID0gc3RhcnRpbmdBcnJbMF07XG4gICAgICBmb3IgKFxuICAgICAgICBsZXQgaSA9IE1hdGgubWluKHN0YXJ0aW5nQXJyWzFdLCBlbmRpbmdBcnJbMV0pO1xuICAgICAgICBpIDw9IE1hdGgubWF4KHN0YXJ0aW5nQXJyWzFdLCBlbmRpbmdBcnJbMV0pO1xuICAgICAgICBpICs9IDFcbiAgICAgICkge1xuICAgICAgICBpZiAoYm9hcmRbeF1baV0uc2hpcENlbGwgIT09IG51bGwpIHJldHVybjtcbiAgICAgICAgYm9hcmRbeF1baV0uc2hpcENlbGwgPSBzaGlwO1xuICAgICAgfVxuICAgIH1cbiAgICBhbGxTaGlwcy5wdXNoKHNoaXApO1xuICB9O1xuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkcykgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSArPSAxKSB7XG4gICAgICBpZiAoY29vcmRzW2ldID4gOSB8fCBjb29yZHNbaV0gPCAwKSByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHggPSBjb29yZHNbMF07XG4gICAgY29uc3QgeSA9IGNvb3Jkc1sxXTtcbiAgICBib2FyZFt4XVt5XS5iZWVuSGl0ID0gdHJ1ZTtcbiAgICBpZiAoYm9hcmRbeF1beV0uc2hpcENlbGwgIT09IG51bGwpIHtcbiAgICAgIGJvYXJkW3hdW3ldLnNoaXBDZWxsLmhpdCgpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYWxsU3VuayA9ICgpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbFNoaXBzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoYWxsU2hpcHNbaV0uaXNTdW5rKCkgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuICByZXR1cm4geyBwbGFjZVNoaXAsIHJlY2VpdmVBdHRhY2ssIGFsbFN1bmssIGJvYXJkLCBhbGxTaGlwcyB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLWNvbnN0ICovXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lY29udHJvbGxlcihcbiAgcGxheWVyT25lTmFtZSA9IFwiSHVtYW5cIixcbiAgcGxheWVyVHdvTmFtZSA9IFwiUm9ib3RcIlxuKSB7XG4gIGxldCBnYW1lT3ZlciA9IGZhbHNlO1xuICBsZXQgYm9hcmRzRmlsbGVkID0gZmFsc2U7XG4gIGNvbnN0IHBsYXllck9uZSA9IFBsYXllcih7IG5hbWU6IHBsYXllck9uZU5hbWUgfSk7XG4gIGNvbnN0IHBsYXllclR3byA9IFBsYXllcih7IG5hbWU6IHBsYXllclR3b05hbWUgfSk7XG4gIGxldCBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJPbmU7XG4gIGxldCB3YWl0aW5nUGxheWVyID0gcGxheWVyVHdvO1xuICBjb25zdCBjaGFuZ2VBY3RpdmVQbGF5ZXIgPSAoKSA9PiB7XG4gICAgaWYgKGFjdGl2ZVBsYXllciA9PT0gcGxheWVyT25lKSB7XG4gICAgICBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJUd287XG4gICAgICB3YWl0aW5nUGxheWVyID0gcGxheWVyT25lO1xuICAgIH0gZWxzZSB7XG4gICAgICBhY3RpdmVQbGF5ZXIgPSBwbGF5ZXJPbmU7XG4gICAgICB3YWl0aW5nUGxheWVyID0gcGxheWVyVHdvO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcGxheVBsYWNlUm91bmQgPSAoc3RhcnRpbmcsIGVuZGluZykgPT4ge1xuICAgIGlmIChib2FyZHNGaWxsZWQpIHRocm93IG5ldyBFcnJvcihcImFsbCBzaGlwcyBhbHJlYWR5IHBsYWNlZFwiKTtcbiAgICBjb25zdCBvbGRTaGlwQ291bnQgPSBhY3RpdmVQbGF5ZXIuZ2V0Qm9hcmQoKS5hbGxTaGlwcy5sZW5ndGg7XG4gICAgYWN0aXZlUGxheWVyLmdldEJvYXJkKCkucGxhY2VTaGlwKHN0YXJ0aW5nLCBlbmRpbmcpO1xuICAgIGlmIChcbiAgICAgIGFjdGl2ZVBsYXllci5nZXRCb2FyZCgpLmFsbFNoaXBzLmxlbmd0aCA+PSA1ICYmXG4gICAgICB3YWl0aW5nUGxheWVyLmdldEJvYXJkKCkuYWxsU2hpcHMubGVuZ3RoID49IDVcbiAgICApIHtcbiAgICAgIGJvYXJkc0ZpbGxlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChhY3RpdmVQbGF5ZXIuZ2V0Qm9hcmQoKS5hbGxTaGlwcy5sZW5ndGggPiBvbGRTaGlwQ291bnQpIHtcbiAgICAgIGNoYW5nZUFjdGl2ZVBsYXllcigpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcGxheVJvdW5kID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgaWYgKGdhbWVPdmVyKSB0aHJvdyBuZXcgRXJyb3IoXCJnYW1lIG92ZXJcIik7XG4gICAgaWYgKGJvYXJkc0ZpbGxlZCA9PT0gZmFsc2UpIHRocm93IG5ldyBFcnJvcihcIm5vdCBhbGwgc2hpcHMgcGxhY2VkXCIpO1xuICAgIGlmIChcbiAgICAgIHdhaXRpbmdQbGF5ZXIuZ2V0Qm9hcmQoKS5ib2FyZFtjb29yZGluYXRlc1swXV1bY29vcmRpbmF0ZXNbMV1dLmJlZW5IaXQgPT09XG4gICAgICB0cnVlXG4gICAgKVxuICAgICAgcmV0dXJuO1xuICAgIHdhaXRpbmdQbGF5ZXIuZ2V0Qm9hcmQoKS5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgICBpZiAod2FpdGluZ1BsYXllci5nZXRCb2FyZCgpLmFsbFN1bmsoKSkge1xuICAgICAgYWN0aXZlUGxheWVyLmlzV2lubmVyID0gdHJ1ZTtcbiAgICAgIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coZ2FtZU92ZXIpO1xuICAgIGNoYW5nZUFjdGl2ZVBsYXllcigpO1xuICB9O1xuICBjb25zdCBnZXRBY3RpdmVQbGF5ZXIgPSAoKSA9PiBhY3RpdmVQbGF5ZXI7XG4gIGNvbnN0IGdldFdhaXRpbmdQbGF5ZXIgPSAoKSA9PiB3YWl0aW5nUGxheWVyO1xuXG4gIGxldCBsYXN0Q29tcHV0ZXJIaXQgPSBbXTtcbiAgY29uc3QgY29tcHV0ZXJQbGF5Um91bmQgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9zc2libGVNb3ZlcyA9IFtdO1xuICAgIGlmIChhY3RpdmVQbGF5ZXIgIT09IHBsYXllclR3bykgcmV0dXJuO1xuICAgIGlmIChsYXN0Q29tcHV0ZXJIaXRbMF0gKyAxIDwgMTApIHtcbiAgICAgIGlmIChcbiAgICAgICAgd2FpdGluZ1BsYXllci5nZXRCb2FyZCgpLmJvYXJkW2xhc3RDb21wdXRlckhpdFswXSArIDFdW1xuICAgICAgICAgIGxhc3RDb21wdXRlckhpdFsxXVxuICAgICAgICBdLmJlZW5IaXQgIT09IHRydWVcbiAgICAgICkge1xuICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goW2xhc3RDb21wdXRlckhpdFswXSArIDEsIGxhc3RDb21wdXRlckhpdFsxXV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobGFzdENvbXB1dGVySGl0WzBdIC0gMSA+IC0xKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHdhaXRpbmdQbGF5ZXIuZ2V0Qm9hcmQoKS5ib2FyZFtsYXN0Q29tcHV0ZXJIaXRbMF0gLSAxXVtcbiAgICAgICAgICBsYXN0Q29tcHV0ZXJIaXRbMV1cbiAgICAgICAgXS5iZWVuSGl0ICE9PSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKFtsYXN0Q29tcHV0ZXJIaXRbMF0gLSAxLCBsYXN0Q29tcHV0ZXJIaXRbMV1dKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGxhc3RDb21wdXRlckhpdFsxXSArIDEgPCAxMCkge1xuICAgICAgaWYgKFxuICAgICAgICB3YWl0aW5nUGxheWVyLmdldEJvYXJkKCkuYm9hcmRbbGFzdENvbXB1dGVySGl0WzBdXVtcbiAgICAgICAgICBsYXN0Q29tcHV0ZXJIaXRbMV0gKyAxXG4gICAgICAgIF0uYmVlbkhpdCAhPT0gdHJ1ZVxuICAgICAgKSB7XG4gICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChbbGFzdENvbXB1dGVySGl0WzBdLCBsYXN0Q29tcHV0ZXJIaXRbMV0gKyAxXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsYXN0Q29tcHV0ZXJIaXRbMV0gLSAxID4gLTEpIHtcbiAgICAgIGlmIChcbiAgICAgICAgd2FpdGluZ1BsYXllci5nZXRCb2FyZCgpLmJvYXJkW2xhc3RDb21wdXRlckhpdFswXV1bXG4gICAgICAgICAgbGFzdENvbXB1dGVySGl0WzFdIC0gMVxuICAgICAgICBdLmJlZW5IaXQgIT09IHRydWVcbiAgICAgICkge1xuICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goW2xhc3RDb21wdXRlckhpdFswXSwgbGFzdENvbXB1dGVySGl0WzFdIC0gMV0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBzZWxlY3QgcmFuZG9tIG1vdmUgZnJvbSBwb3NzaWJsZU1vdmVzLlxuICAgIGlmIChwb3NzaWJsZU1vdmVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgLy9cbiAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVNb3Zlcy5sZW5ndGgpO1xuICAgICAgcGxheVJvdW5kKHBvc3NpYmxlTW92ZXNbaW5kZXhdKTtcbiAgICAgIGlmIChcbiAgICAgICAgcGxheWVyT25lLmdldEJvYXJkKCkuYm9hcmRbcG9zc2libGVNb3Zlc1tpbmRleF1bMF1dW1xuICAgICAgICAgIHBvc3NpYmxlTW92ZXNbaW5kZXhdWzFdXG4gICAgICAgIF0uc2hpcENlbGwgIT09IG51bGxcbiAgICAgICkge1xuICAgICAgICBsYXN0Q29tcHV0ZXJIaXQgPSBwb3NzaWJsZU1vdmVzW2luZGV4XTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBlbHNlLCByYW5kb20gcGF0aCAodmVyaWZ5IGFyZ3MpXG4gICAgbGV0IGtlZXBHb2luZyA9IHRydWU7XG4gICAgbGV0IHJhbmRYID0gMDtcbiAgICBsZXQgcmFuZFkgPSAwO1xuICAgIHdoaWxlIChrZWVwR29pbmcpIHtcbiAgICAgIHJhbmRYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgcmFuZFkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBpZiAocGxheWVyT25lLmdldEJvYXJkKCkuYm9hcmRbcmFuZFhdW3JhbmRZXS5iZWVuSGl0ID09PSBmYWxzZSkge1xuICAgICAgICBwbGF5Um91bmQoW3JhbmRYLCByYW5kWV0pO1xuICAgICAgICBrZWVwR29pbmcgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY2hlY2sgaWYgdGhpcyBoaXQgc2NvcmVkXG4gICAgaWYgKHBsYXllck9uZS5nZXRCb2FyZCgpLmJvYXJkW3JhbmRYXVtyYW5kWV0uc2hpcENlbGwgIT09IG51bGwpIHtcbiAgICAgIGxhc3RDb21wdXRlckhpdCA9IFtyYW5kWCwgcmFuZFldO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZ2V0SHVtYW4gPSAoKSA9PiBwbGF5ZXJPbmU7XG4gIGNvbnN0IGdldENQVSA9ICgpID0+IHBsYXllclR3bztcblxuICBjb25zdCBjb21wdXRlclBsYXlQbGFjZVJvdW5kID0gKCkgPT4ge307XG4gIC8vXG4gIHJldHVybiB7XG4gICAgcGxheVJvdW5kLFxuICAgIHBsYXlQbGFjZVJvdW5kLFxuICAgIGdldEFjdGl2ZVBsYXllcixcbiAgICBnZXRXYWl0aW5nUGxheWVyLFxuICAgIGNvbXB1dGVyUGxheVJvdW5kLFxuICAgIGNvbXB1dGVyUGxheVBsYWNlUm91bmQsXG4gICAgZ2V0SHVtYW4sXG4gICAgZ2V0Q1BVLFxuICAgIGJvYXJkc0ZpbGxlZCxcbiAgICBnYW1lT3ZlcixcbiAgfTtcbn1cbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcih7IG5hbWUgfSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG4gIGxldCBpc1dpbm5lciA9IGZhbHNlO1xuICBjb25zdCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBnYW1lYm9hcmQ7XG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuICBjb25zdCBhdHRhY2sgPSAoYm9hcmQsIGNvb3JkcykgPT4ge1xuICAgIGJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRzKTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBnZXROYW1lLFxuICAgIGdldEJvYXJkLFxuICAgIGF0dGFjayxcbiAgICBpc1dpbm5lcixcbiAgfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnRpbnVlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG4vKiBlc2xpbnQtZGlzYWJsZSByYWRpeCAqL1xuaW1wb3J0IEdhbWVjb250cm9sbGVyIGZyb20gXCIuL2dhbWVjb250cm9sbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjcmVlbmNvbnRyb2xsZXIoKSB7XG4gIGNvbnN0IGdhbWUgPSBHYW1lY29udHJvbGxlcigpO1xuICBjb25zdCBET01MZW5ndGhzID0gWzQsIDMsIDIsIDIsIDFdO1xuICBjb25zdCBET01JbnN0cnVjdGlvbnMgPSBbXG4gICAgXCJQbGFjZSBjYXJyaWVyIChsZW5ndGggNSlcIixcbiAgICBcIlBsYWNlIGJhdHRsZXNoaXAgKGxlbmd0aCA0KVwiLFxuICAgIFwiUGxhY2UgY3J1aXNlciAobGVuZ3RoIDMpXCIsXG4gICAgXCJQbGFjZSBzdWJtYXJpbmUgKGxlbmd0aCAzXCIsXG4gICAgXCJQbGFjZSBkZXN0cm95ZXIgKGxlbmd0aCAyKVwiLFxuICBdO1xuICBsZXQgRE9NSW5kZXggPSAwO1xuICBjb25zdCBET01JbnN0cnVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnN0cnVjdGlvbnNcIik7XG4gIERPTUluc3RydWN0b3IudGV4dENvbnRlbnQgPSBET01JbnN0cnVjdGlvbnNbRE9NSW5kZXhdO1xuICBjb25zdCBib2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkcy1jb250YWluZXJcIik7XG4gIGNvbnN0IERPTWJvYXJkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IERPTWJvYXJkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IERPTUJvYXJkcyA9IFtET01ib2FyZDEsIERPTWJvYXJkMl07XG4gIGZ1bmN0aW9uIERPTVJlY2VpdmVBdHRhY2soZXZlbnQpIHtcbiAgICAvLyBnZXQgZGF0YXNldCBjb29yZGluYXRlc1xuICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LnJvdyk7XG4gICAgY29uc3QgY2VsbCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LmNlbGwpO1xuICAgIGNvbnNvbGUubG9nKHJvdywgY2VsbCk7XG4gICAgaWYgKGdhbWUuZ2V0V2FpdGluZ1BsYXllcigpLmdldEJvYXJkKCkuYm9hcmRbcm93XVtjZWxsXS5iZWVuSGl0ID09PSB0cnVlKVxuICAgICAgcmV0dXJuO1xuICAgIGlmIChnYW1lLmdhbWVPdmVyKSByZXR1cm47XG4gICAgdHJ5IHtcbiAgICAgIGdhbWUucGxheVJvdW5kKFtyb3csIGNlbGxdKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIERPTUluc3RydWN0b3IudGV4dENvbnRlbnQgPSBcIkdhbWUgb3ZlciEgUGxheWVyIDIgd2lucyFcIjtcbiAgICB9XG4gICAgdXBkYXRlQm9hcmQoKTtcbiAgICBjb25zb2xlLmxvZyhnYW1lLmdhbWVPdmVyKTtcblxuICAgIGlmIChnYW1lLmdhbWVPdmVyID09PSB0cnVlKSB7XG4gICAgICAvLyByZW1vdmUgZXZlbnQgbGlzdGVuZXIgZnJvbSBib2FyZC5cbiAgICAgIERPTUJvYXJkc1sxXS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NUmVjZWl2ZUF0dGFjayk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGdlbmVyYXRlIHJhbmRvbSBjb29yZHMgYXMgbG9uZyBhcyB0aGV5cmUgaW52YWxpZC4uLlxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zdGFudC1jb25kaXRpb25cbiAgICAvLyB3aGlsZSAodHJ1ZSkge1xuICAgIC8vICAgY29uc3QgcmFuZFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgLy8gICBjb25zdCByYW5kWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAvLyAgIGlmIChcbiAgICAvLyAgICAgZ2FtZS5nZXRXYWl0aW5nUGxheWVyKCkuZ2V0Qm9hcmQoKS5ib2FyZFtyYW5kWF1bcmFuZFldLmJlZW5IaXQgPT09IHRydWVcbiAgICAvLyAgICkge1xuICAgIC8vICAgICBjb250aW51ZTtcbiAgICAvLyAgIH1cbiAgICAvLyAgIHRyeSB7XG4gICAgLy8gICAgIGdhbWUucGxheVJvdW5kKFtyYW5kWCwgcmFuZFldKTtcbiAgICAvLyAgIH0gY2F0Y2gge1xuICAgIC8vICAgICBET01JbnN0cnVjdG9yLnRleHRDb250ZW50ID0gXCJHYW1lIG92ZXIhIEh1bWFuIHdpbnMhXCI7XG4gICAgLy8gICB9XG4gICAgLy8gICBicmVhaztcbiAgICAvLyB9XG4gICAgdHJ5IHtcbiAgICAgIGdhbWUuY29tcHV0ZXJQbGF5Um91bmQoKTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIERPTUluc3RydWN0b3IudGV4dENvbnRlbnQgPSBcIkdhbWUgb3ZlciEgUGxheWVyIDEgd2lucyFcIjtcbiAgICB9XG4gICAgdXBkYXRlQm9hcmQoKTtcblxuICAgIGlmIChnYW1lLmdhbWVPdmVyID09PSB0cnVlKSB7XG4gICAgICBET01Cb2FyZHNbMV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTVJlY2VpdmVBdHRhY2spO1xuICAgIH1cbiAgfVxuICBjb25zdCBET01TaGlwUGxhY2UgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCByb3cgPSBwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC5yb3cpO1xuICAgIGNvbnN0IGNlbGwgPSBwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC5jZWxsKTtcbiAgICBjb25zdCBzdGFydGluZyA9IFtyb3csIGNlbGxdO1xuICAgIGNvbnN0IGVuZGluZyA9IFtyb3csIGNlbGxdO1xuICAgIGNvbnN0IGFuZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGFjZW1lbnQtYW5nbGVcIikudmFsdWU7XG4gICAgaWYgKGFuZ2xlID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgZW5kaW5nWzFdICs9IERPTUxlbmd0aHNbRE9NSW5kZXhdO1xuICAgIH1cbiAgICBpZiAoYW5nbGUgPT09IFwidmVydGljYWxcIikge1xuICAgICAgZW5kaW5nWzBdICs9IERPTUxlbmd0aHNbRE9NSW5kZXhdO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkgKz0gMSkge1xuICAgICAgaWYgKHN0YXJ0aW5nW2ldID4gOSB8fCBlbmRpbmdbaV0gPiA5KSByZXR1cm47XG4gICAgICBpZiAoc3RhcnRpbmdbaV0gPCAwIHx8IGVuZGluZ1tpXSA8IDApIHJldHVybjtcbiAgICB9XG4gICAgLy8gdGVzdCBoZXJlIGFnYWluXG4gICAgaWYgKHN0YXJ0aW5nWzBdICE9PSBlbmRpbmdbMF0pIHtcbiAgICAgIC8vIGNoZWNrIGV2ZXJ5IHNxdWFyZSBpbiB0aGUgcGF0aCB0byBzZWUgaWYgYmFkLiBpZiBiYWQsIGNvbnRpbnVlIGtleXdvcmRcbiAgICAgIGNvbnN0IGhlaWdodCA9IHN0YXJ0aW5nWzFdO1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nWzBdOyBpIDw9IGVuZGluZ1swXTsgaSArPSAxKSB7XG4gICAgICAgIGlmIChnYW1lLmdldEh1bWFuKCkuZ2V0Qm9hcmQoKS5ib2FyZFtpXVtoZWlnaHRdLnNoaXBDZWxsICE9PSBudWxsKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChzdGFydGluZ1sxXSAhPT0gZW5kaW5nWzFdKSB7XG4gICAgICBjb25zdCB4ID0gc3RhcnRpbmdbMF07XG4gICAgICBmb3IgKFxuICAgICAgICBsZXQgaSA9IE1hdGgubWluKHN0YXJ0aW5nWzFdLCBlbmRpbmdbMV0pO1xuICAgICAgICBpIDw9IE1hdGgubWF4KHN0YXJ0aW5nWzFdLCBlbmRpbmdbMV0pO1xuICAgICAgICBpICs9IDFcbiAgICAgICkge1xuICAgICAgICBpZiAoZ2FtZS5nZXRIdW1hbigpLmdldEJvYXJkKCkuYm9hcmRbeF1baV0uc2hpcENlbGwgIT09IG51bGwpIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBnYW1lLnBsYXlQbGFjZVJvdW5kKHN0YXJ0aW5nLCBlbmRpbmcpO1xuICAgIC8vIGhlcmUgbWFrZSBsb2dpYyBmb3IgbmV3IHN0YXJ0aW5nIGVuZGluZ1xuICAgIC8vIEkgQ0FOIERPIEEgV0hJTEUgTE9PUCFcbiAgICBjb25zdCBvbGRMZW5ndGggPSBnYW1lLmdldENQVSgpLmdldEJvYXJkKCkuYWxsU2hpcHMubGVuZ3RoO1xuICAgIHdoaWxlIChnYW1lLmdldENQVSgpLmdldEJvYXJkKCkuYWxsU2hpcHMubGVuZ3RoID09PSBvbGRMZW5ndGgpIHtcbiAgICAgIGNvbnN0IHJhbmRYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICBjb25zdCByYW5kWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgY29uc3QgcmFuZEFuZ2xlcyA9IFtcInZlcnRpY2FsXCIsIFwiaG9yaXpvbnRhbFwiXTtcbiAgICAgIGNvbnN0IHJhbmRBbmdsZSA9IHJhbmRBbmdsZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMildO1xuICAgICAgY29uc3QgY3B1U3RhcnRpbmcgPSBbcmFuZFgsIHJhbmRZXTtcbiAgICAgIGNvbnN0IGNwdUVuZGluZyA9IFtyYW5kWCwgcmFuZFldO1xuICAgICAgaWYgKHJhbmRBbmdsZSA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgY3B1RW5kaW5nWzFdICs9IERPTUxlbmd0aHNbRE9NSW5kZXhdO1xuICAgICAgfVxuICAgICAgaWYgKHJhbmRBbmdsZSA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIGNwdUVuZGluZ1swXSArPSBET01MZW5ndGhzW0RPTUluZGV4XTtcbiAgICAgIH1cbiAgICAgIGlmIChjcHVFbmRpbmdbMF0gPiA5KSBjb250aW51ZTtcbiAgICAgIGlmIChjcHVFbmRpbmdbMV0gPiA5KSBjb250aW51ZTtcblxuICAgICAgLy8gY2hlY2sgY29vcmRpbmF0ZSB2YWxpZGl0eS4uLlxuICAgICAgLy8gaWYgYW5nbGUgaXMgdmVydGljYWwuLi4gc3RhcnRbMF0gIT09IGVuZFswXVxuICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgIGlmIChjcHVTdGFydGluZ1swXSAhPT0gY3B1RW5kaW5nWzBdKSB7XG4gICAgICAgIC8vIGNoZWNrIGV2ZXJ5IHNxdWFyZSBpbiB0aGUgcGF0aCB0byBzZWUgaWYgYmFkLiBpZiBiYWQsIGNvbnRpbnVlIGtleXdvcmRcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gY3B1U3RhcnRpbmdbMV07XG4gICAgICAgIGZvciAobGV0IGkgPSBjcHVTdGFydGluZ1swXTsgaSA8PSBjcHVFbmRpbmdbMF07IGkgKz0gMSkge1xuICAgICAgICAgIGlmIChnYW1lLmdldENQVSgpLmdldEJvYXJkKCkuYm9hcmRbaV1baGVpZ2h0XS5zaGlwQ2VsbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgICAgICBjb3VudCArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNwdVN0YXJ0aW5nWzFdICE9PSBjcHVFbmRpbmdbMV0pIHtcbiAgICAgICAgY29uc3QgeCA9IGNwdVN0YXJ0aW5nWzBdO1xuICAgICAgICBmb3IgKFxuICAgICAgICAgIGxldCBpID0gTWF0aC5taW4oY3B1U3RhcnRpbmdbMV0sIGNwdUVuZGluZ1sxXSk7XG4gICAgICAgICAgaSA8PSBNYXRoLm1heChjcHVTdGFydGluZ1sxXSwgY3B1RW5kaW5nWzFdKTtcbiAgICAgICAgICBpICs9IDFcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKGdhbWUuZ2V0Q1BVKCkuZ2V0Qm9hcmQoKS5ib2FyZFt4XVtpXS5zaGlwQ2VsbCAhPT0gbnVsbClcbiAgICAgICAgICAgIGNvdW50ICs9IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjb3VudCAhPT0gMCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZ2FtZS5wbGF5UGxhY2VSb3VuZChjcHVTdGFydGluZywgY3B1RW5kaW5nKTtcbiAgICB9XG4gICAgRE9NSW5kZXggKz0gMTtcbiAgICBET01JbnN0cnVjdG9yLnRleHRDb250ZW50ID0gRE9NSW5zdHJ1Y3Rpb25zW0RPTUluZGV4XSB8fCBcIlwiO1xuICAgIGlmIChET01JbmRleCA9PT0gNSkge1xuICAgICAgLy9cbiAgICAgIERPTUJvYXJkcy5mb3JFYWNoKChib2FyZCwgaW5kZXgpID0+IHtcbiAgICAgICAgYm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTVNoaXBQbGFjZSk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMSkge1xuICAgICAgICAgIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01SZWNlaXZlQXR0YWNrKTtcbiAgICAgICAgfVxuICAgICAgICBib2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoRE9NYm9hcmQyKTtcbiAgICAgICAgRE9NSW5zdHJ1Y3Rvci50ZXh0Q29udGVudCA9IFwiU2luayB5b3VyIG9wcG9uZW50IVwiO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgIHVwZGF0ZUJvYXJkKCk7XG4gIH07XG4gIERPTUJvYXJkcy5mb3JFYWNoKChET01Cb2FyZCkgPT4ge1xuICAgIERPTUJvYXJkLmNsYXNzTGlzdC5hZGQoXCJib2FyZFwiKTtcbiAgICBET01Cb2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NU2hpcFBsYWNlKTtcbiAgfSk7XG4gIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChET01ib2FyZDEpO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUJvYXJkKCkge1xuICAgIGNvbnN0IGh1bWFuQm9hcmQgPSBnYW1lLmdldEh1bWFuKCkuZ2V0Qm9hcmQoKS5ib2FyZDtcbiAgICBjb25zdCBjb21wdXRlckJvYXJkID0gZ2FtZS5nZXRDUFUoKS5nZXRCb2FyZCgpLmJvYXJkO1xuICAgIGNvbnN0IGJvYXJkcyA9IFtodW1hbkJvYXJkLCBjb21wdXRlckJvYXJkXTtcblxuICAgIGJvYXJkcy5mb3JFYWNoKChib2FyZCwgYm9hcmRJbmRleCkgPT4ge1xuICAgICAgRE9NQm9hcmRzW2JvYXJkSW5kZXhdLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgYm9hcmQuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBET01Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByb3cuZm9yRWFjaCgoY2VsbCwgY2VsbEluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgRE9NQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgRE9NQ2VsbC5kYXRhc2V0LnJvdyA9IGAke3Jvd0luZGV4fWA7XG4gICAgICAgICAgRE9NQ2VsbC5kYXRhc2V0LmNlbGwgPSBgJHtjZWxsSW5kZXh9YDtcbiAgICAgICAgICAvLyBpZiAoYm9hcmRJbmRleCA9PT0gMCkge1xuICAgICAgICAgIGlmIChjZWxsLnNoaXBDZWxsICE9PSBudWxsKSB7XG4gICAgICAgICAgICBET01DZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIH1cbiAgICAgICAgICBpZiAoY2VsbC5iZWVuSGl0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBET01DZWxsLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiO1xuICAgICAgICAgICAgaWYgKGNlbGwuc2hpcENlbGwgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgRE9NQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBET01Sb3cuYXBwZW5kQ2hpbGQoRE9NQ2VsbCk7XG4gICAgICAgIH0pO1xuICAgICAgICBET01Cb2FyZHNbYm9hcmRJbmRleF0uYXBwZW5kQ2hpbGQoRE9NUm93KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlQm9hcmQoKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXAoeyBsZW5ndGggfSkge1xuICBjb25zdCBwb3NzaWJsZUxlbmd0aHMgPSBbNSwgNCwgMywgMl07XG4gIGlmICghcG9zc2libGVMZW5ndGhzLmluY2x1ZGVzKGxlbmd0aCkpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgc2hpcCBsZW5ndGhcIik7XG4gIGxldCBoaXRzID0gMDtcbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGhpdHMgKz0gMTtcbiAgfTtcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmIChoaXRzID09PSBsZW5ndGgpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuICByZXR1cm4geyBpc1N1bmssIGhpdCwgZ2V0TGVuZ3RoIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0YXRpYy9zdHlsZS5jc3NcIjtcbmltcG9ydCBTY3JlZW5jb250cm9sbGVyIGZyb20gXCIuL3NjcmVlbmNvbnRyb2xsZXJcIjtcblxuU2NyZWVuY29udHJvbGxlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9