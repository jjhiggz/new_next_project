webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_jonathanhigger_ThrowAway_nextdemo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_jonathanhigger_ThrowAway_nextdemo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jonathanhigger_ThrowAway_nextdemo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_jonathanhigger_ThrowAway_nextdemo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/layout */ \"./Components/layout.js\");\n/* harmony import */ var _Components_CharactersContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/CharactersContainer */ \"./Components/CharactersContainer.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/jonathanhigger/ThrowAway/nextdemo/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\nvar Index = function Index(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      count = _useState[0],\n      setCount = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      characters = _useState2[0],\n      setCharacters = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    Object(_Users_jonathanhigger_ThrowAway_nextdemo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_jonathanhigger_ThrowAway_nextdemo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n      var response, parsedResponse;\n      return _Users_jonathanhigger_ThrowAway_nextdemo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch('https://rickandmortyapi.com/api/character');\n\n            case 2:\n              response = _context.sent;\n              _context.next = 5;\n              return response.json();\n\n            case 5:\n              parsedResponse = _context.sent;\n              setCharacters(parsedResponse.results);\n\n            case 7:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  }, []);\n  return __jsx(_Components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }, \"Your count is: \", count), __jsx(\"button\", {\n    onClick: function onClick() {\n      return setCount(count + 1);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, \"+\"), __jsx(_Components_CharactersContainer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    characters: props.characters,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }));\n};\n\n_s(Index, \"uSdKMBvQhi+5N+w1M4SNSQzEwRo=\");\n\n_c = Index;\n\nIndex.getInitialProps = /*#__PURE__*/function () {\n  var _ref2 = Object(_Users_jonathanhigger_ThrowAway_nextdemo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_jonathanhigger_ThrowAway_nextdemo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(props) {\n    var response, data;\n    return _Users_jonathanhigger_ThrowAway_nextdemo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return fetch('https://rickandmortyapi.com/api/character');\n\n          case 2:\n            response = _context2.sent;\n            _context2.next = 5;\n            return response.json();\n\n          case 5:\n            data = _context2.sent;\n            return _context2.abrupt(\"return\", {\n              characters: data.results\n            });\n\n          case 7:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function (_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJJbmRleCIsInByb3BzIiwidXNlU3RhdGUiLCJjb3VudCIsInNldENvdW50IiwiY2hhcmFjdGVycyIsInNldENoYXJhY3RlcnMiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsInBhcnNlZFJlc3BvbnNlIiwicmVzdWx0cyIsImdldEluaXRpYWxQcm9wcyIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUVDLEtBQUYsRUFBYTtBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxDQUFDLENBQUQsQ0FEWDtBQUFBLE1BQ2hCQyxLQURnQjtBQUFBLE1BQ1RDLFFBRFM7O0FBQUEsbUJBRWFGLHNEQUFRLENBQUMsRUFBRCxDQUZyQjtBQUFBLE1BRWhCRyxVQUZnQjtBQUFBLE1BRUpDLGFBRkk7O0FBSXZCQyx5REFBUyxDQUFFLFlBQU07QUFDYiwrUkFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUN1QkMsS0FBSyxDQUFDLDJDQUFELENBRDVCOztBQUFBO0FBQ01DLHNCQUROO0FBQUE7QUFBQSxxQkFFNkJBLFFBQVEsQ0FBQ0MsSUFBVCxFQUY3Qjs7QUFBQTtBQUVNQyw0QkFGTjtBQUdFTCwyQkFBYSxDQUFFSyxjQUFjLENBQUNDLE9BQWpCLENBQWI7O0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjtBQU9ILEdBUlEsRUFRTixFQVJNLENBQVQ7QUFXQSxTQUNJLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQW9CVCxLQUFwQixDQURKLEVBRUk7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNQyxRQUFRLENBQUNELEtBQUssR0FBRyxDQUFULENBQWQ7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRkosRUFHSSxNQUFDLHVFQUFEO0FBQXFCLGNBQVUsRUFBRUYsS0FBSyxDQUFDSSxVQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FESjtBQU9ILENBdEJEOztHQUFNTCxLOztLQUFBQSxLOztBQXdCTkEsS0FBSyxDQUFDYSxlQUFOO0FBQUEseVNBQXdCLGtCQUFRWixLQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0dPLEtBQUssQ0FBQywyQ0FBRCxDQURSOztBQUFBO0FBQ2RDLG9CQURjO0FBQUE7QUFBQSxtQkFHREEsUUFBUSxDQUFDQyxJQUFULEVBSEM7O0FBQUE7QUFHZEksZ0JBSGM7QUFBQSw4Q0FLYjtBQUNIVCx3QkFBVSxFQUFFUyxJQUFJLENBQUNGO0FBRGQsYUFMYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF4Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFVZVosb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vQ29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENoYXJhY3RlcnNDb250YWluZXIgZnJvbSAnLi4vQ29tcG9uZW50cy9DaGFyYWN0ZXJzQ29udGFpbmVyJ1xuXG5jb25zdCBJbmRleCA9ICggcHJvcHMgKSA9PiB7XG4gICAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtjaGFyYWN0ZXJzLCBzZXRDaGFyYWN0ZXJzXSA9IHVzZVN0YXRlKFtdKVxuXG4gICAgdXNlRWZmZWN0KCAoKSA9PiB7XG4gICAgICAgICggYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyJylcbiAgICAgICAgICAgIGxldCBwYXJzZWRSZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICAgICAgc2V0Q2hhcmFjdGVycyggcGFyc2VkUmVzcG9uc2UucmVzdWx0cyApXG4gICAgICAgIH0pKClcbiAgICAgICAgXG5cbiAgICB9LCBbXSlcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxoMT5Zb3VyIGNvdW50IGlzOiB7Y291bnR9PC9oMT5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0Q291bnQoY291bnQgKyAxKSB9Pis8L2J1dHRvbj5cbiAgICAgICAgICAgIDxDaGFyYWN0ZXJzQ29udGFpbmVyIGNoYXJhY3RlcnM9e3Byb3BzLmNoYXJhY3RlcnN9Lz5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoIHByb3BzICkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcmlja2FuZG1vcnR5YXBpLmNvbS9hcGkvY2hhcmFjdGVyJylcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNoYXJhY3RlcnM6IGRhdGEucmVzdWx0c1xuICAgIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})