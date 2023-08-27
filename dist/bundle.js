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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M0tlLGdCQUFnQixRQUFRO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7Ozs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNzQjs7QUFFbEQsNkRBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdGF0aWMvc3R5bGUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0YXRpYy9zdHlsZS5jc3M/MjVjYSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JlZW5jb250cm9sbGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uYm9hcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGhlaWdodDogNTAwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgPiAqIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG4gICAgPiAqIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuICB9XG59XG5cbi5ib2FyZHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMnJlbTtcbn1cblxuYnV0dG9uIHtcbiAgYWxsOiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAyMDksIDIwOSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3RhdGljL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixZQUFZO0VBQ1o7SUFDRSxhQUFhO0lBQ2IsT0FBTztJQUNQO01BQ0UsT0FBTztNQUNQLGFBQWE7TUFDYix1QkFBdUI7TUFDdkIsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQixlQUFlO0lBQ2pCO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyx1QkFBdUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICA+ICoge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICA+ICoge1xcbiAgICAgIGZsZXg6IDE7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uYm9hcmRzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDJyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBhbGw6IGluaXRpYWw7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAyMDksIDIwOSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZWJvYXJkKCkge1xuICBjb25zdCBib2FyZCA9IFtdO1xuICBjb25zdCBhbGxTaGlwcyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBjb25zdCB5ID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBjb25zdCB4ID0ge1xuICAgICAgICBiZWVuSGl0OiBmYWxzZSxcbiAgICAgICAgc2hpcENlbGw6IG51bGwsXG4gICAgICB9O1xuICAgICAgeS5wdXNoKHgpO1xuICAgIH1cbiAgICBib2FyZC5wdXNoKHkpO1xuICB9XG4gIGNvbnN0IHBsYWNlU2hpcCA9IChzdGFydGluZ0FyciwgZW5kaW5nQXJyKSA9PiB7XG4gICAgaWYgKHN0YXJ0aW5nQXJyWzBdICE9PSBlbmRpbmdBcnJbMF0pIHtcbiAgICAgIGlmIChzdGFydGluZ0FyclsxXSAhPT0gZW5kaW5nQXJyWzFdKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNoaXAgbXVzdCBiZSBzdHJhaWdodGx5IGFsaWduZWRcIik7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSArPSAxKSB7XG4gICAgICBpZiAoc3RhcnRpbmdBcnJbaV0gPiA5IHx8IGVuZGluZ0FycltpXSA+IDkpIHJldHVybjtcbiAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29vcmRpbmF0ZXNcIik7XG4gICAgICBpZiAoc3RhcnRpbmdBcnJbaV0gPCAwIHx8IGVuZGluZ0FycltpXSA8IDApIHJldHVybjtcbiAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY29vcmRpbmF0ZXNcIik7XG4gICAgfVxuICAgIGxldCBzaGlwID0gXCJcIjtcbiAgICBpZiAoc3RhcnRpbmdBcnJbMF0gIT09IGVuZGluZ0FyclswXSkge1xuICAgICAgc2hpcCA9IFNoaXAoeyBsZW5ndGg6IE1hdGguYWJzKHN0YXJ0aW5nQXJyWzBdIC0gZW5kaW5nQXJyWzBdKSArIDEgfSk7XG4gICAgfSBlbHNlIGlmIChzdGFydGluZ0FyclsxXSAhPT0gZW5kaW5nQXJyWzFdKSB7XG4gICAgICBzaGlwID0gU2hpcCh7IGxlbmd0aDogTWF0aC5hYnMoc3RhcnRpbmdBcnJbMV0gLSBlbmRpbmdBcnJbMV0pICsgMSB9KTtcbiAgICB9XG5cbiAgICBpZiAoc3RhcnRpbmdBcnJbMF0gIT09IGVuZGluZ0FyclswXSkge1xuICAgICAgLy8gMywzIC0+IDgsIDNcblxuICAgICAgY29uc3QgaGVpZ2h0ID0gc3RhcnRpbmdBcnJbMV07XG4gICAgICBmb3IgKFxuICAgICAgICBsZXQgaSA9IE1hdGgubWluKHN0YXJ0aW5nQXJyWzBdLCBlbmRpbmdBcnJbMF0pO1xuICAgICAgICBpIDw9IE1hdGgubWF4KHN0YXJ0aW5nQXJyWzBdLCBlbmRpbmdBcnJbMF0pO1xuICAgICAgICBpICs9IDFcbiAgICAgICkge1xuICAgICAgICBpZiAoYm9hcmRbaV1baGVpZ2h0XS5zaGlwQ2VsbCAhPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBib2FyZFtpXVtoZWlnaHRdLnNoaXBDZWxsID0gc2hpcDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHN0YXJ0aW5nQXJyWzFdICE9PSBlbmRpbmdBcnJbMV0pIHtcbiAgICAgIGNvbnN0IHggPSBzdGFydGluZ0FyclswXTtcbiAgICAgIGZvciAoXG4gICAgICAgIGxldCBpID0gTWF0aC5taW4oc3RhcnRpbmdBcnJbMV0sIGVuZGluZ0FyclsxXSk7XG4gICAgICAgIGkgPD0gTWF0aC5tYXgoc3RhcnRpbmdBcnJbMV0sIGVuZGluZ0FyclsxXSk7XG4gICAgICAgIGkgKz0gMVxuICAgICAgKSB7XG4gICAgICAgIGlmIChib2FyZFt4XVtpXS5zaGlwQ2VsbCAhPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgICBib2FyZFt4XVtpXS5zaGlwQ2VsbCA9IHNoaXA7XG4gICAgICB9XG4gICAgfVxuICAgIGFsbFNoaXBzLnB1c2goc2hpcCk7XG4gIH07XG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRzKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpICs9IDEpIHtcbiAgICAgIGlmIChjb29yZHNbaV0gPiA5IHx8IGNvb3Jkc1tpXSA8IDApIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeCA9IGNvb3Jkc1swXTtcbiAgICBjb25zdCB5ID0gY29vcmRzWzFdO1xuICAgIGJvYXJkW3hdW3ldLmJlZW5IaXQgPSB0cnVlO1xuICAgIGlmIChib2FyZFt4XVt5XS5zaGlwQ2VsbCAhPT0gbnVsbCkge1xuICAgICAgYm9hcmRbeF1beV0uc2hpcENlbGwuaGl0KCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBhbGxTdW5rID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsU2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChhbGxTaGlwc1tpXS5pc1N1bmsoKSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG4gIHJldHVybiB7IHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjaywgYWxsU3VuaywgYm9hcmQsIGFsbFNoaXBzIH07XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBwcmVmZXItY29uc3QgKi9cbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVjb250cm9sbGVyKFxuICBwbGF5ZXJPbmVOYW1lID0gXCJIdW1hblwiLFxuICBwbGF5ZXJUd29OYW1lID0gXCJSb2JvdFwiXG4pIHtcbiAgbGV0IGdhbWVPdmVyID0gZmFsc2U7XG4gIGxldCBib2FyZHNGaWxsZWQgPSBmYWxzZTtcbiAgY29uc3QgcGxheWVyT25lID0gUGxheWVyKHsgbmFtZTogcGxheWVyT25lTmFtZSB9KTtcbiAgY29uc3QgcGxheWVyVHdvID0gUGxheWVyKHsgbmFtZTogcGxheWVyVHdvTmFtZSB9KTtcbiAgbGV0IGFjdGl2ZVBsYXllciA9IHBsYXllck9uZTtcbiAgbGV0IHdhaXRpbmdQbGF5ZXIgPSBwbGF5ZXJUd287XG4gIGNvbnN0IGNoYW5nZUFjdGl2ZVBsYXllciA9ICgpID0+IHtcbiAgICBpZiAoYWN0aXZlUGxheWVyID09PSBwbGF5ZXJPbmUpIHtcbiAgICAgIGFjdGl2ZVBsYXllciA9IHBsYXllclR3bztcbiAgICAgIHdhaXRpbmdQbGF5ZXIgPSBwbGF5ZXJPbmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGl2ZVBsYXllciA9IHBsYXllck9uZTtcbiAgICAgIHdhaXRpbmdQbGF5ZXIgPSBwbGF5ZXJUd287XG4gICAgfVxuICB9O1xuICBjb25zdCBwbGF5UGxhY2VSb3VuZCA9IChzdGFydGluZywgZW5kaW5nKSA9PiB7XG4gICAgaWYgKGJvYXJkc0ZpbGxlZCkgdGhyb3cgbmV3IEVycm9yKFwiYWxsIHNoaXBzIGFscmVhZHkgcGxhY2VkXCIpO1xuICAgIGNvbnN0IG9sZFNoaXBDb3VudCA9IGFjdGl2ZVBsYXllci5nZXRCb2FyZCgpLmFsbFNoaXBzLmxlbmd0aDtcbiAgICBhY3RpdmVQbGF5ZXIuZ2V0Qm9hcmQoKS5wbGFjZVNoaXAoc3RhcnRpbmcsIGVuZGluZyk7XG4gICAgaWYgKFxuICAgICAgYWN0aXZlUGxheWVyLmdldEJvYXJkKCkuYWxsU2hpcHMubGVuZ3RoID49IDUgJiZcbiAgICAgIHdhaXRpbmdQbGF5ZXIuZ2V0Qm9hcmQoKS5hbGxTaGlwcy5sZW5ndGggPj0gNVxuICAgICkge1xuICAgICAgYm9hcmRzRmlsbGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGFjdGl2ZVBsYXllci5nZXRCb2FyZCgpLmFsbFNoaXBzLmxlbmd0aCA+IG9sZFNoaXBDb3VudCkge1xuICAgICAgY2hhbmdlQWN0aXZlUGxheWVyKCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBwbGF5Um91bmQgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICBpZiAoZ2FtZU92ZXIpIHRocm93IG5ldyBFcnJvcihcImdhbWUgb3ZlclwiKTtcbiAgICBpZiAoYm9hcmRzRmlsbGVkID09PSBmYWxzZSkgdGhyb3cgbmV3IEVycm9yKFwibm90IGFsbCBzaGlwcyBwbGFjZWRcIik7XG4gICAgaWYgKFxuICAgICAgd2FpdGluZ1BsYXllci5nZXRCb2FyZCgpLmJvYXJkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV0uYmVlbkhpdCA9PT1cbiAgICAgIHRydWVcbiAgICApXG4gICAgICByZXR1cm47XG4gICAgd2FpdGluZ1BsYXllci5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKTtcbiAgICBpZiAod2FpdGluZ1BsYXllci5hbGxTdW5rKCkpIHtcbiAgICAgIGFjdGl2ZVBsYXllci5pc1dpbm5lciA9IHRydWU7XG4gICAgICBnYW1lT3ZlciA9IHRydWU7XG4gICAgfVxuICAgIGNoYW5nZUFjdGl2ZVBsYXllcigpO1xuICB9O1xuICBjb25zdCBnZXRBY3RpdmVQbGF5ZXIgPSAoKSA9PiBhY3RpdmVQbGF5ZXI7XG4gIGNvbnN0IGdldFdhaXRpbmdQbGF5ZXIgPSAoKSA9PiB3YWl0aW5nUGxheWVyO1xuXG4gIGxldCBsYXN0Q29tcHV0ZXJIaXQgPSBbXTtcbiAgY29uc3QgY29tcHV0ZXJQbGF5Um91bmQgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9zc2libGVNb3ZlcyA9IFtdO1xuICAgIGlmIChhY3RpdmVQbGF5ZXIgIT09IHBsYXllclR3bykgcmV0dXJuO1xuICAgIGlmIChsYXN0Q29tcHV0ZXJIaXRbMF0gKyAxIDwgMTApIHtcbiAgICAgIGlmIChcbiAgICAgICAgd2FpdGluZ1BsYXllci5nZXRCb2FyZCgpLmJvYXJkW2xhc3RDb21wdXRlckhpdFswXSArIDFdW1xuICAgICAgICAgIGxhc3RDb21wdXRlckhpdFsxXVxuICAgICAgICBdLmJlZW5IaXQgIT09IHRydWVcbiAgICAgICkge1xuICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goW2xhc3RDb21wdXRlckhpdFswXSArIDEsIGxhc3RDb21wdXRlckhpdFsxXV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobGFzdENvbXB1dGVySGl0WzBdIC0gMSA+IC0xKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHdhaXRpbmdQbGF5ZXIuZ2V0Qm9hcmQoKS5ib2FyZFtsYXN0Q29tcHV0ZXJIaXRbMF0gLSAxXVtcbiAgICAgICAgICBsYXN0Q29tcHV0ZXJIaXRbMV1cbiAgICAgICAgXS5iZWVuSGl0ICE9PSB0cnVlXG4gICAgICApIHtcbiAgICAgICAgcG9zc2libGVNb3Zlcy5wdXNoKFtsYXN0Q29tcHV0ZXJIaXRbMF0gLSAxLCBsYXN0Q29tcHV0ZXJIaXRbMV1dKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGxhc3RDb21wdXRlckhpdFsxXSArIDEgPCAxMCkge1xuICAgICAgaWYgKFxuICAgICAgICB3YWl0aW5nUGxheWVyLmdldEJvYXJkKCkuYm9hcmRbbGFzdENvbXB1dGVySGl0WzBdXVtcbiAgICAgICAgICBsYXN0Q29tcHV0ZXJIaXRbMV0gKyAxXG4gICAgICAgIF0uYmVlbkhpdCAhPT0gdHJ1ZVxuICAgICAgKSB7XG4gICAgICAgIHBvc3NpYmxlTW92ZXMucHVzaChbbGFzdENvbXB1dGVySGl0WzBdLCBsYXN0Q29tcHV0ZXJIaXRbMV0gKyAxXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsYXN0Q29tcHV0ZXJIaXRbMV0gLSAxID4gLTEpIHtcbiAgICAgIGlmIChcbiAgICAgICAgd2FpdGluZ1BsYXllci5nZXRCb2FyZCgpLmJvYXJkW2xhc3RDb21wdXRlckhpdFswXV1bXG4gICAgICAgICAgbGFzdENvbXB1dGVySGl0WzFdIC0gMVxuICAgICAgICBdLmJlZW5IaXQgIT09IHRydWVcbiAgICAgICkge1xuICAgICAgICBwb3NzaWJsZU1vdmVzLnB1c2goW2xhc3RDb21wdXRlckhpdFswXSwgbGFzdENvbXB1dGVySGl0WzFdIC0gMV0pO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBzZWxlY3QgcmFuZG9tIG1vdmUgZnJvbSBwb3NzaWJsZU1vdmVzLlxuICAgIGlmIChwb3NzaWJsZU1vdmVzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgLy9cbiAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGVNb3Zlcy5sZW5ndGgpO1xuICAgICAgcGxheVJvdW5kKHBvc3NpYmxlTW92ZXNbaW5kZXhdKTtcbiAgICAgIGlmIChcbiAgICAgICAgd2FpdGluZ1BsYXllci5nZXRCb2FyZCgpLmJvYXJkW3Bvc3NpYmxlTW92ZXNbaW5kZXhdWzBdXVtcbiAgICAgICAgICBwb3NzaWJsZU1vdmVzW2luZGV4XVsxXVxuICAgICAgICBdLnNoaXBDZWxsICE9PSBudWxsXG4gICAgICApIHtcbiAgICAgICAgbGFzdENvbXB1dGVySGl0ID0gcG9zc2libGVNb3Zlc1tpbmRleF07XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gZWxzZSwgcmFuZG9tIHBhdGggKHZlcmlmeSBhcmdzKVxuICAgIGxldCBrZWVwR29pbmcgPSB0cnVlO1xuICAgIGxldCByYW5kWCA9IDA7XG4gICAgbGV0IHJhbmRZID0gMDtcbiAgICB3aGlsZSAoa2VlcEdvaW5nKSB7XG4gICAgICByYW5kWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgIHJhbmRZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgaWYgKHdhaXRpbmdQbGF5ZXIuZ2V0Qm9hcmQoKS5ib2FyZFtyYW5kWF1bcmFuZFldLmJlZW5IaXQgPT09IGZhbHNlKSB7XG4gICAgICAgIHBsYXlSb3VuZChbcmFuZFgsIHJhbmRZXSk7XG4gICAgICAgIGtlZXBHb2luZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjaGVjayBpZiB0aGlzIGhpdCBzY29yZWRcbiAgICBpZiAod2FpdGluZ1BsYXllci5nZXRCb2FyZCgpLmJvYXJkW3JhbmRYXVtyYW5kWV0uc2hpcENlbGwgIT09IG51bGwpIHtcbiAgICAgIGxhc3RDb21wdXRlckhpdCA9IFtyYW5kWCwgcmFuZFldO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZ2V0SHVtYW4gPSAoKSA9PiBwbGF5ZXJPbmU7XG4gIGNvbnN0IGdldENQVSA9ICgpID0+IHBsYXllclR3bztcblxuICBjb25zdCBjb21wdXRlclBsYXlQbGFjZVJvdW5kID0gKCkgPT4ge307XG4gIC8vXG4gIHJldHVybiB7XG4gICAgcGxheVJvdW5kLFxuICAgIHBsYXlQbGFjZVJvdW5kLFxuICAgIGdldEFjdGl2ZVBsYXllcixcbiAgICBnZXRXYWl0aW5nUGxheWVyLFxuICAgIGNvbXB1dGVyUGxheVJvdW5kLFxuICAgIGNvbXB1dGVyUGxheVBsYWNlUm91bmQsXG4gICAgZ2V0SHVtYW4sXG4gICAgZ2V0Q1BVLFxuICAgIGJvYXJkc0ZpbGxlZCxcbiAgfTtcbn1cbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBsYXllcih7IG5hbWUgfSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWNvbnN0XG4gIGxldCBpc1dpbm5lciA9IGZhbHNlO1xuICBjb25zdCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcbiAgY29uc3QgZ2V0Qm9hcmQgPSAoKSA9PiBnYW1lYm9hcmQ7XG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiBuYW1lO1xuICBjb25zdCBhdHRhY2sgPSAoYm9hcmQsIGNvb3JkcykgPT4ge1xuICAgIGJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRzKTtcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBnZXROYW1lLFxuICAgIGdldEJvYXJkLFxuICAgIGF0dGFjayxcbiAgICBpc1dpbm5lcixcbiAgfTtcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnRpbnVlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG4vKiBlc2xpbnQtZGlzYWJsZSByYWRpeCAqL1xuaW1wb3J0IEdhbWVjb250cm9sbGVyIGZyb20gXCIuL2dhbWVjb250cm9sbGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjcmVlbmNvbnRyb2xsZXIoKSB7XG4gIGNvbnN0IGdhbWUgPSBHYW1lY29udHJvbGxlcigpO1xuICBjb25zdCBET01MZW5ndGhzID0gWzQsIDMsIDIsIDIsIDFdO1xuICBjb25zdCBET01JbnN0cnVjdGlvbnMgPSBbXG4gICAgXCJQbGFjZSBjYXJyaWVyIChsZW5ndGggNSlcIixcbiAgICBcIlBsYWNlIGJhdHRsZXNoaXAgKGxlbmd0aCA0KVwiLFxuICAgIFwiUGxhY2UgY3J1aXNlciAobGVuZ3RoIDMpXCIsXG4gICAgXCJQbGFjZSBzdWJtYXJpbmUgKGxlbmd0aCAzXCIsXG4gICAgXCJQbGFjZSBkZXN0cm95ZXIgKGxlbmd0aCAyKVwiLFxuICBdO1xuICBsZXQgRE9NSW5kZXggPSAwO1xuICBjb25zdCBET01JbnN0cnVjdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnN0cnVjdGlvbnNcIik7XG4gIERPTUluc3RydWN0b3IudGV4dENvbnRlbnQgPSBET01JbnN0cnVjdGlvbnNbRE9NSW5kZXhdO1xuICBjb25zdCBib2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkcy1jb250YWluZXJcIik7XG4gIGNvbnN0IERPTWJvYXJkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IERPTWJvYXJkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IERPTUJvYXJkcyA9IFtET01ib2FyZDEsIERPTWJvYXJkMl07XG4gIGZ1bmN0aW9uIERPTVJlY2VpdmVBdHRhY2soZXZlbnQpIHtcbiAgICAvLyBnZXQgZGF0YXNldCBjb29yZGluYXRlc1xuICAgIC8vIG1ha2Ugc3VyZSB0aGF0IGlmIGFscmVhZHkgYmVlbmhpdCwgcmV0dXJuXG4gICAgLy8gcGxheWVyLnBsYXl0dXJuXG4gICAgLy8gZ2VuZXJhdGUgcmFuZG9tIGNvb3JkcyB1bnRpbCB2YWxpZFxuICAgIC8vIGNwdS5wbGF5dHVyblxuICB9XG4gIGNvbnN0IERPTVNoaXBQbGFjZSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LnJvdyk7XG4gICAgY29uc3QgY2VsbCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5kYXRhc2V0LmNlbGwpO1xuICAgIGNvbnN0IHN0YXJ0aW5nID0gW3JvdywgY2VsbF07XG4gICAgY29uc3QgZW5kaW5nID0gW3JvdywgY2VsbF07XG4gICAgY29uc3QgYW5nbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BsYWNlbWVudC1hbmdsZVwiKS52YWx1ZTtcbiAgICBpZiAoYW5nbGUgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBlbmRpbmdbMV0gKz0gRE9NTGVuZ3Roc1tET01JbmRleF07XG4gICAgfVxuICAgIGlmIChhbmdsZSA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBlbmRpbmdbMF0gKz0gRE9NTGVuZ3Roc1tET01JbmRleF07XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSArPSAxKSB7XG4gICAgICBpZiAoc3RhcnRpbmdbaV0gPiA5IHx8IGVuZGluZ1tpXSA+IDkpIHJldHVybjtcbiAgICAgIGlmIChzdGFydGluZ1tpXSA8IDAgfHwgZW5kaW5nW2ldIDwgMCkgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB0ZXN0IGhlcmUgYWdhaW5cbiAgICBpZiAoc3RhcnRpbmdbMF0gIT09IGVuZGluZ1swXSkge1xuICAgICAgLy8gY2hlY2sgZXZlcnkgc3F1YXJlIGluIHRoZSBwYXRoIHRvIHNlZSBpZiBiYWQuIGlmIGJhZCwgY29udGludWUga2V5d29yZFxuICAgICAgY29uc3QgaGVpZ2h0ID0gc3RhcnRpbmdbMV07XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRpbmdbMF07IGkgPD0gZW5kaW5nWzBdOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGdhbWUuZ2V0SHVtYW4oKS5nZXRCb2FyZCgpLmJvYXJkW2ldW2hlaWdodF0uc2hpcENlbGwgIT09IG51bGwpIHtcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHN0YXJ0aW5nWzFdICE9PSBlbmRpbmdbMV0pIHtcbiAgICAgIGNvbnN0IHggPSBzdGFydGluZ1swXTtcbiAgICAgIGZvciAoXG4gICAgICAgIGxldCBpID0gTWF0aC5taW4oc3RhcnRpbmdbMV0sIGVuZGluZ1sxXSk7XG4gICAgICAgIGkgPD0gTWF0aC5tYXgoc3RhcnRpbmdbMV0sIGVuZGluZ1sxXSk7XG4gICAgICAgIGkgKz0gMVxuICAgICAgKSB7XG4gICAgICAgIGlmIChnYW1lLmdldEh1bWFuKCkuZ2V0Qm9hcmQoKS5ib2FyZFt4XVtpXS5zaGlwQ2VsbCAhPT0gbnVsbCkgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdhbWUucGxheVBsYWNlUm91bmQoc3RhcnRpbmcsIGVuZGluZyk7XG4gICAgLy8gaGVyZSBtYWtlIGxvZ2ljIGZvciBuZXcgc3RhcnRpbmcgZW5kaW5nXG4gICAgLy8gSSBDQU4gRE8gQSBXSElMRSBMT09QIVxuICAgIGNvbnN0IG9sZExlbmd0aCA9IGdhbWUuZ2V0Q1BVKCkuZ2V0Qm9hcmQoKS5hbGxTaGlwcy5sZW5ndGg7XG4gICAgd2hpbGUgKGdhbWUuZ2V0Q1BVKCkuZ2V0Qm9hcmQoKS5hbGxTaGlwcy5sZW5ndGggPT09IG9sZExlbmd0aCkge1xuICAgICAgY29uc3QgcmFuZFggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgIGNvbnN0IHJhbmRZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICBjb25zdCByYW5kQW5nbGVzID0gW1widmVydGljYWxcIiwgXCJob3Jpem9udGFsXCJdO1xuICAgICAgY29uc3QgcmFuZEFuZ2xlID0gcmFuZEFuZ2xlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKV07XG4gICAgICBjb25zdCBjcHVTdGFydGluZyA9IFtyYW5kWCwgcmFuZFldO1xuICAgICAgY29uc3QgY3B1RW5kaW5nID0gW3JhbmRYLCByYW5kWV07XG4gICAgICBpZiAocmFuZEFuZ2xlID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBjcHVFbmRpbmdbMV0gKz0gRE9NTGVuZ3Roc1tET01JbmRleF07XG4gICAgICB9XG4gICAgICBpZiAocmFuZEFuZ2xlID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgY3B1RW5kaW5nWzBdICs9IERPTUxlbmd0aHNbRE9NSW5kZXhdO1xuICAgICAgfVxuICAgICAgaWYgKGNwdUVuZGluZ1swXSA+IDkpIGNvbnRpbnVlO1xuICAgICAgaWYgKGNwdUVuZGluZ1sxXSA+IDkpIGNvbnRpbnVlO1xuXG4gICAgICAvLyBjaGVjayBjb29yZGluYXRlIHZhbGlkaXR5Li4uXG4gICAgICAvLyBpZiBhbmdsZSBpcyB2ZXJ0aWNhbC4uLiBzdGFydFswXSAhPT0gZW5kWzBdXG4gICAgICBsZXQgY291bnQgPSAwO1xuICAgICAgaWYgKGNwdVN0YXJ0aW5nWzBdICE9PSBjcHVFbmRpbmdbMF0pIHtcbiAgICAgICAgLy8gY2hlY2sgZXZlcnkgc3F1YXJlIGluIHRoZSBwYXRoIHRvIHNlZSBpZiBiYWQuIGlmIGJhZCwgY29udGludWUga2V5d29yZFxuICAgICAgICBjb25zdCBoZWlnaHQgPSBjcHVTdGFydGluZ1sxXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IGNwdVN0YXJ0aW5nWzBdOyBpIDw9IGNwdUVuZGluZ1swXTsgaSArPSAxKSB7XG4gICAgICAgICAgaWYgKGdhbWUuZ2V0Q1BVKCkuZ2V0Qm9hcmQoKS5ib2FyZFtpXVtoZWlnaHRdLnNoaXBDZWxsICE9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgICAgIGNvdW50ICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY3B1U3RhcnRpbmdbMV0gIT09IGNwdUVuZGluZ1sxXSkge1xuICAgICAgICBjb25zdCB4ID0gY3B1U3RhcnRpbmdbMF07XG4gICAgICAgIGZvciAoXG4gICAgICAgICAgbGV0IGkgPSBNYXRoLm1pbihjcHVTdGFydGluZ1sxXSwgY3B1RW5kaW5nWzFdKTtcbiAgICAgICAgICBpIDw9IE1hdGgubWF4KGNwdVN0YXJ0aW5nWzFdLCBjcHVFbmRpbmdbMV0pO1xuICAgICAgICAgIGkgKz0gMVxuICAgICAgICApIHtcbiAgICAgICAgICBpZiAoZ2FtZS5nZXRDUFUoKS5nZXRCb2FyZCgpLmJvYXJkW3hdW2ldLnNoaXBDZWxsICE9PSBudWxsKVxuICAgICAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNvdW50ICE9PSAwKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBnYW1lLnBsYXlQbGFjZVJvdW5kKGNwdVN0YXJ0aW5nLCBjcHVFbmRpbmcpO1xuICAgIH1cbiAgICBET01JbmRleCArPSAxO1xuICAgIERPTUluc3RydWN0b3IudGV4dENvbnRlbnQgPSBET01JbnN0cnVjdGlvbnNbRE9NSW5kZXhdIHx8IFwiXCI7XG4gICAgaWYgKERPTUluZGV4ID09PSA1KSB7XG4gICAgICAvL1xuICAgICAgRE9NQm9hcmRzLmZvckVhY2goKGJvYXJkLCBpbmRleCkgPT4ge1xuICAgICAgICBib2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgRE9NU2hpcFBsYWNlKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAxKSB7XG4gICAgICAgICAgYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIERPTVJlY2VpdmVBdHRhY2spO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgdXBkYXRlQm9hcmQoKTtcbiAgfTtcbiAgRE9NQm9hcmRzLmZvckVhY2goKERPTUJvYXJkKSA9PiB7XG4gICAgRE9NQm9hcmQuY2xhc3NMaXN0LmFkZChcImJvYXJkXCIpO1xuICAgIERPTUJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBET01TaGlwUGxhY2UpO1xuICB9KTtcbiAgYm9hcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKERPTWJvYXJkMSk7XG4gIGJvYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChET01ib2FyZDIpO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUJvYXJkKCkge1xuICAgIGNvbnN0IGh1bWFuQm9hcmQgPSBnYW1lLmdldEh1bWFuKCkuZ2V0Qm9hcmQoKS5ib2FyZDtcbiAgICBjb25zdCBjb21wdXRlckJvYXJkID0gZ2FtZS5nZXRDUFUoKS5nZXRCb2FyZCgpLmJvYXJkO1xuICAgIGNvbnN0IGJvYXJkcyA9IFtodW1hbkJvYXJkLCBjb21wdXRlckJvYXJkXTtcblxuICAgIGJvYXJkcy5mb3JFYWNoKChib2FyZCwgYm9hcmRJbmRleCkgPT4ge1xuICAgICAgRE9NQm9hcmRzW2JvYXJkSW5kZXhdLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgYm9hcmQuZm9yRWFjaCgocm93LCByb3dJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBET01Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByb3cuZm9yRWFjaCgoY2VsbCwgY2VsbEluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgRE9NQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgRE9NQ2VsbC5kYXRhc2V0LnJvdyA9IGAke3Jvd0luZGV4fWA7XG4gICAgICAgICAgRE9NQ2VsbC5kYXRhc2V0LmNlbGwgPSBgJHtjZWxsSW5kZXh9YDtcbiAgICAgICAgICAvLyBpZiAoYm9hcmRJbmRleCA9PT0gMCkge1xuICAgICAgICAgIGlmIChjZWxsLnNoaXBDZWxsICE9PSBudWxsKSB7XG4gICAgICAgICAgICBET01DZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIH1cbiAgICAgICAgICBpZiAoY2VsbC5iZWVuSGl0ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBET01DZWxsLmlubmVySFRNTCA9IFwiJnRpbWVzO1wiO1xuICAgICAgICAgICAgaWYgKGNlbGwuc2hpcENlbGwgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgRE9NQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBET01Sb3cuYXBwZW5kQ2hpbGQoRE9NQ2VsbCk7XG4gICAgICAgIH0pO1xuICAgICAgICBET01Cb2FyZHNbYm9hcmRJbmRleF0uYXBwZW5kQ2hpbGQoRE9NUm93KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlQm9hcmQoKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoaXAoeyBsZW5ndGggfSkge1xuICBjb25zdCBwb3NzaWJsZUxlbmd0aHMgPSBbNSwgNCwgMywgMl07XG4gIGlmICghcG9zc2libGVMZW5ndGhzLmluY2x1ZGVzKGxlbmd0aCkpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgc2hpcCBsZW5ndGhcIik7XG4gIGxldCBoaXRzID0gMDtcbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIGhpdHMgKz0gMTtcbiAgfTtcbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmIChoaXRzID09PSBsZW5ndGgpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcbiAgY29uc3QgZ2V0TGVuZ3RoID0gKCkgPT4gbGVuZ3RoO1xuICByZXR1cm4geyBpc1N1bmssIGhpdCwgZ2V0TGVuZ3RoIH07XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0YXRpYy9zdHlsZS5jc3NcIjtcbmltcG9ydCBTY3JlZW5jb250cm9sbGVyIGZyb20gXCIuL3NjcmVlbmNvbnRyb2xsZXJcIjtcblxuU2NyZWVuY29udHJvbGxlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9