webpackHotUpdate_N_E("pages/blog",{

/***/ "./src/pages/blog.js":
/*!***************************!*\
  !*** ./src/pages/blog.js ***!
  \***************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Blog; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme */ \"./src/theme/index.js\");\n/* harmony import */ var components_blog_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/blog-post */ \"./src/components/blog-post.js\");\n/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/logo */ \"./src/components/logo.js\");\n/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/logo.svg */ \"./src/assets/logo.svg\");\n/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_logo_svg__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/tunghoang/Datagency/datagency/src/pages/blog.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Blog(_ref) {\n  var _this = this;\n\n  var allPostsData = _ref.allPostsData;\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n    theme: theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    sx: styles.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    src: assets_logo_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n    pt: \"30px\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n    as: \"h1\",\n    variant: \"heroPrimary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, \"Blog\")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    sx: styles.grid,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, allPostsData.map(function (_ref2) {\n    var id = _ref2.id,\n        thumbnail = _ref2.thumbnail,\n        date = _ref2.date,\n        title = _ref2.title,\n        excerpt = _ref2.excerpt,\n        author = _ref2.author;\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_blog_post__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: id,\n      postLink: \"/blog/\".concat(id),\n      src: thumbnail,\n      title: title,\n      excerpt: excerpt,\n      date: date,\n      authorName: author,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 13\n      }\n    });\n  }))));\n}\n_c = Blog;\nvar styles = {\n  grid: {\n    width: ['100%', '80%', '100%'],\n    mx: 'auto',\n    gridGap: ['35px 0', null, '40px 40px', '50px 60px', '30px', '50px 40px', '55px 90px'],\n    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(3,1fr)']\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Jsb2cuanM/YmYxZiJdLCJuYW1lcyI6WyJCbG9nIiwiYWxsUG9zdHNEYXRhIiwidGhlbWUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJMb2dvRGFyayIsImdyaWQiLCJtYXAiLCJpZCIsInRodW1ibmFpbCIsImRhdGUiLCJ0aXRsZSIsImV4Y2VycHQiLCJhdXRob3IiLCJ3aWR0aCIsIm14IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBYWUsU0FBU0EsSUFBVCxPQUE4QjtBQUFBOztBQUFBLE1BQWZDLFlBQWUsUUFBZkEsWUFBZTtBQUMzQyxTQUNFLHFEQUFDLHNEQUFEO0FBQWUsU0FBSyxFQUFFQyw2Q0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGtEQUFEO0FBQVcsTUFBRSxFQUFFQyxNQUFNLENBQUNDLFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsdURBQUQ7QUFBTSxPQUFHLEVBQUVDLHNEQUFYO0FBQXFCLE1BQUUsRUFBQyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxxREFBQyxnREFBRDtBQUFTLE1BQUUsRUFBQyxJQUFaO0FBQWlCLFdBQU8sRUFBQyxhQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsQ0FERixFQVVFLHFEQUFDLDZDQUFEO0FBQU0sTUFBRSxFQUFFRixNQUFNLENBQUNHLElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0wsWUFBWSxDQUFDTSxHQUFiLENBQWlCO0FBQUEsUUFBR0MsRUFBSCxTQUFHQSxFQUFIO0FBQUEsUUFBT0MsU0FBUCxTQUFPQSxTQUFQO0FBQUEsUUFBa0JDLElBQWxCLFNBQWtCQSxJQUFsQjtBQUFBLFFBQXdCQyxLQUF4QixTQUF3QkEsS0FBeEI7QUFBQSxRQUErQkMsT0FBL0IsU0FBK0JBLE9BQS9CO0FBQUEsUUFBd0NDLE1BQXhDLFNBQXdDQSxNQUF4QztBQUFBLFdBQ2hCLHFEQUFDLDREQUFEO0FBQ0UsU0FBRyxFQUFFTCxFQURQO0FBRUUsY0FBUSxrQkFBV0EsRUFBWCxDQUZWO0FBR0UsU0FBRyxFQUFFQyxTQUhQO0FBSUUsV0FBSyxFQUFFRSxLQUpUO0FBS0UsYUFBTyxFQUFFQyxPQUxYO0FBTUUsVUFBSSxFQUFFRixJQU5SO0FBT0UsZ0JBQVUsRUFBRUcsTUFQZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGdCO0FBQUEsR0FBakIsQ0FESCxDQVZGLENBREYsQ0FERjtBQTRCRDtLQTdCdUJiLEk7QUErQnhCLElBQU1HLE1BQU0sR0FBRztBQUNiRyxNQUFJLEVBQUU7QUFDSlEsU0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLEtBQVQsRUFBZ0IsTUFBaEIsQ0FESDtBQUVKQyxNQUFFLEVBQUUsTUFGQTtBQUdKQyxXQUFPLEVBQUUsQ0FDUCxRQURPLEVBRVAsSUFGTyxFQUdQLFdBSE8sRUFJUCxXQUpPLEVBS1AsTUFMTyxFQU1QLFdBTk8sRUFPUCxXQVBPLENBSEw7QUFZSkMsdUJBQW1CLEVBQUUsQ0FDbkIsZUFEbUIsRUFFbkIsSUFGbUIsRUFHbkIsZUFIbUIsRUFJbkIsSUFKbUIsRUFLbkIsZUFMbUI7QUFaakI7QUFETyxDQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2Jsb2cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB7IENvbnRhaW5lciwgQm94LCBIZWFkaW5nLCBHcmlkIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3RoZW1lLXVpJztcbmltcG9ydCB0aGVtZSBmcm9tICd0aGVtZSc7XG5pbXBvcnQgQmxvZ1Bvc3QgZnJvbSAnY29tcG9uZW50cy9ibG9nLXBvc3QnO1xuaW1wb3J0IExvZ28gZnJvbSAnY29tcG9uZW50cy9sb2dvJztcbmltcG9ydCBMb2dvRGFyayBmcm9tICdhc3NldHMvbG9nby5zdmcnO1xuXG5pbXBvcnQgeyBnZXRTb3J0ZWRQb3N0c0RhdGEgfSBmcm9tICcuLi8uLi9saWIvcG9zdHMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGFsbFBvc3RzRGF0YSA9IGF3YWl0IGdldFNvcnRlZFBvc3RzRGF0YSgpO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBhbGxQb3N0c0RhdGEsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZyh7YWxsUG9zdHNEYXRhfSkge1xuICByZXR1cm4gKFxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPEJveD5cbiAgICAgICAgICA8TG9nbyBzcmM9e0xvZ29EYXJrfSBwdD0nMzBweCcvPlxuICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDFcIiB2YXJpYW50PVwiaGVyb1ByaW1hcnlcIj5cbiAgICAgICAgICBCbG9nXG4gICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgXG5cbiAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICB7YWxsUG9zdHNEYXRhLm1hcCgoeyBpZCwgdGh1bWJuYWlsLCBkYXRlLCB0aXRsZSwgZXhjZXJwdCwgYXV0aG9yIH0pID0+IChcbiAgICAgICAgICAgIDxCbG9nUG9zdFxuICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICBwb3N0TGluaz17YC9ibG9nLyR7aWR9YH1cbiAgICAgICAgICAgICAgc3JjPXt0aHVtYm5haWx9XG4gICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgZXhjZXJwdD17ZXhjZXJwdH1cbiAgICAgICAgICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgICAgICAgICAgYXV0aG9yTmFtZT17YXV0aG9yfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9UaGVtZVByb3ZpZGVyPiAgICAgIFxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGdyaWQ6IHtcbiAgICB3aWR0aDogWycxMDAlJywgJzgwJScsICcxMDAlJ10sXG4gICAgbXg6ICdhdXRvJyxcbiAgICBncmlkR2FwOiBbXG4gICAgICAnMzVweCAwJyxcbiAgICAgIG51bGwsXG4gICAgICAnNDBweCA0MHB4JyxcbiAgICAgICc1MHB4IDYwcHgnLFxuICAgICAgJzMwcHgnLFxuICAgICAgJzUwcHggNDBweCcsXG4gICAgICAnNTVweCA5MHB4JyxcbiAgICBdLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcbiAgICAgICdyZXBlYXQoMSwxZnIpJyxcbiAgICAgIG51bGwsXG4gICAgICAncmVwZWF0KDIsMWZyKScsXG4gICAgICBudWxsLFxuICAgICAgJ3JlcGVhdCgzLDFmciknLFxuICAgIF0sXG4gIH0sXG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/blog.js\n");

/***/ })

})