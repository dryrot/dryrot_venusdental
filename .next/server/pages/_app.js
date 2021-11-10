(function() {
var exports = {};
exports.id = 888;
exports.ids = [888,911];
exports.modules = {

/***/ 3397:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// NAMESPACE OBJECT: ./styled-component/theme.js
var theme_namespaceObject = {};
__webpack_require__.r(theme_namespaceObject);
__webpack_require__.d(theme_namespaceObject, {
  "boxShadow": function() { return boxShadow; },
  "contentWidth": function() { return contentWidth; },
  "darkBeige": function() { return darkBeige; },
  "darkSpace": function() { return darkSpace; },
  "darkestSpace": function() { return darkestSpace; },
  "fontSize": function() { return fontSize; },
  "lFontSize": function() { return lFontSize; },
  "lightBeige": function() { return lightBeige; },
  "mFontSize": function() { return mFontSize; },
  "temp1": function() { return temp1; },
  "temp2": function() { return temp2; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
;// CONCATENATED MODULE: ./styled-component/theme.js
const lightBeige = "#f2e9e4";
const darkBeige = "#C9ADA7";
const darkestSpace = "#22223B";
const darkSpace = "#4a4e69";
const temp1 = "#CC2936";
const temp2 = "#B6244F";
const fontSize = {
  default: "25px",
  semiBold: "35px",
  bold: "40px",
  navigator: "30px",
  title: "40px"
};
const mFontSize = {
  default: "18px",
  semiBold: "21px",
  bold: "23px",
  navigator: "25px",
  title: "25px",
  review: "16px",
  reviewSmall: "15px",
  index: "50px",
  indexTitle: "35px"
};
const lFontSize = {
  navigator: "23px",
  footer: "16px"
};
const contentWidth = "950px";
const boxShadow = "0px 3px 2px #00000030";
;// CONCATENATED MODULE: ./styled-component/media.js

const deviceSizes = {
  mobile: [0, 414],
  tablet: [415, 768],
  laptop: [769, 1280],
  retina: [1281, 1920],
  desktop: [1921, 10000]
};
/* harmony default export */ var media = (Object.keys(deviceSizes).reduce((acc, label) => {
  acc[label] = (...args) => (0,external_styled_components_.css)(["@media (min-width:", "px) and (max-width:", "px){", ";}"], deviceSizes[label][0], deviceSizes[label][1], (0,external_styled_components_.css)(...args));

  return acc;
}, {}));
;// CONCATENATED MODULE: ./pages/_app.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import "../styles/globals.css";







const MyApp = ({
  Component,
  pageProps
}) => {
  return (
    /*#__PURE__*/
    // <ThemeProvider theme={theme} media={media}>
    jsx_runtime_.jsx(external_styled_components_.ThemeProvider, {
      theme: _objectSpread(_objectSpread({}, theme_namespaceObject), media),
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    })
  );
};

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 9914:
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(3397));
module.exports = __webpack_exports__;

})();