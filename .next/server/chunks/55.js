exports.id = 55;
exports.ids = [55];
exports.modules = {

/***/ 2055:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8577);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);



/* global kakao */






const MobileIndex = () => {
  const MobileIndexBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "mobileIndex__MobileIndexBox",
    componentId: "sc-1ksrw7h-0"
  })(["display:none;overflow:hidden;", ""], ({
    theme
  }) => theme.mobile`
   display: block;
    `);
  const InitSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "mobileIndex__InitSection",
    componentId: "sc-1ksrw7h-1"
  })(["display:flex;align-items:center;justify-content:center;width:100%;height:100vh;background-color:", ";padding-left:5px;"], props => props.theme.lightBeige);
  const TextBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "mobileIndex__TextBox",
    componentId: "sc-1ksrw7h-2"
  })(["display:inline-block;align-items:baseline;justify-content:center;color:", ";"], props => props.theme.darkSpace);
  const TextLi = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "mobileIndex__TextLi",
    componentId: "sc-1ksrw7h-3"
  })(["font-size:", ";em._em1{font-style:normal;font-weight:700;}em._em2{font-style:normal;font-weight:600;}"], props => props.theme.mFontSize.index);
  const ArrowBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "mobileIndex__ArrowBox",
    componentId: "sc-1ksrw7h-4"
  })(["display:flex;align-items:center;justify-content:center;height:200px;"]);
  const Arrow = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "mobileIndex__Arrow",
    componentId: "sc-1ksrw7h-5"
  })(["width:60px;height:100px;background-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='\uB808\uC774\uC5B4_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 283.5 481.9' style='enable-background:new 0 0 283.5 481.9;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%234A4E69;%7D%0A%3C/style%3E%3Cpath class='st0' d='M157.3,393c12.8-14.4,25.5-28.9,38.3-43.3c19.4-22,38.8-44,58.3-65.9c1.4-1.6,3-3.4,4.9-4.1 c3.7-1.5,7.4-0.8,9.8,2.7c2.5,3.6,2.2,7.3-0.7,10.6c-9.1,10.4-18.3,20.8-27.4,31.1c-36.3,41.1-72.6,82.2-108.8,123.3 c-2.8,3.2-4.4,7.5-7.1,10.7c-2.1,2.5-4.8,4.7-7.7,6.2c-2.9,1.5-6.3,2-9.6,2.6c-5.1,1.1-8-1.7-10.3-5.9c-12-22.1-24.1-44.1-36.2-66.2 c-13.8-25.1-27.5-50.2-41.3-75.3c-4.3-7.8-4.1-9.4,1.7-16c-1.9-3.6-3.8-7.2-5.7-10.9c-2.8-5.6-1.9-10.2,2.4-12.6 c4.5-2.5,9.3-0.7,12.2,4.9c18.6,35.4,37.1,70.7,55.7,106.1c0.7,1.4,1.5,2.8,3.3,4.1c0.3-5.2,0.7-10.4,0.7-15.7 c1-78.6,2.1-157.3,2.9-235.9c0.4-38.5,0.5-77,0.7-115.5c0-1.3,0-2.7,0.1-4c0.3-5.2,3.3-8.5,7.8-8.7c4.4-0.2,7.6,2.4,8.6,7.4 c2.4,12.9,5,25.8,6.8,38.8c1.1,7.7,1.6,15.5,1.3,23.3c-1.6,46-3.5,91.9-5.3,137.9c-0.2,6.2-0.6,12.3-0.1,18.5 c1.7-14.1,3.5-28.3,5.2-42.4c4.2-35.2,8.4-70.4,12.7-105.6c1.1-8.9,2.3-17.8,3.2-26.8c0.4-4.1,1.4-7.5,5.5-9.3 c4.3-1.8,7.4,0.3,10.8,3.5c0.7-2,1.3-3.6,1.8-5.3c2.9-9.4,5.8-18.8,8.8-28.1c1.9-5.9,5.9-8.3,10.8-6.8c4.7,1.4,6.6,6,4.8,11.9 c-1.7,5.7-3.3,11.5-5.4,17.1c-7.2,19.2-9,39.5-12,59.6c-6.3,41.5-12.7,82.9-18.3,124.5c-3.2,23.6-5.5,47.3-7.6,71 c-2.3,26.4-4,52.8-5.9,79.2c-0.1,1.7,0,3.5,0,6.7c1.2-2.3,1.8-3.5,2.3-4.6c13.1-29.1,26.2-58.3,39.3-87.4c0.8-1.9,2.3-3.8,3.9-4.9 c6.5-4.6,13.4-8.8,19.9-13.3c3.9-2.7,7.7-4,11.9-0.7c3.4,2.7,3.8,6.7,1.1,12.2c-15.6,32.2-31.3,64.4-46.9,96.5 c-0.7,1.4-1.3,2.9-2,4.4C156.8,392.7,157,392.9,157.3,393z'/%3E%3C/svg%3E%0A\");"]);
  const TitleBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "mobileIndex__TitleBox",
    componentId: "sc-1ksrw7h-6"
  })(["display:inline-block;float:", ";", ""], props => props.float, props => {
    if (props.float === "center") {
      return "display: flex; align-items: center; justify-content: center;";
    }
  });
  const Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "mobileIndex__Title",
    componentId: "sc-1ksrw7h-7"
  })(["font-size:", ";padding:0px 30px 5px 10px;margin:20px 10px 20px 0px;color:", ";border-bottom:1px solid ", ";", ";"], props => props.theme.mFontSize.indexTitle, props => props.theme.darkSpace, props => props.theme.darkSpace, props => {
    console.log(props.float);

    if (props.dark) {
      return `color: ${props.theme.lightBeige}; border-bottom: 1px solid ${props.theme.lightBeige}`;
    }

    if (props.float === "center") {
      return "padding: 5px 20px;";
    }
  });
  const ImageSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "mobileIndex__ImageSection",
    componentId: "sc-1ksrw7h-8"
  })([""]);
  const ImageBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "mobileIndex__ImageBox",
    componentId: "sc-1ksrw7h-9"
  })(["float:", ";width:90%;height:150px;", ""], props => props.float, props => {
    if (props.float === "center") {
      return "float: left; width: 100%";
    }
  });
  const Image = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "mobileIndex__Image",
    componentId: "sc-1ksrw7h-10"
  })(["background-image:url(", ");position:relative;width:100%;height:100%;background-size:cover;background-repeat:no-repeat;background-position:center center;"], props => props.imgSrc);
  const ReviewSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "mobileIndex__ReviewSection",
    componentId: "sc-1ksrw7h-11"
  })(["display:inline-block;align-items:center;justify-content:center;width:100%;height:100%;margin-top:100px;background-color:", ";"], props => props.theme.lightBeige);
  const ReviewBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "mobileIndex__ReviewBox",
    componentId: "sc-1ksrw7h-12"
  })(["display:flex;align-items:center;justify-content:center;width:100%;height:100%;"]);
  const ReviewFrame = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "mobileIndex__ReviewFrame",
    componentId: "sc-1ksrw7h-13"
  })(["position:absolute;border:7px solid white;width:calc(100% - 120px);height:300px;margin:0% 7%;margin-top:35px;opacity:0.8;z-index:1;"]);
  const ReviewListBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "mobileIndex__ReviewListBox",
    componentId: "sc-1ksrw7h-14"
  })(["width:100%;padding-top:40px;margin:0% 7%;z-index:2;"]);
  const ReviewList = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "mobileIndex__ReviewList",
    componentId: "sc-1ksrw7h-15"
  })(["width:100%;margin-bottom:10px;"]);
  const InfoSection = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "mobileIndex__InfoSection",
    componentId: "sc-1ksrw7h-16"
  })(["display:flex;align-items:center;justify-content:center;margin-top:100px;"]);
  const InfoBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "mobileIndex__InfoBox",
    componentId: "sc-1ksrw7h-17"
  })(["width:100%;height:100%;padding-bottom:20px;background-color:", ";"], props => props.theme.darkSpace);
  const MapBox = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "mobileIndex__MapBox",
    componentId: "sc-1ksrw7h-18"
  })(["#map_container_mobile{width:100%;height:350px;margin-top:10px;}"]);
  const InfoList = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "mobileIndex__InfoList",
    componentId: "sc-1ksrw7h-19"
  })(["color:", ";"], props => props.theme.lightBeige);
  const InfoUl = styled_components__WEBPACK_IMPORTED_MODULE_2___default().ul.withConfig({
    displayName: "mobileIndex__InfoUl",
    componentId: "sc-1ksrw7h-20"
  })(["list-style:none;", ""], props => {
    if (props.title) {
      return `font-size: ${props.theme.mFontSize.semiBold};`;
    } else if (props.bold) {
      return `font-size: ${props.theme.mFontSize.bold}; font-weight: 600;`;
    } else {
      return `font-size: ${props.theme.mFontSize.default};`;
    }
  });
  const InfoLine = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    displayName: "mobileIndex__InfoLine",
    componentId: "sc-1ksrw7h-21"
  })(["width:50%;height:1px;background-color:", ";margin-left:42px;"], props => props.theme.lightBeige);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const mapCenter = new kakao.maps.LatLng(37.525111197891455, 127.02800845792338);
    const clinicCoor = new kakao.maps.LatLng(37.524060723212266, 127.02799512416581);
    const mapContainer = document.getElementById("map_container_mobile");
    const markers = [{
      position: clinicCoor,
      text: "비너스 치과"
    }];
    const mapOptions = {
      center: mapCenter,
      level: 3,
      marker: markers
    };
    const map = new kakao.maps.StaticMap(mapContainer, mapOptions);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    aos__WEBPACK_IMPORTED_MODULE_3___default().init({
      duration: 1000
    });
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MobileIndexBox, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InitSection, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TextBox, {
        className: "fade-in-box",
        "data-aos": "fade-down",
        "data-aos-offset": "100",
        "data-aos-easing": "ease-in-sine",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TextLi, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
            className: "_em2",
            children: "\uC790\uC5F0"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TextLi, {
          children: "\uC2A4\uB7FD\uAC8C"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(TextLi, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
            className: "_em1",
            children: "\uC544\uB984\uB2E4\uC6CC"
          }), "\uC9C0\uB294"]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TextLi, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
            className: "_em2",
            children: "\uCE58\uACFC"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ArrowBox, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Arrow, {})
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ImageSection, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
        href: "/simmi",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TitleBox, {
          float: "left",
          "data-aos": "fade-right",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
            children: "\uC55E\uB2C8 \uC2EC\uBBF8\uBCF4\uCCA0"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
        href: "/simmi",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ImageBox, {
          float: "right",
          "data-aos": "fade-left",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Image, {
            imgSrc: "/image/profession_2.jpg"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
        href: "/itmom",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TitleBox, {
          float: "right",
          "data-aos": "fade-left",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
            children: "\uC55E\uB2C8 \uC787\uBAB8\uCE58\uB8CC"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
        href: "/itmom",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ImageBox, {
          float: "left",
          "data-aos": "fade-right",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Image, {
            imgSrc: "/image/profession_4.jpg"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
        href: "/implant",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TitleBox, {
          float: "left",
          "data-aos": "fade-right",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
            children: "\uC784\uD50C\uB780\uD2B8"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
        href: "/implant",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ImageBox, {
          float: "center",
          "data-aos": "fade-right",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Image, {
            imgSrc: "/image/profession_1.jpg"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
        href: "/gyojung",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TitleBox, {
          float: "right",
          "data-aos": "fade-left",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
            children: "\uC55E\uB2C8 \uAD50\uC815"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
        href: "/gyojung",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ImageBox, {
          float: "left",
          "data-aos": "fade-right",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Image, {
            imgSrc: "/image/profession_3.jpg"
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ReviewSection, {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TitleBox, {
        float: "center",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
          float: "center",
          children: "\uCE58\uB8CC \uD6C4\uAE30"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ReviewBox, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ReviewFrame, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ReviewListBox, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ReviewList, {
            children: "\uB108\uBB34 \uB5A8\uB838\uB294\uB370 \uC790\uACE0 \uC77C\uC5B4\uB098\uB2C8 \uB2E4 \uB05D\uB098\uC788\uC5C8\uC5B4\uC694"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ReviewList, {
            children: "\uAC15\uB825 \uCD94\uCC9C\uD569\uB2C8\uB2E4!"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ReviewList, {
            children: "\uB108\uBB34 \uAC10\uC0AC\uD558\uACE0 \uC88B\uC558\uC2B5\uB2C8\uB2E4."
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ReviewList, {
            children: "\uB450\uB824\uC6C0\uC5C6\uC774 \uD3B8\uD788 \uCE58\uB8CC\uB97C \uBC1B\uC744 \uC218 \uC788\uC5C8\uC5B4\uC694"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ReviewList, {
            children: "\uC6D0\uC7A5\uB2D8 \uBBFF\uACE0\uC788\uC5C8\uB2E4\uAD6C "
          })]
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InfoSection, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InfoBox, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TitleBox, {
          float: "right",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
            dark: true,
            children: "\uC624\uC2DC\uB294 \uAE38"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(MapBox, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
            type: "text/javascript",
            src: "//dapi.kakao.com/v2/maps/sdk.js?appkey=6014a162109085f1166e97d2dd503983"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            id: "map_container_mobile"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InfoList, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InfoUl, {
            title: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              children: "\uC8FC\uC18C"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InfoUl, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              children: "\uAC15\uB0A8\uAD6C \uB17C\uD604\uB85C 841, JB\uBBF8\uC18C\uBE4C\uB529 B105\uD638, \uBE44\uB108\uC2A4\uCE58\uACFC (\uC555\uAD6C\uC815\uC5ED 4\uBC88\uCD9C\uAD6C)"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InfoLine, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InfoUl, {
            title: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              children: "\uC9C4\uB8CC\uC2DC\uAC04"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(InfoUl, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              children: "\uD3C9\uC77C \uC624\uC804 10:30 - \uC624\uD6C4 06:00"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              children: "\uD1A0\uC694\uC77C \uC624\uC804 10:30 - \uC624\uD6C4 02:00"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              children: "\uBAA9\uC694\uC77C / \uC77C\uC694\uC77C / \uACF5\uD734\uC77C \uD734\uBB34"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InfoLine, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InfoUl, {
            title: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              children: "\uBB38\uC758\uC804\uD654"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InfoUl, {
            bold: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              children: "02-3445-9716"
            })
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MobileIndex);

/***/ })

};
;