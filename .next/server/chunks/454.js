exports.id = 454;
exports.ids = [454];
exports.modules = {

/***/ 2830:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": function() { return /* binding */ Section; },
/* harmony export */   "b": function() { return /* binding */ VDiv; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const Section = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "VDiv__Section",
  componentId: "sc-1q7jesg-0"
})(["width:100%;display:inline-block;align-items:baseline;justify-content:center;padding:60px 0;background-color:", ";", " ", ""], props => props.color === "beige" ? props.theme.lightBeige : "#fff", ({
  theme
}) => theme.mobile`
     padding: 30px 0;
     ${props => {
  if (props.disYn === "n") {
    return " display: none;";
  }

  if (props.padding !== undefined) {
    return `padding: ${props.padding}`;
  }
}}
  `, ({
  theme
}) => theme.tablet`
     ${props => {
  if (props.disYn === "n") {
    return " display: none;";
  }
}}
  `);
const ContentsBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "VDiv__ContentsBox",
  componentId: "sc-1q7jesg-1"
})(["display:flex;align-items:center;justify-content:center;"]);
const Contents = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "VDiv__Contents",
  componentId: "sc-1q7jesg-2"
})(["width:calc(100% - 30%);display:flex;align-items:center;justify-items:center;justify-content:center;background-color:", ";", " ", " ", " ", ""], props => props.color === "beige" ? props.theme.lightBeige : "#fff", ({
  theme
}) => theme.laptop`
        width: calc(100vw);
  `, ({
  theme
}) => theme.desktop`
        width: calc(100vw - 2000px);
  `, ({
  theme
}) => theme.mobile`
         width: 100vw;
  `, ({
  theme
}) => theme.tablet`
    width: 100vw;
     ${props => {
  if (props.full) {
    console.log(1111122);
    return "width: 100vw;";
  }
}}
  `);
const VDiv = props => {
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    document.querySelector("body").classList.remove("no_scrolling");
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Section, {
      color: props.color,
      disYn: props.disYn,
      padding: props.padding,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ContentsBox, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Contents, {
          color: props.contColor || props.color,
          full: props.full,
          children: props.element
        })
      })
    })
  });
};

/***/ })

};
;