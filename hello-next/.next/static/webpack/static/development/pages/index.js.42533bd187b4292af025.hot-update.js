webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");




var PostLink = function PostLink(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/post?title=".concat(props.title),
    as: "/p/".concat(props.title)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, props.title)));
};

function Blog() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostLink, {
    title: "Hello Next1 Js"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostLink, {
    title: "Hello Next2 Js"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostLink, {
    title: "Hello Next3 Js"
  })));
}

/***/ })

})
//# sourceMappingURL=index.js.42533bd187b4292af025.hot-update.js.map