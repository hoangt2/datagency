webpackHotUpdate_N_E("pages/blog",{

/***/ "./src/pages/blog.js":
/*!***************************!*\
  !*** ./src/pages/blog.js ***!
  \***************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Blog; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme */ \"./src/theme/index.js\");\n/* harmony import */ var components_blog_post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/blog-post */ \"./src/components/blog-post.js\");\n/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/logo */ \"./src/components/logo.js\");\n/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/logo.svg */ \"./src/assets/logo.svg\");\n/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_logo_svg__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/tunghoang/Datagency/datagency/src/pages/blog.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/** @jsx jsx */\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Blog(_ref) {\n  var _this = this;\n\n  var allPostsData = _ref.allPostsData;\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"ThemeProvider\"], {\n    theme: theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    sx: styles.container,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Flex\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_logo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    src: assets_logo_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Heading\"], {\n    as: \"h1\",\n    variant: \"heroPrimary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, \"Blog\")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    sx: styles.grid,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, allPostsData.map(function (_ref2) {\n    var id = _ref2.id,\n        thumbnail = _ref2.thumbnail,\n        date = _ref2.date,\n        title = _ref2.title,\n        excerpt = _ref2.excerpt,\n        author = _ref2.author;\n    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__[\"jsx\"])(components_blog_post__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: id,\n      postLink: \"/blog/\".concat(id),\n      src: thumbnail,\n      title: title,\n      excerpt: excerpt,\n      date: date,\n      authorName: author,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 13\n      }\n    });\n  }))));\n}\n_c = Blog;\nvar styles = {\n  grid: {\n    width: ['100%', '80%', '100%'],\n    mx: 'auto',\n    gridGap: ['35px 0', null, '40px 40px', '50px 60px', '30px', '50px 40px', '55px 90px'],\n    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)', null, 'repeat(3,1fr)']\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Jsb2cuanM/YmYxZiJdLCJuYW1lcyI6WyJCbG9nIiwiYWxsUG9zdHNEYXRhIiwidGhlbWUiLCJzdHlsZXMiLCJjb250YWluZXIiLCJMb2dvRGFyayIsImdyaWQiLCJtYXAiLCJpZCIsInRodW1ibmFpbCIsImRhdGUiLCJ0aXRsZSIsImV4Y2VycHQiLCJhdXRob3IiLCJ3aWR0aCIsIm14IiwiZ3JpZEdhcCIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBYWUsU0FBU0EsSUFBVCxPQUE4QjtBQUFBOztBQUFBLE1BQWZDLFlBQWUsUUFBZkEsWUFBZTtBQUMzQyxTQUNFLHFEQUFDLHNEQUFEO0FBQWUsU0FBSyxFQUFFQyw2Q0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLGtEQUFEO0FBQVcsTUFBRSxFQUFFQyxNQUFNLENBQUNDLFNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsdURBQUQ7QUFBTSxPQUFHLEVBQUVDLHNEQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLHFEQUFDLGdEQUFEO0FBQVMsTUFBRSxFQUFDLElBQVo7QUFBaUIsV0FBTyxFQUFDLGFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixDQURGLEVBVUUscURBQUMsNkNBQUQ7QUFBTSxNQUFFLEVBQUVGLE1BQU0sQ0FBQ0csSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHTCxZQUFZLENBQUNNLEdBQWIsQ0FBaUI7QUFBQSxRQUFHQyxFQUFILFNBQUdBLEVBQUg7QUFBQSxRQUFPQyxTQUFQLFNBQU9BLFNBQVA7QUFBQSxRQUFrQkMsSUFBbEIsU0FBa0JBLElBQWxCO0FBQUEsUUFBd0JDLEtBQXhCLFNBQXdCQSxLQUF4QjtBQUFBLFFBQStCQyxPQUEvQixTQUErQkEsT0FBL0I7QUFBQSxRQUF3Q0MsTUFBeEMsU0FBd0NBLE1BQXhDO0FBQUEsV0FDaEIscURBQUMsNERBQUQ7QUFDRSxTQUFHLEVBQUVMLEVBRFA7QUFFRSxjQUFRLGtCQUFXQSxFQUFYLENBRlY7QUFHRSxTQUFHLEVBQUVDLFNBSFA7QUFJRSxXQUFLLEVBQUVFLEtBSlQ7QUFLRSxhQUFPLEVBQUVDLE9BTFg7QUFNRSxVQUFJLEVBQUVGLElBTlI7QUFPRSxnQkFBVSxFQUFFRyxNQVBkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEZ0I7QUFBQSxHQUFqQixDQURILENBVkYsQ0FERixDQURGO0FBNEJEO0tBN0J1QmIsSTtBQStCeEIsSUFBTUcsTUFBTSxHQUFHO0FBQ2JHLE1BQUksRUFBRTtBQUNKUSxTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixNQUFoQixDQURIO0FBRUpDLE1BQUUsRUFBRSxNQUZBO0FBR0pDLFdBQU8sRUFBRSxDQUNQLFFBRE8sRUFFUCxJQUZPLEVBR1AsV0FITyxFQUlQLFdBSk8sRUFLUCxNQUxPLEVBTVAsV0FOTyxFQU9QLFdBUE8sQ0FITDtBQVlKQyx1QkFBbUIsRUFBRSxDQUNuQixlQURtQixFQUVuQixJQUZtQixFQUduQixlQUhtQixFQUluQixJQUptQixFQUtuQixlQUxtQjtBQVpqQjtBQURPLENBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmxvZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3gsIEhlYWRpbmcsIEdyaWQsIEZsZXggfSBmcm9tICd0aGVtZS11aSc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHRoZW1lIGZyb20gJ3RoZW1lJztcbmltcG9ydCBCbG9nUG9zdCBmcm9tICdjb21wb25lbnRzL2Jsb2ctcG9zdCc7XG5pbXBvcnQgTG9nbyBmcm9tICdjb21wb25lbnRzL2xvZ28nO1xuaW1wb3J0IExvZ29EYXJrIGZyb20gJ2Fzc2V0cy9sb2dvLnN2Zyc7XG5cbmltcG9ydCB7IGdldFNvcnRlZFBvc3RzRGF0YSB9IGZyb20gJy4uLy4uL2xpYi9wb3N0cyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgYWxsUG9zdHNEYXRhID0gYXdhaXQgZ2V0U29ydGVkUG9zdHNEYXRhKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGFsbFBvc3RzRGF0YSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKHthbGxQb3N0c0RhdGF9KSB7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8RmxleD5cbiAgICAgICAgICA8TG9nbyBzcmM9e0xvZ29EYXJrfS8+XG4gICAgICAgICAgPEhlYWRpbmcgYXM9XCJoMVwiIHZhcmlhbnQ9XCJoZXJvUHJpbWFyeVwiPlxuICAgICAgICAgIEJsb2dcbiAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICA8L0ZsZXg+XG5cbiAgICAgICAgXG5cbiAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICB7YWxsUG9zdHNEYXRhLm1hcCgoeyBpZCwgdGh1bWJuYWlsLCBkYXRlLCB0aXRsZSwgZXhjZXJwdCwgYXV0aG9yIH0pID0+IChcbiAgICAgICAgICAgIDxCbG9nUG9zdFxuICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICBwb3N0TGluaz17YC9ibG9nLyR7aWR9YH1cbiAgICAgICAgICAgICAgc3JjPXt0aHVtYm5haWx9XG4gICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgZXhjZXJwdD17ZXhjZXJwdH1cbiAgICAgICAgICAgICAgZGF0ZT17ZGF0ZX1cbiAgICAgICAgICAgICAgYXV0aG9yTmFtZT17YXV0aG9yfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9UaGVtZVByb3ZpZGVyPiAgICAgIFxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGdyaWQ6IHtcbiAgICB3aWR0aDogWycxMDAlJywgJzgwJScsICcxMDAlJ10sXG4gICAgbXg6ICdhdXRvJyxcbiAgICBncmlkR2FwOiBbXG4gICAgICAnMzVweCAwJyxcbiAgICAgIG51bGwsXG4gICAgICAnNDBweCA0MHB4JyxcbiAgICAgICc1MHB4IDYwcHgnLFxuICAgICAgJzMwcHgnLFxuICAgICAgJzUwcHggNDBweCcsXG4gICAgICAnNTVweCA5MHB4JyxcbiAgICBdLFxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcbiAgICAgICdyZXBlYXQoMSwxZnIpJyxcbiAgICAgIG51bGwsXG4gICAgICAncmVwZWF0KDIsMWZyKScsXG4gICAgICBudWxsLFxuICAgICAgJ3JlcGVhdCgzLDFmciknLFxuICAgIF0sXG4gIH0sXG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/blog.js\n");

/***/ })

})