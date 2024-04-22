/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./srcjs/exts/custom.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./srcjs/exts/custom.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Make highlighted element transparent so that tab title can be read when navbar is fixed */\n#driver-highlighted-element-stage, #driver-page-overlay {\n  background: transparent !important;\n  outline: 5000px solid rgba(0, 0, 0, .75)\n}", "",{"version":3,"sources":["webpack://./srcjs/exts/custom.css"],"names":[],"mappings":"AAAA,4FAA4F;AAC5F;EACE,kCAAkC;EAClC;AACF","sourcesContent":["/* Make highlighted element transparent so that tab title can be read when navbar is fixed */\n#driver-highlighted-element-stage, #driver-page-overlay {\n  background: transparent !important;\n  outline: 5000px solid rgba(0, 0, 0, .75)\n}"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./srcjs/exts/custom.css":
/*!*******************************!*\
  !*** ./srcjs/exts/custom.css ***!
  \*******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_custom_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./custom.css */ "./node_modules/css-loader/dist/cjs.js!./srcjs/exts/custom.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_custom_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_custom_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_custom_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_custom_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "shiny":
/*!************************!*\
  !*** external "Shiny" ***!
  \************************/
/***/ ((module) => {

module.exports = Shiny;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

module.exports = jQuery;

/***/ }),

/***/ "./node_modules/driver.js/dist/driver.js.mjs":
/*!***************************************************!*\
  !*** ./node_modules/driver.js/dist/driver.js.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   driver: () => (/* binding */ ke)
/* harmony export */ });
let F = {};
function D(e = {}) {
  F = {
    animate: !0,
    allowClose: !0,
    overlayOpacity: 0.7,
    smoothScroll: !1,
    disableActiveInteraction: !1,
    showProgress: !1,
    stagePadding: 10,
    stageRadius: 5,
    popoverOffset: 10,
    showButtons: ["next", "previous", "close"],
    disableButtons: [],
    overlayColor: "#000",
    ...e
  };
}
function a(e) {
  return e ? F[e] : F;
}
function W(e, o, t, i) {
  return (e /= i / 2) < 1 ? t / 2 * e * e + o : -t / 2 * (--e * (e - 2) - 1) + o;
}
function Q(e) {
  const o = 'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';
  return e.flatMap((t) => {
    const i = t.matches(o), p = Array.from(t.querySelectorAll(o));
    return [...i ? [t] : [], ...p];
  }).filter((t) => getComputedStyle(t).pointerEvents !== "none" && ae(t));
}
function Z(e) {
  if (!e || se(e))
    return;
  const o = a("smoothScroll");
  e.scrollIntoView({
    // Removing the smooth scrolling for elements which exist inside the scrollable parent
    // This was causing the highlight to not properly render
    behavior: !o || re(e) ? "auto" : "smooth",
    inline: "center",
    block: "center"
  });
}
function re(e) {
  if (!e || !e.parentElement)
    return;
  const o = e.parentElement;
  return o.scrollHeight > o.clientHeight;
}
function se(e) {
  const o = e.getBoundingClientRect();
  return o.top >= 0 && o.left >= 0 && o.bottom <= (window.innerHeight || document.documentElement.clientHeight) && o.right <= (window.innerWidth || document.documentElement.clientWidth);
}
function ae(e) {
  return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
}
let O = {};
function b(e, o) {
  O[e] = o;
}
function l(e) {
  return e ? O[e] : O;
}
function V() {
  O = {};
}
let R = {};
function N(e, o) {
  R[e] = o;
}
function L(e) {
  var o;
  (o = R[e]) == null || o.call(R);
}
function ce() {
  R = {};
}
function le(e, o, t, i) {
  let p = l("__activeStagePosition");
  const n = p || t.getBoundingClientRect(), f = i.getBoundingClientRect(), w = W(e, n.x, f.x - n.x, o), r = W(e, n.y, f.y - n.y, o), v = W(e, n.width, f.width - n.width, o), s = W(e, n.height, f.height - n.height, o);
  p = {
    x: w,
    y: r,
    width: v,
    height: s
  }, J(p), b("__activeStagePosition", p);
}
function G(e) {
  if (!e)
    return;
  const o = e.getBoundingClientRect(), t = {
    x: o.x,
    y: o.y,
    width: o.width,
    height: o.height
  };
  b("__activeStagePosition", t), J(t);
}
function de() {
  const e = l("__activeStagePosition"), o = l("__overlaySvg");
  if (!e)
    return;
  if (!o) {
    console.warn("No stage svg found.");
    return;
  }
  const t = window.innerWidth, i = window.innerHeight;
  o.setAttribute("viewBox", `0 0 ${t} ${i}`);
}
function pe(e) {
  const o = ue(e);
  document.body.appendChild(o), te(o, (t) => {
    t.target.tagName === "path" && L("overlayClick");
  }), b("__overlaySvg", o);
}
function J(e) {
  const o = l("__overlaySvg");
  if (!o) {
    pe(e);
    return;
  }
  const t = o.firstElementChild;
  if ((t == null ? void 0 : t.tagName) !== "path")
    throw new Error("no path element found in stage svg");
  t.setAttribute("d", U(e));
}
function ue(e) {
  const o = window.innerWidth, t = window.innerHeight, i = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  i.classList.add("driver-overlay", "driver-overlay-animated"), i.setAttribute("viewBox", `0 0 ${o} ${t}`), i.setAttribute("xmlSpace", "preserve"), i.setAttribute("xmlnsXlink", "http://www.w3.org/1999/xlink"), i.setAttribute("version", "1.1"), i.setAttribute("preserveAspectRatio", "xMinYMin slice"), i.style.fillRule = "evenodd", i.style.clipRule = "evenodd", i.style.strokeLinejoin = "round", i.style.strokeMiterlimit = "2", i.style.zIndex = "10000", i.style.position = "fixed", i.style.top = "0", i.style.left = "0", i.style.width = "100%", i.style.height = "100%";
  const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
  return p.setAttribute("d", U(e)), p.style.fill = a("overlayColor") || "rgb(0,0,0)", p.style.opacity = `${a("overlayOpacity")}`, p.style.pointerEvents = "auto", p.style.cursor = "auto", i.appendChild(p), i;
}
function U(e) {
  const o = window.innerWidth, t = window.innerHeight, i = a("stagePadding") || 0, p = a("stageRadius") || 0, n = e.width + i * 2, f = e.height + i * 2, w = Math.min(p, n / 2, f / 2), r = Math.floor(Math.max(w, 0)), v = e.x - i + r, s = e.y - i, c = n - r * 2, d = f - r * 2;
  return `M${o},0L0,0L0,${t}L${o},${t}L${o},0Z
    M${v},${s} h${c} a${r},${r} 0 0 1 ${r},${r} v${d} a${r},${r} 0 0 1 -${r},${r} h-${c} a${r},${r} 0 0 1 -${r},-${r} v-${d} a${r},${r} 0 0 1 ${r},-${r} z`;
}
function ve() {
  const e = l("__overlaySvg");
  e && e.remove();
}
function fe() {
  const e = document.getElementById("driver-dummy-element");
  if (e)
    return e;
  let o = document.createElement("div");
  return o.id = "driver-dummy-element", o.style.width = "0", o.style.height = "0", o.style.pointerEvents = "none", o.style.opacity = "0", o.style.position = "fixed", o.style.top = "50%", o.style.left = "50%", document.body.appendChild(o), o;
}
function K(e) {
  const { element: o } = e;
  let t = typeof o == "string" ? document.querySelector(o) : o;
  t || (t = fe()), ge(t, e);
}
function he() {
  const e = l("__activeElement"), o = l("__activeStep");
  e && (G(e), de(), ie(e, o));
}
function ge(e, o) {
  const i = Date.now(), p = l("__activeStep"), n = l("__activeElement") || e, f = !n || n === e, w = e.id === "driver-dummy-element", r = n.id === "driver-dummy-element", v = a("animate"), s = o.onHighlightStarted || a("onHighlightStarted"), c = (o == null ? void 0 : o.onHighlighted) || a("onHighlighted"), d = (p == null ? void 0 : p.onDeselected) || a("onDeselected"), m = a(), g = l();
  !f && d && d(r ? void 0 : n, p, {
    config: m,
    state: g
  }), s && s(w ? void 0 : e, o, {
    config: m,
    state: g
  });
  const u = !f && v;
  let h = !1;
  xe(), b("previousStep", p), b("previousElement", n), b("activeStep", o), b("activeElement", e);
  const P = () => {
    if (l("__transitionCallback") !== P)
      return;
    const x = Date.now() - i, y = 400 - x <= 400 / 2;
    o.popover && y && !h && u && (X(e, o), h = !0), a("animate") && x < 400 ? le(x, 400, n, e) : (G(e), c && c(w ? void 0 : e, o, {
      config: a(),
      state: l()
    }), b("__transitionCallback", void 0), b("__previousStep", p), b("__previousElement", n), b("__activeStep", o), b("__activeElement", e)), window.requestAnimationFrame(P);
  };
  b("__transitionCallback", P), window.requestAnimationFrame(P), Z(e), !u && o.popover && X(e, o), n.classList.remove("driver-active-element", "driver-no-interaction"), n.removeAttribute("aria-haspopup"), n.removeAttribute("aria-expanded"), n.removeAttribute("aria-controls"), a("disableActiveInteraction") && e.classList.add("driver-no-interaction"), e.classList.add("driver-active-element"), e.setAttribute("aria-haspopup", "dialog"), e.setAttribute("aria-expanded", "true"), e.setAttribute("aria-controls", "driver-popover-content");
}
function we() {
  var e;
  (e = document.getElementById("driver-dummy-element")) == null || e.remove(), document.querySelectorAll(".driver-active-element").forEach((o) => {
    o.classList.remove("driver-active-element", "driver-no-interaction"), o.removeAttribute("aria-haspopup"), o.removeAttribute("aria-expanded"), o.removeAttribute("aria-controls");
  });
}
function I() {
  const e = l("__resizeTimeout");
  e && window.cancelAnimationFrame(e), b("__resizeTimeout", window.requestAnimationFrame(he));
}
function me(e) {
  var r;
  if (!l("isInitialized") || !(e.key === "Tab" || e.keyCode === 9))
    return;
  const i = l("__activeElement"), p = (r = l("popover")) == null ? void 0 : r.wrapper, n = Q([
    ...p ? [p] : [],
    ...i ? [i] : []
  ]), f = n[0], w = n[n.length - 1];
  if (e.preventDefault(), e.shiftKey) {
    const v = n[n.indexOf(document.activeElement) - 1] || w;
    v == null || v.focus();
  } else {
    const v = n[n.indexOf(document.activeElement) + 1] || f;
    v == null || v.focus();
  }
}
function ee(e) {
  var t;
  ((t = a("allowKeyboardControl")) == null || t) && (e.key === "Escape" ? L("escapePress") : e.key === "ArrowRight" ? L("arrowRightPress") : e.key === "ArrowLeft" && L("arrowLeftPress"));
}
function te(e, o, t) {
  const i = (n, f) => {
    const w = n.target;
    e.contains(w) && ((!t || t(w)) && (n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation()), f == null || f(n));
  };
  document.addEventListener("pointerdown", i, !0), document.addEventListener("mousedown", i, !0), document.addEventListener("pointerup", i, !0), document.addEventListener("mouseup", i, !0), document.addEventListener(
    "click",
    (n) => {
      i(n, o);
    },
    !0
  );
}
function ye() {
  window.addEventListener("keyup", ee, !1), window.addEventListener("keydown", me, !1), window.addEventListener("resize", I), window.addEventListener("scroll", I);
}
function be() {
  window.removeEventListener("keyup", ee), window.removeEventListener("resize", I), window.removeEventListener("scroll", I);
}
function xe() {
  const e = l("popover");
  e && (e.wrapper.style.display = "none");
}
function X(e, o) {
  var C, y;
  let t = l("popover");
  t && document.body.removeChild(t.wrapper), t = Pe(), document.body.appendChild(t.wrapper);
  const {
    title: i,
    description: p,
    showButtons: n,
    disableButtons: f,
    showProgress: w,
    nextBtnText: r = a("nextBtnText") || "Next &rarr;",
    prevBtnText: v = a("prevBtnText") || "&larr; Previous",
    progressText: s = a("progressText") || "{current} of {total}"
  } = o.popover || {};
  t.nextButton.innerHTML = r, t.previousButton.innerHTML = v, t.progress.innerHTML = s, i ? (t.title.innerHTML = i, t.title.style.display = "block") : t.title.style.display = "none", p ? (t.description.innerHTML = p, t.description.style.display = "block") : t.description.style.display = "none";
  const c = n || a("showButtons"), d = w || a("showProgress") || !1, m = (c == null ? void 0 : c.includes("next")) || (c == null ? void 0 : c.includes("previous")) || d;
  t.closeButton.style.display = c.includes("close") ? "block" : "none", m ? (t.footer.style.display = "flex", t.progress.style.display = d ? "block" : "none", t.nextButton.style.display = c.includes("next") ? "block" : "none", t.previousButton.style.display = c.includes("previous") ? "block" : "none") : t.footer.style.display = "none";
  const g = f || a("disableButtons") || [];
  g != null && g.includes("next") && (t.nextButton.disabled = !0, t.nextButton.classList.add("driver-popover-btn-disabled")), g != null && g.includes("previous") && (t.previousButton.disabled = !0, t.previousButton.classList.add("driver-popover-btn-disabled")), g != null && g.includes("close") && (t.closeButton.disabled = !0, t.closeButton.classList.add("driver-popover-btn-disabled"));
  const u = t.wrapper;
  u.style.display = "block", u.style.left = "", u.style.top = "", u.style.bottom = "", u.style.right = "", u.id = "driver-popover-content", u.setAttribute("role", "dialog"), u.setAttribute("aria-labelledby", "driver-popover-title"), u.setAttribute("aria-describedby", "driver-popover-description");
  const h = t.arrow;
  h.className = "driver-popover-arrow";
  const P = ((C = o.popover) == null ? void 0 : C.popoverClass) || a("popoverClass") || "";
  u.className = `driver-popover ${P}`.trim(), te(
    t.wrapper,
    (k) => {
      var $, B, M;
      const T = k.target, E = (($ = o.popover) == null ? void 0 : $.onNextClick) || a("onNextClick"), A = ((B = o.popover) == null ? void 0 : B.onPrevClick) || a("onPrevClick"), H = ((M = o.popover) == null ? void 0 : M.onCloseClick) || a("onCloseClick");
      if (T.classList.contains("driver-popover-next-btn"))
        return E ? E(e, o, {
          config: a(),
          state: l()
        }) : L("nextClick");
      if (T.classList.contains("driver-popover-prev-btn"))
        return A ? A(e, o, {
          config: a(),
          state: l()
        }) : L("prevClick");
      if (T.classList.contains("driver-popover-close-btn"))
        return H ? H(e, o, {
          config: a(),
          state: l()
        }) : L("closeClick");
    },
    (k) => !(t != null && t.description.contains(k)) && !(t != null && t.title.contains(k)) && typeof k.className == "string" && k.className.includes("driver-popover")
  ), b("popover", t);
  const S = ((y = o.popover) == null ? void 0 : y.onPopoverRender) || a("onPopoverRender");
  S && S(t, {
    config: a(),
    state: l()
  }), ie(e, o), Z(u);
  const _ = e.classList.contains("driver-dummy-element"), x = Q([u, ..._ ? [] : [e]]);
  x.length > 0 && x[0].focus();
}
function oe() {
  const e = l("popover");
  if (!(e != null && e.wrapper))
    return;
  const o = e.wrapper.getBoundingClientRect(), t = a("stagePadding") || 0, i = a("popoverOffset") || 0;
  return {
    width: o.width + t + i,
    height: o.height + t + i,
    realWidth: o.width,
    realHeight: o.height
  };
}
function Y(e, o) {
  const { elementDimensions: t, popoverDimensions: i, popoverPadding: p, popoverArrowDimensions: n } = o;
  return e === "start" ? Math.max(
    Math.min(
      t.top - p,
      window.innerHeight - i.realHeight - n.width
    ),
    n.width
  ) : e === "end" ? Math.max(
    Math.min(
      t.top - (i == null ? void 0 : i.realHeight) + t.height + p,
      window.innerHeight - (i == null ? void 0 : i.realHeight) - n.width
    ),
    n.width
  ) : e === "center" ? Math.max(
    Math.min(
      t.top + t.height / 2 - (i == null ? void 0 : i.realHeight) / 2,
      window.innerHeight - (i == null ? void 0 : i.realHeight) - n.width
    ),
    n.width
  ) : 0;
}
function j(e, o) {
  const { elementDimensions: t, popoverDimensions: i, popoverPadding: p, popoverArrowDimensions: n } = o;
  return e === "start" ? Math.max(
    Math.min(
      t.left - p,
      window.innerWidth - i.realWidth - n.width
    ),
    n.width
  ) : e === "end" ? Math.max(
    Math.min(
      t.left - (i == null ? void 0 : i.realWidth) + t.width + p,
      window.innerWidth - (i == null ? void 0 : i.realWidth) - n.width
    ),
    n.width
  ) : e === "center" ? Math.max(
    Math.min(
      t.left + t.width / 2 - (i == null ? void 0 : i.realWidth) / 2,
      window.innerWidth - (i == null ? void 0 : i.realWidth) - n.width
    ),
    n.width
  ) : 0;
}
function ie(e, o) {
  const t = l("popover");
  if (!t)
    return;
  const { align: i = "start", side: p = "left" } = (o == null ? void 0 : o.popover) || {}, n = i, f = e.id === "driver-dummy-element" ? "over" : p, w = a("stagePadding") || 0, r = oe(), v = t.arrow.getBoundingClientRect(), s = e.getBoundingClientRect(), c = s.top - r.height;
  let d = c >= 0;
  const m = window.innerHeight - (s.bottom + r.height);
  let g = m >= 0;
  const u = s.left - r.width;
  let h = u >= 0;
  const P = window.innerWidth - (s.right + r.width);
  let S = P >= 0;
  const _ = !d && !g && !h && !S;
  let x = f;
  if (f === "top" && d ? S = h = g = !1 : f === "bottom" && g ? S = h = d = !1 : f === "left" && h ? S = d = g = !1 : f === "right" && S && (h = d = g = !1), f === "over") {
    const C = window.innerWidth / 2 - r.realWidth / 2, y = window.innerHeight / 2 - r.realHeight / 2;
    t.wrapper.style.left = `${C}px`, t.wrapper.style.right = "auto", t.wrapper.style.top = `${y}px`, t.wrapper.style.bottom = "auto";
  } else if (_) {
    const C = window.innerWidth / 2 - (r == null ? void 0 : r.realWidth) / 2, y = 10;
    t.wrapper.style.left = `${C}px`, t.wrapper.style.right = "auto", t.wrapper.style.bottom = `${y}px`, t.wrapper.style.top = "auto";
  } else if (h) {
    const C = Math.min(
      u,
      window.innerWidth - (r == null ? void 0 : r.realWidth) - v.width
    ), y = Y(n, {
      elementDimensions: s,
      popoverDimensions: r,
      popoverPadding: w,
      popoverArrowDimensions: v
    });
    t.wrapper.style.left = `${C}px`, t.wrapper.style.top = `${y}px`, t.wrapper.style.bottom = "auto", t.wrapper.style.right = "auto", x = "left";
  } else if (S) {
    const C = Math.min(
      P,
      window.innerWidth - (r == null ? void 0 : r.realWidth) - v.width
    ), y = Y(n, {
      elementDimensions: s,
      popoverDimensions: r,
      popoverPadding: w,
      popoverArrowDimensions: v
    });
    t.wrapper.style.right = `${C}px`, t.wrapper.style.top = `${y}px`, t.wrapper.style.bottom = "auto", t.wrapper.style.left = "auto", x = "right";
  } else if (d) {
    const C = Math.min(
      c,
      window.innerHeight - r.realHeight - v.width
    );
    let y = j(n, {
      elementDimensions: s,
      popoverDimensions: r,
      popoverPadding: w,
      popoverArrowDimensions: v
    });
    t.wrapper.style.top = `${C}px`, t.wrapper.style.left = `${y}px`, t.wrapper.style.bottom = "auto", t.wrapper.style.right = "auto", x = "top";
  } else if (g) {
    const C = Math.min(
      m,
      window.innerHeight - (r == null ? void 0 : r.realHeight) - v.width
    );
    let y = j(n, {
      elementDimensions: s,
      popoverDimensions: r,
      popoverPadding: w,
      popoverArrowDimensions: v
    });
    t.wrapper.style.left = `${y}px`, t.wrapper.style.bottom = `${C}px`, t.wrapper.style.top = "auto", t.wrapper.style.right = "auto", x = "bottom";
  }
  _ ? t.arrow.classList.add("driver-popover-arrow-none") : Ce(n, x, e);
}
function Ce(e, o, t) {
  const i = l("popover");
  if (!i)
    return;
  const p = t.getBoundingClientRect(), n = oe(), f = i.arrow, w = n.width, r = window.innerWidth, v = p.width, s = p.left, c = n.height, d = window.innerHeight, m = p.top, g = p.height;
  f.className = "driver-popover-arrow";
  let u = o, h = e;
  o === "top" ? (s + v <= 0 ? (u = "right", h = "end") : s + v - w <= 0 && (u = "top", h = "start"), s >= r ? (u = "left", h = "end") : s + w >= r && (u = "top", h = "end")) : o === "bottom" ? (s + v <= 0 ? (u = "right", h = "start") : s + v - w <= 0 && (u = "bottom", h = "start"), s >= r ? (u = "left", h = "start") : s + w >= r && (u = "bottom", h = "end")) : o === "left" ? (m + g <= 0 ? (u = "bottom", h = "end") : m + g - c <= 0 && (u = "left", h = "start"), m >= d ? (u = "top", h = "end") : m + c >= d && (u = "left", h = "end")) : o === "right" && (m + g <= 0 ? (u = "bottom", h = "start") : m + g - c <= 0 && (u = "right", h = "start"), m >= d ? (u = "top", h = "start") : m + c >= d && (u = "right", h = "end")), u ? (f.classList.add(`driver-popover-arrow-side-${u}`), f.classList.add(`driver-popover-arrow-align-${h}`)) : f.classList.add("driver-popover-arrow-none");
}
function Pe() {
  const e = document.createElement("div");
  e.classList.add("driver-popover");
  const o = document.createElement("div");
  o.classList.add("driver-popover-arrow");
  const t = document.createElement("header");
  t.id = "driver-popover-title", t.classList.add("driver-popover-title"), t.style.display = "none", t.innerText = "Popover Title";
  const i = document.createElement("div");
  i.id = "driver-popover-description", i.classList.add("driver-popover-description"), i.style.display = "none", i.innerText = "Popover description is here";
  const p = document.createElement("button");
  p.type = "button", p.classList.add("driver-popover-close-btn"), p.setAttribute("aria-label", "Close"), p.innerHTML = "&times;";
  const n = document.createElement("footer");
  n.classList.add("driver-popover-footer");
  const f = document.createElement("span");
  f.classList.add("driver-popover-progress-text"), f.innerText = "";
  const w = document.createElement("span");
  w.classList.add("driver-popover-navigation-btns");
  const r = document.createElement("button");
  r.type = "button", r.classList.add("driver-popover-prev-btn"), r.innerHTML = "&larr; Previous";
  const v = document.createElement("button");
  return v.type = "button", v.classList.add("driver-popover-next-btn"), v.innerHTML = "Next &rarr;", w.appendChild(r), w.appendChild(v), n.appendChild(f), n.appendChild(w), e.appendChild(p), e.appendChild(o), e.appendChild(t), e.appendChild(i), e.appendChild(n), {
    wrapper: e,
    arrow: o,
    title: t,
    description: i,
    footer: n,
    previousButton: r,
    nextButton: v,
    closeButton: p,
    footerButtons: w,
    progress: f
  };
}
function Se() {
  var o;
  const e = l("popover");
  e && ((o = e.wrapper.parentElement) == null || o.removeChild(e.wrapper));
}
function ke(e = {}) {
  D(e);
  function o() {
    a("allowClose") && v();
  }
  function t() {
    const s = l("activeIndex"), c = a("steps") || [];
    if (typeof s == "undefined")
      return;
    const d = s + 1;
    c[d] ? r(d) : v();
  }
  function i() {
    const s = l("activeIndex"), c = a("steps") || [];
    if (typeof s == "undefined")
      return;
    const d = s - 1;
    c[d] ? r(d) : v();
  }
  function p(s) {
    (a("steps") || [])[s] ? r(s) : v();
  }
  function n() {
    var h;
    if (l("__transitionCallback"))
      return;
    const c = l("activeIndex"), d = l("__activeStep"), m = l("__activeElement");
    if (typeof c == "undefined" || typeof d == "undefined" || typeof l("activeIndex") == "undefined")
      return;
    const u = ((h = d.popover) == null ? void 0 : h.onPrevClick) || a("onPrevClick");
    if (u)
      return u(m, d, {
        config: a(),
        state: l()
      });
    i();
  }
  function f() {
    var u;
    if (l("__transitionCallback"))
      return;
    const c = l("activeIndex"), d = l("__activeStep"), m = l("__activeElement");
    if (typeof c == "undefined" || typeof d == "undefined")
      return;
    const g = ((u = d.popover) == null ? void 0 : u.onNextClick) || a("onNextClick");
    if (g)
      return g(m, d, {
        config: a(),
        state: l()
      });
    t();
  }
  function w() {
    l("isInitialized") || (b("isInitialized", !0), document.body.classList.add("driver-active", a("animate") ? "driver-fade" : "driver-simple"), ye(), N("overlayClick", o), N("escapePress", o), N("arrowLeftPress", n), N("arrowRightPress", f));
  }
  function r(s = 0) {
    var E, A, H, $, B, M, z, q;
    const c = a("steps");
    if (!c) {
      console.error("No steps to drive through"), v();
      return;
    }
    if (!c[s]) {
      v();
      return;
    }
    b("__activeOnDestroyed", document.activeElement), b("activeIndex", s);
    const d = c[s], m = c[s + 1], g = c[s - 1], u = ((E = d.popover) == null ? void 0 : E.doneBtnText) || a("doneBtnText") || "Done", h = a("allowClose"), P = typeof ((A = d.popover) == null ? void 0 : A.showProgress) != "undefined" ? (H = d.popover) == null ? void 0 : H.showProgress : a("showProgress"), _ = ((($ = d.popover) == null ? void 0 : $.progressText) || a("progressText") || "{{current}} of {{total}}").replace("{{current}}", `${s + 1}`).replace("{{total}}", `${c.length}`), x = ((B = d.popover) == null ? void 0 : B.showButtons) || a("showButtons"), C = [
      "next",
      "previous",
      ...h ? ["close"] : []
    ].filter((ne) => !(x != null && x.length) || x.includes(ne)), y = ((M = d.popover) == null ? void 0 : M.onNextClick) || a("onNextClick"), k = ((z = d.popover) == null ? void 0 : z.onPrevClick) || a("onPrevClick"), T = ((q = d.popover) == null ? void 0 : q.onCloseClick) || a("onCloseClick");
    K({
      ...d,
      popover: {
        showButtons: C,
        nextBtnText: m ? void 0 : u,
        disableButtons: [...g ? [] : ["previous"]],
        showProgress: P,
        progressText: _,
        onNextClick: y || (() => {
          m ? r(s + 1) : v();
        }),
        onPrevClick: k || (() => {
          r(s - 1);
        }),
        onCloseClick: T || (() => {
          v();
        }),
        ...(d == null ? void 0 : d.popover) || {}
      }
    });
  }
  function v(s = !0) {
    const c = l("__activeElement"), d = l("__activeStep"), m = l("__activeOnDestroyed"), g = a("onDestroyStarted");
    if (s && g) {
      const P = !c || (c == null ? void 0 : c.id) === "driver-dummy-element";
      g(P ? void 0 : c, d, {
        config: a(),
        state: l()
      });
      return;
    }
    const u = (d == null ? void 0 : d.onDeselected) || a("onDeselected"), h = a("onDestroyed");
    if (document.body.classList.remove("driver-active", "driver-fade", "driver-simple"), be(), Se(), we(), ve(), ce(), V(), c && d) {
      const P = c.id === "driver-dummy-element";
      u && u(P ? void 0 : c, d, {
        config: a(),
        state: l()
      }), h && h(P ? void 0 : c, d, {
        config: a(),
        state: l()
      });
    }
    m && m.focus();
  }
  return {
    isActive: () => l("isInitialized") || !1,
    refresh: I,
    drive: (s = 0) => {
      w(), r(s);
    },
    setConfig: D,
    setSteps: (s) => {
      V(), D({
        ...a(),
        steps: s
      });
    },
    getConfig: a,
    getState: l,
    getActiveIndex: () => l("activeIndex"),
    isFirstStep: () => l("activeIndex") === 0,
    isLastStep: () => {
      const s = a("steps") || [], c = l("activeIndex");
      return c !== void 0 && c === s.length - 1;
    },
    getActiveStep: () => l("activeStep"),
    getActiveElement: () => l("activeElement"),
    getPreviousElement: () => l("previousElement"),
    getPreviousStep: () => l("previousStep"),
    moveNext: t,
    movePrevious: i,
    moveTo: p,
    hasNextStep: () => {
      const s = a("steps") || [], c = l("activeIndex");
      return c !== void 0 && s[c + 1];
    },
    hasPreviousStep: () => {
      const s = a("steps") || [], c = l("activeIndex");
      return c !== void 0 && s[c - 1];
    },
    highlight: (s) => {
      w(), K({
        ...s,
        popover: s.popover ? {
          showButtons: [],
          showProgress: !1,
          progressText: "",
          ...s.popover
        } : void 0
      });
    },
    destroy: () => {
      v(!1);
    }
  };
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
/*!********************************!*\
  !*** ./srcjs/exts/cicerone.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var driver_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! driver.js */ "./node_modules/driver.js/dist/driver.js.mjs");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shiny__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shiny */ "shiny");
/* harmony import */ var shiny__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shiny__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom.css */ "./srcjs/exts/custom.css");








let driverList = [];
let highlighted;
let previous;
let has_next;

const on_next = (id) => {
  highlighted = driverList[id].getActiveElement();
  previous = driverList[id].getPreviousElement();
  has_next = driverList[id].hasNextStep();

  try {
    highlighted = highlighted.options.element.substr(1);
  } catch (err) {
    highlighted = null;
  }

  try {
    previous = previous.options.element.substr(1);
  } catch (err) {
    previous = null;
  }

  var data = {
    highlighted: highlighted,
    has_next: has_next,
    previous: highlighted,
    before_previous: previous,
  };
  Shiny.setInputValue(id + "_cicerone_next", data);
};

const on_previous = (id) => {
  highlighted = driverList[id].getActiveElement();
  previous = driverList[id].getPreviousElement();
  has_next = driverList[id].hasNextStep();

  try {
    highlighted = highlighted.options.element.substr(1);
  } catch (err) {
    highlighted = null;
  }

  try {
    previous = previous.options.element.substr(1);
  } catch (err) {
    previous = null;
  }

  var data = {
    highlighted: highlighted,
    has_next: has_next,
    previous: highlighted,
    before_previous: previous,
  };

  Shiny.setInputValue(id + "_cicerone_previous", data);
};

const make_previous = (id) => {
  return function () {
    return on_previous(id);
  };
};

const make_next = (id) => {
  return function () {
    return on_next(id);
  };
};

Shiny.addCustomMessageHandler("cicerone-init", function (opts) {
  var id = opts.globals.id;
  var next_func = make_next(id);
  var prev_func = make_previous(id);
  opts.globals.onNextClick = next_func;
  opts.globals.onPreviousClick = prev_func;
  opts.globals.onDestroyStarted = function () {
    Shiny.setInputValue("cicerone_reset", true, { priority: "event" });
  };
  
  if (opts.globals.onCloseClick) {
    opts.globals.onCloseClick = eval(opts.globals.onCloseClick)
  }
  

  opts.steps.forEach((step, index) => {
    if (opts.steps[index].tab_id) {
      opts.steps[index].onHighlightStarted = onHighlightTab({
        tab_id: step.tab_id,
        tab: step.tab,
      }).getFn;
    }

    if (opts.steps[index].onHighlighted) {
      opts.steps[index].onHighlighted = new Function(
        "return " + opts.steps[index].onHighlighted,
      )();
    }

    if (opts.steps[index].onHighlightStarted && !opts.steps[index].tab_id) {
      opts.steps[index].onHighlightStarted = new Function(
        "return " + opts.steps[index].onHighlightStarted,
      )();
    }

    if (opts.steps[index].onNextClick) {
      debugger;
      opts.steps[index].onNextClick = new Function(
        "return " + opts.steps[index].onNext,
      )();
    }
  });

  debugger;
  driverList[id] = (0,driver_js__WEBPACK_IMPORTED_MODULE_0__.driver)(opts.globals,
  opts.steps);
  if (opts.steps) {
    driverList[id].defineSteps(opts.steps);
  }
});

const onHighlightTab = ({ tab_id, tab }) => ({
  tab_id,
  tab,
  getFn(element) {
    var tabs = $("#" + this.tab_id);
    console.log(this.tab_id);
    Shiny.inputBindings.bindingNames["shiny.bootstrapTabInput"].binding
      .setValue(tabs, this.tab);
  },
});

Shiny.addCustomMessageHandler("cicerone-start", function (opts) {
  driverList[opts.id].drive(opts.step);
});

Shiny.addCustomMessageHandler("cicerone-reset", function (opts) {
  driverList[opts.id].reset();
});

Shiny.addCustomMessageHandler("cicerone-next", function (opts) {
  driverList[opts.id].moveNext();
});

Shiny.addCustomMessageHandler("cicerone-previous", function (opts) {
  driverList[opts.id].movePrevious();
});

Shiny.addCustomMessageHandler("cicerone-highlight-man", function (opts) {
  driverList[opts.id].highlight(opts);
});

Shiny.addCustomMessageHandler("cicerone-highlight", function (opts) {
  driverList[opts.id].highlight(opts.el);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsR0FBRyxFQUFFLEVBQUU7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUdBQWlHLEdBQUcsRUFBRSxFQUFFO0FBQ3hHO0FBQ0EsMkdBQTJHLG9CQUFvQjtBQUMvSDtBQUNBO0FBQ0E7QUFDQSxhQUFhLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsR0FBRyxTQUFTLEVBQUUsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLFNBQVMsRUFBRSxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLElBQUksR0FBRztBQUN6SjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsYUFBYTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQsaURBQWlEO0FBQ2pELDZDQUE2QyxTQUFTLElBQUksTUFBTTtBQUNoRSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsRUFBRTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtB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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxtQkFBbUI7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxtQkFBbUIsaURBQU07QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELDBCQUEwQixhQUFhO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaWNlcm9uZS8uL3NyY2pzL2V4dHMvY3VzdG9tLmNzcyIsIndlYnBhY2s6Ly9jaWNlcm9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2ljZXJvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9jaWNlcm9uZS8uL3NyY2pzL2V4dHMvY3VzdG9tLmNzcz9kMGE4Iiwid2VicGFjazovL2NpY2Vyb25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2NpY2Vyb25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jaWNlcm9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jaWNlcm9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jaWNlcm9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2NpY2Vyb25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY2ljZXJvbmUvZXh0ZXJuYWwgdmFyIFwiU2hpbnlcIiIsIndlYnBhY2s6Ly9jaWNlcm9uZS9leHRlcm5hbCB2YXIgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly9jaWNlcm9uZS8uL25vZGVfbW9kdWxlcy9kcml2ZXIuanMvZGlzdC9kcml2ZXIuanMubWpzIiwid2VicGFjazovL2NpY2Vyb25lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NpY2Vyb25lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NpY2Vyb25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jaWNlcm9uZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NpY2Vyb25lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2ljZXJvbmUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2NpY2Vyb25lLy4vc3JjanMvZXh0cy9jaWNlcm9uZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIE1ha2UgaGlnaGxpZ2h0ZWQgZWxlbWVudCB0cmFuc3BhcmVudCBzbyB0aGF0IHRhYiB0aXRsZSBjYW4gYmUgcmVhZCB3aGVuIG5hdmJhciBpcyBmaXhlZCAqL1xcbiNkcml2ZXItaGlnaGxpZ2h0ZWQtZWxlbWVudC1zdGFnZSwgI2RyaXZlci1wYWdlLW92ZXJsYXkge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gIG91dGxpbmU6IDUwMDBweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC43NSlcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjanMvZXh0cy9jdXN0b20uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDRGQUE0RjtBQUM1RjtFQUNFLGtDQUFrQztFQUNsQztBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIE1ha2UgaGlnaGxpZ2h0ZWQgZWxlbWVudCB0cmFuc3BhcmVudCBzbyB0aGF0IHRhYiB0aXRsZSBjYW4gYmUgcmVhZCB3aGVuIG5hdmJhciBpcyBmaXhlZCAqL1xcbiNkcml2ZXItaGlnaGxpZ2h0ZWQtZWxlbWVudC1zdGFnZSwgI2RyaXZlci1wYWdlLW92ZXJsYXkge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcXG4gIG91dGxpbmU6IDUwMDBweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC43NSlcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3VzdG9tLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY3VzdG9tLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibW9kdWxlLmV4cG9ydHMgPSBTaGlueTsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiLCJsZXQgRiA9IHt9O1xuZnVuY3Rpb24gRChlID0ge30pIHtcbiAgRiA9IHtcbiAgICBhbmltYXRlOiAhMCxcbiAgICBhbGxvd0Nsb3NlOiAhMCxcbiAgICBvdmVybGF5T3BhY2l0eTogMC43LFxuICAgIHNtb290aFNjcm9sbDogITEsXG4gICAgZGlzYWJsZUFjdGl2ZUludGVyYWN0aW9uOiAhMSxcbiAgICBzaG93UHJvZ3Jlc3M6ICExLFxuICAgIHN0YWdlUGFkZGluZzogMTAsXG4gICAgc3RhZ2VSYWRpdXM6IDUsXG4gICAgcG9wb3Zlck9mZnNldDogMTAsXG4gICAgc2hvd0J1dHRvbnM6IFtcIm5leHRcIiwgXCJwcmV2aW91c1wiLCBcImNsb3NlXCJdLFxuICAgIGRpc2FibGVCdXR0b25zOiBbXSxcbiAgICBvdmVybGF5Q29sb3I6IFwiIzAwMFwiLFxuICAgIC4uLmVcbiAgfTtcbn1cbmZ1bmN0aW9uIGEoZSkge1xuICByZXR1cm4gZSA/IEZbZV0gOiBGO1xufVxuZnVuY3Rpb24gVyhlLCBvLCB0LCBpKSB7XG4gIHJldHVybiAoZSAvPSBpIC8gMikgPCAxID8gdCAvIDIgKiBlICogZSArIG8gOiAtdCAvIDIgKiAoLS1lICogKGUgLSAyKSAtIDEpICsgbztcbn1cbmZ1bmN0aW9uIFEoZSkge1xuICBjb25zdCBvID0gJ2FbaHJlZl06bm90KFtkaXNhYmxlZF0pLCBidXR0b246bm90KFtkaXNhYmxlZF0pLCB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOm5vdChbZGlzYWJsZWRdKSwgaW5wdXRbdHlwZT1cInJhZGlvXCJdOm5vdChbZGlzYWJsZWRdKSwgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdChbZGlzYWJsZWRdKSwgc2VsZWN0Om5vdChbZGlzYWJsZWRdKSc7XG4gIHJldHVybiBlLmZsYXRNYXAoKHQpID0+IHtcbiAgICBjb25zdCBpID0gdC5tYXRjaGVzKG8pLCBwID0gQXJyYXkuZnJvbSh0LnF1ZXJ5U2VsZWN0b3JBbGwobykpO1xuICAgIHJldHVybiBbLi4uaSA/IFt0XSA6IFtdLCAuLi5wXTtcbiAgfSkuZmlsdGVyKCh0KSA9PiBnZXRDb21wdXRlZFN0eWxlKHQpLnBvaW50ZXJFdmVudHMgIT09IFwibm9uZVwiICYmIGFlKHQpKTtcbn1cbmZ1bmN0aW9uIFooZSkge1xuICBpZiAoIWUgfHwgc2UoZSkpXG4gICAgcmV0dXJuO1xuICBjb25zdCBvID0gYShcInNtb290aFNjcm9sbFwiKTtcbiAgZS5zY3JvbGxJbnRvVmlldyh7XG4gICAgLy8gUmVtb3ZpbmcgdGhlIHNtb290aCBzY3JvbGxpbmcgZm9yIGVsZW1lbnRzIHdoaWNoIGV4aXN0IGluc2lkZSB0aGUgc2Nyb2xsYWJsZSBwYXJlbnRcbiAgICAvLyBUaGlzIHdhcyBjYXVzaW5nIHRoZSBoaWdobGlnaHQgdG8gbm90IHByb3Blcmx5IHJlbmRlclxuICAgIGJlaGF2aW9yOiAhbyB8fCByZShlKSA/IFwiYXV0b1wiIDogXCJzbW9vdGhcIixcbiAgICBpbmxpbmU6IFwiY2VudGVyXCIsXG4gICAgYmxvY2s6IFwiY2VudGVyXCJcbiAgfSk7XG59XG5mdW5jdGlvbiByZShlKSB7XG4gIGlmICghZSB8fCAhZS5wYXJlbnRFbGVtZW50KVxuICAgIHJldHVybjtcbiAgY29uc3QgbyA9IGUucGFyZW50RWxlbWVudDtcbiAgcmV0dXJuIG8uc2Nyb2xsSGVpZ2h0ID4gby5jbGllbnRIZWlnaHQ7XG59XG5mdW5jdGlvbiBzZShlKSB7XG4gIGNvbnN0IG8gPSBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICByZXR1cm4gby50b3AgPj0gMCAmJiBvLmxlZnQgPj0gMCAmJiBvLmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmIG8ucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCk7XG59XG5mdW5jdGlvbiBhZShlKSB7XG4gIHJldHVybiAhIShlLm9mZnNldFdpZHRoIHx8IGUub2Zmc2V0SGVpZ2h0IHx8IGUuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpO1xufVxubGV0IE8gPSB7fTtcbmZ1bmN0aW9uIGIoZSwgbykge1xuICBPW2VdID0gbztcbn1cbmZ1bmN0aW9uIGwoZSkge1xuICByZXR1cm4gZSA/IE9bZV0gOiBPO1xufVxuZnVuY3Rpb24gVigpIHtcbiAgTyA9IHt9O1xufVxubGV0IFIgPSB7fTtcbmZ1bmN0aW9uIE4oZSwgbykge1xuICBSW2VdID0gbztcbn1cbmZ1bmN0aW9uIEwoZSkge1xuICB2YXIgbztcbiAgKG8gPSBSW2VdKSA9PSBudWxsIHx8IG8uY2FsbChSKTtcbn1cbmZ1bmN0aW9uIGNlKCkge1xuICBSID0ge307XG59XG5mdW5jdGlvbiBsZShlLCBvLCB0LCBpKSB7XG4gIGxldCBwID0gbChcIl9fYWN0aXZlU3RhZ2VQb3NpdGlvblwiKTtcbiAgY29uc3QgbiA9IHAgfHwgdC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgZiA9IGkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHcgPSBXKGUsIG4ueCwgZi54IC0gbi54LCBvKSwgciA9IFcoZSwgbi55LCBmLnkgLSBuLnksIG8pLCB2ID0gVyhlLCBuLndpZHRoLCBmLndpZHRoIC0gbi53aWR0aCwgbyksIHMgPSBXKGUsIG4uaGVpZ2h0LCBmLmhlaWdodCAtIG4uaGVpZ2h0LCBvKTtcbiAgcCA9IHtcbiAgICB4OiB3LFxuICAgIHk6IHIsXG4gICAgd2lkdGg6IHYsXG4gICAgaGVpZ2h0OiBzXG4gIH0sIEoocCksIGIoXCJfX2FjdGl2ZVN0YWdlUG9zaXRpb25cIiwgcCk7XG59XG5mdW5jdGlvbiBHKGUpIHtcbiAgaWYgKCFlKVxuICAgIHJldHVybjtcbiAgY29uc3QgbyA9IGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIHQgPSB7XG4gICAgeDogby54LFxuICAgIHk6IG8ueSxcbiAgICB3aWR0aDogby53aWR0aCxcbiAgICBoZWlnaHQ6IG8uaGVpZ2h0XG4gIH07XG4gIGIoXCJfX2FjdGl2ZVN0YWdlUG9zaXRpb25cIiwgdCksIEoodCk7XG59XG5mdW5jdGlvbiBkZSgpIHtcbiAgY29uc3QgZSA9IGwoXCJfX2FjdGl2ZVN0YWdlUG9zaXRpb25cIiksIG8gPSBsKFwiX19vdmVybGF5U3ZnXCIpO1xuICBpZiAoIWUpXG4gICAgcmV0dXJuO1xuICBpZiAoIW8pIHtcbiAgICBjb25zb2xlLndhcm4oXCJObyBzdGFnZSBzdmcgZm91bmQuXCIpO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB0ID0gd2luZG93LmlubmVyV2lkdGgsIGkgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIG8uc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBgMCAwICR7dH0gJHtpfWApO1xufVxuZnVuY3Rpb24gcGUoZSkge1xuICBjb25zdCBvID0gdWUoZSk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobyksIHRlKG8sICh0KSA9PiB7XG4gICAgdC50YXJnZXQudGFnTmFtZSA9PT0gXCJwYXRoXCIgJiYgTChcIm92ZXJsYXlDbGlja1wiKTtcbiAgfSksIGIoXCJfX292ZXJsYXlTdmdcIiwgbyk7XG59XG5mdW5jdGlvbiBKKGUpIHtcbiAgY29uc3QgbyA9IGwoXCJfX292ZXJsYXlTdmdcIik7XG4gIGlmICghbykge1xuICAgIHBlKGUpO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB0ID0gby5maXJzdEVsZW1lbnRDaGlsZDtcbiAgaWYgKCh0ID09IG51bGwgPyB2b2lkIDAgOiB0LnRhZ05hbWUpICE9PSBcInBhdGhcIilcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJubyBwYXRoIGVsZW1lbnQgZm91bmQgaW4gc3RhZ2Ugc3ZnXCIpO1xuICB0LnNldEF0dHJpYnV0ZShcImRcIiwgVShlKSk7XG59XG5mdW5jdGlvbiB1ZShlKSB7XG4gIGNvbnN0IG8gPSB3aW5kb3cuaW5uZXJXaWR0aCwgdCA9IHdpbmRvdy5pbm5lckhlaWdodCwgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xuICBpLmNsYXNzTGlzdC5hZGQoXCJkcml2ZXItb3ZlcmxheVwiLCBcImRyaXZlci1vdmVybGF5LWFuaW1hdGVkXCIpLCBpLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgYDAgMCAke299ICR7dH1gKSwgaS5zZXRBdHRyaWJ1dGUoXCJ4bWxTcGFjZVwiLCBcInByZXNlcnZlXCIpLCBpLnNldEF0dHJpYnV0ZShcInhtbG5zWGxpbmtcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIpLCBpLnNldEF0dHJpYnV0ZShcInZlcnNpb25cIiwgXCIxLjFcIiksIGkuc2V0QXR0cmlidXRlKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaW5ZTWluIHNsaWNlXCIpLCBpLnN0eWxlLmZpbGxSdWxlID0gXCJldmVub2RkXCIsIGkuc3R5bGUuY2xpcFJ1bGUgPSBcImV2ZW5vZGRcIiwgaS5zdHlsZS5zdHJva2VMaW5lam9pbiA9IFwicm91bmRcIiwgaS5zdHlsZS5zdHJva2VNaXRlcmxpbWl0ID0gXCIyXCIsIGkuc3R5bGUuekluZGV4ID0gXCIxMDAwMFwiLCBpLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiLCBpLnN0eWxlLnRvcCA9IFwiMFwiLCBpLnN0eWxlLmxlZnQgPSBcIjBcIiwgaS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiLCBpLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJwYXRoXCIpO1xuICByZXR1cm4gcC5zZXRBdHRyaWJ1dGUoXCJkXCIsIFUoZSkpLCBwLnN0eWxlLmZpbGwgPSBhKFwib3ZlcmxheUNvbG9yXCIpIHx8IFwicmdiKDAsMCwwKVwiLCBwLnN0eWxlLm9wYWNpdHkgPSBgJHthKFwib3ZlcmxheU9wYWNpdHlcIil9YCwgcC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhdXRvXCIsIHAuc3R5bGUuY3Vyc29yID0gXCJhdXRvXCIsIGkuYXBwZW5kQ2hpbGQocCksIGk7XG59XG5mdW5jdGlvbiBVKGUpIHtcbiAgY29uc3QgbyA9IHdpbmRvdy5pbm5lcldpZHRoLCB0ID0gd2luZG93LmlubmVySGVpZ2h0LCBpID0gYShcInN0YWdlUGFkZGluZ1wiKSB8fCAwLCBwID0gYShcInN0YWdlUmFkaXVzXCIpIHx8IDAsIG4gPSBlLndpZHRoICsgaSAqIDIsIGYgPSBlLmhlaWdodCArIGkgKiAyLCB3ID0gTWF0aC5taW4ocCwgbiAvIDIsIGYgLyAyKSwgciA9IE1hdGguZmxvb3IoTWF0aC5tYXgodywgMCkpLCB2ID0gZS54IC0gaSArIHIsIHMgPSBlLnkgLSBpLCBjID0gbiAtIHIgKiAyLCBkID0gZiAtIHIgKiAyO1xuICByZXR1cm4gYE0ke299LDBMMCwwTDAsJHt0fUwke299LCR7dH1MJHtvfSwwWlxuICAgIE0ke3Z9LCR7c30gaCR7Y30gYSR7cn0sJHtyfSAwIDAgMSAke3J9LCR7cn0gdiR7ZH0gYSR7cn0sJHtyfSAwIDAgMSAtJHtyfSwke3J9IGgtJHtjfSBhJHtyfSwke3J9IDAgMCAxIC0ke3J9LC0ke3J9IHYtJHtkfSBhJHtyfSwke3J9IDAgMCAxICR7cn0sLSR7cn0gemA7XG59XG5mdW5jdGlvbiB2ZSgpIHtcbiAgY29uc3QgZSA9IGwoXCJfX292ZXJsYXlTdmdcIik7XG4gIGUgJiYgZS5yZW1vdmUoKTtcbn1cbmZ1bmN0aW9uIGZlKCkge1xuICBjb25zdCBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkcml2ZXItZHVtbXktZWxlbWVudFwiKTtcbiAgaWYgKGUpXG4gICAgcmV0dXJuIGU7XG4gIGxldCBvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmV0dXJuIG8uaWQgPSBcImRyaXZlci1kdW1teS1lbGVtZW50XCIsIG8uc3R5bGUud2lkdGggPSBcIjBcIiwgby5zdHlsZS5oZWlnaHQgPSBcIjBcIiwgby5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCIsIG8uc3R5bGUub3BhY2l0eSA9IFwiMFwiLCBvLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiLCBvLnN0eWxlLnRvcCA9IFwiNTAlXCIsIG8uc3R5bGUubGVmdCA9IFwiNTAlXCIsIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobyksIG87XG59XG5mdW5jdGlvbiBLKGUpIHtcbiAgY29uc3QgeyBlbGVtZW50OiBvIH0gPSBlO1xuICBsZXQgdCA9IHR5cGVvZiBvID09IFwic3RyaW5nXCIgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG8pIDogbztcbiAgdCB8fCAodCA9IGZlKCkpLCBnZSh0LCBlKTtcbn1cbmZ1bmN0aW9uIGhlKCkge1xuICBjb25zdCBlID0gbChcIl9fYWN0aXZlRWxlbWVudFwiKSwgbyA9IGwoXCJfX2FjdGl2ZVN0ZXBcIik7XG4gIGUgJiYgKEcoZSksIGRlKCksIGllKGUsIG8pKTtcbn1cbmZ1bmN0aW9uIGdlKGUsIG8pIHtcbiAgY29uc3QgaSA9IERhdGUubm93KCksIHAgPSBsKFwiX19hY3RpdmVTdGVwXCIpLCBuID0gbChcIl9fYWN0aXZlRWxlbWVudFwiKSB8fCBlLCBmID0gIW4gfHwgbiA9PT0gZSwgdyA9IGUuaWQgPT09IFwiZHJpdmVyLWR1bW15LWVsZW1lbnRcIiwgciA9IG4uaWQgPT09IFwiZHJpdmVyLWR1bW15LWVsZW1lbnRcIiwgdiA9IGEoXCJhbmltYXRlXCIpLCBzID0gby5vbkhpZ2hsaWdodFN0YXJ0ZWQgfHwgYShcIm9uSGlnaGxpZ2h0U3RhcnRlZFwiKSwgYyA9IChvID09IG51bGwgPyB2b2lkIDAgOiBvLm9uSGlnaGxpZ2h0ZWQpIHx8IGEoXCJvbkhpZ2hsaWdodGVkXCIpLCBkID0gKHAgPT0gbnVsbCA/IHZvaWQgMCA6IHAub25EZXNlbGVjdGVkKSB8fCBhKFwib25EZXNlbGVjdGVkXCIpLCBtID0gYSgpLCBnID0gbCgpO1xuICAhZiAmJiBkICYmIGQociA/IHZvaWQgMCA6IG4sIHAsIHtcbiAgICBjb25maWc6IG0sXG4gICAgc3RhdGU6IGdcbiAgfSksIHMgJiYgcyh3ID8gdm9pZCAwIDogZSwgbywge1xuICAgIGNvbmZpZzogbSxcbiAgICBzdGF0ZTogZ1xuICB9KTtcbiAgY29uc3QgdSA9ICFmICYmIHY7XG4gIGxldCBoID0gITE7XG4gIHhlKCksIGIoXCJwcmV2aW91c1N0ZXBcIiwgcCksIGIoXCJwcmV2aW91c0VsZW1lbnRcIiwgbiksIGIoXCJhY3RpdmVTdGVwXCIsIG8pLCBiKFwiYWN0aXZlRWxlbWVudFwiLCBlKTtcbiAgY29uc3QgUCA9ICgpID0+IHtcbiAgICBpZiAobChcIl9fdHJhbnNpdGlvbkNhbGxiYWNrXCIpICE9PSBQKVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IHggPSBEYXRlLm5vdygpIC0gaSwgeSA9IDQwMCAtIHggPD0gNDAwIC8gMjtcbiAgICBvLnBvcG92ZXIgJiYgeSAmJiAhaCAmJiB1ICYmIChYKGUsIG8pLCBoID0gITApLCBhKFwiYW5pbWF0ZVwiKSAmJiB4IDwgNDAwID8gbGUoeCwgNDAwLCBuLCBlKSA6IChHKGUpLCBjICYmIGModyA/IHZvaWQgMCA6IGUsIG8sIHtcbiAgICAgIGNvbmZpZzogYSgpLFxuICAgICAgc3RhdGU6IGwoKVxuICAgIH0pLCBiKFwiX190cmFuc2l0aW9uQ2FsbGJhY2tcIiwgdm9pZCAwKSwgYihcIl9fcHJldmlvdXNTdGVwXCIsIHApLCBiKFwiX19wcmV2aW91c0VsZW1lbnRcIiwgbiksIGIoXCJfX2FjdGl2ZVN0ZXBcIiwgbyksIGIoXCJfX2FjdGl2ZUVsZW1lbnRcIiwgZSkpLCB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKFApO1xuICB9O1xuICBiKFwiX190cmFuc2l0aW9uQ2FsbGJhY2tcIiwgUCksIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoUCksIFooZSksICF1ICYmIG8ucG9wb3ZlciAmJiBYKGUsIG8pLCBuLmNsYXNzTGlzdC5yZW1vdmUoXCJkcml2ZXItYWN0aXZlLWVsZW1lbnRcIiwgXCJkcml2ZXItbm8taW50ZXJhY3Rpb25cIiksIG4ucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1oYXNwb3B1cFwiKSwgbi5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpLCBuLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIiksIGEoXCJkaXNhYmxlQWN0aXZlSW50ZXJhY3Rpb25cIikgJiYgZS5jbGFzc0xpc3QuYWRkKFwiZHJpdmVyLW5vLWludGVyYWN0aW9uXCIpLCBlLmNsYXNzTGlzdC5hZGQoXCJkcml2ZXItYWN0aXZlLWVsZW1lbnRcIiksIGUuc2V0QXR0cmlidXRlKFwiYXJpYS1oYXNwb3B1cFwiLCBcImRpYWxvZ1wiKSwgZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKSwgZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWNvbnRyb2xzXCIsIFwiZHJpdmVyLXBvcG92ZXItY29udGVudFwiKTtcbn1cbmZ1bmN0aW9uIHdlKCkge1xuICB2YXIgZTtcbiAgKGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRyaXZlci1kdW1teS1lbGVtZW50XCIpKSA9PSBudWxsIHx8IGUucmVtb3ZlKCksIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHJpdmVyLWFjdGl2ZS1lbGVtZW50XCIpLmZvckVhY2goKG8pID0+IHtcbiAgICBvLmNsYXNzTGlzdC5yZW1vdmUoXCJkcml2ZXItYWN0aXZlLWVsZW1lbnRcIiwgXCJkcml2ZXItbm8taW50ZXJhY3Rpb25cIiksIG8ucmVtb3ZlQXR0cmlidXRlKFwiYXJpYS1oYXNwb3B1cFwiKSwgby5yZW1vdmVBdHRyaWJ1dGUoXCJhcmlhLWV4cGFuZGVkXCIpLCBvLnJlbW92ZUF0dHJpYnV0ZShcImFyaWEtY29udHJvbHNcIik7XG4gIH0pO1xufVxuZnVuY3Rpb24gSSgpIHtcbiAgY29uc3QgZSA9IGwoXCJfX3Jlc2l6ZVRpbWVvdXRcIik7XG4gIGUgJiYgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGUpLCBiKFwiX19yZXNpemVUaW1lb3V0XCIsIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaGUpKTtcbn1cbmZ1bmN0aW9uIG1lKGUpIHtcbiAgdmFyIHI7XG4gIGlmICghbChcImlzSW5pdGlhbGl6ZWRcIikgfHwgIShlLmtleSA9PT0gXCJUYWJcIiB8fCBlLmtleUNvZGUgPT09IDkpKVxuICAgIHJldHVybjtcbiAgY29uc3QgaSA9IGwoXCJfX2FjdGl2ZUVsZW1lbnRcIiksIHAgPSAociA9IGwoXCJwb3BvdmVyXCIpKSA9PSBudWxsID8gdm9pZCAwIDogci53cmFwcGVyLCBuID0gUShbXG4gICAgLi4ucCA/IFtwXSA6IFtdLFxuICAgIC4uLmkgPyBbaV0gOiBbXVxuICBdKSwgZiA9IG5bMF0sIHcgPSBuW24ubGVuZ3RoIC0gMV07XG4gIGlmIChlLnByZXZlbnREZWZhdWx0KCksIGUuc2hpZnRLZXkpIHtcbiAgICBjb25zdCB2ID0gbltuLmluZGV4T2YoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgLSAxXSB8fCB3O1xuICAgIHYgPT0gbnVsbCB8fCB2LmZvY3VzKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdiA9IG5bbi5pbmRleE9mKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpICsgMV0gfHwgZjtcbiAgICB2ID09IG51bGwgfHwgdi5mb2N1cygpO1xuICB9XG59XG5mdW5jdGlvbiBlZShlKSB7XG4gIHZhciB0O1xuICAoKHQgPSBhKFwiYWxsb3dLZXlib2FyZENvbnRyb2xcIikpID09IG51bGwgfHwgdCkgJiYgKGUua2V5ID09PSBcIkVzY2FwZVwiID8gTChcImVzY2FwZVByZXNzXCIpIDogZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiID8gTChcImFycm93UmlnaHRQcmVzc1wiKSA6IGUua2V5ID09PSBcIkFycm93TGVmdFwiICYmIEwoXCJhcnJvd0xlZnRQcmVzc1wiKSk7XG59XG5mdW5jdGlvbiB0ZShlLCBvLCB0KSB7XG4gIGNvbnN0IGkgPSAobiwgZikgPT4ge1xuICAgIGNvbnN0IHcgPSBuLnRhcmdldDtcbiAgICBlLmNvbnRhaW5zKHcpICYmICgoIXQgfHwgdCh3KSkgJiYgKG4ucHJldmVudERlZmF1bHQoKSwgbi5zdG9wUHJvcGFnYXRpb24oKSwgbi5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSksIGYgPT0gbnVsbCB8fCBmKG4pKTtcbiAgfTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGksICEwKSwgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBpLCAhMCksIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVydXBcIiwgaSwgITApLCBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBpLCAhMCksIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJjbGlja1wiLFxuICAgIChuKSA9PiB7XG4gICAgICBpKG4sIG8pO1xuICAgIH0sXG4gICAgITBcbiAgKTtcbn1cbmZ1bmN0aW9uIHllKCkge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGVlLCAhMSksIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBtZSwgITEpLCB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBJKSwgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgSSk7XG59XG5mdW5jdGlvbiBiZSgpIHtcbiAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBlZSksIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIEkpLCB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBJKTtcbn1cbmZ1bmN0aW9uIHhlKCkge1xuICBjb25zdCBlID0gbChcInBvcG92ZXJcIik7XG4gIGUgJiYgKGUud3JhcHBlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpO1xufVxuZnVuY3Rpb24gWChlLCBvKSB7XG4gIHZhciBDLCB5O1xuICBsZXQgdCA9IGwoXCJwb3BvdmVyXCIpO1xuICB0ICYmIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodC53cmFwcGVyKSwgdCA9IFBlKCksIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodC53cmFwcGVyKTtcbiAgY29uc3Qge1xuICAgIHRpdGxlOiBpLFxuICAgIGRlc2NyaXB0aW9uOiBwLFxuICAgIHNob3dCdXR0b25zOiBuLFxuICAgIGRpc2FibGVCdXR0b25zOiBmLFxuICAgIHNob3dQcm9ncmVzczogdyxcbiAgICBuZXh0QnRuVGV4dDogciA9IGEoXCJuZXh0QnRuVGV4dFwiKSB8fCBcIk5leHQgJnJhcnI7XCIsXG4gICAgcHJldkJ0blRleHQ6IHYgPSBhKFwicHJldkJ0blRleHRcIikgfHwgXCImbGFycjsgUHJldmlvdXNcIixcbiAgICBwcm9ncmVzc1RleHQ6IHMgPSBhKFwicHJvZ3Jlc3NUZXh0XCIpIHx8IFwie2N1cnJlbnR9IG9mIHt0b3RhbH1cIlxuICB9ID0gby5wb3BvdmVyIHx8IHt9O1xuICB0Lm5leHRCdXR0b24uaW5uZXJIVE1MID0gciwgdC5wcmV2aW91c0J1dHRvbi5pbm5lckhUTUwgPSB2LCB0LnByb2dyZXNzLmlubmVySFRNTCA9IHMsIGkgPyAodC50aXRsZS5pbm5lckhUTUwgPSBpLCB0LnRpdGxlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIpIDogdC50aXRsZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIsIHAgPyAodC5kZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBwLCB0LmRlc2NyaXB0aW9uLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIpIDogdC5kZXNjcmlwdGlvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGNvbnN0IGMgPSBuIHx8IGEoXCJzaG93QnV0dG9uc1wiKSwgZCA9IHcgfHwgYShcInNob3dQcm9ncmVzc1wiKSB8fCAhMSwgbSA9IChjID09IG51bGwgPyB2b2lkIDAgOiBjLmluY2x1ZGVzKFwibmV4dFwiKSkgfHwgKGMgPT0gbnVsbCA/IHZvaWQgMCA6IGMuaW5jbHVkZXMoXCJwcmV2aW91c1wiKSkgfHwgZDtcbiAgdC5jbG9zZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gYy5pbmNsdWRlcyhcImNsb3NlXCIpID8gXCJibG9ja1wiIDogXCJub25lXCIsIG0gPyAodC5mb290ZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiLCB0LnByb2dyZXNzLnN0eWxlLmRpc3BsYXkgPSBkID8gXCJibG9ja1wiIDogXCJub25lXCIsIHQubmV4dEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gYy5pbmNsdWRlcyhcIm5leHRcIikgPyBcImJsb2NrXCIgOiBcIm5vbmVcIiwgdC5wcmV2aW91c0J1dHRvbi5zdHlsZS5kaXNwbGF5ID0gYy5pbmNsdWRlcyhcInByZXZpb3VzXCIpID8gXCJibG9ja1wiIDogXCJub25lXCIpIDogdC5mb290ZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjb25zdCBnID0gZiB8fCBhKFwiZGlzYWJsZUJ1dHRvbnNcIikgfHwgW107XG4gIGcgIT0gbnVsbCAmJiBnLmluY2x1ZGVzKFwibmV4dFwiKSAmJiAodC5uZXh0QnV0dG9uLmRpc2FibGVkID0gITAsIHQubmV4dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZHJpdmVyLXBvcG92ZXItYnRuLWRpc2FibGVkXCIpKSwgZyAhPSBudWxsICYmIGcuaW5jbHVkZXMoXCJwcmV2aW91c1wiKSAmJiAodC5wcmV2aW91c0J1dHRvbi5kaXNhYmxlZCA9ICEwLCB0LnByZXZpb3VzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkcml2ZXItcG9wb3Zlci1idG4tZGlzYWJsZWRcIikpLCBnICE9IG51bGwgJiYgZy5pbmNsdWRlcyhcImNsb3NlXCIpICYmICh0LmNsb3NlQnV0dG9uLmRpc2FibGVkID0gITAsIHQuY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZChcImRyaXZlci1wb3BvdmVyLWJ0bi1kaXNhYmxlZFwiKSk7XG4gIGNvbnN0IHUgPSB0LndyYXBwZXI7XG4gIHUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIiwgdS5zdHlsZS5sZWZ0ID0gXCJcIiwgdS5zdHlsZS50b3AgPSBcIlwiLCB1LnN0eWxlLmJvdHRvbSA9IFwiXCIsIHUuc3R5bGUucmlnaHQgPSBcIlwiLCB1LmlkID0gXCJkcml2ZXItcG9wb3Zlci1jb250ZW50XCIsIHUuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImRpYWxvZ1wiKSwgdS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsbGVkYnlcIiwgXCJkcml2ZXItcG9wb3Zlci10aXRsZVwiKSwgdS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWRlc2NyaWJlZGJ5XCIsIFwiZHJpdmVyLXBvcG92ZXItZGVzY3JpcHRpb25cIik7XG4gIGNvbnN0IGggPSB0LmFycm93O1xuICBoLmNsYXNzTmFtZSA9IFwiZHJpdmVyLXBvcG92ZXItYXJyb3dcIjtcbiAgY29uc3QgUCA9ICgoQyA9IG8ucG9wb3ZlcikgPT0gbnVsbCA/IHZvaWQgMCA6IEMucG9wb3ZlckNsYXNzKSB8fCBhKFwicG9wb3ZlckNsYXNzXCIpIHx8IFwiXCI7XG4gIHUuY2xhc3NOYW1lID0gYGRyaXZlci1wb3BvdmVyICR7UH1gLnRyaW0oKSwgdGUoXG4gICAgdC53cmFwcGVyLFxuICAgIChrKSA9PiB7XG4gICAgICB2YXIgJCwgQiwgTTtcbiAgICAgIGNvbnN0IFQgPSBrLnRhcmdldCwgRSA9ICgoJCA9IG8ucG9wb3ZlcikgPT0gbnVsbCA/IHZvaWQgMCA6ICQub25OZXh0Q2xpY2spIHx8IGEoXCJvbk5leHRDbGlja1wiKSwgQSA9ICgoQiA9IG8ucG9wb3ZlcikgPT0gbnVsbCA/IHZvaWQgMCA6IEIub25QcmV2Q2xpY2spIHx8IGEoXCJvblByZXZDbGlja1wiKSwgSCA9ICgoTSA9IG8ucG9wb3ZlcikgPT0gbnVsbCA/IHZvaWQgMCA6IE0ub25DbG9zZUNsaWNrKSB8fCBhKFwib25DbG9zZUNsaWNrXCIpO1xuICAgICAgaWYgKFQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZHJpdmVyLXBvcG92ZXItbmV4dC1idG5cIikpXG4gICAgICAgIHJldHVybiBFID8gRShlLCBvLCB7XG4gICAgICAgICAgY29uZmlnOiBhKCksXG4gICAgICAgICAgc3RhdGU6IGwoKVxuICAgICAgICB9KSA6IEwoXCJuZXh0Q2xpY2tcIik7XG4gICAgICBpZiAoVC5jbGFzc0xpc3QuY29udGFpbnMoXCJkcml2ZXItcG9wb3Zlci1wcmV2LWJ0blwiKSlcbiAgICAgICAgcmV0dXJuIEEgPyBBKGUsIG8sIHtcbiAgICAgICAgICBjb25maWc6IGEoKSxcbiAgICAgICAgICBzdGF0ZTogbCgpXG4gICAgICAgIH0pIDogTChcInByZXZDbGlja1wiKTtcbiAgICAgIGlmIChULmNsYXNzTGlzdC5jb250YWlucyhcImRyaXZlci1wb3BvdmVyLWNsb3NlLWJ0blwiKSlcbiAgICAgICAgcmV0dXJuIEggPyBIKGUsIG8sIHtcbiAgICAgICAgICBjb25maWc6IGEoKSxcbiAgICAgICAgICBzdGF0ZTogbCgpXG4gICAgICAgIH0pIDogTChcImNsb3NlQ2xpY2tcIik7XG4gICAgfSxcbiAgICAoaykgPT4gISh0ICE9IG51bGwgJiYgdC5kZXNjcmlwdGlvbi5jb250YWlucyhrKSkgJiYgISh0ICE9IG51bGwgJiYgdC50aXRsZS5jb250YWlucyhrKSkgJiYgdHlwZW9mIGsuY2xhc3NOYW1lID09IFwic3RyaW5nXCIgJiYgay5jbGFzc05hbWUuaW5jbHVkZXMoXCJkcml2ZXItcG9wb3ZlclwiKVxuICApLCBiKFwicG9wb3ZlclwiLCB0KTtcbiAgY29uc3QgUyA9ICgoeSA9IG8ucG9wb3ZlcikgPT0gbnVsbCA/IHZvaWQgMCA6IHkub25Qb3BvdmVyUmVuZGVyKSB8fCBhKFwib25Qb3BvdmVyUmVuZGVyXCIpO1xuICBTICYmIFModCwge1xuICAgIGNvbmZpZzogYSgpLFxuICAgIHN0YXRlOiBsKClcbiAgfSksIGllKGUsIG8pLCBaKHUpO1xuICBjb25zdCBfID0gZS5jbGFzc0xpc3QuY29udGFpbnMoXCJkcml2ZXItZHVtbXktZWxlbWVudFwiKSwgeCA9IFEoW3UsIC4uLl8gPyBbXSA6IFtlXV0pO1xuICB4Lmxlbmd0aCA+IDAgJiYgeFswXS5mb2N1cygpO1xufVxuZnVuY3Rpb24gb2UoKSB7XG4gIGNvbnN0IGUgPSBsKFwicG9wb3ZlclwiKTtcbiAgaWYgKCEoZSAhPSBudWxsICYmIGUud3JhcHBlcikpXG4gICAgcmV0dXJuO1xuICBjb25zdCBvID0gZS53cmFwcGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCB0ID0gYShcInN0YWdlUGFkZGluZ1wiKSB8fCAwLCBpID0gYShcInBvcG92ZXJPZmZzZXRcIikgfHwgMDtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogby53aWR0aCArIHQgKyBpLFxuICAgIGhlaWdodDogby5oZWlnaHQgKyB0ICsgaSxcbiAgICByZWFsV2lkdGg6IG8ud2lkdGgsXG4gICAgcmVhbEhlaWdodDogby5oZWlnaHRcbiAgfTtcbn1cbmZ1bmN0aW9uIFkoZSwgbykge1xuICBjb25zdCB7IGVsZW1lbnREaW1lbnNpb25zOiB0LCBwb3BvdmVyRGltZW5zaW9uczogaSwgcG9wb3ZlclBhZGRpbmc6IHAsIHBvcG92ZXJBcnJvd0RpbWVuc2lvbnM6IG4gfSA9IG87XG4gIHJldHVybiBlID09PSBcInN0YXJ0XCIgPyBNYXRoLm1heChcbiAgICBNYXRoLm1pbihcbiAgICAgIHQudG9wIC0gcCxcbiAgICAgIHdpbmRvdy5pbm5lckhlaWdodCAtIGkucmVhbEhlaWdodCAtIG4ud2lkdGhcbiAgICApLFxuICAgIG4ud2lkdGhcbiAgKSA6IGUgPT09IFwiZW5kXCIgPyBNYXRoLm1heChcbiAgICBNYXRoLm1pbihcbiAgICAgIHQudG9wIC0gKGkgPT0gbnVsbCA/IHZvaWQgMCA6IGkucmVhbEhlaWdodCkgKyB0LmhlaWdodCArIHAsXG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoaSA9PSBudWxsID8gdm9pZCAwIDogaS5yZWFsSGVpZ2h0KSAtIG4ud2lkdGhcbiAgICApLFxuICAgIG4ud2lkdGhcbiAgKSA6IGUgPT09IFwiY2VudGVyXCIgPyBNYXRoLm1heChcbiAgICBNYXRoLm1pbihcbiAgICAgIHQudG9wICsgdC5oZWlnaHQgLyAyIC0gKGkgPT0gbnVsbCA/IHZvaWQgMCA6IGkucmVhbEhlaWdodCkgLyAyLFxuICAgICAgd2luZG93LmlubmVySGVpZ2h0IC0gKGkgPT0gbnVsbCA/IHZvaWQgMCA6IGkucmVhbEhlaWdodCkgLSBuLndpZHRoXG4gICAgKSxcbiAgICBuLndpZHRoXG4gICkgOiAwO1xufVxuZnVuY3Rpb24gaihlLCBvKSB7XG4gIGNvbnN0IHsgZWxlbWVudERpbWVuc2lvbnM6IHQsIHBvcG92ZXJEaW1lbnNpb25zOiBpLCBwb3BvdmVyUGFkZGluZzogcCwgcG9wb3ZlckFycm93RGltZW5zaW9uczogbiB9ID0gbztcbiAgcmV0dXJuIGUgPT09IFwic3RhcnRcIiA/IE1hdGgubWF4KFxuICAgIE1hdGgubWluKFxuICAgICAgdC5sZWZ0IC0gcCxcbiAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC0gaS5yZWFsV2lkdGggLSBuLndpZHRoXG4gICAgKSxcbiAgICBuLndpZHRoXG4gICkgOiBlID09PSBcImVuZFwiID8gTWF0aC5tYXgoXG4gICAgTWF0aC5taW4oXG4gICAgICB0LmxlZnQgLSAoaSA9PSBudWxsID8gdm9pZCAwIDogaS5yZWFsV2lkdGgpICsgdC53aWR0aCArIHAsXG4gICAgICB3aW5kb3cuaW5uZXJXaWR0aCAtIChpID09IG51bGwgPyB2b2lkIDAgOiBpLnJlYWxXaWR0aCkgLSBuLndpZHRoXG4gICAgKSxcbiAgICBuLndpZHRoXG4gICkgOiBlID09PSBcImNlbnRlclwiID8gTWF0aC5tYXgoXG4gICAgTWF0aC5taW4oXG4gICAgICB0LmxlZnQgKyB0LndpZHRoIC8gMiAtIChpID09IG51bGwgPyB2b2lkIDAgOiBpLnJlYWxXaWR0aCkgLyAyLFxuICAgICAgd2luZG93LmlubmVyV2lkdGggLSAoaSA9PSBudWxsID8gdm9pZCAwIDogaS5yZWFsV2lkdGgpIC0gbi53aWR0aFxuICAgICksXG4gICAgbi53aWR0aFxuICApIDogMDtcbn1cbmZ1bmN0aW9uIGllKGUsIG8pIHtcbiAgY29uc3QgdCA9IGwoXCJwb3BvdmVyXCIpO1xuICBpZiAoIXQpXG4gICAgcmV0dXJuO1xuICBjb25zdCB7IGFsaWduOiBpID0gXCJzdGFydFwiLCBzaWRlOiBwID0gXCJsZWZ0XCIgfSA9IChvID09IG51bGwgPyB2b2lkIDAgOiBvLnBvcG92ZXIpIHx8IHt9LCBuID0gaSwgZiA9IGUuaWQgPT09IFwiZHJpdmVyLWR1bW15LWVsZW1lbnRcIiA/IFwib3ZlclwiIDogcCwgdyA9IGEoXCJzdGFnZVBhZGRpbmdcIikgfHwgMCwgciA9IG9lKCksIHYgPSB0LmFycm93LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBzID0gZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgYyA9IHMudG9wIC0gci5oZWlnaHQ7XG4gIGxldCBkID0gYyA+PSAwO1xuICBjb25zdCBtID0gd2luZG93LmlubmVySGVpZ2h0IC0gKHMuYm90dG9tICsgci5oZWlnaHQpO1xuICBsZXQgZyA9IG0gPj0gMDtcbiAgY29uc3QgdSA9IHMubGVmdCAtIHIud2lkdGg7XG4gIGxldCBoID0gdSA+PSAwO1xuICBjb25zdCBQID0gd2luZG93LmlubmVyV2lkdGggLSAocy5yaWdodCArIHIud2lkdGgpO1xuICBsZXQgUyA9IFAgPj0gMDtcbiAgY29uc3QgXyA9ICFkICYmICFnICYmICFoICYmICFTO1xuICBsZXQgeCA9IGY7XG4gIGlmIChmID09PSBcInRvcFwiICYmIGQgPyBTID0gaCA9IGcgPSAhMSA6IGYgPT09IFwiYm90dG9tXCIgJiYgZyA/IFMgPSBoID0gZCA9ICExIDogZiA9PT0gXCJsZWZ0XCIgJiYgaCA/IFMgPSBkID0gZyA9ICExIDogZiA9PT0gXCJyaWdodFwiICYmIFMgJiYgKGggPSBkID0gZyA9ICExKSwgZiA9PT0gXCJvdmVyXCIpIHtcbiAgICBjb25zdCBDID0gd2luZG93LmlubmVyV2lkdGggLyAyIC0gci5yZWFsV2lkdGggLyAyLCB5ID0gd2luZG93LmlubmVySGVpZ2h0IC8gMiAtIHIucmVhbEhlaWdodCAvIDI7XG4gICAgdC53cmFwcGVyLnN0eWxlLmxlZnQgPSBgJHtDfXB4YCwgdC53cmFwcGVyLnN0eWxlLnJpZ2h0ID0gXCJhdXRvXCIsIHQud3JhcHBlci5zdHlsZS50b3AgPSBgJHt5fXB4YCwgdC53cmFwcGVyLnN0eWxlLmJvdHRvbSA9IFwiYXV0b1wiO1xuICB9IGVsc2UgaWYgKF8pIHtcbiAgICBjb25zdCBDID0gd2luZG93LmlubmVyV2lkdGggLyAyIC0gKHIgPT0gbnVsbCA/IHZvaWQgMCA6IHIucmVhbFdpZHRoKSAvIDIsIHkgPSAxMDtcbiAgICB0LndyYXBwZXIuc3R5bGUubGVmdCA9IGAke0N9cHhgLCB0LndyYXBwZXIuc3R5bGUucmlnaHQgPSBcImF1dG9cIiwgdC53cmFwcGVyLnN0eWxlLmJvdHRvbSA9IGAke3l9cHhgLCB0LndyYXBwZXIuc3R5bGUudG9wID0gXCJhdXRvXCI7XG4gIH0gZWxzZSBpZiAoaCkge1xuICAgIGNvbnN0IEMgPSBNYXRoLm1pbihcbiAgICAgIHUsXG4gICAgICB3aW5kb3cuaW5uZXJXaWR0aCAtIChyID09IG51bGwgPyB2b2lkIDAgOiByLnJlYWxXaWR0aCkgLSB2LndpZHRoXG4gICAgKSwgeSA9IFkobiwge1xuICAgICAgZWxlbWVudERpbWVuc2lvbnM6IHMsXG4gICAgICBwb3BvdmVyRGltZW5zaW9uczogcixcbiAgICAgIHBvcG92ZXJQYWRkaW5nOiB3LFxuICAgICAgcG9wb3ZlckFycm93RGltZW5zaW9uczogdlxuICAgIH0pO1xuICAgIHQud3JhcHBlci5zdHlsZS5sZWZ0ID0gYCR7Q31weGAsIHQud3JhcHBlci5zdHlsZS50b3AgPSBgJHt5fXB4YCwgdC53cmFwcGVyLnN0eWxlLmJvdHRvbSA9IFwiYXV0b1wiLCB0LndyYXBwZXIuc3R5bGUucmlnaHQgPSBcImF1dG9cIiwgeCA9IFwibGVmdFwiO1xuICB9IGVsc2UgaWYgKFMpIHtcbiAgICBjb25zdCBDID0gTWF0aC5taW4oXG4gICAgICBQLFxuICAgICAgd2luZG93LmlubmVyV2lkdGggLSAociA9PSBudWxsID8gdm9pZCAwIDogci5yZWFsV2lkdGgpIC0gdi53aWR0aFxuICAgICksIHkgPSBZKG4sIHtcbiAgICAgIGVsZW1lbnREaW1lbnNpb25zOiBzLFxuICAgICAgcG9wb3ZlckRpbWVuc2lvbnM6IHIsXG4gICAgICBwb3BvdmVyUGFkZGluZzogdyxcbiAgICAgIHBvcG92ZXJBcnJvd0RpbWVuc2lvbnM6IHZcbiAgICB9KTtcbiAgICB0LndyYXBwZXIuc3R5bGUucmlnaHQgPSBgJHtDfXB4YCwgdC53cmFwcGVyLnN0eWxlLnRvcCA9IGAke3l9cHhgLCB0LndyYXBwZXIuc3R5bGUuYm90dG9tID0gXCJhdXRvXCIsIHQud3JhcHBlci5zdHlsZS5sZWZ0ID0gXCJhdXRvXCIsIHggPSBcInJpZ2h0XCI7XG4gIH0gZWxzZSBpZiAoZCkge1xuICAgIGNvbnN0IEMgPSBNYXRoLm1pbihcbiAgICAgIGMsXG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgLSByLnJlYWxIZWlnaHQgLSB2LndpZHRoXG4gICAgKTtcbiAgICBsZXQgeSA9IGoobiwge1xuICAgICAgZWxlbWVudERpbWVuc2lvbnM6IHMsXG4gICAgICBwb3BvdmVyRGltZW5zaW9uczogcixcbiAgICAgIHBvcG92ZXJQYWRkaW5nOiB3LFxuICAgICAgcG9wb3ZlckFycm93RGltZW5zaW9uczogdlxuICAgIH0pO1xuICAgIHQud3JhcHBlci5zdHlsZS50b3AgPSBgJHtDfXB4YCwgdC53cmFwcGVyLnN0eWxlLmxlZnQgPSBgJHt5fXB4YCwgdC53cmFwcGVyLnN0eWxlLmJvdHRvbSA9IFwiYXV0b1wiLCB0LndyYXBwZXIuc3R5bGUucmlnaHQgPSBcImF1dG9cIiwgeCA9IFwidG9wXCI7XG4gIH0gZWxzZSBpZiAoZykge1xuICAgIGNvbnN0IEMgPSBNYXRoLm1pbihcbiAgICAgIG0sXG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgLSAociA9PSBudWxsID8gdm9pZCAwIDogci5yZWFsSGVpZ2h0KSAtIHYud2lkdGhcbiAgICApO1xuICAgIGxldCB5ID0gaihuLCB7XG4gICAgICBlbGVtZW50RGltZW5zaW9uczogcyxcbiAgICAgIHBvcG92ZXJEaW1lbnNpb25zOiByLFxuICAgICAgcG9wb3ZlclBhZGRpbmc6IHcsXG4gICAgICBwb3BvdmVyQXJyb3dEaW1lbnNpb25zOiB2XG4gICAgfSk7XG4gICAgdC53cmFwcGVyLnN0eWxlLmxlZnQgPSBgJHt5fXB4YCwgdC53cmFwcGVyLnN0eWxlLmJvdHRvbSA9IGAke0N9cHhgLCB0LndyYXBwZXIuc3R5bGUudG9wID0gXCJhdXRvXCIsIHQud3JhcHBlci5zdHlsZS5yaWdodCA9IFwiYXV0b1wiLCB4ID0gXCJib3R0b21cIjtcbiAgfVxuICBfID8gdC5hcnJvdy5jbGFzc0xpc3QuYWRkKFwiZHJpdmVyLXBvcG92ZXItYXJyb3ctbm9uZVwiKSA6IENlKG4sIHgsIGUpO1xufVxuZnVuY3Rpb24gQ2UoZSwgbywgdCkge1xuICBjb25zdCBpID0gbChcInBvcG92ZXJcIik7XG4gIGlmICghaSlcbiAgICByZXR1cm47XG4gIGNvbnN0IHAgPSB0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLCBuID0gb2UoKSwgZiA9IGkuYXJyb3csIHcgPSBuLndpZHRoLCByID0gd2luZG93LmlubmVyV2lkdGgsIHYgPSBwLndpZHRoLCBzID0gcC5sZWZ0LCBjID0gbi5oZWlnaHQsIGQgPSB3aW5kb3cuaW5uZXJIZWlnaHQsIG0gPSBwLnRvcCwgZyA9IHAuaGVpZ2h0O1xuICBmLmNsYXNzTmFtZSA9IFwiZHJpdmVyLXBvcG92ZXItYXJyb3dcIjtcbiAgbGV0IHUgPSBvLCBoID0gZTtcbiAgbyA9PT0gXCJ0b3BcIiA/IChzICsgdiA8PSAwID8gKHUgPSBcInJpZ2h0XCIsIGggPSBcImVuZFwiKSA6IHMgKyB2IC0gdyA8PSAwICYmICh1ID0gXCJ0b3BcIiwgaCA9IFwic3RhcnRcIiksIHMgPj0gciA/ICh1ID0gXCJsZWZ0XCIsIGggPSBcImVuZFwiKSA6IHMgKyB3ID49IHIgJiYgKHUgPSBcInRvcFwiLCBoID0gXCJlbmRcIikpIDogbyA9PT0gXCJib3R0b21cIiA/IChzICsgdiA8PSAwID8gKHUgPSBcInJpZ2h0XCIsIGggPSBcInN0YXJ0XCIpIDogcyArIHYgLSB3IDw9IDAgJiYgKHUgPSBcImJvdHRvbVwiLCBoID0gXCJzdGFydFwiKSwgcyA+PSByID8gKHUgPSBcImxlZnRcIiwgaCA9IFwic3RhcnRcIikgOiBzICsgdyA+PSByICYmICh1ID0gXCJib3R0b21cIiwgaCA9IFwiZW5kXCIpKSA6IG8gPT09IFwibGVmdFwiID8gKG0gKyBnIDw9IDAgPyAodSA9IFwiYm90dG9tXCIsIGggPSBcImVuZFwiKSA6IG0gKyBnIC0gYyA8PSAwICYmICh1ID0gXCJsZWZ0XCIsIGggPSBcInN0YXJ0XCIpLCBtID49IGQgPyAodSA9IFwidG9wXCIsIGggPSBcImVuZFwiKSA6IG0gKyBjID49IGQgJiYgKHUgPSBcImxlZnRcIiwgaCA9IFwiZW5kXCIpKSA6IG8gPT09IFwicmlnaHRcIiAmJiAobSArIGcgPD0gMCA/ICh1ID0gXCJib3R0b21cIiwgaCA9IFwic3RhcnRcIikgOiBtICsgZyAtIGMgPD0gMCAmJiAodSA9IFwicmlnaHRcIiwgaCA9IFwic3RhcnRcIiksIG0gPj0gZCA/ICh1ID0gXCJ0b3BcIiwgaCA9IFwic3RhcnRcIikgOiBtICsgYyA+PSBkICYmICh1ID0gXCJyaWdodFwiLCBoID0gXCJlbmRcIikpLCB1ID8gKGYuY2xhc3NMaXN0LmFkZChgZHJpdmVyLXBvcG92ZXItYXJyb3ctc2lkZS0ke3V9YCksIGYuY2xhc3NMaXN0LmFkZChgZHJpdmVyLXBvcG92ZXItYXJyb3ctYWxpZ24tJHtofWApKSA6IGYuY2xhc3NMaXN0LmFkZChcImRyaXZlci1wb3BvdmVyLWFycm93LW5vbmVcIik7XG59XG5mdW5jdGlvbiBQZSgpIHtcbiAgY29uc3QgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGUuY2xhc3NMaXN0LmFkZChcImRyaXZlci1wb3BvdmVyXCIpO1xuICBjb25zdCBvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgby5jbGFzc0xpc3QuYWRkKFwiZHJpdmVyLXBvcG92ZXItYXJyb3dcIik7XG4gIGNvbnN0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICB0LmlkID0gXCJkcml2ZXItcG9wb3Zlci10aXRsZVwiLCB0LmNsYXNzTGlzdC5hZGQoXCJkcml2ZXItcG9wb3Zlci10aXRsZVwiKSwgdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIsIHQuaW5uZXJUZXh0ID0gXCJQb3BvdmVyIFRpdGxlXCI7XG4gIGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpLmlkID0gXCJkcml2ZXItcG9wb3Zlci1kZXNjcmlwdGlvblwiLCBpLmNsYXNzTGlzdC5hZGQoXCJkcml2ZXItcG9wb3Zlci1kZXNjcmlwdGlvblwiKSwgaS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIsIGkuaW5uZXJUZXh0ID0gXCJQb3BvdmVyIGRlc2NyaXB0aW9uIGlzIGhlcmVcIjtcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHAudHlwZSA9IFwiYnV0dG9uXCIsIHAuY2xhc3NMaXN0LmFkZChcImRyaXZlci1wb3BvdmVyLWNsb3NlLWJ0blwiKSwgcC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIFwiQ2xvc2VcIiksIHAuaW5uZXJIVE1MID0gXCImdGltZXM7XCI7XG4gIGNvbnN0IG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICBuLmNsYXNzTGlzdC5hZGQoXCJkcml2ZXItcG9wb3Zlci1mb290ZXJcIik7XG4gIGNvbnN0IGYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZi5jbGFzc0xpc3QuYWRkKFwiZHJpdmVyLXBvcG92ZXItcHJvZ3Jlc3MtdGV4dFwiKSwgZi5pbm5lclRleHQgPSBcIlwiO1xuICBjb25zdCB3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHcuY2xhc3NMaXN0LmFkZChcImRyaXZlci1wb3BvdmVyLW5hdmlnYXRpb24tYnRuc1wiKTtcbiAgY29uc3QgciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHIudHlwZSA9IFwiYnV0dG9uXCIsIHIuY2xhc3NMaXN0LmFkZChcImRyaXZlci1wb3BvdmVyLXByZXYtYnRuXCIpLCByLmlubmVySFRNTCA9IFwiJmxhcnI7IFByZXZpb3VzXCI7XG4gIGNvbnN0IHYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICByZXR1cm4gdi50eXBlID0gXCJidXR0b25cIiwgdi5jbGFzc0xpc3QuYWRkKFwiZHJpdmVyLXBvcG92ZXItbmV4dC1idG5cIiksIHYuaW5uZXJIVE1MID0gXCJOZXh0ICZyYXJyO1wiLCB3LmFwcGVuZENoaWxkKHIpLCB3LmFwcGVuZENoaWxkKHYpLCBuLmFwcGVuZENoaWxkKGYpLCBuLmFwcGVuZENoaWxkKHcpLCBlLmFwcGVuZENoaWxkKHApLCBlLmFwcGVuZENoaWxkKG8pLCBlLmFwcGVuZENoaWxkKHQpLCBlLmFwcGVuZENoaWxkKGkpLCBlLmFwcGVuZENoaWxkKG4pLCB7XG4gICAgd3JhcHBlcjogZSxcbiAgICBhcnJvdzogbyxcbiAgICB0aXRsZTogdCxcbiAgICBkZXNjcmlwdGlvbjogaSxcbiAgICBmb290ZXI6IG4sXG4gICAgcHJldmlvdXNCdXR0b246IHIsXG4gICAgbmV4dEJ1dHRvbjogdixcbiAgICBjbG9zZUJ1dHRvbjogcCxcbiAgICBmb290ZXJCdXR0b25zOiB3LFxuICAgIHByb2dyZXNzOiBmXG4gIH07XG59XG5mdW5jdGlvbiBTZSgpIHtcbiAgdmFyIG87XG4gIGNvbnN0IGUgPSBsKFwicG9wb3ZlclwiKTtcbiAgZSAmJiAoKG8gPSBlLndyYXBwZXIucGFyZW50RWxlbWVudCkgPT0gbnVsbCB8fCBvLnJlbW92ZUNoaWxkKGUud3JhcHBlcikpO1xufVxuZnVuY3Rpb24ga2UoZSA9IHt9KSB7XG4gIEQoZSk7XG4gIGZ1bmN0aW9uIG8oKSB7XG4gICAgYShcImFsbG93Q2xvc2VcIikgJiYgdigpO1xuICB9XG4gIGZ1bmN0aW9uIHQoKSB7XG4gICAgY29uc3QgcyA9IGwoXCJhY3RpdmVJbmRleFwiKSwgYyA9IGEoXCJzdGVwc1wiKSB8fCBbXTtcbiAgICBpZiAodHlwZW9mIHMgPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgIHJldHVybjtcbiAgICBjb25zdCBkID0gcyArIDE7XG4gICAgY1tkXSA/IHIoZCkgOiB2KCk7XG4gIH1cbiAgZnVuY3Rpb24gaSgpIHtcbiAgICBjb25zdCBzID0gbChcImFjdGl2ZUluZGV4XCIpLCBjID0gYShcInN0ZXBzXCIpIHx8IFtdO1xuICAgIGlmICh0eXBlb2YgcyA9PSBcInVuZGVmaW5lZFwiKVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGQgPSBzIC0gMTtcbiAgICBjW2RdID8gcihkKSA6IHYoKTtcbiAgfVxuICBmdW5jdGlvbiBwKHMpIHtcbiAgICAoYShcInN0ZXBzXCIpIHx8IFtdKVtzXSA/IHIocykgOiB2KCk7XG4gIH1cbiAgZnVuY3Rpb24gbigpIHtcbiAgICB2YXIgaDtcbiAgICBpZiAobChcIl9fdHJhbnNpdGlvbkNhbGxiYWNrXCIpKVxuICAgICAgcmV0dXJuO1xuICAgIGNvbnN0IGMgPSBsKFwiYWN0aXZlSW5kZXhcIiksIGQgPSBsKFwiX19hY3RpdmVTdGVwXCIpLCBtID0gbChcIl9fYWN0aXZlRWxlbWVudFwiKTtcbiAgICBpZiAodHlwZW9mIGMgPT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2YgZCA9PSBcInVuZGVmaW5lZFwiIHx8IHR5cGVvZiBsKFwiYWN0aXZlSW5kZXhcIikgPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgIHJldHVybjtcbiAgICBjb25zdCB1ID0gKChoID0gZC5wb3BvdmVyKSA9PSBudWxsID8gdm9pZCAwIDogaC5vblByZXZDbGljaykgfHwgYShcIm9uUHJldkNsaWNrXCIpO1xuICAgIGlmICh1KVxuICAgICAgcmV0dXJuIHUobSwgZCwge1xuICAgICAgICBjb25maWc6IGEoKSxcbiAgICAgICAgc3RhdGU6IGwoKVxuICAgICAgfSk7XG4gICAgaSgpO1xuICB9XG4gIGZ1bmN0aW9uIGYoKSB7XG4gICAgdmFyIHU7XG4gICAgaWYgKGwoXCJfX3RyYW5zaXRpb25DYWxsYmFja1wiKSlcbiAgICAgIHJldHVybjtcbiAgICBjb25zdCBjID0gbChcImFjdGl2ZUluZGV4XCIpLCBkID0gbChcIl9fYWN0aXZlU3RlcFwiKSwgbSA9IGwoXCJfX2FjdGl2ZUVsZW1lbnRcIik7XG4gICAgaWYgKHR5cGVvZiBjID09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIGQgPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgIHJldHVybjtcbiAgICBjb25zdCBnID0gKCh1ID0gZC5wb3BvdmVyKSA9PSBudWxsID8gdm9pZCAwIDogdS5vbk5leHRDbGljaykgfHwgYShcIm9uTmV4dENsaWNrXCIpO1xuICAgIGlmIChnKVxuICAgICAgcmV0dXJuIGcobSwgZCwge1xuICAgICAgICBjb25maWc6IGEoKSxcbiAgICAgICAgc3RhdGU6IGwoKVxuICAgICAgfSk7XG4gICAgdCgpO1xuICB9XG4gIGZ1bmN0aW9uIHcoKSB7XG4gICAgbChcImlzSW5pdGlhbGl6ZWRcIikgfHwgKGIoXCJpc0luaXRpYWxpemVkXCIsICEwKSwgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiZHJpdmVyLWFjdGl2ZVwiLCBhKFwiYW5pbWF0ZVwiKSA/IFwiZHJpdmVyLWZhZGVcIiA6IFwiZHJpdmVyLXNpbXBsZVwiKSwgeWUoKSwgTihcIm92ZXJsYXlDbGlja1wiLCBvKSwgTihcImVzY2FwZVByZXNzXCIsIG8pLCBOKFwiYXJyb3dMZWZ0UHJlc3NcIiwgbiksIE4oXCJhcnJvd1JpZ2h0UHJlc3NcIiwgZikpO1xuICB9XG4gIGZ1bmN0aW9uIHIocyA9IDApIHtcbiAgICB2YXIgRSwgQSwgSCwgJCwgQiwgTSwgeiwgcTtcbiAgICBjb25zdCBjID0gYShcInN0ZXBzXCIpO1xuICAgIGlmICghYykge1xuICAgICAgY29uc29sZS5lcnJvcihcIk5vIHN0ZXBzIHRvIGRyaXZlIHRocm91Z2hcIiksIHYoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFjW3NdKSB7XG4gICAgICB2KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGIoXCJfX2FjdGl2ZU9uRGVzdHJveWVkXCIsIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpLCBiKFwiYWN0aXZlSW5kZXhcIiwgcyk7XG4gICAgY29uc3QgZCA9IGNbc10sIG0gPSBjW3MgKyAxXSwgZyA9IGNbcyAtIDFdLCB1ID0gKChFID0gZC5wb3BvdmVyKSA9PSBudWxsID8gdm9pZCAwIDogRS5kb25lQnRuVGV4dCkgfHwgYShcImRvbmVCdG5UZXh0XCIpIHx8IFwiRG9uZVwiLCBoID0gYShcImFsbG93Q2xvc2VcIiksIFAgPSB0eXBlb2YgKChBID0gZC5wb3BvdmVyKSA9PSBudWxsID8gdm9pZCAwIDogQS5zaG93UHJvZ3Jlc3MpICE9IFwidW5kZWZpbmVkXCIgPyAoSCA9IGQucG9wb3ZlcikgPT0gbnVsbCA/IHZvaWQgMCA6IEguc2hvd1Byb2dyZXNzIDogYShcInNob3dQcm9ncmVzc1wiKSwgXyA9ICgoKCQgPSBkLnBvcG92ZXIpID09IG51bGwgPyB2b2lkIDAgOiAkLnByb2dyZXNzVGV4dCkgfHwgYShcInByb2dyZXNzVGV4dFwiKSB8fCBcInt7Y3VycmVudH19IG9mIHt7dG90YWx9fVwiKS5yZXBsYWNlKFwie3tjdXJyZW50fX1cIiwgYCR7cyArIDF9YCkucmVwbGFjZShcInt7dG90YWx9fVwiLCBgJHtjLmxlbmd0aH1gKSwgeCA9ICgoQiA9IGQucG9wb3ZlcikgPT0gbnVsbCA/IHZvaWQgMCA6IEIuc2hvd0J1dHRvbnMpIHx8IGEoXCJzaG93QnV0dG9uc1wiKSwgQyA9IFtcbiAgICAgIFwibmV4dFwiLFxuICAgICAgXCJwcmV2aW91c1wiLFxuICAgICAgLi4uaCA/IFtcImNsb3NlXCJdIDogW11cbiAgICBdLmZpbHRlcigobmUpID0+ICEoeCAhPSBudWxsICYmIHgubGVuZ3RoKSB8fCB4LmluY2x1ZGVzKG5lKSksIHkgPSAoKE0gPSBkLnBvcG92ZXIpID09IG51bGwgPyB2b2lkIDAgOiBNLm9uTmV4dENsaWNrKSB8fCBhKFwib25OZXh0Q2xpY2tcIiksIGsgPSAoKHogPSBkLnBvcG92ZXIpID09IG51bGwgPyB2b2lkIDAgOiB6Lm9uUHJldkNsaWNrKSB8fCBhKFwib25QcmV2Q2xpY2tcIiksIFQgPSAoKHEgPSBkLnBvcG92ZXIpID09IG51bGwgPyB2b2lkIDAgOiBxLm9uQ2xvc2VDbGljaykgfHwgYShcIm9uQ2xvc2VDbGlja1wiKTtcbiAgICBLKHtcbiAgICAgIC4uLmQsXG4gICAgICBwb3BvdmVyOiB7XG4gICAgICAgIHNob3dCdXR0b25zOiBDLFxuICAgICAgICBuZXh0QnRuVGV4dDogbSA/IHZvaWQgMCA6IHUsXG4gICAgICAgIGRpc2FibGVCdXR0b25zOiBbLi4uZyA/IFtdIDogW1wicHJldmlvdXNcIl1dLFxuICAgICAgICBzaG93UHJvZ3Jlc3M6IFAsXG4gICAgICAgIHByb2dyZXNzVGV4dDogXyxcbiAgICAgICAgb25OZXh0Q2xpY2s6IHkgfHwgKCgpID0+IHtcbiAgICAgICAgICBtID8gcihzICsgMSkgOiB2KCk7XG4gICAgICAgIH0pLFxuICAgICAgICBvblByZXZDbGljazogayB8fCAoKCkgPT4ge1xuICAgICAgICAgIHIocyAtIDEpO1xuICAgICAgICB9KSxcbiAgICAgICAgb25DbG9zZUNsaWNrOiBUIHx8ICgoKSA9PiB7XG4gICAgICAgICAgdigpO1xuICAgICAgICB9KSxcbiAgICAgICAgLi4uKGQgPT0gbnVsbCA/IHZvaWQgMCA6IGQucG9wb3ZlcikgfHwge31cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiB2KHMgPSAhMCkge1xuICAgIGNvbnN0IGMgPSBsKFwiX19hY3RpdmVFbGVtZW50XCIpLCBkID0gbChcIl9fYWN0aXZlU3RlcFwiKSwgbSA9IGwoXCJfX2FjdGl2ZU9uRGVzdHJveWVkXCIpLCBnID0gYShcIm9uRGVzdHJveVN0YXJ0ZWRcIik7XG4gICAgaWYgKHMgJiYgZykge1xuICAgICAgY29uc3QgUCA9ICFjIHx8IChjID09IG51bGwgPyB2b2lkIDAgOiBjLmlkKSA9PT0gXCJkcml2ZXItZHVtbXktZWxlbWVudFwiO1xuICAgICAgZyhQID8gdm9pZCAwIDogYywgZCwge1xuICAgICAgICBjb25maWc6IGEoKSxcbiAgICAgICAgc3RhdGU6IGwoKVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHUgPSAoZCA9PSBudWxsID8gdm9pZCAwIDogZC5vbkRlc2VsZWN0ZWQpIHx8IGEoXCJvbkRlc2VsZWN0ZWRcIiksIGggPSBhKFwib25EZXN0cm95ZWRcIik7XG4gICAgaWYgKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImRyaXZlci1hY3RpdmVcIiwgXCJkcml2ZXItZmFkZVwiLCBcImRyaXZlci1zaW1wbGVcIiksIGJlKCksIFNlKCksIHdlKCksIHZlKCksIGNlKCksIFYoKSwgYyAmJiBkKSB7XG4gICAgICBjb25zdCBQID0gYy5pZCA9PT0gXCJkcml2ZXItZHVtbXktZWxlbWVudFwiO1xuICAgICAgdSAmJiB1KFAgPyB2b2lkIDAgOiBjLCBkLCB7XG4gICAgICAgIGNvbmZpZzogYSgpLFxuICAgICAgICBzdGF0ZTogbCgpXG4gICAgICB9KSwgaCAmJiBoKFAgPyB2b2lkIDAgOiBjLCBkLCB7XG4gICAgICAgIGNvbmZpZzogYSgpLFxuICAgICAgICBzdGF0ZTogbCgpXG4gICAgICB9KTtcbiAgICB9XG4gICAgbSAmJiBtLmZvY3VzKCk7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBpc0FjdGl2ZTogKCkgPT4gbChcImlzSW5pdGlhbGl6ZWRcIikgfHwgITEsXG4gICAgcmVmcmVzaDogSSxcbiAgICBkcml2ZTogKHMgPSAwKSA9PiB7XG4gICAgICB3KCksIHIocyk7XG4gICAgfSxcbiAgICBzZXRDb25maWc6IEQsXG4gICAgc2V0U3RlcHM6IChzKSA9PiB7XG4gICAgICBWKCksIEQoe1xuICAgICAgICAuLi5hKCksXG4gICAgICAgIHN0ZXBzOiBzXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldENvbmZpZzogYSxcbiAgICBnZXRTdGF0ZTogbCxcbiAgICBnZXRBY3RpdmVJbmRleDogKCkgPT4gbChcImFjdGl2ZUluZGV4XCIpLFxuICAgIGlzRmlyc3RTdGVwOiAoKSA9PiBsKFwiYWN0aXZlSW5kZXhcIikgPT09IDAsXG4gICAgaXNMYXN0U3RlcDogKCkgPT4ge1xuICAgICAgY29uc3QgcyA9IGEoXCJzdGVwc1wiKSB8fCBbXSwgYyA9IGwoXCJhY3RpdmVJbmRleFwiKTtcbiAgICAgIHJldHVybiBjICE9PSB2b2lkIDAgJiYgYyA9PT0gcy5sZW5ndGggLSAxO1xuICAgIH0sXG4gICAgZ2V0QWN0aXZlU3RlcDogKCkgPT4gbChcImFjdGl2ZVN0ZXBcIiksXG4gICAgZ2V0QWN0aXZlRWxlbWVudDogKCkgPT4gbChcImFjdGl2ZUVsZW1lbnRcIiksXG4gICAgZ2V0UHJldmlvdXNFbGVtZW50OiAoKSA9PiBsKFwicHJldmlvdXNFbGVtZW50XCIpLFxuICAgIGdldFByZXZpb3VzU3RlcDogKCkgPT4gbChcInByZXZpb3VzU3RlcFwiKSxcbiAgICBtb3ZlTmV4dDogdCxcbiAgICBtb3ZlUHJldmlvdXM6IGksXG4gICAgbW92ZVRvOiBwLFxuICAgIGhhc05leHRTdGVwOiAoKSA9PiB7XG4gICAgICBjb25zdCBzID0gYShcInN0ZXBzXCIpIHx8IFtdLCBjID0gbChcImFjdGl2ZUluZGV4XCIpO1xuICAgICAgcmV0dXJuIGMgIT09IHZvaWQgMCAmJiBzW2MgKyAxXTtcbiAgICB9LFxuICAgIGhhc1ByZXZpb3VzU3RlcDogKCkgPT4ge1xuICAgICAgY29uc3QgcyA9IGEoXCJzdGVwc1wiKSB8fCBbXSwgYyA9IGwoXCJhY3RpdmVJbmRleFwiKTtcbiAgICAgIHJldHVybiBjICE9PSB2b2lkIDAgJiYgc1tjIC0gMV07XG4gICAgfSxcbiAgICBoaWdobGlnaHQ6IChzKSA9PiB7XG4gICAgICB3KCksIEsoe1xuICAgICAgICAuLi5zLFxuICAgICAgICBwb3BvdmVyOiBzLnBvcG92ZXIgPyB7XG4gICAgICAgICAgc2hvd0J1dHRvbnM6IFtdLFxuICAgICAgICAgIHNob3dQcm9ncmVzczogITEsXG4gICAgICAgICAgcHJvZ3Jlc3NUZXh0OiBcIlwiLFxuICAgICAgICAgIC4uLnMucG9wb3ZlclxuICAgICAgICB9IDogdm9pZCAwXG4gICAgICB9KTtcbiAgICB9LFxuICAgIGRlc3Ryb3k6ICgpID0+IHtcbiAgICAgIHYoITEpO1xuICAgIH1cbiAgfTtcbn1cbmV4cG9ydCB7XG4gIGtlIGFzIGRyaXZlclxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGRyaXZlciB9IGZyb20gXCJkcml2ZXIuanNcIjtcbmltcG9ydCBcImpxdWVyeVwiO1xuaW1wb3J0IFwic2hpbnlcIjtcblxuXG5cbmltcG9ydCBcIi4vY3VzdG9tLmNzc1wiO1xuXG5sZXQgZHJpdmVyTGlzdCA9IFtdO1xubGV0IGhpZ2hsaWdodGVkO1xubGV0IHByZXZpb3VzO1xubGV0IGhhc19uZXh0O1xuXG5jb25zdCBvbl9uZXh0ID0gKGlkKSA9PiB7XG4gIGhpZ2hsaWdodGVkID0gZHJpdmVyTGlzdFtpZF0uZ2V0QWN0aXZlRWxlbWVudCgpO1xuICBwcmV2aW91cyA9IGRyaXZlckxpc3RbaWRdLmdldFByZXZpb3VzRWxlbWVudCgpO1xuICBoYXNfbmV4dCA9IGRyaXZlckxpc3RbaWRdLmhhc05leHRTdGVwKCk7XG5cbiAgdHJ5IHtcbiAgICBoaWdobGlnaHRlZCA9IGhpZ2hsaWdodGVkLm9wdGlvbnMuZWxlbWVudC5zdWJzdHIoMSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGhpZ2hsaWdodGVkID0gbnVsbDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgcHJldmlvdXMgPSBwcmV2aW91cy5vcHRpb25zLmVsZW1lbnQuc3Vic3RyKDEpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBwcmV2aW91cyA9IG51bGw7XG4gIH1cblxuICB2YXIgZGF0YSA9IHtcbiAgICBoaWdobGlnaHRlZDogaGlnaGxpZ2h0ZWQsXG4gICAgaGFzX25leHQ6IGhhc19uZXh0LFxuICAgIHByZXZpb3VzOiBoaWdobGlnaHRlZCxcbiAgICBiZWZvcmVfcHJldmlvdXM6IHByZXZpb3VzLFxuICB9O1xuICBTaGlueS5zZXRJbnB1dFZhbHVlKGlkICsgXCJfY2ljZXJvbmVfbmV4dFwiLCBkYXRhKTtcbn07XG5cbmNvbnN0IG9uX3ByZXZpb3VzID0gKGlkKSA9PiB7XG4gIGhpZ2hsaWdodGVkID0gZHJpdmVyTGlzdFtpZF0uZ2V0QWN0aXZlRWxlbWVudCgpO1xuICBwcmV2aW91cyA9IGRyaXZlckxpc3RbaWRdLmdldFByZXZpb3VzRWxlbWVudCgpO1xuICBoYXNfbmV4dCA9IGRyaXZlckxpc3RbaWRdLmhhc05leHRTdGVwKCk7XG5cbiAgdHJ5IHtcbiAgICBoaWdobGlnaHRlZCA9IGhpZ2hsaWdodGVkLm9wdGlvbnMuZWxlbWVudC5zdWJzdHIoMSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGhpZ2hsaWdodGVkID0gbnVsbDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgcHJldmlvdXMgPSBwcmV2aW91cy5vcHRpb25zLmVsZW1lbnQuc3Vic3RyKDEpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBwcmV2aW91cyA9IG51bGw7XG4gIH1cblxuICB2YXIgZGF0YSA9IHtcbiAgICBoaWdobGlnaHRlZDogaGlnaGxpZ2h0ZWQsXG4gICAgaGFzX25leHQ6IGhhc19uZXh0LFxuICAgIHByZXZpb3VzOiBoaWdobGlnaHRlZCxcbiAgICBiZWZvcmVfcHJldmlvdXM6IHByZXZpb3VzLFxuICB9O1xuXG4gIFNoaW55LnNldElucHV0VmFsdWUoaWQgKyBcIl9jaWNlcm9uZV9wcmV2aW91c1wiLCBkYXRhKTtcbn07XG5cbmNvbnN0IG1ha2VfcHJldmlvdXMgPSAoaWQpID0+IHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gb25fcHJldmlvdXMoaWQpO1xuICB9O1xufTtcblxuY29uc3QgbWFrZV9uZXh0ID0gKGlkKSA9PiB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG9uX25leHQoaWQpO1xuICB9O1xufTtcblxuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoXCJjaWNlcm9uZS1pbml0XCIsIGZ1bmN0aW9uIChvcHRzKSB7XG4gIHZhciBpZCA9IG9wdHMuZ2xvYmFscy5pZDtcbiAgdmFyIG5leHRfZnVuYyA9IG1ha2VfbmV4dChpZCk7XG4gIHZhciBwcmV2X2Z1bmMgPSBtYWtlX3ByZXZpb3VzKGlkKTtcbiAgb3B0cy5nbG9iYWxzLm9uTmV4dENsaWNrID0gbmV4dF9mdW5jO1xuICBvcHRzLmdsb2JhbHMub25QcmV2aW91c0NsaWNrID0gcHJldl9mdW5jO1xuICBvcHRzLmdsb2JhbHMub25EZXN0cm95U3RhcnRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBTaGlueS5zZXRJbnB1dFZhbHVlKFwiY2ljZXJvbmVfcmVzZXRcIiwgdHJ1ZSwgeyBwcmlvcml0eTogXCJldmVudFwiIH0pO1xuICB9O1xuICBcbiAgaWYgKG9wdHMuZ2xvYmFscy5vbkNsb3NlQ2xpY2spIHtcbiAgICBvcHRzLmdsb2JhbHMub25DbG9zZUNsaWNrID0gZXZhbChvcHRzLmdsb2JhbHMub25DbG9zZUNsaWNrKVxuICB9XG4gIFxuXG4gIG9wdHMuc3RlcHMuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcbiAgICBpZiAob3B0cy5zdGVwc1tpbmRleF0udGFiX2lkKSB7XG4gICAgICBvcHRzLnN0ZXBzW2luZGV4XS5vbkhpZ2hsaWdodFN0YXJ0ZWQgPSBvbkhpZ2hsaWdodFRhYih7XG4gICAgICAgIHRhYl9pZDogc3RlcC50YWJfaWQsXG4gICAgICAgIHRhYjogc3RlcC50YWIsXG4gICAgICB9KS5nZXRGbjtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5zdGVwc1tpbmRleF0ub25IaWdobGlnaHRlZCkge1xuICAgICAgb3B0cy5zdGVwc1tpbmRleF0ub25IaWdobGlnaHRlZCA9IG5ldyBGdW5jdGlvbihcbiAgICAgICAgXCJyZXR1cm4gXCIgKyBvcHRzLnN0ZXBzW2luZGV4XS5vbkhpZ2hsaWdodGVkLFxuICAgICAgKSgpO1xuICAgIH1cblxuICAgIGlmIChvcHRzLnN0ZXBzW2luZGV4XS5vbkhpZ2hsaWdodFN0YXJ0ZWQgJiYgIW9wdHMuc3RlcHNbaW5kZXhdLnRhYl9pZCkge1xuICAgICAgb3B0cy5zdGVwc1tpbmRleF0ub25IaWdobGlnaHRTdGFydGVkID0gbmV3IEZ1bmN0aW9uKFxuICAgICAgICBcInJldHVybiBcIiArIG9wdHMuc3RlcHNbaW5kZXhdLm9uSGlnaGxpZ2h0U3RhcnRlZCxcbiAgICAgICkoKTtcbiAgICB9XG5cbiAgICBpZiAob3B0cy5zdGVwc1tpbmRleF0ub25OZXh0Q2xpY2spIHtcbiAgICAgIGRlYnVnZ2VyO1xuICAgICAgb3B0cy5zdGVwc1tpbmRleF0ub25OZXh0Q2xpY2sgPSBuZXcgRnVuY3Rpb24oXG4gICAgICAgIFwicmV0dXJuIFwiICsgb3B0cy5zdGVwc1tpbmRleF0ub25OZXh0LFxuICAgICAgKSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgZGVidWdnZXI7XG4gIGRyaXZlckxpc3RbaWRdID0gZHJpdmVyKG9wdHMuZ2xvYmFscyxcbiAgb3B0cy5zdGVwcyk7XG4gIGlmIChvcHRzLnN0ZXBzKSB7XG4gICAgZHJpdmVyTGlzdFtpZF0uZGVmaW5lU3RlcHMob3B0cy5zdGVwcyk7XG4gIH1cbn0pO1xuXG5jb25zdCBvbkhpZ2hsaWdodFRhYiA9ICh7IHRhYl9pZCwgdGFiIH0pID0+ICh7XG4gIHRhYl9pZCxcbiAgdGFiLFxuICBnZXRGbihlbGVtZW50KSB7XG4gICAgdmFyIHRhYnMgPSAkKFwiI1wiICsgdGhpcy50YWJfaWQpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMudGFiX2lkKTtcbiAgICBTaGlueS5pbnB1dEJpbmRpbmdzLmJpbmRpbmdOYW1lc1tcInNoaW55LmJvb3RzdHJhcFRhYklucHV0XCJdLmJpbmRpbmdcbiAgICAgIC5zZXRWYWx1ZSh0YWJzLCB0aGlzLnRhYik7XG4gIH0sXG59KTtcblxuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoXCJjaWNlcm9uZS1zdGFydFwiLCBmdW5jdGlvbiAob3B0cykge1xuICBkcml2ZXJMaXN0W29wdHMuaWRdLmRyaXZlKG9wdHMuc3RlcCk7XG59KTtcblxuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoXCJjaWNlcm9uZS1yZXNldFwiLCBmdW5jdGlvbiAob3B0cykge1xuICBkcml2ZXJMaXN0W29wdHMuaWRdLnJlc2V0KCk7XG59KTtcblxuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoXCJjaWNlcm9uZS1uZXh0XCIsIGZ1bmN0aW9uIChvcHRzKSB7XG4gIGRyaXZlckxpc3Rbb3B0cy5pZF0ubW92ZU5leHQoKTtcbn0pO1xuXG5TaGlueS5hZGRDdXN0b21NZXNzYWdlSGFuZGxlcihcImNpY2Vyb25lLXByZXZpb3VzXCIsIGZ1bmN0aW9uIChvcHRzKSB7XG4gIGRyaXZlckxpc3Rbb3B0cy5pZF0ubW92ZVByZXZpb3VzKCk7XG59KTtcblxuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoXCJjaWNlcm9uZS1oaWdobGlnaHQtbWFuXCIsIGZ1bmN0aW9uIChvcHRzKSB7XG4gIGRyaXZlckxpc3Rbb3B0cy5pZF0uaGlnaGxpZ2h0KG9wdHMpO1xufSk7XG5cblNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKFwiY2ljZXJvbmUtaGlnaGxpZ2h0XCIsIGZ1bmN0aW9uIChvcHRzKSB7XG4gIGRyaXZlckxpc3Rbb3B0cy5pZF0uaGlnaGxpZ2h0KG9wdHMuZWwpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=