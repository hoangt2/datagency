webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/subscribe.js":
/*!***********************************!*\
  !*** ./src/sections/subscribe.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Subscribe; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/index.esm.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/tunghoang/Datagency/datagency/src/sections/subscribe.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n/** @jsx jsx */\n\n\n\n\nfunction Subscribe() {\n  _s();\n\n  // 1. Create a reference to the input so we can fetch/clear it's value.\n  var inputEl = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useRef\"])(null); // 2. Hold a status in state to handle the response from our API.\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    submitted: false,\n    submitting: false,\n    info: {\n      error: false,\n      msg: null\n    }\n  }),\n      status = _useState[0],\n      setStatus = _useState[1];\n\n  var handleMailChimpResponse = function handleMailChimpResponse(errorMsg, successMsg) {\n    if (errorMsg) {\n      // 4. If there was an error, update the message in state.\n      setStatus({\n        info: {\n          error: true,\n          msg: errorMsg\n        }\n      });\n      return;\n    } // 5. Clear the input value and show a success message.\n\n\n    setStatus({\n      submitted: true,\n      submitting: false,\n      info: {\n        error: false,\n        msg: successMsg\n      }\n    });\n    inputEl.current.value = '';\n  }; // const handleSendGridResponse = (status, msg) => {\n  //   if (status === 200) {\n  //     // 5. Clear the input value and show a success message.\n  //     setStatus({\n  //       submitted: true,\n  //       submitting: false,\n  //       info: { error: false, msg: msg },\n  //     });\n  //     inputEl.current.value = '';\n  //   } else {\n  //     setStatus({\n  //       info: { error: true, msg: msg },\n  //     });\n  //   }\n  // };\n\n\n  var subscribe = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var res, _yield$res$json, error;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              setStatus(function (prevStatus) {\n                return _objectSpread(_objectSpread({}, prevStatus), {}, {\n                  submitting: true\n                });\n              }); // 3. Send a request to our API with the user's email address.\n\n              _context.next = 4;\n              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('/api/subscribe', {\n                body: JSON.stringify({\n                  email: inputEl.current.value\n                }),\n                headers: {\n                  'Content-Type': 'application/json'\n                },\n                method: 'POST'\n              });\n\n            case 4:\n              res = _context.sent;\n              _context.next = 7;\n              return res.json();\n\n            case 7:\n              _yield$res$json = _context.sent;\n              error = _yield$res$json.error;\n              handleMailChimpResponse(error, 'Success! 🎉 You are now subscribed to the newsletter.'); // For sendGrid integration\n              // const text = await res.text();\n              // handleSendGridResponse(res.status, text);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function subscribe(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"section\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 5\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n    sx: styles.contentBox,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"Box\"], {\n    sx: styles.contentBoxInner,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"Heading\"], {\n    as: \"h2\",\n    sx: styles.title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, \"Subscribe to our Blog\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"Text\"], {\n    as: \"p\",\n    sx: styles.description,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }, \"Leave your emails to get the most updated insights for your data analytics journey\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"form\", {\n    onSubmit: subscribe,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"Flex\"], {\n    sx: styles.subscribeForm,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 15\n    }\n  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"label\", {\n    htmlFor: \"email\",\n    sx: {\n      variant: 'styles.srOnly'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 17\n    }\n  }, \"Email Address\"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"Input\"], {\n    ref: inputEl,\n    id: \"email\",\n    name: \"email\",\n    type: \"email\",\n    placeholder: \"Enter your email address\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 17\n    }\n  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 17\n    }\n  }, status.info.error && Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"div\", {\n    className: \"error\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 21\n    }\n  }, \"Error: \", status.info.msg), !status.info.error && status.info.msg && Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"div\", {\n    className: \"success\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 104,\n      columnNumber: 21\n    }\n  }, status.info.msg)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(theme_ui__WEBPACK_IMPORTED_MODULE_5__[\"Button\"], {\n    type: \"submit\",\n    disabled: status.submitting,\n    className: \"subscribe__btn\",\n    \"aria-label\": \"Subscribe\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 17\n    }\n  }, !status.submitting ? !status.submitted ? 'Subscribe' : 'Submitted' : 'Submitting...')))))));\n}\n\n_s(Subscribe, \"eFuzXYZPrAkrFH+a0Cj58Z9NTlM=\");\n\n_c = Subscribe;\nvar styles = {\n  contentBox: {\n    backgroundColor: 'primary',\n    textAlign: 'center',\n    borderRadius: 10,\n    py: ['60px', null, 8]\n  },\n  contentBoxInner: {\n    width: ['100%', null, '540px', '600px'],\n    mx: 'auto',\n    mt: -1,\n    px: [3, 5]\n  },\n  title: {\n    fontSize: ['24px', null, '28px', null, null, '32px', null, '36px'],\n    color: 'white',\n    lineHeight: [1.3, null, null, 1.25],\n    fontWeight: '700',\n    letterSpacing: ['-.5px', null, '-1.5px'],\n    mb: [2, 3]\n  },\n  description: {\n    fontSize: ['15px', 2, null, null, null, '17px', null, 3],\n    color: 'white',\n    lineHeight: [1.85, null, null, 2],\n    px: [0, null, 5]\n  },\n  subscribeForm: {\n    mt: [6, null, null, 7],\n    backgroundColor: ['transparent', 'white'],\n    borderRadius: [0, 50],\n    overflow: 'hidden',\n    p: [0, 1],\n    flexDirection: ['column', 'row'],\n    '[type=\"email\"]': {\n      border: 0,\n      borderRadius: 50,\n      fontFamily: 'body',\n      fontSize: ['14px', null, 2],\n      fontWeight: 500,\n      color: 'heading',\n      py: 1,\n      px: [4, null, 6],\n      backgroundColor: ['white', 'transparent'],\n      height: ['52px', null, '60px'],\n      textAlign: ['center', 'left'],\n      '&:focus': {\n        boxShadow: '0 0 0 0px'\n      },\n      '::placeholder': {\n        color: 'primary',\n        opacity: 1\n      }\n    },\n    '.subscribe__btn': {\n      flexShrink: 0,\n      ml: [0, 2],\n      backgroundColor: ['text', 'primary'],\n      mt: [2, 0],\n      py: ['15px']\n    }\n  }\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Subscribe\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3N1YnNjcmliZS5qcz8wOTU2Il0sIm5hbWVzIjpbIlN1YnNjcmliZSIsImlucHV0RWwiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInN1Ym1pdHRlZCIsInN1Ym1pdHRpbmciLCJpbmZvIiwiZXJyb3IiLCJtc2ciLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJoYW5kbGVNYWlsQ2hpbXBSZXNwb25zZSIsImVycm9yTXNnIiwic3VjY2Vzc01zZyIsImN1cnJlbnQiLCJ2YWx1ZSIsInN1YnNjcmliZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByZXZTdGF0dXMiLCJmZXRjaCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZW1haWwiLCJoZWFkZXJzIiwibWV0aG9kIiwicmVzIiwianNvbiIsInN0eWxlcyIsImNvbnRlbnRCb3giLCJjb250ZW50Qm94SW5uZXIiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3Vic2NyaWJlRm9ybSIsInZhcmlhbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0QWxpZ24iLCJib3JkZXJSYWRpdXMiLCJweSIsIndpZHRoIiwibXgiLCJtdCIsInB4IiwiZm9udFNpemUiLCJjb2xvciIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0IiwibGV0dGVyU3BhY2luZyIsIm1iIiwib3ZlcmZsb3ciLCJwIiwiZmxleERpcmVjdGlvbiIsImJvcmRlciIsImZvbnRGYW1pbHkiLCJoZWlnaHQiLCJib3hTaGFkb3ciLCJvcGFjaXR5IiwiZmxleFNocmluayIsIm1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFDbEM7QUFDQSxNQUFNQyxPQUFPLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF0QixDQUZrQyxDQUdsQzs7QUFDQSxrQkFBNEJDLHNEQUFRLENBQUM7QUFDbkNDLGFBQVMsRUFBRSxLQUR3QjtBQUVuQ0MsY0FBVSxFQUFFLEtBRnVCO0FBR25DQyxRQUFJLEVBQUU7QUFBRUMsV0FBSyxFQUFFLEtBQVQ7QUFBZ0JDLFNBQUcsRUFBRTtBQUFyQjtBQUg2QixHQUFELENBQXBDO0FBQUEsTUFBT0MsTUFBUDtBQUFBLE1BQWVDLFNBQWY7O0FBS0EsTUFBTUMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFDQyxRQUFELEVBQVdDLFVBQVgsRUFBMEI7QUFDeEQsUUFBSUQsUUFBSixFQUFjO0FBQ1o7QUFDQUYsZUFBUyxDQUFDO0FBQ1JKLFlBQUksRUFBRTtBQUFFQyxlQUFLLEVBQUUsSUFBVDtBQUFlQyxhQUFHLEVBQUVJO0FBQXBCO0FBREUsT0FBRCxDQUFUO0FBSUE7QUFDRCxLQVJ1RCxDQVV4RDs7O0FBQ0FGLGFBQVMsQ0FBQztBQUNSTixlQUFTLEVBQUUsSUFESDtBQUVSQyxnQkFBVSxFQUFFLEtBRko7QUFHUkMsVUFBSSxFQUFFO0FBQUVDLGFBQUssRUFBRSxLQUFUO0FBQWdCQyxXQUFHLEVBQUVLO0FBQXJCO0FBSEUsS0FBRCxDQUFUO0FBS0FaLFdBQU8sQ0FBQ2EsT0FBUixDQUFnQkMsS0FBaEIsR0FBd0IsRUFBeEI7QUFDRCxHQWpCRCxDQVRrQyxDQTRCbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxNQUFNQyxTQUFTO0FBQUEsZ01BQUcsaUJBQU9DLENBQVA7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNoQkEsZUFBQyxDQUFDQyxjQUFGO0FBQ0FSLHVCQUFTLENBQUMsVUFBQ1MsVUFBRDtBQUFBLHVEQUFzQkEsVUFBdEI7QUFBa0NkLDRCQUFVLEVBQUU7QUFBOUM7QUFBQSxlQUFELENBQVQsQ0FGZ0IsQ0FJaEI7O0FBSmdCO0FBQUEscUJBS0VlLHlEQUFLLENBQUMsZ0JBQUQsRUFBbUI7QUFDeENDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CQyx1QkFBSyxFQUFFdkIsT0FBTyxDQUFDYSxPQUFSLENBQWdCQztBQURKLGlCQUFmLENBRGtDO0FBSXhDVSx1QkFBTyxFQUFFO0FBQ1Asa0NBQWdCO0FBRFQsaUJBSitCO0FBT3hDQyxzQkFBTSxFQUFFO0FBUGdDLGVBQW5CLENBTFA7O0FBQUE7QUFLVkMsaUJBTFU7QUFBQTtBQUFBLHFCQWVRQSxHQUFHLENBQUNDLElBQUosRUFmUjs7QUFBQTtBQUFBO0FBZVJyQixtQkFmUSxtQkFlUkEsS0FmUTtBQWdCaEJJLHFDQUF1QixDQUNyQkosS0FEcUIsRUFFckIsdURBRnFCLENBQXZCLENBaEJnQixDQW9CaEI7QUFDQTtBQUNBOztBQXRCZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVFMsU0FBUztBQUFBO0FBQUE7QUFBQSxLQUFmOztBQXdCQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVhLE1BQU0sQ0FBQ0MsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFRCxNQUFNLENBQUNFLGVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxnREFBRDtBQUFTLE1BQUUsRUFBQyxJQUFaO0FBQWlCLE1BQUUsRUFBRUYsTUFBTSxDQUFDRyxLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLEVBSUUscURBQUMsNkNBQUQ7QUFBTSxNQUFFLEVBQUMsR0FBVDtBQUFhLE1BQUUsRUFBRUgsTUFBTSxDQUFDSSxXQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBGQUpGLEVBT0U7QUFBTSxZQUFRLEVBQUVqQixTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsNkNBQUQ7QUFBTSxNQUFFLEVBQUVhLE1BQU0sQ0FBQ0ssYUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sV0FBTyxFQUFDLE9BQWY7QUFBdUIsTUFBRSxFQUFFO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFJRSxxREFBQyw4Q0FBRDtBQUNFLE9BQUcsRUFBRWxDLE9BRFA7QUFFRSxNQUFFLEVBQUMsT0FGTDtBQUdFLFFBQUksRUFBQyxPQUhQO0FBSUUsUUFBSSxFQUFDLE9BSlA7QUFLRSxlQUFXLEVBQUMsMEJBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpGLEVBWUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUSxNQUFNLENBQUNILElBQVAsQ0FBWUMsS0FBWixJQUNDO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBK0JFLE1BQU0sQ0FBQ0gsSUFBUCxDQUFZRSxHQUEzQyxDQUZKLEVBSUcsQ0FBQ0MsTUFBTSxDQUFDSCxJQUFQLENBQVlDLEtBQWIsSUFBc0JFLE1BQU0sQ0FBQ0gsSUFBUCxDQUFZRSxHQUFsQyxJQUNDO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEwQkMsTUFBTSxDQUFDSCxJQUFQLENBQVlFLEdBQXRDLENBTEosQ0FaRixFQW9CRSxxREFBQywrQ0FBRDtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsWUFBUSxFQUFFQyxNQUFNLENBQUNKLFVBRm5CO0FBR0UsYUFBUyxFQUFDLGdCQUhaO0FBSUUsa0JBQVcsV0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUcsQ0FBQ0ksTUFBTSxDQUFDSixVQUFSLEdBQ0csQ0FBQ0ksTUFBTSxDQUFDTCxTQUFSLEdBQ0UsV0FERixHQUVFLFdBSEwsR0FJRyxlQVZOLENBcEJGLENBREYsQ0FQRixDQURGLENBREYsQ0FERixDQURGO0FBbUREOztHQXZIdUJKLFM7O0tBQUFBLFM7QUF5SHhCLElBQU02QixNQUFNLEdBQUc7QUFDYkMsWUFBVSxFQUFFO0FBQ1ZNLG1CQUFlLEVBQUUsU0FEUDtBQUVWQyxhQUFTLEVBQUUsUUFGRDtBQUdWQyxnQkFBWSxFQUFFLEVBSEo7QUFJVkMsTUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxDQUFmO0FBSk0sR0FEQztBQU9iUixpQkFBZSxFQUFFO0FBQ2ZTLFNBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsT0FBZixFQUF3QixPQUF4QixDQURRO0FBRWZDLE1BQUUsRUFBRSxNQUZXO0FBR2ZDLE1BQUUsRUFBRSxDQUFDLENBSFU7QUFJZkMsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUo7QUFKVyxHQVBKO0FBYWJYLE9BQUssRUFBRTtBQUNMWSxZQUFRLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLE1BQWYsRUFBdUIsSUFBdkIsRUFBNkIsSUFBN0IsRUFBbUMsTUFBbkMsRUFBMkMsSUFBM0MsRUFBaUQsTUFBakQsQ0FETDtBQUVMQyxTQUFLLEVBQUUsT0FGRjtBQUdMQyxjQUFVLEVBQUUsQ0FBQyxHQUFELEVBQU0sSUFBTixFQUFZLElBQVosRUFBa0IsSUFBbEIsQ0FIUDtBQUlMQyxjQUFVLEVBQUUsS0FKUDtBQUtMQyxpQkFBYSxFQUFFLENBQUMsT0FBRCxFQUFVLElBQVYsRUFBZ0IsUUFBaEIsQ0FMVjtBQU1MQyxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSjtBQU5DLEdBYk07QUFxQmJoQixhQUFXLEVBQUU7QUFDWFcsWUFBUSxFQUFFLENBQUMsTUFBRCxFQUFTLENBQVQsRUFBWSxJQUFaLEVBQWtCLElBQWxCLEVBQXdCLElBQXhCLEVBQThCLE1BQTlCLEVBQXNDLElBQXRDLEVBQTRDLENBQTVDLENBREM7QUFFWEMsU0FBSyxFQUFFLE9BRkk7QUFHWEMsY0FBVSxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLENBQW5CLENBSEQ7QUFJWEgsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWO0FBSk8sR0FyQkE7QUEyQmJULGVBQWEsRUFBRTtBQUNiUSxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsQ0FBaEIsQ0FEUztBQUViTixtQkFBZSxFQUFFLENBQUMsYUFBRCxFQUFnQixPQUFoQixDQUZKO0FBR2JFLGdCQUFZLEVBQUUsQ0FBQyxDQUFELEVBQUksRUFBSixDQUhEO0FBSWJZLFlBQVEsRUFBRSxRQUpHO0FBS2JDLEtBQUMsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBTFU7QUFNYkMsaUJBQWEsRUFBRSxDQUFDLFFBQUQsRUFBVyxLQUFYLENBTkY7QUFPYixzQkFBa0I7QUFDaEJDLFlBQU0sRUFBRSxDQURRO0FBRWhCZixrQkFBWSxFQUFFLEVBRkU7QUFHaEJnQixnQkFBVSxFQUFFLE1BSEk7QUFJaEJWLGNBQVEsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsQ0FBZixDQUpNO0FBS2hCRyxnQkFBVSxFQUFFLEdBTEk7QUFNaEJGLFdBQUssRUFBRSxTQU5TO0FBT2hCTixRQUFFLEVBQUUsQ0FQWTtBQVFoQkksUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLENBUlk7QUFTaEJQLHFCQUFlLEVBQUUsQ0FBQyxPQUFELEVBQVUsYUFBVixDQVREO0FBVWhCbUIsWUFBTSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxNQUFmLENBVlE7QUFXaEJsQixlQUFTLEVBQUUsQ0FBQyxRQUFELEVBQVcsTUFBWCxDQVhLO0FBWWhCLGlCQUFXO0FBQ1RtQixpQkFBUyxFQUFFO0FBREYsT0FaSztBQWVoQix1QkFBaUI7QUFDZlgsYUFBSyxFQUFFLFNBRFE7QUFFZlksZUFBTyxFQUFFO0FBRk07QUFmRCxLQVBMO0FBMkJiLHVCQUFtQjtBQUNqQkMsZ0JBQVUsRUFBRSxDQURLO0FBRWpCQyxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUZhO0FBR2pCdkIscUJBQWUsRUFBRSxDQUFDLE1BQUQsRUFBUyxTQUFULENBSEE7QUFJakJNLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBSmE7QUFLakJILFFBQUUsRUFBRSxDQUFDLE1BQUQ7QUFMYTtBQTNCTjtBQTNCRixDQUFmIiwiZmlsZSI6Ii4vc3JjL3NlY3Rpb25zL3N1YnNjcmliZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBGbGV4LCBCb3gsIEJ1dHRvbiwgSW5wdXQsIFRleHQsIEhlYWRpbmcgfSBmcm9tICd0aGVtZS11aSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1YnNjcmliZSgpIHtcbiAgLy8gMS4gQ3JlYXRlIGEgcmVmZXJlbmNlIHRvIHRoZSBpbnB1dCBzbyB3ZSBjYW4gZmV0Y2gvY2xlYXIgaXQncyB2YWx1ZS5cbiAgY29uc3QgaW5wdXRFbCA9IHVzZVJlZihudWxsKTtcbiAgLy8gMi4gSG9sZCBhIHN0YXR1cyBpbiBzdGF0ZSB0byBoYW5kbGUgdGhlIHJlc3BvbnNlIGZyb20gb3VyIEFQSS5cbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKHtcbiAgICBzdWJtaXR0ZWQ6IGZhbHNlLFxuICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAgIGluZm86IHsgZXJyb3I6IGZhbHNlLCBtc2c6IG51bGwgfSxcbiAgfSk7XG4gIGNvbnN0IGhhbmRsZU1haWxDaGltcFJlc3BvbnNlID0gKGVycm9yTXNnLCBzdWNjZXNzTXNnKSA9PiB7XG4gICAgaWYgKGVycm9yTXNnKSB7XG4gICAgICAvLyA0LiBJZiB0aGVyZSB3YXMgYW4gZXJyb3IsIHVwZGF0ZSB0aGUgbWVzc2FnZSBpbiBzdGF0ZS5cbiAgICAgIHNldFN0YXR1cyh7XG4gICAgICAgIGluZm86IHsgZXJyb3I6IHRydWUsIG1zZzogZXJyb3JNc2cgfSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gNS4gQ2xlYXIgdGhlIGlucHV0IHZhbHVlIGFuZCBzaG93IGEgc3VjY2VzcyBtZXNzYWdlLlxuICAgIHNldFN0YXR1cyh7XG4gICAgICBzdWJtaXR0ZWQ6IHRydWUsXG4gICAgICBzdWJtaXR0aW5nOiBmYWxzZSxcbiAgICAgIGluZm86IHsgZXJyb3I6IGZhbHNlLCBtc2c6IHN1Y2Nlc3NNc2cgfSxcbiAgICB9KTtcbiAgICBpbnB1dEVsLmN1cnJlbnQudmFsdWUgPSAnJztcbiAgfTtcblxuICAvLyBjb25zdCBoYW5kbGVTZW5kR3JpZFJlc3BvbnNlID0gKHN0YXR1cywgbXNnKSA9PiB7XG4gIC8vICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XG4gIC8vICAgICAvLyA1LiBDbGVhciB0aGUgaW5wdXQgdmFsdWUgYW5kIHNob3cgYSBzdWNjZXNzIG1lc3NhZ2UuXG4gIC8vICAgICBzZXRTdGF0dXMoe1xuICAvLyAgICAgICBzdWJtaXR0ZWQ6IHRydWUsXG4gIC8vICAgICAgIHN1Ym1pdHRpbmc6IGZhbHNlLFxuICAvLyAgICAgICBpbmZvOiB7IGVycm9yOiBmYWxzZSwgbXNnOiBtc2cgfSxcbiAgLy8gICAgIH0pO1xuICAvLyAgICAgaW5wdXRFbC5jdXJyZW50LnZhbHVlID0gJyc7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIHNldFN0YXR1cyh7XG4gIC8vICAgICAgIGluZm86IHsgZXJyb3I6IHRydWUsIG1zZzogbXNnIH0sXG4gIC8vICAgICB9KTtcbiAgLy8gICB9XG4gIC8vIH07XG4gIFxuICBjb25zdCBzdWJzY3JpYmUgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRTdGF0dXMoKHByZXZTdGF0dXMpID0+ICh7IC4uLnByZXZTdGF0dXMsIHN1Ym1pdHRpbmc6IHRydWUgfSkpO1xuXG4gICAgLy8gMy4gU2VuZCBhIHJlcXVlc3QgdG8gb3VyIEFQSSB3aXRoIHRoZSB1c2VyJ3MgZW1haWwgYWRkcmVzcy5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS9zdWJzY3JpYmUnLCB7XG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVtYWlsOiBpbnB1dEVsLmN1cnJlbnQudmFsdWUsXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICB9KTtcbiAgICAvL2ZvciBtYWlsQ2hpbXAgaW50ZWdyYXRpb25cbiAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGhhbmRsZU1haWxDaGltcFJlc3BvbnNlKFxuICAgICAgZXJyb3IsXG4gICAgICAnU3VjY2VzcyEg8J+OiSBZb3UgYXJlIG5vdyBzdWJzY3JpYmVkIHRvIHRoZSBuZXdzbGV0dGVyLidcbiAgICApO1xuICAgIC8vIEZvciBzZW5kR3JpZCBpbnRlZ3JhdGlvblxuICAgIC8vIGNvbnN0IHRleHQgPSBhd2FpdCByZXMudGV4dCgpO1xuICAgIC8vIGhhbmRsZVNlbmRHcmlkUmVzcG9uc2UocmVzLnN0YXR1cywgdGV4dCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudEJveH0+XG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnRCb3hJbm5lcn0+XG4gICAgICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgc3g9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgICAgIFN1YnNjcmliZSB0byBvdXIgQmxvZ1xuICAgICAgICAgICAgPC9IZWFkaW5nPlxuICAgICAgICAgICAgPFRleHQgYXM9XCJwXCIgc3g9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICAgIExlYXZlIHlvdXIgZW1haWxzIHRvIGdldCB0aGUgbW9zdCB1cGRhdGVkIGluc2lnaHRzIGZvciB5b3VyIGRhdGEgYW5hbHl0aWNzIGpvdXJuZXlcbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJzY3JpYmV9PlxuICAgICAgICAgICAgICA8RmxleCBzeD17c3R5bGVzLnN1YnNjcmliZUZvcm19PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBzeD17eyB2YXJpYW50OiAnc3R5bGVzLnNyT25seScgfX0+XG4gICAgICAgICAgICAgICAgICBFbWFpbCBBZGRyZXNzXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHJlZj17aW5wdXRFbH1cbiAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWwgYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICB7c3RhdHVzLmluZm8uZXJyb3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+RXJyb3I6IHtzdGF0dXMuaW5mby5tc2d9PC9kaXY+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgeyFzdGF0dXMuaW5mby5lcnJvciAmJiBzdGF0dXMuaW5mby5tc2cgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Y2Nlc3NcIj57c3RhdHVzLmluZm8ubXNnfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzdGF0dXMuc3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1YnNjcmliZV9fYnRuXCJcbiAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTdWJzY3JpYmVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHshc3RhdHVzLnN1Ym1pdHRpbmdcbiAgICAgICAgICAgICAgICAgICAgPyAhc3RhdHVzLnN1Ym1pdHRlZFxuICAgICAgICAgICAgICAgICAgICAgID8gJ1N1YnNjcmliZSdcbiAgICAgICAgICAgICAgICAgICAgICA6ICdTdWJtaXR0ZWQnXG4gICAgICAgICAgICAgICAgICAgIDogJ1N1Ym1pdHRpbmcuLi4nfVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGNvbnRlbnRCb3g6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGJvcmRlclJhZGl1czogMTAsXG4gICAgcHk6IFsnNjBweCcsIG51bGwsIDhdLFxuICB9LFxuICBjb250ZW50Qm94SW5uZXI6IHtcbiAgICB3aWR0aDogWycxMDAlJywgbnVsbCwgJzU0MHB4JywgJzYwMHB4J10sXG4gICAgbXg6ICdhdXRvJyxcbiAgICBtdDogLTEsXG4gICAgcHg6IFszLCA1XSxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBmb250U2l6ZTogWycyNHB4JywgbnVsbCwgJzI4cHgnLCBudWxsLCBudWxsLCAnMzJweCcsIG51bGwsICczNnB4J10sXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgbGluZUhlaWdodDogWzEuMywgbnVsbCwgbnVsbCwgMS4yNV0sXG4gICAgZm9udFdlaWdodDogJzcwMCcsXG4gICAgbGV0dGVyU3BhY2luZzogWyctLjVweCcsIG51bGwsICctMS41cHgnXSxcbiAgICBtYjogWzIsIDNdLFxuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIGZvbnRTaXplOiBbJzE1cHgnLCAyLCBudWxsLCBudWxsLCBudWxsLCAnMTdweCcsIG51bGwsIDNdLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGxpbmVIZWlnaHQ6IFsxLjg1LCBudWxsLCBudWxsLCAyXSxcbiAgICBweDogWzAsIG51bGwsIDVdLFxuICB9LFxuICBzdWJzY3JpYmVGb3JtOiB7XG4gICAgbXQ6IFs2LCBudWxsLCBudWxsLCA3XSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFsndHJhbnNwYXJlbnQnLCAnd2hpdGUnXSxcbiAgICBib3JkZXJSYWRpdXM6IFswLCA1MF0sXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHA6IFswLCAxXSxcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsICdyb3cnXSxcbiAgICAnW3R5cGU9XCJlbWFpbFwiXSc6IHtcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGJvcmRlclJhZGl1czogNTAsXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXG4gICAgICBmb250U2l6ZTogWycxNHB4JywgbnVsbCwgMl0sXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxuICAgICAgcHk6IDEsXG4gICAgICBweDogWzQsIG51bGwsIDZdLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBbJ3doaXRlJywgJ3RyYW5zcGFyZW50J10sXG4gICAgICBoZWlnaHQ6IFsnNTJweCcsIG51bGwsICc2MHB4J10sXG4gICAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgJ2xlZnQnXSxcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBib3hTaGFkb3c6ICcwIDAgMCAwcHgnLFxuICAgICAgfSxcbiAgICAgICc6OnBsYWNlaG9sZGVyJzoge1xuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcuc3Vic2NyaWJlX19idG4nOiB7XG4gICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgbWw6IFswLCAyXSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogWyd0ZXh0JywgJ3ByaW1hcnknXSxcbiAgICAgIG10OiBbMiwgMF0sXG4gICAgICBweTogWycxNXB4J10sXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/sections/subscribe.js\n");

/***/ })

})