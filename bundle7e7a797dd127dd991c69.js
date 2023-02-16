/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n\ttext-decoration: none;\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\tfont-family: 'Open Sans', sans-serif;\n}\n\nbody {\n\tbackground: #f5f6fa;\n}\n\n.container {\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'nav nav nav'\n\t\t'aside main main'\n\t\t'aside main main';\n\tgrid-template-rows: 3em 1fr;\n\tgrid-template-columns: 20% 1fr;\n}\n\nnav {\n\tgrid-area: nav;\n\tbackground: rgb(5, 68, 104);\n\tbox-shadow: 0 8px 6px -6px black;\n}\n\nnav h2 {\n\tpadding: 0.7em;\n\tcolor: #fff;\n}\n\n.sidebar {\n\tgrid-area: aside;\n\tbackground: rgb(212, 230, 241);\n\theight: 100vh;\n\tpadding: 1em;\n}\n\n.sidebar h3 {\n\tcolor: rgb(44, 62, 80);\n\tpadding: 0 1.5em;\n\tfont-size: 1rem;\n}\n\n.sidebar .icon {\n\twidth: 1.2em;\n}\n\n.inbox {\n\tpadding-top: 5em;\n}\n\n.inbox h2 {\n\tdisplay: inline-block;\n\t/* text-align: middle; */\n\tmargin-left: .5em;\n}\n\n#inboxImg {\n\twidth: 2em;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n}\n\n#newProjectBtn {\n\tmargin-top: 3em;\n\tmargin-bottom: 2em;\n\tcursor: pointer;\n\tborder: none;\n\tbackground: none;\n}\n\n#newProjectBtn img {\n\twidth: 1em;\n}\n\n#project-title {\n\tpadding: 0.4em;\n}\n\n#projectFormBtn {\n\tmargin-top: 1em;\n\tpadding: 0.2em;\n}\n\n.projects {\n\tmargin-top: 3em;\n}\n\n.project-list {\n\tmargin-top: 1em;\n\tborder-top: 1px solid #10558d;\n}\n\n.sidebar ul li,\n.inbox {\n\tdisplay: block;\n\tpadding: 13px 30px;\n\tborder-bottom: 1px solid #10558d;\n\tcolor: rgb(44, 62, 80);\n\tfont-size: 1rem;\n\tcursor: pointer;\n}\n.sidebar ul li:hover,\n.sidebar ul li:active,\n.inbox:active,\n.inbox:hover {\n\tcolor: #0c7db1;\n\tbackground: white;\n\tborder-right: 2px solid rgb(5, 68, 104);\n}\n\n.hide {\n\tdisplay: none;\n}\n\n.show {\n\tdisplay: block;\n}\n\n.openTodoForm {\n\twidth: 1.5em;\n\tcursor: pointer;\n\tpadding-top: 2em;\n\ttext-align: end;\n}\n\n.flex-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-wrap: wrap;\n\tgap: 1em;\n}\n\n.todoModal {\n\tborder: none;\n\tborder-radius: 6px;\n\tbox-shadow: 0 0 1em rgb(0 0 0 / 0.3);\n\tmargin: auto;\n}\n\n.todoModal::backdrop {\n\tbackground-color: rgb(0 0 0 / 0.3);\n}\n\n#todo-form {\n\tbackground-color: #fff;\n\twidth: 100%;\n\tpadding: 2em 4em;\n}\n\n#todo-form h3 {\n\tmargin-bottom: 1em;\n}\n\n.form-row {\n\tmargin-bottom: 10px;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tflex-direction: column;\n\tflex-wrap: wrap;\n}\n\n#todo-form input,\n#todo-form select {\n\twidth: 20em;\n\tpadding: 8px;\n\tborder-radius: 4px;\n\tborder: 1px solid #e5e7eb;\n}\n\n#todo-form label {\n\tcolor: gray;\n\tmargin-bottom: 0.5em;\n}\n\n#todo-form button {\n\tfont-size: 1.1rem;\n\tbackground-color: rgb(5, 68, 104);\n\tcolor: #fff;\n\tpadding: 0.5em;\n\tborder: none;\n\tbox-shadow: 0 3px 10px rgb(0 0 0 / 0.2);\n\tborder-radius: 8px;\n}\n\nmain {\n\tgrid-area: main;\n\tbackground: #eaeaea;\n\tpadding: 3em 2em;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n}\n\nmain h1 {\n\tmargin-bottom: 2em;\n}\n\n#deleteBtn {\n\twidth: 1.2em;\n\tcursor: pointer;\n}\n\n#editBtn {\n\twidth: 1.2em;\n\tcursor: pointer;\n}\n\ntable {\n\tborder-collapse: collapse;\n\twidth: 100%;\n}\n\nth,\ntd {\n\tpadding: 8px;\n\ttext-align: left;\n\tborder-bottom: 1px solid #ddd;\n}\n\ntr:nth-child(even) {\n\tbackground-color: rgb(202, 232, 241);\n}\n\ntr:nth-child(odd) {\n\tbackground-color: rgb(5, 68, 104);\n\tcolor: white;\n}\n\nth {\n\tbackground-color: #ab7c94;\n\tcolor: white;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;CACC,qBAAqB;CACrB,SAAS;CACT,UAAU;CACV,sBAAsB;CACtB,oCAAoC;AACrC;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb;;;mBAGkB;CAClB,2BAA2B;CAC3B,8BAA8B;AAC/B;;AAEA;CACC,cAAc;CACd,2BAA2B;CAC3B,gCAAgC;AACjC;;AAEA;CACC,cAAc;CACd,WAAW;AACZ;;AAEA;CACC,gBAAgB;CAChB,8BAA8B;CAC9B,aAAa;CACb,YAAY;AACb;;AAEA;CACC,sBAAsB;CACtB,gBAAgB;CAChB,eAAe;AAChB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,qBAAqB;CACrB,wBAAwB;CACxB,iBAAiB;AAClB;;AAEA;CACC,UAAU;CACV,qBAAqB;CACrB,sBAAsB;AACvB;;AAEA;CACC,eAAe;CACf,kBAAkB;CAClB,eAAe;CACf,YAAY;CACZ,gBAAgB;AACjB;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,eAAe;CACf,cAAc;AACf;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,eAAe;CACf,6BAA6B;AAC9B;;AAEA;;CAEC,cAAc;CACd,kBAAkB;CAClB,gCAAgC;CAChC,sBAAsB;CACtB,eAAe;CACf,eAAe;AAChB;AACA;;;;CAIC,cAAc;CACd,iBAAiB;CACjB,uCAAuC;AACxC;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,cAAc;AACf;;AAEA;CACC,YAAY;CACZ,eAAe;CACf,gBAAgB;CAChB,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,eAAe;CACf,QAAQ;AACT;;AAEA;CACC,YAAY;CACZ,kBAAkB;CAClB,oCAAoC;CACpC,YAAY;AACb;;AAEA;CACC,kCAAkC;AACnC;;AAEA;CACC,sBAAsB;CACtB,WAAW;CACX,gBAAgB;AACjB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,mBAAmB;CACnB,aAAa;CACb,2BAA2B;CAC3B,sBAAsB;CACtB,eAAe;AAChB;;AAEA;;CAEC,WAAW;CACX,YAAY;CACZ,kBAAkB;CAClB,yBAAyB;AAC1B;;AAEA;CACC,WAAW;CACX,oBAAoB;AACrB;;AAEA;CACC,iBAAiB;CACjB,iCAAiC;CACjC,WAAW;CACX,cAAc;CACd,YAAY;CACZ,uCAAuC;CACvC,kBAAkB;AACnB;;AAEA;CACC,eAAe;CACf,mBAAmB;CACnB,gBAAgB;CAChB,aAAa;CACb,sBAAsB;CACtB,2BAA2B;AAC5B;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,YAAY;CACZ,eAAe;AAChB;;AAEA;CACC,YAAY;CACZ,eAAe;AAChB;;AAEA;CACC,yBAAyB;CACzB,WAAW;AACZ;;AAEA;;CAEC,YAAY;CACZ,gBAAgB;CAChB,6BAA6B;AAC9B;;AAEA;CACC,oCAAoC;AACrC;;AAEA;CACC,iCAAiC;CACjC,YAAY;AACb;;AAEA;CACC,yBAAyB;CACzB,YAAY;AACb","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\n\n* {\n\ttext-decoration: none;\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\tfont-family: 'Open Sans', sans-serif;\n}\n\nbody {\n\tbackground: #f5f6fa;\n}\n\n.container {\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'nav nav nav'\n\t\t'aside main main'\n\t\t'aside main main';\n\tgrid-template-rows: 3em 1fr;\n\tgrid-template-columns: 20% 1fr;\n}\n\nnav {\n\tgrid-area: nav;\n\tbackground: rgb(5, 68, 104);\n\tbox-shadow: 0 8px 6px -6px black;\n}\n\nnav h2 {\n\tpadding: 0.7em;\n\tcolor: #fff;\n}\n\n.sidebar {\n\tgrid-area: aside;\n\tbackground: rgb(212, 230, 241);\n\theight: 100vh;\n\tpadding: 1em;\n}\n\n.sidebar h3 {\n\tcolor: rgb(44, 62, 80);\n\tpadding: 0 1.5em;\n\tfont-size: 1rem;\n}\n\n.sidebar .icon {\n\twidth: 1.2em;\n}\n\n.inbox {\n\tpadding-top: 5em;\n}\n\n.inbox h2 {\n\tdisplay: inline-block;\n\t/* text-align: middle; */\n\tmargin-left: .5em;\n}\n\n#inboxImg {\n\twidth: 2em;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n}\n\n#newProjectBtn {\n\tmargin-top: 3em;\n\tmargin-bottom: 2em;\n\tcursor: pointer;\n\tborder: none;\n\tbackground: none;\n}\n\n#newProjectBtn img {\n\twidth: 1em;\n}\n\n#project-title {\n\tpadding: 0.4em;\n}\n\n#projectFormBtn {\n\tmargin-top: 1em;\n\tpadding: 0.2em;\n}\n\n.projects {\n\tmargin-top: 3em;\n}\n\n.project-list {\n\tmargin-top: 1em;\n\tborder-top: 1px solid #10558d;\n}\n\n.sidebar ul li,\n.inbox {\n\tdisplay: block;\n\tpadding: 13px 30px;\n\tborder-bottom: 1px solid #10558d;\n\tcolor: rgb(44, 62, 80);\n\tfont-size: 1rem;\n\tcursor: pointer;\n}\n.sidebar ul li:hover,\n.sidebar ul li:active,\n.inbox:active,\n.inbox:hover {\n\tcolor: #0c7db1;\n\tbackground: white;\n\tborder-right: 2px solid rgb(5, 68, 104);\n}\n\n.hide {\n\tdisplay: none;\n}\n\n.show {\n\tdisplay: block;\n}\n\n.openTodoForm {\n\twidth: 1.5em;\n\tcursor: pointer;\n\tpadding-top: 2em;\n\ttext-align: end;\n}\n\n.flex-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tflex-wrap: wrap;\n\tgap: 1em;\n}\n\n.todoModal {\n\tborder: none;\n\tborder-radius: 6px;\n\tbox-shadow: 0 0 1em rgb(0 0 0 / 0.3);\n\tmargin: auto;\n}\n\n.todoModal::backdrop {\n\tbackground-color: rgb(0 0 0 / 0.3);\n}\n\n#todo-form {\n\tbackground-color: #fff;\n\twidth: 100%;\n\tpadding: 2em 4em;\n}\n\n#todo-form h3 {\n\tmargin-bottom: 1em;\n}\n\n.form-row {\n\tmargin-bottom: 10px;\n\tdisplay: flex;\n\tjustify-content: flex-start;\n\tflex-direction: column;\n\tflex-wrap: wrap;\n}\n\n#todo-form input,\n#todo-form select {\n\twidth: 20em;\n\tpadding: 8px;\n\tborder-radius: 4px;\n\tborder: 1px solid #e5e7eb;\n}\n\n#todo-form label {\n\tcolor: gray;\n\tmargin-bottom: 0.5em;\n}\n\n#todo-form button {\n\tfont-size: 1.1rem;\n\tbackground-color: rgb(5, 68, 104);\n\tcolor: #fff;\n\tpadding: 0.5em;\n\tborder: none;\n\tbox-shadow: 0 3px 10px rgb(0 0 0 / 0.2);\n\tborder-radius: 8px;\n}\n\nmain {\n\tgrid-area: main;\n\tbackground: #eaeaea;\n\tpadding: 3em 2em;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: flex-start;\n}\n\nmain h1 {\n\tmargin-bottom: 2em;\n}\n\n#deleteBtn {\n\twidth: 1.2em;\n\tcursor: pointer;\n}\n\n#editBtn {\n\twidth: 1.2em;\n\tcursor: pointer;\n}\n\ntable {\n\tborder-collapse: collapse;\n\twidth: 100%;\n}\n\nth,\ntd {\n\tpadding: 8px;\n\ttext-align: left;\n\tborder-bottom: 1px solid #ddd;\n}\n\ntr:nth-child(even) {\n\tbackground-color: rgb(202, 232, 241);\n}\n\ntr:nth-child(odd) {\n\tbackground-color: rgb(5, 68, 104);\n\tcolor: white;\n}\n\nth {\n\tbackground-color: #ab7c94;\n\tcolor: white;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  randomUUID
});

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "unsafeStringify": () => (/* binding */ unsafeStringify)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ "./node_modules/uuid/dist/esm-browser/native.js");
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");




function v4(options, buf, offset) {
  if (_native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID && !buf && !options) {
    return _native_js__WEBPACK_IMPORTED_MODULE_0__["default"].randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ }),

/***/ "./src/Local.js":
/*!**********************!*\
  !*** ./src/Local.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Local class (to access localstorage)
class Local {
	static getTodos() {
		let todos;
		if (localStorage.getItem('todos') === null) {
			todos = [];
		} else {
			todos = JSON.parse(localStorage.getItem('todos'));
		}
		return todos;
	}
	static addTodo(todo) {
		const todos = Local.getTodos();
		todos.push(todo);
		localStorage.setItem('todos', JSON.stringify(todos));
	}
	static editTodo(e) {
		console.log(`From the Local file! ${e.target}`)
	}
	static deleteTodo(todo) {
		console.log(`${todo.todoId}`);
	// 	const todos = Local.getTodos();
	// 	todos.forEach((todo, index) => {
	// 		// if (todo.id === id) {
	// 		// 	todos.splice(index, 1);
	// 		// }

	// 	});
	// 	localStorage.setItem('todos', JSON.stringify(todos));
	// }
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Local);

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Todo {
	constructor(title, description, dueDate, priority, completed, todoId) 
		{
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.completed = completed;
		this.todoId = todoId;
		}
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Local */ "./src/Local.js");



// UI class
class UI {
	static displayTodos() {
		const todos = _Local__WEBPACK_IMPORTED_MODULE_0__["default"].getTodos();
        
		todos.forEach((todo) => UI.addTodoToList(todo))
	}

	static addTodoToList(todo) {
		const todoList = document.querySelector('#todo-list');
		const row = document.createElement('tr');
		
		row.innerHTML = `
            <td>${todo.title}</td>
            <td>${todo.dueDate}</td>
            <td>${todo.priority}</td>`;
			const deleteBtn = document.createElement('td');
			deleteBtn.id = todo.todoId;
			const trashCan = document.createElement('img');
			trashCan.src = './trash.svg';
			trashCan.setAttribute('id', 'deleteBtn');
			trashCan.classList.add('delete');
			trashCan.addEventListener('click', UI.deleteTodo);
			deleteBtn.appendChild(trashCan);
			row.appendChild(deleteBtn);
			
			const editBtn = document.createElement('td');
			const pencil = document.createElement('img');
			pencil.src = './pencil.svg';
			pencil.setAttribute('id', 'editBtn');
			pencil.classList.add('edit');
			pencil.addEventListener('click', UI.editTodo);
			editBtn.appendChild(pencil);
			row.appendChild(editBtn); 
		
		todoList.appendChild(row);
	}

	static deleteTodo(e) {
		_Local__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTodo(e);
		console.log(e.target)
		e.target.parentElement.parentElement.remove();
	}

	static editTodo(e) {
		console.log(`From the UI file ${e.target}`);
	}

	// static showAlert(message, className) {
	// 	const div = document.createElement('div');
	// 	div.className = `alert alert-${className}`;
	// 	div.appendChild(document.createTextNode(message));
	// 	const container = document.querySelector('.container');
	// 	const form = document.querySelector('#book-form');
	// 	container.insertBefore(div, form);
	// 	// Remove alert after 3 seconds
	// 	setTimeout(() => document.querySelector('.alert').remove(), 3000);
	// }

	static clearFields() {
		document.querySelector('#title').value = '';
		document.querySelector('#description').value = '';
		document.querySelector('#dueDate').value = '';
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);

/***/ }),

/***/ "./src/assets/add-solid.svg":
/*!**********************************!*\
  !*** ./src/assets/add-solid.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "add-solid.svg";

/***/ }),

/***/ "./src/assets/folder.svg":
/*!*******************************!*\
  !*** ./src/assets/folder.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "folder.svg";

/***/ }),

/***/ "./src/assets/inbox.svg":
/*!******************************!*\
  !*** ./src/assets/inbox.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "inbox.svg";

/***/ }),

/***/ "./src/assets/pencil.svg":
/*!*******************************!*\
  !*** ./src/assets/pencil.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "pencil.svg";

/***/ }),

/***/ "./src/assets/trash.svg":
/*!******************************!*\
  !*** ./src/assets/trash.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "trash.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ "./src/Todo.js");
/* harmony import */ var _Local__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Local */ "./src/Local.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI */ "./src/UI.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _assets_add_solid_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/add-solid.svg */ "./src/assets/add-solid.svg");
/* harmony import */ var _assets_folder_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/folder.svg */ "./src/assets/folder.svg");
/* harmony import */ var _assets_trash_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/trash.svg */ "./src/assets/trash.svg");
/* harmony import */ var _assets_pencil_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/pencil.svg */ "./src/assets/pencil.svg");
/* harmony import */ var _assets_inbox_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/inbox.svg */ "./src/assets/inbox.svg");













const inbox = document.querySelector('.inbox');
const projectName = document.querySelector('#project-name');
const newProjectBtn = document.querySelector('#newProjectBtn');
const projectForm = document.querySelector('.projectForm');
const projectFormBtn = document.querySelector('#projectFormBtn');
const projectArray = [];
const projectList = document.querySelector('.project-list');
const openTodoForm = document.querySelector('.openTodoForm');
const todoModal = document.querySelector('.todoModal');

// Open the Project form in sidebar
newProjectBtn.addEventListener('click', () => {
	projectForm.classList.toggle('hide');
	projectForm.classList.toggle('show');
	document.querySelector('#project-title').focus();
});

// Load inbox
inbox.addEventListener('click', () => {
	// projectName.textContent = '[inbox.dataset.project]';
	projectName.innerText = 'Inbox';
});


// Load project page
function loadProjectPage(e) {
	console.log(e);
	projectName.innerText = e.target.innerText;
}

// Event listener to open form and create new project
projectFormBtn.addEventListener('click', (e) => {
	projectForm.classList.toggle('hide');
	projectForm.classList.toggle('show');
	e.preventDefault();
	let projectTitle = document.querySelector('#project-title');
	const li = document.createElement('li');
	li.dataset.project = projectTitle.value.toLowerCase();
	li.innerText = projectTitle.value;
	projectArray.push(projectTitle.value);
	li.addEventListener('click', loadProjectPage);
	projectList.appendChild(li);
	projectTitle.value = '';
});

openTodoForm.addEventListener('click', () => {
	todoModal.showModal();
});

// Event: Display all todos
document.addEventListener('DOMContentLoaded', _UI__WEBPACK_IMPORTED_MODULE_3__["default"].displayTodos)

// Event: Add todo
document.querySelector('#todo-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#dueDate').value;
    const priority = document.querySelector('#priority').value;
    const completed = false;
		const todoId = (0,uuid__WEBPACK_IMPORTED_MODULE_9__["default"])();

    // Validate
    if (title === '') {
        // UI.showAlert('Please fill in all fields', 'danger');
    } else {
			// Make a new todo
			const todo = new _Todo__WEBPACK_IMPORTED_MODULE_1__["default"](title, description, dueDate, priority, completed, todoId);

			// Add todo to list
			_UI__WEBPACK_IMPORTED_MODULE_3__["default"].addTodoToList(todo);

			// Add todo to localstorage
			_Local__WEBPACK_IMPORTED_MODULE_2__["default"].addTodo(todo);

			// // Show success message
			// UI.showAlert('Todo Added', 'success')

			// Clear fields
			_UI__WEBPACK_IMPORTED_MODULE_3__["default"].clearFields();
			todoModal.close();
	}
})

// Cancel button
document.querySelector('.cancel-btn').addEventListener('click', () => {
	_UI__WEBPACK_IMPORTED_MODULE_3__["default"].clearFields();
	todoModal.close();
})

})();

/******/ })()
;
//# sourceMappingURL=bundle7e7a797dd127dd991c69.js.map