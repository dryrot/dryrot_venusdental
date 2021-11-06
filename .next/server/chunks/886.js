exports.id = 886;
exports.ids = [886];
exports.modules = {

/***/ 3886:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);





const BeforeAfter = props => {
  const BeAfBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "BeforeAfter__BeAfBox",
    componentId: "sc-2wl86f-0"
  })(["width:100%;height:", ";", ""], props.imgHeight || "600px", ({
    theme
  }) => theme.mobile`
     max-height: 200px;
  `);
  const BeAfContents = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "BeforeAfter__BeAfContents",
    componentId: "sc-2wl86f-1"
  })(["width:100%;height:100%;position:relative;"]);
  const BeAfImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "BeforeAfter__BeAfImage",
    componentId: "sc-2wl86f-2"
  })(["position:absolute;width:100%;height:100%;background-image:url(", ");background-size:cover;background-repeat:no-repeat;background-position:center top;&:last-child{animation-name:fade;animation-timing-function:ease-in-out;animation-iteration-count:infinite;animation-duration:3s;animation-direction:alternate;}@keyframes fade{0%{opacity:1;}25%{opacity:1;}75%{opacity:0;}100%{opacity:0;}}"], props => props.imgSrc);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BeAfBox, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BeAfContents, {
        children: props.imgSrc.map(item => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BeAfImage, {
            imgSrc: item
          });
        })
      })
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (BeforeAfter);

/***/ })

};
;