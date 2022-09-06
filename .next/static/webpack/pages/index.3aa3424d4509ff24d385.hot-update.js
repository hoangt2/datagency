webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/blog-section.js":
/*!**************************************!*\
  !*** ./src/sections/blog-section.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BlogSection; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-header */ \"./src/components/section-header.js\");\n/* harmony import */ var components_post_card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/post-card.js */ \"./src/components/post-card.js\");\n/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/button-group */ \"./src/components/button-group.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/tunghoang/Datagency/datagency/src/sections/blog-section.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\n\n\n\nvar responsive = {\n  desktop: {\n    breakpoint: {\n      max: 3000,\n      min: 1310\n    },\n    items: 4,\n    slidesToSlide: 4 // optional, default to 1.\n\n  },\n  laptop: {\n    breakpoint: {\n      max: 1310,\n      min: 1024\n    },\n    items: 3,\n    slidesToSlide: 3 // optional, default to 1.\n\n  },\n  tablet: {\n    breakpoint: {\n      max: 1024,\n      min: 640\n    },\n    items: 2,\n    slidesToSlide: 2 // optional, default to 1.\n\n  },\n  mobile: {\n    breakpoint: {\n      max: 639,\n      min: 0\n    },\n    items: 1,\n    slidesToSlide: 1 // optional, default to 1.\n\n  }\n};\nfunction BlogSection(_ref) {\n  var _this = this;\n\n  var allPostsData = _ref.allPostsData;\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(\"section\", {\n    sx: {\n      variant: 'section.news'\n    },\n    id: \"blog\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_section_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    slogan: \"our blog\",\n    title: \"Get updated on insights and tips for data & analytics\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    sx: styles.carouselWrapper,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    additionalTransfrom: 0,\n    arrows: false,\n    autoPlaySpeed: 3000,\n    centerMode: false,\n    className: \"\",\n    containerClass: \"carousel-container\",\n    customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_button_group__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 32\n      }\n    }),\n    dotListClass: \"test\",\n    draggable: true,\n    focusOnSelect: false,\n    infinite: true,\n    itemClass: \"\",\n    keyBoardControl: true,\n    minimumTouchDrag: 80,\n    renderButtonGroupOutside: true,\n    renderDotsOutside: false,\n    responsive: responsive,\n    showDots: false,\n    sliderClass: \"\",\n    slidesToSlide: 1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, allPostsData.map(function (_ref2) {\n    var id = _ref2.id,\n        thumbnail = _ref2.thumbnail,\n        date = _ref2.date,\n        title = _ref2.title,\n        excerpt = _ref2.excerpt,\n        author = _ref2.author;\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_post_card_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: id,\n      postLink: \"/blog/\".concat(id),\n      src: thumbnail,\n      title: title,\n      excerpt: excerpt,\n      date: date,\n      authorName: author,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 15\n      }\n    });\n  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    display: \"block\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"primary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }, \"Read More\"))));\n}\n_c = BlogSection;\nvar styles = {\n  carouselWrapper: {\n    '.carousel-container': {\n      mx: -3\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL2Jsb2ctc2VjdGlvbi5qcz8wZDkwIl0sIm5hbWVzIjpbInJlc3BvbnNpdmUiLCJkZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwic2xpZGVzVG9TbGlkZSIsImxhcHRvcCIsInRhYmxldCIsIm1vYmlsZSIsIkJsb2dTZWN0aW9uIiwiYWxsUG9zdHNEYXRhIiwidmFyaWFudCIsInN0eWxlcyIsImNhcm91c2VsV3JhcHBlciIsIm1hcCIsImlkIiwidGh1bWJuYWlsIiwiZGF0ZSIsInRpdGxlIiwiZXhjZXJwdCIsImF1dGhvciIsIm14Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2pCQyxTQUFPLEVBQUU7QUFDUEMsY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQURMO0FBRVBDLFNBQUssRUFBRSxDQUZBO0FBR1BDLGlCQUFhLEVBQUUsQ0FIUixDQUdXOztBQUhYLEdBRFE7QUFNakJDLFFBQU0sRUFBRTtBQUNOTCxjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCLEtBRE47QUFFTkMsU0FBSyxFQUFFLENBRkQ7QUFHTkMsaUJBQWEsRUFBRSxDQUhULENBR1k7O0FBSFosR0FOUztBQVdqQkUsUUFBTSxFQUFFO0FBQ05OLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxTQUFHLEVBQUU7QUFBbEIsS0FETjtBQUVOQyxTQUFLLEVBQUUsQ0FGRDtBQUdOQyxpQkFBYSxFQUFFLENBSFQsQ0FHWTs7QUFIWixHQVhTO0FBZ0JqQkcsUUFBTSxFQUFFO0FBQ05QLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsR0FBUDtBQUFZQyxTQUFHLEVBQUU7QUFBakIsS0FETjtBQUVOQyxTQUFLLEVBQUUsQ0FGRDtBQUdOQyxpQkFBYSxFQUFFLENBSFQsQ0FHWTs7QUFIWjtBQWhCUyxDQUFuQjtBQXVCZSxTQUFTSSxXQUFULE9BQXFDO0FBQUE7O0FBQUEsTUFBZkMsWUFBZSxRQUFmQSxZQUFlO0FBQ2xELFNBQ0U7QUFBUyxNQUFFLEVBQUU7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBYjtBQUEwQyxNQUFFLEVBQUMsTUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxpRUFBRDtBQUNFLFVBQU0sRUFBQyxVQURUO0FBRUUsU0FBSyxFQUFDLHVEQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQU1FLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFQyxNQUFNLENBQUNDLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQywyREFBRDtBQUNFLHVCQUFtQixFQUFFLENBRHZCO0FBRUUsVUFBTSxFQUFFLEtBRlY7QUFHRSxpQkFBYSxFQUFFLElBSGpCO0FBSUUsY0FBVSxFQUFFLEtBSmQ7QUFLRSxhQUFTLEVBQUMsRUFMWjtBQU1FLGtCQUFjLEVBQUMsb0JBTmpCO0FBT0UscUJBQWlCLEVBQUUscURBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVByQjtBQVFFLGdCQUFZLEVBQUMsTUFSZjtBQVNFLGFBQVMsRUFBRSxJQVRiO0FBVUUsaUJBQWEsRUFBRSxLQVZqQjtBQVdFLFlBQVEsRUFBRSxJQVhaO0FBWUUsYUFBUyxFQUFDLEVBWlo7QUFhRSxtQkFBZSxNQWJqQjtBQWNFLG9CQUFnQixFQUFFLEVBZHBCO0FBZUUsNEJBQXdCLE1BZjFCO0FBZ0JFLHFCQUFpQixFQUFFLEtBaEJyQjtBQWlCRSxjQUFVLEVBQUVkLFVBakJkO0FBa0JFLFlBQVEsRUFBRSxLQWxCWjtBQW1CRSxlQUFXLEVBQUMsRUFuQmQ7QUFvQkUsaUJBQWEsRUFBRSxDQXBCakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQXVCR1csWUFBWSxDQUFDSSxHQUFiLENBQWlCO0FBQUEsUUFBR0MsRUFBSCxTQUFHQSxFQUFIO0FBQUEsUUFBT0MsU0FBUCxTQUFPQSxTQUFQO0FBQUEsUUFBa0JDLElBQWxCLFNBQWtCQSxJQUFsQjtBQUFBLFFBQXdCQyxLQUF4QixTQUF3QkEsS0FBeEI7QUFBQSxRQUErQkMsT0FBL0IsU0FBK0JBLE9BQS9CO0FBQUEsUUFBd0NDLE1BQXhDLFNBQXdDQSxNQUF4QztBQUFBLFdBQ2hCLHFEQUFDLCtEQUFEO0FBQ0UsU0FBRyxFQUFFTCxFQURQO0FBRUUsY0FBUSxrQkFBV0EsRUFBWCxDQUZWO0FBR0UsU0FBRyxFQUFFQyxTQUhQO0FBSUUsV0FBSyxFQUFFRSxLQUpUO0FBS0UsYUFBTyxFQUFFQyxPQUxYO0FBTUUsVUFBSSxFQUFFRixJQU5SO0FBT0UsZ0JBQVUsRUFBRUcsTUFQZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGdCO0FBQUEsR0FBakIsQ0F2QkgsQ0FERixDQU5GLEVBNENFLHFEQUFDLDRDQUFEO0FBQUssV0FBTyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLCtDQUFEO0FBQVEsV0FBTyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsQ0E1Q0YsQ0FERixDQURGO0FBcUREO0tBdER1QlgsVztBQXdEeEIsSUFBTUcsTUFBTSxHQUFHO0FBQ2JDLGlCQUFlLEVBQUU7QUFDZiwyQkFBdUI7QUFDckJRLFFBQUUsRUFBRSxDQUFDO0FBRGdCO0FBRFI7QUFESixDQUFmIiwiZmlsZSI6Ii4vc3JjL3NlY3Rpb25zL2Jsb2ctc2VjdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3gsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXInO1xuaW1wb3J0IFBvc3RDYXJkIGZyb20gJ2NvbXBvbmVudHMvcG9zdC1jYXJkLmpzJztcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICdjb21wb25lbnRzL2J1dHRvbi1ncm91cCc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbXVsdGktY2Fyb3VzZWwnO1xuXG5jb25zdCByZXNwb25zaXZlID0ge1xuICBkZXNrdG9wOiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTMxMCB9LFxuICAgIGl0ZW1zOiA0LFxuICAgIHNsaWRlc1RvU2xpZGU6IDQsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gIH0sXG4gIGxhcHRvcDoge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMzEwLCBtaW46IDEwMjQgfSxcbiAgICBpdGVtczogMyxcbiAgICBzbGlkZXNUb1NsaWRlOiAzLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxuICB9LFxuICB0YWJsZXQ6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogMTAyNCwgbWluOiA2NDAgfSxcbiAgICBpdGVtczogMixcbiAgICBzbGlkZXNUb1NsaWRlOiAyLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxuICB9LFxuICBtb2JpbGU6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogNjM5LCBtaW46IDAgfSxcbiAgICBpdGVtczogMSxcbiAgICBzbGlkZXNUb1NsaWRlOiAxLCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ1NlY3Rpb24oe2FsbFBvc3RzRGF0YX0pIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBzeD17eyB2YXJpYW50OiAnc2VjdGlvbi5uZXdzJyB9fSBpZD0nYmxvZyc+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8U2VjdGlvbkhlYWRlclxuICAgICAgICAgIHNsb2dhbj1cIm91ciBibG9nXCJcbiAgICAgICAgICB0aXRsZT1cIkdldCB1cGRhdGVkIG9uIGluc2lnaHRzIGFuZCB0aXBzIGZvciBkYXRhICYgYW5hbHl0aWNzXCJcbiAgICAgICAgLz5cblxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY2Fyb3VzZWxXcmFwcGVyfT5cbiAgICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICAgIGFkZGl0aW9uYWxUcmFuc2Zyb209ezB9XG4gICAgICAgICAgICBhcnJvd3M9e2ZhbHNlfVxuICAgICAgICAgICAgYXV0b1BsYXlTcGVlZD17MzAwMH1cbiAgICAgICAgICAgIGNlbnRlck1vZGU9e2ZhbHNlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzPVwiY2Fyb3VzZWwtY29udGFpbmVyXCJcbiAgICAgICAgICAgIGN1c3RvbUJ1dHRvbkdyb3VwPXs8QnV0dG9uR3JvdXAgLz59XG4gICAgICAgICAgICBkb3RMaXN0Q2xhc3M9XCJ0ZXN0XCJcbiAgICAgICAgICAgIGRyYWdnYWJsZT17dHJ1ZX1cbiAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q9e2ZhbHNlfVxuICAgICAgICAgICAgaW5maW5pdGU9e3RydWV9XG4gICAgICAgICAgICBpdGVtQ2xhc3M9XCJcIlxuICAgICAgICAgICAga2V5Qm9hcmRDb250cm9sXG4gICAgICAgICAgICBtaW5pbXVtVG91Y2hEcmFnPXs4MH1cbiAgICAgICAgICAgIHJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZVxuICAgICAgICAgICAgcmVuZGVyRG90c091dHNpZGU9e2ZhbHNlfVxuICAgICAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cbiAgICAgICAgICAgIHNob3dEb3RzPXtmYWxzZX1cbiAgICAgICAgICAgIHNsaWRlckNsYXNzPVwiXCJcbiAgICAgICAgICAgIHNsaWRlc1RvU2xpZGU9ezF9XG4gICAgICAgICAgPlxuXG4gICAgICAgICAgICB7YWxsUG9zdHNEYXRhLm1hcCgoeyBpZCwgdGh1bWJuYWlsLCBkYXRlLCB0aXRsZSwgZXhjZXJwdCwgYXV0aG9yIH0pID0+IChcbiAgICAgICAgICAgICAgPFBvc3RDYXJkXG4gICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICBwb3N0TGluaz17YC9ibG9nLyR7aWR9YH1cbiAgICAgICAgICAgICAgICBzcmM9e3RodW1ibmFpbH1cbiAgICAgICAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgZXhjZXJwdD17ZXhjZXJwdH1cbiAgICAgICAgICAgICAgICBkYXRlPXtkYXRlfVxuICAgICAgICAgICAgICAgIGF1dGhvck5hbWU9e2F1dGhvcn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuXG4gICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggZGlzcGxheT0nYmxvY2snPlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIj5SZWFkIE1vcmU8L0J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIFxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNhcm91c2VsV3JhcHBlcjoge1xuICAgICcuY2Fyb3VzZWwtY29udGFpbmVyJzoge1xuICAgICAgbXg6IC0zLFxuICAgIH0sXG4gIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sections/blog-section.js\n");

/***/ })

})