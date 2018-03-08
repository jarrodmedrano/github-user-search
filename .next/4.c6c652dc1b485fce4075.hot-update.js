webpackHotUpdate(4,{

/***/ "./src/components/SearchForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);

var _jsxFileName = "/Users/jarrodmedrano/work/github-users/src/components/SearchForm.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var SearchForm = function (_Component) {
  _inherits(SearchForm, _Component);

  function SearchForm() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchForm);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchForm.__proto__ || Object.getPrototypeOf(SearchForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      searchTerm: "",
      serverResponse: []
    }, _this.setSearchTerm = function (e) {
      _this.setState({
        searchTerm: e.target.value
      });
    }, _this.renderUsers = function () {
      var reversedSearch = [].concat(_toConsumableArray(_this.state.serverResponse)).reverse();
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Card */].Group,
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        },
        reversedSearch.map(function (item, id) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Card */],
            { key: item, __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["f" /* Image */], { src: item.avatar_url, __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              }
            }),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Card */].Content,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 35
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Card */].Header,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                  }
                },
                item.login
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Card */].Meta,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                  }
                },
                item.location
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Card */].Description,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  "a",
                  { href: item.html_url, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 39
                    }
                  },
                  item.login
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["b" /* Card */].Content,
              { extra: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                "a",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["e" /* Icon */], { name: "user", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                  }
                }),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  "a",
                  { href: item.followers_url, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 45
                    }
                  },
                  "Followers"
                )
              )
            )
          );
        })
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchForm, [{
    key: "getData",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var res, data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_3_axios___default()("https://api.github.com/users/" + this.state.searchTerm);

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.data;

              case 5:
                data = _context.sent;

                this.setState({
                  serverResponse: [].concat(_toConsumableArray(this.state.serverResponse), [data])
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getData() {
        return _ref2.apply(this, arguments);
      }

      return getData;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Form */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Form */].Group,
          { inline: true, __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["d" /* Form */].Field,
            { inline: true, width: 8, __source: {
                fileName: _jsxFileName,
                lineNumber: 59
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
              placeholder: "Search",
              value: this.state.searchTerm,
              onChange: this.setSearchTerm,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */],
            { primary: true, onClick: function onClick() {
                return _this2.getData();
              }, __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              }
            },
            "Search"
          )
        ),
        this.renderUsers()
      );
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return SearchForm;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = SearchForm;


/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SearchForm, "SearchForm", "/Users/jarrodmedrano/work/github-users/src/components/SearchForm.js");
  reactHotLoader.register(_default, "default", "/Users/jarrodmedrano/work/github-users/src/components/SearchForm.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.c6c652dc1b485fce4075.hot-update.js.map