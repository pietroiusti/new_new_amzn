/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/myamazon.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/myamazon.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  text-align: center;\\n  width: 90%;\\n  margin: auto;\\n  max-width: 1000px;\\n  font-family: 'Roboto', sans-serif;\\n}\\n\\n#basketDiv2 {\\n  background-color: #a89932;\\n  width: 40%;\\n  margin: auto;\\n  border-radius: 10px;\\n}\\n\\n#basketDiv {\\n  background-color: #2ecc71;\\n  width: 40%;\\n  margin: auto;\\n  border-radius: 10px;\\n}\\n\\n#itemList {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\\n  grid-column-gap: 5px;\\n  margin: auto;\\n  max-width: 1000px;\\n}\\n\\n.item {\\n  background-color: #d9fceb;\\n  margin: 10px;\\n  padding: 10px;\\n  border-radius: 25px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://new_new_amzn/./src/css/myamazon.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://new_new_amzn/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://new_new_amzn/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/myamazon.css":
/*!******************************!*\
  !*** ./src/css/myamazon.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_myamazon_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./myamazon.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/myamazon.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_myamazon_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_myamazon_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_myamazon_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_myamazon_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://new_new_amzn/./src/css/myamazon.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://new_new_amzn/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://new_new_amzn/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://new_new_amzn/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://new_new_amzn/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://new_new_amzn/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://new_new_amzn/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/actionHandler.js":
/*!*********************************!*\
  !*** ./src/js/actionHandler.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"actionHandler\": () => (/* binding */ actionHandler)\n/* harmony export */ });\n/* harmony import */ var _myamazon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myamazon.js */ \"./src/js/myamazon.js\");\nconsole.log('actionHandler.js');\n\n\n\nfunction actionHandler(obj) {\n  let action = obj.action;\n  let itemName = obj.itemName;\n  \n  if (action === 'add') {\n    let data = _myamazon_js__WEBPACK_IMPORTED_MODULE_0__.store.get('data'); // get copy of data\n    let item = data.find(item => item.name === itemName);\n    item.qtty += 1;\n    _myamazon_js__WEBPACK_IMPORTED_MODULE_0__.store.set('data', data);\n  } else if (action === 'remove') {\n    let data = _myamazon_js__WEBPACK_IMPORTED_MODULE_0__.store.get('data'); // get copy of data\n    let item = data.find(item => item.name === itemName);\n    if (item.qtty > 0) {\n      item.qtty -= 1;\n      _myamazon_js__WEBPACK_IMPORTED_MODULE_0__.store.set('data', data);\n    }\n  } else {\n    console.log('Error: Action unknown.');\n  }\n}\n\n\n\n\n//# sourceURL=webpack://new_new_amzn/./src/js/actionHandler.js?");

/***/ }),

/***/ "./src/js/basket.js":
/*!**************************!*\
  !*** ./src/js/basket.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _myamazon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myamazon.js */ \"./src/js/myamazon.js\");\nconsole.log('basket.js');\n\n\n\nclass Basket extends HTMLElement {\n  constructor() {\n    super();\n    _myamazon_js__WEBPACK_IMPORTED_MODULE_0__.store.register('data', this.basketElCallback);\n  }\n\n  connectedCallback() {\n    // OLD:\n    // this.innerHTML = `\n    //     <div id=\"totalNumberDiv\">Total number of items: 0</div>\n    //     <div id=\"totalPriceDiv\">Total Price: 0.00 $</div>\n    // `;\n    // USE DOM MANIPULATION INSTEAD:\n    let totalNumberDiv = document.createElement('div');\n    let totalNumberDivText = document.createTextNode('Total number of items: 0');\n    totalNumberDiv.appendChild(totalNumberDivText);\n\n    let totalPriceDiv = document.createElement('div');\n    let totalPriceDivText = document.createTextNode('Total Price: 0.00 $');\n    totalPriceDiv.appendChild(totalPriceDivText);\n\n    this.appendChild(totalNumberDiv);\n    this.appendChild(totalPriceDiv);\n  }\n\n  basketElCallback(data) {\n    console.log('basketElCallback');\n\n    let totalNumber = data.reduce((acc, a) => acc + a.qtty, 0);\n    let totalPrice = data.reduce((acc, a) => acc + a.qtty*a.price, 0);\n    totalPrice = (Math.round(totalPrice * 100) / 100).toFixed(2); // round to two decimal places\n\n    let basket = document.getElementsByTagName('basket-el')[0];\n    basket.children[0].textContent = 'Total number of items: ' + totalNumber;\n    basket.children[1].textContent = 'Total Price: ' + totalPrice + '$';\n  }\n}\n\ncustomElements.define('basket-el', Basket);\n\n\n//# sourceURL=webpack://new_new_amzn/./src/js/basket.js?");

/***/ }),

/***/ "./src/js/basket2.js":
/*!***************************!*\
  !*** ./src/js/basket2.js ***!
  \***************************/
/***/ (() => {

eval("console.log('basket2.js');\n\nclass BasketStateless extends HTMLElement {\n  constructor() {\n    super();\n  }\n\n  connectedCallback() {\n    let totalNumberDiv = document.createElement('div');\n    let totalNumberDivText = document.createTextNode(this.getAttribute('totalNumber'));\n    totalNumberDiv.appendChild(totalNumberDivText);\n    \n    let totalPriceDiv = document.createElement('div');\n    let totalPriceDivText = document.createTextNode(this.getAttribute('totalPrice'));\n    totalPriceDiv.appendChild(totalPriceDivText);\n    \n    this.appendChild(totalNumberDiv);\n    this.appendChild(totalPriceDiv);\n  }\n}\n\ncustomElements.define('basket-el2', BasketStateless);\n\n\n\n//# sourceURL=webpack://new_new_amzn/./src/js/basket2.js?");

/***/ }),

/***/ "./src/js/card.js":
/*!************************!*\
  !*** ./src/js/card.js ***!
  \************************/
/***/ (() => {

eval("console.log('card.js');\n\nclass Item extends HTMLElement {\n  constructor() {\n    super();\n    this.connectedCallbackHasBeenCalled = false;\n  }\n\n  connectedCallback() {\n    this.connectedCallbackHasBeenCalled = true;\n\n    this.name = this.getAttribute('name');\n    this.id = this.name+'Wrapper';\n    this.price = this.getAttribute('price');\n    this.imgSrc = this.getAttribute('imgSrc');\n    this.qtty = this.getAttribute('qtty');\n    \n    // OLD:\n    // this.innerHTML = `\n    //     <div id=\"${this.name}\" class=\"item\">\n    //         <div class=\"name\">\n    //             ${this.name}\n    //         </div>\n    //         <div class=\"price\">\n    //             $ ${this.price}\n    //         </div>\n    //         <div class=\"imgDiv\">\n    //             <img src=\"${this.imgSrc}\">\n    //         </div>\n    //         <div class=\"qtty\">\n    //             ${this.qtty}\n    //         </div>\n    //         <button id=\"remove${this.name}Button\">-</button>\n    //         <button id=\"add${this.name}Button\">+</button>\n    //     </div>\n    // `;\n    // USE DOM MANIPULATION INSTEAD:\n    let item = document.createElement('div');\n    item.setAttribute('id', this.name);\n    item.setAttribute('class', 'item');\n\n    let name = document.createElement('div');\n    name.setAttribute('class', this.name);\n    let nameText = document.createTextNode(this.name);\n    name.appendChild(nameText);\n    item.appendChild(name);\n\n    let price = document.createElement('div');\n    price.setAttribute('class', 'price');\n    let priceText = document.createTextNode(this.price);\n    price.appendChild(priceText);\n    item.appendChild(price);\n\n    let imgDiv = document.createElement('div');\n    imgDiv.setAttribute('class', 'imgDiv');\n    let img = document.createElement('img');\n    img.setAttribute('src', this.imgSrc);\n    imgDiv.appendChild(img);\n    item.appendChild(imgDiv);\n\n    let qtty = document.createElement('div');\n    qtty.setAttribute('class', 'qtty');\n    let qttyText = document.createTextNode(this.qtty);\n    qtty.appendChild(qttyText);\n    item.appendChild(qtty);\n\n    let buttonRemove = document.createElement('button');\n    buttonRemove.setAttribute('id', 'remove'+this.name+'Button');\n    let buttonRemoveText = document.createTextNode('-');\n    buttonRemove.appendChild(buttonRemoveText);\n    buttonRemove.addEventListener('click', e => this.handleClickRemove(e));\n    item.appendChild(buttonRemove);\n    let buttonAdd = document.createElement('button');\n    buttonAdd.setAttribute('id', 'add'+this.name+'Button');\n    let buttonAddText = document.createTextNode('+');\n    buttonAdd.appendChild(buttonAddText);\n    buttonAdd.addEventListener('click', e => this.handleClickAdd(e));\n    item.appendChild(buttonAdd);\n\n    this.append(item);\n  }\n\n  handleClickAdd(event) {\n    //event.target => button\n    console.log('button');\n    const customEvent = new CustomEvent('addItem', { bubbles: true });\n    event.target.dispatchEvent(customEvent);\n  }\n\n  handleClickRemove(event) {\n    //event.target => button\n    const customEvent = new CustomEvent('removeItem', { bubbles: true });\n    event.target.dispatchEvent(customEvent);\n  }\n\n  static get observedAttributes() {\n    return ['qtty', ];\n  }\n\n  attributeChangedCallback(attrName, oldVal, newVal) {\n    if (!this.connectedCallbackHasBeenCalled)\n      return;\n\n    if (attrName === 'qtty') {\n      let item = document.getElementById(this.name);\n      item.children[3].textContent = newVal;\n    }\n  }\n}\n\ncustomElements.define('list-el', Item);\n\n\n//# sourceURL=webpack://new_new_amzn/./src/js/card.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _myamazon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myamazon.js */ \"./src/js/myamazon.js\");\n\n\n(0,_myamazon_js__WEBPACK_IMPORTED_MODULE_0__.init)();\n\n\n//# sourceURL=webpack://new_new_amzn/./src/js/index.js?");

/***/ }),

/***/ "./src/js/myamazon.js":
/*!****************************!*\
  !*** ./src/js/myamazon.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": () => (/* binding */ init),\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store.js */ \"./src/js/store.js\");\n/* harmony import */ var _actionHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionHandler.js */ \"./src/js/actionHandler.js\");\n/* harmony import */ var _basket_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basket.js */ \"./src/js/basket.js\");\n/* harmony import */ var _basket2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basket2.js */ \"./src/js/basket2.js\");\n/* harmony import */ var _basket2_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_basket2_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card.js */ \"./src/js/card.js\");\n/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_card_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _css_myamazon_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/myamazon.css */ \"./src/css/myamazon.css\");\nconsole.log('myamazon.js');\n\n\nconst store = new _store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n                       {\n                         data: [\n                           {name: 'benjerry', price: 5.95, qtty: 0}, // <<<<<\n                           {name: 'caffelatte', price: 1.27, qtty: 0},\n                           {name: 'calippo', price: 4.10, qtty: 0},\n                           {name: 'evax', price: 2.40, qtty: 0},\n                           {name: 'pizza', price: 4.95, qtty: 0},\n                           {name: 'scottex', price: 4.50, qtty: 0},\n                           {name: 'spaghetti', price: 1.25, qtty: 0},\n                           {name: 'triangulos', price: 2.35, qtty: 0},\n                           {name: 'xibeca', price: 3.75, qtty: 0},\n                           {name: 'chipsahoy', price: 2.20, qtty: 0},\n                         ]\n                       },\n                      );\n\n\n\n\n\n\n\n\n\n\n\n// Make list of items (cards) listen to the custom events ('addItem'\n// and 'removeItem') emitted by the buttons.\nconsole.log('hola');\nlet itemList = document.getElementById('itemList');\nitemList.addEventListener('addItem', (e)=>{\n  console.log('itemList event listener');\n  let parent = e.target.parentElement;\n  let name = parent.id;\n  (0,_actionHandler_js__WEBPACK_IMPORTED_MODULE_1__.actionHandler)( {action: 'add', itemName: name} );\n});\n\nitemList.addEventListener('removeItem', (e) => {\n  let parent = event.target.parentElement;\n  let name = parent.id;\n  (0,_actionHandler_js__WEBPACK_IMPORTED_MODULE_1__.actionHandler)( {action: 'remove', itemName: name} );\n});\n\n// stateless basket\nfunction renderBasket2() {\n  console.log('renderBasket2');\n  let data = store.get('data');\n  let totalNumber = data.reduce((acc, a) => acc + a.qtty, 0);\n  let totalPrice = data.reduce((acc, a) => acc + a.qtty*a.price, 0);\n  totalPrice = (Math.round(totalPrice * 100) / 100).toFixed(2); // round to two decimal places\n\n  let basketDiv = document.getElementById('basketDiv2');\n  let basket = document.createElement('basket-el2');\n  //basket.setAttribute('totalNumber', 'Total number of items: 0');\n  basket.setAttribute('totalNumber', 'Total number of items: ' + totalNumber);\n  //basket.setAttribute('totalprice', 'Total Price: 0.00 $');\n  basket.setAttribute('totalprice', 'Total Price: ' + totalPrice + ' $');\n  basketDiv.appendChild(basket);\n}\n\n//import './basket.js';\n// stateful basket\nfunction renderBasket() {\n  console.log('renderBasket');\n  let basketDiv = document.getElementById('basketDiv');\n  let basket = document.createElement('basket-el');\n  basket.setAttribute('totalNumber', 'Total number of items: 0');\n  basket.setAttribute('totalprice', 'Total Price: 0.00 $');\n  basketDiv.appendChild(basket);\n}\n\nfunction render_list_of_items() {\n  let data = store.get('data');\n  //console.log('data:');\n  //console.log(data);\n  let itemList = document.getElementById('itemList');\n  for (let i = 0; i < data.length; i++) {\n    let name = data[i].name;\n    let item = document.createElement('list-el');\n\n    item.setAttribute('name', name);\n    item.setAttribute('price', data[i].price);\n    item.setAttribute('imgSrc', `../src/img/${name}.jpg`);\n    item.setAttribute('qtty', data[i].qtty);\n    itemList.appendChild(item);\n  }\n}\n\nstore.register('data', listElCallback2);\nstore.register('data', basketElCallback2); //<< stateless basket listener.\n// The listener for the stateful basket is registered by the basket itself\n\nfunction basketElCallback2() {\n  console.log('basketElCallback2');\n  let basketDiv = document.getElementById('basketDiv2');\n  basketDiv.innerHTML = \"\";\n  renderBasket2();\n}\n\nfunction listElCallback2() {\n  console.log('listElCallback2');\n  let itemList = document.getElementById('itemList');\n  itemList.innerHTML = \"\";\n  render_list_of_items();\n}\n\nfunction capitalizeFirstLetter(string) {\n  return string.charAt(0).toUpperCase() + string.slice(1);\n}\n\nfunction init() {\n  renderBasket();\n  renderBasket2();\n  render_list_of_items();\n};\n\n\n//# sourceURL=webpack://new_new_amzn/./src/js/myamazon.js?");

/***/ }),

/***/ "./src/js/store.js":
/*!*************************!*\
  !*** ./src/js/store.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconsole.log('store.js');\n\nclass Store2 {\n  constructor(properties) { // todo: call it state\n    this.listeners = {};\n    this.properties = properties; // todo: call it state\n    console.log(this.properties);\n  }\n  \n  register(prop, cb) {\n    if (!this.listeners[prop])\n      this.listeners[prop] = [];\n    \n    this.listeners[prop].push(cb);\n  }\n\n  get(prop) {\n    return JSON.parse(JSON.stringify(this.properties[prop])); // return (deep) copy\n  }\n\n  set(prop, newVal) {\n    this.properties[prop] = newVal;\n    for (let f of this.listeners[prop]) {\n      f(newVal);\n    }\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Store2);\n\n\n//# sourceURL=webpack://new_new_amzn/./src/js/store.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;