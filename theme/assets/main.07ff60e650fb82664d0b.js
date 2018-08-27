(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("PropTypes"), require("classNames"), require("ReactRouterDOM"), require("axios"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "PropTypes", "classNames", "ReactRouterDOM", "axios", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["circulation-health"] = factory(require("React"), require("PropTypes"), require("classNames"), require("ReactRouterDOM"), require("axios"), require("ReactDOM"));
	else
		root["circulation-health"] = factory(root["React"], root["PropTypes"], root["classNames"], root["ReactRouterDOM"], root["axios"], root["ReactDOM"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__10__, __WEBPACK_EXTERNAL_MODULE__139__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 142);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _classnames = _interopRequireDefault(__webpack_require__(3));

__webpack_require__(135);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Container =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Container, _React$Component);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, (Container.__proto__ || Object.getPrototypeOf(Container)).apply(this, arguments));
  }

  _createClass(Container, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          sizes = _props.sizes,
          col = _props.col,
          outerWrap = _props.outerWrap,
          padding = _props.padding,
          section = _props.section,
          rest = _objectWithoutProperties(_props, ["className", "children", "sizes", "col", "outerWrap", "padding", "section"]);

      var colClasses = Object.keys(sizes).map(function (size) {
        return "col-".concat(size, "-").concat(sizes[size]);
      });
      var Component = section ? 'section' : 'div';
      return _react.default.createElement(Component, {
        className: (0, _classnames.default)('container-fluid', 'container-component', className, {
          'outer-wrap': outerWrap,
          padding: !padding
        })
      }, _react.default.createElement("div", {
        className: 'row'
      }, col && _react.default.createElement("div", _extends({
        className: (0, _classnames.default)(colClasses)
      }, rest), children), !col && children));
    }
  }]);

  return Container;
}(_react.default.Component);

exports.default = Container;
Object.defineProperty(Container, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    sizes: {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
      xl: 12
    },
    col: true,
    padding: true
  }
});
Object.defineProperty(Container, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    sizes: _propTypes.default.object,
    className: _propTypes.default.string,
    col: _propTypes.default.bool,
    outerWrap: _propTypes.default.bool,
    padding: _propTypes.default.bool
  }
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactRouterDom = __webpack_require__(6);

var _propTypes = __webpack_require__(1);

var _Store = __webpack_require__(5);

var _classnames = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Link =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Link.__proto__ || Object.getPrototypeOf(Link)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        parentItem: false,
        currentPage: undefined
      }
    }), _temp));
  }

  _createClass(Link, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          to = _props.to,
          children = _props.children,
          className = _props.className,
          onClick = _props.onClick;
      var parentItem = this.state.parentItem;
      if (!to) return false;
      var active = to === location.pathname || parentItem;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactRouterDom.Link, {
        className: (0, _classnames.default)(className, {
          active: active
        }),
        to: to,
        onClick: onClick
      }, children));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      var to = nextProps.to,
          primaryNavigation = nextProps.primaryNavigation;
      var currentUrl = location.href;
      var parentItem = undefined;

      if (primaryNavigation) {
        // find parent item
        primaryNavigation.forEach(function (item) {
          if (item.allChildren) {
            item.allChildren.forEach(function (child) {
              if (currentUrl === child.url) {
                parentItem = item;
              }
            });
          }
        });
      }

      if (parentItem && parentItem.url) {
        parentItem = parentItem.url.replace(location.origin, '') === to;
      }

      if (!nextProps.noParentMatch) {
        return {
          parentItem: parentItem
        };
      }

      return {};
    }
  }]);

  return Link;
}(_react.default.Component);

Object.defineProperty(Link, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    noParentMatch: _propTypes.bool
  }
});

var _default = (0, _reactRouterDom.withRouter)((0, _Store.withConsumer)(Link));

exports.default = _default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withConsumer = exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(0));

var actions = _interopRequireWildcard(__webpack_require__(137));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var _createContext = (0, _react.createContext)(null),
    Provider = _createContext.Provider,
    Consumer = _createContext.Consumer;

var Store =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Store, _React$Component);

  function Store() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Store);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Store.__proto__ || Object.getPrototypeOf(Store)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        pages: [],
        posts: [],
        home: [],
        globalOptions: []
      }
    }), _temp));
  }

  _createClass(Store, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      return _react.default.createElement(Provider, {
        value: {
          state: this.state,
          actions: Object.keys(actions).reduce(function (obj, key) {
            obj[key] = actions[key].bind(_this2);
            return obj;
          }, {})
        }
      }, children);
    }
  }]);

  return Store;
}(_react.default.Component);

exports.default = Store;

var withConsumer = function withConsumer(Component) {
  return function (props) {
    return _react.default.createElement(Consumer, null, function (_ref2) {
      var state = _ref2.state,
          actions = _ref2.actions;
      return _react.default.createElement(Component, _extends({}, props, state, actions));
    });
  };
};

exports.withConsumer = withConsumer;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _config = __webpack_require__(20);

var _Container = _interopRequireDefault(__webpack_require__(2));

var _Grid = _interopRequireDefault(__webpack_require__(19));

var _classnames = _interopRequireDefault(__webpack_require__(3));

__webpack_require__(131);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Banner =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Banner, _React$Component);

  function Banner() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Banner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Banner.__proto__ || Object.getPrototypeOf(Banner)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "grid", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        backgroundImage: _this.props.xs
      }
    }), _temp));
  }

  _createClass(Banner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          xs = _props.xs,
          sm = _props.sm,
          md = _props.md,
          lg = _props.lg,
          xl = _props.xl;
      this.grid = new _Grid.default();
      this.grid.register('xs', 'on', function () {
        _this2.setState({
          backgroundImage: xs
        });
      });
      this.grid.register('sm', 'on', function () {
        _this2.setState({
          backgroundImage: sm
        });
      });
      this.grid.register('md', 'on', function () {
        _this2.setState({
          backgroundImage: md
        });
      });
      this.grid.register('lg', 'on', function () {
        _this2.setState({
          backgroundImage: lg
        });
      });
      this.grid.register('xl', 'on', function () {
        _this2.setState({
          backgroundImage: xl
        });
      });
      this.grid.exec();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.grid.destroy();
      this.grid = undefined;
    }
  }, {
    key: "render",
    value: function render() {
      var _props2 = this.props,
          titleContent = _props2.titleContent,
          short = _props2.short,
          overlap = _props2.overlap;
      var backgroundImage = this.state.backgroundImage;
      var style = {
        backgroundImage: "url(".concat(backgroundImage, ")")
      };
      return _react.default.createElement("section", {
        className: (0, _classnames.default)('banner', {
          short: short,
          overlap: overlap
        }),
        style: !overlap ? style : undefined
      }, overlap && _react.default.createElement("div", {
        className: 'overlap-banner',
        style: style
      }), _react.default.createElement(_Container.default, {
        outerWrap: true
      }, _react.default.createElement("div", {
        className: 'inner-banner'
      }, _react.default.createElement("div", {
        className: 'banner-title'
      }, _react.default.createElement("span", {
        className: 'inner-content',
        dangerouslySetInnerHTML: {
          __html: "<h2>".concat(titleContent, "</h2>")
        }
      })), this.props.children)));
    }
  }]);

  return Banner;
}(_react.default.Component);

exports.default = Banner;
Object.defineProperty(Banner, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    xs: _config.themedir + '/img/banner.jpg',
    sm: _config.themedir + '/img/banner.jpg',
    md: _config.themedir + '/img/banner.jpg',
    lg: _config.themedir + '/img/banner.jpg',
    xl: _config.themedir + '/img/banner.jpg',
    titleContent: '',
    short: false
  }
});
Object.defineProperty(Banner, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    xs: _propTypes.default.string,
    sm: _propTypes.default.string,
    md: _propTypes.default.string,
    lg: _propTypes.default.string,
    xl: _propTypes.default.string,
    backgroundImage: _propTypes.default.object,
    titleContent: _propTypes.default.string,
    short: _propTypes.default.bool
  }
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _classnames = _interopRequireDefault(__webpack_require__(3));

__webpack_require__(84);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TypedInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TypedInput, _React$Component);

  function TypedInput() {
    _classCallCheck(this, TypedInput);

    return _possibleConstructorReturn(this, (TypedInput.__proto__ || Object.getPrototypeOf(TypedInput)).apply(this, arguments));
  }

  _createClass(TypedInput, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          label = _props.label,
          className = _props.className,
          id = _props.id,
          big = _props.big,
          rest = _objectWithoutProperties(_props, ["label", "className", "id", "big"]);

      return _react.default.createElement("div", {
        className: (0, _classnames.default)('typed-input', className)
      }, _react.default.createElement("label", {
        htmlFor: id,
        className: 'label'
      }, label), !big && _react.default.createElement("input", _extends({
        id: id,
        name: id,
        className: 'input'
      }, rest)), big && _react.default.createElement("textarea", _extends({
        id: id,
        name: id,
        className: 'input text-area'
      }, rest)));
    }
  }]);

  return TypedInput;
}(_react.default.Component);

exports.default = TypedInput;
Object.defineProperty(TypedInput, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    big: false,
    label: '',
    id: ''
  }
});
Object.defineProperty(TypedInput, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    className: _propTypes.default.string,
    id: _propTypes.default.string.isRequired,
    label: _propTypes.default.string.isRequired,
    big: _propTypes.default.bool
  }
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = stripHtmlTags;

function stripHtmlTags(str) {
  if (!str) return false;else str = str.toString();
  return str.replace(/<[^>]*>/g, '');
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

__webpack_require__(45);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          rest = _objectWithoutProperties(_props, ["children"]);

      return _react.default.createElement("button", rest, children);
    }
  }]);

  return Button;
}(_react.default.Component);

exports.default = Button;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _MagnifyingGlass = _interopRequireDefault(__webpack_require__(59));

var _TypedInput = _interopRequireDefault(__webpack_require__(8));

var _reactRouterDom = __webpack_require__(6);

__webpack_require__(58);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var SearchInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchInput, _React$Component);

  function SearchInput() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, SearchInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = SearchInput.__proto__ || Object.getPrototypeOf(SearchInput)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        value: ''
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        var history = _this.props.history;
        e.preventDefault();
        history.push({
          pathname: '/search/',
          search: "?query=".concat(_this.state.value)
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          value: e.target.value
        });
      }
    }), _temp));
  }

  _createClass(SearchInput, [{
    key: "render",
    value: function render() {
      var searchPlaceholder = this.props.searchPlaceholder;
      return _react.default.createElement("form", {
        className: 'search',
        onSubmit: this.onSubmit
      }, _react.default.createElement("button", {
        type: 'submit',
        className: 'search-submit-button'
      }, _react.default.createElement(_MagnifyingGlass.default, {
        className: 'icon'
      })), _react.default.createElement(_TypedInput.default, {
        id: 'header-search',
        type: 'text',
        label: 'Search',
        placeholder: searchPlaceholder,
        onChange: this.onChange
      }));
    }
  }]);

  return SearchInput;
}(_react.default.Component);

Object.defineProperty(SearchInput, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    searchPlaceholder: 'Search'
  }
});
Object.defineProperty(SearchInput, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    searchPlaceholder: _propTypes.default.string
  }
});

var _default = (0, _reactRouterDom.withRouter)(SearchInput);

exports.default = _default;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

exports.__esModule = true;
var ATTRIBUTE_NAMES = exports.ATTRIBUTE_NAMES = {
    BODY: "bodyAttributes",
    HTML: "htmlAttributes",
    TITLE: "titleAttributes"
};

var TAG_NAMES = exports.TAG_NAMES = {
    BASE: "base",
    BODY: "body",
    HEAD: "head",
    HTML: "html",
    LINK: "link",
    META: "meta",
    NOSCRIPT: "noscript",
    SCRIPT: "script",
    STYLE: "style",
    TITLE: "title"
};

var VALID_TAG_NAMES = exports.VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
    return TAG_NAMES[name];
});

var TAG_PROPERTIES = exports.TAG_PROPERTIES = {
    CHARSET: "charset",
    CSS_TEXT: "cssText",
    HREF: "href",
    HTTPEQUIV: "http-equiv",
    INNER_HTML: "innerHTML",
    ITEM_PROP: "itemprop",
    NAME: "name",
    PROPERTY: "property",
    REL: "rel",
    SRC: "src"
};

var REACT_TAG_MAP = exports.REACT_TAG_MAP = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex"
};

var HELMET_PROPS = exports.HELMET_PROPS = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate"
};

var HTML_TAG_MAP = exports.HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
    obj[REACT_TAG_MAP[key]] = key;
    return obj;
}, {});

var SELF_CLOSING_TAGS = exports.SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];

var HELMET_ATTRIBUTE = exports.HELMET_ATTRIBUTE = "data-react-helmet";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withContactUs;

var _react = _interopRequireDefault(__webpack_require__(0));

var _axios = _interopRequireDefault(__webpack_require__(10));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var formPath = '/wp-json/contact-form-7/v1/contact-forms/91/feedback';
var success = 'mail_sent';

function withContactUs(Component) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(_class2, _React$Component);

      function _class2() {
        var _ref;

        var _temp, _this;

        _classCallCheck(this, _class2);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: {
            email: '',
            'first-name': '',
            'last-name': '',
            phone: '',
            submitted: false,
            message: '',
            responseMessage: ''
          }
        }), Object.defineProperty(_assertThisInitialized(_this), "onSuccess", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: function value(responseMessage) {
            _this.setState({
              submitted: true,
              responseMessage: responseMessage
            });
          }
        }), Object.defineProperty(_assertThisInitialized(_this), "onChange", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: function value(e) {
            _this.setState(_defineProperty({}, e.target.id, e.target.value));
          }
        }), Object.defineProperty(_assertThisInitialized(_this), "onError", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: function value() {}
        }), Object.defineProperty(_assertThisInitialized(_this), "successResponse", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: function value(_ref2) {
            var _ref2$data = _ref2.data,
                status = _ref2$data.status,
                message = _ref2$data.message;
            if (status === success) _this.onSuccess(message);else _this.onError();
          }
        }), Object.defineProperty(_assertThisInitialized(_this), "onSubmit", {
          configurable: true,
          enumerable: true,
          writable: true,
          value: function value(e) {
            e.preventDefault();
            var data = new FormData();
            data.set('email', _this.state.email);
            data.set('first-name', _this.state['first-name']);
            data.set('last-name', _this.state['last-name']);
            data.set('phone', _this.state.phone);
            data.set('message', _this.state.message);
            (0, _axios.default)({
              method: 'post',
              url: formPath,
              data: data,
              config: {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }
            }).then(_this.successResponse).catch(_this.onError);
          }
        }), _temp));
      }

      _createClass(_class2, [{
        key: "render",
        value: function render() {
          var _state = this.state,
              submitted = _state.submitted,
              responseMessage = _state.responseMessage;
          return _react.default.createElement(Component, _extends({
            onSubmit: this.onSubmit,
            onChange: this.onChange,
            onError: this.onError,
            submitted: submitted,
            responseMessage: responseMessage
          }, this.props));
        }
      }]);

      return _class2;
    }(_react.default.Component)
  );
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _classnames = _interopRequireDefault(__webpack_require__(3));

__webpack_require__(82);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubmitButton =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SubmitButton, _React$Component);

  function SubmitButton() {
    _classCallCheck(this, SubmitButton);

    return _possibleConstructorReturn(this, (SubmitButton.__proto__ || Object.getPrototypeOf(SubmitButton)).apply(this, arguments));
  }

  _createClass(SubmitButton, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          className = _props.className,
          rest = _objectWithoutProperties(_props, ["className"]);

      return _react.default.createElement("button", _extends({
        type: 'submit',
        className: (0, _classnames.default)('submit-button', className)
      }, rest), this.props.children || 'Submit Enquiry');
    }
  }]);

  return SubmitButton;
}(_react.default.Component);

exports.default = SubmitButton;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _Grid = _interopRequireDefault(__webpack_require__(19));

var _classnames = _interopRequireDefault(__webpack_require__(3));

var _withMap = _interopRequireDefault(__webpack_require__(112));

__webpack_require__(111);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Map =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Map, _React$Component);

  function Map() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Map);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Map.__proto__ || Object.getPrototypeOf(Map)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "grid", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(_assertThisInitialized(_this), "map", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(_assertThisInitialized(_this), "map2", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(_assertThisInitialized(_this), "mapElement", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: _react.default.createRef()
    }), Object.defineProperty(_assertThisInitialized(_this), "mapElement2", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: _react.default.createRef()
    }), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        size: _this.props.size
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "largeMap", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          style: {
            width: '100%',
            height: 400
          },
          zoom: 15
        });

        google.maps.event.trigger(_this.map, 'resize');
        google.maps.event.trigger(_this.map2, 'resize');
      }
    }), _temp));
  }

  _createClass(Map, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          zoom = _props.zoom,
          style = _props.style,
          map = _props.map,
          map2 = _props.map2;
      var center = {
        lat: Number(map.lat),
        lng: Number(map.lng)
      };
      var center2 = {
        lat: Number(map2.lat),
        lng: Number(map2.lng)
      };
      this.map = new google.maps.Map(this.mapElement.current, {
        disableDefaultUI: true,
        center: center,
        zoom: zoom
      });
      this.map2 = new google.maps.Map(this.mapElement2.current, {
        disableDefaultUI: true,
        center: center2,
        zoom: zoom
      });
      new google.maps.Marker({
        position: center,
        map: this.map
      });
      new google.maps.Marker({
        position: center2,
        map: this.map2
      });
      this.setState({
        style: style
      });
      this.grid = new _Grid.default();
      this.grid.register('xs', 'on', function () {
        _this2.setState({
          style: {
            width: '50%',
            height: 200
          }
        });

        google.maps.event.trigger(_this2.map, 'resize');
        google.maps.event.trigger(_this2.map2, 'resize');
      });
      this.grid.register('sm', 'on', function () {
        _this2.setState({
          style: {
            width: '50%',
            height: 296
          }
        });

        google.maps.event.trigger(_this2.map, 'resize');
        google.maps.event.trigger(_this2.map2, 'resize');
      });
      this.grid.register('md', 'on', this.largeMap);
      this.grid.register('lg', 'on', this.largeMap);
      this.grid.register('xl', 'on', this.largeMap);
      this.grid.exec();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.grid.destroy();
      this.grid = undefined;
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      var style = this.state.style;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('map', className)
      }, _react.default.createElement("div", {
        className: 'block-interaction'
      }), _react.default.createElement("div", {
        className: 'map-element',
        style: style,
        ref: this.mapElement
      }), _react.default.createElement("div", {
        className: 'map-element',
        style: style,
        ref: this.mapElement2
      }));
    }
  }]);

  return Map;
}(_react.default.Component);

Object.defineProperty(Map, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    zoom: 15,
    style: {
      width: '100%',
      height: 200
    },
    map: {
      lat: 0,
      lng: 0
    },
    map2: {
      lat: 0,
      lng: 0
    }
  }
});
Object.defineProperty(Map, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    coords: _propTypes.default.object,
    key: _propTypes.default.string,
    zoom: _propTypes.default.number
  }
});

var _default = (0, _withMap.default)(Map);

exports.default = _default;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Store = __webpack_require__(5);

var _stripHtmlTags = _interopRequireDefault(__webpack_require__(9));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var withNews = function withNews(Component) {
  return (0, _Store.withConsumer)(
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(_class2, _React$Component);

    function _class2() {
      var _ref;

      var _temp, _this;

      _classCallCheck(this, _class2);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: {
          news: []
        }
      }), _temp));
    }

    _createClass(_class2, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var news = [];
        this.props.pages.forEach(function (page) {
          if (page.template === 'news-post.php') {
            news.push({
              title: page.title.rendered,
              link: page.link,
              date: page.acf.date,
              excerpt: (0, _stripHtmlTags.default)(page.excerpt.rendered).substring(0, 50)
            });
          }
        });
        this.setState({
          news: news
        });
      }
    }, {
      key: "render",
      value: function render() {
        var news = this.state.news;
        return _react.default.createElement(Component, _extends({}, this.props, {
          news: news
        }));
      }
    }]);

    return _class2;
  }(_react.default.Component));
};

var _default = withNews;
exports.default = _default;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(119);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Date =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Date, _React$Component);

  function Date() {
    _classCallCheck(this, Date);

    return _possibleConstructorReturn(this, (Date.__proto__ || Object.getPrototypeOf(Date)).apply(this, arguments));
  }

  _createClass(Date, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          day = _props.day,
          month = _props.month;
      return _react.default.createElement("span", {
        className: 'date'
      }, _react.default.createElement("span", {
        className: 'day'
      }, day), _react.default.createElement("span", {
        className: 'month'
      }, month));
    }
  }]);

  return Date;
}(_react.default.Component);

exports.default = Date;
Object.defineProperty(Date, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    day: '',
    month: ''
  }
});
Object.defineProperty(Date, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    day: _propTypes.default.string,
    month: _propTypes.default.string
  }
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _breakPoints = _interopRequireDefault(__webpack_require__(133));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var types = ['On', 'Off'];
var bp = ['xs', 'sm', 'md', 'lg', 'xl'];

var noop = function noop() {};

var capitalise = function capitalise(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var typeCheck = function typeCheck(bp, type) {
  if (!types.includes(type)) throw new Error("Grid error, type must be either ".concat(type.toString().replace(/,/, ' ,')));
  if (!bp.includes(bp)) throw new Error("Grid error, bp be on off ".concat(bp.toString().replace(/,/, ' ,')));
};

var Grid =
/*#__PURE__*/
function () {
  function Grid() {
    var _this = this;

    _classCallCheck(this, Grid);

    Object.defineProperty(this, "current", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "registryTemplate", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        xsOn: noop,
        xsOff: noop,
        smOn: noop,
        smOff: noop,
        mdOn: noop,
        mdOff: noop,
        lgOn: noop,
        lgOff: noop,
        xlOn: noop,
        xlOff: noop
      }
    });
    Object.defineProperty(this, "registry", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: _objectSpread({}, this.registryTemplate)
    });
    Object.defineProperty(this, "resize", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        window.requestAnimationFrame(function () {
          return _this.exec();
        });
      }
    });
    window.addEventListener('resize', this.resize);
  }

  _createClass(Grid, [{
    key: "exec",
    value: function exec() {
      if (window.matchMedia("(max-width: ".concat(_breakPoints.default.xs, "px)")).matches) {
        this.on('xs');
      }

      if (window.matchMedia("(min-width: ".concat(_breakPoints.default.sm, "px) and (max-width: ").concat(_breakPoints.default.md - 1, "px)")).matches) {
        this.on('sm');
      }

      if (window.matchMedia("(min-width: ".concat(_breakPoints.default.md, "px) and (max-width: ").concat(_breakPoints.default.lg - 1, "px)")).matches) {
        this.on('md');
      }

      if (window.matchMedia("(min-width: ".concat(_breakPoints.default.lg, "px) and (max-width: ").concat(_breakPoints.default.xl - 1, "px)")).matches) {
        this.on('lg');
      }

      if (window.matchMedia("(min-width: ".concat(_breakPoints.default.xl, "px)")).matches) {
        this.on('xl');
      }
    }
  }, {
    key: "register",
    value: function register(bp, type, func) {
      type = capitalise(type);
      typeCheck(bp, type);
      this.registry["".concat(bp).concat(type)] = func;
    }
  }, {
    key: "unRegister",
    value: function unRegister(bp, type) {
      type = capitalise(type);
      typeCheck(bp, type);
      this.registry["".concat(bp).concat(type)] = noop;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      window.removeEventListener('resize', this.resize);
      this.registry = _objectSpread({}, this.registryTemplate);
    }
  }, {
    key: "on",
    value: function on(bp) {
      if (this.current !== bp) {
        this.registry["".concat(bp, "On")]();
        this.off(bp);
        this.current = bp;
      }
    }
  }, {
    key: "off",
    value: function off(thisBp) {
      var _this2 = this;

      bp.forEach(function (bp) {
        if (thisBp !== bp) _this2.registry["".concat(bp, "Off")]();
      });
    }
  }]);

  return Grid;
}();

exports.default = Grid;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themedir = void 0;
var themedir = CONFIG.THEME_DIR;
exports.themedir = themedir;

/***/ }),
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _Link = _interopRequireDefault(__webpack_require__(4));

var _Container = _interopRequireDefault(__webpack_require__(2));

var _stripHtmlTags = _interopRequireDefault(__webpack_require__(9));

__webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var SearchResult =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SearchResult, _React$Component);

  function SearchResult() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, SearchResult);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = SearchResult.__proto__ || Object.getPrototypeOf(SearchResult)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        content: undefined,
        regex: undefined
      }
    }), _temp));
  }

  _createClass(SearchResult, [{
    key: "render",
    value: function render() {
      var page = this.props.page;
      if (!page) return false;
      var resultTitle = page.title,
          link = page.link;
      var _state = this.state,
          snippets = _state.snippets,
          regex = _state.regex;
      return _react.default.createElement(_Container.default, {
        className: 'search-result'
      }, _react.default.createElement(_Link.default, {
        to: link.replace(location.origin, ''),
        className: 'search-card'
      }, _react.default.createElement("h3", {
        className: 'h5'
      }, resultTitle.rendered), snippets.map(function (snippet, i) {
        snippet = snippet.trim().replace(regex, "<b>$1</b>");
        return _react.default.createElement("p", {
          key: i
        }, "...", _react.default.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: snippet
          }
        }), "...");
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref2, nextState) {
      var page = _ref2.page,
          searchTerm = _ref2.searchTerm;

      if (!page || !searchTerm) {
        return {
          page: undefined
        };
      }

      var content = (0, _stripHtmlTags.default)(page.content.rendered);
      var contentLength = content.length;
      var snippets = getIndicesOf(content, searchTerm).map(function (index) {
        var startIndex = index - 25;
        var endIndex = index + 25;
        if (startIndex < 0) startIndex = 0;
        if (endIndex > contentLength) endIndex = contentLength;
        return content.substr(startIndex, endIndex);
      });
      return {
        snippets: snippets,
        regex: new RegExp("(".concat(searchTerm, ")"), 'ig')
      };
    }
  }]);

  return SearchResult;
}(_react.default.Component);

exports.default = SearchResult;
Object.defineProperty(SearchResult, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    page: _propTypes.default.object,
    searchTerm: _propTypes.default.string
  }
});

function getIndicesOf(str, searchStr) {
  var searchStrLen = searchStr.length;
  var indices = [];
  var startIndex = 0;
  var index;
  str = str.toLowerCase();
  searchStr = searchStr.toLowerCase();

  while ((index = str.indexOf(searchStr, startIndex)) > -1) {
    indices.push(index);
    startIndex = index + searchStrLen;
  }

  return indices;
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _axios = _interopRequireDefault(__webpack_require__(10));

var _reactRouterDom = __webpack_require__(6);

var _Container = _interopRequireDefault(__webpack_require__(2));

var _SearchResult = _interopRequireDefault(__webpack_require__(27));

var _TypedInput = _interopRequireDefault(__webpack_require__(8));

var _Button = _interopRequireDefault(__webpack_require__(11));

__webpack_require__(24);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var searchPath = "".concat(location.origin, "/wp-json/wp/v2/pages?search=");

var Search =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search(props) {
    var _ref;

    var _this;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this, props].concat(rest)));

    _initialiseProps.call(_assertThisInitialized(_this));

    var searchTerm = _this.props.location.search.replace('?query=', '');

    _this.state = {
      result: [],
      searchTerm: searchTerm,
      inputVal: searchTerm
    };
    return _this;
  }

  _createClass(Search, [{
    key: "performSearch",
    value: function performSearch(searchTerm) {
      var _this2 = this;

      if (searchTerm) {
        _axios.default.get("".concat(searchPath).concat(searchTerm)).then(function (result) {
          return _this2.setState({
            searchTerm: searchTerm,
            result: result.data
          });
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var searchTerm = this.state.searchTerm;
      var history = this.props.history;
      this.locationListener = history.listen(this.onLocationChange);
      this.onLocationChange();
      this.performSearch(searchTerm);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.locationListener();
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          result = _state.result,
          searchTerm = _state.searchTerm,
          inputVal = _state.inputVal;
      var _props = this.props,
          title = _props.title,
          searchPlaceholder = _props.searchPlaceholder,
          buttonText = _props.buttonText;
      return _react.default.createElement(_Container.default, {
        className: 'search-page',
        outerWrap: true
      }, _react.default.createElement("h2", {
        className: 'h1'
      }, title.rendered), _react.default.createElement("form", {
        onSubmit: this.onSubmit,
        className: 'form'
      }, _react.default.createElement(_TypedInput.default, {
        onChange: this.onChange,
        placeholder: searchPlaceholder,
        id: 'email',
        label: 'email-address',
        type: 'search',
        required: true,
        value: inputVal,
        className: 'text-input'
      }), _react.default.createElement(_Button.default, {
        type: 'submit',
        className: 'button'
      }, buttonText)), result.map(function (page) {
        return _react.default.createElement(_SearchResult.default, {
          key: page.id,
          page: page,
          searchTerm: searchTerm
        });
      }), result.length === 0 && _react.default.createElement("h3", {
        className: 'no-results'
      }, "No results found"));
    }
  }]);

  return Search;
}(_react.default.Component);

Object.defineProperty(Search, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    title: _propTypes.default.object,
    searchPlaceholder: _propTypes.default.string,
    buttonText: _propTypes.default.string
  }
});
Object.defineProperty(Search, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    title: {
      rendered: 'Search Results'
    },
    searchPlaceholder: 'Search',
    buttonText: 'Search'
  }
});

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  Object.defineProperty(this, "locationListener", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: undefined
  });
  Object.defineProperty(this, "onSubmit", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(e) {
      e.preventDefault();
      var _this3$props = _this3.props,
          pathname = _this3$props.location.pathname,
          history = _this3$props.history;
      var inputVal = _this3.state.inputVal;
      history.push({
        pathname: pathname,
        search: "?query=".concat(inputVal)
      });
    }
  });
  Object.defineProperty(this, "onChange", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value(e) {
      _this3.setState({
        inputVal: e.target.value
      });
    }
  });
  Object.defineProperty(this, "onLocationChange", {
    configurable: true,
    enumerable: true,
    writable: true,
    value: function value() {
      var searchTerm = location.search.replace('?query=', '');

      _this3.performSearch(searchTerm);
    }
  });
};

var _default = (0, _reactRouterDom.withRouter)(Search);

exports.default = _default;

/***/ }),
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Close = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Close =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Close, _React$Component);

  function Close() {
    _classCallCheck(this, Close);

    return _possibleConstructorReturn(this, (Close.__proto__ || Object.getPrototypeOf(Close)).apply(this, arguments));
  }

  _createClass(Close, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("svg", _extends({}, this.props, {
        viewBox: "0 0 16 16"
      }), _react.default.createElement("g", {
        id: "Page-1",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, _react.default.createElement("g", {
        id: "320-DP-MyProperty-Hub---Trans-closed-Copy-5",
        transform: "translate(-280.000000, -24.000000)"
      }, _react.default.createElement("g", {
        id: "iconClose",
        transform: "translate(276.000000, 20.000000)"
      }, _react.default.createElement("polygon", {
        id: "boundingBox",
        points: "24 0 0 0 0 24 24 24 24 0"
      }), _react.default.createElement("path", {
        d: "M6,18 L18,6",
        id: "Line",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "square"
      }), _react.default.createElement("path", {
        d: "M6,18 L18,6",
        id: "Line",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "square",
        transform: "translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "
      })))));
    }
  }]);

  return Close;
}(_react.default.Component);

exports.Close = Close;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _Link = _interopRequireDefault(__webpack_require__(4));

var _Close = __webpack_require__(31);

var _Container = _interopRequireDefault(__webpack_require__(2));

var _SearchInput = _interopRequireDefault(__webpack_require__(12));

var _classnames = _interopRequireDefault(__webpack_require__(3));

__webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var MobileNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MobileNav, _React$Component);

  function MobileNav() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, MobileNav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = MobileNav.__proto__ || Object.getPrototypeOf(MobileNav)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "closeMenu", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return _this.props.closeMenu(false);
      }
    }), _temp));
  }

  _createClass(MobileNav, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          searchPlaceholder = _props.searchPlaceholder,
          navItems = _props.navItems,
          visible = _props.visible;
      return _react.default.createElement("nav", {
        className: (0, _classnames.default)('mobile-nav', {
          visible: visible
        })
      }, _react.default.createElement(_Container.default, null, _react.default.createElement("div", {
        className: 'close-wrapper'
      }, _react.default.createElement("button", {
        onClick: this.closeMenu,
        className: 'button'
      }, _react.default.createElement(_Close.Close, {
        className: 'close-icon'
      }))), _react.default.createElement(_SearchInput.default, {
        searchPlaceholder: searchPlaceholder
      }), this.renderMenu(navItems)));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu(navItems) {
      var _this2 = this;

      return _react.default.createElement("ul", null, navItems.map(function (_ref2) {
        var url = _ref2.url,
            title = _ref2.title,
            id = _ref2.ID,
            children = _ref2.children;
        return _react.default.createElement("li", {
          key: id
        }, url !== 'http://undefined' && _react.default.createElement(_Link.default, {
          noParentMatch: true,
          to: url.replace(location.origin, '') || '/',
          onClick: _this2.closeMenu
        }, title.toUpperCase()), url === 'http://undefined' && _react.default.createElement("a", null, title.toUpperCase()), children && _this2.renderMenu(children));
      }));
    }
  }]);

  return MobileNav;
}(_react.default.Component);

exports.default = MobileNav;
Object.defineProperty(MobileNav, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    navItems: _propTypes.default.array,
    searchPlaceholder: _propTypes.default.string,
    closeMenu: _propTypes.default.func,
    visible: _propTypes.default.bool
  }
});
Object.defineProperty(MobileNav, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    navItems: [],
    searchPlaceholder: 'Search',
    closeMenu: function closeMenu() {}
  }
});

/***/ }),
/* 33 */,
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _classnames = _interopRequireDefault(__webpack_require__(3));

var _Container = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ThirdsContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ThirdsContainer, _React$Component);

  function ThirdsContainer() {
    _classCallCheck(this, ThirdsContainer);

    return _possibleConstructorReturn(this, (ThirdsContainer.__proto__ || Object.getPrototypeOf(ThirdsContainer)).apply(this, arguments));
  }

  _createClass(ThirdsContainer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          sizes = _props.sizes,
          colClass = _props.colClass,
          className = _props.className;
      var colClasses = Object.keys(sizes).map(function (size) {
        return "col-".concat(size, "-").concat(sizes[size]);
      });
      return _react.default.createElement(_Container.default, {
        className: className,
        outerWrap: true,
        col: false
      }, _react.default.createElement("div", {
        className: (0, _classnames.default)(colClasses, colClass)
      }, children[0]), _react.default.createElement("div", {
        className: (0, _classnames.default)(colClasses, colClass)
      }, children[1]), _react.default.createElement("div", {
        className: (0, _classnames.default)(colClasses, colClass)
      }, children[2]));
    }
  }]);

  return ThirdsContainer;
}(_react.default.Component);

exports.default = ThirdsContainer;
Object.defineProperty(ThirdsContainer, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    sizes: {
      xs: 12,
      sm: 4,
      md: 4,
      lg: 4,
      xl: 4
    }
  }
});
Object.defineProperty(ThirdsContainer, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    sizes: _propTypes.default.object,
    className: _propTypes.default.string,
    colClass: _propTypes.default.string
  }
});

/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _Container = _interopRequireDefault(__webpack_require__(2));

__webpack_require__(37);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactUs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContactUs, _React$Component);

  function ContactUs() {
    _classCallCheck(this, ContactUs);

    return _possibleConstructorReturn(this, (ContactUs.__proto__ || Object.getPrototypeOf(ContactUs)).apply(this, arguments));
  }

  _createClass(ContactUs, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          title = _props.title,
          types = _props.types;
      return _react.default.createElement(_Container.default, {
        padding: false,
        className: 'contact-us'
      }, _react.default.createElement("h2", null, title), _react.default.createElement("ul", {
        className: 'list'
      }, types && types.map(function (_ref, i) {
        var type = _ref.type,
            label = _ref.label,
            detail = _ref.detail;
        return _react.default.createElement("li", {
          key: i,
          className: 'item'
        }, label, ":", ' ', type !== 'addr' && _react.default.createElement("a", {
          className: 'link',
          href: "".concat(type, ":").concat(detail)
        }, detail), type === 'addr' && _react.default.createElement("p", {
          className: 'link'
        }, detail));
      })));
    }
  }]);

  return ContactUs;
}(_react.default.Component);

exports.default = ContactUs;
Object.defineProperty(ContactUs, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    title: '',
    types: []
  }
});
Object.defineProperty(ContactUs, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    title: _propTypes.default.string,
    types: _propTypes.default.arrayOf(_propTypes.default.object)
  }
});

/***/ }),
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _Container = _interopRequireDefault(__webpack_require__(2));

__webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Social =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Social, _React$Component);

  function Social() {
    _classCallCheck(this, Social);

    return _possibleConstructorReturn(this, (Social.__proto__ || Object.getPrototypeOf(Social)).apply(this, arguments));
  }

  _createClass(Social, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          title = _props.title,
          icons = _props.icons;
      return _react.default.createElement(_Container.default, {
        className: 'social',
        col: false
      }, _react.default.createElement("h2", null, title), _react.default.createElement("ul", {
        className: 'list'
      }, icons.length > 0 && icons.map(function (_ref, i) {
        var link = _ref.link,
            icon = _ref.icon;
        return _react.default.createElement("li", {
          key: i,
          className: 'link'
        }, _react.default.createElement("a", {
          href: link
        }, icon && _react.default.createElement("img", {
          src: icon.url
        })));
      })));
    }
  }]);

  return Social;
}(_react.default.Component);

exports.default = Social;
Object.defineProperty(Social, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    icons: []
  }
});
Object.defineProperty(Social, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    title: _propTypes.default.string
  }
});

/***/ }),
/* 42 */,
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 44 */,
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _Container = _interopRequireDefault(__webpack_require__(2));

var _TypedInput = _interopRequireDefault(__webpack_require__(8));

var _Button = _interopRequireDefault(__webpack_require__(11));

var _axios = _interopRequireDefault(__webpack_require__(10));

__webpack_require__(43);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var formPath = '/wp-json/contact-form-7/v1/contact-forms/87/feedback';
var success = 'mail_sent';

var Subscribe =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Subscribe, _React$Component);

  function Subscribe() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Subscribe);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Subscribe.__proto__ || Object.getPrototypeOf(Subscribe)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        email: '',
        submitted: false,
        message: ''
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState(_defineProperty({}, e.target.id, e.target.value));
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onSuccess", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(message) {
        _this.setState({
          submitted: true,
          message: message
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onError", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {}
    }), Object.defineProperty(_assertThisInitialized(_this), "successResponse", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_ref2) {
        var _ref2$data = _ref2.data,
            status = _ref2$data.status,
            message = _ref2$data.message;
        if (status === success) _this.onSuccess(message);else _this.onError();
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();
        var data = new FormData();
        data.set('your-email', _this.state.email);
        (0, _axios.default)({
          method: 'post',
          url: formPath,
          data: data,
          config: {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        }).then(_this.successResponse).catch(_this.onError);
      }
    }), _temp));
  }

  _createClass(Subscribe, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          title = _props.title,
          buttonText = _props.buttonText,
          subscribePlaceholder = _props.subscribePlaceholder;
      var _state = this.state,
          message = _state.message,
          submitted = _state.submitted;
      return _react.default.createElement(_Container.default, {
        padding: false,
        col: true,
        className: 'subscribe'
      }, _react.default.createElement("h2", null, title), !submitted && _react.default.createElement("form", {
        onSubmit: this.onSubmit,
        className: 'form'
      }, subscribePlaceholder && _react.default.createElement(_TypedInput.default, {
        onChange: this.onChange,
        placeholder: subscribePlaceholder,
        id: 'email',
        label: 'email-address',
        type: 'email',
        required: true,
        className: 'text-input'
      }), buttonText && _react.default.createElement(_Button.default, {
        type: 'submit',
        className: 'button'
      }, buttonText)), submitted && _react.default.createElement("p", {
        className: 'h3'
      }, message));
    }
  }]);

  return Subscribe;
}(_react.default.Component);

exports.default = Subscribe;
Object.defineProperty(Subscribe, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    title: _propTypes.default.string,
    buttonText: _propTypes.default.string,
    subscribePlaceholder: _propTypes.default.string
  }
});

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _Subscribe = _interopRequireDefault(__webpack_require__(46));

var _Social = _interopRequireDefault(__webpack_require__(41));

var _ContactUs = _interopRequireDefault(__webpack_require__(38));

var _ThirdsContainer = _interopRequireDefault(__webpack_require__(35));

__webpack_require__(34);

var _reactRouterDom = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          contactDetails = _props.contactDetails,
          subscribeTitle = _props.subscribeTitle,
          subscribePlaceholder = _props.subscribePlaceholder,
          subscribeButton = _props.subscribeButton,
          socialLinks = _props.socialLinks,
          socialTitle = _props.socialTitle,
          contactTitle = _props.contactTitle,
          smallFooterLink = _props.smallFooterLink;
      return _react.default.createElement("footer", {
        className: 'footer'
      }, _react.default.createElement(_ThirdsContainer.default, null, _react.default.createElement("div", {
        className: 'footer-cols'
      }, _react.default.createElement(_ContactUs.default, {
        title: contactTitle,
        types: contactDetails || undefined
      })), (socialTitle || '').trim() && _react.default.createElement("div", {
        className: 'footer-cols'
      }, _react.default.createElement(_Social.default, {
        title: socialTitle,
        icons: socialLinks
      })), (subscribeTitle || '').trim() && _react.default.createElement("div", {
        className: 'footer-cols'
      }, _react.default.createElement(_Subscribe.default, {
        buttonText: subscribeButton,
        subscribePlaceholder: subscribePlaceholder,
        title: subscribeTitle
      }))), _react.default.createElement("div", {
        className: 'privacy-container'
      }, _react.default.createElement(_ThirdsContainer.default, null, _react.default.createElement("div", {
        className: 'privacy'
      }, smallFooterLink && _react.default.createElement(_reactRouterDom.Link, {
        to: smallFooterLink.url.replace(location.origin, '') || '/'
      }, smallFooterLink.title || 'Disclaimer and Privacy Policy')), _react.default.createElement("div", null), _react.default.createElement("div", null))));
    }
  }]);

  return Footer;
}(_react.default.Component);

exports.default = Footer;
Object.defineProperty(Footer, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    contactDetails: _propTypes.default.array,
    subscribeTitle: _propTypes.default.string,
    subscribePlaceholder: _propTypes.default.string,
    subscribeButton: _propTypes.default.string,
    socialLinks: _propTypes.default.array,
    socialTitle: _propTypes.default.string,
    contactTitle: _propTypes.default.string,
    privacyLink: _propTypes.default.string,
    privacyLinkText: _propTypes.default.string
  }
});

/***/ }),
/* 48 */,
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Logo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Logo, _React$Component);

  function Logo() {
    _classCallCheck(this, Logo);

    return _possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).apply(this, arguments));
  }

  _createClass(Logo, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("svg", _extends({
        viewBox: '0 0 90 90'
      }, this.props), _react.default.createElement("defs", null, _react.default.createElement("linearGradient", {
        x1: "-34.262%",
        y1: "91.501%",
        x2: "129.206%",
        y2: "9.68%",
        id: "a"
      }, _react.default.createElement("stop", {
        stopColor: "#78A7C0",
        offset: "6.287%"
      }), _react.default.createElement("stop", {
        stopColor: "#D04A5D",
        offset: "35.12%"
      })), _react.default.createElement("linearGradient", {
        x1: "-33.92%",
        y1: "91.482%",
        x2: "128.776%",
        y2: "9.661%",
        id: "b"
      }, _react.default.createElement("stop", {
        stopColor: "#78A7C0",
        offset: "31.91%"
      }), _react.default.createElement("stop", {
        stopColor: "#D04A5D",
        offset: "79.8%"
      })), _react.default.createElement("linearGradient", {
        x1: "46.194%",
        y1: "49.918%",
        x2: "22.077%",
        y2: "62.089%",
        id: "c"
      }, _react.default.createElement("stop", {
        stopColor: "#D04A5D",
        offset: "59.03%"
      }), _react.default.createElement("stop", {
        stopColor: "#78A7C0",
        offset: "98.14%"
      })), _react.default.createElement("linearGradient", {
        x1: "47.641%",
        y1: "50.531%",
        x2: "57.272%",
        y2: "64.021%",
        id: "d"
      }, _react.default.createElement("stop", {
        stopColor: "#D04A5D",
        offset: "59.03%"
      }), _react.default.createElement("stop", {
        stopColor: "#78A7C0",
        offset: "98.14%"
      })), _react.default.createElement("linearGradient", {
        x1: "47.622%",
        y1: "50.502%",
        x2: "57.252%",
        y2: "63.991%",
        id: "e"
      }, _react.default.createElement("stop", {
        stopColor: "#D04A5D",
        offset: "59.03%"
      }), _react.default.createElement("stop", {
        stopColor: "#78A7C0",
        offset: "98.14%"
      })), _react.default.createElement("linearGradient", {
        x1: "43.699%",
        y1: "89.047%",
        x2: "56.527%",
        y2: "10.49%",
        id: "f"
      }, _react.default.createElement("stop", {
        stopColor: "#78A7C0",
        offset: "28.95%"
      }), _react.default.createElement("stop", {
        stopColor: "#9098AB",
        offset: "35.29%"
      }), _react.default.createElement("stop", {
        stopColor: "#A88490",
        offset: "44.92%"
      }), _react.default.createElement("stop", {
        stopColor: "#B8737D",
        offset: "54.9%"
      }), _react.default.createElement("stop", {
        stopColor: "#C3646E",
        offset: "65.15%"
      }), _react.default.createElement("stop", {
        stopColor: "#CB5664",
        offset: "75.78%"
      }), _react.default.createElement("stop", {
        stopColor: "#CF4D5F",
        offset: "87.05%"
      }), _react.default.createElement("stop", {
        stopColor: "#D04A5D",
        offset: "100%"
      }))), _react.default.createElement("g", {
        fillRule: "nonzero",
        fill: "none"
      }, _react.default.createElement("path", {
        d: "M11.4 24.5s6.4 9.4 6.1 12.6c-.3 3.2 1.8 1.2 1.8 1.2s-.2-7.8-6.4-15-1.5 1.2-1.5 1.2z",
        fill: "#D04A5D"
      }), _react.default.createElement("path", {
        d: "M45.1 88.9C20.7 88.9.8 69 .8 44.6S20.7.3 45.1.3s44.3 19.9 44.3 44.3c.1 24.4-19.8 44.3-44.3 44.3zm0-83.4C23.6 5.5 6 23 6 44.6c0 21.5 17.5 39.1 39.1 39.1 21.5 0 39.1-17.5 39.1-39.1S66.7 5.5 45.1 5.5z",
        fill: "#78A7C0"
      }), _react.default.createElement("path", {
        d: "M45.1 5.5c21.5 0 39.1 17.5 39.1 39.1v.3c1.8.1 3.5.2 5.2.4v-.7C89.4 20.2 69.5.3 45.1.3 20.8.3 1 20 .8 44.3H6C6.2 22.9 23.7 5.5 45.1 5.5z",
        fill: "#D04A5D"
      }), _react.default.createElement("path", {
        d: "M32.3 4.5s4.9 3.9 7.4 8.4 4.4 9.8 4.8 11.6c.4 1.8 6.6 10.4 8.2 11.7 0 0-5-7.3-6.6-11.1-1.5-3.8-1.5-6.8-2.6-8.6-1.2-1.8-5-11.4-5-11.4l-6.2-.6z",
        fill: "#D04A5D"
      }), _react.default.createElement("path", {
        d: "M39.1 10s-2 3.4-4.8 7.9c-2.8 4.4-6.7 8.9-8.1 10.2-1.4 1.3-6.2 10.8-6.7 12.7 0 0 4.2-7.9 6.9-11.2 2.7-3.3 5.4-5 6.5-6.9 1.1-1.9 7.9-10.3 7.9-10.3L39.1 10z",
        fill: "#D04A5D"
      }), _react.default.createElement("path", {
        d: "M63.8 6.4s-.8 3.6-2.3 6.4c-1.5 2.8-2 3.9-3.8 5.6-1.8 1.7-3.8 3.3-4.1 4.1-.3.9-2 3-1.8 8.5.2 5.5.1 6.8-.1 10s-.6 6.9-1.7 10.1c-1.1 3.2-1.3 3.7-1.3 3.7l5.1-5.3s.1-3.6-.2-6.8c-.3-3.2-1-10.8-.9-14 .2-3.2 1-5.8 2.7-7.2 1.7-1.4 4.2-3.8 6-5.4 7.9-7.2 2.4-9.7 2.4-9.7z",
        fill: "url(#a)"
      }), _react.default.createElement("path", {
        d: "M48.7 54.8s-.1 3.6.2 6.8c.3 3.2 1 10.8.9 14-.2 3.2-1 5.8-2.7 7.2-1.2 1-2.8 2.6-4.3 3.9.3.1.6.1.9.2.3-.4.7-.8 1.1-1.2 1.8-1.7 3.8-3.3 4.1-4.1.3-.9 2-3 1.8-8.5-.2-5.5-.1-6.8.1-10s.6-6.9 1.7-10.1c1.1-3.2 1.3-3.7 1.3-3.7l-5.1 5.5z",
        fill: "#78A7C0"
      }), _react.default.createElement("path", {
        d: "M82.2 30.6s-.8 3.6-2.3 6.4c-1.5 2.8-2 3.9-3.8 5.6-1.8 1.7-3.8 3.3-4.1 4.1-.3.8-2 3-1.8 8.5.2 5.5.1 6.8-.1 10s-.6 6.9-1.7 10.1C67.3 78.5 67 79 67 79l5.1-5.3s.1-3.6-.2-6.8c-.3-3.2-1-10.8-.9-14 .2-3.2 1-5.8 2.7-7.2 1.7-1.4 4.2-3.8 6-5.4 8-7.2 2.5-9.7 2.5-9.7z",
        fill: "url(#b)"
      }), _react.default.createElement("path", {
        d: "M45.4 24.9s.6-1.6 1.4-2.8c.8-1.2 1.2-1.7 2.1-2.5.9-.8 2-1.5 2.2-1.9.2-.4 1.1-1.4 1.3-3.7.2-2.3.3-2.8.5-4.2.3-1.3.6-2.9 1.3-4.3l.8-1.6-2.7 2.5s-.2 1.5-.3 2.9c0 1.3 0 4.5-.3 5.8-.3 1.3-.8 2.5-1.7 3.2-.9.7-2.2 1.8-3.2 2.6-3.9 3.2-1.4 4-1.4 4z",
        fill: "#D04A5D"
      }), _react.default.createElement("path", {
        d: "M29.7 54.7s-.6 1.8-1.5 3.3c-1 1.5-1.3 2.1-2.3 3.1-1.1 1-2.3 2-2.5 2.4-.2.5-1.2 1.6-1.4 4.3-.1 2.7-.2 3.3-.4 4.9-.3 1.6-.6 3.4-1.3 5.1-.8 1.7-.9 1.9-.9 1.9l3.1-3.1s.2-1.8.2-3.3c-.1-1.5-.2-5.1 0-6.7.2-1.6.8-2.9 1.8-3.8 1-.9 2.5-2.3 3.6-3.2 4.6-4.2 1.6-4.9 1.6-4.9z",
        fill: "#78A7C0"
      }), _react.default.createElement("path", {
        d: "M38.9 12.5s1.6-.4 3.1-.4 2.1 0 3.3.3c1.2.3 2.4.7 2.9.7.4 0 1.8.1 3.8-1 2-1.2 2.5-1.4 3.7-2 1.3-.5 2.7-1.2 4.3-1.4 1.6-.2 1.8-.3 1.8-.3l-3.6-.8s-1.4.7-2.5 1.4-3.7 2.5-4.9 3.1c-1.2.6-2.5.8-3.5.5-1.1-.3-2.8-.8-3.9-1.1-5.3-1.5-4.5 1-4.5 1zM24.9 31.4s-.3-1.5-.3-3.1 0-2.2.1-3.6.4-2.9.4-3.3c0-.4.1-1.9-.6-3.6-.7-1.7-.8-2.1-1.1-3.2-.3-1.1-.7-2.4-.8-4-.1-1.6-.1-1.8-.1-1.8l-.5 4.1s.4 1.2.8 2.1c.4.9 1.5 2.9 1.8 3.9.3 1.1.5 2.3.3 3.6-.2 1.3-.4 3.3-.6 4.6-.9 6.2.6 4.3.6 4.3z",
        fill: "#D04A5D"
      }), _react.default.createElement("path", {
        d: "M29.2 54.6s1.6-8.6 2-10.2c.4-1.6.5-2.2 1.1-3.5.5-1.3 1.1-2.7 1.2-3.1.1-.4.6-1.8.3-3.6-.2-1.8-.3-2.2-.3-3.3 0-1.2 0-2.5.2-4.1.3-1.6-.1-6.4-.1-6.4l-.7 2.3s-.3 7.5-.1 8.4c.2 1 .7 3.1.7 4.3 0 1.2-.1 2.4-.6 3.5-.5 1.2-1.2 3-1.8 4.3-2.3 5.8-1.9 11.4-1.9 11.4z",
        fill: "url(#c)"
      }), _react.default.createElement("path", {
        d: "M51.7 55.4s-4.3-7.7-5-9.1c-.7-1.5-1-2-1.4-3.3-.4-1.3-.8-2.8-1-3.2-.2-.4-.7-1.8-2-3s-1.6-1.5-2.3-2.4c-.7-.9-1.6-1.9-2.4-3.3-.8-1.4-4.2-4.9-4.2-4.9v2s5.5 6.2 6.2 6.8c.8.6 2.5 2 3.3 2.8.8.8 1.4 1.9 1.7 3.1.3 1.2 1 3.1 1.4 4.5 1.7 5.9 5.7 10 5.7 10z",
        fill: "url(#d)"
      }), _react.default.createElement("path", {
        d: "M70.9 64.9s-4.3-7.7-5-9.1c-.7-1.5-1-2-1.4-3.3-.4-1.3-.8-2.8-1-3.2-.2-.4-.7-1.8-2-3s-1.6-1.5-2.3-2.4c-.7-.9-1.6-1.9-2.4-3.3-.8-1.4-4.2-4.9-4.2-4.9v2s5.5 6.2 6.2 6.8c.8.6 2.5 2 3.3 2.8.8.8 1.4 1.9 1.7 3.1.4 1.2 1 3.1 1.4 4.5 1.7 5.9 5.7 10 5.7 10z",
        fill: "url(#e)"
      }), _react.default.createElement("path", {
        d: "M17.4 72.1s-.3-1.5-.3-3.1 0-2.2.1-3.6c.2-1.4.4-2.9.4-3.3 0-.4.1-1.9-.6-3.6-.7-1.7-.8-2.1-1.1-3.2-.3-1.1-.7-2.4-.8-4-.1-1.6-.1-1.9-.1-1.9l-1-.2s1 5.5 1.4 6.4c.4.9 1.5 2.9 1.8 3.9.3 1.1.5 2.3.3 3.6-.2 1.3-.4 3.3-.6 4.6-1 6.3.5 4.4.5 4.4zM50.3 52.7s-1.4-.3-2.8-.8-2-.7-3.2-1.2c-1.2-.5-2.5-1.2-2.9-1.3-.4-.1-1.7-.6-3.2-.7-1.5-.1-1.9-.1-2.9-.2s-2.2-.3-3.6-.7c-1.4-.4-1.6-.5-1.6-.5l-.3.6s5 1 5.8 1c.8 0 2.7-.1 3.7 0s2.1.4 3.2.9 2.8 1.3 4 1.8c5.4 2.6 3.8 1.1 3.8 1.1zM30.1 55.7s1.5-1.5 2.9-1.1c1.4.5 1.9.7 3.1 1.2 1.2.6 2.4 1.3 2.8 1.4.4.1 1.6.7 3.3.6 1.6-.1 2-.1 3.1 0s2.3.2 3.7.5c1.4.4 1.6.4 1.6.4l-.7-2.5s-3.9.8-4.8.9c-.9.1-2.9.4-4 .3-1 0-2.1-.3-3.2-.9-1-.5-2.7-1.4-3.8-2-5-2.4-4 1.2-4 1.2z",
        fill: "#78A7C0"
      }), _react.default.createElement("path", {
        d: "M5.9 49.7s14.2-2.1 23.2 5.1c9 7.2 12.2 16.8 9.4 30.1h2.2c-.1 0 8.2-40.2-34.8-35.2z",
        fill: "#78A7C0"
      }), _react.default.createElement("path", {
        d: "M7.4 34.3s8.7 2.2 12.1 6.5c3.4 4.4 8 11.7 8 11.7l2.3 1.3s-7.9-13.6-9.7-15.2c-2-1.7-9.3-5.5-12.7-6.7-3.4-1.2 0 2.4 0 2.4z",
        fill: "url(#f)"
      }), _react.default.createElement("path", {
        d: "M64.2 61.2c-.7.3-1.3.7-1.3.7s-4 8.1-8.9 10.5c-5 2.4-13.1 5.4-13.1 5.4l-1.7 1.9s14.9-4.9 16.8-6.3c2.1-1.5 7.4-7.9 9.2-11 .2-.4.4-.7.4-.9-.5-.1-1-.2-1.4-.3z",
        fill: "#78A7C0"
      }), _react.default.createElement("path", {
        d: "M52.7 36.2s6.5-1.1 9.6-3.3c3.1-2.2 7.5-6.1 7.4-8.8-.1-2.5-.2-10.1-.2-10.1l2.3-3s.4 9.2.1 11.7c-.3 2.6-2.9 13.4-19.2 13.5z",
        fill: "#D04A5D"
      }), _react.default.createElement("path", {
        d: "M88.5 50.9s-3.1 5.8-6.1 8c-3.1 2.2-8.2 5.2-10.7 4.3-2.5-.9-21-7.2-21-7.2l-.7 2s17.2 6.2 19.7 6.8c2.4.5 13.5 1.5 18.8-13.9z",
        fill: "#78A7C0"
      }), _react.default.createElement("path", {
        d: "M47.1 26.9s-3.7-.3-5.5-1.4c-1.7-1.1-4.2-3.1-4-4.6.2-1.5.5-5.7.5-5.7L37 13.5s-.6 5.2-.5 6.6c-.1 1.4 1 7.4 10.6 6.8z",
        fill: "#D04A5D"
      }), _react.default.createElement("path", {
        d: "M22.6 80.9s2.5-6.2 4.7-8c2.2-1.8 6-3.8 7.7-1.9 1.7 2 5.1 5.8 5.1 5.8l.2-2.4s-2.1-3.2-3.8-4.7c-1.7-1.6-9.3-6.3-13.9 11.2z",
        fill: "#78A7C0"
      }), _react.default.createElement("path", {
        d: "M32.8 21.9s1.4-3.5 1.2-5.5c-.2-2-.9-5.1-2.3-5.6s-5.4-2.1-5.4-2.1l-.9-1.8s4.9 1.8 6.1 2.5c1.3.6 6.1 4.2 1.3 12.5z",
        fill: "#D04A5D"
      })));
    }
  }]);

  return Logo;
}(_react.default.Component);

exports.default = Logo;

/***/ }),
/* 51 */,
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

__webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hamburger =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Hamburger, _React$Component);

  function Hamburger() {
    _classCallCheck(this, Hamburger);

    return _possibleConstructorReturn(this, (Hamburger.__proto__ || Object.getPrototypeOf(Hamburger)).apply(this, arguments));
  }

  _createClass(Hamburger, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", _extends({}, this.props, {
        className: 'hamburger'
      }), _react.default.createElement("span", {
        className: 'line'
      }), _react.default.createElement("span", {
        className: 'line'
      }), _react.default.createElement("span", {
        className: 'line'
      }));
    }
  }]);

  return Hamburger;
}(_react.default.Component);

exports.default = Hamburger;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _Hamburger = _interopRequireDefault(__webpack_require__(53));

var _Logo = _interopRequireDefault(__webpack_require__(50));

var _reactRouterDom = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var MobileHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MobileHeader, _React$Component);

  function MobileHeader() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, MobileHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = MobileHeader.__proto__ || Object.getPrototypeOf(MobileHeader)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "showMobileMenu", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.props.showMobileMenu(true);
      }
    }), _temp));
  }

  _createClass(MobileHeader, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          title = _props.title,
          className = _props.className;
      return _react.default.createElement("div", {
        className: className
      }, _react.default.createElement("h1", {
        className: 'title'
      }, _react.default.createElement(_reactRouterDom.NavLink, {
        to: '/'
      }, _react.default.createElement(_Logo.default, {
        className: 'logo'
      })), _react.default.createElement("div", {
        className: 'text-wrapper'
      }, _react.default.createElement(_reactRouterDom.NavLink, {
        to: '/'
      }, _react.default.createElement("span", {
        className: 'title-section-1 h4'
      }, title[0]), _react.default.createElement("span", {
        className: 'title-section-2'
      }, title[1])))), _react.default.createElement("button", {
        className: 'menu',
        onClick: this.showMobileMenu
      }, _react.default.createElement(_Hamburger.default, null)));
    }
  }]);

  return MobileHeader;
}(_react.default.Component);

exports.default = MobileHeader;
Object.defineProperty(MobileHeader, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    showMobileMenu: function showMobileMenu() {},
    title: ['', '']
  }
});
Object.defineProperty(MobileHeader, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    showMobileMenu: _propTypes.default.func,
    title: _propTypes.default.array
  }
});

/***/ }),
/* 55 */,
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 57 */,
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MagnifyingGlass =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MagnifyingGlass, _React$Component);

  function MagnifyingGlass() {
    _classCallCheck(this, MagnifyingGlass);

    return _possibleConstructorReturn(this, (MagnifyingGlass.__proto__ || Object.getPrototypeOf(MagnifyingGlass)).apply(this, arguments));
  }

  _createClass(MagnifyingGlass, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("svg", _extends({
        version: "1.1",
        viewBox: "0 0 22 22"
      }, this.props), _react.default.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, _react.default.createElement("g", {
        transform: "translate(-1064 -166)",
        fill: "#fff"
      }, _react.default.createElement("g", {
        transform: "translate(1064 166)"
      }, _react.default.createElement("path", {
        d: "m0.73333 7.7c0-3.8416 3.1251-6.9667 6.9666-6.9667 3.8416 0 6.9666 3.1251 6.9666 6.9667 0 3.8416-3.1251 6.9667-6.9666 6.9667-3.8416 0-6.9666-3.1251-6.9666-6.9667m21.159 13.674-8.5033-8.5034c1.2445-1.3684 2.0108-3.1794 2.0108-5.1707 0-4.246-3.454-7.7-7.7-7.7-4.246 0-7.7 3.454-7.7 7.7s3.454 7.7 7.7 7.7c1.991 0 3.8023-0.76597 5.1707-2.0108l8.5033 8.5034c0.0715 0.0715 0.16537 0.10743 0.25923 0.10743s0.18773-0.035933 0.25923-0.10743c0.14337-0.14337 0.14337-0.3751 0-0.51847"
      })))));
    }
  }]);

  return MagnifyingGlass;
}(_react.default.Component);

exports.default = MagnifyingGlass;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _Container = _interopRequireDefault(__webpack_require__(2));

var _Link = _interopRequireDefault(__webpack_require__(4));

var _classnames = _interopRequireDefault(__webpack_require__(3));

var _SearchInput = _interopRequireDefault(__webpack_require__(12));

__webpack_require__(56);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var first = true;

var DesktopNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DesktopNav, _React$Component);

  function DesktopNav() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, DesktopNav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = DesktopNav.__proto__ || Object.getPrototypeOf(DesktopNav)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "timeout", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(_assertThisInitialized(_this), "width", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: void 0
    }), Object.defineProperty(_assertThisInitialized(_this), "isBigger", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: true
    }), Object.defineProperty(_assertThisInitialized(_this), "onRef", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(ref) {
        if (!_this.props.sticky) return;
        clearTimeout(_this.timeout);
        _this.timeout = setTimeout(function () {
          if (!ref) return;
          var width = 0;

          _toConsumableArray(ref.parentNode.children).forEach(function (item) {
            width += item.offsetWidth;
          });

          _this.width = width + 32 + 236;

          _this.checkWidth();
        }, 10);
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "checkWidth", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        requestAnimationFrame(function () {
          if (_this.width < window.innerWidth && (_this.isBigger || first)) {
            _this.isBigger = false;

            _this.props.changedSize(_this.isBigger);
          } else if (_this.width > window.innerWidth && (!_this.isBigger || first)) {
            _this.isBigger = true;

            _this.props.changedSize(_this.isBigger);
          }

          first = false;
        });
      }
    }), _temp));
  }

  _createClass(DesktopNav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      addEventListener('resize', this.checkWidth);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      removeEventListener('resize', this.checkWidth);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          searchPlaceholder = _props.searchPlaceholder,
          navItems = _props.navItems;
      return _react.default.createElement("nav", {
        className: (0, _classnames.default)('desktop-header')
      }, _react.default.createElement(_Container.default, {
        outerWrap: true
      }, _react.default.createElement("div", {
        className: 'nav'
      }, this.renderMenu(navItems)), _react.default.createElement(_SearchInput.default, {
        searchPlaceholder: searchPlaceholder
      })));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu(navItems) {
      var _this2 = this;

      return _react.default.createElement("ul", null, navItems.map(function (_ref2) {
        var url = _ref2.url,
            title = _ref2.title,
            id = _ref2.ID,
            children = _ref2.children;
        return _react.default.createElement("li", {
          ref: _this2.onRef,
          key: id
        }, url !== 'http://undefined' && _react.default.createElement(_Link.default, {
          to: url.replace(location.origin, '') || '/'
        }, title.toUpperCase()), url === 'http://undefined' && _react.default.createElement("a", null, title.toUpperCase()), children && _this2.renderMenu(children));
      }));
    }
  }]);

  return DesktopNav;
}(_react.default.Component);

exports.default = DesktopNav;
Object.defineProperty(DesktopNav, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    navItems: [],
    searchPlaceholder: '',
    sticky: false,
    changedSize: function changedSize() {}
  }
});
Object.defineProperty(DesktopNav, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    navItems: _propTypes.default.array,
    searchPlaceholder: _propTypes.default.string,
    sticky: _propTypes.default.bool,
    changedSize: _propTypes.default.func
  }
});

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _Container = _interopRequireDefault(__webpack_require__(2));

var _Link = _interopRequireDefault(__webpack_require__(4));

var _DesktopNav = _interopRequireDefault(__webpack_require__(60));

var _MobileHeader = _interopRequireDefault(__webpack_require__(54));

var _classnames = _interopRequireDefault(__webpack_require__(3));

__webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Header =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Header, _React$PureComponent);

  function Header() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        navItems: [],
        sticky: true,
        mobileMode: undefined
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "nav", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: _react.default.createRef()
    }), Object.defineProperty(_assertThisInitialized(_this), "bottom", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: undefined
    }), Object.defineProperty(_assertThisInitialized(_this), "scrollEvent", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        window.requestAnimationFrame(function () {
          var scrollPos = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0) || 0;

          if (_this.bottom > scrollPos && !_this.state.sticky) {
            _this.setState({
              sticky: true
            });
          } else if (_this.bottom < scrollPos && _this.state.sticky) {
            _this.setState({
              sticky: false
            });
          }
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "showMobileMenu", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.props.showMobileMenu(true);
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "changedSize", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(val) {
        _this.props.changedSize(val);

        _this.setState({
          mobileMode: val
        });
      }
    }), _temp));
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.nav.current) return;
      this.bottom = getPosition(this.nav.current).top + this.nav.current.offsetHeight;
      addEventListener('scroll', this.scrollEvent, {
        passive: true
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      removeEventListener('scroll', this.scrollEvent);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          title = _props.title,
          headerPhoneNumber = _props.headerPhoneNumber,
          phoneTitle = _props.phoneTitle,
          enquiryLink = _props.enquiryLink,
          enquiryTitle = _props.enquiryTitle,
          searchPlaceholder = _props.searchPlaceholder;
      var _state = this.state,
          navItems = _state.navItems,
          sticky = _state.sticky,
          mobileMode = _state.mobileMode;
      return _react.default.createElement("header", {
        className: (0, _classnames.default)('header', {
          'desktop-mode': !mobileMode
        })
      }, _react.default.createElement("div", {
        className: (0, _classnames.default)('sticky-header', {
          sticky: !sticky
        })
      }, _react.default.createElement(_DesktopNav.default, {
        sticky: true,
        changedSize: this.changedSize,
        navItems: navItems,
        searchPlaceholder: searchPlaceholder
      }), mobileMode && _react.default.createElement(_MobileHeader.default, {
        className: 'mobile-header',
        title: title,
        showMobileMenu: this.showMobileMenu
      })), _react.default.createElement(_Container.default, {
        outerWrap: true
      }, _react.default.createElement("div", {
        className: 'inner-header'
      }, _react.default.createElement(_MobileHeader.default, {
        className: 'desktop-inner-head',
        title: title,
        showMobileMenu: this.showMobileMenu
      }), _react.default.createElement("div", {
        className: 'enquiry'
      }, _react.default.createElement("p", null, phoneTitle, " ", _react.default.createElement("br", null), ' ', _react.default.createElement("a", {
        className: 'blue',
        href: "tel:".concat(headerPhoneNumber)
      }, headerPhoneNumber))), _react.default.createElement("div", {
        className: 'make-enquiry'
      }, enquiryLink && enquiryTitle && _react.default.createElement(_Link.default, {
        to: enquiryLink.replace(location.origin, ''),
        className: 'red-button'
      }, enquiryTitle)))), _react.default.createElement("div", {
        className: 'desktop-header-wrapper',
        ref: this.nav
      }, !mobileMode && mobileMode !== undefined && _react.default.createElement(_DesktopNav.default, {
        navItems: navItems,
        searchPlaceholder: searchPlaceholder
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var newState = {};

      if (nextProps.navItems !== prevState.navItems && _typeof(nextProps.navItems) === 'object') {
        newState.navItems = nextProps.navItems;
      }

      if (nextProps.home && nextProps.home.length > 0) {
        newState.title = nextProps.home[0].title.rendered.split(' ');
      }

      if (!Object.keys(newState).length) return null;
      return newState;
    }
  }]);

  return Header;
}(_react.default.PureComponent); //* Util *//


exports.default = Header;
Object.defineProperty(Header, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    title: _propTypes.default.array,
    phoneTitle: _propTypes.default.string,
    phone: _propTypes.default.string,
    enquiryTitle: _propTypes.default.string,
    enquiryLink: _propTypes.default.string,
    navItems: _propTypes.default.array,
    searchPlaceholder: _propTypes.default.string,
    showMobileMenu: _propTypes.default.func,
    changedSize: _propTypes.default.func
  }
});

function getPosition(element) {
  var xPosition = 0;
  var yPosition = 0;

  while (element) {
    xPosition += element.offsetLeft - element.scrollLeft + element.clientLeft;
    yPosition += element.offsetTop - element.scrollTop + element.clientTop;
    element = element.offsetParent;
  }

  return {
    left: xPosition,
    top: yPosition
  };
}

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 63 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports.__esModule = true;
exports.warn = exports.requestAnimationFrame = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(62);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _HelmetConstants = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
    var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (encode === false) {
        return String(str);
    }

    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
    var innermostTitle = getInnermostProperty(propsList, _HelmetConstants.TAG_NAMES.TITLE);
    var innermostTemplate = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.TITLE_TEMPLATE);

    if (innermostTemplate && innermostTitle) {
        // use function arg to avoid need to escape $ characters
        return innermostTemplate.replace(/%s/g, function () {
            return innermostTitle;
        });
    }

    var innermostDefaultTitle = getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFAULT_TITLE);

    return innermostTitle || innermostDefaultTitle || undefined;
};

var getOnChangeClientState = function getOnChangeClientState(propsList) {
    return getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
};

var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
    return propsList.filter(function (props) {
        return typeof props[tagType] !== "undefined";
    }).map(function (props) {
        return props[tagType];
    }).reduce(function (tagAttrs, current) {
        return _extends({}, tagAttrs, current);
    }, {});
};

var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
    return propsList.filter(function (props) {
        return typeof props[_HelmetConstants.TAG_NAMES.BASE] !== "undefined";
    }).map(function (props) {
        return props[_HelmetConstants.TAG_NAMES.BASE];
    }).reverse().reduce(function (innermostBaseTag, tag) {
        if (!innermostBaseTag.length) {
            var keys = Object.keys(tag);

            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
                    return innermostBaseTag.concat(tag);
                }
            }
        }

        return innermostBaseTag;
    }, []);
};

var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
    // Calculate list of tags, giving priority innermost component (end of the propslist)
    var approvedSeenTags = {};

    return propsList.filter(function (props) {
        if (Array.isArray(props[tagName])) {
            return true;
        }
        if (typeof props[tagName] !== "undefined") {
            warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
        }
        return false;
    }).map(function (props) {
        return props[tagName];
    }).reverse().reduce(function (approvedTags, instanceTags) {
        var instanceSeenTags = {};

        instanceTags.filter(function (tag) {
            var primaryAttributeKey = void 0;
            var keys = Object.keys(tag);
            for (var i = 0; i < keys.length; i++) {
                var attributeKey = keys[i];
                var lowerCaseAttributeKey = attributeKey.toLowerCase();

                // Special rule with link tags, since rel and href are both primary tags, rel takes priority
                if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === _HelmetConstants.TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
                    primaryAttributeKey = lowerCaseAttributeKey;
                }
                // Special case for innerHTML which doesn't work lowercased
                if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attributeKey === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT || attributeKey === _HelmetConstants.TAG_PROPERTIES.ITEM_PROP)) {
                    primaryAttributeKey = attributeKey;
                }
            }

            if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
                return false;
            }

            var value = tag[primaryAttributeKey].toLowerCase();

            if (!approvedSeenTags[primaryAttributeKey]) {
                approvedSeenTags[primaryAttributeKey] = {};
            }

            if (!instanceSeenTags[primaryAttributeKey]) {
                instanceSeenTags[primaryAttributeKey] = {};
            }

            if (!approvedSeenTags[primaryAttributeKey][value]) {
                instanceSeenTags[primaryAttributeKey][value] = true;
                return true;
            }

            return false;
        }).reverse().forEach(function (tag) {
            return approvedTags.push(tag);
        });

        // Update seen tags with tags from this instance
        var keys = Object.keys(instanceSeenTags);
        for (var i = 0; i < keys.length; i++) {
            var attributeKey = keys[i];
            var tagUnion = (0, _objectAssign2.default)({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);

            approvedSeenTags[attributeKey] = tagUnion;
        }

        return approvedTags;
    }, []).reverse();
};

var getInnermostProperty = function getInnermostProperty(propsList, property) {
    for (var i = propsList.length - 1; i >= 0; i--) {
        var props = propsList[i];

        if (props.hasOwnProperty(property)) {
            return props[property];
        }
    }

    return null;
};

var reducePropsToState = function reducePropsToState(propsList) {
    return {
        baseTag: getBaseTagFromPropsList([_HelmetConstants.TAG_PROPERTIES.HREF], propsList),
        bodyAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.BODY, propsList),
        defer: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.DEFER),
        encode: getInnermostProperty(propsList, _HelmetConstants.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
        htmlAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.HTML, propsList),
        linkTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.LINK, [_HelmetConstants.TAG_PROPERTIES.REL, _HelmetConstants.TAG_PROPERTIES.HREF], propsList),
        metaTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.META, [_HelmetConstants.TAG_PROPERTIES.NAME, _HelmetConstants.TAG_PROPERTIES.CHARSET, _HelmetConstants.TAG_PROPERTIES.HTTPEQUIV, _HelmetConstants.TAG_PROPERTIES.PROPERTY, _HelmetConstants.TAG_PROPERTIES.ITEM_PROP], propsList),
        noscriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.NOSCRIPT, [_HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
        onChangeClientState: getOnChangeClientState(propsList),
        scriptTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.SCRIPT, [_HelmetConstants.TAG_PROPERTIES.SRC, _HelmetConstants.TAG_PROPERTIES.INNER_HTML], propsList),
        styleTags: getTagsFromPropsList(_HelmetConstants.TAG_NAMES.STYLE, [_HelmetConstants.TAG_PROPERTIES.CSS_TEXT], propsList),
        title: getTitleFromPropsList(propsList),
        titleAttributes: getAttributesFromPropsList(_HelmetConstants.ATTRIBUTE_NAMES.TITLE, propsList)
    };
};

var rafPolyfill = function () {
    var clock = Date.now();

    return function (callback) {
        var currentTime = Date.now();

        if (currentTime - clock > 16) {
            clock = currentTime;
            callback(currentTime);
        } else {
            setTimeout(function () {
                rafPolyfill(callback);
            }, 0);
        }
    };
}();

var cafPolyfill = function cafPolyfill(id) {
    return clearTimeout(id);
};

var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;

var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;

var warn = function warn(msg) {
    return console && typeof console.warn === "function" && console.warn(msg);
};

var _helmetCallback = null;

var handleClientStateChange = function handleClientStateChange(newState) {
    if (_helmetCallback) {
        cancelAnimationFrame(_helmetCallback);
    }

    if (newState.defer) {
        _helmetCallback = requestAnimationFrame(function () {
            commitTagChanges(newState, function () {
                _helmetCallback = null;
            });
        });
    } else {
        commitTagChanges(newState);
        _helmetCallback = null;
    }
};

var commitTagChanges = function commitTagChanges(newState, cb) {
    var baseTag = newState.baseTag,
        bodyAttributes = newState.bodyAttributes,
        htmlAttributes = newState.htmlAttributes,
        linkTags = newState.linkTags,
        metaTags = newState.metaTags,
        noscriptTags = newState.noscriptTags,
        onChangeClientState = newState.onChangeClientState,
        scriptTags = newState.scriptTags,
        styleTags = newState.styleTags,
        title = newState.title,
        titleAttributes = newState.titleAttributes;

    updateAttributes(_HelmetConstants.TAG_NAMES.BODY, bodyAttributes);
    updateAttributes(_HelmetConstants.TAG_NAMES.HTML, htmlAttributes);

    updateTitle(title, titleAttributes);

    var tagUpdates = {
        baseTag: updateTags(_HelmetConstants.TAG_NAMES.BASE, baseTag),
        linkTags: updateTags(_HelmetConstants.TAG_NAMES.LINK, linkTags),
        metaTags: updateTags(_HelmetConstants.TAG_NAMES.META, metaTags),
        noscriptTags: updateTags(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags),
        scriptTags: updateTags(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags),
        styleTags: updateTags(_HelmetConstants.TAG_NAMES.STYLE, styleTags)
    };

    var addedTags = {};
    var removedTags = {};

    Object.keys(tagUpdates).forEach(function (tagType) {
        var _tagUpdates$tagType = tagUpdates[tagType],
            newTags = _tagUpdates$tagType.newTags,
            oldTags = _tagUpdates$tagType.oldTags;


        if (newTags.length) {
            addedTags[tagType] = newTags;
        }
        if (oldTags.length) {
            removedTags[tagType] = tagUpdates[tagType].oldTags;
        }
    });

    cb && cb();

    onChangeClientState(newState, addedTags, removedTags);
};

var flattenArray = function flattenArray(possibleArray) {
    return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};

var updateTitle = function updateTitle(title, attributes) {
    if (typeof title !== "undefined" && document.title !== title) {
        document.title = flattenArray(title);
    }

    updateAttributes(_HelmetConstants.TAG_NAMES.TITLE, attributes);
};

var updateAttributes = function updateAttributes(tagName, attributes) {
    var elementTag = document.getElementsByTagName(tagName)[0];

    if (!elementTag) {
        return;
    }

    var helmetAttributeString = elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
    var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
    var attributesToRemove = [].concat(helmetAttributes);
    var attributeKeys = Object.keys(attributes);

    for (var i = 0; i < attributeKeys.length; i++) {
        var attribute = attributeKeys[i];
        var value = attributes[attribute] || "";

        if (elementTag.getAttribute(attribute) !== value) {
            elementTag.setAttribute(attribute, value);
        }

        if (helmetAttributes.indexOf(attribute) === -1) {
            helmetAttributes.push(attribute);
        }

        var indexToSave = attributesToRemove.indexOf(attribute);
        if (indexToSave !== -1) {
            attributesToRemove.splice(indexToSave, 1);
        }
    }

    for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
        elementTag.removeAttribute(attributesToRemove[_i]);
    }

    if (helmetAttributes.length === attributesToRemove.length) {
        elementTag.removeAttribute(_HelmetConstants.HELMET_ATTRIBUTE);
    } else if (elementTag.getAttribute(_HelmetConstants.HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
        elementTag.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, attributeKeys.join(","));
    }
};

var updateTags = function updateTags(type, tags) {
    var headElement = document.head || document.querySelector(_HelmetConstants.TAG_NAMES.HEAD);
    var tagNodes = headElement.querySelectorAll(type + "[" + _HelmetConstants.HELMET_ATTRIBUTE + "]");
    var oldTags = Array.prototype.slice.call(tagNodes);
    var newTags = [];
    var indexToDelete = void 0;

    if (tags && tags.length) {
        tags.forEach(function (tag) {
            var newElement = document.createElement(type);

            for (var attribute in tag) {
                if (tag.hasOwnProperty(attribute)) {
                    if (attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML) {
                        newElement.innerHTML = tag.innerHTML;
                    } else if (attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
                        if (newElement.styleSheet) {
                            newElement.styleSheet.cssText = tag.cssText;
                        } else {
                            newElement.appendChild(document.createTextNode(tag.cssText));
                        }
                    } else {
                        var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
                        newElement.setAttribute(attribute, value);
                    }
                }
            }

            newElement.setAttribute(_HelmetConstants.HELMET_ATTRIBUTE, "true");

            // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.
            if (oldTags.some(function (existingTag, index) {
                indexToDelete = index;
                return newElement.isEqualNode(existingTag);
            })) {
                oldTags.splice(indexToDelete, 1);
            } else {
                newTags.push(newElement);
            }
        });
    }

    oldTags.forEach(function (tag) {
        return tag.parentNode.removeChild(tag);
    });
    newTags.forEach(function (tag) {
        return headElement.appendChild(tag);
    });

    return {
        oldTags: oldTags,
        newTags: newTags
    };
};

var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
    return Object.keys(attributes).reduce(function (str, key) {
        var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
        return str ? str + " " + attr : attr;
    }, "");
};

var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
    var attributeString = generateElementAttributesAsString(attributes);
    var flattenedTitle = flattenArray(title);
    return attributeString ? "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};

var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
    return tags.reduce(function (str, tag) {
        var attributeHtml = Object.keys(tag).filter(function (attribute) {
            return !(attribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || attribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT);
        }).reduce(function (string, attribute) {
            var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
            return string ? string + " " + attr : attr;
        }, "");

        var tagContent = tag.innerHTML || tag.cssText || "";

        var isSelfClosing = _HelmetConstants.SELF_CLOSING_TAGS.indexOf(type) === -1;

        return str + "<" + type + " " + _HelmetConstants.HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
    }, "");
};

var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
    var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(attributes).reduce(function (obj, key) {
        obj[_HelmetConstants.REACT_TAG_MAP[key] || key] = attributes[key];
        return obj;
    }, initProps);
};

var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
    var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return Object.keys(props).reduce(function (obj, key) {
        obj[_HelmetConstants.HTML_TAG_MAP[key] || key] = props[key];
        return obj;
    }, initAttributes);
};

var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
    var _initProps;

    // assigning into an array to define toString function on it
    var initProps = (_initProps = {
        key: title
    }, _initProps[_HelmetConstants.HELMET_ATTRIBUTE] = true, _initProps);
    var props = convertElementAttributestoReactProps(attributes, initProps);

    return [_react2.default.createElement(_HelmetConstants.TAG_NAMES.TITLE, props, title)];
};

var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
    return tags.map(function (tag, i) {
        var _mappedTag;

        var mappedTag = (_mappedTag = {
            key: i
        }, _mappedTag[_HelmetConstants.HELMET_ATTRIBUTE] = true, _mappedTag);

        Object.keys(tag).forEach(function (attribute) {
            var mappedAttribute = _HelmetConstants.REACT_TAG_MAP[attribute] || attribute;

            if (mappedAttribute === _HelmetConstants.TAG_PROPERTIES.INNER_HTML || mappedAttribute === _HelmetConstants.TAG_PROPERTIES.CSS_TEXT) {
                var content = tag.innerHTML || tag.cssText;
                mappedTag.dangerouslySetInnerHTML = { __html: content };
            } else {
                mappedTag[mappedAttribute] = tag[attribute];
            }
        });

        return _react2.default.createElement(type, mappedTag);
    });
};

var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
    switch (type) {
        case _HelmetConstants.TAG_NAMES.TITLE:
            return {
                toComponent: function toComponent() {
                    return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
                },
                toString: function toString() {
                    return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
                }
            };
        case _HelmetConstants.ATTRIBUTE_NAMES.BODY:
        case _HelmetConstants.ATTRIBUTE_NAMES.HTML:
            return {
                toComponent: function toComponent() {
                    return convertElementAttributestoReactProps(tags);
                },
                toString: function toString() {
                    return generateElementAttributesAsString(tags);
                }
            };
        default:
            return {
                toComponent: function toComponent() {
                    return generateTagsAsReactComponent(type, tags);
                },
                toString: function toString() {
                    return generateTagsAsString(type, tags, encode);
                }
            };
    }
};

var mapStateOnServer = function mapStateOnServer(_ref) {
    var baseTag = _ref.baseTag,
        bodyAttributes = _ref.bodyAttributes,
        encode = _ref.encode,
        htmlAttributes = _ref.htmlAttributes,
        linkTags = _ref.linkTags,
        metaTags = _ref.metaTags,
        noscriptTags = _ref.noscriptTags,
        scriptTags = _ref.scriptTags,
        styleTags = _ref.styleTags,
        _ref$title = _ref.title,
        title = _ref$title === undefined ? "" : _ref$title,
        titleAttributes = _ref.titleAttributes;
    return {
        base: getMethodsForTag(_HelmetConstants.TAG_NAMES.BASE, baseTag, encode),
        bodyAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
        htmlAttributes: getMethodsForTag(_HelmetConstants.ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
        link: getMethodsForTag(_HelmetConstants.TAG_NAMES.LINK, linkTags, encode),
        meta: getMethodsForTag(_HelmetConstants.TAG_NAMES.META, metaTags, encode),
        noscript: getMethodsForTag(_HelmetConstants.TAG_NAMES.NOSCRIPT, noscriptTags, encode),
        script: getMethodsForTag(_HelmetConstants.TAG_NAMES.SCRIPT, scriptTags, encode),
        style: getMethodsForTag(_HelmetConstants.TAG_NAMES.STYLE, styleTags, encode),
        title: getMethodsForTag(_HelmetConstants.TAG_NAMES.TITLE, { title: title, titleAttributes: titleAttributes }, encode)
    };
};

exports.convertReactPropstoHtmlAttributes = convertReactPropstoHtmlAttributes;
exports.handleClientStateChange = handleClientStateChange;
exports.mapStateOnServer = mapStateOnServer;
exports.reducePropsToState = reducePropsToState;
exports.requestAnimationFrame = requestAnimationFrame;
exports.warn = warn;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(63)))

/***/ }),
/* 65 */
/***/ (function(module, exports) {

var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};


/***/ }),
/* 66 */
/***/ (function(module, exports) {

exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var pSlice = Array.prototype.slice;
var objectKeys = __webpack_require__(66);
var isArguments = __webpack_require__(65);

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}


/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = function shallowEqual(objA, objB, compare, compareContext) {

    var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

    if(ret !== void 0) {
        return !!ret;
    }

    if(objA === objB) {
        return true;
    }

    if(typeof objA !== 'object' || !objA ||
       typeof objB !== 'object' || !objB) {
        return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if(keysA.length !== keysB.length) {
        return false;
    }

    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

    // Test for A's keys different from B.
    for(var idx = 0; idx < keysA.length; idx++) {

        var key = keysA[idx];

        if(!bHasOwnProperty(key)) {
            return false;
        }

        var valueA = objA[key];
        var valueB = objB[key];

        ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

        if(ret === false ||
           ret === void 0 && valueA !== valueB) {
            return false;
        }

    }

    return true;

};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(0);
var React__default = _interopDefault(React);
var ExecutionEnvironment = _interopDefault(__webpack_require__(69));
var shallowEqual = _interopDefault(__webpack_require__(68));

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }
  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }
  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state = void 0;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect = function (_Component) {
      _inherits(SideEffect, _Component);

      function SideEffect() {
        _classCallCheck(this, SideEffect);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      // Try to use displayName of wrapped component
      SideEffect.peek = function peek() {
        return state;
      };

      // Expose canUseDOM so tests can monkeypatch it


      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      SideEffect.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return !shallowEqual(nextProps, this.props);
      };

      SideEffect.prototype.componentWillMount = function componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      SideEffect.prototype.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      SideEffect.prototype.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      SideEffect.prototype.render = function render() {
        return React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React.Component);

    SideEffect.displayName = 'SideEffect(' + getDisplayName(WrappedComponent) + ')';
    SideEffect.canUseDOM = ExecutionEnvironment.canUseDOM;


    return SideEffect;
  };
}

module.exports = withSideEffect;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.Helmet = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSideEffect = __webpack_require__(70);

var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

var _deepEqual = __webpack_require__(67);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _HelmetUtils = __webpack_require__(64);

var _HelmetConstants = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Helmet = function Helmet(Component) {
    var _class, _temp;

    return _temp = _class = function (_React$Component) {
        _inherits(HelmetWrapper, _React$Component);

        function HelmetWrapper() {
            _classCallCheck(this, HelmetWrapper);

            return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
        }

        HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
            return !(0, _deepEqual2.default)(this.props, nextProps);
        };

        HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
            if (!nestedChildren) {
                return null;
            }

            switch (child.type) {
                case _HelmetConstants.TAG_NAMES.SCRIPT:
                case _HelmetConstants.TAG_NAMES.NOSCRIPT:
                    return {
                        innerHTML: nestedChildren
                    };

                case _HelmetConstants.TAG_NAMES.STYLE:
                    return {
                        cssText: nestedChildren
                    };
            }

            throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
        };

        HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
            var _extends2;

            var child = _ref.child,
                arrayTypeChildren = _ref.arrayTypeChildren,
                newChildProps = _ref.newChildProps,
                nestedChildren = _ref.nestedChildren;

            return _extends({}, arrayTypeChildren, (_extends2 = {}, _extends2[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _extends2));
        };

        HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
            var _extends3, _extends4;

            var child = _ref2.child,
                newProps = _ref2.newProps,
                newChildProps = _ref2.newChildProps,
                nestedChildren = _ref2.nestedChildren;

            switch (child.type) {
                case _HelmetConstants.TAG_NAMES.TITLE:
                    return _extends({}, newProps, (_extends3 = {}, _extends3[child.type] = nestedChildren, _extends3.titleAttributes = _extends({}, newChildProps), _extends3));

                case _HelmetConstants.TAG_NAMES.BODY:
                    return _extends({}, newProps, {
                        bodyAttributes: _extends({}, newChildProps)
                    });

                case _HelmetConstants.TAG_NAMES.HTML:
                    return _extends({}, newProps, {
                        htmlAttributes: _extends({}, newChildProps)
                    });
            }

            return _extends({}, newProps, (_extends4 = {}, _extends4[child.type] = _extends({}, newChildProps), _extends4));
        };

        HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
            var newFlattenedProps = _extends({}, newProps);

            Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
                var _extends5;

                newFlattenedProps = _extends({}, newFlattenedProps, (_extends5 = {}, _extends5[arrayChildName] = arrayTypeChildren[arrayChildName], _extends5));
            });

            return newFlattenedProps;
        };

        HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
            if (false) {}

            return true;
        };

        HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
            var _this2 = this;

            var arrayTypeChildren = {};

            _react2.default.Children.forEach(children, function (child) {
                if (!child || !child.props) {
                    return;
                }

                var _child$props = child.props,
                    nestedChildren = _child$props.children,
                    childProps = _objectWithoutProperties(_child$props, ["children"]);

                var newChildProps = (0, _HelmetUtils.convertReactPropstoHtmlAttributes)(childProps);

                _this2.warnOnInvalidChildren(child, nestedChildren);

                switch (child.type) {
                    case _HelmetConstants.TAG_NAMES.LINK:
                    case _HelmetConstants.TAG_NAMES.META:
                    case _HelmetConstants.TAG_NAMES.NOSCRIPT:
                    case _HelmetConstants.TAG_NAMES.SCRIPT:
                    case _HelmetConstants.TAG_NAMES.STYLE:
                        arrayTypeChildren = _this2.flattenArrayTypeChildren({
                            child: child,
                            arrayTypeChildren: arrayTypeChildren,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;

                    default:
                        newProps = _this2.mapObjectTypeChildren({
                            child: child,
                            newProps: newProps,
                            newChildProps: newChildProps,
                            nestedChildren: nestedChildren
                        });
                        break;
                }
            });

            newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
            return newProps;
        };

        HelmetWrapper.prototype.render = function render() {
            var _props = this.props,
                children = _props.children,
                props = _objectWithoutProperties(_props, ["children"]);

            var newProps = _extends({}, props);

            if (children) {
                newProps = this.mapChildrenToProps(children, newProps);
            }

            return _react2.default.createElement(Component, newProps);
        };

        _createClass(HelmetWrapper, null, [{
            key: "canUseDOM",


            // Component.peek comes from react-side-effect:
            // For testing, you may use a static peek() method available on the returned component.
            // It lets you get the current state without resetting the mounted instance stack.
            // Don’t use it for anything other than testing.

            /**
            * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
            * @param {Object} bodyAttributes: {"className": "root"}
            * @param {String} defaultTitle: "Default Title"
            * @param {Boolean} defer: true
            * @param {Boolean} encodeSpecialCharacters: true
            * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
            * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
            * @param {Array} meta: [{"name": "description", "content": "Test description"}]
            * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
            * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
            * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
            * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
            * @param {String} title: "Title"
            * @param {Object} titleAttributes: {"itemprop": "name"}
            * @param {String} titleTemplate: "MySite.com - %s"
            */
            set: function set(canUseDOM) {
                Component.canUseDOM = canUseDOM;
            }
        }]);

        return HelmetWrapper;
    }(_react2.default.Component), _class.propTypes = {
        base: _propTypes2.default.object,
        bodyAttributes: _propTypes2.default.object,
        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
        defaultTitle: _propTypes2.default.string,
        defer: _propTypes2.default.bool,
        encodeSpecialCharacters: _propTypes2.default.bool,
        htmlAttributes: _propTypes2.default.object,
        link: _propTypes2.default.arrayOf(_propTypes2.default.object),
        meta: _propTypes2.default.arrayOf(_propTypes2.default.object),
        noscript: _propTypes2.default.arrayOf(_propTypes2.default.object),
        onChangeClientState: _propTypes2.default.func,
        script: _propTypes2.default.arrayOf(_propTypes2.default.object),
        style: _propTypes2.default.arrayOf(_propTypes2.default.object),
        title: _propTypes2.default.string,
        titleAttributes: _propTypes2.default.object,
        titleTemplate: _propTypes2.default.string
    }, _class.defaultProps = {
        defer: true,
        encodeSpecialCharacters: true
    }, _class.peek = Component.peek, _class.rewind = function () {
        var mappedState = Component.rewind();
        if (!mappedState) {
            // provide fallback if mappedState is undefined
            mappedState = (0, _HelmetUtils.mapStateOnServer)({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: true,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {}
            });
        }

        return mappedState;
    }, _temp;
};

var NullComponent = function NullComponent() {
    return null;
};

var HelmetSideEffects = (0, _reactSideEffect2.default)(_HelmetUtils.reducePropsToState, _HelmetUtils.handleClientStateChange, _HelmetUtils.mapStateOnServer)(NullComponent);

var HelmetExport = Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;

exports.Helmet = HelmetExport;
exports.default = HelmetExport;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactRouterDom = __webpack_require__(6);

var _reactHelmet = __webpack_require__(71);

var _Header = _interopRequireDefault(__webpack_require__(61));

var _Footer = _interopRequireDefault(__webpack_require__(47));

var _MobileNav = _interopRequireDefault(__webpack_require__(32));

var _Store = __webpack_require__(5);

var _stripHtmlTags = _interopRequireDefault(__webpack_require__(9));

var _classnames = _interopRequireDefault(__webpack_require__(3));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var searchPage = {
  title: {
    rendered: 'Search'
  },
  excerpt: {
    rendered: 'Search Page'
  }
};

var Base =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Base, _React$Component);

  function Base() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Base);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Base.__proto__ || Object.getPrototypeOf(Base)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        mobileMenu: false,
        page: undefined,
        mobileMode: undefined
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(val) {
        _this.setState({
          mobileMenu: val
        });

        _this.props.mobileNavOpen(val);
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "changedSize", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(val) {
        _this.setState({
          mobileMode: val
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onLocationChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var pages = _this.props.pages;
        var page;

        if (location.pathname === '/search/') {
          page = searchPage;
        } else {
          page = pages.find(function (page) {
            return page.link === location.href;
          });
        }

        _this.setState({
          page: page,
          mobileMenu: false
        });

        window.scrollTo(0, 0);
      }
    }), _temp));
  }

  _createClass(Base, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var history = this.props.history;
      history.listen(this.onLocationChange);
      this.onLocationChange();
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          primaryNavigation = _props.primaryNavigation,
          header = _props.header,
          footer = _props.footer;
      var _state = this.state,
          page = _state.page,
          mobileMenu = _state.mobileMenu,
          mobileMode = _state.mobileMode;
      return _react.default.createElement(_react.default.Fragment, null, page && _react.default.createElement(_reactHelmet.Helmet, null, _react.default.createElement("title", null, page.title.rendered), _react.default.createElement("meta", {
        name: "description",
        content: (0, _stripHtmlTags.default)(page.excerpt.rendered)
      })), this.state.mobileMode && _react.default.createElement(_MobileNav.default, {
        visible: mobileMenu,
        navItems: primaryNavigation,
        closeMenu: this.onClick
      }), _react.default.createElement(_Header.default, _extends({
        changedSize: this.changedSize,
        title: CONFIG.SITE_NAME.toUpperCase().split(' '),
        showMobileMenu: this.onClick,
        navItems: primaryNavigation
      }, header)), _react.default.createElement("div", {
        className: (0, _classnames.default)('content-wrapper', {
          'nav-open': mobileMenu && mobileMode
        })
      }, children), _react.default.createElement(_Footer.default, footer));
    }
  }]);

  return Base;
}(_react.default.Component);

Object.defineProperty(Base, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    mobileNavOpen: _propTypes.default.func
  }
});

var _default = (0, _reactRouterDom.withRouter)((0, _Store.withConsumer)(Base));

exports.default = _default;

/***/ }),
/* 73 */,
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(74);

var _TypedInput = _interopRequireDefault(__webpack_require__(8));

var _SubmitButton = _interopRequireDefault(__webpack_require__(15));

var _withContactUs = _interopRequireDefault(__webpack_require__(14));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EnquiryForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(EnquiryForm, _React$Component);

  function EnquiryForm() {
    _classCallCheck(this, EnquiryForm);

    return _possibleConstructorReturn(this, (EnquiryForm.__proto__ || Object.getPrototypeOf(EnquiryForm)).apply(this, arguments));
  }

  _createClass(EnquiryForm, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          formTitle = _props.formTitle,
          firstNamePlaceholder = _props.firstNamePlaceholder,
          lastNamePlaceholder = _props.lastNamePlaceholder,
          emailPlaceholder = _props.emailPlaceholder,
          phonePlaceholder = _props.phonePlaceholder,
          messagePlaceholder = _props.messagePlaceholder,
          buttonText = _props.buttonText,
          onChange = _props.onChange,
          onSubmit = _props.onSubmit,
          submitted = _props.submitted,
          responseMessage = _props.responseMessage;
      return _react.default.createElement("form", {
        className: 'contact-us-form',
        onSubmit: onSubmit
      }, _react.default.createElement("h2", {
        className: 'h3'
      }, formTitle), !submitted && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_TypedInput.default, {
        placeholder: firstNamePlaceholder,
        autoComplete: "given-name",
        onChange: onChange,
        id: 'first-name',
        label: firstNamePlaceholder,
        type: 'text',
        className: 'text-input',
        disabled: submitted,
        required: true
      }), _react.default.createElement(_TypedInput.default, {
        placeholder: lastNamePlaceholder,
        autoComplete: "family-name",
        onChange: onChange,
        id: 'last-name',
        label: lastNamePlaceholder,
        type: 'text',
        className: 'text-input',
        disabled: submitted,
        required: true
      }), _react.default.createElement(_TypedInput.default, {
        placeholder: emailPlaceholder,
        autoComplete: "email",
        onChange: onChange,
        id: 'email',
        label: emailPlaceholder,
        type: 'email',
        className: 'text-input',
        disabled: submitted,
        required: true
      }), _react.default.createElement(_TypedInput.default, {
        placeholder: phonePlaceholder,
        onChange: onChange,
        autoComplete: "tel",
        id: 'phone',
        label: phonePlaceholder,
        type: 'number',
        className: 'text-input',
        disabled: submitted,
        required: true
      }), _react.default.createElement(_TypedInput.default, {
        placeholder: messagePlaceholder,
        onChange: onChange,
        id: 'message',
        label: messagePlaceholder,
        big: true,
        className: 'text-area',
        disabled: submitted,
        required: true
      }), _react.default.createElement(_SubmitButton.default, {
        className: 'contact-us-submit'
      }, buttonText)), submitted && _react.default.createElement("p", {
        className: 'h3'
      }, responseMessage));
    }
  }]);

  return EnquiryForm;
}(_react.default.Component);

Object.defineProperty(EnquiryForm, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    formTitle: 'Make an enquiry',
    firstNamePlaceholder: 'First Name',
    lastNamePlaceholder: 'Last Name',
    emailPlaceholder: 'Email',
    phonePlaceholder: 'Phone',
    messagePlaceholder: 'Message',
    buttonText: 'Submit Enquiry'
  }
});
Object.defineProperty(EnquiryForm, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    formTitle: _propTypes.default.string,
    firstNamePlaceholder: _propTypes.default.string,
    lastNamePlaceholder: _propTypes.default.string,
    emailPlaceholder: _propTypes.default.string,
    phonePlaceholder: _propTypes.default.string,
    messagePlaceholder: _propTypes.default.string,
    buttonText: _propTypes.default.string
  }
});

var _default = (0, _withContactUs.default)(EnquiryForm);

exports.default = _default;

/***/ }),
/* 76 */,
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Banner = _interopRequireDefault(__webpack_require__(7));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(77);

var _Container = _interopRequireDefault(__webpack_require__(2));

var _EnquiryForm = _interopRequireDefault(__webpack_require__(75));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewsPost =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NewsPost, _React$Component);

  function NewsPost() {
    _classCallCheck(this, NewsPost);

    return _possibleConstructorReturn(this, (NewsPost.__proto__ || Object.getPrototypeOf(NewsPost)).apply(this, arguments));
  }

  _createClass(NewsPost, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          title = _props.title,
          description = _props.description,
          content = _props.content,
          date = _props.date,
          caption = _props.caption,
          dUrl = _props.desktopBanner.url,
          mUrl = _props.mobileBanner.url,
          formTitle = _props.formTitle,
          firstNamePlaceholder = _props.firstNamePlaceholder,
          lastNamePlaceholder = _props.lastNamePlaceholder,
          emailPlaceholder = _props.emailPlaceholder,
          phonePlaceholder = _props.phonePlaceholder,
          messagePlaceholder = _props.messagePlaceholder,
          buttonText = _props.buttonText;
      var parsedDate = date.split(',');
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Banner.default, {
        titleContent: '',
        overlap: true,
        xs: mUrl,
        sm: mUrl,
        md: dUrl,
        lg: dUrl,
        xl: dUrl
      }), _react.default.createElement("main", {
        className: 'news-item'
      }, _react.default.createElement(_Container.default, {
        col: false,
        outerWrap: true
      }, _react.default.createElement("div", {
        className: 'col-xs-12 col-md-4'
      }, _react.default.createElement("div", {
        className: 'intro'
      }, _react.default.createElement("p", {
        className: 'date'
      }, _react.default.createElement("span", {
        className: 'day'
      }, parsedDate[2]), ' ', _react.default.createElement("span", null, parsedDate[1], " ", parsedDate[0])), _react.default.createElement("div", {
        className: 'intro-content'
      }, _react.default.createElement("h2", {
        className: 'title'
      }, title.rendered), _react.default.createElement("div", {
        className: 'short-excerpt',
        dangerouslySetInnerHTML: {
          __html: description
        }
      }))))), _react.default.createElement(_Container.default, {
        col: false,
        className: 'description',
        outerWrap: true
      }, _react.default.createElement("div", {
        className: 'col-xs-12 col-md-9',
        dangerouslySetInnerHTML: {
          __html: content.rendered
        }
      }), _react.default.createElement("div", {
        className: 'col-xs-12 col-md-3'
      }, _react.default.createElement("div", {
        className: 'caption',
        dangerouslySetInnerHTML: {
          __html: caption
        }
      }), _react.default.createElement(_EnquiryForm.default, {
        formTitle: formTitle,
        firstNamePlaceholder: firstNamePlaceholder,
        lastNamePlaceholder: lastNamePlaceholder,
        emailPlaceholder: emailPlaceholder,
        phonePlaceholder: phonePlaceholder,
        messagePlaceholder: messagePlaceholder,
        buttonText: buttonText
      })))));
    }
  }]);

  return NewsPost;
}(_react.default.Component);

exports.default = NewsPost;
Object.defineProperty(NewsPost, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    description: "\n\t\t    <p>\n\t\t        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper lectus nec venenatis sollicitudin. \n\t\t        Quisque in orci molestie, pellentesque orci sit amet, consectetur quam.\n\t\t    </p>\n\t\t",
    content: "\n            <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper lectus nec venenatis sollicitudin. Quisque in orci molestie, pellentesque orci sit amet, consectetur quam. Quisque efficitur ipsum luctus aliquet blandit. Etiam iaculis luctus nulla, non aliquet tortor luctus in. Morbi sollicitudin hendrerit aliquet. Mauris non mauris in neque pharetra luctus. Nam sit amet varius mauris. Aliquam turpis orci, dictum in cursus sit amet, sodales sit amet metus. Fusce ut felis eget mi facilisis facilisis vitae id risus. Curabitur a mollis lorem. Sed eu nibh leo. Quisque eget justo nec ipsum commodo aliquam. \n            </p>\n            <p>\n                Etiam ultrices arcu sit amet nisl eleifend, in iaculis massa auctor. Morbi pretium semper volutpat. Donec vel neque sagittis ante dictum mollis. Donec condimentum urna mi, faucibus hendrerit tortor fermentum sed. Maecenas id semper odio. Proin accumsan sollicitudin nisi, ut iaculis lorem hendrerit ac. Praesent sapien lectus, rhoncus id lectus vel, gravida iaculis sem. Proin vitae est sit amet sem rhoncus maximus vitae ut tortor.\n            </p>\n        ",
    date: '2018,May,17',
    caption: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>',
    desktopBanner: {
      url: undefined
    },
    mobileBanner: {
      url: undefined
    }
  }
});
Object.defineProperty(NewsPost, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    shortExcerpt: _propTypes.default.string,
    content: _propTypes.default.object,
    date: _propTypes.default.string,
    caption: _propTypes.default.string
  }
});

/***/ }),
/* 79 */,
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 81 */,
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 83 */,
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _Container = _interopRequireDefault(__webpack_require__(2));

var _Map = _interopRequireDefault(__webpack_require__(16));

var _TypedInput = _interopRequireDefault(__webpack_require__(8));

var _SubmitButton = _interopRequireDefault(__webpack_require__(15));

var _withContactUs = _interopRequireDefault(__webpack_require__(14));

__webpack_require__(80);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactUs =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContactUs, _React$Component);

  function ContactUs() {
    _classCallCheck(this, ContactUs);

    return _possibleConstructorReturn(this, (ContactUs.__proto__ || Object.getPrototypeOf(ContactUs)).apply(this, arguments));
  }

  _createClass(ContactUs, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          title = _props.title,
          types = _props.types,
          submitButtonLabel = _props.submitButtonLabel,
          firstNamePlaceholder = _props.firstNamePlaceholder,
          lastNamePlaceholder = _props.lastNamePlaceholder,
          emailPlaceholder = _props.emailPlaceholder,
          phonePlaceholder = _props.phonePlaceholder,
          messagePlaceholder = _props.messagePlaceholder,
          onChange = _props.onChange,
          onSubmit = _props.onSubmit,
          introduction = _props.introduction,
          submitted = _props.submitted,
          responseMessage = _props.responseMessage;
      var typeSections = types.reduce(function (obj, type) {
        if (!obj[type.section]) obj[type.section] = [];
        obj[type.section].push(type);
        return obj;
      }, {});
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Map.default, {
        className: 'contact-us-map'
      }), _react.default.createElement("main", {
        className: 'contact-us-page-wrapper'
      }, _react.default.createElement(_Container.default, {
        col: false,
        className: 'contact-us-page'
      }, _react.default.createElement("div", {
        className: 'contact-us-inner-wrapper'
      }, _react.default.createElement("h2", {
        className: 'col-xs-12 title'
      }, title.rendered), _react.default.createElement("div", {
        className: 'col-xs-12 col-sm-12 col-md-4'
      }, _react.default.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: introduction
        }
      }), types && Object.keys(typeSections).map(function (key) {
        return _react.default.createElement("div", {
          key: key
        }, key !== 'undefined' && _react.default.createElement("h3", null, key), _react.default.createElement("ul", {
          className: 'list'
        }, typeSections[key].map(function (_ref, i) {
          var type = _ref.type,
              label = _ref.label,
              detail = _ref.detail;
          return _react.default.createElement("li", {
            key: i,
            className: 'item'
          }, _react.default.createElement("span", {
            className: 'label'
          }, label, ":"), type === 'addr' && _react.default.createElement("p", {
            className: 'link'
          }, detail), type !== 'addr' && _react.default.createElement("a", {
            className: 'link',
            href: "".concat(type, ":").concat(detail)
          }, detail));
        })));
      })), _react.default.createElement("form", {
        className: 'col-xs-12 col-sm-12 col-md-8 form',
        onSubmit: onSubmit
      }, _react.default.createElement(_Container.default, {
        col: false
      }, _react.default.createElement("div", {
        className: 'col-xs-12 col-sm-12 col-md-6'
      }, _react.default.createElement(_TypedInput.default, {
        placeholder: firstNamePlaceholder,
        autoComplete: "given-name",
        autoFocus: true,
        onChange: onChange,
        id: 'first-name',
        label: firstNamePlaceholder,
        type: 'text',
        className: 'text-input',
        disabled: submitted,
        required: true
      }), _react.default.createElement(_TypedInput.default, {
        placeholder: emailPlaceholder,
        autoComplete: "email",
        id: 'email',
        onChange: onChange,
        label: emailPlaceholder,
        type: 'text',
        className: 'text-input',
        disabled: submitted,
        required: true
      })), _react.default.createElement("div", {
        className: 'col-xs-12 col-sm-12 col-md-6'
      }, _react.default.createElement(_TypedInput.default, {
        placeholder: lastNamePlaceholder,
        autoComplete: "family-name",
        id: 'last-name',
        onChange: onChange,
        label: lastNamePlaceholder,
        type: 'text',
        className: 'text-input',
        disabled: submitted,
        required: true
      }), _react.default.createElement(_TypedInput.default, {
        placeholder: phonePlaceholder,
        autoComplete: "tel",
        id: 'phone',
        onChange: onChange,
        label: phonePlaceholder,
        type: 'text',
        className: 'text-input',
        disabled: submitted,
        required: true
      })), _react.default.createElement("div", {
        className: 'col-xs-12 col-sm-12 col-md-12'
      }, _react.default.createElement(_TypedInput.default, {
        big: true,
        placeholder: messagePlaceholder,
        id: 'message',
        onChange: onChange,
        label: messagePlaceholder,
        className: 'text-area',
        disabled: submitted,
        required: true
      }), _react.default.createElement("div", {
        className: 'submit-wrapper'
      }, _react.default.createElement(_SubmitButton.default, {
        disabled: submitted
      }, submitButtonLabel))))), _react.default.createElement("div", {
        className: 'col-xs-12'
      }, _react.default.createElement("p", {
        className: 'h2'
      }, responseMessage))))));
    }
  }]);

  return ContactUs;
}(_react.default.Component);

Object.defineProperty(ContactUs, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    title: {
      rendered: 'Contact us'
    },
    submitButtonLabel: 'Submit enquiry',
    types: [{
      type: 'tel',
      label: 'Phone',
      detail: '(02) 42 268 930'
    }, {
      type: 'tel',
      label: 'Fax',
      detail: '(02) 42 268 930'
    }, {
      type: 'mailto',
      label: 'Email',
      detail: 'info@circulationhealth.com.au'
    }],
    firstNamePlaceholder: 'First Name',
    lastNamePlaceholder: 'Last Name',
    emailPlaceholder: 'Email',
    phonePlaceholder: 'Phone',
    messagePlaceholder: 'Message',
    introduction: "<p>\n                    We want to hear from you. Please send us an enquiry with the following form and we will get back to\n                    you as soon as we can. Alternatively, you can contact us\n                </p>"
  }
});
Object.defineProperty(ContactUs, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    title: _propTypes.default.object,
    submitButtonLabel: _propTypes.default.string,
    types: _propTypes.default.array,
    firstNamePlaceholder: _propTypes.default.string,
    lastNamePlaceholder: _propTypes.default.string,
    emailPlaceholder: _propTypes.default.string,
    phonePlaceholder: _propTypes.default.string,
    messagePlaceholder: _propTypes.default.string,
    content: _propTypes.default.object
  }
});

var _default = (0, _withContactUs.default)(ContactUs);

exports.default = _default;

/***/ }),
/* 86 */,
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Banner = _interopRequireDefault(__webpack_require__(7));

var _reactRouterDom = __webpack_require__(6);

__webpack_require__(87);

var _Date = _interopRequireDefault(__webpack_require__(18));

var _Container = _interopRequireDefault(__webpack_require__(2));

var _withNews = _interopRequireDefault(__webpack_require__(17));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var News =
/*#__PURE__*/
function (_React$Component) {
  _inherits(News, _React$Component);

  function News() {
    _classCallCheck(this, News);

    return _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).apply(this, arguments));
  }

  _createClass(News, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          title = _props.title,
          news = _props.news,
          _props$mobileBanner = _props.mobileBanner,
          mobileBanner = _props$mobileBanner === void 0 ? {} : _props$mobileBanner,
          _props$desktopBanner = _props.desktopBanner,
          desktopBanner = _props$desktopBanner === void 0 ? {} : _props$desktopBanner,
          noNewsContent = _props.noNewsContent;
      var hasNews = news.length === 0;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Banner.default, {
        xs: mobileBanner.url,
        sm: mobileBanner.url,
        md: desktopBanner.url,
        lg: desktopBanner.url,
        xl: desktopBanner.url,
        overlap: !hasNews,
        titleContent: title.rendered
      }), _react.default.createElement(_Container.default, {
        className: 'news',
        outerWrap: true
      }, news.map(function (_ref, i) {
        var title = _ref.title,
            date = _ref.date,
            link = _ref.link;
        var parsedDate = date.split(',');
        return _react.default.createElement(_reactRouterDom.NavLink, {
          key: i,
          to: link.replace(location.origin, ''),
          className: 'news-row'
        }, _react.default.createElement(_Date.default, {
          day: parsedDate[2],
          month: parsedDate[1]
        }), _react.default.createElement("div", {
          className: 'title'
        }, title));
      }), hasNews && _react.default.createElement("div", {
        style: {
          textAlign: 'center',
          width: '100%',
          padding: '32px'
        },
        dangerouslySetInnerHTML: {
          __html: noNewsContent
        }
      })));
    }
  }]);

  return News;
}(_react.default.Component);

var _default = (0, _withNews.default)(News);

exports.default = _default;

/***/ }),
/* 89 */,
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 91 */,
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Container = _interopRequireDefault(__webpack_require__(2));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(92);

var _classnames = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Accordion =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Accordion, _React$Component);

  function Accordion(props) {
    var _ref;

    var _this;

    _classCallCheck(this, Accordion);

    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_ref = Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call.apply(_ref, [this, props].concat(rest)));
    Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        open: false
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "onClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState(function (prevState) {
          return {
            open: !prevState.open
          };
        });
      }
    });
    _this.state = {
      open: props.open
    };
    return _this;
  }

  _createClass(Accordion, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          content = _props.content,
          title = _props.title;
      var open = this.state.open;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('accordion', {
          open: open
        })
      }, _react.default.createElement(_Container.default, {
        outerWrap: true
      }, _react.default.createElement("button", {
        className: 'title',
        type: 'button',
        onClick: this.onClick
      }, title), _react.default.createElement("div", {
        className: 'content',
        dangerouslySetInnerHTML: {
          __html: content
        }
      })));
    }
  }]);

  return Accordion;
}(_react.default.Component);

exports.default = Accordion;
Object.defineProperty(Accordion, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    title: 'Frequently Asked Question',
    open: false,
    content: "<p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum tincidunt dui, eu venenatis urna placerat \n            sed. Etiam iaculis nisl vel sapien consectetur lobortis. Quisque eget libero erat. Cras eu nibh mollis augue finibus\n             efficitur. Aliquam efficitur non leo eu mattis. Pellentesque malesuada turpis hendrerit turpis porta, id congue ex \n             finibus.\n            </p>\n            <p>\n            Cras ut bibendum augue, sit amet scelerisque diam. Aliquam eget arcu orci. Morbi ut urna posuere, gravida nulla eget\n            , faucibus justo. Duis vitae viverra nulla. Suspendisse porta massa velit, ac ornare ex suscipit in. Donec lacinia \n            nisl et maximus mattis. Praesent dapibus leo diam, vel faucibus nunc maximus et. Duis placerat\n            </p>"
  }
});
Object.defineProperty(Accordion, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    title: _propTypes.default.string,
    content: _propTypes.default.string,
    open: _propTypes.default.bool
  }
});

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Banner = _interopRequireDefault(__webpack_require__(7));

var _Accordion = _interopRequireDefault(__webpack_require__(93));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(90);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var Faq =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Faq, _React$Component);

  function Faq() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Faq);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Faq.__proto__ || Object.getPrototypeOf(Faq)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        page: {
          title: {
            rendered: ''
          }
        }
      }
    }), _temp));
  }

  _createClass(Faq, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          title = _props.title,
          faqs = _props.faqs,
          _props$mobileBanner = _props.mobileBanner,
          mobileBanner = _props$mobileBanner === void 0 ? {} : _props$mobileBanner,
          _props$desktopBanner = _props.desktopBanner,
          desktopBanner = _props$desktopBanner === void 0 ? {} : _props$desktopBanner;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Banner.default, {
        xs: mobileBanner.url,
        sm: mobileBanner.url,
        md: desktopBanner.url,
        lg: desktopBanner.url,
        xl: desktopBanner.url,
        short: true,
        titleContent: title.rendered
      }), _react.default.createElement("main", {
        className: 'faq'
      }, faqs.map(function (faq, i) {
        return _react.default.createElement(_Accordion.default, _extends({
          open: i === 0
        }, faq, {
          key: i
        }));
      })));
    }
  }]);

  return Faq;
}(_react.default.Component);

exports.default = Faq;
Object.defineProperty(Faq, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    faqs: []
  }
});
Object.defineProperty(Faq, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    faqs: _propTypes.default.array
  }
});

/***/ }),
/* 95 */,
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChevronDown = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChevronDown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ChevronDown, _React$Component);

  function ChevronDown() {
    _classCallCheck(this, ChevronDown);

    return _possibleConstructorReturn(this, (ChevronDown.__proto__ || Object.getPrototypeOf(ChevronDown)).apply(this, arguments));
  }

  _createClass(ChevronDown, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("svg", _extends({}, this.props, {
        viewBox: "0 0 13 8"
      }), _react.default.createElement("path", {
        fill: "none",
        fillRule: "evenodd",
        stroke: "currentColor",
        strokeWidth: "2",
        d: "M1 1.22l5.371 5.37L11.962 1"
      }));
    }
  }]);

  return ChevronDown;
}(_react.default.Component);

exports.ChevronDown = ChevronDown;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Link = _interopRequireDefault(__webpack_require__(4));

var _ChevronDown = __webpack_require__(97);

var _Store = __webpack_require__(5);

var _classnames = _interopRequireDefault(__webpack_require__(3));

__webpack_require__(96);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var sizes = {
  xs: {
    left: 12,
    right: 12
  },
  sm: {
    left: 3,
    right: 9
  },
  md: {
    left: 3,
    right: 9
  },
  lg: {
    left: 3,
    right: 9
  },
  xl: {
    left: 3,
    right: 9
  }
};

var SideMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideMenu, _React$Component);

  function SideMenu() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, SideMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = SideMenu.__proto__ || Object.getPrototypeOf(SideMenu)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        open: false,
        menu: {}
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();

        _this.setState(function (_ref2) {
          var open = _ref2.open;
          return {
            open: !open
          };
        });
      }
    }), _temp));
  }

  _createClass(SideMenu, [{
    key: "hasSection",
    value: function hasSection() {
      var primaryNavigation = this.props.primaryNavigation;
      var parentItem = {};
      primaryNavigation.forEach(function (navItem) {
        if (navItem.url === location.href) {
          parentItem = navItem;
        }

        if (navItem.allChildren) {
          navItem.allChildren.forEach(function (item) {
            if (item.url === location.href) {
              parentItem = navItem;
            }
          });
        }
      });

      if (parentItem.allChildren) {
        this.setState({
          menu: parentItem
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.hasSection();
    }
  }, {
    key: "render",
    value: function render() {
      var leftClasses = Object.keys(sizes).map(function (size) {
        return "col-".concat(size, "-").concat(sizes[size].left);
      });
      var _state = this.state,
          menu = _state.menu,
          open = _state.open;
      if (Object.keys(menu).length === 0) return false;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)(leftClasses, 'navigation')
      }, _react.default.createElement("nav", {
        className: 'side-menu'
      }, _react.default.createElement("button", {
        className: 'title-wrap',
        onClick: this.onClick
      }, menu.url !== 'http://undefined' && _react.default.createElement(_Link.default, {
        noParentMatch: true,
        to: menu.url.replace(location.origin, '')
      }, _react.default.createElement("h2", {
        className: 'title'
      }, menu.title)), menu.url === 'http://undefined' && _react.default.createElement("h2", {
        className: 'title title--no-link'
      }, menu.title), _react.default.createElement("div", {
        className: 'icon-wrap'
      }, _react.default.createElement(_ChevronDown.ChevronDown, {
        className: 'down-icon'
      }))), _react.default.createElement("ul", {
        className: (0, _classnames.default)('nav-wrapper', {
          open: open
        })
      }, this.renderMenu(menu.children))));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu(navItems) {
      var _this2 = this;

      return navItems.map(function (_ref3) {
        var url = _ref3.url,
            title = _ref3.title,
            id = _ref3.ID,
            children = _ref3.children;
        return _react.default.createElement("li", {
          key: id
        }, _react.default.createElement(_Link.default, {
          to: url.replace(location.origin, '') || '/'
        }, _react.default.createElement("span", null, title)), children && _react.default.createElement("ul", null, " ", _this2.renderMenu(children), " "));
      });
    }
  }]);

  return SideMenu;
}(_react.default.Component);

var _default = (0, _Store.withConsumer)(SideMenu);

exports.default = _default;

/***/ }),
/* 99 */,
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Banner = _interopRequireDefault(__webpack_require__(7));

var _Container = _interopRequireDefault(__webpack_require__(2));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(100);

var _SideMenu = _interopRequireDefault(__webpack_require__(98));

var _classnames = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sizes = {
  xs: {
    left: 12,
    right: 12
  },
  sm: {
    left: 3,
    right: 9
  },
  md: {
    left: 3,
    right: 9
  },
  lg: {
    left: 3,
    right: 9
  },
  xl: {
    left: 3,
    right: 9
  }
};

var Page =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Page, _React$PureComponent);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          title = _props.title,
          content = _props.content,
          _props$desktopBanner = _props.desktopBanner,
          desktopBanner = _props$desktopBanner === void 0 ? {} : _props$desktopBanner,
          _props$mobileBanner = _props.mobileBanner,
          mobileBanner = _props$mobileBanner === void 0 ? {} : _props$mobileBanner;
      var rightClasses = Object.keys(sizes).map(function (size) {
        return "col-".concat(size, "-").concat(sizes[size].right);
      });
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Banner.default, {
        xs: mobileBanner.url,
        sm: mobileBanner.url,
        md: desktopBanner.url,
        lg: desktopBanner.url,
        xl: desktopBanner.url,
        short: true
      }), _react.default.createElement("main", {
        className: 'page'
      }, _react.default.createElement(_Container.default, {
        outerWrap: true
      }, _react.default.createElement("div", {
        className: 'container-fluid page-content'
      }, _react.default.createElement("div", {
        className: 'row'
      }, _react.default.createElement(_SideMenu.default, {
        title: title.rendered
      }), _react.default.createElement("div", {
        className: (0, _classnames.default)(rightClasses, 'content')
      }, _react.default.createElement("h2", {
        className: 'page-title'
      }, _react.default.createElement("span", null, title.rendered)), _react.default.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: content.rendered
        }
      })))))));
    }
  }]);

  return Page;
}(_react.default.PureComponent);

exports.default = Page;
Object.defineProperty(Page, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    title: {
      rendered: ''
    },
    content: {
      rendered: ''
    }
  }
});
Object.defineProperty(Page, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    title: _propTypes.default.object,
    content: _propTypes.default.object
  }
});

/***/ }),
/* 102 */,
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 104 */,
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _Container = _interopRequireDefault(__webpack_require__(2));

__webpack_require__(105);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HalfContainer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HalfContainer, _React$Component);

  function HalfContainer() {
    _classCallCheck(this, HalfContainer);

    return _possibleConstructorReturn(this, (HalfContainer.__proto__ || Object.getPrototypeOf(HalfContainer)).apply(this, arguments));
  }

  _createClass(HalfContainer, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return _react.default.createElement(_Container.default, {
        className: 'half-container',
        outerWrap: true
      }, _react.default.createElement("div", {
        className: 'half-container-row',
        style: {
          display: 'flex'
        }
      }, _react.default.createElement("div", {
        className: 'section'
      }, children[0]), _react.default.createElement("div", {
        className: 'section'
      }, children[1])));
    }
  }]);

  return HalfContainer;
}(_react.default.Component);

exports.default = HalfContainer;
Object.defineProperty(HalfContainer, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    sizes: {
      xs: 12,
      sm: 6,
      md: 6,
      lg: 6,
      xl: 6
    }
  }
});
Object.defineProperty(HalfContainer, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    sizes: _propTypes.default.object,
    className: _propTypes.default.string
  }
});

/***/ }),
/* 107 */,
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _classnames = _interopRequireDefault(__webpack_require__(3));

var _Container = _interopRequireDefault(__webpack_require__(2));

__webpack_require__(108);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListTile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ListTile, _React$Component);

  function ListTile() {
    _classCallCheck(this, ListTile);

    return _possibleConstructorReturn(this, (ListTile.__proto__ || Object.getPrototypeOf(ListTile)).apply(this, arguments));
  }

  _createClass(ListTile, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          items = _props.items,
          title = _props.title,
          className = _props.className;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('list-tile', className)
      }, _react.default.createElement(_Container.default, null, _react.default.createElement("h2", null, title), _react.default.createElement("ul", null, items.map(function (item, i) {
        return _react.default.createElement("li", {
          key: i
        }, _react.default.createElement("a", {
          href: item.link.url,
          target: item.link.target
        }, item.link.title));
      }))));
    }
  }]);

  return ListTile;
}(_react.default.Component);

exports.default = ListTile;
Object.defineProperty(ListTile, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    title: 'Information for patients',
    items: [{
      link: {
        title: '',
        url: ''
      }
    }, {
      link: {
        title: '',
        url: ''
      }
    }, {
      link: {
        title: '',
        url: ''
      }
    }, {
      link: {
        title: '',
        url: ''
      }
    }]
  }
});
Object.defineProperty(ListTile, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    title: _propTypes.default.string,
    items: _propTypes.default.array
  }
});

/***/ }),
/* 110 */,
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Store = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withMap = function withMap(Component) {
  return (0, _Store.withConsumer)(
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class() {
      _classCallCheck(this, _class);

      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
      key: "render",
      value: function render() {
        var globalOptions = this.props.globalOptions;
        if (!globalOptions) return false;
        return _react.default.createElement(Component, _extends({}, this.props, {
          map: this.props.globalOptions.googleMapsAddress,
          map2: this.props.globalOptions.googleMapsAddress2
        }));
      }
    }]);

    return _class;
  }(_react.default.Component));
};

var _default = withMap;
exports.default = _default;

/***/ }),
/* 113 */,
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _Store = __webpack_require__(5);

var _stripHtmlTags = _interopRequireDefault(__webpack_require__(9));

var _Link = _interopRequireDefault(__webpack_require__(4));

__webpack_require__(114);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var CaseStudyTile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CaseStudyTile, _React$Component);

  function CaseStudyTile() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, CaseStudyTile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = CaseStudyTile.__proto__ || Object.getPrototypeOf(CaseStudyTile)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        caseStudyPages: []
      }
    }), _temp));
  }

  _createClass(CaseStudyTile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          pages = _props.pages,
          caseStudies = _props.caseStudies;
      var caseStudyPages = [];
      caseStudies.forEach(function (caseStudy) {
        caseStudy = pages.filter(function (page) {
          return page.link === caseStudy;
        })[0];

        if (caseStudy) {
          caseStudyPages.push(caseStudy);
        }
      });
      this.setState({
        caseStudyPages: caseStudyPages
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = this.props.title;
      var caseStudyPages = this.state.caseStudyPages;

      var max = _toConsumableArray(caseStudyPages);

      max.length = 2;
      return _react.default.createElement("div", {
        className: 'case-study-tile'
      }, _react.default.createElement("h2", {
        className: 'title'
      }, title), _react.default.createElement("div", {
        className: 'case-studies'
      }, caseStudyPages.length > 0 && max.map(function (_ref2, i) {
        var content = _ref2.content,
            title = _ref2.title,
            acf = _ref2.acf,
            link = _ref2.link;
        return _react.default.createElement("article", {
          className: 'case-study',
          key: i
        }, _react.default.createElement(_Link.default, {
          to: link.replace(location.origin, '')
        }, acf.pageImage && _react.default.createElement("img", {
          className: 'img',
          src: acf.pageImage.url
        }), _react.default.createElement("h3", null, title.rendered), _react.default.createElement("p", {
          dangerouslySetInnerHTML: {
            __html: (0, _stripHtmlTags.default)(content.rendered ? content.rendered.substring(0, 100).trim() + '...' : '')
          }
        })));
      })));
    }
  }]);

  return CaseStudyTile;
}(_react.default.Component);

Object.defineProperty(CaseStudyTile, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    title: 'Case Studies',
    caseStudies: []
  }
});
Object.defineProperty(CaseStudyTile, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    title: _propTypes.default.string,
    caseStudies: _propTypes.default.array
  }
});

var _default = (0, _Store.withConsumer)(CaseStudyTile);

exports.default = _default;

/***/ }),
/* 116 */,
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 118 */,
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var PropTypes = _interopRequireWildcard(__webpack_require__(1));

var _Link = _interopRequireDefault(__webpack_require__(4));

var _Date = _interopRequireDefault(__webpack_require__(18));

var _withNews = _interopRequireDefault(__webpack_require__(17));

__webpack_require__(117);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CalendarTile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CalendarTile, _React$Component);

  function CalendarTile() {
    _classCallCheck(this, CalendarTile);

    return _possibleConstructorReturn(this, (CalendarTile.__proto__ || Object.getPrototypeOf(CalendarTile)).apply(this, arguments));
  }

  _createClass(CalendarTile, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          title = _props.title,
          news = _props.news,
          footerLink = _props.footerLink;

      var latest = _toConsumableArray(news);

      latest.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
      latest.length = 2;
      return _react.default.createElement("div", {
        className: 'calendar-tile'
      }, _react.default.createElement("h2", null, title), _react.default.createElement("ul", {
        className: 'calendar'
      }, latest.map(function (_ref) {
        var title = _ref.title,
            date = _ref.date,
            link = _ref.link,
            excerpt = _ref.excerpt;
        var parsedDate = date.split(',');
        return _react.default.createElement("li", {
          key: (title + date).replace(/ /gi, '-'),
          className: 'entry'
        }, _react.default.createElement("div", null, _react.default.createElement(_Link.default, {
          to: link.replace(location.origin, ''),
          className: 'link'
        }, _react.default.createElement(_Date.default, {
          day: parsedDate[2],
          month: parsedDate[1]
        }), _react.default.createElement("div", null, _react.default.createElement("p", {
          className: 'title'
        }, title), _react.default.createElement("p", {
          className: 'excerpt'
        }, excerpt.trim(), "...")))));
      })), _react.default.createElement("p", null, _react.default.createElement(_Link.default, {
        to: '/'
      }, footerLink)));
    }
  }]);

  return CalendarTile;
}(_react.default.Component);

Object.defineProperty(CalendarTile, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    title: 'Latest News',
    footerLink: 'See all upcoming events',
    news: [{
      title: 'Event One',
      link: '/',
      date: '2018,May,17'
    }, {
      title: 'Event Two',
      link: '/',
      date: '2018,May,12'
    }]
  }
});
Object.defineProperty(CalendarTile, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    profileImage: PropTypes.string,
    content: PropTypes.string
  }
});

var _default = (0, _withNews.default)(CalendarTile);

exports.default = _default;

/***/ }),
/* 121 */,
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

__webpack_require__(122);

var _config = __webpack_require__(20);

var _Container = _interopRequireDefault(__webpack_require__(2));

var _classnames = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var once = true;

var ProfileTile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProfileTile, _React$Component);

  function ProfileTile() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, ProfileTile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = ProfileTile.__proto__ || Object.getPrototypeOf(ProfileTile)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "content", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: _react.default.createRef()
    }), Object.defineProperty(_assertThisInitialized(_this), "img", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: _react.default.createRef()
    }), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        className: ''
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "resize", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        requestAnimationFrame(function () {
          var content = _this.content.current;
          var img = _this.img.current;

          if ((!content || !img) && once) {
            setTimeout(_this.resize, 500);
            once = false;
            return;
          }

          requestAnimationFrame(function () {
            var style = getComputedStyle(_this.img.current);
            var contentHeight = content.offsetHeight;
            var imgHeight = img.offsetHeight;
            contentHeight -= parseInt(style.marginTop.replace('px', ''));

            if (contentHeight > imgHeight && _this.state.className === '') {
              _this.setState({
                className: 'grey-bumper'
              });
            } else if (contentHeight <= imgHeight && _this.state.className !== '') {
              _this.setState({
                className: ''
              });
            }
          });
        });
      }
    }), _temp));
  }

  _createClass(ProfileTile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      addEventListener('resize', this.resize);
      setTimeout(this.resize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      removeEventListener('resize', this.resize);
      this.content = undefined;
      this.img = undefined;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          profileImage = _props.profileImage,
          content = _props.content,
          title = _props.title;
      var className = this.state.className;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('profile-padding-wrap', className)
      }, _react.default.createElement("div", {
        className: 'profile-wrap'
      }, _react.default.createElement("div", {
        className: 'profile-tile'
      }, _react.default.createElement(_Container.default, null, _react.default.createElement("div", {
        className: 'wrapper'
      }, _react.default.createElement("div", {
        className: 'profile'
      }, _react.default.createElement("img", {
        onLoad: this.resize,
        ref: this.img,
        className: 'image',
        src: profileImage
      })), _react.default.createElement("div", {
        ref: this.content,
        className: 'content'
      }, _react.default.createElement("h2", {
        className: "h4"
      }, title), _react.default.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: content
        }
      })))))), _react.default.createElement("div", {
        className: 'padding'
      }));
    }
  }]);

  return ProfileTile;
}(_react.default.Component);

exports.default = ProfileTile;
Object.defineProperty(ProfileTile, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    profileImage: _config.themedir + '/img/dr-bullen.jpg',
    content: ""
  }
});
Object.defineProperty(ProfileTile, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    title: _propTypes.default.string,
    profileImage: _propTypes.default.string,
    content: _propTypes.default.string
  }
});

/***/ }),
/* 124 */,
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _Link = _interopRequireDefault(__webpack_require__(4));

var _Container = _interopRequireDefault(__webpack_require__(2));

__webpack_require__(125);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PanelTile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PanelTile, _React$Component);

  function PanelTile() {
    _classCallCheck(this, PanelTile);

    return _possibleConstructorReturn(this, (PanelTile.__proto__ || Object.getPrototypeOf(PanelTile)).apply(this, arguments));
  }

  _createClass(PanelTile, [{
    key: "render",
    value: function render() {
      var links = this.props.links;
      return _react.default.createElement(_Container.default, {
        className: 'panel-tile',
        col: false
      }, _react.default.createElement("ul", null, links.map(function (_ref) {
        var title = _ref.title,
            icon = _ref.icon,
            link = _ref.link;
        return _react.default.createElement("li", {
          className: 'col-xs-12',
          key: link + title
        }, _react.default.createElement(_Link.default, {
          to: (link || '').replace(location.origin, ''),
          className: 'link'
        }, _react.default.createElement("span", {
          className: 'image-wrap'
        }, _react.default.createElement("span", {
          className: 'image'
        }, _react.default.createElement("img", {
          src: icon ? icon.url : undefined
        }))), _react.default.createElement("span", {
          className: 'title'
        }, title)));
      })));
    }
  }]);

  return PanelTile;
}(_react.default.Component);

exports.default = PanelTile;
Object.defineProperty(PanelTile, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    links: []
  }
});
Object.defineProperty(PanelTile, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    links: _propTypes.default.arrayOf(_propTypes.default.object)
  }
});

/***/ }),
/* 127 */,
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _Container = _interopRequireDefault(__webpack_require__(2));

__webpack_require__(128);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CenterTile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CenterTile, _React$Component);

  function CenterTile() {
    _classCallCheck(this, CenterTile);

    return _possibleConstructorReturn(this, (CenterTile.__proto__ || Object.getPrototypeOf(CenterTile)).apply(this, arguments));
  }

  _createClass(CenterTile, [{
    key: "render",
    value: function render() {
      var content = this.props.content;
      return _react.default.createElement("div", {
        className: 'center-tile-wrapper'
      }, _react.default.createElement(_Container.default, {
        className: 'center-tile',
        outerWrap: true
      }, _react.default.createElement("div", {
        className: 'content',
        dangerouslySetInnerHTML: {
          __html: content
        }
      })));
    }
  }]);

  return CenterTile;
}(_react.default.Component);

exports.default = CenterTile;
Object.defineProperty(CenterTile, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    content: "<p>Our team led by highly trained vascular and endovascular surgeons offers 20 years of experience, the latest techniques and state-of-the-art equipment.</p>"
  }
});
Object.defineProperty(CenterTile, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    content: _propTypes.default.string
  }
});

/***/ }),
/* 130 */,
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 132 */,
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 134 */,
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _Banner = _interopRequireDefault(__webpack_require__(7));

var _CenterTile = _interopRequireDefault(__webpack_require__(129));

var _PanelTile = _interopRequireDefault(__webpack_require__(126));

var _ProfileTile = _interopRequireDefault(__webpack_require__(123));

var _CalendarTile = _interopRequireDefault(__webpack_require__(120));

var _CaseStudyTile = _interopRequireDefault(__webpack_require__(115));

var _Map = _interopRequireDefault(__webpack_require__(16));

var _ListTile = _interopRequireDefault(__webpack_require__(109));

var _HalfContainer = _interopRequireDefault(__webpack_require__(106));

var _Store = __webpack_require__(5);

__webpack_require__(103);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          tagLine = _props.tagLine,
          boxLinks = _props.boxLinks,
          profileContent = _props.profileContent,
          profileImage = _props.profileImage,
          profileTitle = _props.profileTitle,
          informationBoxTitle = _props.informationBoxTitle,
          informationBoxLink = _props.informationBoxLink,
          caseStudies = _props.caseStudies,
          caseStudiesTitle = _props.caseStudiesTitle,
          _props$mobileBannerIm = _props.mobileBannerImage,
          mobileBannerImage = _props$mobileBannerIm === void 0 ? {} : _props$mobileBannerIm,
          _props$desktopBannerI = _props.desktopBannerImage,
          desktopBannerImage = _props$desktopBannerI === void 0 ? {} : _props$desktopBannerI,
          bannerText = _props.bannerText;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Banner.default, {
        xs: mobileBannerImage.url,
        sm: mobileBannerImage.url,
        md: desktopBannerImage.url,
        lg: desktopBannerImage.url,
        xl: desktopBannerImage.url,
        titleContent: bannerText
      }, _react.default.createElement("div", {
        className: 'list-tile-wrapper'
      }, _react.default.createElement(_ListTile.default, {
        className: 'banner-links',
        title: informationBoxTitle,
        items: informationBoxLink
      }))), _react.default.createElement("main", {
        className: 'home'
      }, _react.default.createElement(_CenterTile.default, {
        content: tagLine
      }), _react.default.createElement(_PanelTile.default, {
        links: boxLinks
      }), profileImage && _react.default.createElement(_ProfileTile.default, {
        content: profileContent,
        profileImage: profileImage.url,
        title: profileTitle
      }), _react.default.createElement(_HalfContainer.default, null, _react.default.createElement(_CalendarTile.default, null), _react.default.createElement(_CaseStudyTile.default, {
        caseStudies: caseStudies,
        title: caseStudiesTitle
      })), _react.default.createElement(_Map.default, null)));
    }
  }]);

  return Home;
}(_react.default.Component);

Object.defineProperty(Home, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    tagLine: _propTypes.default.string,
    boxLinks: _propTypes.default.array,
    profileContent: _propTypes.default.string,
    profileImage: _propTypes.default.object,
    profileTitle: _propTypes.default.string,
    informationBoxTitle: _propTypes.default.string,
    informationBoxLink: _propTypes.default.array
  }
});

var _default = (0, _Store.withConsumer)(Home);

exports.default = _default;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInit = getInit;

var _axios = _interopRequireDefault(__webpack_require__(10));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

var sitePath = location.origin;
var appUrl = "".concat(sitePath, "/?per_page=100&rest_route=/wp/v2");

var api =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(endPoint) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _axios.default.get(endPoint);

          case 3:
            response = _context.sent;
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            throw new Error(_context.t0);

          case 9:
            return _context.abrupt("return", response.data);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 6]]);
  }));

  return function api(_x) {
    return _ref.apply(this, arguments);
  };
}();

function getInit() {
  return _getInit.apply(this, arguments);
} // util


function _getInit() {
  _getInit = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var primaryNavigation, pages, options, globalOptions;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = formatNavigation;
            _context2.next = 3;
            return api("".concat(sitePath, "/wp-json/api/menu"));

          case 3:
            _context2.t1 = _context2.sent;
            primaryNavigation = (0, _context2.t0)(_context2.t1);
            _context2.t2 = falseToUndefined;
            _context2.next = 8;
            return api("".concat(appUrl, "/pages"));

          case 8:
            _context2.t3 = _context2.sent;
            pages = (0, _context2.t2)(_context2.t3);
            _context2.next = 12;
            return api("".concat(sitePath, "/wp-json/acf/v3/options/options"));

          case 12:
            options = _context2.sent;
            globalOptions = falseToUndefined([options.acf])[0];
            this.setState({
              pages: pages,
              primaryNavigation: primaryNavigation,
              globalOptions: globalOptions
            });

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _getInit.apply(this, arguments);
}

var allChildren = [];

function getAllChildren(array) {
  array.forEach(function (item) {
    allChildren.push({
      id: item.id,
      url: item.url
    });

    if (item.children) {
      getAllChildren(item.children);
    }
  });
}

function storeItem(item, array) {
  array.forEach(function (insideItem) {
    if (Number(item.menu_item_parent) === insideItem.ID) {
      if (!insideItem.children) insideItem.children = [];
      insideItem.children.push(item);
    } else if (insideItem.children) {
      storeItem(item, insideItem.children);
    }
  });
  array.forEach(function (item) {
    if (item.children) {
      getAllChildren(item.children);
      item.allChildren = allChildren;
      allChildren = [];
    }
  });
}

function formatNavigation(navItems) {
  var SubMenuItem = [];
  if (!navItems) return [];
  navItems.forEach(function (item, i) {
    if (item.menu_item_parent !== '0') {
      SubMenuItem.push(item);
      storeItem(item, navItems);
      delete navItems[i];
    }
  });
  navItems = navItems.filter(function (item) {
    return !!item;
  });
  return navItems;
}

function falseToUndefined(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key) && _typeof(obj[key]) === 'object' && obj[key] !== null) falseToUndefined(obj[key]);else {
      obj[key] = !obj[key] ? undefined : obj[key];
    }
  }

  return obj;
}

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _propTypes = _interopRequireDefault(__webpack_require__(1));

var _reactRouterDom = __webpack_require__(6);

var _Store = __webpack_require__(5);

var _Home = _interopRequireDefault(__webpack_require__(136));

var _Page = _interopRequireDefault(__webpack_require__(101));

var _Faq = _interopRequireDefault(__webpack_require__(94));

var _News = _interopRequireDefault(__webpack_require__(88));

var _ContactUs = _interopRequireDefault(__webpack_require__(85));

var _NewsPost = _interopRequireDefault(__webpack_require__(78));

var _Base = _interopRequireDefault(__webpack_require__(72));

var _Search = _interopRequireDefault(__webpack_require__(28));

var _Container = _interopRequireDefault(__webpack_require__(2));

var _Banner = _interopRequireDefault(__webpack_require__(7));

var _Link = _interopRequireDefault(__webpack_require__(4));

var _classnames = _interopRequireDefault(__webpack_require__(3));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var templates = {
  'home.php': _Home.default,
  'faq.php': _Faq.default,
  'news.php': _News.default,
  'contact-us.php': _ContactUs.default,
  'news-post.php': _NewsPost.default,
  'case-study.php': _Page.default
};

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        mounted: false,
        navOpen: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "pageRoutes", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(pages) {
        return pages.map(function (page, i) {
          var acf = page.acf,
              template = page.template,
              link = page.link,
              rest = _objectWithoutProperties(page, ["acf", "template", "link"]);

          return _react.default.createElement(_reactRouterDom.Route, {
            key: i,
            component: function component() {
              var Template = templates[template] || _Page.default;
              return _react.default.createElement(Template, _extends({}, rest, acf));
            },
            exact: true,
            path: "".concat(link.replace(location.origin, ''))
          });
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "mobileNavOpen", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(val) {
        return _this.setState({
          navOpen: val
        });
      }
    }), _temp));
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getInit();
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          globalOptions = _props.globalOptions,
          primaryNavigation = _props.primaryNavigation;
      var _state = this.state,
          mounted = _state.mounted,
          navOpen = _state.navOpen;
      return _react.default.createElement(_reactRouterDom.BrowserRouter, null, _react.default.createElement("div", {
        className: (0, _classnames.default)('root', {
          'nav-open': navOpen
        }),
        style: {
          opacity: mounted ? '1' : '0'
        }
      }, _react.default.createElement(_Base.default, _extends({}, globalOptions, {
        primaryNavigation: primaryNavigation,
        mobileNavOpen: this.mobileNavOpen
      }), _react.default.createElement(_reactRouterDom.Switch, null, this.pageRoutes(this.props.pages), _react.default.createElement(_reactRouterDom.Route, {
        component: function component() {
          return _react.default.createElement(_Search.default, globalOptions);
        },
        exact: true,
        path: '/search'
      }), _react.default.createElement(_reactRouterDom.Route, {
        path: "*",
        component: function component() {
          return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Banner.default, {
            titleContent: '<h2>Page Not Found...</h2>'
          }), _react.default.createElement(_Container.default, null, _react.default.createElement("h3", null, _react.default.createElement("br", null), "Sorry this page is not available. Click ", _react.default.createElement(_Link.default, {
            to: '/'
          }, "here"), " to go back to the homepage.")));
        }
      })))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if (nextProps.pages.length) {
        return {
          mounted: true
        };
      }

      return {};
    }
  }]);

  return App;
}(_react.default.Component);

Object.defineProperty(App, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    getPages: _propTypes.default.func,
    getPrimaryNavigation: _propTypes.default.func,
    getGlobalOptions: _propTypes.default.func,
    getInit: _propTypes.default.func
  }
});
Object.defineProperty(App, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    pages: [],
    posts: [],
    primaryNavigation: [],
    globalOptions: []
  }
});

var _default = (0, _Store.withConsumer)(App);

exports.default = _default;

/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__139__;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = _interopRequireDefault(__webpack_require__(0));

var _reactDom = __webpack_require__(139);

var _App = _interopRequireDefault(__webpack_require__(138));

var _Store = _interopRequireDefault(__webpack_require__(5));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react.default.createElement(_Store.default, null, _react.default.createElement(_App.default, null)), document.getElementById('app'));

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(140);

__webpack_require__(22);

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(141);


/***/ })
/******/ ]);
});