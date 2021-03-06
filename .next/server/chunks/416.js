exports.id = 416;
exports.ids = [416];
exports.modules = {

/***/ 5416:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);






const VenusTitle = props => {
  const TitleBox = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    displayName: "VenusTitle__TitleBox",
    componentId: "sc-1m9jnar-0"
  })(["display:flex;justify-content:center;align-items:center;flex-shrink:0;width:100%;margin:50px 0px 50px 0px;", ""], ({
    theme
  }) => theme.mobile`
     margin: 0px;
  `);
  const LogoBox = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    displayName: "VenusTitle__LogoBox",
    componentId: "sc-1m9jnar-1"
  })(["display:flex;width:90px;height:80px;margin-right:10px;", ""], ({
    theme
  }) => theme.mobile`
      width: 70px;
      height: 60px;
    `);
  const Logo = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
    displayName: "VenusTitle__Logo",
    componentId: "sc-1m9jnar-2"
  })(["width:105px;height:95px;display:block;margin:-10px 0px 0px 0px;background-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='\uB808\uC774\uC5B4_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 1417.3 1417.3' style='enable-background:new 0 0 1417.3 1417.3;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%2322223C;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M1249.6,1060.4'/%3E%3Crect x='529.1' y='549.1' class='st0' width='43.7' height='578.2'/%3E%3Cpolygon class='st0' points='691.2,998.6 691.2,549.1 649,549.1 649,1040.1 649.3,1040.1 649.3,1040.4 792.3,1040.4 792.3,998.6 '/%3E%3Cpolygon class='st0' points='899.8,840.2 883,840.2 883,549.2 839.3,549.2 839.3,840.2 718.3,840.2 718.3,883.9 839.3,883.9 839.3,1127.4 883,1127.4 883,883.9 899.8,883.9 '/%3E%3Cg%3E%3Cpath class='st0' d='M542.6,313.1c-20.8,30.4-38.3,62.7-49.5,97.8c-8,25.1-14.6,50.8-19.5,76.7c-6.3,33.5-11.1,67.3-15.2,101.2 c-3.7,30.6-5.7,61.4-8.1,92.1c-1.2,14.6-1.3,29.3-2.5,43.9c-1.5,17.6-3.7,35.2-5.5,52.8c-1.4,14.8-2.4,29.6-4,44.4 c-2.9,26.8-5.9,53.5-9.2,80.2c-3.4,27.3-6.3,54.8-16.8,80.7c-5.1,12.6-12.1,23.7-23.9,31.3c-8.7,5.6-20.4,5.6-27.1-1.9 c-6.3-7.1-11.9-15.1-16.2-23.6c-13.2-26-18.1-54.7-23.6-83c-5.7-29.6-8.9-59.7-13.5-89.5c-4.6-29.6-9-59.3-14.5-88.7 c-3.3-17.6-7-35.4-13.4-52c-10.3-26.9-26.7-50.3-48.6-69.2c-9.3-8-19.9-14.6-29.9-21.8c-0.9,0.7-1.8,1.3-2.7,2 c0.4,1.9,0.4,4,1.3,5.6c9.5,16.9,19.9,33.4,28.5,50.8c6.9,13.8,12.5,28.4,16.9,43.2c4.2,14,6.5,28.5,9.2,42.9 c5.1,26.6,10.2,53.2,14.6,80c3.2,19.6,4.8,39.6,8.2,59.1c4.6,26.2,9.2,52.5,15.9,78.3c8.4,32.4,26.9,59,52.9,80.2 c22.7,18.5,48.9,17.5,67.6-2.6c15.3-16.4,25.3-36.3,33-57c7-18.8,12.5-38.3,16.9-57.8c5.7-26,10.4-52.3,14.2-78.7 c3.3-22.7,4.9-45.7,6.9-68.5c2.9-31.8,5.6-63.6,8.1-95.4c1.6-20.5,2.5-41,4-61.5c2.5-35.6,5.2-71.1,7.9-106.6 c0.8-10.5,1.1-21.1,3.3-31.3c5.4-24.7,11.4-49.4,17.9-73.9c6-22.8,13-45.4,19.4-68.1c1.5-5.3,2.6-10.6,3.9-16 c-0.6-0.4-1.2-0.7-1.8-1.1C546.1,309.8,543.9,311.1,542.6,313.1z'/%3E%3Cpath class='st0' d='M1246,1042.1l-3.6-43.7h-0.5c-1.8-20.6-3.7-41.3-5.3-61.9c-0.9-11.8-0.6-23.7-1.5-35.5 c-2-26.8-4.1-53.6-6.5-80.4c-2.7-30.1-5.1-60.2-9.1-90.1c-3.8-29-9.5-57.7-18.2-85.8c-7-22.7-16.4-44.3-29.8-63.8 c-11-16-24.3-28-45.8-28.4c-16.8-0.3-30.9,4.5-43.3,15.2c-21.4,18.5-33.2,43.2-42.8,68.9c-9.2,24.6-15.1,50.2-19,76.2 c-4.3,28.8-8.3,57.6-12.5,86.3c-1.8,12.6-3.1,25.2-5.8,37.6c-4.4,20.7-9,41.4-14.9,61.7c-5.1,17.6-11.4,34.8-18.3,51.8 c-6.7,16.6-14.9,32.5-22.3,48.8c-0.7,1.5-0.4,3.5-0.6,5.3c2,0.2,4.4,1.1,6,0.3c6.2-3.2,12.8-6,17.9-10.5 c33.7-29.8,57-66.2,67-110.2c6.4-27.9,11.2-56.1,15.9-84.4c3.1-18.8,4.6-37.8,7-56.7c2.1-17.2,3.9-34.4,6.8-51.4 c2.9-16.8,7-33.4,10.6-50c3.4-15.9,8.4-31.3,17.2-45.1c14.3-22.4,37.4-27.6,53.9-3.5c6,8.8,10,19.5,12.9,29.9 c4,14,6.7,28.5,8.9,42.9c5.2,32.8,10.7,65.7,14.4,98.7c3.8,34.8,5.6,69.8,8.2,104.7c1.4,18.3,2.7,36.6,4,55 c1.5,21.8,3.1,43.6,4.6,65.5c0.4,5.9,0.2,8.1-2.4,8.9H973.4v5.9c-0.1,0.7-0.2,1.5-0.1,2.4c0.1,3.4,0.1,6.8,0.1,10.2v11.3 c0,1.6,0,3.2,0,4.8c0,0.4,0,0.7,0,1.1v8L1246,1042.1L1246,1042.1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A\");background-repeat:no-repeat;", ""], ({
    theme
  }) => theme.tablet`
      width: 85px;
      height: 75px;
      margin: 0;
    `);
  const Text = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
    displayName: "VenusTitle__Text",
    componentId: "sc-1m9jnar-3"
  })(["margin-top:7px;font-size:", ";", " ", ""], props => props.theme.fontSize.bold, ({
    theme
  }) => theme.mobile`
      font-size: ${theme.mFontSize.semiBold};
      margin-top: 0px;
      font-weight: 600;
    `, ({
    theme
  }) => theme.tablet`
       font-size: ${props.index ? theme.mFontSize.title : theme.mFontSize.indexTitle};
        margin-left: -10px;
    `);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TitleBox, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LogoBox, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Logo, {})
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
      children: props.text
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (VenusTitle);

/***/ })

};
;