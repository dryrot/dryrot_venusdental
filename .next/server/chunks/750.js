exports.id = 750;
exports.ids = [750];
exports.modules = {

/***/ 6750:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);




const ReviewBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "reviewOne__ReviewBox",
  componentId: "sc-15dw4hl-0"
})(["width:100%;background-color:#ffffffc7;margin-bottom:50px;overflow:hidden;&:first-child{margin-top:100px;", "}&:last-child{margin-bottom:200px;", "}", ""], ({
  theme
}) => theme.mobile`
    margin-top: 50px;
  `, ({
  theme
}) => theme.mobile`
    margin-bottom: 80px;
  `, ({
  theme
}) => theme.mobile`
    margin: 50px 15px;
    width: calc(100% - 28px);
  `);
const ReviewMore = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "reviewOne__ReviewMore",
  componentId: "sc-15dw4hl-1"
})(["display:flex;align-items:center;justify-content:center;position:relative;z-index:2;width:100%;height:180px;background:linear-gradient(#ffffff00,#ffffffeb,#fff);._more_btn{font-weight:600;font-size:35px;", "}._more_btn:hover{color:", ";}"], ({
  theme
}) => theme.mobile`
          font-size: 25px;
    `, props => props.theme.temp1);

const getHeight = id => {
  let element = document.querySelector(`#${id}`);
  return element.scrollHeight + "px";
};

const ReviewContent = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "reviewOne__ReviewContent",
  componentId: "sc-15dw4hl-2"
})(["position:relative;width:100%;padding:0px 30px;height:", ";transition:height 0.7s ease-out;", ""], props => props.showYn === true ? getHeight(props.boxId) : "200px", ({
  theme
}) => theme.mobile`
    padding: 12px;
    font-size: ${theme.mFontSize.review};
    font-weight: 100;
    `);

const ReviewOne = props => {
  let review = props.review;
  const {
    0: showYn,
    1: setShowYn
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const ReviewTop = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "reviewOne__ReviewTop",
    componentId: "sc-15dw4hl-3"
  })(["background-color:", ";width:100%;height:10px;", ""], props => props.theme.darkSpace, ({
    theme
  }) => theme.mobile`
      height: 5px;
    `);
  const ReviewTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "reviewOne__ReviewTitle",
    componentId: "sc-15dw4hl-4"
  })(["float:left;width:100%;font-weight:400;padding:15px 30px;border-bottom:1px solid #ccc;margin-bottom:40px;font-size:22px;._title{float:left;}._author{float:right;display:flex;align-items:center;margin-left:20px;color:#979cc0;font-weight:200;font-size:20px;i{margin:0px 10px -7px 0px;}", "}._line{float:left;width:40px;height:50%;border-bottom:1px solid #fff;}._more{float:right;", "}", ""], ({
    theme
  }) => theme.mobile`
      font-size: ${theme.mFontSize.reviewSmall};
    `, ({
    theme
  }) => theme.mobile`
      display: none;
    `, ({
    theme
  }) => theme.mobile`
      font-size: ${theme.mFontSize.review};
          padding: 10px;
    `);
  const ReviewInfo = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "reviewOne__ReviewInfo",
    componentId: "sc-15dw4hl-5"
  })(["display:flex;width:100%;font-size:18px;color:#979cc0;margin-top:20px;div{margin-right:10px;}}", ""], ({
    theme
  }) => theme.mobile`
      font-size: ${theme.mFontSize.review};
    `);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    document.querySelector("body").classList.remove("no_scrolling");
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ReviewBox, {
    id: props.id,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ReviewTop, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ReviewTitle, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "_title",
        children: [(review === null || review === void 0 ? void 0 : review.title) || "", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
          className: "_author",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
            className: "ri-subtract-line"
          }), (review === null || review === void 0 ? void 0 : review.author) || "", "\uB2D8"]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "_more",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
          className: "ri-more-line"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ReviewContent, {
      boxId: props.id,
      showYn: showYn,
      children: [(review === null || review === void 0 ? void 0 : review.content) !== undefined ? review.content.split("\n").map(str => {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          children: str
        });
      }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ReviewInfo, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          children: (review === null || review === void 0 ? void 0 : review.author) || ""
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ReviewMore, {
      showYn: showYn,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "_more_btn",
        onClick: () => {
          if (showYn !== true) {
            setShowYn(props.showYn(props.id));
          } else {
            setShowYn(false);
          }
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
          className: showYn === true ? "ri-arrow-down-s-fill" : "ri-arrow-up-s-fill"
        })
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ReviewOne);

/***/ })

};
;