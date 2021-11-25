exports.id = 942;
exports.ids = [942];
exports.modules = {

/***/ 693:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_AppLayout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Navigator.js






const Navigator = () => {
  let {
    0: showMenu,
    1: setShowMenu
  } = (0,external_react_.useState)(false);
  let modalRef = (0,external_react_.useRef)(null);
  let NaviList = [{
    idx: 0,
    name: "원장 인사말",
    href: "/about",
    width: 20
  }, {
    idx: 1,
    name: "앞니 심미보철",
    href: "/simmi",
    width: 20
  }, {
    idx: 2,
    name: "앞니 잇몸치료",
    href: "/itmom",
    width: 20
  }, {
    idx: 3,
    name: "임플란트",
    href: "/implant",
    width: 12
  }, {
    idx: 4,
    name: "앞니교정",
    href: "/gyojung",
    width: 12
  }, {
    idx: 5,
    name: "치료후기",
    href: "/Review/review",
    width: 12
  }];
  const VNavi = external_styled_components_default().div.withConfig({
    displayName: "Navigator__VNavi",
    componentId: "sc-1na1vfa-0"
  })(["width:100%;height:90px;display:flex;align-items:center;justify-content:center;", " ", " ", " ", " ", ""], ({
    theme
  }) => theme.mobile`
      width: 100vw;
      margin: 7px;
      border-bottom: 1px solid #4a4e69;
      padding-bottom: 10px;
    `, ({
    theme
  }) => theme.tablet`
      width: 100vw;
      margin: 7px;
           border-bottom: 1px solid #4a4e69;
      height: auto;
      padding-bottom: 10px;    
      `, ({
    theme
  }) => theme.laptop`
      height: 50px;   
      `, ({
    theme
  }) => theme.mobile`
      height: auto;
    `, ({
    theme
  }) => theme.tablet`
       height: auto;
    `);
  const NaviBox = external_styled_components_default().div.withConfig({
    displayName: "Navigator__NaviBox",
    componentId: "sc-1na1vfa-1"
  })(["font-size:22px;width:calc(100% - 35%);position:absolute;top:15px;float:left;box-sizing:border-box;border-bottom:1px solid ", ";", " ", " ", ""], props => props.theme.darkestSpace, ({
    theme
  }) => theme.laptop`
        font-size: ${theme.lFontSize.navigator};
    `, ({
    theme
  }) => theme.mobile`
       display: none;
    `, ({
    theme
  }) => theme.tablet`
       display: none;
    `);
  const NaviItem = external_styled_components_default().div.withConfig({
    displayName: "Navigator__NaviItem",
    componentId: "sc-1na1vfa-2"
  })(["margin:10px 30px 30px 25px;", " ", " ", ""], ({
    theme
  }) => theme.laptop`
        margin: 5px 13px 0px 0px;
        font-size: 0.7em;
    `, ({
    theme
  }) => theme.retina`
        margin: 10px 0px 30px 25px;
        font-size: 0.9em;
    `, ({
    theme
  }) => theme.laptopB`
        margin: 10px 10px 30px 18px;
        font-size: 1em;
    `);
  const VLogo = external_styled_components_default().div.withConfig({
    displayName: "Navigator__VLogo",
    componentId: "sc-1na1vfa-3"
  })(["float:left;width:100px;height:60px;margin:-8px 0px 0px 10px;background-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='\uB808\uC774\uC5B4_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 1057.3 711.5' style='enable-background:new 0 0 1057.3 711.5;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%2322223B;%7D%0A%3C/style%3E%3Cg%3E%3Crect x='375' y='217' class='st0' width='27.3' height='479.3'/%3E%3Cpolygon class='st0' points='506.2,589.6 506.2,217 472,217 472,624 472.3,624 472.3,624.3 588,624.3 588,589.6 '/%3E%3Cpolygon class='st0' points='674.9,458.3 661.3,458.3 661.3,217.1 626,217.1 626,458.3 528.1,458.3 528.1,494.5 626,494.5 626,696.4 661.3,696.4 661.3,494.5 674.9,494.5 '/%3E%3Cg%3E%3Cpath class='st0' d='M386,21.4c-16.8,25.2-31,52-40,81.1c-6.5,20.8-11.8,42.1-15.8,63.6c-5.1,27.8-9,55.8-12.3,83.9 c-3,25.4-4.6,50.9-6.6,76.3c-1,12.1-1.1,24.3-2,36.4c-1.2,14.6-3,29.2-4.4,43.8c-1.1,12.3-1.9,24.5-3.2,36.8 c-2.3,22.2-4.8,44.3-7.4,66.5c-2.8,22.6-5.1,45.4-13.6,66.9c-4.1,10.4-9.8,19.6-19.3,25.9c-7,4.6-16.5,4.6-21.9-1.6 c-5.1-5.9-9.6-12.5-13.1-19.6c-10.7-21.6-14.6-45.3-19.1-68.8c-4.6-24.5-7.2-49.5-10.9-74.2c-3.7-24.5-7.3-49.2-11.7-73.5 c-2.7-14.6-5.7-29.3-10.8-43.1c-8.3-22.3-21.6-41.7-39.3-57.4c-7.5-6.6-16.1-12.1-24.2-18.1c-0.7,0.6-1.5,1.1-2.2,1.7 c0.3,1.6,0.3,3.3,1.1,4.6c7.7,14,16.1,27.7,23.1,42.1c5.6,11.4,10.1,23.5,13.7,35.8c3.4,11.6,5.3,23.6,7.4,35.6 c4.1,22.1,8.3,44.1,11.8,66.3c2.6,16.2,3.9,32.8,6.6,49c3.7,21.7,7.4,43.5,12.9,64.9c6.8,26.9,21.8,48.9,42.8,66.5 c18.4,15.3,39.6,14.5,54.7-2.2c12.4-13.6,20.5-30.1,26.7-47.3c5.7-15.6,10.1-31.7,13.7-47.9c4.6-21.6,8.4-43.4,11.5-65.2 c2.7-18.8,4-37.9,5.6-56.8c2.3-26.4,4.5-52.7,6.6-79.1c1.3-17,2-34,3.2-51c2-29.5,4.2-58.9,6.4-88.4c0.6-8.7,0.9-17.5,2.7-25.9 c4.4-20.5,9.2-41,14.5-61.3c4.9-18.9,10.5-37.6,15.7-56.5c1.2-4.4,2.1-8.8,3.2-13.3c-0.5-0.3-1-0.6-1.5-0.9 C388.8,18.6,387,19.7,386,21.4z'/%3E%3Cpath class='st0' d='M955,625.7l-2.9-36.2h-0.4c-1.5-17.1-3-34.2-4.3-51.3c-0.7-9.8-0.5-19.6-1.2-29.4 c-1.6-22.2-3.3-44.4-5.3-66.6c-2.2-25-4.1-49.9-7.4-74.7c-3.1-24-7.7-47.8-14.7-71.1c-5.7-18.8-13.3-36.7-24.1-52.9 c-8.9-13.3-19.7-23.2-37.1-23.5c-13.6-0.2-25,3.7-35,12.6c-17.3,15.3-26.9,35.8-34.6,57.1c-7.4,20.4-12.2,41.6-15.4,63.2 c-3.5,23.9-6.7,47.7-10.1,71.5c-1.5,10.4-2.5,20.9-4.7,31.2c-3.6,17.2-7.3,34.3-12.1,51.1c-4.1,14.6-9.2,28.8-14.8,42.9 c-5.4,13.8-12.1,26.9-18,40.5c-0.6,1.2-0.3,2.9-0.5,4.4c1.6,0.2,3.6,0.9,4.9,0.2c5-2.7,10.4-5,14.5-8.7 c27.3-24.7,46.1-54.9,54.2-91.4c5.2-23.1,9.1-46.5,12.9-70c2.5-15.6,3.7-31.3,5.7-47c1.7-14.3,3.2-28.5,5.5-42.6 c2.3-13.9,5.7-27.7,8.6-41.4c2.8-13.2,6.8-25.9,13.9-37.4c11.6-18.6,30.3-22.9,43.6-2.9c4.9,7.3,8.1,16.2,10.4,24.8 c3.2,11.6,5.4,23.6,7.2,35.6c4.2,27.2,8.7,54.5,11.6,81.8c3.1,28.8,4.5,57.9,6.6,86.8c1.1,15.2,2.2,30.3,3.2,45.6 c1.2,18.1,2.5,36.1,3.7,54.3c0.3,4.9,0.2,6.7-1.9,7.4H734.5v4.9c-0.1,0.6-0.2,1.2-0.1,2c0.1,2.8,0.1,5.6,0.1,8.5v9.4 c0,1.3,0,2.7,0,4c0,0.3,0,0.6,0,0.9v6.6L955,625.7L955,625.7z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A\");background-repeat:no-repeat;", " ", " ", ""], ({
    theme
  }) => theme.laptop`
       width: 70px;
      height: 57px;
      margin-right: 15px;
    `, ({
    theme
  }) => theme.tablet`
       display: none;
    `, ({
    theme
  }) => theme.mobile`
       display: none;
    `);
  const MNaviBox = external_styled_components_default().div.withConfig({
    displayName: "Navigator__MNaviBox",
    componentId: "sc-1na1vfa-4"
  })(["height:30px;display:none;", " ", ""], ({
    theme
  }) => theme.mobile`
      display: flex;
    `, ({
    theme
  }) => theme.tablet`
       display: flex;
    `);
  const MNaviBtn = external_styled_components_default().div.withConfig({
    displayName: "Navigator__MNaviBtn",
    componentId: "sc-1na1vfa-5"
  })(["font-size:25px;position:absolute;left:10px;", " ", ""], ({
    theme
  }) => theme.mobile`
      display: block;
    `, ({
    theme
  }) => theme.tablet`
       display: block;
    `);
  const MLogo = external_styled_components_default().div.withConfig({
    displayName: "Navigator__MLogo",
    componentId: "sc-1na1vfa-6"
  })(["width:55px;height:38px;background-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='\uB808\uC774\uC5B4_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 1057.3 711.5' style='enable-background:new 0 0 1057.3 711.5;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%2322223B;%7D%0A%3C/style%3E%3Cg%3E%3Crect x='375' y='217' class='st0' width='27.3' height='479.3'/%3E%3Cpolygon class='st0' points='506.2,589.6 506.2,217 472,217 472,624 472.3,624 472.3,624.3 588,624.3 588,589.6 '/%3E%3Cpolygon class='st0' points='674.9,458.3 661.3,458.3 661.3,217.1 626,217.1 626,458.3 528.1,458.3 528.1,494.5 626,494.5 626,696.4 661.3,696.4 661.3,494.5 674.9,494.5 '/%3E%3Cg%3E%3Cpath class='st0' d='M386,21.4c-16.8,25.2-31,52-40,81.1c-6.5,20.8-11.8,42.1-15.8,63.6c-5.1,27.8-9,55.8-12.3,83.9 c-3,25.4-4.6,50.9-6.6,76.3c-1,12.1-1.1,24.3-2,36.4c-1.2,14.6-3,29.2-4.4,43.8c-1.1,12.3-1.9,24.5-3.2,36.8 c-2.3,22.2-4.8,44.3-7.4,66.5c-2.8,22.6-5.1,45.4-13.6,66.9c-4.1,10.4-9.8,19.6-19.3,25.9c-7,4.6-16.5,4.6-21.9-1.6 c-5.1-5.9-9.6-12.5-13.1-19.6c-10.7-21.6-14.6-45.3-19.1-68.8c-4.6-24.5-7.2-49.5-10.9-74.2c-3.7-24.5-7.3-49.2-11.7-73.5 c-2.7-14.6-5.7-29.3-10.8-43.1c-8.3-22.3-21.6-41.7-39.3-57.4c-7.5-6.6-16.1-12.1-24.2-18.1c-0.7,0.6-1.5,1.1-2.2,1.7 c0.3,1.6,0.3,3.3,1.1,4.6c7.7,14,16.1,27.7,23.1,42.1c5.6,11.4,10.1,23.5,13.7,35.8c3.4,11.6,5.3,23.6,7.4,35.6 c4.1,22.1,8.3,44.1,11.8,66.3c2.6,16.2,3.9,32.8,6.6,49c3.7,21.7,7.4,43.5,12.9,64.9c6.8,26.9,21.8,48.9,42.8,66.5 c18.4,15.3,39.6,14.5,54.7-2.2c12.4-13.6,20.5-30.1,26.7-47.3c5.7-15.6,10.1-31.7,13.7-47.9c4.6-21.6,8.4-43.4,11.5-65.2 c2.7-18.8,4-37.9,5.6-56.8c2.3-26.4,4.5-52.7,6.6-79.1c1.3-17,2-34,3.2-51c2-29.5,4.2-58.9,6.4-88.4c0.6-8.7,0.9-17.5,2.7-25.9 c4.4-20.5,9.2-41,14.5-61.3c4.9-18.9,10.5-37.6,15.7-56.5c1.2-4.4,2.1-8.8,3.2-13.3c-0.5-0.3-1-0.6-1.5-0.9 C388.8,18.6,387,19.7,386,21.4z'/%3E%3Cpath class='st0' d='M955,625.7l-2.9-36.2h-0.4c-1.5-17.1-3-34.2-4.3-51.3c-0.7-9.8-0.5-19.6-1.2-29.4 c-1.6-22.2-3.3-44.4-5.3-66.6c-2.2-25-4.1-49.9-7.4-74.7c-3.1-24-7.7-47.8-14.7-71.1c-5.7-18.8-13.3-36.7-24.1-52.9 c-8.9-13.3-19.7-23.2-37.1-23.5c-13.6-0.2-25,3.7-35,12.6c-17.3,15.3-26.9,35.8-34.6,57.1c-7.4,20.4-12.2,41.6-15.4,63.2 c-3.5,23.9-6.7,47.7-10.1,71.5c-1.5,10.4-2.5,20.9-4.7,31.2c-3.6,17.2-7.3,34.3-12.1,51.1c-4.1,14.6-9.2,28.8-14.8,42.9 c-5.4,13.8-12.1,26.9-18,40.5c-0.6,1.2-0.3,2.9-0.5,4.4c1.6,0.2,3.6,0.9,4.9,0.2c5-2.7,10.4-5,14.5-8.7 c27.3-24.7,46.1-54.9,54.2-91.4c5.2-23.1,9.1-46.5,12.9-70c2.5-15.6,3.7-31.3,5.7-47c1.7-14.3,3.2-28.5,5.5-42.6 c2.3-13.9,5.7-27.7,8.6-41.4c2.8-13.2,6.8-25.9,13.9-37.4c11.6-18.6,30.3-22.9,43.6-2.9c4.9,7.3,8.1,16.2,10.4,24.8 c3.2,11.6,5.4,23.6,7.2,35.6c4.2,27.2,8.7,54.5,11.6,81.8c3.1,28.8,4.5,57.9,6.6,86.8c1.1,15.2,2.2,30.3,3.2,45.6 c1.2,18.1,2.5,36.1,3.7,54.3c0.3,4.9,0.2,6.7-1.9,7.4H734.5v4.9c-0.1,0.6-0.2,1.2-0.1,2c0.1,2.8,0.1,5.6,0.1,8.5v9.4 c0,1.3,0,2.7,0,4c0,0.3,0,0.6,0,0.9v6.6L955,625.7L955,625.7z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A\");background-repeat:no-repeat;display:none;float:left;top:4px;left:calc(100% - 55%);position:absolute;", " ", ""], ({
    theme
  }) => theme.mobile`
     display: block;
    `, ({
    theme
  }) => theme.tablet`
     display: block;
    `);
  const MNaviModal = external_styled_components_default().div.withConfig({
    displayName: "Navigator__MNaviModal",
    componentId: "sc-1na1vfa-7"
  })(["position:absolute;float:left;display:flex;align-items:center;top:0px;width:100%;height:100vh;z-index:2;background-color:", ";background:linear-gradient( #f2e9e4ab,", ",", ",", " );transition:left 0.5s ease 0s;left:0;&._closed{left:-100%;}"], props => props.theme.lightBeige, props => props.theme.lightBeige, props => props.theme.lightBeige, props => props.theme.lightBeige);
  const MNaviList = external_styled_components_default().div.withConfig({
    displayName: "Navigator__MNaviList",
    componentId: "sc-1na1vfa-8"
  })(["width:100%;margin:0px 0px 5px 40px;"]);
  const MNaviItem = external_styled_components_default().div.withConfig({
    displayName: "Navigator__MNaviItem",
    componentId: "sc-1na1vfa-9"
  })(["border-bottom:1px solid ", ";padding:10px 0px;&._home{margin-bottom:30px;text-align:end;padding-right:30px;}"], props => props.theme.darkestSpace);
  const MMenuClose = external_styled_components_default().div.withConfig({
    displayName: "Navigator__MMenuClose",
    componentId: "sc-1na1vfa-10"
  })(["position:absolute;top:5px;left:7px;font-size:29px;background-color:#f2e9e4;"]);
  const MenuBox = external_styled_components_default().div.withConfig({
    displayName: "Navigator__MenuBox",
    componentId: "sc-1na1vfa-11"
  })(["width:calc(100% - 120px);display:flex;align-items:center;justify-content:center;"]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(VNavi, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(MNaviModal, {
      className: "_closed",
      ref: modalRef,
      children: [/*#__PURE__*/jsx_runtime_.jsx(MMenuClose, {
        onClick: e => {
          document.querySelector("body").classList.remove("no_scrolling");
          modalRef.current.classList.toggle("_closed");
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "ri-close-line"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MNaviList, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(MNaviItem, {
          className: "_home",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            children: "Home"
          })
        }), NaviList.map(item => {
          return /*#__PURE__*/jsx_runtime_.jsx(MNaviItem, {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: item.href,
              children: item.name
            })
          });
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MNaviBox, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(MNaviBtn, {
        onClick: () => {
          document.querySelector("body").classList.add("no_scrolling");
          modalRef.current.classList.toggle("_closed");
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: "ri-menu-5-line"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx(MLogo, {})
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(NaviBox, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "/",
        children: /*#__PURE__*/jsx_runtime_.jsx(VLogo, {})
      }), /*#__PURE__*/jsx_runtime_.jsx(MenuBox, {
        children: NaviList.map(item => {
          return /*#__PURE__*/jsx_runtime_.jsx(NaviItem, {
            className: `_${item.width}`,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: item.href,
              children: item.name
            })
          });
        })
      })]
    })]
  });
};

/* harmony default export */ var components_Navigator = (Navigator);
;// CONCATENATED MODULE: ./components/Footer.js






const Footer = props => {
  const FooterBox = external_styled_components_default().div.withConfig({
    displayName: "Footer__FooterBox",
    componentId: "sc-1yfi9vk-0"
  })(["display:flex;align-items:center;justify-content:center;width:100%;height:150px;background-color:", ";color:", ";font-weight:200;", ""], props => props.theme.darkSpace, props => props.theme.lightBeige, ({
    theme
  }) => theme.mobile`
     height: 125px;
     background-color: ${props => props.theme.lightBeige};
     color: ${props => props.theme.darkSpace};
    `);
  const Contents = external_styled_components_default().div.withConfig({
    displayName: "Footer__Contents",
    componentId: "sc-1yfi9vk-1"
  })(["display:flex;align-items:center;justify-items:center;justify-content:center;width:calc(100vw - 10%);", " ", ""], ({
    theme
  }) => theme.mobile`
     width: 100%;
     display: none;
    `, ({
    theme
  }) => theme.laptop`
      width: calc(100% - 100px);
      font-size: ${theme.lFontSize.footer};
    `);
  const LogoBox = external_styled_components_default().div.withConfig({
    displayName: "Footer__LogoBox",
    componentId: "sc-1yfi9vk-2"
  })(["height:120px;div{flex-shrink:0;}div:nth-child(2){width:200px;margin:-5px 0px 0px 7px;}div:first-child{width:200px;height:70px;background-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='\uB808\uC774\uC5B4_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 1417.3 1417.3' style='enable-background:new 0 0 1417.3 1417.3;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23ffffff;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M1249.6,1060.4'/%3E%3Crect x='529.1' y='549.1' class='st0' width='43.7' height='578.2'/%3E%3Cpolygon class='st0' points='691.2,998.6 691.2,549.1 649,549.1 649,1040.1 649.3,1040.1 649.3,1040.4 792.3,1040.4 792.3,998.6 '/%3E%3Cpolygon class='st0' points='899.8,840.2 883,840.2 883,549.2 839.3,549.2 839.3,840.2 718.3,840.2 718.3,883.9 839.3,883.9 839.3,1127.4 883,1127.4 883,883.9 899.8,883.9 '/%3E%3Cg%3E%3Cpath class='st0' d='M542.6,313.1c-20.8,30.4-38.3,62.7-49.5,97.8c-8,25.1-14.6,50.8-19.5,76.7c-6.3,33.5-11.1,67.3-15.2,101.2 c-3.7,30.6-5.7,61.4-8.1,92.1c-1.2,14.6-1.3,29.3-2.5,43.9c-1.5,17.6-3.7,35.2-5.5,52.8c-1.4,14.8-2.4,29.6-4,44.4 c-2.9,26.8-5.9,53.5-9.2,80.2c-3.4,27.3-6.3,54.8-16.8,80.7c-5.1,12.6-12.1,23.7-23.9,31.3c-8.7,5.6-20.4,5.6-27.1-1.9 c-6.3-7.1-11.9-15.1-16.2-23.6c-13.2-26-18.1-54.7-23.6-83c-5.7-29.6-8.9-59.7-13.5-89.5c-4.6-29.6-9-59.3-14.5-88.7 c-3.3-17.6-7-35.4-13.4-52c-10.3-26.9-26.7-50.3-48.6-69.2c-9.3-8-19.9-14.6-29.9-21.8c-0.9,0.7-1.8,1.3-2.7,2 c0.4,1.9,0.4,4,1.3,5.6c9.5,16.9,19.9,33.4,28.5,50.8c6.9,13.8,12.5,28.4,16.9,43.2c4.2,14,6.5,28.5,9.2,42.9 c5.1,26.6,10.2,53.2,14.6,80c3.2,19.6,4.8,39.6,8.2,59.1c4.6,26.2,9.2,52.5,15.9,78.3c8.4,32.4,26.9,59,52.9,80.2 c22.7,18.5,48.9,17.5,67.6-2.6c15.3-16.4,25.3-36.3,33-57c7-18.8,12.5-38.3,16.9-57.8c5.7-26,10.4-52.3,14.2-78.7 c3.3-22.7,4.9-45.7,6.9-68.5c2.9-31.8,5.6-63.6,8.1-95.4c1.6-20.5,2.5-41,4-61.5c2.5-35.6,5.2-71.1,7.9-106.6 c0.8-10.5,1.1-21.1,3.3-31.3c5.4-24.7,11.4-49.4,17.9-73.9c6-22.8,13-45.4,19.4-68.1c1.5-5.3,2.6-10.6,3.9-16 c-0.6-0.4-1.2-0.7-1.8-1.1C546.1,309.8,543.9,311.1,542.6,313.1z'/%3E%3Cpath class='st0' d='M1246,1042.1l-3.6-43.7h-0.5c-1.8-20.6-3.7-41.3-5.3-61.9c-0.9-11.8-0.6-23.7-1.5-35.5 c-2-26.8-4.1-53.6-6.5-80.4c-2.7-30.1-5.1-60.2-9.1-90.1c-3.8-29-9.5-57.7-18.2-85.8c-7-22.7-16.4-44.3-29.8-63.8 c-11-16-24.3-28-45.8-28.4c-16.8-0.3-30.9,4.5-43.3,15.2c-21.4,18.5-33.2,43.2-42.8,68.9c-9.2,24.6-15.1,50.2-19,76.2 c-4.3,28.8-8.3,57.6-12.5,86.3c-1.8,12.6-3.1,25.2-5.8,37.6c-4.4,20.7-9,41.4-14.9,61.7c-5.1,17.6-11.4,34.8-18.3,51.8 c-6.7,16.6-14.9,32.5-22.3,48.8c-0.7,1.5-0.4,3.5-0.6,5.3c2,0.2,4.4,1.1,6,0.3c6.2-3.2,12.8-6,17.9-10.5 c33.7-29.8,57-66.2,67-110.2c6.4-27.9,11.2-56.1,15.9-84.4c3.1-18.8,4.6-37.8,7-56.7c2.1-17.2,3.9-34.4,6.8-51.4 c2.9-16.8,7-33.4,10.6-50c3.4-15.9,8.4-31.3,17.2-45.1c14.3-22.4,37.4-27.6,53.9-3.5c6,8.8,10,19.5,12.9,29.9 c4,14,6.7,28.5,8.9,42.9c5.2,32.8,10.7,65.7,14.4,98.7c3.8,34.8,5.6,69.8,8.2,104.7c1.4,18.3,2.7,36.6,4,55 c1.5,21.8,3.1,43.6,4.6,65.5c0.4,5.9,0.2,8.1-2.4,8.9H973.4v5.9c-0.1,0.7-0.2,1.5-0.1,2.4c0.1,3.4,0.1,6.8,0.1,10.2v11.3 c0,1.6,0,3.2,0,4.8c0,0.4,0,0.7,0,1.1v8L1246,1042.1L1246,1042.1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A\");background-repeat:no-repeat;}", ""], ({
    theme
  }) => theme.mobile`
     display: none;
    `);
  const TextBox = external_styled_components_default().div.withConfig({
    displayName: "Footer__TextBox",
    componentId: "sc-1yfi9vk-3"
  })(["line-height:1.5;&:last-child{margin-left:20px;}", ""], ({
    theme
  }) => theme.tablet`
      font-size: ${theme.mFontSize.reviewSmall};
    `);
  const MContents = external_styled_components_default().div.withConfig({
    displayName: "Footer__MContents",
    componentId: "sc-1yfi9vk-4"
  })(["display:none;", ""], ({
    theme
  }) => theme.mobile`
    display: block;

     font-size: 12px;
     margin-top: -8px;
    `);
  const MLogoBox = external_styled_components_default().div.withConfig({
    displayName: "Footer__MLogoBox",
    componentId: "sc-1yfi9vk-5"
  })(["display:none;"]);
  const MTextBox = external_styled_components_default().div.withConfig({
    displayName: "Footer__MTextBox",
    componentId: "sc-1yfi9vk-6"
  })(["display:none;", ""], ({
    theme
  }) => theme.mobile`
    display: block;
    margin: 5px 10px;
    `);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(FooterBox, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Contents, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(LogoBox, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: "\uBE44\uB108\uC2A4\uCE58\uACFC \uC758\uC6D0"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TextBox, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: "\uC0C1\uD638: \uBE44\uB108\uC2A4\uCE58\uACFC \uC758\uC6D0"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: "\uC8FC\uC18C: \uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uAC15\uB0A8\uAD6C \uB17C\uD604\uB85C 841, JB\uBBF8\uC18C\uBE4C\uB529 B105\uD638"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: "Copyright (C) Venuss Dental Clinic. All right reserved."
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TextBox, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: "Tel: 02-3445-9716"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: "\uC0AC\uC5C5\uC790 \uB4F1\uB85D\uBC88\uD638 000-00-0000"
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MContents, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(MLogoBox, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MTextBox, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: "\uC0C1\uD638: \uBE44\uB108\uC2A4\uCE58\uACFC \uC758\uC6D0"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: "\uC8FC\uC18C: \uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uAC15\uB0A8\uAD6C \uB17C\uD604\uB85C 841, JB\uBBF8\uC18C\uBE4C\uB529 B105\uD638"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: "Copyright (C) Venuss Dental Clinic. All right reserved."
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MTextBox, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: "Tel: 02-3445-9716"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: "\uC0AC\uC5C5\uC790 \uB4F1\uB85D\uBC88\uD638 000-00-0000"
        })]
      })]
    })]
  });
};

/* harmony default export */ var components_Footer = (Footer);
;// CONCATENATED MODULE: ./components/RightButton.js





const RightButton = () => {
  const RightButtonBox = external_styled_components_default().div.withConfig({
    displayName: "RightButton__RightButtonBox",
    componentId: "sc-1009g4l-0"
  })(["position:fixed;top:200px;right:0;z-index:10;", ""], ({
    theme
  }) => theme.mobile`
      top: calc(100vh - 200px);
    `);
  const Button = external_styled_components_default().div.withConfig({
    displayName: "RightButton__Button",
    componentId: "sc-1009g4l-1"
  })(["display:flex;align-items:center;justify-content:center;width:70px;height:70px;margin-bottom:10px;box-shadow:0px 1px 2px #00000030;cursor:pointer;&:first-child{background-color:#3eaf0e;}&:nth-child(2){background-color:#ff0000;}", ""], ({
    theme
  }) => theme.mobile`
      width: 50px;
      height: 50px;
    `);
  const BlogButton = external_styled_components_default().div.withConfig({
    displayName: "RightButton__BlogButton",
    componentId: "sc-1009g4l-2"
  })(["width:60px;height:60px;background-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='\uB808\uC774\uC5B4_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 32 32' style='enable-background:new 0 0 32 32;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cg id='\uADF8\uB8F9_263' transform='translate(280 930)'%3E%3Cpath id='\uD328\uC2A4_130' class='st0' d='M-262.8-914.9c-0.4,0-0.7,0.3-0.7,0.7c0,0,0,0,0,0.1c0,0.4,0.3,0.7,0.7,0.7 c0.4,0,0.7-0.3,0.7-0.7C-262-914.5-262.3-914.8-262.8-914.9C-262.7-914.9-262.7-914.9-262.8-914.9z'/%3E%3Cpath id='\uD328\uC2A4_131' class='st0' d='M-255.7-919.9c-0.7-0.7-1.6-1.1-2.6-1.1h-11.2c-2,0-3.6,1.6-3.6,3.6l0,0v5.4 c0,2,1.6,3.6,3.6,3.6l0,0h4.1l1.2,2.4c0.1,0.2,0.2,0.2,0.4,0.2c0.1,0,0.2-0.1,0.2-0.2l1.2-2.4h4.1c2,0,3.6-1.6,3.6-3.6l0,0v-5.4 C-254.6-918.3-255-919.3-255.7-919.9z M-269-912.4c-0.4,0-0.7-0.2-0.9-0.5l0,0v0.4h-1.1v-4.7h1.1v1.8c0.2-0.3,0.6-0.4,1-0.4 c0.9,0,1.6,0.8,1.6,1.7c0,0,0,0,0,0.1C-267.3-913.2-268-912.5-269-912.4C-268.9-912.4-268.9-912.4-269-912.4z M-265.4-912.5h-1.1 v-2.7c0-0.5-0.1-0.9-0.5-1v-1.1c1,0,1.6,0.7,1.6,1.9V-912.5z M-262.7-912.4c-1,0.1-1.8-0.6-1.9-1.6s0.6-1.8,1.6-1.9 c0.1,0,0.2,0,0.3,0c1-0.1,1.8,0.7,1.9,1.6v0.1c0,1-0.8,1.7-1.7,1.7C-262.6-912.4-262.7-912.4-262.7-912.4L-262.7-912.4z M-256.7-912.8c0,1.4-0.7,2-1.9,2h-0.2v-1h0.2c0.6,0,0.8-0.4,0.8-0.9v-0.2c-0.3,0.3-0.6,0.4-1,0.4c-0.9,0-1.6-0.7-1.5-1.6v-0.1 c-0.1-0.9,0.6-1.7,1.5-1.8c0,0,0,0,0.1,0c0.4,0,0.7,0.1,0.9,0.4l0,0v-0.4h1.1V-912.8z'/%3E%3Cpath id='\uD328\uC2A4_132' class='st0' d='M-258.4-914.9c-0.4,0-0.7,0.3-0.7,0.7c0,0,0,0,0,0.1c0,0.4,0.3,0.7,0.6,0.7h0.1 c0.4,0,0.7-0.3,0.7-0.6v-0.1C-257.7-914.5-258-914.9-258.4-914.9L-258.4-914.9z'/%3E%3Cellipse id='\uD0C0\uC6D0_2' class='st0' cx='-269.2' cy='-914.1' rx='0.7' ry='0.7'/%3E%3C/g%3E%3C/svg%3E%0A\");background-repeat:no-repeat;background-color:#3eaf0e;", ""], ({
    theme
  }) => theme.mobile`
      width: 50px;
      height: 50px;
    `);
  const YoutubeButton = external_styled_components_default().div.withConfig({
    displayName: "RightButton__YoutubeButton",
    componentId: "sc-1009g4l-3"
  })(["width:40px;height:40px;background-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='\uB808\uC774\uC5B4_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 32 32' style='enable-background:new 0 0 32 32;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23fff;%7D%0A%3C/style%3E%3Cpath class='st0' d='M30.6,9c-0.4-1.3-1.4-2.3-2.7-2.7c-2.4-0.7-12-0.7-12-0.7s-9.6,0-12,0.6C2.7,6.6,1.7,7.6,1.3,9 c-0.6,2.4-0.6,7.4-0.6,7.4s0,5,0.6,7.4C1.7,25,2.7,26,4,26.4C6.4,27,16,27,16,27s9.6,0,12-0.6c1.3-0.4,2.3-1.4,2.7-2.7 c0.6-2.4,0.6-7.4,0.6-7.4S31.3,11.3,30.6,9z M12.9,20.9v-9.2l8,4.6L12.9,20.9z'/%3E%3C/svg%3E%0A\");background-repeat:no-repeat;background-color:#ff0000;", ""], ({
    theme
  }) => theme.mobile`
      width: 30px;
      height: 30px;
    `);

  const linkEvent = flag => {
    if (flag === "blog") {
      // window.location.href='http://www.codingfactory.net/';
      window.open("https://blog.naver.com/hhhhsomi/", "_blank");
    } else if (flag === "youtube") {
      window.open(" https://www.youtube.com/channel/UCMXzQE1LTyEPw3NrNoz5B8A/", "_blank");
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(RightButtonBox, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Button, {
      children: /*#__PURE__*/jsx_runtime_.jsx(BlogButton, {
        onClick: () => {
          linkEvent("blog");
        }
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Button, {
      children: /*#__PURE__*/jsx_runtime_.jsx(YoutubeButton, {
        onClick: () => {
          linkEvent("youtube");
        }
      })
    })]
  });
};

/* harmony default export */ var components_RightButton = (RightButton);
;// CONCATENATED MODULE: ./components/AppLayout.js








const AppLayout = ({
  children
}, props) => {
  const VLayout = external_styled_components_default().div.withConfig({
    displayName: "AppLayout__VLayout",
    componentId: "sc-1q3t8be-0"
  })(["width:100%;height:100%;position:relative;float:left;padding:0;font-size:20px;background-color:#f2e9e4;font-family:noto_serif;font-width:200;font-weight:300;color:#4a4e69;"]);
  const VBox = external_styled_components_default().div.withConfig({
    displayName: "AppLayout__VBox",
    componentId: "sc-1q3t8be-1"
  })(["display:flex;align-items:center;justify-content:center;"]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(VLayout, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(VBox, {
      children: /*#__PURE__*/jsx_runtime_.jsx(components_Navigator, {})
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "v_content",
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {}), /*#__PURE__*/jsx_runtime_.jsx(components_RightButton, {})]
  });
};

/* harmony default export */ var components_AppLayout = (AppLayout);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;