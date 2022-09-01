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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/blog/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/posts.js":
/*!**********************!*\
  !*** ./lib/posts.js ***!
  \**********************/
/*! exports provided: getSortedPostsData, getAllPostIds, getPostData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSortedPostsData\", function() { return getSortedPostsData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllPostIds\", function() { return getAllPostIds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPostData\", function() { return getPostData; });\n/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remark */ \"remark\");\n/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(remark__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remark-html */ \"remark-html\");\n/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(remark_html__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_4__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nconst postsDirectory = path__WEBPACK_IMPORTED_MODULE_3___default.a.join(process.cwd(), 'posts');\nfunction getSortedPostsData() {\n  // Get file names under /posts\n  const fileNames = fs__WEBPACK_IMPORTED_MODULE_2___default.a.readdirSync(postsDirectory);\n  const allPostsData = fileNames.map(fileName => {\n    // Remove \".md\" from file name to get id\n    const id = fileName.replace(/\\.md$/, ''); // Read markdown file as string\n\n    const fullPath = path__WEBPACK_IMPORTED_MODULE_3___default.a.join(postsDirectory, fileName);\n    const fileContents = fs__WEBPACK_IMPORTED_MODULE_2___default.a.readFileSync(fullPath, 'utf8'); // Use gray-matter to parse the post metadata section\n\n    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_4___default()(fileContents); // Combine the data with the id\n\n    return _objectSpread({\n      id\n    }, matterResult.data);\n  }); // Sort posts by date\n\n  return allPostsData.sort(({\n    date: a\n  }, {\n    date: b\n  }) => {\n    if (a < b) {\n      return 1;\n    } else if (a > b) {\n      return -1;\n    } else {\n      return 0;\n    }\n  });\n}\nfunction getAllPostIds() {\n  const fileNames = fs__WEBPACK_IMPORTED_MODULE_2___default.a.readdirSync(postsDirectory); // Returns an array that looks like this:\n  // [\n  //   {\n  //     params: {\n  //       id: 'ssg-ssr'\n  //     }\n  //   },\n  //   {\n  //     params: {\n  //       id: 'pre-rendering'\n  //     }\n  //   }\n  // ]\n\n  return fileNames.map(fileName => {\n    return {\n      params: {\n        id: fileName.replace(/\\.md$/, '')\n      }\n    };\n  });\n}\nasync function getPostData(id) {\n  const fullPath = path__WEBPACK_IMPORTED_MODULE_3___default.a.join(postsDirectory, `${id}.md`);\n  const fileContents = fs__WEBPACK_IMPORTED_MODULE_2___default.a.readFileSync(fullPath, 'utf8'); // Use gray-matter to parse the post metadata section\n\n  const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_4___default()(fileContents); // Use remark to convert markdown into HTML string\n\n  const processedContent = await remark__WEBPACK_IMPORTED_MODULE_0___default()().use(remark_html__WEBPACK_IMPORTED_MODULE_1___default.a).process(matterResult.content);\n  const contentHtml = processedContent.toString(); // Combine the data with the id and contentHtml\n\n  return _objectSpread({\n    id,\n    contentHtml\n  }, matterResult.data);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvcG9zdHMuanM/OTc1NCJdLCJuYW1lcyI6WyJwb3N0c0RpcmVjdG9yeSIsInBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImdldFNvcnRlZFBvc3RzRGF0YSIsImZpbGVOYW1lcyIsImZzIiwicmVhZGRpclN5bmMiLCJhbGxQb3N0c0RhdGEiLCJtYXAiLCJmaWxlTmFtZSIsImlkIiwicmVwbGFjZSIsImZ1bGxQYXRoIiwiZmlsZUNvbnRlbnRzIiwicmVhZEZpbGVTeW5jIiwibWF0dGVyUmVzdWx0IiwibWF0dGVyIiwiZGF0YSIsInNvcnQiLCJkYXRlIiwiYSIsImIiLCJnZXRBbGxQb3N0SWRzIiwicGFyYW1zIiwiZ2V0UG9zdERhdGEiLCJwcm9jZXNzZWRDb250ZW50IiwicmVtYXJrIiwidXNlIiwiaHRtbCIsImNvbnRlbnQiLCJjb250ZW50SHRtbCIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSxNQUFNQSxjQUFjLEdBQUdDLDJDQUFJLENBQUNDLElBQUwsQ0FBVUMsT0FBTyxDQUFDQyxHQUFSLEVBQVYsRUFBeUIsT0FBekIsQ0FBdkI7QUFFTyxTQUFTQyxrQkFBVCxHQUE4QjtBQUNuQztBQUNBLFFBQU1DLFNBQVMsR0FBR0MseUNBQUUsQ0FBQ0MsV0FBSCxDQUFlUixjQUFmLENBQWxCO0FBQ0EsUUFBTVMsWUFBWSxHQUFHSCxTQUFTLENBQUNJLEdBQVYsQ0FBZUMsUUFBRCxJQUFjO0FBQy9DO0FBQ0EsVUFBTUMsRUFBRSxHQUFHRCxRQUFRLENBQUNFLE9BQVQsQ0FBaUIsT0FBakIsRUFBMEIsRUFBMUIsQ0FBWCxDQUYrQyxDQUkvQzs7QUFDQSxVQUFNQyxRQUFRLEdBQUdiLDJDQUFJLENBQUNDLElBQUwsQ0FBVUYsY0FBVixFQUEwQlcsUUFBMUIsQ0FBakI7QUFDQSxVQUFNSSxZQUFZLEdBQUdSLHlDQUFFLENBQUNTLFlBQUgsQ0FBZ0JGLFFBQWhCLEVBQTBCLE1BQTFCLENBQXJCLENBTitDLENBUS9DOztBQUNBLFVBQU1HLFlBQVksR0FBR0Msa0RBQU0sQ0FBQ0gsWUFBRCxDQUEzQixDQVQrQyxDQVcvQzs7QUFDQTtBQUNFSDtBQURGLE9BRUtLLFlBQVksQ0FBQ0UsSUFGbEI7QUFJRCxHQWhCb0IsQ0FBckIsQ0FIbUMsQ0FvQm5DOztBQUNBLFNBQU9WLFlBQVksQ0FBQ1csSUFBYixDQUFrQixDQUFDO0FBQUVDLFFBQUksRUFBRUM7QUFBUixHQUFELEVBQWM7QUFBRUQsUUFBSSxFQUFFRTtBQUFSLEdBQWQsS0FBOEI7QUFDckQsUUFBSUQsQ0FBQyxHQUFHQyxDQUFSLEVBQVc7QUFDVCxhQUFPLENBQVA7QUFDRCxLQUZELE1BRU8sSUFBSUQsQ0FBQyxHQUFHQyxDQUFSLEVBQVc7QUFDaEIsYUFBTyxDQUFDLENBQVI7QUFDRCxLQUZNLE1BRUE7QUFDTCxhQUFPLENBQVA7QUFDRDtBQUNGLEdBUk0sQ0FBUDtBQVNEO0FBRU0sU0FBU0MsYUFBVCxHQUF5QjtBQUM1QixRQUFNbEIsU0FBUyxHQUFHQyx5Q0FBRSxDQUFDQyxXQUFILENBQWVSLGNBQWYsQ0FBbEIsQ0FENEIsQ0FHNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBT00sU0FBUyxDQUFDSSxHQUFWLENBQWVDLFFBQUQsSUFBYztBQUNqQyxXQUFPO0FBQ0xjLFlBQU0sRUFBRTtBQUNOYixVQUFFLEVBQUVELFFBQVEsQ0FBQ0UsT0FBVCxDQUFpQixPQUFqQixFQUEwQixFQUExQjtBQURFO0FBREgsS0FBUDtBQUtELEdBTk0sQ0FBUDtBQU9EO0FBRU0sZUFBZWEsV0FBZixDQUEyQmQsRUFBM0IsRUFBK0I7QUFDcEMsUUFBTUUsUUFBUSxHQUFHYiwyQ0FBSSxDQUFDQyxJQUFMLENBQVVGLGNBQVYsRUFBMkIsR0FBRVksRUFBRyxLQUFoQyxDQUFqQjtBQUNBLFFBQU1HLFlBQVksR0FBR1IseUNBQUUsQ0FBQ1MsWUFBSCxDQUFnQkYsUUFBaEIsRUFBMEIsTUFBMUIsQ0FBckIsQ0FGb0MsQ0FJcEM7O0FBQ0EsUUFBTUcsWUFBWSxHQUFHQyxrREFBTSxDQUFDSCxZQUFELENBQTNCLENBTG9DLENBT3BDOztBQUNBLFFBQU1ZLGdCQUFnQixHQUFHLE1BQU1DLDZDQUFNLEdBQ2xDQyxHQUQ0QixDQUN4QkMsa0RBRHdCLEVBRTVCM0IsT0FGNEIsQ0FFcEJjLFlBQVksQ0FBQ2MsT0FGTyxDQUEvQjtBQUdBLFFBQU1DLFdBQVcsR0FBR0wsZ0JBQWdCLENBQUNNLFFBQWpCLEVBQXBCLENBWG9DLENBYXBDOztBQUNBO0FBQ0VyQixNQURGO0FBRUVvQjtBQUZGLEtBR0tmLFlBQVksQ0FBQ0UsSUFIbEI7QUFLRCIsImZpbGUiOiIuL2xpYi9wb3N0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZW1hcmsgZnJvbSAncmVtYXJrJztcbmltcG9ydCBodG1sIGZyb20gJ3JlbWFyay1odG1sJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInO1xuXG5cbmNvbnN0IHBvc3RzRGlyZWN0b3J5ID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwb3N0cycpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U29ydGVkUG9zdHNEYXRhKCkge1xuICAvLyBHZXQgZmlsZSBuYW1lcyB1bmRlciAvcG9zdHNcbiAgY29uc3QgZmlsZU5hbWVzID0gZnMucmVhZGRpclN5bmMocG9zdHNEaXJlY3RvcnkpO1xuICBjb25zdCBhbGxQb3N0c0RhdGEgPSBmaWxlTmFtZXMubWFwKChmaWxlTmFtZSkgPT4ge1xuICAgIC8vIFJlbW92ZSBcIi5tZFwiIGZyb20gZmlsZSBuYW1lIHRvIGdldCBpZFxuICAgIGNvbnN0IGlkID0gZmlsZU5hbWUucmVwbGFjZSgvXFwubWQkLywgJycpO1xuXG4gICAgLy8gUmVhZCBtYXJrZG93biBmaWxlIGFzIHN0cmluZ1xuICAgIGNvbnN0IGZ1bGxQYXRoID0gcGF0aC5qb2luKHBvc3RzRGlyZWN0b3J5LCBmaWxlTmFtZSk7XG4gICAgY29uc3QgZmlsZUNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKGZ1bGxQYXRoLCAndXRmOCcpO1xuXG4gICAgLy8gVXNlIGdyYXktbWF0dGVyIHRvIHBhcnNlIHRoZSBwb3N0IG1ldGFkYXRhIHNlY3Rpb25cbiAgICBjb25zdCBtYXR0ZXJSZXN1bHQgPSBtYXR0ZXIoZmlsZUNvbnRlbnRzKTtcblxuICAgIC8vIENvbWJpbmUgdGhlIGRhdGEgd2l0aCB0aGUgaWRcbiAgICByZXR1cm4ge1xuICAgICAgaWQsXG4gICAgICAuLi5tYXR0ZXJSZXN1bHQuZGF0YSxcbiAgICB9O1xuICB9KTtcbiAgLy8gU29ydCBwb3N0cyBieSBkYXRlXG4gIHJldHVybiBhbGxQb3N0c0RhdGEuc29ydCgoeyBkYXRlOiBhIH0sIHsgZGF0ZTogYiB9KSA9PiB7XG4gICAgaWYgKGEgPCBiKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGEgPiBiKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxQb3N0SWRzKCkge1xuICAgIGNvbnN0IGZpbGVOYW1lcyA9IGZzLnJlYWRkaXJTeW5jKHBvc3RzRGlyZWN0b3J5KTtcbiAgXG4gICAgLy8gUmV0dXJucyBhbiBhcnJheSB0aGF0IGxvb2tzIGxpa2UgdGhpczpcbiAgICAvLyBbXG4gICAgLy8gICB7XG4gICAgLy8gICAgIHBhcmFtczoge1xuICAgIC8vICAgICAgIGlkOiAnc3NnLXNzcidcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgcGFyYW1zOiB7XG4gICAgLy8gICAgICAgaWQ6ICdwcmUtcmVuZGVyaW5nJ1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gXVxuICAgIHJldHVybiBmaWxlTmFtZXMubWFwKChmaWxlTmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgaWQ6IGZpbGVOYW1lLnJlcGxhY2UoL1xcLm1kJC8sICcnKSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdERhdGEoaWQpIHtcbiAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGguam9pbihwb3N0c0RpcmVjdG9yeSwgYCR7aWR9Lm1kYCk7XG4gICAgY29uc3QgZmlsZUNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKGZ1bGxQYXRoLCAndXRmOCcpO1xuICBcbiAgICAvLyBVc2UgZ3JheS1tYXR0ZXIgdG8gcGFyc2UgdGhlIHBvc3QgbWV0YWRhdGEgc2VjdGlvblxuICAgIGNvbnN0IG1hdHRlclJlc3VsdCA9IG1hdHRlcihmaWxlQ29udGVudHMpO1xuICBcbiAgICAvLyBVc2UgcmVtYXJrIHRvIGNvbnZlcnQgbWFya2Rvd24gaW50byBIVE1MIHN0cmluZ1xuICAgIGNvbnN0IHByb2Nlc3NlZENvbnRlbnQgPSBhd2FpdCByZW1hcmsoKVxuICAgICAgLnVzZShodG1sKVxuICAgICAgLnByb2Nlc3MobWF0dGVyUmVzdWx0LmNvbnRlbnQpO1xuICAgIGNvbnN0IGNvbnRlbnRIdG1sID0gcHJvY2Vzc2VkQ29udGVudC50b1N0cmluZygpO1xuICBcbiAgICAvLyBDb21iaW5lIHRoZSBkYXRhIHdpdGggdGhlIGlkIGFuZCBjb250ZW50SHRtbFxuICAgIHJldHVybiB7XG4gICAgICBpZCxcbiAgICAgIGNvbnRlbnRIdG1sLFxuICAgICAgLi4ubWF0dGVyUmVzdWx0LmRhdGEsXG4gICAgfTtcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/posts.js\n");

/***/ }),

/***/ "./src/pages/blog/[id].js":
/*!********************************!*\
  !*** ./src/pages/blog/[id].js ***!
  \********************************/
/*! exports provided: getStaticProps, getStaticPaths, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Post; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/posts */ \"./lib/posts.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ \"theme-ui\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/tunghoang/Datagency/Web/src/pages/blog/[id].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n //import Head from 'next/head';\n//import Date from '../../components/date';\n\nasync function getStaticProps({\n  params\n}) {\n  const postData = await Object(_lib_posts__WEBPACK_IMPORTED_MODULE_1__[\"getPostData\"])(params.id);\n  return {\n    props: {\n      postData\n    }\n  };\n}\nasync function getStaticPaths() {\n  const paths = Object(_lib_posts__WEBPACK_IMPORTED_MODULE_1__[\"getAllPostIds\"])();\n  return {\n    paths,\n    fallback: false\n  };\n}\nfunction Post({\n  postData\n}) {\n  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, postData.title)), __jsx(\"article\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, postData.title), __jsx(\"div\", {\n    dangerouslySetInnerHTML: {\n      __html: postData.contentHtml\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYmxvZy8uanM/NTg2MyJdLCJuYW1lcyI6WyJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsInBvc3REYXRhIiwiZ2V0UG9zdERhdGEiLCJpZCIsInByb3BzIiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsImdldEFsbFBvc3RJZHMiLCJmYWxsYmFjayIsIlBvc3QiLCJ0aXRsZSIsIl9faHRtbCIsImNvbnRlbnRIdG1sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTtDQUVBO0FBQ0E7O0FBRU8sZUFBZUEsY0FBZixDQUE4QjtBQUFFQztBQUFGLENBQTlCLEVBQTBDO0FBQy9DLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyw4REFBVyxDQUFDRixNQUFNLENBQUNHLEVBQVIsQ0FBbEM7QUFDQSxTQUFPO0FBQ0xDLFNBQUssRUFBRTtBQUNMSDtBQURLO0FBREYsR0FBUDtBQUtEO0FBRU0sZUFBZUksY0FBZixHQUFnQztBQUNyQyxRQUFNQyxLQUFLLEdBQUdDLGdFQUFhLEVBQTNCO0FBQ0EsU0FBTztBQUNMRCxTQURLO0FBRUxFLFlBQVEsRUFBRTtBQUZMLEdBQVA7QUFJRDtBQUVjLFNBQVNDLElBQVQsQ0FBYztBQUFFUjtBQUFGLENBQWQsRUFBNEI7QUFDdkMsU0FDRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRQSxRQUFRLENBQUNTLEtBQWpCLENBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtULFFBQVEsQ0FBQ1MsS0FBZCxDQURGLEVBRUU7QUFBSywyQkFBdUIsRUFBRTtBQUFFQyxZQUFNLEVBQUVWLFFBQVEsQ0FBQ1c7QUFBbkIsS0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBSkYsQ0FERjtBQVlEIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2Jsb2cvW2lkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgZ2V0QWxsUG9zdElkcywgZ2V0UG9zdERhdGEgfSBmcm9tICcuLi8uLi8uLi9saWIvcG9zdHMnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3ggfSBmcm9tICd0aGVtZS11aSc7XG4vL2ltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG4vL2ltcG9ydCBEYXRlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGF0ZSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgZ2V0UG9zdERhdGEocGFyYW1zLmlkKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdERhdGEsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwYXRocyA9IGdldEFsbFBvc3RJZHMoKTtcbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBwb3N0RGF0YSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICA8dGl0bGU+e3Bvc3REYXRhLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxhcnRpY2xlPlxuICAgICAgICAgIDxoMT57cG9zdERhdGEudGl0bGV9PC9oMT5cbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdERhdGEuY29udGVudEh0bWwgfX0gLz5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICBcbiAgICApO1xuICB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/blog/[id].js\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"gray-matter\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmF5LW1hdHRlclwiP2Y4YmMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZ3JheS1tYXR0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmF5LW1hdHRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///gray-matter\n");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCI/NzRiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwYXRoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///path\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "remark":
/*!*************************!*\
  !*** external "remark" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"remark\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZW1hcmtcIj85MDlhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlbWFyay5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlbWFya1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///remark\n");

/***/ }),

/***/ "remark-html":
/*!******************************!*\
  !*** external "remark-html" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"remark-html\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZW1hcmstaHRtbFwiPzdkZTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVtYXJrLWh0bWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZW1hcmstaHRtbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///remark-html\n");

/***/ }),

/***/ "theme-ui":
/*!***************************!*\
  !*** external "theme-ui" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"theme-ui\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0aGVtZS11aVwiP2I0NGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoidGhlbWUtdWkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0aGVtZS11aVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///theme-ui\n");

/***/ })

/******/ });