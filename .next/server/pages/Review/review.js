(function() {
var exports = {};
exports.id = 337;
exports.ids = [337,911];
exports.modules = {

/***/ 301:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var _axios = _interopRequireDefault(__webpack_require__(2376));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let prod = "venusdental.co.kr";
let dev = "localhost:8001";

const createReview = async param => {
  let result = await _axios.default.post("http://" + dev + "/review/create", param);
  return result;
};

const getReview = async () => {
  let result = await _axios.default.get("http://" + dev + "/review/list", {});
  return result.data;
};

module.exports = {
  createReview: createReview,
  getReview: getReview
};

/***/ }),

/***/ 8281:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ review; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/AppLayout.js + 4 modules
var AppLayout = __webpack_require__(292);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./pages/Review/review.json
var Review_review = __webpack_require__(5255);
// EXTERNAL MODULE: ./pages/Review/reviewOne.js
var reviewOne = __webpack_require__(6750);
// EXTERNAL MODULE: ./fetch/fetch.js
var fetch = __webpack_require__(301);
;// CONCATENATED MODULE: ./components/WriteArea.js





const WriteBox = external_styled_components_default().div.withConfig({
  displayName: "WriteArea__WriteBox",
  componentId: "sc-dvd318-0"
})(["position:relative;width:100%;overflow:hidden;"]);
const WriteSlide = external_styled_components_default().div.withConfig({
  displayName: "WriteArea__WriteSlide",
  componentId: "sc-dvd318-1"
})(["&.show{height:500px;transition:height 0.7s ease-out;margin-bottom:40px;}&.hide{height:0px;transition:height 0.7s ease-out;margin-bottom:0px;}transition:height 0.7s ease-out;"]);
const WTextBox = external_styled_components_default().div.withConfig({
  displayName: "WriteArea__WTextBox",
  componentId: "sc-dvd318-2"
})(["input,textarea{font-family:noto_serif;border:1px solid #ccc;outline:none;}input{padding-left:12px;}textarea{resize:none;}", ""], ({
  theme
}) => theme.mobile`
    margin: 0px 15px;
    width: calc(100% - 28px);
  `);
const WTitAuthorBox = external_styled_components_default().div.withConfig({
  displayName: "WriteArea__WTitAuthorBox",
  componentId: "sc-dvd318-3"
})(["display:flex;align-items:center;margin-bottom:15px;"]);
const WTitleArea = external_styled_components_default().input.withConfig({
  displayName: "WriteArea__WTitleArea",
  componentId: "sc-dvd318-4"
})(["width:calc(100% - 200px);height:40px;margin-right:20px;font-size:", ";"], props => props.theme.mFontSize.default);
const WAuthorArea = external_styled_components_default().input.withConfig({
  displayName: "WriteArea__WAuthorArea",
  componentId: "sc-dvd318-5"
})(["width:180px;height:40px;padding:10px;font-size:", ";"], props => props.theme.mFontSize.default);
const WTextArea = external_styled_components_default().textarea.withConfig({
  displayName: "WriteArea__WTextArea",
  componentId: "sc-dvd318-6"
})(["width:100%;height:400px;padding:15px;font-size:", ";", ""], props => props.theme.mFontSize.default, ({
  theme
}) => theme.mobile`
    padding: 5px;
    font-size: ${props => props.theme.mFontSize.review};
    `);
const SubmitButtonBox = external_styled_components_default().div.withConfig({
  displayName: "WriteArea__SubmitButtonBox",
  componentId: "sc-dvd318-7"
})(["display:flex;align-items:center;justify-content:end;", ""], ({
  theme
}) => theme.mobile`
    margin: 0px 15px;
  `);
const SubmitButton = external_styled_components_default().div.withConfig({
  displayName: "WriteArea__SubmitButton",
  componentId: "sc-dvd318-8"
})(["display:flex;align-items:center;justify-content:center;width:80px;height:30px;background-color:", ";color:", ";font-size:15px;cursor:pointer;"], props => props.theme.darkSpace, props => props.theme.lightBeige);
const PasswordBox = external_styled_components_default().input.withConfig({
  displayName: "WriteArea__PasswordBox",
  componentId: "sc-dvd318-9"
})(["width:100px;height:30px;padding:10px;border:1px solid #ccc;margin-right:20px;outline:none;font-size:", ";font-family:noto_serif;"], props => props.theme.mFontSize.reviewSmall);

const WriteArea = props => {
  const titleRef = (0,external_react_.useRef)(null);
  const authorRef = (0,external_react_.useRef)(null);
  const contentRef = (0,external_react_.useRef)(null);
  const passwordRef = (0,external_react_.useRef)(null);

  const submitReview = async () => {
    const param = {
      title: titleRef.current.value,
      author: authorRef.current.value,
      content: contentRef.current.value,
      password: passwordRef.current.value,
      show_yn: "Y"
    };
    const paramName = ["제목", "글쓴이", "내용", "비밀번호"];
    let isOkay = true;
    let missedIdx = "";
    let paramKeys = Object.keys(param);

    for (let i = 0; paramKeys.length > i; i++) {
      if (param[paramKeys[i]] === "") {
        isOkay = false;
        missedIdx = i;
        break;
      }
    }

    if (isOkay === true) {
      const createFetch = await (0,fetch.createReview)(param);

      if (createFetch.status === 200) {
        props.refreshReview();
      }
    } else alert(paramName[missedIdx] + "를 입력해주세요.");
  };

  return /*#__PURE__*/jsx_runtime_.jsx(WriteBox, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(WriteSlide, {
      className: props.writeOpen ? "show" : "hide",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(WTextBox, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(WTitAuthorBox, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(WTitleArea, {
            placeholder: "\uC81C\uBAA9",
            ref: titleRef,
            autocomplete: "off"
          }), /*#__PURE__*/jsx_runtime_.jsx(WAuthorArea, {
            placeholder: "\uAE00\uC4F4\uC774",
            ref: authorRef,
            autocomplete: "off"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(WTextArea, {
          placeholder: "\uD6C4\uAE30\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
          ref: contentRef,
          autocomplete: "off"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SubmitButtonBox, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(PasswordBox, {
          placeholder: "\uBE44\uBC00\uBC88\uD638",
          type: "password",
          ref: passwordRef,
          autocomplete: "off"
        }), /*#__PURE__*/jsx_runtime_.jsx(SubmitButton, {
          onClick: () => submitReview(),
          children: "\uC81C\uCD9C"
        })]
      })]
    })
  });
};

/* harmony default export */ var components_WriteArea = (WriteArea);
;// CONCATENATED MODULE: ./pages/Review/review.js












const WriteButtonBox = props => {
  const {
    0: writeOpen,
    1: setWriteOpen
  } = (0,external_react_.useState)(false);
  const WriteButton = external_styled_components_default().div.withConfig({
    displayName: "review__WriteButton",
    componentId: "sc-588jn-0"
  })(["display:flex;align-items:center;justify-content:end;height:50px;._review_btn{font-size:18px;cursor:pointer;}._review_btn:hover{color:#000;}._search{margin-right:15px;}._write{}._close{display:flex;align-items:center;justify-content:center;width:18px;height:18px;background-color:", ";margin-bottom:2px;color:", ";}._close:hover{color:", ";}", ""], props => props.theme.darkSpace, props => props.theme.lightBeige, props => props.theme.lightBeige, ({
    theme
  }) => theme.mobile`
    margin: 0px 15px;
  `);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(WriteButton, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "_review_btn _search",
        title: "\uAC80\uC0C9",
        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "ri-search-2-line"
        })
      }), writeOpen === false ? /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "_review_btn _write",
        title: "\uAE00\uC4F0\uAE30",
        onClick: () => {
          setWriteOpen(writeOpen !== true);
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "ri-edit-box-line"
        })
      }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "_review_btn _close",
        onClick: () => {
          setWriteOpen(writeOpen !== true);
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "ri-close-line"
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(components_WriteArea, {
      writeOpen: writeOpen,
      refreshReview: props.refreshReview
    })]
  });
};

const Review = ({
  review
}) => {
  const reviewJson = Review_review;
  let {
    0: reviewList,
    1: setReviewList
  } = (0,external_react_.useState)([...review, ...reviewJson]);
  const Title = external_styled_components_default().div.withConfig({
    displayName: "review__Title",
    componentId: "sc-588jn-1"
  })(["display:flex;justify-content:center;align-items:center;height:130px;font-weight:600;font-size:30px;", ""], ({
    theme
  }) => theme.mobile`
     font-size: ${theme.mFontSize.semiBold};
     height: 100px;
  `);
  const ContentsBox = external_styled_components_default().div.withConfig({
    displayName: "review__ContentsBox",
    componentId: "sc-588jn-2"
  })(["display:flex;align-items:center;justify-content:center;width:100%;flex-shrink:0;", ""], ({
    theme
  }) => theme.mobile`
      justify-content: end;
    `);
  const Contents = external_styled_components_default().div.withConfig({
    displayName: "review__Contents",
    componentId: "sc-588jn-3"
  })(["display:flex;align-items:center;justify-items:center;justify-content:center;width:calc(100% - 500px);overflow:hidden;box-shadow:-1px 1px 4px #51515157;img{height:inherit;}", " ", " ", " ", ""], ({
    theme
  }) => theme.laptop`
        width: calc(100vw - 100px);
        height: 350px;
    `, ({
    theme
  }) => theme.desktop`
        width: calc(100vw - 60%);
        height: auto;
    `, ({
    theme
  }) => theme.mobile`
        height: 150px;
        width: 100%;
        img {
         height: 150px;
          object-fit: cover;
        }
    `, ({
    theme
  }) => theme.tablet`
          height: 300px;
        width: 100%;
       `);
  const BoardBack = external_styled_components_default().div.withConfig({
    displayName: "review__BoardBack",
    componentId: "sc-588jn-4"
  })(["width:100%;display:flex;align-items:center;justify-content:center;"]);
  const BoardBox = external_styled_components_default().div.withConfig({
    displayName: "review__BoardBox",
    componentId: "sc-588jn-5"
  })(["width:calc(100% - 500px);", " ", " ", " ", ""], ({
    theme
  }) => theme.laptop`
        width: calc(100vw - 20%);
        height: 350px;
    `, ({
    theme
  }) => theme.desktop`
        width: calc(100vw - 60%);
        height: auto;
    `, ({
    theme
  }) => theme.mobile`
        width: 100%;
    `, ({
    theme
  }) => theme.tablet`
        width: calc(100% - 10%);
       `);

  const refreshReview = async () => {
    const reviewFetch = await (0,fetch.getReview)();
    setReviewList([...reviewFetch, ...reviewJson]);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "\uCE58\uB8CC\uD6C4\uAE30 | Venuss"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        content: "initial-scale=1, maximum-scale=1, user-scalable=0",
        name: "viewport"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(AppLayout/* default */.Z, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
        children: "\uBE44\uB108\uC2A4 \uCE58\uB8CC\uD6C4\uAE30"
      }), /*#__PURE__*/jsx_runtime_.jsx(ContentsBox, {
        violet: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(Contents, {
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/image/review_1.jpg",
            width: "100%",
            height: "auto",
            alt: "\uC774\uBBF8\uC9C0\uB97C \uBD88\uB7EC\uC62C \uC218 \uC5C6\uC2B5\uB2C8\uB2E4."
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(BoardBack, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(BoardBox, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(WriteButtonBox, {
            refreshReview: () => {
              console.log('refresh!!!!!!!!!!!!!!!1');
              refreshReview();
            }
          }), reviewList.map((item, idx) => {
            let boxId = `review_${idx}`;
            return /*#__PURE__*/jsx_runtime_.jsx(reviewOne.default, {
              review: item,
              id: boxId,
              showYn: id => {
                return boxId === id;
              }
            });
          })]
        })
      })]
    })]
  });
};

Review.getInitialProps = async ctx => {
  const reviewFetch = await (0,fetch.getReview)();
  return {
    review: reviewFetch
  };
};

/* harmony default export */ var review = (Review);

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,382,255,750], function() { return __webpack_exec__(8281); });
module.exports = __webpack_exports__;

})();