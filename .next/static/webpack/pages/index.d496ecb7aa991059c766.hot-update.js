webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/blog-section.js":
/*!**************************************!*\
  !*** ./src/sections/blog-section.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BlogSection; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ \"./src/components/section-header.js\");\n/* harmony import */ var components_post_card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/post-card.js */ \"./src/components/post-card.js\");\n/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/button-group */ \"./src/components/button-group.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\nvar _jsxFileName = \"/Users/tunghoang/Datagency/datagency/src/sections/blog-section.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\n\n\n\n\nvar responsive = {\n  desktop: {\n    breakpoint: {\n      max: 3000,\n      min: 1310\n    },\n    items: 4,\n    slidesToSlide: 4 // optional, default to 1.\n\n  },\n  laptop: {\n    breakpoint: {\n      max: 1310,\n      min: 1024\n    },\n    items: 3,\n    slidesToSlide: 3 // optional, default to 1.\n\n  },\n  tablet: {\n    breakpoint: {\n      max: 1024,\n      min: 640\n    },\n    items: 2,\n    slidesToSlide: 2 // optional, default to 1.\n\n  },\n  mobile: {\n    breakpoint: {\n      max: 639,\n      min: 0\n    },\n    items: 1,\n    slidesToSlide: 1 // optional, default to 1.\n\n  }\n};\nfunction BlogSection(_ref) {\n  var _this = this;\n\n  var allPostsData = _ref.allPostsData;\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"section\", {\n    sx: {\n      variant: 'section.news'\n    },\n    id: \"blog\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    sx: styles.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    slogan: \"our blog\",\n    title: \"Get updated on insights and tips for data & analytics\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.carouselWrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    additionalTransfrom: 0,\n    arrows: false,\n    autoPlaySpeed: 3000,\n    centerMode: false,\n    className: \"\",\n    containerClass: \"carousel-container\",\n    customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_button_group__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 32\n      }\n    }),\n    dotListClass: \"test\",\n    draggable: true,\n    focusOnSelect: false,\n    infinite: true,\n    itemClass: \"\",\n    keyBoardControl: true,\n    minimumTouchDrag: 80,\n    renderButtonGroupOutside: true,\n    renderDotsOutside: false,\n    responsive: responsive,\n    showDots: false,\n    sliderClass: \"\",\n    slidesToSlide: 1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }, allPostsData.map(function (_ref2) {\n    var id = _ref2.id,\n        thumbnail = _ref2.thumbnail,\n        date = _ref2.date,\n        title = _ref2.title,\n        excerpt = _ref2.excerpt,\n        author = _ref2.author;\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_post_card_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: id,\n      postLink: \"/blog/\".concat(id),\n      src: thumbnail,\n      title: title,\n      excerpt: excerpt,\n      date: date,\n      authorName: author,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 15\n      }\n    });\n  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    display: \"flex\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"primary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }\n  }, \"Read More\"))));\n}\n_c = BlogSection;\nvar styles = {\n  container: {\n    minHeight: 'inherit',\n    display: 'flex',\n    flexDirection: 'column',\n    justifyContent: 'center'\n  },\n  carouselWrapper: {\n    '.carousel-container': {\n      mx: -3\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jsb2ctc2VjdGlvbi5qcz8wZDkwIl0sIm5hbWVzIjpbInJlc3BvbnNpdmUiLCJkZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwic2xpZGVzVG9TbGlkZSIsImxhcHRvcCIsInRhYmxldCIsIm1vYmlsZSIsIkJsb2dTZWN0aW9uIiwiYWxsUG9zdHNEYXRhIiwidmFyaWFudCIsInN0eWxlcyIsImNvbnRhaW5lciIsImNhcm91c2VsV3JhcHBlciIsIm1hcCIsImlkIiwidGh1bWJuYWlsIiwiZGF0ZSIsInRpdGxlIiwiZXhjZXJwdCIsImF1dGhvciIsIm1pbkhlaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwianVzdGlmeUNvbnRlbnQiLCJteCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRztBQUNqQkMsU0FBTyxFQUFFO0FBQ1BDLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxTQUFHLEVBQUU7QUFBbEIsS0FETDtBQUVQQyxTQUFLLEVBQUUsQ0FGQTtBQUdQQyxpQkFBYSxFQUFFLENBSFIsQ0FHVzs7QUFIWCxHQURRO0FBTWpCQyxRQUFNLEVBQUU7QUFDTkwsY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQUROO0FBRU5DLFNBQUssRUFBRSxDQUZEO0FBR05DLGlCQUFhLEVBQUUsQ0FIVCxDQUdZOztBQUhaLEdBTlM7QUFXakJFLFFBQU0sRUFBRTtBQUNOTixjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCLEtBRE47QUFFTkMsU0FBSyxFQUFFLENBRkQ7QUFHTkMsaUJBQWEsRUFBRSxDQUhULENBR1k7O0FBSFosR0FYUztBQWdCakJHLFFB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V0FBTyxFQUFFLE1BRkE7QUFHVEMsaUJBQWEsRUFBRSxRQUhOO0FBSVRDLGtCQUFjLEVBQUU7QUFKUCxHQURFO0FBT2JYLGlCQUFlLEVBQUU7QUFDZiwyQkFBdUI7QUFDckJZLFFBQUUsRUFBRSxDQUFDO0FBRGdCO0FBRFI7QUFQSixDQUFmIiwiZmlsZSI6Ii4vc3JjL3NlY3Rpb25zL2Jsb2ctc2VjdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3gsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xuaW1wb3J0IFBvc3RDYXJkIGZyb20gJ2NvbXBvbmVudHMvcG9zdC1jYXJkLmpzJztcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICdjb21wb25lbnRzL2J1dHRvbi1ncm91cCc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbXVsdGktY2Fyb3VzZWwnO1xuaW1wb3J0IHsgRmFGaWxlRXhjZWwgfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5cbmNvbnN0IHJlc3BvbnNpdmUgPSB7XG4gIGRlc2t0b3A6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMzEwIH0sXG4gICAgaXRlbXM6IDQsXG4gICAgc2xpZGVzVG9TbGlkZTogNCwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cbiAgfSxcbiAgbGFwdG9wOiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDEzMTAsIG1pbjogMTAyNCB9LFxuICAgIGl0ZW1zOiAzLFxuICAgIHNsaWRlc1RvU2xpZGU6IDMsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gIH0sXG4gIHRhYmxldDoge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDY0MCB9LFxuICAgIGl0ZW1zOiAyLFxuICAgIHNsaWRlc1RvU2xpZGU6IDIsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gIH0sXG4gIG1vYmlsZToge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA2MzksIG1pbjogMCB9LFxuICAgIGl0ZW1zOiAxLFxuICAgIHNsaWRlc1RvU2xpZGU6IDEsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nU2VjdGlvbih7YWxsUG9zdHNEYXRhfSkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIHN4PXt7IHZhcmlhbnQ6ICdzZWN0aW9uLm5ld3MnIH19IGlkPSdibG9nJz5cbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgIHNsb2dhbj1cIm91ciBibG9nXCJcbiAgICAgICAgICB0aXRsZT1cIkdldCB1cGRhdGVkIG9uIGluc2lnaHRzIGFuZCB0aXBzIGZvciBkYXRhICYgYW5hbHl0aWNzXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY2Fyb3VzZWxXcmFwcGVyfT5cbiAgICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICAgIGFkZGl0aW9uYWxUcmFuc2Zyb209ezB9XG4gICAgICAgICAgICBhcnJvd3M9e2ZhbHNlfVxuICAgICAgICAgICAgYXV0b1BsYXlTcGVlZD17MzAwMH1cbiAgICAgICAgICAgIGNlbnRlck1vZGU9e2ZhbHNlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzPVwiY2Fyb3VzZWwtY29udGFpbmVyXCJcbiAgICAgICAgICAgIGN1c3RvbUJ1dHRvbkdyb3VwPXs8QnV0dG9uR3JvdXAgLz59XG4gICAgICAgICAgICBkb3RMaXN0Q2xhc3M9XCJ0ZXN0XCJcbiAgICAgICAgICAgIGRyYWdnYWJsZT17dHJ1ZX1cbiAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q9e2ZhbHNlfVxuICAgICAgICAgICAgaW5maW5pdGU9e3RydWV9XG4gICAgICAgICAgICBpdGVtQ2xhc3M9XCJcIlxuICAgICAgICAgICAga2V5Qm9hcmRDb250cm9sXG4gICAgICAgICAgICBtaW5pbXVtVG91Y2hEcmFnPXs4MH1cbiAgICAgICAgICAgIHJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZVxuICAgICAgICAgICAgcmVuZGVyRG90c091dHNpZGU9e2ZhbHNlfVxuICAgICAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cbiAgICAgICAgICAgIHNob3dEb3RzPXtmYWxzZX1cbiAgICAgICAgICAgIHNsaWRlckNsYXNzPVwiXCJcbiAgICAgICAgICAgIHNsaWRlc1RvU2xpZGU9ezF9XG4gICAgICAgICAgPlxuXG4gICAgICAgICAgICB7YWxsUG9zdHNEYXRhLm1hcCgoeyBpZCwgdGh1bWJuYWlsLCBkYXRlLCB0aXRsZSwgZXhjZXJwdCwgYXV0aG9yIH0pID0+IChcbiAgICAgICAgICAgICAgPFBvc3RDYXJkXG4gICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICBwb3N0TGluaz17YC9ibG9nLyR7aWR9YH1cbiAgICAgICAgICAgICAgICBzcmM9e3RodW1ibmFpbH1cbiAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgZXhjZXJwdD17ZXhjZXJwdH1cbiAgICAgICAgICAgICAgICBkYXRlPXtkYXRlfVxuICAgICAgICAgICAgICAgIGF1dGhvck5hbWU9e2F1dGhvcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggZGlzcGxheT0nZmxleCc+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiPlJlYWQgTW9yZTwvQnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgXG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgY29udGFpbmVyOiB7XG4gICAgbWluSGVpZ2h0OiAnaW5oZXJpdCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgfSxcbiAgY2Fyb3VzZWxXcmFwcGVyOiB7XG4gICAgJy5jYXJvdXNlbC1jb250YWluZXInOiB7XG4gICAgICBteDogLTMsXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sections/blog-section.js\n");

/***/ })

})