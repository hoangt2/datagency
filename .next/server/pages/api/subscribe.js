module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/api/subscribe.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/api/subscribe.js":
/*!************************************!*\
  !*** ./src/pages/api/subscribe.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mailchimp_mailchimp_marketing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mailchimp/mailchimp_marketing */ \"@mailchimp/mailchimp_marketing\");\n/* harmony import */ var _mailchimp_mailchimp_marketing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mailchimp_mailchimp_marketing__WEBPACK_IMPORTED_MODULE_0__);\n\n_mailchimp_mailchimp_marketing__WEBPACK_IMPORTED_MODULE_0___default.a.setConfig({\n  apiKey: process.env.MAILCHIMP_API_KEY,\n  server: process.env.MAILCHIMP_API_SERVER // e.g. us1\n\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const {\n    email\n  } = req.body;\n\n  if (!email) {\n    return res.status(400).json({\n      error: 'Email is required'\n    });\n  }\n\n  try {\n    await _mailchimp_mailchimp_marketing__WEBPACK_IMPORTED_MODULE_0___default.a.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {\n      email_address: email,\n      status: 'subscribed'\n    });\n    return res.status(201).json({\n      error: ''\n    });\n  } catch (error) {\n    return res.status(500).json({\n      error: error.message || error.toString()\n    });\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS5qcz81MTQ1Il0sIm5hbWVzIjpbIm1haWxjaGltcCIsInNldENvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJNQUlMQ0hJTVBfQVBJX0tFWSIsInNlcnZlciIsIk1BSUxDSElNUF9BUElfU0VSVkVSIiwicmVxIiwicmVzIiwiZW1haWwiLCJib2R5Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibGlzdHMiLCJhZGRMaXN0TWVtYmVyIiwiTUFJTENISU1QX0FVRElFTkNFX0lEIiwiZW1haWxfYWRkcmVzcyIsIm1lc3NhZ2UiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQUEscUVBQVMsQ0FBQ0MsU0FBVixDQUFvQjtBQUNsQkMsUUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsaUJBREY7QUFFbEJDLFFBQU0sRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLG9CQUZGLENBRXVCOztBQUZ2QixDQUFwQjtBQUtlLHNFQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDakMsUUFBTTtBQUFFQztBQUFGLE1BQVlGLEdBQUcsQ0FBQ0csSUFBdEI7O0FBRUEsTUFBSSxDQUFDRCxLQUFMLEVBQVk7QUFDVixXQUFPRCxHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUFyQixDQUFQO0FBQ0Q7O0FBRUQsTUFBSTtBQUNGLFVBQU1kLHFFQUFTLENBQUNlLEtBQVYsQ0FBZ0JDLGFBQWhCLENBQThCYixPQUFPLENBQUNDLEdBQVIsQ0FBWWEscUJBQTFDLEVBQWlFO0FBQ3JFQyxtQkFBYSxFQUFFUixLQURzRDtBQUVyRUUsWUFBTSxFQUFFO0FBRjZELEtBQWpFLENBQU47QUFLQSxXQUFPSCxHQUFHLENBQUNHLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUFyQixDQUFQO0FBQ0QsR0FQRCxDQU9FLE9BQU9BLEtBQVAsRUFBYztBQUNkLFdBQU9MLEdBQUcsQ0FBQ0csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLFdBQUssRUFBRUEsS0FBSyxDQUFDSyxPQUFOLElBQWlCTCxLQUFLLENBQUNNLFFBQU47QUFBMUIsS0FBckIsQ0FBUDtBQUNEO0FBQ0YsQ0FqQkQiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtYWlsY2hpbXAgZnJvbSAnQG1haWxjaGltcC9tYWlsY2hpbXBfbWFya2V0aW5nJztcblxubWFpbGNoaW1wLnNldENvbmZpZyh7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuTUFJTENISU1QX0FQSV9LRVksXG4gIHNlcnZlcjogcHJvY2Vzcy5lbnYuTUFJTENISU1QX0FQSV9TRVJWRVIgLy8gZS5nLiB1czFcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBlbWFpbCB9ID0gcmVxLmJvZHk7XG5cbiAgaWYgKCFlbWFpbCkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiAnRW1haWwgaXMgcmVxdWlyZWQnIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBtYWlsY2hpbXAubGlzdHMuYWRkTGlzdE1lbWJlcihwcm9jZXNzLmVudi5NQUlMQ0hJTVBfQVVESUVOQ0VfSUQsIHtcbiAgICAgIGVtYWlsX2FkZHJlc3M6IGVtYWlsLFxuICAgICAgc3RhdHVzOiAnc3Vic2NyaWJlZCdcbiAgICB9KTtcblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMSkuanNvbih7IGVycm9yOiAnJyB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCBlcnJvci50b1N0cmluZygpIH0pO1xuICB9XG59OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/api/subscribe.js\n");

/***/ }),

/***/ "@mailchimp/mailchimp_marketing":
/*!*************************************************!*\
  !*** external "@mailchimp/mailchimp_marketing" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@mailchimp/mailchimp_marketing\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWFpbGNoaW1wL21haWxjaGltcF9tYXJrZXRpbmdcIj82NzI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBtYWlsY2hpbXAvbWFpbGNoaW1wX21hcmtldGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYWlsY2hpbXAvbWFpbGNoaW1wX21hcmtldGluZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@mailchimp/mailchimp_marketing\n");

/***/ })

/******/ });