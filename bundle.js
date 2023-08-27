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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
`, "",{"version":3,"sources":["webpack://./src/static/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,aAAa;EACb,sBAAsB;EACtB,oBAAoB;EACpB,aAAa;EACb,YAAY;EACZ;IACE,aAAa;IACb,OAAO;IACP;MACE,OAAO;MACP,aAAa;MACb,uBAAuB;MACvB,mBAAmB;MACnB,iBAAiB;MACjB,eAAe;IACjB;EACF;AACF;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,oCAAoC;EACpC,uBAAuB;AACzB","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.board {\n  border: 1px solid black;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  height: 500px;\n  width: 500px;\n  > * {\n    display: flex;\n    flex: 1;\n    > * {\n      flex: 1;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      font-weight: bold;\n      font-size: 2rem;\n    }\n  }\n}\n\n.boards-container {\n  display: flex;\n  justify-content: center;\n  gap: 2rem;\n}\n\nbutton {\n  all: initial;\n  background-color: rgb(209, 209, 209);\n  border: 1px solid black;\n}\n"],"sourceRoot":""}]);
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
    waitingPlayer.receiveAttack(coordinates);
    if (waitingPlayer.allSunk()) {
      activePlayer.isWinner = true;
      gameOver = true;
    }
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
        waitingPlayer.getBoard().board[possibleMoves[index][0]][
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
      if (waitingPlayer.getBoard().board[randX][randY].beenHit === false) {
        playRound([randX, randY]);
        keepGoing = false;
      }
    }
    // check if this hit scored
    if (waitingPlayer.getBoard().board[randX][randY].shipCell !== null) {
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
  const boardsContainer = document.querySelector(".boards-container");
  const DOMboard1 = document.createElement("div");
  const DOMboard2 = document.createElement("div");
  const DOMBoards = [DOMboard1, DOMboard2];
  function DOMReceiveAttack(event) {
    // get dataset coordinates
    // make sure that if already beenhit, return
    // player.playturn
    // generate random coords until valid
    // cpu.playturn
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
      console.log(cpuStarting[0], cpuStarting[1]);
      console.log(cpuEnding[0], cpuEnding[1]);
      if (cpuEnding[0] > 9) continue;
      if (cpuEnding[1] > 9) continue;

      // check coordinate validity...
      // if angle is vertical... start[0] !== end[0]
      let count = 0;
      if (cpuStarting[0] !== cpuEnding[0]) {
        // check every square in the path to see if bad. if bad, continue keyword
        const height = cpuStarting[1];
        for (let i = cpuStarting[0]; i <= cpuEnding[0]; i += 1) {
          console.log(cpuEnding[0]);
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
    if (DOMIndex === 5) {
      //
      DOMBoards.forEach((board, index) => {
        board.removeEventListener("click", DOMShipPlace);
        if (index === 1) {
          board.addEventListener("click", DOMReceiveAttack);
        }
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
  boardsContainer.appendChild(DOMboard2);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQWdCLFFBQVE7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ3NCOztBQUVsRCw2REFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0YXRpYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3RhdGljL3N0eWxlLmNzcz8yNWNhIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmVlbmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5ib2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgd2lkdGg6IDUwMHB4O1xuICA+ICoge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICA+ICoge1xuICAgICAgZmxleDogMTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG4gIH1cbn1cblxuLmJvYXJkcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAycmVtO1xufVxuXG5idXR0b24ge1xuICBhbGw6IGluaXRpYWw7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDIwOSwgMjA5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdGF0aWMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLFlBQVk7RUFDWjtJQUNFLGFBQWE7SUFDYixPQUFPO0lBQ1A7TUFDRSxPQUFPO01BQ1AsYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLGVBQWU7SUFDakI7RUFDRjtBQUNGOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLHVCQUF1QjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gID4gKiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXg6IDE7XFxuICAgID4gKiB7XFxuICAgICAgZmxleDogMTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5ib2FyZHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGFsbDogaW5pdGlhbDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDIwOSwgMjA5KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHYW1lYm9hcmQoKSB7XG4gIGNvbnN0IGJvYXJkID0gW107XG4gIGNvbnN0IGFsbFNoaXBzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGNvbnN0IHkgPSBbXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IHggPSB7XG4gICAgICAgIGJlZW5IaXQ6IGZhbHNlLFxuICAgICAgICBzaGlwQ2VsbDogbnVsbCxcbiAgICAgIH07XG4gICAgICB5LnB1c2goeCk7XG4gICAgfVxuICAgIGJvYXJkLnB1c2goeSk7XG4gIH1cbiAgY29uc3QgcGxhY2VTaGlwID0gKHN0YXJ0aW5nQXJyLCBlbmRpbmdBcnIpID0+IHtcbiAgICBpZiAoc3RhcnRpbmdBcnJbMF0gIT09IGVuZGluZ0FyclswXSkge1xuICAgICAgaWYgKHN0YXJ0aW5nQXJyWzFdICE9PSBlbmRpbmdBcnJbMV0pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2hpcCBtdXN0IGJlIHN0cmFpZ2h0bHkgYWxpZ25lZFwiKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpICs9IDEpIHtcbiAgICAgIGlmIChzdGFydGluZ0FycltpXSA+IDkgfHwgZW5kaW5nQXJyW2ldID4gOSkgcmV0dXJuO1xuICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb29yZGluYXRlc1wiKTtcbiAgICAgIGlmIChzdGFydGluZ0FycltpXSA8IDAgfHwgZW5kaW5nQXJyW2ldIDwgMCkgcmV0dXJuO1xuICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjb29yZGluYXRlc1wiKTtcbiAgICB9XG4gICAgbGV0IHNoaXAgPSBcIlwiO1xuICAgIGlmIChzdGFydGluZ0FyclswXSAhPT0gZW5kaW5nQXJyWzBdKSB7XG4gICAgICBzaGlwID0gU2hpcCh7IGxlbmd0aDogTWF0aC5hYnMoc3RhcnRpbmdBcnJbMF0gLSBlbmRpbmdBcnJbMF0pICsgMSB9KTtcbiAgICB9IGVsc2UgaWYgKHN0YXJ0aW5nQXJyWzFdICE9PSBlbmRpbmdBcnJbMV0pIHtcbiAgICAgIHNoaXAgPSBTaGlwKHsgbGVuZ3RoOiBNYXRoLmFicyhzdGFydGluZ0FyclsxXSAtIGVuZGluZ0FyclsxXSkgKyAxIH0pO1xuICAgIH1cblxuICAgIGlmIChzdGFydGluZ0FyclswXSAhPT0gZW5kaW5nQXJyWzBdKSB7XG4gICAgICAvLyAzLDMgLT4gOCwgM1xuXG4gICAgICBjb25zdCBoZWlnaHQgPSBzdGFydGluZ0FyclsxXTtcbiAgICAgIGZvciAoXG4gICAgICAgIGxldCBpID0gTWF0aC5taW4oc3RhcnRpbmdBcnJbMF0sIGVuZGluZ0FyclswXSk7XG4gICAgICAgIGkgPD0gTWF0aC5tYXgoc3RhcnRpbmdBcnJbMF0sIGVuZGluZ0FyclswXSk7XG4gICAgICAgIGkgKz0gMVxuICAgICAgKSB7XG4gICAgICAgIGlmIChib2FyZFtpXVtoZWlnaHRdLnNoaXBDZWxsICE9PSBudWxsKSByZXR1cm47XG4gICAgICAgIGJvYXJkW2ldW2hlaWdodF0uc2hpcENlbGwgPSBzaGlwO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoc3RhcnRpbmdBcnJbMV0gIT09IGVuZGluZ0FyclsxXSkge1xuICAgICAgY29uc3QgeCA9IHN0YXJ0aW5nQXJyWzBdO1xuICAgICAgZm9yIChcbiAgICAgICAgbGV0IGkgPSBNYXRoLm1pbihzdGFydGluZ0FyclsxXSwgZW5kaW5nQXJyWzFdKTtcbiAgICAgICAgaSA8PSBNYXRoLm1heChzdGFydGluZ0FyclsxXSwgZW5kaW5nQXJyWzFdKTtcbiAgICAgICAgaSArPSAxXG4gICAgICApIHtcbiAgICAgICAgaWYgKGJvYXJkW3hdW2ldLnNoaXBDZWxsICE9PSBudWxsKSByZXR1cm47XG4gICAgICAgIGJvYXJkW3hdW2ldLnNoaXBDZWxsID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG4gICAgYWxsU2hpcHMucHVzaChzaGlwKTtcbiAgfTtcbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZHMpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkgKz0gMSkge1xuICAgICAgaWYgKGNvb3Jkc1tpXSA+IDkgfHwgY29vcmRzW2ldIDwgMCkgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB4ID0gY29vcmRzWzBdO1xuICAgIGNvbnN0IHkgPSBjb29yZHNbMV07XG4gICAgYm9hcmRbeF1beV0uYmVlbkhpdCA9IHRydWU7XG4gICAgaWYgKGJvYXJkW3hdW3ldLnNoaXBDZWxsICE9PSBudWxsKSB7XG4gICAgICBib2FyZFt4XVt5XS5zaGlwQ2VsbC5oaXQoKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxTaGlwcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGFsbFNoaXBzW2ldLmlzU3VuaygpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcbiAgcmV0dXJuIHsgcGxhY2VTaGlwLCByZWNlaXZlQXR0YWNrLCBhbGxTdW5rLCBib2FyZCwgYWxsU2hpcHMgfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1jb25zdCAqL1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZWNvbnRyb2xsZXIoXG4gIHBsYXllck9uZU5hbWUgPSBcIkh1bWFuXCIsXG4gIHBsYXllclR3b05hbWUgPSBcIlJvYm90XCJcbikge1xuICBsZXQgZ2FtZU92ZXIgPSBmYWxzZTtcbiAgbGV0IGJvYXJkc0ZpbGxlZCA9IGZhbHNlO1xuICBjb25zdCBwbGF5ZXJPbmUgPSBQbGF5ZXIoeyBuYW1lOiBwbGF5ZXJPbmVOYW1lIH0pO1xuICBjb25zdCBwbGF5ZXJUd28gPSBQbGF5ZXIoeyBuYW1lOiBwbGF5ZXJUd29OYW1lIH0pO1xuICBsZXQgYWN0aXZlUGxheWVyID0gcGxheWVyT25lO1xuICBsZXQgd2FpdGluZ1BsYXllciA9IHBsYXllclR3bztcbiAgY29uc3QgY2hhbmdlQWN0aXZlUGxheWVyID0gKCkgPT4ge1xuICAgIGlmIChhY3RpdmVQbGF5ZXIgPT09IHBsYXllck9uZSkge1xuICAgICAgYWN0aXZlUGxheWVyID0gcGxheWVyVHdvO1xuICAgICAgd2FpdGluZ1BsYXllciA9IHBsYXllck9uZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZlUGxheWVyID0gcGxheWVyT25lO1xuICAgICAgd2FpdGluZ1BsYXllciA9IHBsYXllclR3bztcbiAgICB9XG4gIH07XG4gIGNvbnN0IHBsYXlQbGFjZVJvdW5kID0gKHN0YXJ0aW5nLCBlbmRpbmcpID0+IHtcbiAgICBpZiAoYm9hcmRzRmlsbGVkKSB0aHJvdyBuZXcgRXJyb3IoXCJhbGwgc2hpcHMgYWxyZWFkeSBwbGFjZWRcIik7XG4gICAgY29uc3Qgb2xkU2hpcENvdW50ID0gYWN0aXZlUGxheWVyLmdldEJvYXJkKCkuYWxsU2hpcHMubGVuZ3RoO1xuICAgIGFjdGl2ZVBsYXllci5nZXRCb2FyZCgpLnBsYWNlU2hpcChzdGFydGluZywgZW5kaW5nKTtcbiAgICBpZiAoXG4gICAgICBhY3RpdmVQbGF5ZXIuZ2V0Qm9hcmQoKS5hbGxTaGlwcy5sZW5ndGggPj0gNSAmJlxuICAgICAgd2FpdGluZ1BsYXllci5nZXRCb2FyZCgpLmFsbFNoaXBzLmxlbmd0aCA+PSA1XG4gICAgKSB7XG4gICAgICBib2FyZHNGaWxsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoYWN0aXZlUGxheWVyLmdldEJvYXJkKCkuYWxsU2hpcHMubGVuZ3RoID4gb2xkU2hpcENvdW50KSB7XG4gICAgICBjaGFuZ2VBY3RpdmVQbGF5ZXIoKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHBsYXlSb3VuZCA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGlmIChnYW1lT3ZlcikgdGhyb3cgbmV3IEVycm9yKFwiZ2FtZSBvdmVyXCIpO1xuICAgIGlmIChib2FyZHNGaWxsZWQgPT09IGZhbHNlKSB0aHJvdyBuZXcgRXJyb3IoXCJub3QgYWxsIHNoaXBzIHBsYWNlZFwiKTtcbiAgICBpZiAoXG4gICAgICB3YWl0aW5nUGxheWVyLmdldEJvYXJkKCkuYm9hcmRbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXS5iZWVuSGl0ID09PVxuICAgICAgdHJ1ZVxuICAgIClcbiAgICAgIHJldHVybjtcbiAgICB3YWl0aW5nUGxheWVyLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpO1xuICAgIGlmICh3YWl0aW5nUGxheWVyLmFsbFN1bmsoKSkge1xuICAgICAgYWN0aXZlUGxheWVyLmlzV2lubmVyID0gdHJ1ZTtcbiAgICAgIGdhbWVPdmVyID0gdHJ1ZTtcbiAgICB9XG4gICAgY2hhbmdlQWN0aXZlUGxheWVyKCk7XG4gIH07XG4gIGNvbnN0IGdldEFjdGl2ZVBsYXllciA9ICgpID0+IGFjdGl2ZVBsYXllcjtcbiAgY29uc3QgZ2V0V2FpdGluZ1BsYXllciA9ICgpID0+IHdhaXRpbmdQbGF5ZXI7XG5cbiAgbGV0IGxhc3RDb21wdXRlckhpdCA9IFtdO1xuICBjb25zdCBjb21wdXRlclBsYXlSb3VuZCA9ICgpID0+IHtcbiAgICBjb25zdCBwb3NzaWJsZU1vdmVzID0gW107XG4gICAgaWYgKGFjdGl2ZVBsYXllciAhPT0gcGxheWVyVHdvKSByZXR1cm47XG4gICAgaWYgKGxhc3RDb21wdXRlckhpdFswXSArIDEgPCAxMCkge1xuICAgICAgaWYgKFxuICAgICAgICB3YWl0aW5nUGxheWVyLmdldEJvYXJkKCkuYm9hcmRbbGFzdENvbXB1dGVySGl0WzBdICsgMV1bXG4gICAgICAgICAgbGFzdENvbXB1dGVySGl0WzFdXG4gICAgICAgIF0uYmVlbkhpdCAhPT0gdHJ1ZVxuICAgICAgKSB7XG4gICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChbbGFzdENvbXB1dGVySGl0WzBdICsgMSwgbGFzdENvbXB1dGVySGl0WzFdXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsYXN0Q29tcHV0ZXJIaXRbMF0gLSAxID4gLTEpIHtcbiAgICAgIGlmIChcbiAgICAgICAgd2FpdGluZ1BsYXllci5nZXRCb2FyZCgpLmJvYXJkW2xhc3RDb21wdXRlckhpdFswXSAtIDFdW1xuICAgICAgICAgIGxhc3RDb21wdXRlckhpdFsxXVxuICAgICAgICBdLmJlZW5IaXQgIT09IHRydWVcbiAgICAgICkge1xuICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goW2xhc3RDb21wdXRlckhpdFswXSAtIDEsIGxhc3RDb21wdXRlckhpdFsxXV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobGFzdENvbXB1dGVySGl0WzFdICsgMSA8IDEwKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHdhaXRpbmdQbGF5ZXIuZ2V0Qm9hcmQoKS5ib2FyZFtsYXN0Q29tcHV0ZXJIaXRbMF1dW1xuICAgICAgICAgIGxhc3RDb21wdXRlckhpdFsxXSArIDFcbiAgICAgICAgXS5iZWVuSGl0ICE9PSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKFtsYXN0Q29tcHV0ZXJIaXRbMF0sIGxhc3RDb21wdXRlckhpdFsxXSArIDFdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGxhc3RDb21wdXRlckhpdFsxXSAtIDEgPiAtMSkge1xuICAgICAgaWYgKFxuICAgICAgICB3YWl0aW5nUGxheWVyLmdldEJvYXJkKCkuYm9hcmRbbGFzdENvbXB1dGVySGl0WzBdXVtcbiAgICAgICAgICBsYXN0Q29tcHV0ZXJIaXRbMV0gLSAxXG4gICAgICAgIF0uYmVlbkhpdCAhPT0gdHJ1ZVxuICAgICAgKSB7XG4gICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChbbGFzdENvbXB1dGVySGl0WzBdLCBsYXN0Q29tcHV0ZXJIaXRbMV0gLSAxXSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIHNlbGVjdCByYW5kb20gbW92ZSBmcm9tIHBvc3NpYmxlTW92ZXMuXG4gICAgaWYgKHBvc3NpYmxlTW92ZXMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAvL1xuICAgICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb3NzaWJsZU1vdmVzLmxlbmd0aCk7XG4gICAgICBwbGF5Um91bmQocG9zc2libGVNb3Zlc1tpbmRleF0pO1xuICAgICAgaWYgKFxuICAgICAgICB3YWl0aW5nUGxheWVyLmdldEJvYXJkKCkuYm9hcmRbcG9zc2libGVNb3Zlc1tpbmRleF1bMF1dW1xuICAgICAgICAgIHBvc3NpYmxlTW92ZXNbaW5kZXhdWzFdXG4gICAgICAgIF0uc2hpcENlbGwgIT09IG51bGxcbiAgICAgICkge1xuICAgICAgICBsYXN0Q29tcHV0ZXJIaXQgPSBwb3NzaWJsZU1vdmVzW2luZGV4XTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBlbHNlLCByYW5kb20gcGF0aCAodmVyaWZ5IGFyZ3MpXG4gICAgbGV0IGtlZXBHb2luZyA9IHRydWU7XG4gICAgbGV0IHJhbmRYID0gMDtcbiAgICBsZXQgcmFuZFkgPSAwO1xuICAgIHdoaWxlIChrZWVwR29pbmcpIHtcbiAgICAgIHJhbmRYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgcmFuZFkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBpZiAod2FpdGluZ1BsYXllci5nZXRCb2FyZCgpLmJvYXJkW3JhbmRYXVtyYW5kWV0uYmVlbkhpdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGxheVJvdW5kKFtyYW5kWCwgcmFuZFldKTtcbiAgICAgICAga2VlcEdvaW5nID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNoZWNrIGlmIHRoaXMgaGl0IHNjb3JlZFxuICAgIGlmICh3YWl0aW5nUGxheWVyLmdldEJvYXJkKCkuYm9hcmRbcmFuZFhdW3JhbmRZXS5zaGlwQ2VsbCAhPT0gbnVsbCkge1xuICAgICAgbGFzdENvbXB1dGVySGl0ID0gW3JhbmRYLCByYW5kWV07XG4gICAgfVxuICB9O1xuICBjb25zdCBnZXRIdW1hbiA9ICgpID0+IHBsYXllck9uZTtcbiAgY29uc3QgZ2V0Q1BVID0gKCkgPT4gcGxheWVyVHdvO1xuXG4gIGNvbnN0IGNvbXB1dGVyUGxheVBsYWNlUm91bmQgPSAoKSA9PiB7fTtcbiAgLy9cbiAgcmV0dXJuIHtcbiAgICBwbGF5Um91bmQsXG4gICAgcGxheVBsYWNlUm91bmQsXG4gICAgZ2V0QWN0aXZlUGxheWVyLFxuICAgIGdldFdhaXRpbmdQbGF5ZXIsXG4gICAgY29tcHV0ZXJQbGF5Um91bmQsXG4gICAgY29tcHV0ZXJQbGF5UGxhY2VSb3VuZCxcbiAgICBnZXRIdW1hbixcbiAgICBnZXRDUFUsXG4gICAgYm9hcmRzRmlsbGVkLFxuICB9O1xufVxuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGxheWVyKHsgbmFtZSB9KSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItY29uc3RcbiAgbGV0IGlzV2lubmVyID0gZmFsc2U7XG4gIGNvbnN0IGdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuICBjb25zdCBnZXRCb2FyZCA9ICgpID0+IGdhbWVib2FyZDtcbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG4gIGNvbnN0IGF0dGFjayA9IChib2FyZCwgY29vcmRzKSA9PiB7XG4gICAgYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZHMpO1xuICB9O1xuICByZXR1cm4ge1xuICAgIGdldE5hbWUsXG4gICAgZ2V0Qm9hcmQsXG4gICAgYXR0YWNrLFxuICAgIGlzV2lubmVyLFxuICB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1zeW50YXggKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAqL1xuLyogZXNsaW50LWRpc2FibGUgcmFkaXggKi9cbmltcG9ydCBHYW1lY29udHJvbGxlciBmcm9tIFwiLi9nYW1lY29udHJvbGxlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JlZW5jb250cm9sbGVyKCkge1xuICBjb25zdCBnYW1lID0gR2FtZWNvbnRyb2xsZXIoKTtcbiAgY29uc3QgRE9NTGVuZ3RocyA9IFs0LCAzLCAyLCAyLCAxXTtcbiAgY29uc3QgRE9NSW5zdHJ1Y3Rpb25zID0gW1xuICAgIFwiUGxhY2UgY2FycmllciAobGVuZ3RoIDUpXCIsXG4gICAgXCJQbGFjZSBiYXR0bGVzaGlwIChsZW5ndGggNClcIixcbiAgICBcIlBsYWNlIGNydWlzZXIgKGxlbmd0aCAzKVwiLFxuICAgIFwiUGxhY2Ugc3VibWFyaW5lIChsZW5ndGggM1wiLFxuICAgIFwiUGxhY2UgZGVzdHJveWVyIChsZW5ndGggMilcIixcbiAgXTtcblxuICBsZXQgRE9NSW5kZXggPSAwO1xuICBjb25zdCBib2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkcy1jb250YWluZXJcIik7XG4gIGNvbnN0IERPTWJvYXJkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IERPTWJvYXJkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IERPTUJvYXJkcyA9IFtET01ib2FyZDEsIERPTWJvYXJkMl07XG4gIGZ1bmN0aW9uIERPTVJlY2VpdmVBdHRhY2soZXZlbnQpIHtcbiAgICAvLyBnZXQgZGF0YXNldCBjb29yZGluYXRlc1xuICAgIC8vIG1ha2Ugc3VyZSB0aGF0IGlmIGFscmVhZHkgYmVlbmhpdCwgcmV0dXJuXG4gICAgLy8gcGxheWVyLnBsYXl0dXJuXG4gICAgLy8gZ2VuZXJhdGUgcmFuZG9tIGNvb3JkcyB1bnRpbCB2YWxpZFxuICAgIC8vIGNwdS5wbGF5dHVyblxuICB9XG4gIGNvbnN0IERPTVNoaXBQbGFjZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LnJvdyk7XG4gICAgY29uc3QgY2VsbCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LmNlbGwpO1xuICAgIGNvbnN0IHN0YXJ0aW5nID0gW3JvdywgY2VsbF07XG4gICAgY29uc3QgZW5kaW5nID0gW3JvdywgY2VsbF07XG4gICAgY29uc3QgYW5nbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYWNlbWVudC1hbmdsZVwiKS52YWx1ZTtcbiAgICBpZiAoYW5nbGUgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBlbmRpbmdbMV0gKz0gRE9NTGVuZ3Roc1tET01JbmRleF07XG4gICAgfVxuICAgIGlmIChhbmdsZSA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBlbmRpbmdbMF0gKz0gRE9NTGVuZ3Roc1tET01JbmRleF07XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSArPSAxKSB7XG4gICAgICBpZiAoc3RhcnRpbmdbaV0gPiA5IHx8IGVuZGluZ1tpXSA+IDkpIHJldHVybjtcbiAgICAgIGlmIChzdGFydGluZ1tpXSA8IDAgfHwgZW5kaW5nW2ldIDwgMCkgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB0ZXN0IGhlcmUgYWdhaW5cbiAgICBpZiAoc3RhcnRpbmdbMF0gIT09IGVuZGluZ1swXSkge1xuICAgICAgLy8gY2hlY2sgZXZlcnkgc3F1YXJlIGluIHRoZSBwYXRoIHRvIHNlZSBpZiBiYWQuIGlmIGJhZCwgY29udGludWUga2V5d29yZFxuICAgICAgY29uc3QgaGVpZ2h0ID0gc3RhcnRpbmdbMV07XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRpbmdbMF07IGkgPD0gZW5kaW5nWzBdOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGdhbWUuZ2V0SHVtYW4oKS5nZXRCb2FyZCgpLmJvYXJkW2ldW2hlaWdodF0uc2hpcENlbGwgIT09IG51bGwpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHN0YXJ0aW5nWzFdICE9PSBlbmRpbmdbMV0pIHtcbiAgICAgIGNvbnN0IHggPSBzdGFydGluZ1swXTtcbiAgICAgIGZvciAoXG4gICAgICAgIGxldCBpID0gTWF0aC5taW4oc3RhcnRpbmdbMV0sIGVuZGluZ1sxXSk7XG4gICAgICAgIGkgPD0gTWF0aC5tYXgoc3RhcnRpbmdbMV0sIGVuZGluZ1sxXSk7XG4gICAgICAgIGkgKz0gMVxuICAgICAgKSB7XG4gICAgICAgIGlmIChnYW1lLmdldEh1bWFuKCkuZ2V0Qm9hcmQoKS5ib2FyZFt4XVtpXS5zaGlwQ2VsbCAhPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdhbWUucGxheVBsYWNlUm91bmQoc3RhcnRpbmcsIGVuZGluZyk7XG4gICAgLy8gaGVyZSBtYWtlIGxvZ2ljIGZvciBuZXcgc3RhcnRpbmcgZW5kaW5nXG4gICAgLy8gSSBDQU4gRE8gQSBXSElMRSBMT09QIVxuICAgIGNvbnN0IG9sZExlbmd0aCA9IGdhbWUuZ2V0Q1BVKCkuZ2V0Qm9hcmQoKS5hbGxTaGlwcy5sZW5ndGg7XG4gICAgd2hpbGUgKGdhbWUuZ2V0Q1BVKCkuZ2V0Qm9hcmQoKS5hbGxTaGlwcy5sZW5ndGggPT09IG9sZExlbmd0aCkge1xuICAgICAgY29uc3QgcmFuZFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgIGNvbnN0IHJhbmRZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICBjb25zdCByYW5kQW5nbGVzID0gW1widmVydGljYWxcIiwgXCJob3Jpem9udGFsXCJdO1xuICAgICAgY29uc3QgcmFuZEFuZ2xlID0gcmFuZEFuZ2xlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV07XG4gICAgICBjb25zdCBjcHVTdGFydGluZyA9IFtyYW5kWCwgcmFuZFldO1xuICAgICAgY29uc3QgY3B1RW5kaW5nID0gW3JhbmRYLCByYW5kWV07XG4gICAgICBpZiAocmFuZEFuZ2xlID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBjcHVFbmRpbmdbMV0gKz0gRE9NTGVuZ3Roc1tET01JbmRleF07XG4gICAgICB9XG4gICAgICBpZiAocmFuZEFuZ2xlID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgY3B1RW5kaW5nWzBdICs9IERPTUxlbmd0aHNbRE9NSW5kZXhdO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coY3B1U3RhcnRpbmdbMF0sIGNwdVN0YXJ0aW5nWzFdKTtcbiAgICAgIGNvbnNvbGUubG9nKGNwdUVuZGluZ1swXSwgY3B1RW5kaW5nWzFdKTtcbiAgICAgIGlmIChjcHVFbmRpbmdbMF0gPiA5KSBjb250aW51ZTtcbiAgICAgIGlmIChjcHVFbmRpbmdbMV0gPiA5KSBjb250aW51ZTtcblxuICAgICAgLy8gY2hlY2sgY29vcmRpbmF0ZSB2YWxpZGl0eS4uLlxuICAgICAgLy8gaWYgYW5nbGUgaXMgdmVydGljYWwuLi4gc3RhcnRbMF0gIT09IGVuZFswXVxuICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgIGlmIChjcHVTdGFydGluZ1swXSAhPT0gY3B1RW5kaW5nWzBdKSB7XG4gICAgICAgIC8vIGNoZWNrIGV2ZXJ5IHNxdWFyZSBpbiB0aGUgcGF0aCB0byBzZWUgaWYgYmFkLiBpZiBiYWQsIGNvbnRpbnVlIGtleXdvcmRcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gY3B1U3RhcnRpbmdbMV07XG4gICAgICAgIGZvciAobGV0IGkgPSBjcHVTdGFydGluZ1swXTsgaSA8PSBjcHVFbmRpbmdbMF07IGkgKz0gMSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGNwdUVuZGluZ1swXSk7XG4gICAgICAgICAgaWYgKGdhbWUuZ2V0Q1BVKCkuZ2V0Qm9hcmQoKS5ib2FyZFtpXVtoZWlnaHRdLnNoaXBDZWxsICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgICAgIGNvdW50ICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY3B1U3RhcnRpbmdbMV0gIT09IGNwdUVuZGluZ1sxXSkge1xuICAgICAgICBjb25zdCB4ID0gY3B1U3RhcnRpbmdbMF07XG4gICAgICAgIGZvciAoXG4gICAgICAgICAgbGV0IGkgPSBNYXRoLm1pbihjcHVTdGFydGluZ1sxXSwgY3B1RW5kaW5nWzFdKTtcbiAgICAgICAgICBpIDw9IE1hdGgubWF4KGNwdVN0YXJ0aW5nWzFdLCBjcHVFbmRpbmdbMV0pO1xuICAgICAgICAgIGkgKz0gMVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoZ2FtZS5nZXRDUFUoKS5nZXRCb2FyZCgpLmJvYXJkW3hdW2ldLnNoaXBDZWxsICE9PSBudWxsKVxuICAgICAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNvdW50ICE9PSAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBnYW1lLnBsYXlQbGFjZVJvdW5kKGNwdVN0YXJ0aW5nLCBjcHVFbmRpbmcpO1xuICAgIH1cbiAgICBET01JbmRleCArPSAxO1xuICAgIGlmIChET01JbmRleCA9PT0gNSkge1xuICAgICAgLy9cbiAgICAgIERPTUJvYXJkcy5mb3JFYWNoKChib2FyZCwgaW5kZXgpID0+IHtcbiAgICAgICAgYm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTVNoaXBQbGFjZSk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMSkge1xuICAgICAgICAgIGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01SZWNlaXZlQXR0YWNrKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxuICAgIHVwZGF0ZUJvYXJkKCk7XG4gIH07XG4gIERPTUJvYXJkcy5mb3JFYWNoKChET01Cb2FyZCkgPT4ge1xuICAgIERPTUJvYXJkLmNsYXNzTGlzdC5hZGQoXCJib2FyZFwiKTtcbiAgICBET01Cb2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NU2hpcFBsYWNlKTtcbiAgfSk7XG4gIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChET01ib2FyZDEpO1xuICBib2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoRE9NYm9hcmQyKTtcblxuICBmdW5jdGlvbiB1cGRhdGVCb2FyZCgpIHtcbiAgICBjb25zdCBodW1hbkJvYXJkID0gZ2FtZS5nZXRIdW1hbigpLmdldEJvYXJkKCkuYm9hcmQ7XG4gICAgY29uc3QgY29tcHV0ZXJCb2FyZCA9IGdhbWUuZ2V0Q1BVKCkuZ2V0Qm9hcmQoKS5ib2FyZDtcbiAgICBjb25zdCBib2FyZHMgPSBbaHVtYW5Cb2FyZCwgY29tcHV0ZXJCb2FyZF07XG5cbiAgICBib2FyZHMuZm9yRWFjaCgoYm9hcmQsIGJvYXJkSW5kZXgpID0+IHtcbiAgICAgIERPTUJvYXJkc1tib2FyZEluZGV4XS5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgIGJvYXJkLmZvckVhY2goKHJvdywgcm93SW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgRE9NUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcm93LmZvckVhY2goKGNlbGwsIGNlbGxJbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IERPTUNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgIERPTUNlbGwuZGF0YXNldC5yb3cgPSBgJHtyb3dJbmRleH1gO1xuICAgICAgICAgIERPTUNlbGwuZGF0YXNldC5jZWxsID0gYCR7Y2VsbEluZGV4fWA7XG4gICAgICAgICAgLy8gaWYgKGJvYXJkSW5kZXggPT09IDApIHtcbiAgICAgICAgICBpZiAoY2VsbC5zaGlwQ2VsbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgRE9NQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgaWYgKGNlbGwuYmVlbkhpdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgRE9NQ2VsbC5pbm5lckhUTUwgPSBcIiZ0aW1lcztcIjtcbiAgICAgICAgICAgIGlmIChjZWxsLnNoaXBDZWxsICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIERPTUNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgRE9NUm93LmFwcGVuZENoaWxkKERPTUNlbGwpO1xuICAgICAgICB9KTtcbiAgICAgICAgRE9NQm9hcmRzW2JvYXJkSW5kZXhdLmFwcGVuZENoaWxkKERPTVJvdyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUJvYXJkKCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGlwKHsgbGVuZ3RoIH0pIHtcbiAgY29uc3QgcG9zc2libGVMZW5ndGhzID0gWzUsIDQsIDMsIDJdO1xuICBpZiAoIXBvc3NpYmxlTGVuZ3Rocy5pbmNsdWRlcyhsZW5ndGgpKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHNoaXAgbGVuZ3RoXCIpO1xuICBsZXQgaGl0cyA9IDA7XG4gIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICBoaXRzICs9IDE7XG4gIH07XG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICBpZiAoaGl0cyA9PT0gbGVuZ3RoKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IGxlbmd0aDtcbiAgcmV0dXJuIHsgaXNTdW5rLCBoaXQsIGdldExlbmd0aCB9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdGF0aWMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgU2NyZWVuY29udHJvbGxlciBmcm9tIFwiLi9zY3JlZW5jb250cm9sbGVyXCI7XG5cblNjcmVlbmNvbnRyb2xsZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==