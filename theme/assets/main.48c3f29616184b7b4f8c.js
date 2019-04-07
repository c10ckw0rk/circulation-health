(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("PropTypes"), require("classNames"), require("ReactRouterDOM"), require("axios"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "PropTypes", "classNames", "ReactRouterDOM", "axios", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["circulation-health"] = factory(require("React"), require("PropTypes"), require("classNames"), require("ReactRouterDOM"), require("axios"), require("ReactDOM"));
	else
		root["circulation-health"] = factory(root["React"], root["PropTypes"], root["classNames"], root["ReactRouterDOM"], root["axios"], root["ReactDOM"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__7__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports.__esModule = true;
exports.Helmet = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSideEffect = __webpack_require__(32);

var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

var _deepEqual = __webpack_require__(35);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _HelmetUtils = __webpack_require__(38);

var _HelmetConstants = __webpack_require__(6);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(54);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(0);
var React__default = _interopDefault(React);
var ExecutionEnvironment = _interopDefault(__webpack_require__(33));
var shallowEqual = _interopDefault(__webpack_require__(34));

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
/* 33 */
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
/* 34 */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var pSlice = Array.prototype.slice;
var objectKeys = __webpack_require__(36);
var isArguments = __webpack_require__(37);

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
/* 36 */
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
/* 37 */
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports.__esModule = true;
exports.warn = exports.requestAnimationFrame = exports.reducePropsToState = exports.mapStateOnServer = exports.handleClientStateChange = exports.convertReactPropstoHtmlAttributes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _objectAssign = __webpack_require__(40);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _HelmetConstants = __webpack_require__(6);

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(39)))

/***/ }),
/* 39 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 40 */
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
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"xs":"479","sm":"480","md":"768","lg":"1200","xl":"1400"};

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "getInit", function() { return getInit; });

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(0);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: external "ReactDOM"
var external_ReactDOM_ = __webpack_require__(7);

// EXTERNAL MODULE: external "PropTypes"
var external_PropTypes_ = __webpack_require__(1);
var external_PropTypes_default = /*#__PURE__*/__webpack_require__.n(external_PropTypes_);

// EXTERNAL MODULE: external "ReactRouterDOM"
var external_ReactRouterDOM_ = __webpack_require__(3);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./src/js/store/actions.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


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
            return external_axios_default.a.get(endPoint);

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
    }, _callee, null, [[0, 6]]);
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
// CONCATENATED MODULE: ./src/js/store/Store.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Store_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Store_typeof = function _typeof(obj) { return typeof obj; }; } else { Store_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Store_typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (Store_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var _createContext = Object(external_React_["createContext"])(null),
    Provider = _createContext.Provider,
    Consumer = _createContext.Consumer;

var Store_Store =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Store, _React$Component);

  function Store() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Store);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Store)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      pages: [],
      posts: [],
      home: [],
      globalOptions: []
    });

    return _this;
  }

  _createClass(Store, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      return external_React_default.a.createElement(Provider, {
        value: {
          state: this.state,
          actions: Object.keys(actions_namespaceObject).reduce(function (obj, key) {
            obj[key] = actions_namespaceObject[key].bind(_this2);
            return obj;
          }, {})
        }
      }, children);
    }
  }]);

  return Store;
}(external_React_default.a.Component);


var Store_withConsumer = function withConsumer(Component) {
  return function (props) {
    return external_React_default.a.createElement(Consumer, null, function (_ref) {
      var state = _ref.state,
          actions = _ref.actions;
      return external_React_default.a.createElement(Component, _extends({}, props, state, actions));
    });
  };
};
// CONCATENATED MODULE: ./src/js/config.js
var themedir = CONFIG.THEME_DIR;
// EXTERNAL MODULE: external "classNames"
var external_classNames_ = __webpack_require__(2);
var external_classNames_default = /*#__PURE__*/__webpack_require__.n(external_classNames_);

// EXTERNAL MODULE: ./src/js/components/grid/Container.scss
var grid_Container = __webpack_require__(10);

// CONCATENATED MODULE: ./src/js/components/grid/Container.js
function Container_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Container_typeof = function _typeof(obj) { return typeof obj; }; } else { Container_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Container_typeof(obj); }

function Container_extends() { Container_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Container_extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Container_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Container_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Container_createClass(Constructor, protoProps, staticProps) { if (protoProps) Container_defineProperties(Constructor.prototype, protoProps); if (staticProps) Container_defineProperties(Constructor, staticProps); return Constructor; }

function Container_possibleConstructorReturn(self, call) { if (call && (Container_typeof(call) === "object" || typeof call === "function")) { return call; } return Container_assertThisInitialized(self); }

function Container_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Container_getPrototypeOf(o) { Container_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Container_getPrototypeOf(o); }

function Container_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Container_setPrototypeOf(subClass, superClass); }

function Container_setPrototypeOf(o, p) { Container_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Container_setPrototypeOf(o, p); }

function Container_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Container_Container =
/*#__PURE__*/
function (_React$Component) {
  Container_inherits(Container, _React$Component);

  function Container() {
    Container_classCallCheck(this, Container);

    return Container_possibleConstructorReturn(this, Container_getPrototypeOf(Container).apply(this, arguments));
  }

  Container_createClass(Container, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          sizes = _this$props.sizes,
          col = _this$props.col,
          outerWrap = _this$props.outerWrap,
          padding = _this$props.padding,
          section = _this$props.section,
          rest = _objectWithoutProperties(_this$props, ["className", "children", "sizes", "col", "outerWrap", "padding", "section"]);

      var colClasses = Object.keys(sizes).map(function (size) {
        return "col-".concat(size, "-").concat(sizes[size]);
      });
      var Component = section ? 'section' : 'div';
      return external_React_default.a.createElement(Component, {
        className: external_classNames_default()('container-fluid', 'container-component', className, {
          'outer-wrap': outerWrap,
          padding: !padding
        })
      }, external_React_default.a.createElement("div", {
        className: 'row'
      }, col && external_React_default.a.createElement("div", Container_extends({
        className: external_classNames_default()(colClasses)
      }, rest), children), !col && children));
    }
  }]);

  return Container;
}(external_React_default.a.Component);

Container_defineProperty(Container_Container, "defaultProps", {
  sizes: {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 12
  },
  col: true,
  padding: true
});

Container_defineProperty(Container_Container, "propTypes", {
  sizes: external_PropTypes_default.a.object,
  className: external_PropTypes_default.a.string,
  col: external_PropTypes_default.a.bool,
  outerWrap: external_PropTypes_default.a.bool,
  padding: external_PropTypes_default.a.bool
});


// EXTERNAL MODULE: ./src/scss/core/_break-points.scss
var _break_points = __webpack_require__(4);
var _break_points_default = /*#__PURE__*/__webpack_require__.n(_break_points);

// CONCATENATED MODULE: ./src/js/util/Grid.js
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Grid_defineProperty(target, key, source[key]); }); } return target; }

function Grid_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Grid_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Grid_createClass(Constructor, protoProps, staticProps) { if (protoProps) Grid_defineProperties(Constructor.prototype, protoProps); if (staticProps) Grid_defineProperties(Constructor, staticProps); return Constructor; }

function Grid_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Grid_types = ['On', 'Off'];
var bp = ['xs', 'sm', 'md', 'lg', 'xl'];

var noop = function noop() {};

var capitalise = function capitalise(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var typeCheck = function typeCheck(bp, type) {
  if (!Grid_types.includes(type)) throw new Error("Grid error, type must be either ".concat(type.toString().replace(/,/, ' ,')));
  if (!bp.includes(bp)) throw new Error("Grid error, bp be on off ".concat(bp.toString().replace(/,/, ' ,')));
};

var Grid_Grid =
/*#__PURE__*/
function () {
  function Grid() {
    var _this = this;

    Grid_classCallCheck(this, Grid);

    Grid_defineProperty(this, "current", void 0);

    Grid_defineProperty(this, "registryTemplate", {
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
    });

    Grid_defineProperty(this, "registry", _objectSpread({}, this.registryTemplate));

    Grid_defineProperty(this, "resize", function () {
      window.requestAnimationFrame(function () {
        return _this.exec();
      });
    });

    window.addEventListener('resize', this.resize);
  }

  Grid_createClass(Grid, [{
    key: "exec",
    value: function exec() {
      if (window.matchMedia("(max-width: ".concat(_break_points_default.a.xs, "px)")).matches) {
        this.on('xs');
      }

      if (window.matchMedia("(min-width: ".concat(_break_points_default.a.sm, "px) and (max-width: ").concat(_break_points_default.a.md - 1, "px)")).matches) {
        this.on('sm');
      }

      if (window.matchMedia("(min-width: ".concat(_break_points_default.a.md, "px) and (max-width: ").concat(_break_points_default.a.lg - 1, "px)")).matches) {
        this.on('md');
      }

      if (window.matchMedia("(min-width: ".concat(_break_points_default.a.lg, "px) and (max-width: ").concat(_break_points_default.a.xl - 1, "px)")).matches) {
        this.on('lg');
      }

      if (window.matchMedia("(min-width: ".concat(_break_points_default.a.xl, "px)")).matches) {
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


// EXTERNAL MODULE: ./src/js/components/Banner.scss
var components_Banner = __webpack_require__(11);

// CONCATENATED MODULE: ./src/js/components/Banner.js
function Banner_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Banner_typeof = function _typeof(obj) { return typeof obj; }; } else { Banner_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Banner_typeof(obj); }

function Banner_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Banner_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Banner_createClass(Constructor, protoProps, staticProps) { if (protoProps) Banner_defineProperties(Constructor.prototype, protoProps); if (staticProps) Banner_defineProperties(Constructor, staticProps); return Constructor; }

function Banner_possibleConstructorReturn(self, call) { if (call && (Banner_typeof(call) === "object" || typeof call === "function")) { return call; } return Banner_assertThisInitialized(self); }

function Banner_getPrototypeOf(o) { Banner_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Banner_getPrototypeOf(o); }

function Banner_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Banner_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Banner_setPrototypeOf(subClass, superClass); }

function Banner_setPrototypeOf(o, p) { Banner_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Banner_setPrototypeOf(o, p); }

function Banner_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Banner_Banner =
/*#__PURE__*/
function (_React$Component) {
  Banner_inherits(Banner, _React$Component);

  function Banner() {
    var _getPrototypeOf2;

    var _this;

    Banner_classCallCheck(this, Banner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Banner_possibleConstructorReturn(this, (_getPrototypeOf2 = Banner_getPrototypeOf(Banner)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Banner_defineProperty(Banner_assertThisInitialized(_this), "grid", void 0);

    Banner_defineProperty(Banner_assertThisInitialized(_this), "state", {
      backgroundImage: _this.props.xs
    });

    return _this;
  }

  Banner_createClass(Banner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          xs = _this$props.xs,
          sm = _this$props.sm,
          md = _this$props.md,
          lg = _this$props.lg,
          xl = _this$props.xl;
      this.grid = new Grid_Grid();
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
      var _this$props2 = this.props,
          titleContent = _this$props2.titleContent,
          short = _this$props2.short,
          overlap = _this$props2.overlap;
      var backgroundImage = this.state.backgroundImage;
      var style = {
        backgroundImage: "url(".concat(backgroundImage, ")")
      };
      return external_React_default.a.createElement("section", {
        className: external_classNames_default()('banner', {
          short: short,
          overlap: overlap
        }),
        style: !overlap ? style : undefined
      }, overlap && external_React_default.a.createElement("div", {
        className: 'overlap-banner',
        style: style
      }), external_React_default.a.createElement(Container_Container, {
        outerWrap: true
      }, external_React_default.a.createElement("div", {
        className: 'inner-banner'
      }, external_React_default.a.createElement("div", {
        className: 'banner-title'
      }, external_React_default.a.createElement("span", {
        className: 'inner-content',
        dangerouslySetInnerHTML: {
          __html: "<h2>".concat(titleContent, "</h2>")
        }
      })), this.props.children)));
    }
  }]);

  return Banner;
}(external_React_default.a.Component);

Banner_defineProperty(Banner_Banner, "defaultProps", {
  xs: themedir + '/img/banner.jpg',
  sm: themedir + '/img/banner.jpg',
  md: themedir + '/img/banner.jpg',
  lg: themedir + '/img/banner.jpg',
  xl: themedir + '/img/banner.jpg',
  titleContent: '',
  short: false
});

Banner_defineProperty(Banner_Banner, "propTypes", {
  xs: external_PropTypes_default.a.string,
  sm: external_PropTypes_default.a.string,
  md: external_PropTypes_default.a.string,
  lg: external_PropTypes_default.a.string,
  xl: external_PropTypes_default.a.string,
  backgroundImage: external_PropTypes_default.a.object,
  titleContent: external_PropTypes_default.a.string,
  short: external_PropTypes_default.a.bool
});


// EXTERNAL MODULE: ./src/js/components/CenterTile.scss
var components_CenterTile = __webpack_require__(12);

// CONCATENATED MODULE: ./src/js/components/CenterTile.js
function CenterTile_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CenterTile_typeof = function _typeof(obj) { return typeof obj; }; } else { CenterTile_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CenterTile_typeof(obj); }

function CenterTile_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CenterTile_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CenterTile_createClass(Constructor, protoProps, staticProps) { if (protoProps) CenterTile_defineProperties(Constructor.prototype, protoProps); if (staticProps) CenterTile_defineProperties(Constructor, staticProps); return Constructor; }

function CenterTile_possibleConstructorReturn(self, call) { if (call && (CenterTile_typeof(call) === "object" || typeof call === "function")) { return call; } return CenterTile_assertThisInitialized(self); }

function CenterTile_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CenterTile_getPrototypeOf(o) { CenterTile_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CenterTile_getPrototypeOf(o); }

function CenterTile_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CenterTile_setPrototypeOf(subClass, superClass); }

function CenterTile_setPrototypeOf(o, p) { CenterTile_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CenterTile_setPrototypeOf(o, p); }

function CenterTile_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var CenterTile_CenterTile =
/*#__PURE__*/
function (_React$Component) {
  CenterTile_inherits(CenterTile, _React$Component);

  function CenterTile() {
    CenterTile_classCallCheck(this, CenterTile);

    return CenterTile_possibleConstructorReturn(this, CenterTile_getPrototypeOf(CenterTile).apply(this, arguments));
  }

  CenterTile_createClass(CenterTile, [{
    key: "render",
    value: function render() {
      var content = this.props.content;
      return external_React_default.a.createElement("div", {
        className: 'center-tile-wrapper'
      }, external_React_default.a.createElement(Container_Container, {
        className: 'center-tile',
        outerWrap: true
      }, external_React_default.a.createElement("div", {
        className: 'content',
        dangerouslySetInnerHTML: {
          __html: content
        }
      })));
    }
  }]);

  return CenterTile;
}(external_React_default.a.Component);

CenterTile_defineProperty(CenterTile_CenterTile, "defaultProps", {
  content: "<p>Our team led by highly trained vascular and endovascular surgeons offers 20 years of experience, the latest techniques and state-of-the-art equipment.</p>"
});

CenterTile_defineProperty(CenterTile_CenterTile, "propTypes", {
  content: external_PropTypes_default.a.string
});


// CONCATENATED MODULE: ./src/js/components/Link.js
function Link_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Link_typeof = function _typeof(obj) { return typeof obj; }; } else { Link_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Link_typeof(obj); }

function Link_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Link_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Link_createClass(Constructor, protoProps, staticProps) { if (protoProps) Link_defineProperties(Constructor.prototype, protoProps); if (staticProps) Link_defineProperties(Constructor, staticProps); return Constructor; }

function Link_possibleConstructorReturn(self, call) { if (call && (Link_typeof(call) === "object" || typeof call === "function")) { return call; } return Link_assertThisInitialized(self); }

function Link_getPrototypeOf(o) { Link_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Link_getPrototypeOf(o); }

function Link_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Link_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Link_setPrototypeOf(subClass, superClass); }

function Link_setPrototypeOf(o, p) { Link_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Link_setPrototypeOf(o, p); }

function Link_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Link_Link =
/*#__PURE__*/
function (_React$Component) {
  Link_inherits(Link, _React$Component);

  function Link() {
    var _getPrototypeOf2;

    var _this;

    Link_classCallCheck(this, Link);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Link_possibleConstructorReturn(this, (_getPrototypeOf2 = Link_getPrototypeOf(Link)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Link_defineProperty(Link_assertThisInitialized(_this), "state", {
      parentItem: false,
      currentPage: undefined
    });

    return _this;
  }

  Link_createClass(Link, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          to = _this$props.to,
          children = _this$props.children,
          className = _this$props.className,
          onClick = _this$props.onClick;
      var parentItem = this.state.parentItem;
      if (!to) return false;
      var active = to === location.pathname || parentItem;
      return external_React_default.a.createElement(external_React_default.a.Fragment, null, external_React_default.a.createElement(external_ReactRouterDOM_["Link"], {
        className: external_classNames_default()(className, {
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
}(external_React_default.a.Component);

Link_defineProperty(Link_Link, "propTypes", {
  noParentMatch: external_PropTypes_["bool"]
});

/* harmony default export */ var components_Link = (Object(external_ReactRouterDOM_["withRouter"])(Store_withConsumer(Link_Link)));
// EXTERNAL MODULE: ./src/js/components/PanelTile.scss
var components_PanelTile = __webpack_require__(13);

// CONCATENATED MODULE: ./src/js/components/PanelTile.js
function PanelTile_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PanelTile_typeof = function _typeof(obj) { return typeof obj; }; } else { PanelTile_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PanelTile_typeof(obj); }

function PanelTile_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PanelTile_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PanelTile_createClass(Constructor, protoProps, staticProps) { if (protoProps) PanelTile_defineProperties(Constructor.prototype, protoProps); if (staticProps) PanelTile_defineProperties(Constructor, staticProps); return Constructor; }

function PanelTile_possibleConstructorReturn(self, call) { if (call && (PanelTile_typeof(call) === "object" || typeof call === "function")) { return call; } return PanelTile_assertThisInitialized(self); }

function PanelTile_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PanelTile_getPrototypeOf(o) { PanelTile_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PanelTile_getPrototypeOf(o); }

function PanelTile_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PanelTile_setPrototypeOf(subClass, superClass); }

function PanelTile_setPrototypeOf(o, p) { PanelTile_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PanelTile_setPrototypeOf(o, p); }

function PanelTile_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var PanelTile_PanelTile =
/*#__PURE__*/
function (_React$Component) {
  PanelTile_inherits(PanelTile, _React$Component);

  function PanelTile() {
    PanelTile_classCallCheck(this, PanelTile);

    return PanelTile_possibleConstructorReturn(this, PanelTile_getPrototypeOf(PanelTile).apply(this, arguments));
  }

  PanelTile_createClass(PanelTile, [{
    key: "render",
    value: function render() {
      var links = this.props.links;
      return external_React_default.a.createElement(Container_Container, {
        className: 'panel-tile',
        col: false
      }, external_React_default.a.createElement("ul", null, links.map(function (_ref) {
        var title = _ref.title,
            icon = _ref.icon,
            link = _ref.link;
        return external_React_default.a.createElement("li", {
          className: 'col-xs-12',
          key: link + title
        }, external_React_default.a.createElement(components_Link, {
          to: (link || '').replace(location.origin, ''),
          className: 'link'
        }, external_React_default.a.createElement("span", {
          className: 'image-wrap'
        }, external_React_default.a.createElement("span", {
          className: 'image'
        }, external_React_default.a.createElement("img", {
          src: icon ? icon.url : undefined
        }))), external_React_default.a.createElement("span", {
          className: 'title'
        }, title)));
      })));
    }
  }]);

  return PanelTile;
}(external_React_default.a.Component);

PanelTile_defineProperty(PanelTile_PanelTile, "defaultProps", {
  links: []
});

PanelTile_defineProperty(PanelTile_PanelTile, "propTypes", {
  links: external_PropTypes_default.a.arrayOf(external_PropTypes_default.a.object)
});


// EXTERNAL MODULE: ./src/js/components/ProfileTile.scss
var components_ProfileTile = __webpack_require__(14);

// CONCATENATED MODULE: ./src/js/components/ProfileTile.js
function ProfileTile_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ProfileTile_typeof = function _typeof(obj) { return typeof obj; }; } else { ProfileTile_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ProfileTile_typeof(obj); }

function ProfileTile_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProfileTile_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProfileTile_createClass(Constructor, protoProps, staticProps) { if (protoProps) ProfileTile_defineProperties(Constructor.prototype, protoProps); if (staticProps) ProfileTile_defineProperties(Constructor, staticProps); return Constructor; }

function ProfileTile_possibleConstructorReturn(self, call) { if (call && (ProfileTile_typeof(call) === "object" || typeof call === "function")) { return call; } return ProfileTile_assertThisInitialized(self); }

function ProfileTile_getPrototypeOf(o) { ProfileTile_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ProfileTile_getPrototypeOf(o); }

function ProfileTile_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ProfileTile_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ProfileTile_setPrototypeOf(subClass, superClass); }

function ProfileTile_setPrototypeOf(o, p) { ProfileTile_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ProfileTile_setPrototypeOf(o, p); }

function ProfileTile_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var once = true;

var ProfileTile_ProfileTile =
/*#__PURE__*/
function (_React$Component) {
  ProfileTile_inherits(ProfileTile, _React$Component);

  function ProfileTile() {
    var _getPrototypeOf2;

    var _this;

    ProfileTile_classCallCheck(this, ProfileTile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = ProfileTile_possibleConstructorReturn(this, (_getPrototypeOf2 = ProfileTile_getPrototypeOf(ProfileTile)).call.apply(_getPrototypeOf2, [this].concat(args)));

    ProfileTile_defineProperty(ProfileTile_assertThisInitialized(_this), "content", external_React_default.a.createRef());

    ProfileTile_defineProperty(ProfileTile_assertThisInitialized(_this), "img", external_React_default.a.createRef());

    ProfileTile_defineProperty(ProfileTile_assertThisInitialized(_this), "state", {
      className: ''
    });

    ProfileTile_defineProperty(ProfileTile_assertThisInitialized(_this), "resize", function () {
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
    });

    return _this;
  }

  ProfileTile_createClass(ProfileTile, [{
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
      var _this$props = this.props,
          profileImage = _this$props.profileImage,
          content = _this$props.content,
          title = _this$props.title;
      var className = this.state.className;
      return external_React_default.a.createElement("div", {
        className: external_classNames_default()('profile-padding-wrap', className)
      }, external_React_default.a.createElement("div", {
        className: 'profile-wrap'
      }, external_React_default.a.createElement("div", {
        className: 'profile-tile'
      }, external_React_default.a.createElement(Container_Container, null, external_React_default.a.createElement("div", {
        className: 'wrapper'
      }, external_React_default.a.createElement("div", {
        className: 'profile'
      }, external_React_default.a.createElement("img", {
        onLoad: this.resize,
        ref: this.img,
        className: 'image',
        src: profileImage
      })), external_React_default.a.createElement("div", {
        ref: this.content,
        className: 'content'
      }, external_React_default.a.createElement("h2", {
        className: "h4"
      }, title), external_React_default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: content
        }
      })))))), external_React_default.a.createElement("div", {
        className: 'padding'
      }));
    }
  }]);

  return ProfileTile;
}(external_React_default.a.Component);

ProfileTile_defineProperty(ProfileTile_ProfileTile, "defaultProps", {
  profileImage: themedir + '/img/dr-bullen.jpg',
  content: ""
});

ProfileTile_defineProperty(ProfileTile_ProfileTile, "propTypes", {
  title: external_PropTypes_default.a.string,
  profileImage: external_PropTypes_default.a.string,
  content: external_PropTypes_default.a.string
});


// EXTERNAL MODULE: ./src/js/components/Date.scss
var components_Date = __webpack_require__(15);

// CONCATENATED MODULE: ./src/js/components/Date.js
function Date_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Date_typeof = function _typeof(obj) { return typeof obj; }; } else { Date_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Date_typeof(obj); }

function Date_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Date_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Date_createClass(Constructor, protoProps, staticProps) { if (protoProps) Date_defineProperties(Constructor.prototype, protoProps); if (staticProps) Date_defineProperties(Constructor, staticProps); return Constructor; }

function Date_possibleConstructorReturn(self, call) { if (call && (Date_typeof(call) === "object" || typeof call === "function")) { return call; } return Date_assertThisInitialized(self); }

function Date_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Date_getPrototypeOf(o) { Date_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Date_getPrototypeOf(o); }

function Date_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Date_setPrototypeOf(subClass, superClass); }

function Date_setPrototypeOf(o, p) { Date_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Date_setPrototypeOf(o, p); }

function Date_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Date_Date =
/*#__PURE__*/
function (_React$Component) {
  Date_inherits(Date, _React$Component);

  function Date() {
    Date_classCallCheck(this, Date);

    return Date_possibleConstructorReturn(this, Date_getPrototypeOf(Date).apply(this, arguments));
  }

  Date_createClass(Date, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          day = _this$props.day,
          month = _this$props.month;
      return external_React_default.a.createElement("span", {
        className: 'date'
      }, external_React_default.a.createElement("span", {
        className: 'day'
      }, day), external_React_default.a.createElement("span", {
        className: 'month'
      }, month));
    }
  }]);

  return Date;
}(external_React_default.a.Component);

Date_defineProperty(Date_Date, "defaultProps", {
  day: '',
  month: ''
});

Date_defineProperty(Date_Date, "propTypes", {
  day: external_PropTypes_default.a.string,
  month: external_PropTypes_default.a.string
});


// CONCATENATED MODULE: ./src/js/util/stripHtmlTags.js
function stripHtmlTags(str) {
  if (!str) return '';else str = str.toString();
  return str.replace(/<[^>]*>/g, '');
}
// CONCATENATED MODULE: ./src/js/hoc/withNews.js
function withNews_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { withNews_typeof = function _typeof(obj) { return typeof obj; }; } else { withNews_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return withNews_typeof(obj); }

function withNews_extends() { withNews_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return withNews_extends.apply(this, arguments); }

function withNews_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function withNews_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function withNews_createClass(Constructor, protoProps, staticProps) { if (protoProps) withNews_defineProperties(Constructor.prototype, protoProps); if (staticProps) withNews_defineProperties(Constructor, staticProps); return Constructor; }

function withNews_possibleConstructorReturn(self, call) { if (call && (withNews_typeof(call) === "object" || typeof call === "function")) { return call; } return withNews_assertThisInitialized(self); }

function withNews_getPrototypeOf(o) { withNews_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return withNews_getPrototypeOf(o); }

function withNews_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function withNews_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) withNews_setPrototypeOf(subClass, superClass); }

function withNews_setPrototypeOf(o, p) { withNews_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return withNews_setPrototypeOf(o, p); }

function withNews_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var withNews_withNews = function withNews(Component) {
  var _temp;

  return Store_withConsumer((_temp =
  /*#__PURE__*/
  function (_React$Component) {
    withNews_inherits(_temp, _React$Component);

    function _temp() {
      var _getPrototypeOf2;

      var _this;

      withNews_classCallCheck(this, _temp);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = withNews_possibleConstructorReturn(this, (_getPrototypeOf2 = withNews_getPrototypeOf(_temp)).call.apply(_getPrototypeOf2, [this].concat(args)));

      withNews_defineProperty(withNews_assertThisInitialized(_this), "state", {
        news: []
      });

      return _this;
    }

    withNews_createClass(_temp, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var news = [];
        this.props.pages.forEach(function (page) {
          if (page.template === 'news-post.php') {
            news.push({
              title: page.title.rendered,
              link: page.link,
              date: page.acf.date,
              excerpt: stripHtmlTags().substring(0, 50)
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
        return external_React_default.a.createElement(Component, withNews_extends({}, this.props, {
          news: news
        }));
      }
    }]);

    return _temp;
  }(external_React_default.a.Component), _temp));
};

/* harmony default export */ var hoc_withNews = (withNews_withNews);
// EXTERNAL MODULE: ./src/js/components/CalendarTile.scss
var components_CalendarTile = __webpack_require__(16);

// CONCATENATED MODULE: ./src/js/components/CalendarTile.js
function CalendarTile_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CalendarTile_typeof = function _typeof(obj) { return typeof obj; }; } else { CalendarTile_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CalendarTile_typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function CalendarTile_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CalendarTile_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CalendarTile_createClass(Constructor, protoProps, staticProps) { if (protoProps) CalendarTile_defineProperties(Constructor.prototype, protoProps); if (staticProps) CalendarTile_defineProperties(Constructor, staticProps); return Constructor; }

function CalendarTile_possibleConstructorReturn(self, call) { if (call && (CalendarTile_typeof(call) === "object" || typeof call === "function")) { return call; } return CalendarTile_assertThisInitialized(self); }

function CalendarTile_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CalendarTile_getPrototypeOf(o) { CalendarTile_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CalendarTile_getPrototypeOf(o); }

function CalendarTile_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CalendarTile_setPrototypeOf(subClass, superClass); }

function CalendarTile_setPrototypeOf(o, p) { CalendarTile_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CalendarTile_setPrototypeOf(o, p); }

function CalendarTile_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var CalendarTile_CalendarTile =
/*#__PURE__*/
function (_React$Component) {
  CalendarTile_inherits(CalendarTile, _React$Component);

  function CalendarTile() {
    CalendarTile_classCallCheck(this, CalendarTile);

    return CalendarTile_possibleConstructorReturn(this, CalendarTile_getPrototypeOf(CalendarTile).apply(this, arguments));
  }

  CalendarTile_createClass(CalendarTile, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          news = _this$props.news,
          footerLink = _this$props.footerLink;

      var latest = _toConsumableArray(news);

      latest.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
      latest.length = 2;
      return external_React_default.a.createElement("div", {
        className: 'calendar-tile'
      }, external_React_default.a.createElement("h2", null, title), external_React_default.a.createElement("ul", {
        className: 'calendar'
      }, latest.map(function (_ref) {
        var title = _ref.title,
            date = _ref.date,
            link = _ref.link,
            excerpt = _ref.excerpt;
        var parsedDate = date.split(',');
        return external_React_default.a.createElement("li", {
          key: (title + date).replace(/ /gi, '-'),
          className: 'entry'
        }, external_React_default.a.createElement("div", null, external_React_default.a.createElement(components_Link, {
          to: link.replace(location.origin, ''),
          className: 'link'
        }, external_React_default.a.createElement(Date_Date, {
          day: parsedDate[2],
          month: parsedDate[1]
        }), external_React_default.a.createElement("div", null, external_React_default.a.createElement("p", {
          className: 'title'
        }, title), external_React_default.a.createElement("p", {
          className: 'excerpt'
        }, excerpt.trim(), "...")))));
      })), external_React_default.a.createElement("p", null, external_React_default.a.createElement(components_Link, {
        to: '/'
      }, footerLink)));
    }
  }]);

  return CalendarTile;
}(external_React_default.a.Component);

CalendarTile_defineProperty(CalendarTile_CalendarTile, "defaultProps", {
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
});

CalendarTile_defineProperty(CalendarTile_CalendarTile, "propTypes", {
  profileImage: external_PropTypes_["string"],
  content: external_PropTypes_["string"]
});

/* harmony default export */ var js_components_CalendarTile = (hoc_withNews(CalendarTile_CalendarTile));
// EXTERNAL MODULE: ./src/js/components/CaseStudyTile.scss
var components_CaseStudyTile = __webpack_require__(17);

// CONCATENATED MODULE: ./src/js/components/CaseStudyTile.js
function CaseStudyTile_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CaseStudyTile_typeof = function _typeof(obj) { return typeof obj; }; } else { CaseStudyTile_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CaseStudyTile_typeof(obj); }

function CaseStudyTile_toConsumableArray(arr) { return CaseStudyTile_arrayWithoutHoles(arr) || CaseStudyTile_iterableToArray(arr) || CaseStudyTile_nonIterableSpread(); }

function CaseStudyTile_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function CaseStudyTile_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function CaseStudyTile_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function CaseStudyTile_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CaseStudyTile_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CaseStudyTile_createClass(Constructor, protoProps, staticProps) { if (protoProps) CaseStudyTile_defineProperties(Constructor.prototype, protoProps); if (staticProps) CaseStudyTile_defineProperties(Constructor, staticProps); return Constructor; }

function CaseStudyTile_possibleConstructorReturn(self, call) { if (call && (CaseStudyTile_typeof(call) === "object" || typeof call === "function")) { return call; } return CaseStudyTile_assertThisInitialized(self); }

function CaseStudyTile_getPrototypeOf(o) { CaseStudyTile_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CaseStudyTile_getPrototypeOf(o); }

function CaseStudyTile_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CaseStudyTile_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CaseStudyTile_setPrototypeOf(subClass, superClass); }

function CaseStudyTile_setPrototypeOf(o, p) { CaseStudyTile_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CaseStudyTile_setPrototypeOf(o, p); }

function CaseStudyTile_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var CaseStudyTile_CaseStudyTile =
/*#__PURE__*/
function (_React$Component) {
  CaseStudyTile_inherits(CaseStudyTile, _React$Component);

  function CaseStudyTile() {
    var _getPrototypeOf2;

    var _this;

    CaseStudyTile_classCallCheck(this, CaseStudyTile);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = CaseStudyTile_possibleConstructorReturn(this, (_getPrototypeOf2 = CaseStudyTile_getPrototypeOf(CaseStudyTile)).call.apply(_getPrototypeOf2, [this].concat(args)));

    CaseStudyTile_defineProperty(CaseStudyTile_assertThisInitialized(_this), "state", {
      caseStudyPages: []
    });

    return _this;
  }

  CaseStudyTile_createClass(CaseStudyTile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          pages = _this$props.pages,
          caseStudies = _this$props.caseStudies;
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

      var max = CaseStudyTile_toConsumableArray(caseStudyPages);

      max.length = 2;
      return external_React_default.a.createElement("div", {
        className: 'case-study-tile'
      }, external_React_default.a.createElement("h2", {
        className: 'title'
      }, title), external_React_default.a.createElement("div", {
        className: 'case-studies'
      }, caseStudyPages.length > 0 && max.map(function (_ref, i) {
        var content = _ref.content,
            title = _ref.title,
            acf = _ref.acf,
            link = _ref.link;
        return external_React_default.a.createElement("article", {
          className: 'case-study',
          key: i
        }, external_React_default.a.createElement(components_Link, {
          to: link.replace(location.origin, '')
        }, acf.pageImage && external_React_default.a.createElement("img", {
          className: 'img',
          src: acf.pageImage.url
        }), external_React_default.a.createElement("h3", null, title.rendered), external_React_default.a.createElement("p", {
          dangerouslySetInnerHTML: {
            __html: stripHtmlTags(content.rendered ? content.rendered.substring(0, 100).trim() + '...' : '')
          }
        })));
      })));
    }
  }]);

  return CaseStudyTile;
}(external_React_default.a.Component);

CaseStudyTile_defineProperty(CaseStudyTile_CaseStudyTile, "defaultProps", {
  title: 'Case Studies',
  caseStudies: []
});

CaseStudyTile_defineProperty(CaseStudyTile_CaseStudyTile, "propTypes", {
  title: external_PropTypes_default.a.string,
  caseStudies: external_PropTypes_default.a.array
});

/* harmony default export */ var js_components_CaseStudyTile = (Store_withConsumer(CaseStudyTile_CaseStudyTile));
// CONCATENATED MODULE: ./src/js/hoc/withMap.js
function withMap_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { withMap_typeof = function _typeof(obj) { return typeof obj; }; } else { withMap_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return withMap_typeof(obj); }

function withMap_extends() { withMap_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return withMap_extends.apply(this, arguments); }

function withMap_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function withMap_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function withMap_createClass(Constructor, protoProps, staticProps) { if (protoProps) withMap_defineProperties(Constructor.prototype, protoProps); if (staticProps) withMap_defineProperties(Constructor, staticProps); return Constructor; }

function withMap_possibleConstructorReturn(self, call) { if (call && (withMap_typeof(call) === "object" || typeof call === "function")) { return call; } return withMap_assertThisInitialized(self); }

function withMap_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function withMap_getPrototypeOf(o) { withMap_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return withMap_getPrototypeOf(o); }

function withMap_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) withMap_setPrototypeOf(subClass, superClass); }

function withMap_setPrototypeOf(o, p) { withMap_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return withMap_setPrototypeOf(o, p); }




var withMap_withMap = function withMap(Component) {
  return Store_withConsumer(
  /*#__PURE__*/
  function (_React$Component) {
    withMap_inherits(_class, _React$Component);

    function _class() {
      withMap_classCallCheck(this, _class);

      return withMap_possibleConstructorReturn(this, withMap_getPrototypeOf(_class).apply(this, arguments));
    }

    withMap_createClass(_class, [{
      key: "render",
      value: function render() {
        var globalOptions = this.props.globalOptions;
        if (!globalOptions) return false;
        return external_React_default.a.createElement(Component, withMap_extends({}, this.props, {
          map: this.props.globalOptions.googleMapsAddress,
          map2: this.props.globalOptions.googleMapsAddress2
        }));
      }
    }]);

    return _class;
  }(external_React_default.a.Component));
};

/* harmony default export */ var hoc_withMap = (withMap_withMap);
// EXTERNAL MODULE: ./src/js/components/Map.scss
var components_Map = __webpack_require__(18);

// CONCATENATED MODULE: ./src/js/components/Map.js
function Map_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Map_typeof = function _typeof(obj) { return typeof obj; }; } else { Map_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Map_typeof(obj); }

function Map_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Map_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Map_createClass(Constructor, protoProps, staticProps) { if (protoProps) Map_defineProperties(Constructor.prototype, protoProps); if (staticProps) Map_defineProperties(Constructor, staticProps); return Constructor; }

function Map_possibleConstructorReturn(self, call) { if (call && (Map_typeof(call) === "object" || typeof call === "function")) { return call; } return Map_assertThisInitialized(self); }

function Map_getPrototypeOf(o) { Map_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Map_getPrototypeOf(o); }

function Map_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Map_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Map_setPrototypeOf(subClass, superClass); }

function Map_setPrototypeOf(o, p) { Map_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Map_setPrototypeOf(o, p); }

function Map_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Map_Map =
/*#__PURE__*/
function (_React$Component) {
  Map_inherits(Map, _React$Component);

  function Map() {
    var _getPrototypeOf2;

    var _this;

    Map_classCallCheck(this, Map);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Map_possibleConstructorReturn(this, (_getPrototypeOf2 = Map_getPrototypeOf(Map)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Map_defineProperty(Map_assertThisInitialized(_this), "grid", void 0);

    Map_defineProperty(Map_assertThisInitialized(_this), "map", void 0);

    Map_defineProperty(Map_assertThisInitialized(_this), "map2", void 0);

    Map_defineProperty(Map_assertThisInitialized(_this), "mapElement", external_React_default.a.createRef());

    Map_defineProperty(Map_assertThisInitialized(_this), "mapElement2", external_React_default.a.createRef());

    Map_defineProperty(Map_assertThisInitialized(_this), "state", {
      size: _this.props.size
    });

    Map_defineProperty(Map_assertThisInitialized(_this), "largeMap", function () {
      _this.setState({
        style: {
          width: '100%',
          height: 400
        },
        zoom: 15
      });

      google.maps.event.trigger(_this.map, 'resize');
      google.maps.event.trigger(_this.map2, 'resize');
    });

    return _this;
  }

  Map_createClass(Map, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          zoom = _this$props.zoom,
          style = _this$props.style,
          map = _this$props.map,
          map2 = _this$props.map2;
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
      this.grid = new Grid_Grid();
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
      return external_React_default.a.createElement("div", {
        className: external_classNames_default()('map', className)
      }, external_React_default.a.createElement("div", {
        className: 'block-interaction'
      }), external_React_default.a.createElement("div", {
        className: 'map-element',
        style: style,
        ref: this.mapElement
      }), external_React_default.a.createElement("div", {
        className: 'map-element',
        style: style,
        ref: this.mapElement2
      }));
    }
  }]);

  return Map;
}(external_React_default.a.Component);

Map_defineProperty(Map_Map, "defaultProps", {
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
});

Map_defineProperty(Map_Map, "propTypes", {
  coords: external_PropTypes_default.a.object,
  key: external_PropTypes_default.a.string,
  zoom: external_PropTypes_default.a.number
});

/* harmony default export */ var js_components_Map = (hoc_withMap(Map_Map));
// EXTERNAL MODULE: ./src/js/components/ListTile.scss
var components_ListTile = __webpack_require__(19);

// CONCATENATED MODULE: ./src/js/components/ListTile.js
function ListTile_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ListTile_typeof = function _typeof(obj) { return typeof obj; }; } else { ListTile_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ListTile_typeof(obj); }

function ListTile_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ListTile_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ListTile_createClass(Constructor, protoProps, staticProps) { if (protoProps) ListTile_defineProperties(Constructor.prototype, protoProps); if (staticProps) ListTile_defineProperties(Constructor, staticProps); return Constructor; }

function ListTile_possibleConstructorReturn(self, call) { if (call && (ListTile_typeof(call) === "object" || typeof call === "function")) { return call; } return ListTile_assertThisInitialized(self); }

function ListTile_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ListTile_getPrototypeOf(o) { ListTile_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ListTile_getPrototypeOf(o); }

function ListTile_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ListTile_setPrototypeOf(subClass, superClass); }

function ListTile_setPrototypeOf(o, p) { ListTile_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ListTile_setPrototypeOf(o, p); }

function ListTile_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var ListTile_ListTile =
/*#__PURE__*/
function (_React$Component) {
  ListTile_inherits(ListTile, _React$Component);

  function ListTile() {
    ListTile_classCallCheck(this, ListTile);

    return ListTile_possibleConstructorReturn(this, ListTile_getPrototypeOf(ListTile).apply(this, arguments));
  }

  ListTile_createClass(ListTile, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          items = _this$props.items,
          title = _this$props.title,
          className = _this$props.className;
      return external_React_default.a.createElement("div", {
        className: external_classNames_default()('list-tile', className)
      }, external_React_default.a.createElement(Container_Container, null, external_React_default.a.createElement("h2", null, title), external_React_default.a.createElement("ul", null, items.map(function (item, i) {
        return external_React_default.a.createElement("li", {
          key: i
        }, external_React_default.a.createElement("a", {
          href: item.link.url,
          target: item.link.target
        }, item.link.title));
      }))));
    }
  }]);

  return ListTile;
}(external_React_default.a.Component);

ListTile_defineProperty(ListTile_ListTile, "defaultProps", {
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
});

ListTile_defineProperty(ListTile_ListTile, "propTypes", {
  title: external_PropTypes_default.a.string,
  items: external_PropTypes_default.a.array
});


// EXTERNAL MODULE: ./src/js/components/grid/HalfContainer.scss
var grid_HalfContainer = __webpack_require__(20);

// CONCATENATED MODULE: ./src/js/components/grid/HalfContainer.js
function HalfContainer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { HalfContainer_typeof = function _typeof(obj) { return typeof obj; }; } else { HalfContainer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return HalfContainer_typeof(obj); }

function HalfContainer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function HalfContainer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function HalfContainer_createClass(Constructor, protoProps, staticProps) { if (protoProps) HalfContainer_defineProperties(Constructor.prototype, protoProps); if (staticProps) HalfContainer_defineProperties(Constructor, staticProps); return Constructor; }

function HalfContainer_possibleConstructorReturn(self, call) { if (call && (HalfContainer_typeof(call) === "object" || typeof call === "function")) { return call; } return HalfContainer_assertThisInitialized(self); }

function HalfContainer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function HalfContainer_getPrototypeOf(o) { HalfContainer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return HalfContainer_getPrototypeOf(o); }

function HalfContainer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) HalfContainer_setPrototypeOf(subClass, superClass); }

function HalfContainer_setPrototypeOf(o, p) { HalfContainer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return HalfContainer_setPrototypeOf(o, p); }

function HalfContainer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var HalfContainer_HalfContainer =
/*#__PURE__*/
function (_React$Component) {
  HalfContainer_inherits(HalfContainer, _React$Component);

  function HalfContainer() {
    HalfContainer_classCallCheck(this, HalfContainer);

    return HalfContainer_possibleConstructorReturn(this, HalfContainer_getPrototypeOf(HalfContainer).apply(this, arguments));
  }

  HalfContainer_createClass(HalfContainer, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return external_React_default.a.createElement(Container_Container, {
        className: 'half-container',
        outerWrap: true
      }, external_React_default.a.createElement("div", {
        className: 'half-container-row',
        style: {
          display: 'flex'
        }
      }, external_React_default.a.createElement("div", {
        className: 'section'
      }, children[0]), external_React_default.a.createElement("div", {
        className: 'section'
      }, children[1])));
    }
  }]);

  return HalfContainer;
}(external_React_default.a.Component);

HalfContainer_defineProperty(HalfContainer_HalfContainer, "defaultProps", {
  sizes: {
    xs: 12,
    sm: 6,
    md: 6,
    lg: 6,
    xl: 6
  }
});

HalfContainer_defineProperty(HalfContainer_HalfContainer, "propTypes", {
  sizes: external_PropTypes_default.a.object,
  className: external_PropTypes_default.a.string
});


// EXTERNAL MODULE: ./src/js/pages/Home.scss
var pages_Home = __webpack_require__(21);

// CONCATENATED MODULE: ./src/js/pages/Home.js
function Home_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Home_typeof = function _typeof(obj) { return typeof obj; }; } else { Home_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Home_typeof(obj); }

function Home_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Home_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Home_createClass(Constructor, protoProps, staticProps) { if (protoProps) Home_defineProperties(Constructor.prototype, protoProps); if (staticProps) Home_defineProperties(Constructor, staticProps); return Constructor; }

function Home_possibleConstructorReturn(self, call) { if (call && (Home_typeof(call) === "object" || typeof call === "function")) { return call; } return Home_assertThisInitialized(self); }

function Home_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Home_getPrototypeOf(o) { Home_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Home_getPrototypeOf(o); }

function Home_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Home_setPrototypeOf(subClass, superClass); }

function Home_setPrototypeOf(o, p) { Home_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Home_setPrototypeOf(o, p); }

function Home_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















var Home_Home =
/*#__PURE__*/
function (_React$Component) {
  Home_inherits(Home, _React$Component);

  function Home() {
    Home_classCallCheck(this, Home);

    return Home_possibleConstructorReturn(this, Home_getPrototypeOf(Home).apply(this, arguments));
  }

  Home_createClass(Home, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          tagLine = _this$props.tagLine,
          boxLinks = _this$props.boxLinks,
          profileContent = _this$props.profileContent,
          profileImage = _this$props.profileImage,
          profileTitle = _this$props.profileTitle,
          informationBoxTitle = _this$props.informationBoxTitle,
          informationBoxLink = _this$props.informationBoxLink,
          caseStudies = _this$props.caseStudies,
          caseStudiesTitle = _this$props.caseStudiesTitle,
          _this$props$mobileBan = _this$props.mobileBannerImage,
          mobileBannerImage = _this$props$mobileBan === void 0 ? {} : _this$props$mobileBan,
          _this$props$desktopBa = _this$props.desktopBannerImage,
          desktopBannerImage = _this$props$desktopBa === void 0 ? {} : _this$props$desktopBa,
          bannerText = _this$props.bannerText;
      return external_React_default.a.createElement(external_React_default.a.Fragment, null, external_React_default.a.createElement(Banner_Banner, {
        xs: mobileBannerImage.url,
        sm: mobileBannerImage.url,
        md: desktopBannerImage.url,
        lg: desktopBannerImage.url,
        xl: desktopBannerImage.url,
        titleContent: bannerText
      }, external_React_default.a.createElement("div", {
        className: 'list-tile-wrapper'
      }, external_React_default.a.createElement(ListTile_ListTile, {
        className: 'banner-links',
        title: informationBoxTitle,
        items: informationBoxLink
      }))), external_React_default.a.createElement("main", {
        className: 'home'
      }, external_React_default.a.createElement(CenterTile_CenterTile, {
        content: tagLine
      }), external_React_default.a.createElement(PanelTile_PanelTile, {
        links: boxLinks
      }), profileImage && external_React_default.a.createElement(ProfileTile_ProfileTile, {
        content: profileContent,
        profileImage: profileImage.url,
        title: profileTitle
      }), external_React_default.a.createElement(HalfContainer_HalfContainer, null, external_React_default.a.createElement(js_components_CalendarTile, null), external_React_default.a.createElement(js_components_CaseStudyTile, {
        caseStudies: caseStudies,
        title: caseStudiesTitle
      })), external_React_default.a.createElement(js_components_Map, null)));
    }
  }]);

  return Home;
}(external_React_default.a.Component);

Home_defineProperty(Home_Home, "propTypes", {
  tagLine: external_PropTypes_default.a.string,
  boxLinks: external_PropTypes_default.a.array,
  profileContent: external_PropTypes_default.a.string,
  profileImage: external_PropTypes_default.a.object,
  profileTitle: external_PropTypes_default.a.string,
  informationBoxTitle: external_PropTypes_default.a.string,
  informationBoxLink: external_PropTypes_default.a.array
});

/* harmony default export */ var js_pages_Home = (Store_withConsumer(Home_Home));
// EXTERNAL MODULE: ./src/js/pages/Page.scss
var pages_Page = __webpack_require__(22);

// CONCATENATED MODULE: ./src/js/components/icon/ChevronDown.js
function ChevronDown_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ChevronDown_typeof = function _typeof(obj) { return typeof obj; }; } else { ChevronDown_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ChevronDown_typeof(obj); }

function ChevronDown_extends() { ChevronDown_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return ChevronDown_extends.apply(this, arguments); }

function ChevronDown_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ChevronDown_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ChevronDown_createClass(Constructor, protoProps, staticProps) { if (protoProps) ChevronDown_defineProperties(Constructor.prototype, protoProps); if (staticProps) ChevronDown_defineProperties(Constructor, staticProps); return Constructor; }

function ChevronDown_possibleConstructorReturn(self, call) { if (call && (ChevronDown_typeof(call) === "object" || typeof call === "function")) { return call; } return ChevronDown_assertThisInitialized(self); }

function ChevronDown_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ChevronDown_getPrototypeOf(o) { ChevronDown_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ChevronDown_getPrototypeOf(o); }

function ChevronDown_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ChevronDown_setPrototypeOf(subClass, superClass); }

function ChevronDown_setPrototypeOf(o, p) { ChevronDown_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ChevronDown_setPrototypeOf(o, p); }


var ChevronDown_ChevronDown =
/*#__PURE__*/
function (_React$Component) {
  ChevronDown_inherits(ChevronDown, _React$Component);

  function ChevronDown() {
    ChevronDown_classCallCheck(this, ChevronDown);

    return ChevronDown_possibleConstructorReturn(this, ChevronDown_getPrototypeOf(ChevronDown).apply(this, arguments));
  }

  ChevronDown_createClass(ChevronDown, [{
    key: "render",
    value: function render() {
      return external_React_default.a.createElement("svg", ChevronDown_extends({}, this.props, {
        viewBox: "0 0 13 8"
      }), external_React_default.a.createElement("path", {
        fill: "none",
        fillRule: "evenodd",
        stroke: "currentColor",
        strokeWidth: "2",
        d: "M1 1.22l5.371 5.37L11.962 1"
      }));
    }
  }]);

  return ChevronDown;
}(external_React_default.a.Component);
// EXTERNAL MODULE: ./src/js/components/SideMenu.scss
var components_SideMenu = __webpack_require__(23);

// CONCATENATED MODULE: ./src/js/components/SideMenu.js
function SideMenu_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SideMenu_typeof = function _typeof(obj) { return typeof obj; }; } else { SideMenu_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SideMenu_typeof(obj); }

function SideMenu_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SideMenu_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SideMenu_createClass(Constructor, protoProps, staticProps) { if (protoProps) SideMenu_defineProperties(Constructor.prototype, protoProps); if (staticProps) SideMenu_defineProperties(Constructor, staticProps); return Constructor; }

function SideMenu_possibleConstructorReturn(self, call) { if (call && (SideMenu_typeof(call) === "object" || typeof call === "function")) { return call; } return SideMenu_assertThisInitialized(self); }

function SideMenu_getPrototypeOf(o) { SideMenu_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SideMenu_getPrototypeOf(o); }

function SideMenu_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SideMenu_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SideMenu_setPrototypeOf(subClass, superClass); }

function SideMenu_setPrototypeOf(o, p) { SideMenu_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SideMenu_setPrototypeOf(o, p); }

function SideMenu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var SideMenu_sizes = {
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

var SideMenu_SideMenu =
/*#__PURE__*/
function (_React$Component) {
  SideMenu_inherits(SideMenu, _React$Component);

  function SideMenu() {
    var _getPrototypeOf2;

    var _this;

    SideMenu_classCallCheck(this, SideMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = SideMenu_possibleConstructorReturn(this, (_getPrototypeOf2 = SideMenu_getPrototypeOf(SideMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    SideMenu_defineProperty(SideMenu_assertThisInitialized(_this), "state", {
      open: false,
      menu: {}
    });

    SideMenu_defineProperty(SideMenu_assertThisInitialized(_this), "onClick", function (e) {
      e.preventDefault();

      _this.setState(function (_ref) {
        var open = _ref.open;
        return {
          open: !open
        };
      });
    });

    return _this;
  }

  SideMenu_createClass(SideMenu, [{
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
      var leftClasses = Object.keys(SideMenu_sizes).map(function (size) {
        return "col-".concat(size, "-").concat(SideMenu_sizes[size].left);
      });
      var _this$state = this.state,
          menu = _this$state.menu,
          open = _this$state.open;
      if (Object.keys(menu).length === 0) return false;
      return external_React_default.a.createElement("div", {
        className: external_classNames_default()(leftClasses, 'navigation')
      }, external_React_default.a.createElement("nav", {
        className: 'side-menu'
      }, external_React_default.a.createElement("button", {
        className: 'title-wrap',
        onClick: this.onClick
      }, menu.url !== 'http://undefined' && external_React_default.a.createElement(components_Link, {
        noParentMatch: true,
        to: menu.url.replace(location.origin, '')
      }, external_React_default.a.createElement("h2", {
        className: 'title'
      }, menu.title)), menu.url === 'http://undefined' && external_React_default.a.createElement("h2", {
        className: 'title title--no-link'
      }, menu.title), external_React_default.a.createElement("div", {
        className: 'icon-wrap'
      }, external_React_default.a.createElement(ChevronDown_ChevronDown, {
        className: 'down-icon'
      }))), external_React_default.a.createElement("ul", {
        className: external_classNames_default()('nav-wrapper', {
          open: open
        })
      }, this.renderMenu(menu.children))));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu(navItems) {
      var _this2 = this;

      return navItems.map(function (_ref2) {
        var url = _ref2.url,
            title = _ref2.title,
            id = _ref2.ID,
            children = _ref2.children;
        return external_React_default.a.createElement("li", {
          key: id
        }, external_React_default.a.createElement(components_Link, {
          to: url.replace(location.origin, '') || '/'
        }, external_React_default.a.createElement("span", null, title)), children && external_React_default.a.createElement("ul", null, " ", _this2.renderMenu(children), " "));
      });
    }
  }]);

  return SideMenu;
}(external_React_default.a.Component);

/* harmony default export */ var js_components_SideMenu = (Store_withConsumer(SideMenu_SideMenu));
// CONCATENATED MODULE: ./src/js/pages/Page.js
function Page_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Page_typeof = function _typeof(obj) { return typeof obj; }; } else { Page_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Page_typeof(obj); }

function Page_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Page_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Page_createClass(Constructor, protoProps, staticProps) { if (protoProps) Page_defineProperties(Constructor.prototype, protoProps); if (staticProps) Page_defineProperties(Constructor, staticProps); return Constructor; }

function Page_possibleConstructorReturn(self, call) { if (call && (Page_typeof(call) === "object" || typeof call === "function")) { return call; } return Page_assertThisInitialized(self); }

function Page_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Page_getPrototypeOf(o) { Page_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Page_getPrototypeOf(o); }

function Page_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Page_setPrototypeOf(subClass, superClass); }

function Page_setPrototypeOf(o, p) { Page_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Page_setPrototypeOf(o, p); }

function Page_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Page_sizes = {
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

var Page_Page =
/*#__PURE__*/
function (_React$PureComponent) {
  Page_inherits(Page, _React$PureComponent);

  function Page() {
    Page_classCallCheck(this, Page);

    return Page_possibleConstructorReturn(this, Page_getPrototypeOf(Page).apply(this, arguments));
  }

  Page_createClass(Page, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          content = _this$props.content,
          _this$props$desktopBa = _this$props.desktopBanner,
          desktopBanner = _this$props$desktopBa === void 0 ? {} : _this$props$desktopBa,
          _this$props$mobileBan = _this$props.mobileBanner,
          mobileBanner = _this$props$mobileBan === void 0 ? {} : _this$props$mobileBan;
      var rightClasses = Object.keys(Page_sizes).map(function (size) {
        return "col-".concat(size, "-").concat(Page_sizes[size].right);
      });
      return external_React_default.a.createElement(external_React_default.a.Fragment, null, external_React_default.a.createElement(Banner_Banner, {
        xs: mobileBanner.url,
        sm: mobileBanner.url,
        md: desktopBanner.url,
        lg: desktopBanner.url,
        xl: desktopBanner.url,
        short: true
      }), external_React_default.a.createElement("main", {
        className: 'page'
      }, external_React_default.a.createElement(Container_Container, {
        outerWrap: true
      }, external_React_default.a.createElement("div", {
        className: 'container-fluid page-content'
      }, external_React_default.a.createElement("div", {
        className: 'row'
      }, external_React_default.a.createElement(js_components_SideMenu, {
        title: title.rendered
      }), external_React_default.a.createElement("div", {
        className: external_classNames_default()(rightClasses, 'content')
      }, external_React_default.a.createElement("h2", {
        className: 'page-title'
      }, external_React_default.a.createElement("span", null, title.rendered)), external_React_default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: content.rendered
        }
      })))))));
    }
  }]);

  return Page;
}(external_React_default.a.PureComponent);

Page_defineProperty(Page_Page, "defaultProps", {
  title: {
    rendered: ''
  },
  content: {
    rendered: ''
  }
});

Page_defineProperty(Page_Page, "propTypes", {
  title: external_PropTypes_default.a.object,
  content: external_PropTypes_default.a.object
});


// EXTERNAL MODULE: ./src/js/components/Accordion.scss
var components_Accordion = __webpack_require__(24);

// CONCATENATED MODULE: ./src/js/components/Accordion.js
function Accordion_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Accordion_typeof = function _typeof(obj) { return typeof obj; }; } else { Accordion_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Accordion_typeof(obj); }

function Accordion_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Accordion_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Accordion_createClass(Constructor, protoProps, staticProps) { if (protoProps) Accordion_defineProperties(Constructor.prototype, protoProps); if (staticProps) Accordion_defineProperties(Constructor, staticProps); return Constructor; }

function Accordion_possibleConstructorReturn(self, call) { if (call && (Accordion_typeof(call) === "object" || typeof call === "function")) { return call; } return Accordion_assertThisInitialized(self); }

function Accordion_getPrototypeOf(o) { Accordion_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Accordion_getPrototypeOf(o); }

function Accordion_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Accordion_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Accordion_setPrototypeOf(subClass, superClass); }

function Accordion_setPrototypeOf(o, p) { Accordion_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Accordion_setPrototypeOf(o, p); }

function Accordion_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Accordion_Accordion =
/*#__PURE__*/
function (_React$Component) {
  Accordion_inherits(Accordion, _React$Component);

  function Accordion(props) {
    var _getPrototypeOf2;

    var _this;

    Accordion_classCallCheck(this, Accordion);

    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    _this = Accordion_possibleConstructorReturn(this, (_getPrototypeOf2 = Accordion_getPrototypeOf(Accordion)).call.apply(_getPrototypeOf2, [this, props].concat(rest)));

    Accordion_defineProperty(Accordion_assertThisInitialized(_this), "state", {
      open: false
    });

    Accordion_defineProperty(Accordion_assertThisInitialized(_this), "onClick", function () {
      _this.setState(function (prevState) {
        return {
          open: !prevState.open
        };
      });
    });

    _this.state = {
      open: props.open
    };
    return _this;
  }

  Accordion_createClass(Accordion, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          content = _this$props.content,
          title = _this$props.title;
      var open = this.state.open;
      return external_React_default.a.createElement("div", {
        className: external_classNames_default()('accordion', {
          open: open
        })
      }, external_React_default.a.createElement(Container_Container, {
        outerWrap: true
      }, external_React_default.a.createElement("button", {
        className: 'title',
        type: 'button',
        onClick: this.onClick
      }, title), external_React_default.a.createElement("div", {
        className: 'content',
        dangerouslySetInnerHTML: {
          __html: content
        }
      })));
    }
  }]);

  return Accordion;
}(external_React_default.a.Component);

Accordion_defineProperty(Accordion_Accordion, "defaultProps", {
  title: 'Frequently Asked Question',
  open: false,
  content: "<p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum tincidunt dui, eu venenatis urna placerat \n            sed. Etiam iaculis nisl vel sapien consectetur lobortis. Quisque eget libero erat. Cras eu nibh mollis augue finibus\n             efficitur. Aliquam efficitur non leo eu mattis. Pellentesque malesuada turpis hendrerit turpis porta, id congue ex \n             finibus.\n            </p>\n            <p>\n            Cras ut bibendum augue, sit amet scelerisque diam. Aliquam eget arcu orci. Morbi ut urna posuere, gravida nulla eget\n            , faucibus justo. Duis vitae viverra nulla. Suspendisse porta massa velit, ac ornare ex suscipit in. Donec lacinia \n            nisl et maximus mattis. Praesent dapibus leo diam, vel faucibus nunc maximus et. Duis placerat\n            </p>"
});

Accordion_defineProperty(Accordion_Accordion, "propTypes", {
  title: external_PropTypes_default.a.string,
  content: external_PropTypes_default.a.string,
  open: external_PropTypes_default.a.bool
});


// EXTERNAL MODULE: ./src/js/pages/Faq.scss
var pages_Faq = __webpack_require__(25);

// CONCATENATED MODULE: ./src/js/pages/Faq.js
function Faq_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Faq_typeof = function _typeof(obj) { return typeof obj; }; } else { Faq_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Faq_typeof(obj); }

function Faq_extends() { Faq_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Faq_extends.apply(this, arguments); }

function Faq_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Faq_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Faq_createClass(Constructor, protoProps, staticProps) { if (protoProps) Faq_defineProperties(Constructor.prototype, protoProps); if (staticProps) Faq_defineProperties(Constructor, staticProps); return Constructor; }

function Faq_possibleConstructorReturn(self, call) { if (call && (Faq_typeof(call) === "object" || typeof call === "function")) { return call; } return Faq_assertThisInitialized(self); }

function Faq_getPrototypeOf(o) { Faq_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Faq_getPrototypeOf(o); }

function Faq_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Faq_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Faq_setPrototypeOf(subClass, superClass); }

function Faq_setPrototypeOf(o, p) { Faq_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Faq_setPrototypeOf(o, p); }

function Faq_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Faq_Faq =
/*#__PURE__*/
function (_React$Component) {
  Faq_inherits(Faq, _React$Component);

  function Faq() {
    var _getPrototypeOf2;

    var _this;

    Faq_classCallCheck(this, Faq);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Faq_possibleConstructorReturn(this, (_getPrototypeOf2 = Faq_getPrototypeOf(Faq)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Faq_defineProperty(Faq_assertThisInitialized(_this), "state", {
      page: {
        title: {
          rendered: ''
        }
      }
    });

    return _this;
  }

  Faq_createClass(Faq, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          faqs = _this$props.faqs,
          _this$props$mobileBan = _this$props.mobileBanner,
          mobileBanner = _this$props$mobileBan === void 0 ? {} : _this$props$mobileBan,
          _this$props$desktopBa = _this$props.desktopBanner,
          desktopBanner = _this$props$desktopBa === void 0 ? {} : _this$props$desktopBa;
      return external_React_default.a.createElement(external_React_default.a.Fragment, null, external_React_default.a.createElement(Banner_Banner, {
        xs: mobileBanner.url,
        sm: mobileBanner.url,
        md: desktopBanner.url,
        lg: desktopBanner.url,
        xl: desktopBanner.url,
        short: true,
        titleContent: title.rendered
      }), external_React_default.a.createElement("main", {
        className: 'faq'
      }, faqs.map(function (faq, i) {
        return external_React_default.a.createElement(Accordion_Accordion, Faq_extends({
          open: i === 0
        }, faq, {
          key: i
        }));
      })));
    }
  }]);

  return Faq;
}(external_React_default.a.Component);

Faq_defineProperty(Faq_Faq, "defaultProps", {
  faqs: []
});

Faq_defineProperty(Faq_Faq, "propTypes", {
  faqs: external_PropTypes_default.a.array
});


// EXTERNAL MODULE: ./src/js/pages/News.scss
var pages_News = __webpack_require__(26);

// CONCATENATED MODULE: ./src/js/pages/News.js
function News_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { News_typeof = function _typeof(obj) { return typeof obj; }; } else { News_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return News_typeof(obj); }

function News_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function News_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function News_createClass(Constructor, protoProps, staticProps) { if (protoProps) News_defineProperties(Constructor.prototype, protoProps); if (staticProps) News_defineProperties(Constructor, staticProps); return Constructor; }

function News_possibleConstructorReturn(self, call) { if (call && (News_typeof(call) === "object" || typeof call === "function")) { return call; } return News_assertThisInitialized(self); }

function News_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function News_getPrototypeOf(o) { News_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return News_getPrototypeOf(o); }

function News_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) News_setPrototypeOf(subClass, superClass); }

function News_setPrototypeOf(o, p) { News_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return News_setPrototypeOf(o, p); }









var News_News =
/*#__PURE__*/
function (_React$Component) {
  News_inherits(News, _React$Component);

  function News() {
    News_classCallCheck(this, News);

    return News_possibleConstructorReturn(this, News_getPrototypeOf(News).apply(this, arguments));
  }

  News_createClass(News, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          news = _this$props.news,
          _this$props$mobileBan = _this$props.mobileBanner,
          mobileBanner = _this$props$mobileBan === void 0 ? {} : _this$props$mobileBan,
          _this$props$desktopBa = _this$props.desktopBanner,
          desktopBanner = _this$props$desktopBa === void 0 ? {} : _this$props$desktopBa,
          noNewsContent = _this$props.noNewsContent;
      var hasNews = news.length === 0;
      return external_React_default.a.createElement(external_React_default.a.Fragment, null, external_React_default.a.createElement(Banner_Banner, {
        xs: mobileBanner.url,
        sm: mobileBanner.url,
        md: desktopBanner.url,
        lg: desktopBanner.url,
        xl: desktopBanner.url,
        overlap: !hasNews,
        titleContent: title.rendered
      }), external_React_default.a.createElement(Container_Container, {
        className: 'news',
        outerWrap: true
      }, news.map(function (_ref, i) {
        var title = _ref.title,
            date = _ref.date,
            link = _ref.link;
        var parsedDate = date.split(',');
        return external_React_default.a.createElement(external_ReactRouterDOM_["NavLink"], {
          key: i,
          to: link.replace(location.origin, ''),
          className: 'news-row'
        }, external_React_default.a.createElement(Date_Date, {
          day: parsedDate[2],
          month: parsedDate[1]
        }), external_React_default.a.createElement("div", {
          className: 'title'
        }, title));
      }), hasNews && external_React_default.a.createElement("div", {
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
}(external_React_default.a.Component);

/* harmony default export */ var js_pages_News = (hoc_withNews(News_News));
// EXTERNAL MODULE: ./src/js/components/inputs/TypedInput.scss
var inputs_TypedInput = __webpack_require__(27);

// CONCATENATED MODULE: ./src/js/components/inputs/TypedInput.js
function TypedInput_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { TypedInput_typeof = function _typeof(obj) { return typeof obj; }; } else { TypedInput_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return TypedInput_typeof(obj); }

function TypedInput_extends() { TypedInput_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TypedInput_extends.apply(this, arguments); }

function TypedInput_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TypedInput_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function TypedInput_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function TypedInput_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TypedInput_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TypedInput_createClass(Constructor, protoProps, staticProps) { if (protoProps) TypedInput_defineProperties(Constructor.prototype, protoProps); if (staticProps) TypedInput_defineProperties(Constructor, staticProps); return Constructor; }

function TypedInput_possibleConstructorReturn(self, call) { if (call && (TypedInput_typeof(call) === "object" || typeof call === "function")) { return call; } return TypedInput_assertThisInitialized(self); }

function TypedInput_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function TypedInput_getPrototypeOf(o) { TypedInput_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return TypedInput_getPrototypeOf(o); }

function TypedInput_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) TypedInput_setPrototypeOf(subClass, superClass); }

function TypedInput_setPrototypeOf(o, p) { TypedInput_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return TypedInput_setPrototypeOf(o, p); }

function TypedInput_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var TypedInput_TypedInput =
/*#__PURE__*/
function (_React$Component) {
  TypedInput_inherits(TypedInput, _React$Component);

  function TypedInput() {
    TypedInput_classCallCheck(this, TypedInput);

    return TypedInput_possibleConstructorReturn(this, TypedInput_getPrototypeOf(TypedInput).apply(this, arguments));
  }

  TypedInput_createClass(TypedInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          className = _this$props.className,
          id = _this$props.id,
          big = _this$props.big,
          rest = TypedInput_objectWithoutProperties(_this$props, ["label", "className", "id", "big"]);

      return external_React_default.a.createElement("div", {
        className: external_classNames_default()('typed-input', className)
      }, external_React_default.a.createElement("label", {
        htmlFor: id,
        className: 'label'
      }, label), !big && external_React_default.a.createElement("input", TypedInput_extends({
        id: id,
        name: id,
        className: 'input'
      }, rest)), big && external_React_default.a.createElement("textarea", TypedInput_extends({
        id: id,
        name: id,
        className: 'input text-area'
      }, rest)));
    }
  }]);

  return TypedInput;
}(external_React_default.a.Component);

TypedInput_defineProperty(TypedInput_TypedInput, "defaultProps", {
  big: false,
  label: '',
  id: ''
});

TypedInput_defineProperty(TypedInput_TypedInput, "propTypes", {
  className: external_PropTypes_default.a.string,
  id: external_PropTypes_default.a.string.isRequired,
  label: external_PropTypes_default.a.string.isRequired,
  big: external_PropTypes_default.a.bool
});


// EXTERNAL MODULE: ./src/js/components/SubmitButton.scss
var components_SubmitButton = __webpack_require__(28);

// CONCATENATED MODULE: ./src/js/components/SubmitButton.js
function SubmitButton_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SubmitButton_typeof = function _typeof(obj) { return typeof obj; }; } else { SubmitButton_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SubmitButton_typeof(obj); }

function SubmitButton_extends() { SubmitButton_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SubmitButton_extends.apply(this, arguments); }

function SubmitButton_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SubmitButton_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SubmitButton_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function SubmitButton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SubmitButton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SubmitButton_createClass(Constructor, protoProps, staticProps) { if (protoProps) SubmitButton_defineProperties(Constructor.prototype, protoProps); if (staticProps) SubmitButton_defineProperties(Constructor, staticProps); return Constructor; }

function SubmitButton_possibleConstructorReturn(self, call) { if (call && (SubmitButton_typeof(call) === "object" || typeof call === "function")) { return call; } return SubmitButton_assertThisInitialized(self); }

function SubmitButton_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SubmitButton_getPrototypeOf(o) { SubmitButton_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SubmitButton_getPrototypeOf(o); }

function SubmitButton_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SubmitButton_setPrototypeOf(subClass, superClass); }

function SubmitButton_setPrototypeOf(o, p) { SubmitButton_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SubmitButton_setPrototypeOf(o, p); }





var SubmitButton_SubmitButton =
/*#__PURE__*/
function (_React$Component) {
  SubmitButton_inherits(SubmitButton, _React$Component);

  function SubmitButton() {
    SubmitButton_classCallCheck(this, SubmitButton);

    return SubmitButton_possibleConstructorReturn(this, SubmitButton_getPrototypeOf(SubmitButton).apply(this, arguments));
  }

  SubmitButton_createClass(SubmitButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          rest = SubmitButton_objectWithoutProperties(_this$props, ["className"]);

      return external_React_default.a.createElement("button", SubmitButton_extends({
        type: 'submit',
        className: external_classNames_default()('submit-button', className)
      }, rest), this.props.children || 'Submit Enquiry');
    }
  }]);

  return SubmitButton;
}(external_React_default.a.Component);


// CONCATENATED MODULE: ./src/js/hoc/withContactUs.js
function withContactUs_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { withContactUs_typeof = function _typeof(obj) { return typeof obj; }; } else { withContactUs_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return withContactUs_typeof(obj); }

function withContactUs_extends() { withContactUs_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return withContactUs_extends.apply(this, arguments); }

function withContactUs_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function withContactUs_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function withContactUs_createClass(Constructor, protoProps, staticProps) { if (protoProps) withContactUs_defineProperties(Constructor.prototype, protoProps); if (staticProps) withContactUs_defineProperties(Constructor, staticProps); return Constructor; }

function withContactUs_possibleConstructorReturn(self, call) { if (call && (withContactUs_typeof(call) === "object" || typeof call === "function")) { return call; } return withContactUs_assertThisInitialized(self); }

function withContactUs_getPrototypeOf(o) { withContactUs_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return withContactUs_getPrototypeOf(o); }

function withContactUs_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function withContactUs_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) withContactUs_setPrototypeOf(subClass, superClass); }

function withContactUs_setPrototypeOf(o, p) { withContactUs_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return withContactUs_setPrototypeOf(o, p); }

function withContactUs_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var formPath = '/wp-json/contact-form-7/v1/contact-forms/91/feedback';
var success = 'mail_sent';
function withContactUs(Component) {
  var _temp;

  return _temp =
  /*#__PURE__*/
  function (_React$Component) {
    withContactUs_inherits(_temp, _React$Component);

    function _temp() {
      var _getPrototypeOf2;

      var _this;

      withContactUs_classCallCheck(this, _temp);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = withContactUs_possibleConstructorReturn(this, (_getPrototypeOf2 = withContactUs_getPrototypeOf(_temp)).call.apply(_getPrototypeOf2, [this].concat(args)));

      withContactUs_defineProperty(withContactUs_assertThisInitialized(_this), "state", {
        email: '',
        'first-name': '',
        'last-name': '',
        phone: '',
        submitted: false,
        message: '',
        responseMessage: ''
      });

      withContactUs_defineProperty(withContactUs_assertThisInitialized(_this), "onSuccess", function (responseMessage) {
        _this.setState({
          submitted: true,
          responseMessage: responseMessage
        });
      });

      withContactUs_defineProperty(withContactUs_assertThisInitialized(_this), "onChange", function (e) {
        _this.setState(withContactUs_defineProperty({}, e.target.id, e.target.value));
      });

      withContactUs_defineProperty(withContactUs_assertThisInitialized(_this), "onError", function () {});

      withContactUs_defineProperty(withContactUs_assertThisInitialized(_this), "successResponse", function (_ref) {
        var _ref$data = _ref.data,
            status = _ref$data.status,
            message = _ref$data.message;
        if (status === success) _this.onSuccess(message);else _this.onError();
      });

      withContactUs_defineProperty(withContactUs_assertThisInitialized(_this), "onSubmit", function (e) {
        e.preventDefault();
        var data = new FormData();
        data.set('email', _this.state.email);
        data.set('first-name', _this.state['first-name']);
        data.set('last-name', _this.state['last-name']);
        data.set('phone', _this.state.phone);
        data.set('message', _this.state.message);
        external_axios_default()({
          method: 'post',
          url: formPath,
          data: data,
          config: {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        }).then(_this.successResponse).catch(_this.onError);
      });

      return _this;
    }

    withContactUs_createClass(_temp, [{
      key: "render",
      value: function render() {
        var _this$state = this.state,
            submitted = _this$state.submitted,
            responseMessage = _this$state.responseMessage;
        return external_React_default.a.createElement(Component, withContactUs_extends({
          onSubmit: this.onSubmit,
          onChange: this.onChange,
          onError: this.onError,
          submitted: submitted,
          responseMessage: responseMessage
        }, this.props));
      }
    }]);

    return _temp;
  }(external_React_default.a.Component), _temp;
}
// EXTERNAL MODULE: ./src/js/pages/ContactUs.scss
var pages_ContactUs = __webpack_require__(29);

// CONCATENATED MODULE: ./src/js/pages/ContactUs.js
function ContactUs_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ContactUs_typeof = function _typeof(obj) { return typeof obj; }; } else { ContactUs_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ContactUs_typeof(obj); }

function ContactUs_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ContactUs_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ContactUs_createClass(Constructor, protoProps, staticProps) { if (protoProps) ContactUs_defineProperties(Constructor.prototype, protoProps); if (staticProps) ContactUs_defineProperties(Constructor, staticProps); return Constructor; }

function ContactUs_possibleConstructorReturn(self, call) { if (call && (ContactUs_typeof(call) === "object" || typeof call === "function")) { return call; } return ContactUs_assertThisInitialized(self); }

function ContactUs_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ContactUs_getPrototypeOf(o) { ContactUs_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ContactUs_getPrototypeOf(o); }

function ContactUs_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ContactUs_setPrototypeOf(subClass, superClass); }

function ContactUs_setPrototypeOf(o, p) { ContactUs_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ContactUs_setPrototypeOf(o, p); }

function ContactUs_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var ContactUs_ContactUs =
/*#__PURE__*/
function (_React$Component) {
  ContactUs_inherits(ContactUs, _React$Component);

  function ContactUs() {
    ContactUs_classCallCheck(this, ContactUs);

    return ContactUs_possibleConstructorReturn(this, ContactUs_getPrototypeOf(ContactUs).apply(this, arguments));
  }

  ContactUs_createClass(ContactUs, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          types = _this$props.types,
          submitButtonLabel = _this$props.submitButtonLabel,
          firstNamePlaceholder = _this$props.firstNamePlaceholder,
          lastNamePlaceholder = _this$props.lastNamePlaceholder,
          emailPlaceholder = _this$props.emailPlaceholder,
          phonePlaceholder = _this$props.phonePlaceholder,
          messagePlaceholder = _this$props.messagePlaceholder,
          onChange = _this$props.onChange,
          onSubmit = _this$props.onSubmit,
          introduction = _this$props.introduction,
          submitted = _this$props.submitted,
          responseMessage = _this$props.responseMessage;
      var typeSections = types.reduce(function (obj, type) {
        if (!obj[type.section]) obj[type.section] = [];
        obj[type.section].push(type);
        return obj;
      }, {});
      return external_React_default.a.createElement(external_React_default.a.Fragment, null, external_React_default.a.createElement(js_components_Map, {
        className: 'contact-us-map'
      }), external_React_default.a.createElement("main", {
        className: 'contact-us-page-wrapper'
      }, external_React_default.a.createElement(Container_Container, {
        col: false,
        className: 'contact-us-page'
      }, external_React_default.a.createElement("div", {
        className: 'contact-us-inner-wrapper'
      }, external_React_default.a.createElement("h2", {
        className: 'col-xs-12 title'
      }, title.rendered), external_React_default.a.createElement("div", {
        className: 'col-xs-12 col-sm-12 col-md-4'
      }, external_React_default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: introduction
        }
      }), types && Object.keys(typeSections).map(function (key) {
        return external_React_default.a.createElement("div", {
          key: key
        }, key !== 'undefined' && external_React_default.a.createElement("h3", null, key), external_React_default.a.createElement("ul", {
          className: 'list'
        }, typeSections[key].map(function (_ref, i) {
          var type = _ref.type,
              label = _ref.label,
              detail = _ref.detail;
          return external_React_default.a.createElement("li", {
            key: i,
            className: 'item'
          }, external_React_default.a.createElement("span", {
            className: 'label'
          }, label, ":"), type === 'addr' && external_React_default.a.createElement("p", {
            className: 'link'
          }, detail), type !== 'addr' && external_React_default.a.createElement("a", {
            className: 'link',
            href: "".concat(type, ":").concat(detail)
          }, detail));
        })));
      })), external_React_default.a.createElement("form", {
        className: 'col-xs-12 col-sm-12 col-md-8 form',
        onSubmit: onSubmit
      }, external_React_default.a.createElement(Container_Container, {
        col: false
      }, external_React_default.a.createElement("div", {
        className: 'col-xs-12 col-sm-12 col-md-6'
      }, external_React_default.a.createElement(TypedInput_TypedInput, {
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
      }), external_React_default.a.createElement(TypedInput_TypedInput, {
        placeholder: emailPlaceholder,
        autoComplete: "email",
        id: 'email',
        onChange: onChange,
        label: emailPlaceholder,
        type: 'text',
        className: 'text-input',
        disabled: submitted,
        required: true
      })), external_React_default.a.createElement("div", {
        className: 'col-xs-12 col-sm-12 col-md-6'
      }, external_React_default.a.createElement(TypedInput_TypedInput, {
        placeholder: lastNamePlaceholder,
        autoComplete: "family-name",
        id: 'last-name',
        onChange: onChange,
        label: lastNamePlaceholder,
        type: 'text',
        className: 'text-input',
        disabled: submitted,
        required: true
      }), external_React_default.a.createElement(TypedInput_TypedInput, {
        placeholder: phonePlaceholder,
        autoComplete: "tel",
        id: 'phone',
        onChange: onChange,
        label: phonePlaceholder,
        type: 'text',
        className: 'text-input',
        disabled: submitted,
        required: true
      })), external_React_default.a.createElement("div", {
        className: 'col-xs-12 col-sm-12 col-md-12'
      }, external_React_default.a.createElement(TypedInput_TypedInput, {
        big: true,
        placeholder: messagePlaceholder,
        id: 'message',
        onChange: onChange,
        label: messagePlaceholder,
        className: 'text-area',
        disabled: submitted,
        required: true
      }), external_React_default.a.createElement("div", {
        className: 'submit-wrapper'
      }, external_React_default.a.createElement(SubmitButton_SubmitButton, {
        disabled: submitted
      }, submitButtonLabel))))), external_React_default.a.createElement("div", {
        className: 'col-xs-12'
      }, external_React_default.a.createElement("p", {
        className: 'h2'
      }, responseMessage))))));
    }
  }]);

  return ContactUs;
}(external_React_default.a.Component);

ContactUs_defineProperty(ContactUs_ContactUs, "defaultProps", {
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
});

ContactUs_defineProperty(ContactUs_ContactUs, "propTypes", {
  title: external_PropTypes_default.a.object,
  submitButtonLabel: external_PropTypes_default.a.string,
  types: external_PropTypes_default.a.array,
  firstNamePlaceholder: external_PropTypes_default.a.string,
  lastNamePlaceholder: external_PropTypes_default.a.string,
  emailPlaceholder: external_PropTypes_default.a.string,
  phonePlaceholder: external_PropTypes_default.a.string,
  messagePlaceholder: external_PropTypes_default.a.string,
  content: external_PropTypes_default.a.object
});

/* harmony default export */ var js_pages_ContactUs = (withContactUs(ContactUs_ContactUs));
// EXTERNAL MODULE: ./src/js/pages/NewsPost.scss
var pages_NewsPost = __webpack_require__(30);

// EXTERNAL MODULE: ./src/js/components/ContactUsForm.scss
var ContactUsForm = __webpack_require__(31);

// CONCATENATED MODULE: ./src/js/components/EnquiryForm.js
function EnquiryForm_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { EnquiryForm_typeof = function _typeof(obj) { return typeof obj; }; } else { EnquiryForm_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return EnquiryForm_typeof(obj); }

function EnquiryForm_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function EnquiryForm_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function EnquiryForm_createClass(Constructor, protoProps, staticProps) { if (protoProps) EnquiryForm_defineProperties(Constructor.prototype, protoProps); if (staticProps) EnquiryForm_defineProperties(Constructor, staticProps); return Constructor; }

function EnquiryForm_possibleConstructorReturn(self, call) { if (call && (EnquiryForm_typeof(call) === "object" || typeof call === "function")) { return call; } return EnquiryForm_assertThisInitialized(self); }

function EnquiryForm_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function EnquiryForm_getPrototypeOf(o) { EnquiryForm_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return EnquiryForm_getPrototypeOf(o); }

function EnquiryForm_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) EnquiryForm_setPrototypeOf(subClass, superClass); }

function EnquiryForm_setPrototypeOf(o, p) { EnquiryForm_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return EnquiryForm_setPrototypeOf(o, p); }

function EnquiryForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var EnquiryForm_EnquiryForm =
/*#__PURE__*/
function (_React$Component) {
  EnquiryForm_inherits(EnquiryForm, _React$Component);

  function EnquiryForm() {
    EnquiryForm_classCallCheck(this, EnquiryForm);

    return EnquiryForm_possibleConstructorReturn(this, EnquiryForm_getPrototypeOf(EnquiryForm).apply(this, arguments));
  }

  EnquiryForm_createClass(EnquiryForm, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          formTitle = _this$props.formTitle,
          firstNamePlaceholder = _this$props.firstNamePlaceholder,
          lastNamePlaceholder = _this$props.lastNamePlaceholder,
          emailPlaceholder = _this$props.emailPlaceholder,
          phonePlaceholder = _this$props.phonePlaceholder,
          messagePlaceholder = _this$props.messagePlaceholder,
          buttonText = _this$props.buttonText,
          onChange = _this$props.onChange,
          onSubmit = _this$props.onSubmit,
          submitted = _this$props.submitted,
          responseMessage = _this$props.responseMessage;
      return external_React_default.a.createElement("form", {
        className: 'contact-us-form',
        onSubmit: onSubmit
      }, external_React_default.a.createElement("h2", {
        className: 'h3'
      }, formTitle), !submitted && external_React_default.a.createElement(external_React_default.a.Fragment, null, external_React_default.a.createElement(TypedInput_TypedInput, {
        placeholder: firstNamePlaceholder,
        autoComplete: "given-name",
        onChange: onChange,
        id: 'first-name',
        label: firstNamePlaceholder,
        type: 'text',
        className: 'text-input',
        disabled: submitted,
        required: true
      }), external_React_default.a.createElement(TypedInput_TypedInput, {
        placeholder: lastNamePlaceholder,
        autoComplete: "family-name",
        onChange: onChange,
        id: 'last-name',
        label: lastNamePlaceholder,
        type: 'text',
        className: 'text-input',
        disabled: submitted,
        required: true
      }), external_React_default.a.createElement(TypedInput_TypedInput, {
        placeholder: emailPlaceholder,
        autoComplete: "email",
        onChange: onChange,
        id: 'email',
        label: emailPlaceholder,
        type: 'email',
        className: 'text-input',
        disabled: submitted,
        required: true
      }), external_React_default.a.createElement(TypedInput_TypedInput, {
        placeholder: phonePlaceholder,
        onChange: onChange,
        autoComplete: "tel",
        id: 'phone',
        label: phonePlaceholder,
        type: 'number',
        className: 'text-input',
        disabled: submitted,
        required: true
      }), external_React_default.a.createElement(TypedInput_TypedInput, {
        placeholder: messagePlaceholder,
        onChange: onChange,
        id: 'message',
        label: messagePlaceholder,
        big: true,
        className: 'text-area',
        disabled: submitted,
        required: true
      }), external_React_default.a.createElement(SubmitButton_SubmitButton, {
        className: 'contact-us-submit'
      }, buttonText)), submitted && external_React_default.a.createElement("p", {
        className: 'h3'
      }, responseMessage));
    }
  }]);

  return EnquiryForm;
}(external_React_default.a.Component);

EnquiryForm_defineProperty(EnquiryForm_EnquiryForm, "defaultProps", {
  formTitle: 'Make an enquiry',
  firstNamePlaceholder: 'First Name',
  lastNamePlaceholder: 'Last Name',
  emailPlaceholder: 'Email',
  phonePlaceholder: 'Phone',
  messagePlaceholder: 'Message',
  buttonText: 'Submit Enquiry'
});

EnquiryForm_defineProperty(EnquiryForm_EnquiryForm, "propTypes", {
  formTitle: external_PropTypes_default.a.string,
  firstNamePlaceholder: external_PropTypes_default.a.string,
  lastNamePlaceholder: external_PropTypes_default.a.string,
  emailPlaceholder: external_PropTypes_default.a.string,
  phonePlaceholder: external_PropTypes_default.a.string,
  messagePlaceholder: external_PropTypes_default.a.string,
  buttonText: external_PropTypes_default.a.string
});

/* harmony default export */ var components_EnquiryForm = (withContactUs(EnquiryForm_EnquiryForm));
// CONCATENATED MODULE: ./src/js/pages/NewsPost.js
function NewsPost_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { NewsPost_typeof = function _typeof(obj) { return typeof obj; }; } else { NewsPost_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return NewsPost_typeof(obj); }

function NewsPost_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NewsPost_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NewsPost_createClass(Constructor, protoProps, staticProps) { if (protoProps) NewsPost_defineProperties(Constructor.prototype, protoProps); if (staticProps) NewsPost_defineProperties(Constructor, staticProps); return Constructor; }

function NewsPost_possibleConstructorReturn(self, call) { if (call && (NewsPost_typeof(call) === "object" || typeof call === "function")) { return call; } return NewsPost_assertThisInitialized(self); }

function NewsPost_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function NewsPost_getPrototypeOf(o) { NewsPost_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return NewsPost_getPrototypeOf(o); }

function NewsPost_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) NewsPost_setPrototypeOf(subClass, superClass); }

function NewsPost_setPrototypeOf(o, p) { NewsPost_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return NewsPost_setPrototypeOf(o, p); }

function NewsPost_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var NewsPost_NewsPost =
/*#__PURE__*/
function (_React$Component) {
  NewsPost_inherits(NewsPost, _React$Component);

  function NewsPost() {
    NewsPost_classCallCheck(this, NewsPost);

    return NewsPost_possibleConstructorReturn(this, NewsPost_getPrototypeOf(NewsPost).apply(this, arguments));
  }

  NewsPost_createClass(NewsPost, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          description = _this$props.description,
          content = _this$props.content,
          date = _this$props.date,
          caption = _this$props.caption,
          dUrl = _this$props.desktopBanner.url,
          mUrl = _this$props.mobileBanner.url,
          formTitle = _this$props.formTitle,
          firstNamePlaceholder = _this$props.firstNamePlaceholder,
          lastNamePlaceholder = _this$props.lastNamePlaceholder,
          emailPlaceholder = _this$props.emailPlaceholder,
          phonePlaceholder = _this$props.phonePlaceholder,
          messagePlaceholder = _this$props.messagePlaceholder,
          buttonText = _this$props.buttonText;
      var parsedDate = date.split(',');
      return external_React_default.a.createElement(external_React_default.a.Fragment, null, external_React_default.a.createElement(Banner_Banner, {
        titleContent: '',
        overlap: true,
        xs: mUrl,
        sm: mUrl,
        md: dUrl,
        lg: dUrl,
        xl: dUrl
      }), external_React_default.a.createElement("main", {
        className: 'news-item'
      }, external_React_default.a.createElement(Container_Container, {
        col: false,
        outerWrap: true
      }, external_React_default.a.createElement("div", {
        className: 'col-xs-12 col-md-4'
      }, external_React_default.a.createElement("div", {
        className: 'intro'
      }, external_React_default.a.createElement("p", {
        className: 'date'
      }, external_React_default.a.createElement("span", {
        className: 'day'
      }, parsedDate[2]), ' ', external_React_default.a.createElement("span", null, parsedDate[1], " ", parsedDate[0])), external_React_default.a.createElement("div", {
        className: 'intro-content'
      }, external_React_default.a.createElement("h2", {
        className: 'title'
      }, title.rendered), external_React_default.a.createElement("div", {
        className: 'short-excerpt',
        dangerouslySetInnerHTML: {
          __html: description
        }
      }))))), external_React_default.a.createElement(Container_Container, {
        col: false,
        className: 'description',
        outerWrap: true
      }, external_React_default.a.createElement("div", {
        className: 'col-xs-12 col-md-9',
        dangerouslySetInnerHTML: {
          __html: content.rendered
        }
      }), external_React_default.a.createElement("div", {
        className: 'col-xs-12 col-md-3'
      }, external_React_default.a.createElement("div", {
        className: 'caption',
        dangerouslySetInnerHTML: {
          __html: caption
        }
      }), external_React_default.a.createElement(components_EnquiryForm, {
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
}(external_React_default.a.Component);

NewsPost_defineProperty(NewsPost_NewsPost, "defaultProps", {
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
});

NewsPost_defineProperty(NewsPost_NewsPost, "propTypes", {
  shortExcerpt: external_PropTypes_default.a.string,
  content: external_PropTypes_default.a.object,
  date: external_PropTypes_default.a.string,
  caption: external_PropTypes_default.a.string
});


// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(8);

// CONCATENATED MODULE: ./src/js/components/icon/MagnifyingGlass.js
function MagnifyingGlass_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MagnifyingGlass_typeof = function _typeof(obj) { return typeof obj; }; } else { MagnifyingGlass_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MagnifyingGlass_typeof(obj); }

function MagnifyingGlass_extends() { MagnifyingGlass_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MagnifyingGlass_extends.apply(this, arguments); }

function MagnifyingGlass_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MagnifyingGlass_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MagnifyingGlass_createClass(Constructor, protoProps, staticProps) { if (protoProps) MagnifyingGlass_defineProperties(Constructor.prototype, protoProps); if (staticProps) MagnifyingGlass_defineProperties(Constructor, staticProps); return Constructor; }

function MagnifyingGlass_possibleConstructorReturn(self, call) { if (call && (MagnifyingGlass_typeof(call) === "object" || typeof call === "function")) { return call; } return MagnifyingGlass_assertThisInitialized(self); }

function MagnifyingGlass_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MagnifyingGlass_getPrototypeOf(o) { MagnifyingGlass_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MagnifyingGlass_getPrototypeOf(o); }

function MagnifyingGlass_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MagnifyingGlass_setPrototypeOf(subClass, superClass); }

function MagnifyingGlass_setPrototypeOf(o, p) { MagnifyingGlass_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MagnifyingGlass_setPrototypeOf(o, p); }



var MagnifyingGlass_MagnifyingGlass =
/*#__PURE__*/
function (_React$Component) {
  MagnifyingGlass_inherits(MagnifyingGlass, _React$Component);

  function MagnifyingGlass() {
    MagnifyingGlass_classCallCheck(this, MagnifyingGlass);

    return MagnifyingGlass_possibleConstructorReturn(this, MagnifyingGlass_getPrototypeOf(MagnifyingGlass).apply(this, arguments));
  }

  MagnifyingGlass_createClass(MagnifyingGlass, [{
    key: "render",
    value: function render() {
      return external_React_default.a.createElement("svg", MagnifyingGlass_extends({
        version: "1.1",
        viewBox: "0 0 22 22"
      }, this.props), external_React_default.a.createElement("g", {
        fill: "none",
        fillRule: "evenodd"
      }, external_React_default.a.createElement("g", {
        transform: "translate(-1064 -166)",
        fill: "#fff"
      }, external_React_default.a.createElement("g", {
        transform: "translate(1064 166)"
      }, external_React_default.a.createElement("path", {
        d: "m0.73333 7.7c0-3.8416 3.1251-6.9667 6.9666-6.9667 3.8416 0 6.9666 3.1251 6.9666 6.9667 0 3.8416-3.1251 6.9667-6.9666 6.9667-3.8416 0-6.9666-3.1251-6.9666-6.9667m21.159 13.674-8.5033-8.5034c1.2445-1.3684 2.0108-3.1794 2.0108-5.1707 0-4.246-3.454-7.7-7.7-7.7-4.246 0-7.7 3.454-7.7 7.7s3.454 7.7 7.7 7.7c1.991 0 3.8023-0.76597 5.1707-2.0108l8.5033 8.5034c0.0715 0.0715 0.16537 0.10743 0.25923 0.10743s0.18773-0.035933 0.25923-0.10743c0.14337-0.14337 0.14337-0.3751 0-0.51847"
      })))));
    }
  }]);

  return MagnifyingGlass;
}(external_React_default.a.Component);


// EXTERNAL MODULE: ./src/js/components/SearchInput.scss
var components_SearchInput = __webpack_require__(41);

// CONCATENATED MODULE: ./src/js/components/SearchInput.js
function SearchInput_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SearchInput_typeof = function _typeof(obj) { return typeof obj; }; } else { SearchInput_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SearchInput_typeof(obj); }

function SearchInput_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SearchInput_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SearchInput_createClass(Constructor, protoProps, staticProps) { if (protoProps) SearchInput_defineProperties(Constructor.prototype, protoProps); if (staticProps) SearchInput_defineProperties(Constructor, staticProps); return Constructor; }

function SearchInput_possibleConstructorReturn(self, call) { if (call && (SearchInput_typeof(call) === "object" || typeof call === "function")) { return call; } return SearchInput_assertThisInitialized(self); }

function SearchInput_getPrototypeOf(o) { SearchInput_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SearchInput_getPrototypeOf(o); }

function SearchInput_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SearchInput_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SearchInput_setPrototypeOf(subClass, superClass); }

function SearchInput_setPrototypeOf(o, p) { SearchInput_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SearchInput_setPrototypeOf(o, p); }

function SearchInput_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var SearchInput_SearchInput =
/*#__PURE__*/
function (_React$Component) {
  SearchInput_inherits(SearchInput, _React$Component);

  function SearchInput() {
    var _getPrototypeOf2;

    var _this;

    SearchInput_classCallCheck(this, SearchInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = SearchInput_possibleConstructorReturn(this, (_getPrototypeOf2 = SearchInput_getPrototypeOf(SearchInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    SearchInput_defineProperty(SearchInput_assertThisInitialized(_this), "state", {
      value: ''
    });

    SearchInput_defineProperty(SearchInput_assertThisInitialized(_this), "onSubmit", function (e) {
      var history = _this.props.history;
      e.preventDefault();
      history.push({
        pathname: '/search/',
        search: "?query=".concat(_this.state.value)
      });
    });

    SearchInput_defineProperty(SearchInput_assertThisInitialized(_this), "onChange", function (e) {
      _this.setState({
        value: e.target.value
      });
    });

    return _this;
  }

  SearchInput_createClass(SearchInput, [{
    key: "render",
    value: function render() {
      var searchPlaceholder = this.props.searchPlaceholder;
      return external_React_default.a.createElement("form", {
        className: 'search',
        onSubmit: this.onSubmit
      }, external_React_default.a.createElement("button", {
        type: 'submit',
        className: 'search-submit-button'
      }, external_React_default.a.createElement(MagnifyingGlass_MagnifyingGlass, {
        className: 'icon'
      })), external_React_default.a.createElement(TypedInput_TypedInput, {
        id: 'header-search',
        type: 'text',
        label: 'Search',
        placeholder: searchPlaceholder,
        onChange: this.onChange
      }));
    }
  }]);

  return SearchInput;
}(external_React_default.a.Component);

SearchInput_defineProperty(SearchInput_SearchInput, "defaultProps", {
  searchPlaceholder: 'Search'
});

SearchInput_defineProperty(SearchInput_SearchInput, "propTypes", {
  searchPlaceholder: external_PropTypes_default.a.string
});

/* harmony default export */ var js_components_SearchInput = (Object(external_ReactRouterDOM_["withRouter"])(SearchInput_SearchInput));
// EXTERNAL MODULE: ./src/js/components/DesktopNav.scss
var components_DesktopNav = __webpack_require__(42);

// CONCATENATED MODULE: ./src/js/components/DesktopNav.js
function DesktopNav_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { DesktopNav_typeof = function _typeof(obj) { return typeof obj; }; } else { DesktopNav_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return DesktopNav_typeof(obj); }

function DesktopNav_toConsumableArray(arr) { return DesktopNav_arrayWithoutHoles(arr) || DesktopNav_iterableToArray(arr) || DesktopNav_nonIterableSpread(); }

function DesktopNav_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function DesktopNav_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function DesktopNav_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function DesktopNav_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function DesktopNav_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function DesktopNav_createClass(Constructor, protoProps, staticProps) { if (protoProps) DesktopNav_defineProperties(Constructor.prototype, protoProps); if (staticProps) DesktopNav_defineProperties(Constructor, staticProps); return Constructor; }

function DesktopNav_possibleConstructorReturn(self, call) { if (call && (DesktopNav_typeof(call) === "object" || typeof call === "function")) { return call; } return DesktopNav_assertThisInitialized(self); }

function DesktopNav_getPrototypeOf(o) { DesktopNav_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return DesktopNav_getPrototypeOf(o); }

function DesktopNav_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function DesktopNav_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) DesktopNav_setPrototypeOf(subClass, superClass); }

function DesktopNav_setPrototypeOf(o, p) { DesktopNav_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return DesktopNav_setPrototypeOf(o, p); }

function DesktopNav_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var first = true;

var DesktopNav_DesktopNav =
/*#__PURE__*/
function (_React$Component) {
  DesktopNav_inherits(DesktopNav, _React$Component);

  function DesktopNav() {
    var _getPrototypeOf2;

    var _this;

    DesktopNav_classCallCheck(this, DesktopNav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = DesktopNav_possibleConstructorReturn(this, (_getPrototypeOf2 = DesktopNav_getPrototypeOf(DesktopNav)).call.apply(_getPrototypeOf2, [this].concat(args)));

    DesktopNav_defineProperty(DesktopNav_assertThisInitialized(_this), "timeout", void 0);

    DesktopNav_defineProperty(DesktopNav_assertThisInitialized(_this), "width", void 0);

    DesktopNav_defineProperty(DesktopNav_assertThisInitialized(_this), "isBigger", true);

    DesktopNav_defineProperty(DesktopNav_assertThisInitialized(_this), "onRef", function (ref) {
      if (!_this.props.sticky) return;
      clearTimeout(_this.timeout);
      _this.timeout = setTimeout(function () {
        if (!ref) return;
        var width = 0;

        DesktopNav_toConsumableArray(ref.parentNode.children).forEach(function (item) {
          width += item.offsetWidth;
        });

        _this.width = width + 32 + 236;

        _this.checkWidth();
      }, 10);
    });

    DesktopNav_defineProperty(DesktopNav_assertThisInitialized(_this), "checkWidth", function () {
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
    });

    return _this;
  }

  DesktopNav_createClass(DesktopNav, [{
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
      var _this$props = this.props,
          searchPlaceholder = _this$props.searchPlaceholder,
          navItems = _this$props.navItems;
      return external_React_default.a.createElement("nav", {
        className: external_classNames_default()('desktop-header')
      }, external_React_default.a.createElement(Container_Container, {
        outerWrap: true
      }, external_React_default.a.createElement("div", {
        className: 'nav'
      }, this.renderMenu(navItems)), external_React_default.a.createElement(js_components_SearchInput, {
        searchPlaceholder: searchPlaceholder
      })));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu(navItems) {
      var _this2 = this;

      return external_React_default.a.createElement("ul", null, navItems.map(function (_ref) {
        var url = _ref.url,
            title = _ref.title,
            id = _ref.ID,
            children = _ref.children;
        return external_React_default.a.createElement("li", {
          ref: _this2.onRef,
          key: id
        }, url !== 'http://undefined' && external_React_default.a.createElement(components_Link, {
          to: url.replace(location.origin, '') || '/'
        }, title.toUpperCase()), url === 'http://undefined' && external_React_default.a.createElement("a", null, title.toUpperCase()), children && _this2.renderMenu(children));
      }));
    }
  }]);

  return DesktopNav;
}(external_React_default.a.Component);

DesktopNav_defineProperty(DesktopNav_DesktopNav, "defaultProps", {
  navItems: [],
  searchPlaceholder: '',
  sticky: false,
  changedSize: function changedSize() {}
});

DesktopNav_defineProperty(DesktopNav_DesktopNav, "propTypes", {
  navItems: external_PropTypes_default.a.array,
  searchPlaceholder: external_PropTypes_default.a.string,
  sticky: external_PropTypes_default.a.bool,
  changedSize: external_PropTypes_default.a.func
});


// EXTERNAL MODULE: ./src/js/components/icon/hamburger.scss
var hamburger = __webpack_require__(43);

// CONCATENATED MODULE: ./src/js/components/icon/Hamburger.js
function Hamburger_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Hamburger_typeof = function _typeof(obj) { return typeof obj; }; } else { Hamburger_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Hamburger_typeof(obj); }

function Hamburger_extends() { Hamburger_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Hamburger_extends.apply(this, arguments); }

function Hamburger_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Hamburger_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Hamburger_createClass(Constructor, protoProps, staticProps) { if (protoProps) Hamburger_defineProperties(Constructor.prototype, protoProps); if (staticProps) Hamburger_defineProperties(Constructor, staticProps); return Constructor; }

function Hamburger_possibleConstructorReturn(self, call) { if (call && (Hamburger_typeof(call) === "object" || typeof call === "function")) { return call; } return Hamburger_assertThisInitialized(self); }

function Hamburger_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Hamburger_getPrototypeOf(o) { Hamburger_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Hamburger_getPrototypeOf(o); }

function Hamburger_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Hamburger_setPrototypeOf(subClass, superClass); }

function Hamburger_setPrototypeOf(o, p) { Hamburger_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Hamburger_setPrototypeOf(o, p); }




var Hamburger_Hamburger =
/*#__PURE__*/
function (_React$Component) {
  Hamburger_inherits(Hamburger, _React$Component);

  function Hamburger() {
    Hamburger_classCallCheck(this, Hamburger);

    return Hamburger_possibleConstructorReturn(this, Hamburger_getPrototypeOf(Hamburger).apply(this, arguments));
  }

  Hamburger_createClass(Hamburger, [{
    key: "render",
    value: function render() {
      return external_React_default.a.createElement("div", Hamburger_extends({}, this.props, {
        className: 'hamburger'
      }), external_React_default.a.createElement("span", {
        className: 'line'
      }), external_React_default.a.createElement("span", {
        className: 'line'
      }), external_React_default.a.createElement("span", {
        className: 'line'
      }));
    }
  }]);

  return Hamburger;
}(external_React_default.a.Component);


// CONCATENATED MODULE: ./src/js/components/svg/Logo.js
function Logo_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Logo_typeof = function _typeof(obj) { return typeof obj; }; } else { Logo_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Logo_typeof(obj); }

function Logo_extends() { Logo_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Logo_extends.apply(this, arguments); }

function Logo_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Logo_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Logo_createClass(Constructor, protoProps, staticProps) { if (protoProps) Logo_defineProperties(Constructor.prototype, protoProps); if (staticProps) Logo_defineProperties(Constructor, staticProps); return Constructor; }

function Logo_possibleConstructorReturn(self, call) { if (call && (Logo_typeof(call) === "object" || typeof call === "function")) { return call; } return Logo_assertThisInitialized(self); }

function Logo_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Logo_getPrototypeOf(o) { Logo_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Logo_getPrototypeOf(o); }

function Logo_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Logo_setPrototypeOf(subClass, superClass); }

function Logo_setPrototypeOf(o, p) { Logo_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Logo_setPrototypeOf(o, p); }



var Logo_Logo =
/*#__PURE__*/
function (_React$Component) {
  Logo_inherits(Logo, _React$Component);

  function Logo() {
    Logo_classCallCheck(this, Logo);

    return Logo_possibleConstructorReturn(this, Logo_getPrototypeOf(Logo).apply(this, arguments));
  }

  Logo_createClass(Logo, [{
    key: "render",
    value: function render() {
      return external_React_default.a.createElement("svg", Logo_extends({
        viewBox: '0 0 90 90'
      }, this.props), external_React_default.a.createElement("defs", null, external_React_default.a.createElement("linearGradient", {
        x1: "-34.262%",
        y1: "91.501%",
        x2: "129.206%",
        y2: "9.68%",
        id: "a"
      }, external_React_default.a.createElement("stop", {
        stopColor: "#78A7C0",
        offset: "6.287%"
      }), external_React_default.a.createElement("stop", {
        stopColor: "#D04A5D",
        offset: "35.12%"
      })), external_React_default.a.createElement("linearGradient", {
        x1: "-33.92%",
        y1: "91.482%",
        x2: "128.776%",
        y2: "9.661%",
        id: "b"
      }, external_React_default.a.createElement("stop", {
        stopColor: "#78A7C0",
        offset: "31.91%"
      }), external_React_default.a.createElement("stop", {
        stopColor: "#D04A5D",
        offset: "79.8%"
      })), external_React_default.a.createElement("linearGradient", {
        x1: "46.194%",
        y1: "49.918%",
        x2: "22.077%",
        y2: "62.089%",
        id: "c"
      }, external_React_default.a.createElement("stop", {
        stopColor: "#D04A5D",
        offset: "59.03%"
      }), external_React_default.a.createElement("stop", {
        stopColor: "#78A7C0",
        offset: "98.14%"
      })), external_React_default.a.createElement("linearGradient", {
        x1: "47.641%",
        y1: "50.531%",
        x2: "57.272%",
        y2: "64.021%",
        id: "d"
      }, external_React_default.a.createElement("stop", {
        stopColor: "#D04A5D",
        offset: "59.03%"
      }), external_React_default.a.createElement("stop", {
        stopColor: "#78A7C0",
        offset: "98.14%"
      })), external_React_default.a.createElement("linearGradient", {
        x1: "47.622%",
        y1: "50.502%",
        x2: "57.252%",
        y2: "63.991%",
        id: "e"
      }, external_React_default.a.createElement("stop", {
        stopColor: "#D04A5D",
        offset: "59.03%"
      }), external_React_default.a.createElement("stop", {
        stopColor: "#78A7C0",
        offset: "98.14%"
      })), external_React_default.a.createElement("linearGradient", {
        x1: "43.699%",
        y1: "89.047%",
        x2: "56.527%",
        y2: "10.49%",
        id: "f"
      }, external_React_default.a.createElement("stop", {
        stopColor: "#78A7C0",
        offset: "28.95%"
      }), external_React_default.a.createElement("stop", {
        stopColor: "#9098AB",
        offset: "35.29%"
      }), external_React_default.a.createElement("stop", {
        stopColor: "#A88490",
        offset: "44.92%"
      }), external_React_default.a.createElement("stop", {
        stopColor: "#B8737D",
        offset: "54.9%"
      }), external_React_default.a.createElement("stop", {
        stopColor: "#C3646E",
        offset: "65.15%"
      }), external_React_default.a.createElement("stop", {
        stopColor: "#CB5664",
        offset: "75.78%"
      }), external_React_default.a.createElement("stop", {
        stopColor: "#CF4D5F",
        offset: "87.05%"
      }), external_React_default.a.createElement("stop", {
        stopColor: "#D04A5D",
        offset: "100%"
      }))), external_React_default.a.createElement("g", {
        fillRule: "nonzero",
        fill: "none"
      }, external_React_default.a.createElement("path", {
        d: "M11.4 24.5s6.4 9.4 6.1 12.6c-.3 3.2 1.8 1.2 1.8 1.2s-.2-7.8-6.4-15-1.5 1.2-1.5 1.2z",
        fill: "#D04A5D"
      }), external_React_default.a.createElement("path", {
        d: "M45.1 88.9C20.7 88.9.8 69 .8 44.6S20.7.3 45.1.3s44.3 19.9 44.3 44.3c.1 24.4-19.8 44.3-44.3 44.3zm0-83.4C23.6 5.5 6 23 6 44.6c0 21.5 17.5 39.1 39.1 39.1 21.5 0 39.1-17.5 39.1-39.1S66.7 5.5 45.1 5.5z",
        fill: "#78A7C0"
      }), external_React_default.a.createElement("path", {
        d: "M45.1 5.5c21.5 0 39.1 17.5 39.1 39.1v.3c1.8.1 3.5.2 5.2.4v-.7C89.4 20.2 69.5.3 45.1.3 20.8.3 1 20 .8 44.3H6C6.2 22.9 23.7 5.5 45.1 5.5z",
        fill: "#D04A5D"
      }), external_React_default.a.createElement("path", {
        d: "M32.3 4.5s4.9 3.9 7.4 8.4 4.4 9.8 4.8 11.6c.4 1.8 6.6 10.4 8.2 11.7 0 0-5-7.3-6.6-11.1-1.5-3.8-1.5-6.8-2.6-8.6-1.2-1.8-5-11.4-5-11.4l-6.2-.6z",
        fill: "#D04A5D"
      }), external_React_default.a.createElement("path", {
        d: "M39.1 10s-2 3.4-4.8 7.9c-2.8 4.4-6.7 8.9-8.1 10.2-1.4 1.3-6.2 10.8-6.7 12.7 0 0 4.2-7.9 6.9-11.2 2.7-3.3 5.4-5 6.5-6.9 1.1-1.9 7.9-10.3 7.9-10.3L39.1 10z",
        fill: "#D04A5D"
      }), external_React_default.a.createElement("path", {
        d: "M63.8 6.4s-.8 3.6-2.3 6.4c-1.5 2.8-2 3.9-3.8 5.6-1.8 1.7-3.8 3.3-4.1 4.1-.3.9-2 3-1.8 8.5.2 5.5.1 6.8-.1 10s-.6 6.9-1.7 10.1c-1.1 3.2-1.3 3.7-1.3 3.7l5.1-5.3s.1-3.6-.2-6.8c-.3-3.2-1-10.8-.9-14 .2-3.2 1-5.8 2.7-7.2 1.7-1.4 4.2-3.8 6-5.4 7.9-7.2 2.4-9.7 2.4-9.7z",
        fill: "url(#a)"
      }), external_React_default.a.createElement("path", {
        d: "M48.7 54.8s-.1 3.6.2 6.8c.3 3.2 1 10.8.9 14-.2 3.2-1 5.8-2.7 7.2-1.2 1-2.8 2.6-4.3 3.9.3.1.6.1.9.2.3-.4.7-.8 1.1-1.2 1.8-1.7 3.8-3.3 4.1-4.1.3-.9 2-3 1.8-8.5-.2-5.5-.1-6.8.1-10s.6-6.9 1.7-10.1c1.1-3.2 1.3-3.7 1.3-3.7l-5.1 5.5z",
        fill: "#78A7C0"
      }), external_React_default.a.createElement("path", {
        d: "M82.2 30.6s-.8 3.6-2.3 6.4c-1.5 2.8-2 3.9-3.8 5.6-1.8 1.7-3.8 3.3-4.1 4.1-.3.8-2 3-1.8 8.5.2 5.5.1 6.8-.1 10s-.6 6.9-1.7 10.1C67.3 78.5 67 79 67 79l5.1-5.3s.1-3.6-.2-6.8c-.3-3.2-1-10.8-.9-14 .2-3.2 1-5.8 2.7-7.2 1.7-1.4 4.2-3.8 6-5.4 8-7.2 2.5-9.7 2.5-9.7z",
        fill: "url(#b)"
      }), external_React_default.a.createElement("path", {
        d: "M45.4 24.9s.6-1.6 1.4-2.8c.8-1.2 1.2-1.7 2.1-2.5.9-.8 2-1.5 2.2-1.9.2-.4 1.1-1.4 1.3-3.7.2-2.3.3-2.8.5-4.2.3-1.3.6-2.9 1.3-4.3l.8-1.6-2.7 2.5s-.2 1.5-.3 2.9c0 1.3 0 4.5-.3 5.8-.3 1.3-.8 2.5-1.7 3.2-.9.7-2.2 1.8-3.2 2.6-3.9 3.2-1.4 4-1.4 4z",
        fill: "#D04A5D"
      }), external_React_default.a.createElement("path", {
        d: "M29.7 54.7s-.6 1.8-1.5 3.3c-1 1.5-1.3 2.1-2.3 3.1-1.1 1-2.3 2-2.5 2.4-.2.5-1.2 1.6-1.4 4.3-.1 2.7-.2 3.3-.4 4.9-.3 1.6-.6 3.4-1.3 5.1-.8 1.7-.9 1.9-.9 1.9l3.1-3.1s.2-1.8.2-3.3c-.1-1.5-.2-5.1 0-6.7.2-1.6.8-2.9 1.8-3.8 1-.9 2.5-2.3 3.6-3.2 4.6-4.2 1.6-4.9 1.6-4.9z",
        fill: "#78A7C0"
      }), external_React_default.a.createElement("path", {
        d: "M38.9 12.5s1.6-.4 3.1-.4 2.1 0 3.3.3c1.2.3 2.4.7 2.9.7.4 0 1.8.1 3.8-1 2-1.2 2.5-1.4 3.7-2 1.3-.5 2.7-1.2 4.3-1.4 1.6-.2 1.8-.3 1.8-.3l-3.6-.8s-1.4.7-2.5 1.4-3.7 2.5-4.9 3.1c-1.2.6-2.5.8-3.5.5-1.1-.3-2.8-.8-3.9-1.1-5.3-1.5-4.5 1-4.5 1zM24.9 31.4s-.3-1.5-.3-3.1 0-2.2.1-3.6.4-2.9.4-3.3c0-.4.1-1.9-.6-3.6-.7-1.7-.8-2.1-1.1-3.2-.3-1.1-.7-2.4-.8-4-.1-1.6-.1-1.8-.1-1.8l-.5 4.1s.4 1.2.8 2.1c.4.9 1.5 2.9 1.8 3.9.3 1.1.5 2.3.3 3.6-.2 1.3-.4 3.3-.6 4.6-.9 6.2.6 4.3.6 4.3z",
        fill: "#D04A5D"
      }), external_React_default.a.createElement("path", {
        d: "M29.2 54.6s1.6-8.6 2-10.2c.4-1.6.5-2.2 1.1-3.5.5-1.3 1.1-2.7 1.2-3.1.1-.4.6-1.8.3-3.6-.2-1.8-.3-2.2-.3-3.3 0-1.2 0-2.5.2-4.1.3-1.6-.1-6.4-.1-6.4l-.7 2.3s-.3 7.5-.1 8.4c.2 1 .7 3.1.7 4.3 0 1.2-.1 2.4-.6 3.5-.5 1.2-1.2 3-1.8 4.3-2.3 5.8-1.9 11.4-1.9 11.4z",
        fill: "url(#c)"
      }), external_React_default.a.createElement("path", {
        d: "M51.7 55.4s-4.3-7.7-5-9.1c-.7-1.5-1-2-1.4-3.3-.4-1.3-.8-2.8-1-3.2-.2-.4-.7-1.8-2-3s-1.6-1.5-2.3-2.4c-.7-.9-1.6-1.9-2.4-3.3-.8-1.4-4.2-4.9-4.2-4.9v2s5.5 6.2 6.2 6.8c.8.6 2.5 2 3.3 2.8.8.8 1.4 1.9 1.7 3.1.3 1.2 1 3.1 1.4 4.5 1.7 5.9 5.7 10 5.7 10z",
        fill: "url(#d)"
      }), external_React_default.a.createElement("path", {
        d: "M70.9 64.9s-4.3-7.7-5-9.1c-.7-1.5-1-2-1.4-3.3-.4-1.3-.8-2.8-1-3.2-.2-.4-.7-1.8-2-3s-1.6-1.5-2.3-2.4c-.7-.9-1.6-1.9-2.4-3.3-.8-1.4-4.2-4.9-4.2-4.9v2s5.5 6.2 6.2 6.8c.8.6 2.5 2 3.3 2.8.8.8 1.4 1.9 1.7 3.1.4 1.2 1 3.1 1.4 4.5 1.7 5.9 5.7 10 5.7 10z",
        fill: "url(#e)"
      }), external_React_default.a.createElement("path", {
        d: "M17.4 72.1s-.3-1.5-.3-3.1 0-2.2.1-3.6c.2-1.4.4-2.9.4-3.3 0-.4.1-1.9-.6-3.6-.7-1.7-.8-2.1-1.1-3.2-.3-1.1-.7-2.4-.8-4-.1-1.6-.1-1.9-.1-1.9l-1-.2s1 5.5 1.4 6.4c.4.9 1.5 2.9 1.8 3.9.3 1.1.5 2.3.3 3.6-.2 1.3-.4 3.3-.6 4.6-1 6.3.5 4.4.5 4.4zM50.3 52.7s-1.4-.3-2.8-.8-2-.7-3.2-1.2c-1.2-.5-2.5-1.2-2.9-1.3-.4-.1-1.7-.6-3.2-.7-1.5-.1-1.9-.1-2.9-.2s-2.2-.3-3.6-.7c-1.4-.4-1.6-.5-1.6-.5l-.3.6s5 1 5.8 1c.8 0 2.7-.1 3.7 0s2.1.4 3.2.9 2.8 1.3 4 1.8c5.4 2.6 3.8 1.1 3.8 1.1zM30.1 55.7s1.5-1.5 2.9-1.1c1.4.5 1.9.7 3.1 1.2 1.2.6 2.4 1.3 2.8 1.4.4.1 1.6.7 3.3.6 1.6-.1 2-.1 3.1 0s2.3.2 3.7.5c1.4.4 1.6.4 1.6.4l-.7-2.5s-3.9.8-4.8.9c-.9.1-2.9.4-4 .3-1 0-2.1-.3-3.2-.9-1-.5-2.7-1.4-3.8-2-5-2.4-4 1.2-4 1.2z",
        fill: "#78A7C0"
      }), external_React_default.a.createElement("path", {
        d: "M5.9 49.7s14.2-2.1 23.2 5.1c9 7.2 12.2 16.8 9.4 30.1h2.2c-.1 0 8.2-40.2-34.8-35.2z",
        fill: "#78A7C0"
      }), external_React_default.a.createElement("path", {
        d: "M7.4 34.3s8.7 2.2 12.1 6.5c3.4 4.4 8 11.7 8 11.7l2.3 1.3s-7.9-13.6-9.7-15.2c-2-1.7-9.3-5.5-12.7-6.7-3.4-1.2 0 2.4 0 2.4z",
        fill: "url(#f)"
      }), external_React_default.a.createElement("path", {
        d: "M64.2 61.2c-.7.3-1.3.7-1.3.7s-4 8.1-8.9 10.5c-5 2.4-13.1 5.4-13.1 5.4l-1.7 1.9s14.9-4.9 16.8-6.3c2.1-1.5 7.4-7.9 9.2-11 .2-.4.4-.7.4-.9-.5-.1-1-.2-1.4-.3z",
        fill: "#78A7C0"
      }), external_React_default.a.createElement("path", {
        d: "M52.7 36.2s6.5-1.1 9.6-3.3c3.1-2.2 7.5-6.1 7.4-8.8-.1-2.5-.2-10.1-.2-10.1l2.3-3s.4 9.2.1 11.7c-.3 2.6-2.9 13.4-19.2 13.5z",
        fill: "#D04A5D"
      }), external_React_default.a.createElement("path", {
        d: "M88.5 50.9s-3.1 5.8-6.1 8c-3.1 2.2-8.2 5.2-10.7 4.3-2.5-.9-21-7.2-21-7.2l-.7 2s17.2 6.2 19.7 6.8c2.4.5 13.5 1.5 18.8-13.9z",
        fill: "#78A7C0"
      }), external_React_default.a.createElement("path", {
        d: "M47.1 26.9s-3.7-.3-5.5-1.4c-1.7-1.1-4.2-3.1-4-4.6.2-1.5.5-5.7.5-5.7L37 13.5s-.6 5.2-.5 6.6c-.1 1.4 1 7.4 10.6 6.8z",
        fill: "#D04A5D"
      }), external_React_default.a.createElement("path", {
        d: "M22.6 80.9s2.5-6.2 4.7-8c2.2-1.8 6-3.8 7.7-1.9 1.7 2 5.1 5.8 5.1 5.8l.2-2.4s-2.1-3.2-3.8-4.7c-1.7-1.6-9.3-6.3-13.9 11.2z",
        fill: "#78A7C0"
      }), external_React_default.a.createElement("path", {
        d: "M32.8 21.9s1.4-3.5 1.2-5.5c-.2-2-.9-5.1-2.3-5.6s-5.4-2.1-5.4-2.1l-.9-1.8s4.9 1.8 6.1 2.5c1.3.6 6.1 4.2 1.3 12.5z",
        fill: "#D04A5D"
      })));
    }
  }]);

  return Logo;
}(external_React_default.a.Component);


// CONCATENATED MODULE: ./src/js/components/MobileHeader.js
function MobileHeader_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MobileHeader_typeof = function _typeof(obj) { return typeof obj; }; } else { MobileHeader_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MobileHeader_typeof(obj); }

function MobileHeader_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MobileHeader_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MobileHeader_createClass(Constructor, protoProps, staticProps) { if (protoProps) MobileHeader_defineProperties(Constructor.prototype, protoProps); if (staticProps) MobileHeader_defineProperties(Constructor, staticProps); return Constructor; }

function MobileHeader_possibleConstructorReturn(self, call) { if (call && (MobileHeader_typeof(call) === "object" || typeof call === "function")) { return call; } return MobileHeader_assertThisInitialized(self); }

function MobileHeader_getPrototypeOf(o) { MobileHeader_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MobileHeader_getPrototypeOf(o); }

function MobileHeader_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MobileHeader_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MobileHeader_setPrototypeOf(subClass, superClass); }

function MobileHeader_setPrototypeOf(o, p) { MobileHeader_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MobileHeader_setPrototypeOf(o, p); }

function MobileHeader_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var MobileHeader_MobileHeader =
/*#__PURE__*/
function (_React$Component) {
  MobileHeader_inherits(MobileHeader, _React$Component);

  function MobileHeader() {
    var _getPrototypeOf2;

    var _this;

    MobileHeader_classCallCheck(this, MobileHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = MobileHeader_possibleConstructorReturn(this, (_getPrototypeOf2 = MobileHeader_getPrototypeOf(MobileHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    MobileHeader_defineProperty(MobileHeader_assertThisInitialized(_this), "showMobileMenu", function () {
      _this.props.showMobileMenu(true);
    });

    return _this;
  }

  MobileHeader_createClass(MobileHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          className = _this$props.className;
      return external_React_default.a.createElement("div", {
        className: className
      }, external_React_default.a.createElement("h1", {
        className: 'title'
      }, external_React_default.a.createElement(external_ReactRouterDOM_["NavLink"], {
        to: '/'
      }, external_React_default.a.createElement(Logo_Logo, {
        className: 'logo'
      })), external_React_default.a.createElement("div", {
        className: 'text-wrapper'
      }, external_React_default.a.createElement(external_ReactRouterDOM_["NavLink"], {
        to: '/'
      }, external_React_default.a.createElement("span", {
        className: 'title-section-1 h4'
      }, title[0]), external_React_default.a.createElement("span", {
        className: 'title-section-2'
      }, title[1])))), external_React_default.a.createElement("button", {
        className: 'menu',
        onClick: this.showMobileMenu
      }, external_React_default.a.createElement(Hamburger_Hamburger, null)));
    }
  }]);

  return MobileHeader;
}(external_React_default.a.Component);

MobileHeader_defineProperty(MobileHeader_MobileHeader, "defaultProps", {
  showMobileMenu: function showMobileMenu() {},
  title: ['', '']
});

MobileHeader_defineProperty(MobileHeader_MobileHeader, "propTypes", {
  showMobileMenu: external_PropTypes_default.a.func,
  title: external_PropTypes_default.a.array
});


// EXTERNAL MODULE: ./src/js/components/Header.scss
var components_Header = __webpack_require__(44);

// CONCATENATED MODULE: ./src/js/components/Header.js
function Header_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Header_typeof = function _typeof(obj) { return typeof obj; }; } else { Header_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Header_typeof(obj); }

function Header_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Header_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Header_createClass(Constructor, protoProps, staticProps) { if (protoProps) Header_defineProperties(Constructor.prototype, protoProps); if (staticProps) Header_defineProperties(Constructor, staticProps); return Constructor; }

function Header_possibleConstructorReturn(self, call) { if (call && (Header_typeof(call) === "object" || typeof call === "function")) { return call; } return Header_assertThisInitialized(self); }

function Header_getPrototypeOf(o) { Header_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Header_getPrototypeOf(o); }

function Header_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Header_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Header_setPrototypeOf(subClass, superClass); }

function Header_setPrototypeOf(o, p) { Header_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Header_setPrototypeOf(o, p); }

function Header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var Header_Header =
/*#__PURE__*/
function (_React$PureComponent) {
  Header_inherits(Header, _React$PureComponent);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    Header_classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Header_possibleConstructorReturn(this, (_getPrototypeOf2 = Header_getPrototypeOf(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Header_defineProperty(Header_assertThisInitialized(_this), "state", {
      navItems: [],
      sticky: true,
      mobileMode: undefined
    });

    Header_defineProperty(Header_assertThisInitialized(_this), "nav", external_React_default.a.createRef());

    Header_defineProperty(Header_assertThisInitialized(_this), "bottom", undefined);

    Header_defineProperty(Header_assertThisInitialized(_this), "scrollEvent", function () {
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
    });

    Header_defineProperty(Header_assertThisInitialized(_this), "showMobileMenu", function () {
      _this.props.showMobileMenu(true);
    });

    Header_defineProperty(Header_assertThisInitialized(_this), "changedSize", function (val) {
      _this.props.changedSize(val);

      _this.setState({
        mobileMode: val
      });
    });

    return _this;
  }

  Header_createClass(Header, [{
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
      var _this$props = this.props,
          title = _this$props.title,
          headerPhoneNumber = _this$props.headerPhoneNumber,
          phoneTitle = _this$props.phoneTitle,
          enquiryLink = _this$props.enquiryLink,
          enquiryTitle = _this$props.enquiryTitle,
          searchPlaceholder = _this$props.searchPlaceholder;
      var _this$state = this.state,
          navItems = _this$state.navItems,
          sticky = _this$state.sticky,
          mobileMode = _this$state.mobileMode;
      return external_React_default.a.createElement("header", {
        className: external_classNames_default()('header', {
          'desktop-mode': !mobileMode
        })
      }, external_React_default.a.createElement("div", {
        className: external_classNames_default()('sticky-header', {
          sticky: !sticky
        })
      }, external_React_default.a.createElement(DesktopNav_DesktopNav, {
        sticky: true,
        changedSize: this.changedSize,
        navItems: navItems,
        searchPlaceholder: searchPlaceholder
      }), mobileMode && external_React_default.a.createElement(MobileHeader_MobileHeader, {
        className: 'mobile-header',
        title: title,
        showMobileMenu: this.showMobileMenu
      })), external_React_default.a.createElement(Container_Container, {
        outerWrap: true
      }, external_React_default.a.createElement("div", {
        className: 'inner-header'
      }, external_React_default.a.createElement(MobileHeader_MobileHeader, {
        className: 'desktop-inner-head',
        title: title,
        showMobileMenu: this.showMobileMenu
      }), external_React_default.a.createElement("div", {
        className: 'enquiry'
      }, external_React_default.a.createElement("p", null, phoneTitle, " ", external_React_default.a.createElement("br", null), ' ', external_React_default.a.createElement("a", {
        className: 'blue',
        href: "tel:".concat(headerPhoneNumber)
      }, headerPhoneNumber))), external_React_default.a.createElement("div", {
        className: 'make-enquiry'
      }, enquiryLink && enquiryTitle && external_React_default.a.createElement(components_Link, {
        to: enquiryLink.replace(location.origin, ''),
        className: 'red-button'
      }, enquiryTitle)))), external_React_default.a.createElement("div", {
        className: 'desktop-header-wrapper',
        ref: this.nav
      }, !mobileMode && mobileMode !== undefined && external_React_default.a.createElement(DesktopNav_DesktopNav, {
        navItems: navItems,
        searchPlaceholder: searchPlaceholder
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var newState = {};

      if (nextProps.navItems !== prevState.navItems && Header_typeof(nextProps.navItems) === 'object') {
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
}(external_React_default.a.PureComponent); //* Util *//


Header_defineProperty(Header_Header, "propTypes", {
  title: external_PropTypes_default.a.array,
  phoneTitle: external_PropTypes_default.a.string,
  phone: external_PropTypes_default.a.string,
  enquiryTitle: external_PropTypes_default.a.string,
  enquiryLink: external_PropTypes_default.a.string,
  navItems: external_PropTypes_default.a.array,
  searchPlaceholder: external_PropTypes_default.a.string,
  showMobileMenu: external_PropTypes_default.a.func,
  changedSize: external_PropTypes_default.a.func
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
// EXTERNAL MODULE: ./src/js/components/inputs/Button.scss
var inputs_Button = __webpack_require__(45);

// CONCATENATED MODULE: ./src/js/components/inputs/Button.js
function Button_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Button_typeof = function _typeof(obj) { return typeof obj; }; } else { Button_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Button_typeof(obj); }

function Button_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Button_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Button_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Button_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Button_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Button_createClass(Constructor, protoProps, staticProps) { if (protoProps) Button_defineProperties(Constructor.prototype, protoProps); if (staticProps) Button_defineProperties(Constructor, staticProps); return Constructor; }

function Button_possibleConstructorReturn(self, call) { if (call && (Button_typeof(call) === "object" || typeof call === "function")) { return call; } return Button_assertThisInitialized(self); }

function Button_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Button_getPrototypeOf(o) { Button_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Button_getPrototypeOf(o); }

function Button_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Button_setPrototypeOf(subClass, superClass); }

function Button_setPrototypeOf(o, p) { Button_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Button_setPrototypeOf(o, p); }




var Button_Button =
/*#__PURE__*/
function (_React$Component) {
  Button_inherits(Button, _React$Component);

  function Button() {
    Button_classCallCheck(this, Button);

    return Button_possibleConstructorReturn(this, Button_getPrototypeOf(Button).apply(this, arguments));
  }

  Button_createClass(Button, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          rest = Button_objectWithoutProperties(_this$props, ["children"]);

      return external_React_default.a.createElement("button", rest, children);
    }
  }]);

  return Button;
}(external_React_default.a.Component);


// EXTERNAL MODULE: ./src/js/components/Subscribe.scss
var components_Subscribe = __webpack_require__(46);

// CONCATENATED MODULE: ./src/js/components/Subscribe.js
function Subscribe_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Subscribe_typeof = function _typeof(obj) { return typeof obj; }; } else { Subscribe_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Subscribe_typeof(obj); }

function Subscribe_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Subscribe_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Subscribe_createClass(Constructor, protoProps, staticProps) { if (protoProps) Subscribe_defineProperties(Constructor.prototype, protoProps); if (staticProps) Subscribe_defineProperties(Constructor, staticProps); return Constructor; }

function Subscribe_possibleConstructorReturn(self, call) { if (call && (Subscribe_typeof(call) === "object" || typeof call === "function")) { return call; } return Subscribe_assertThisInitialized(self); }

function Subscribe_getPrototypeOf(o) { Subscribe_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Subscribe_getPrototypeOf(o); }

function Subscribe_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Subscribe_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Subscribe_setPrototypeOf(subClass, superClass); }

function Subscribe_setPrototypeOf(o, p) { Subscribe_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Subscribe_setPrototypeOf(o, p); }

function Subscribe_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Subscribe_formPath = '/wp-json/contact-form-7/v1/contact-forms/87/feedback';
var Subscribe_success = 'mail_sent';

var Subscribe_Subscribe =
/*#__PURE__*/
function (_React$Component) {
  Subscribe_inherits(Subscribe, _React$Component);

  function Subscribe() {
    var _getPrototypeOf2;

    var _this;

    Subscribe_classCallCheck(this, Subscribe);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Subscribe_possibleConstructorReturn(this, (_getPrototypeOf2 = Subscribe_getPrototypeOf(Subscribe)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Subscribe_defineProperty(Subscribe_assertThisInitialized(_this), "state", {
      email: '',
      submitted: false,
      message: ''
    });

    Subscribe_defineProperty(Subscribe_assertThisInitialized(_this), "onChange", function (e) {
      _this.setState(Subscribe_defineProperty({}, e.target.id, e.target.value));
    });

    Subscribe_defineProperty(Subscribe_assertThisInitialized(_this), "onSuccess", function (message) {
      _this.setState({
        submitted: true,
        message: message
      });
    });

    Subscribe_defineProperty(Subscribe_assertThisInitialized(_this), "onError", function () {});

    Subscribe_defineProperty(Subscribe_assertThisInitialized(_this), "successResponse", function (_ref) {
      var _ref$data = _ref.data,
          status = _ref$data.status,
          message = _ref$data.message;
      if (status === Subscribe_success) _this.onSuccess(message);else _this.onError();
    });

    Subscribe_defineProperty(Subscribe_assertThisInitialized(_this), "onSubmit", function (e) {
      e.preventDefault();
      var data = new FormData();
      data.set('your-email', _this.state.email);
      external_axios_default()({
        method: 'post',
        url: Subscribe_formPath,
        data: data,
        config: {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      }).then(_this.successResponse).catch(_this.onError);
    });

    return _this;
  }

  Subscribe_createClass(Subscribe, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          buttonText = _this$props.buttonText,
          subscribePlaceholder = _this$props.subscribePlaceholder;
      var _this$state = this.state,
          message = _this$state.message,
          submitted = _this$state.submitted;
      return external_React_default.a.createElement(Container_Container, {
        padding: false,
        col: true,
        className: 'subscribe'
      }, external_React_default.a.createElement("h2", null, title), !submitted && external_React_default.a.createElement("form", {
        onSubmit: this.onSubmit,
        className: 'form'
      }, subscribePlaceholder && external_React_default.a.createElement(TypedInput_TypedInput, {
        onChange: this.onChange,
        placeholder: subscribePlaceholder,
        id: 'email',
        label: 'email-address',
        type: 'email',
        required: true,
        className: 'text-input'
      }), buttonText && external_React_default.a.createElement(Button_Button, {
        type: 'submit',
        className: 'button'
      }, buttonText)), submitted && external_React_default.a.createElement("p", {
        className: 'h3'
      }, message));
    }
  }]);

  return Subscribe;
}(external_React_default.a.Component);

Subscribe_defineProperty(Subscribe_Subscribe, "propTypes", {
  title: external_PropTypes_default.a.string,
  buttonText: external_PropTypes_default.a.string,
  subscribePlaceholder: external_PropTypes_default.a.string
});


// EXTERNAL MODULE: ./src/js/components/Social.scss
var components_Social = __webpack_require__(47);

// CONCATENATED MODULE: ./src/js/components/Social.js
function Social_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Social_typeof = function _typeof(obj) { return typeof obj; }; } else { Social_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Social_typeof(obj); }

function Social_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Social_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Social_createClass(Constructor, protoProps, staticProps) { if (protoProps) Social_defineProperties(Constructor.prototype, protoProps); if (staticProps) Social_defineProperties(Constructor, staticProps); return Constructor; }

function Social_possibleConstructorReturn(self, call) { if (call && (Social_typeof(call) === "object" || typeof call === "function")) { return call; } return Social_assertThisInitialized(self); }

function Social_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Social_getPrototypeOf(o) { Social_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Social_getPrototypeOf(o); }

function Social_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Social_setPrototypeOf(subClass, superClass); }

function Social_setPrototypeOf(o, p) { Social_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Social_setPrototypeOf(o, p); }

function Social_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Social_Social =
/*#__PURE__*/
function (_React$Component) {
  Social_inherits(Social, _React$Component);

  function Social() {
    Social_classCallCheck(this, Social);

    return Social_possibleConstructorReturn(this, Social_getPrototypeOf(Social).apply(this, arguments));
  }

  Social_createClass(Social, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          icons = _this$props.icons;
      return external_React_default.a.createElement(Container_Container, {
        className: 'social',
        col: false
      }, external_React_default.a.createElement("h2", null, title), external_React_default.a.createElement("ul", {
        className: 'list'
      }, icons.length > 0 && icons.map(function (_ref, i) {
        var link = _ref.link,
            icon = _ref.icon;
        return external_React_default.a.createElement("li", {
          key: i,
          className: 'link'
        }, external_React_default.a.createElement("a", {
          href: link
        }, icon && external_React_default.a.createElement("img", {
          src: icon.url
        })));
      })));
    }
  }]);

  return Social;
}(external_React_default.a.Component);

Social_defineProperty(Social_Social, "defaultProps", {
  icons: []
});

Social_defineProperty(Social_Social, "propTypes", {
  title: external_PropTypes_default.a.string
});


// EXTERNAL MODULE: ./src/js/components/ContactUs.scss
var components_ContactUs = __webpack_require__(48);

// CONCATENATED MODULE: ./src/js/components/ContactUs.js
function components_ContactUs_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { components_ContactUs_typeof = function _typeof(obj) { return typeof obj; }; } else { components_ContactUs_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return components_ContactUs_typeof(obj); }

function components_ContactUs_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function components_ContactUs_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function components_ContactUs_createClass(Constructor, protoProps, staticProps) { if (protoProps) components_ContactUs_defineProperties(Constructor.prototype, protoProps); if (staticProps) components_ContactUs_defineProperties(Constructor, staticProps); return Constructor; }

function components_ContactUs_possibleConstructorReturn(self, call) { if (call && (components_ContactUs_typeof(call) === "object" || typeof call === "function")) { return call; } return components_ContactUs_assertThisInitialized(self); }

function components_ContactUs_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function components_ContactUs_getPrototypeOf(o) { components_ContactUs_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return components_ContactUs_getPrototypeOf(o); }

function components_ContactUs_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) components_ContactUs_setPrototypeOf(subClass, superClass); }

function components_ContactUs_setPrototypeOf(o, p) { components_ContactUs_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return components_ContactUs_setPrototypeOf(o, p); }

function components_ContactUs_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var components_ContactUs_ContactUs =
/*#__PURE__*/
function (_React$Component) {
  components_ContactUs_inherits(ContactUs, _React$Component);

  function ContactUs() {
    components_ContactUs_classCallCheck(this, ContactUs);

    return components_ContactUs_possibleConstructorReturn(this, components_ContactUs_getPrototypeOf(ContactUs).apply(this, arguments));
  }

  components_ContactUs_createClass(ContactUs, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          types = _this$props.types;
      return external_React_default.a.createElement(Container_Container, {
        padding: false,
        className: 'contact-us'
      }, external_React_default.a.createElement("h2", null, title), external_React_default.a.createElement("ul", {
        className: 'list'
      }, types && types.map(function (_ref, i) {
        var type = _ref.type,
            label = _ref.label,
            detail = _ref.detail;
        return external_React_default.a.createElement("li", {
          key: i,
          className: 'item'
        }, label, ":", ' ', type !== 'addr' && external_React_default.a.createElement("a", {
          className: 'link',
          href: "".concat(type, ":").concat(detail)
        }, detail), type === 'addr' && external_React_default.a.createElement("p", {
          className: 'link'
        }, detail));
      })));
    }
  }]);

  return ContactUs;
}(external_React_default.a.Component);

components_ContactUs_defineProperty(components_ContactUs_ContactUs, "defaultProps", {
  title: '',
  types: []
});

components_ContactUs_defineProperty(components_ContactUs_ContactUs, "propTypes", {
  title: external_PropTypes_default.a.string,
  types: external_PropTypes_default.a.arrayOf(external_PropTypes_default.a.object)
});


// CONCATENATED MODULE: ./src/js/components/grid/ThirdsContainer.js
function ThirdsContainer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ThirdsContainer_typeof = function _typeof(obj) { return typeof obj; }; } else { ThirdsContainer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ThirdsContainer_typeof(obj); }

function ThirdsContainer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ThirdsContainer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ThirdsContainer_createClass(Constructor, protoProps, staticProps) { if (protoProps) ThirdsContainer_defineProperties(Constructor.prototype, protoProps); if (staticProps) ThirdsContainer_defineProperties(Constructor, staticProps); return Constructor; }

function ThirdsContainer_possibleConstructorReturn(self, call) { if (call && (ThirdsContainer_typeof(call) === "object" || typeof call === "function")) { return call; } return ThirdsContainer_assertThisInitialized(self); }

function ThirdsContainer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ThirdsContainer_getPrototypeOf(o) { ThirdsContainer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ThirdsContainer_getPrototypeOf(o); }

function ThirdsContainer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ThirdsContainer_setPrototypeOf(subClass, superClass); }

function ThirdsContainer_setPrototypeOf(o, p) { ThirdsContainer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ThirdsContainer_setPrototypeOf(o, p); }

function ThirdsContainer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var ThirdsContainer_ThirdsContainer =
/*#__PURE__*/
function (_React$Component) {
  ThirdsContainer_inherits(ThirdsContainer, _React$Component);

  function ThirdsContainer() {
    ThirdsContainer_classCallCheck(this, ThirdsContainer);

    return ThirdsContainer_possibleConstructorReturn(this, ThirdsContainer_getPrototypeOf(ThirdsContainer).apply(this, arguments));
  }

  ThirdsContainer_createClass(ThirdsContainer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          sizes = _this$props.sizes,
          colClass = _this$props.colClass,
          className = _this$props.className;
      var colClasses = Object.keys(sizes).map(function (size) {
        return "col-".concat(size, "-").concat(sizes[size]);
      });
      return external_React_default.a.createElement(Container_Container, {
        className: className,
        outerWrap: true,
        col: false
      }, external_React_default.a.createElement("div", {
        className: external_classNames_default()(colClasses, colClass)
      }, children[0]), external_React_default.a.createElement("div", {
        className: external_classNames_default()(colClasses, colClass)
      }, children[1]), external_React_default.a.createElement("div", {
        className: external_classNames_default()(colClasses, colClass)
      }, children[2]));
    }
  }]);

  return ThirdsContainer;
}(external_React_default.a.Component);

ThirdsContainer_defineProperty(ThirdsContainer_ThirdsContainer, "defaultProps", {
  sizes: {
    xs: 12,
    sm: 4,
    md: 4,
    lg: 4,
    xl: 4
  }
});

ThirdsContainer_defineProperty(ThirdsContainer_ThirdsContainer, "propTypes", {
  sizes: external_PropTypes_default.a.object,
  className: external_PropTypes_default.a.string,
  colClass: external_PropTypes_default.a.string
});


// EXTERNAL MODULE: ./src/js/components/Footer.scss
var components_Footer = __webpack_require__(49);

// CONCATENATED MODULE: ./src/js/components/Footer.js
function Footer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Footer_typeof = function _typeof(obj) { return typeof obj; }; } else { Footer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Footer_typeof(obj); }

function Footer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Footer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Footer_createClass(Constructor, protoProps, staticProps) { if (protoProps) Footer_defineProperties(Constructor.prototype, protoProps); if (staticProps) Footer_defineProperties(Constructor, staticProps); return Constructor; }

function Footer_possibleConstructorReturn(self, call) { if (call && (Footer_typeof(call) === "object" || typeof call === "function")) { return call; } return Footer_assertThisInitialized(self); }

function Footer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Footer_getPrototypeOf(o) { Footer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Footer_getPrototypeOf(o); }

function Footer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Footer_setPrototypeOf(subClass, superClass); }

function Footer_setPrototypeOf(o, p) { Footer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Footer_setPrototypeOf(o, p); }

function Footer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var Footer_Footer =
/*#__PURE__*/
function (_React$Component) {
  Footer_inherits(Footer, _React$Component);

  function Footer() {
    Footer_classCallCheck(this, Footer);

    return Footer_possibleConstructorReturn(this, Footer_getPrototypeOf(Footer).apply(this, arguments));
  }

  Footer_createClass(Footer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          contactDetails = _this$props.contactDetails,
          subscribeTitle = _this$props.subscribeTitle,
          subscribePlaceholder = _this$props.subscribePlaceholder,
          subscribeButton = _this$props.subscribeButton,
          socialLinks = _this$props.socialLinks,
          socialTitle = _this$props.socialTitle,
          contactTitle = _this$props.contactTitle,
          smallFooterLink = _this$props.smallFooterLink;
      return external_React_default.a.createElement("footer", {
        className: 'footer'
      }, external_React_default.a.createElement(ThirdsContainer_ThirdsContainer, null, external_React_default.a.createElement("div", {
        className: 'footer-cols'
      }, external_React_default.a.createElement(components_ContactUs_ContactUs, {
        title: contactTitle,
        types: contactDetails || undefined
      })), (socialTitle || '').trim() && external_React_default.a.createElement("div", {
        className: 'footer-cols'
      }, external_React_default.a.createElement(Social_Social, {
        title: socialTitle,
        icons: socialLinks
      })), (subscribeTitle || '').trim() && external_React_default.a.createElement("div", {
        className: 'footer-cols'
      }, external_React_default.a.createElement(Subscribe_Subscribe, {
        buttonText: subscribeButton,
        subscribePlaceholder: subscribePlaceholder,
        title: subscribeTitle
      }))), external_React_default.a.createElement("div", {
        className: 'privacy-container'
      }, external_React_default.a.createElement(ThirdsContainer_ThirdsContainer, null, external_React_default.a.createElement("div", {
        className: 'privacy'
      }, smallFooterLink && external_React_default.a.createElement(external_ReactRouterDOM_["Link"], {
        to: smallFooterLink.url.replace(location.origin, '') || '/'
      }, smallFooterLink.title || 'Disclaimer and Privacy Policy')), external_React_default.a.createElement("div", null), external_React_default.a.createElement("div", null))));
    }
  }]);

  return Footer;
}(external_React_default.a.Component);

Footer_defineProperty(Footer_Footer, "propTypes", {
  contactDetails: external_PropTypes_default.a.array,
  subscribeTitle: external_PropTypes_default.a.string,
  subscribePlaceholder: external_PropTypes_default.a.string,
  subscribeButton: external_PropTypes_default.a.string,
  socialLinks: external_PropTypes_default.a.array,
  socialTitle: external_PropTypes_default.a.string,
  contactTitle: external_PropTypes_default.a.string,
  privacyLink: external_PropTypes_default.a.string,
  privacyLinkText: external_PropTypes_default.a.string
});


// CONCATENATED MODULE: ./src/js/components/icon/Close.js
function Close_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Close_typeof = function _typeof(obj) { return typeof obj; }; } else { Close_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Close_typeof(obj); }

function Close_extends() { Close_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Close_extends.apply(this, arguments); }

function Close_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Close_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Close_createClass(Constructor, protoProps, staticProps) { if (protoProps) Close_defineProperties(Constructor.prototype, protoProps); if (staticProps) Close_defineProperties(Constructor, staticProps); return Constructor; }

function Close_possibleConstructorReturn(self, call) { if (call && (Close_typeof(call) === "object" || typeof call === "function")) { return call; } return Close_assertThisInitialized(self); }

function Close_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Close_getPrototypeOf(o) { Close_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Close_getPrototypeOf(o); }

function Close_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Close_setPrototypeOf(subClass, superClass); }

function Close_setPrototypeOf(o, p) { Close_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Close_setPrototypeOf(o, p); }


var Close_Close =
/*#__PURE__*/
function (_React$Component) {
  Close_inherits(Close, _React$Component);

  function Close() {
    Close_classCallCheck(this, Close);

    return Close_possibleConstructorReturn(this, Close_getPrototypeOf(Close).apply(this, arguments));
  }

  Close_createClass(Close, [{
    key: "render",
    value: function render() {
      return external_React_default.a.createElement("svg", Close_extends({}, this.props, {
        viewBox: "0 0 16 16"
      }), external_React_default.a.createElement("g", {
        id: "Page-1",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd"
      }, external_React_default.a.createElement("g", {
        id: "320-DP-MyProperty-Hub---Trans-closed-Copy-5",
        transform: "translate(-280.000000, -24.000000)"
      }, external_React_default.a.createElement("g", {
        id: "iconClose",
        transform: "translate(276.000000, 20.000000)"
      }, external_React_default.a.createElement("polygon", {
        id: "boundingBox",
        points: "24 0 0 0 0 24 24 24 24 0"
      }), external_React_default.a.createElement("path", {
        d: "M6,18 L18,6",
        id: "Line",
        stroke: "currentColor",
        strokeWidth: "2",
        strokeLinecap: "square"
      }), external_React_default.a.createElement("path", {
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
}(external_React_default.a.Component);
// EXTERNAL MODULE: ./src/js/components/MobileNav.scss
var components_MobileNav = __webpack_require__(50);

// CONCATENATED MODULE: ./src/js/components/MobileNav.js
function MobileNav_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MobileNav_typeof = function _typeof(obj) { return typeof obj; }; } else { MobileNav_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MobileNav_typeof(obj); }

function MobileNav_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function MobileNav_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function MobileNav_createClass(Constructor, protoProps, staticProps) { if (protoProps) MobileNav_defineProperties(Constructor.prototype, protoProps); if (staticProps) MobileNav_defineProperties(Constructor, staticProps); return Constructor; }

function MobileNav_possibleConstructorReturn(self, call) { if (call && (MobileNav_typeof(call) === "object" || typeof call === "function")) { return call; } return MobileNav_assertThisInitialized(self); }

function MobileNav_getPrototypeOf(o) { MobileNav_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MobileNav_getPrototypeOf(o); }

function MobileNav_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MobileNav_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MobileNav_setPrototypeOf(subClass, superClass); }

function MobileNav_setPrototypeOf(o, p) { MobileNav_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MobileNav_setPrototypeOf(o, p); }

function MobileNav_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var MobileNav_MobileNav =
/*#__PURE__*/
function (_React$Component) {
  MobileNav_inherits(MobileNav, _React$Component);

  function MobileNav() {
    var _getPrototypeOf2;

    var _this;

    MobileNav_classCallCheck(this, MobileNav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = MobileNav_possibleConstructorReturn(this, (_getPrototypeOf2 = MobileNav_getPrototypeOf(MobileNav)).call.apply(_getPrototypeOf2, [this].concat(args)));

    MobileNav_defineProperty(MobileNav_assertThisInitialized(_this), "closeMenu", function () {
      return _this.props.closeMenu(false);
    });

    return _this;
  }

  MobileNav_createClass(MobileNav, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          searchPlaceholder = _this$props.searchPlaceholder,
          navItems = _this$props.navItems,
          visible = _this$props.visible;
      return external_React_default.a.createElement("nav", {
        className: external_classNames_default()('mobile-nav', {
          visible: visible
        })
      }, external_React_default.a.createElement(Container_Container, null, external_React_default.a.createElement("div", {
        className: 'close-wrapper'
      }, external_React_default.a.createElement("button", {
        onClick: this.closeMenu,
        className: 'button'
      }, external_React_default.a.createElement(Close_Close, {
        className: 'close-icon'
      }))), external_React_default.a.createElement(js_components_SearchInput, {
        searchPlaceholder: searchPlaceholder
      }), this.renderMenu(navItems)));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu(navItems) {
      var _this2 = this;

      return external_React_default.a.createElement("ul", null, navItems.map(function (_ref) {
        var url = _ref.url,
            title = _ref.title,
            id = _ref.ID,
            children = _ref.children;
        return external_React_default.a.createElement("li", {
          key: id
        }, url !== 'http://undefined' && external_React_default.a.createElement(components_Link, {
          noParentMatch: true,
          to: url.replace(location.origin, '') || '/',
          onClick: _this2.closeMenu
        }, title.toUpperCase()), url === 'http://undefined' && external_React_default.a.createElement("a", null, title.toUpperCase()), children && _this2.renderMenu(children));
      }));
    }
  }]);

  return MobileNav;
}(external_React_default.a.Component);

MobileNav_defineProperty(MobileNav_MobileNav, "propTypes", {
  navItems: external_PropTypes_default.a.array,
  searchPlaceholder: external_PropTypes_default.a.string,
  closeMenu: external_PropTypes_default.a.func,
  visible: external_PropTypes_default.a.bool
});

MobileNav_defineProperty(MobileNav_MobileNav, "defaultProps", {
  navItems: [],
  searchPlaceholder: 'Search',
  closeMenu: function closeMenu() {}
});


// CONCATENATED MODULE: ./src/js/templates/Base.js
function Base_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Base_typeof = function _typeof(obj) { return typeof obj; }; } else { Base_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Base_typeof(obj); }

function Base_extends() { Base_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Base_extends.apply(this, arguments); }

function Base_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Base_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Base_createClass(Constructor, protoProps, staticProps) { if (protoProps) Base_defineProperties(Constructor.prototype, protoProps); if (staticProps) Base_defineProperties(Constructor, staticProps); return Constructor; }

function Base_possibleConstructorReturn(self, call) { if (call && (Base_typeof(call) === "object" || typeof call === "function")) { return call; } return Base_assertThisInitialized(self); }

function Base_getPrototypeOf(o) { Base_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Base_getPrototypeOf(o); }

function Base_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Base_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Base_setPrototypeOf(subClass, superClass); }

function Base_setPrototypeOf(o, p) { Base_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Base_setPrototypeOf(o, p); }

function Base_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var searchPage = {
  title: {
    rendered: 'Search'
  },
  excerpt: {
    rendered: 'Search Page'
  }
};

var Base_Base =
/*#__PURE__*/
function (_React$Component) {
  Base_inherits(Base, _React$Component);

  function Base() {
    var _getPrototypeOf2;

    var _this;

    Base_classCallCheck(this, Base);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Base_possibleConstructorReturn(this, (_getPrototypeOf2 = Base_getPrototypeOf(Base)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Base_defineProperty(Base_assertThisInitialized(_this), "state", {
      mobileMenu: false,
      page: undefined,
      mobileMode: undefined
    });

    Base_defineProperty(Base_assertThisInitialized(_this), "onClick", function (val) {
      _this.setState({
        mobileMenu: val
      });

      _this.props.mobileNavOpen(val);
    });

    Base_defineProperty(Base_assertThisInitialized(_this), "changedSize", function (val) {
      _this.setState({
        mobileMode: val
      });
    });

    Base_defineProperty(Base_assertThisInitialized(_this), "onLocationChange", function () {
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
    });

    return _this;
  }

  Base_createClass(Base, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var history = this.props.history;
      history.listen(this.onLocationChange);
      this.onLocationChange();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          primaryNavigation = _this$props.primaryNavigation,
          header = _this$props.header,
          footer = _this$props.footer;
      var _this$state = this.state,
          page = _this$state.page,
          mobileMenu = _this$state.mobileMenu,
          mobileMode = _this$state.mobileMode;
      return external_React_default.a.createElement(external_React_default.a.Fragment, null, page && external_React_default.a.createElement(Helmet["Helmet"], null, external_React_default.a.createElement("title", null, page.title.rendered), external_React_default.a.createElement("meta", {
        name: "description",
        content: stripHtmlTags(page.excerpt.rendered)
      })), this.state.mobileMode && external_React_default.a.createElement(MobileNav_MobileNav, {
        visible: mobileMenu,
        navItems: primaryNavigation,
        closeMenu: this.onClick
      }), external_React_default.a.createElement(Header_Header, Base_extends({
        changedSize: this.changedSize,
        title: CONFIG.SITE_NAME.toUpperCase().split(' '),
        showMobileMenu: this.onClick,
        navItems: primaryNavigation
      }, header)), external_React_default.a.createElement("div", {
        className: external_classNames_default()('content-wrapper', {
          'nav-open': mobileMenu && mobileMode
        })
      }, children), external_React_default.a.createElement(Footer_Footer, footer));
    }
  }]);

  return Base;
}(external_React_default.a.Component);

Base_defineProperty(Base_Base, "propTypes", {
  mobileNavOpen: external_PropTypes_default.a.func
});

/* harmony default export */ var templates_Base = (Object(external_ReactRouterDOM_["withRouter"])(Store_withConsumer(Base_Base)));
// EXTERNAL MODULE: ./src/js/components/SearchResult.scss
var components_SearchResult = __webpack_require__(51);

// CONCATENATED MODULE: ./src/js/components/SearchResult.js
function SearchResult_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SearchResult_typeof = function _typeof(obj) { return typeof obj; }; } else { SearchResult_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SearchResult_typeof(obj); }

function SearchResult_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SearchResult_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SearchResult_createClass(Constructor, protoProps, staticProps) { if (protoProps) SearchResult_defineProperties(Constructor.prototype, protoProps); if (staticProps) SearchResult_defineProperties(Constructor, staticProps); return Constructor; }

function SearchResult_possibleConstructorReturn(self, call) { if (call && (SearchResult_typeof(call) === "object" || typeof call === "function")) { return call; } return SearchResult_assertThisInitialized(self); }

function SearchResult_getPrototypeOf(o) { SearchResult_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SearchResult_getPrototypeOf(o); }

function SearchResult_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SearchResult_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SearchResult_setPrototypeOf(subClass, superClass); }

function SearchResult_setPrototypeOf(o, p) { SearchResult_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SearchResult_setPrototypeOf(o, p); }

function SearchResult_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var SearchResult_SearchResult =
/*#__PURE__*/
function (_React$Component) {
  SearchResult_inherits(SearchResult, _React$Component);

  function SearchResult() {
    var _getPrototypeOf2;

    var _this;

    SearchResult_classCallCheck(this, SearchResult);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = SearchResult_possibleConstructorReturn(this, (_getPrototypeOf2 = SearchResult_getPrototypeOf(SearchResult)).call.apply(_getPrototypeOf2, [this].concat(args)));

    SearchResult_defineProperty(SearchResult_assertThisInitialized(_this), "state", {
      content: undefined,
      regex: undefined
    });

    return _this;
  }

  SearchResult_createClass(SearchResult, [{
    key: "render",
    value: function render() {
      var page = this.props.page;
      if (!page) return false;
      var resultTitle = page.title,
          link = page.link;
      var _this$state = this.state,
          snippets = _this$state.snippets,
          regex = _this$state.regex;
      return external_React_default.a.createElement(Container_Container, {
        className: 'search-result'
      }, external_React_default.a.createElement(components_Link, {
        to: link.replace(location.origin, ''),
        className: 'search-card'
      }, external_React_default.a.createElement("h3", {
        className: 'h5'
      }, resultTitle.rendered), snippets.map(function (snippet, i) {
        snippet = snippet.trim().replace(regex, "<b>$1</b>");
        return external_React_default.a.createElement("p", {
          key: i
        }, "...", external_React_default.a.createElement("span", {
          dangerouslySetInnerHTML: {
            __html: snippet
          }
        }), "...");
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref, nextState) {
      var page = _ref.page,
          searchTerm = _ref.searchTerm;

      if (!page || !searchTerm) {
        return {
          page: undefined
        };
      }

      var content = stripHtmlTags(page.content.rendered);
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
}(external_React_default.a.Component);

SearchResult_defineProperty(SearchResult_SearchResult, "propTypes", {
  page: external_PropTypes_default.a.object,
  searchTerm: external_PropTypes_default.a.string
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
// EXTERNAL MODULE: ./src/js/pages/Search.scss
var pages_Search = __webpack_require__(52);

// CONCATENATED MODULE: ./src/js/pages/Search.js
function Search_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Search_typeof = function _typeof(obj) { return typeof obj; }; } else { Search_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Search_typeof(obj); }

function Search_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Search_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Search_createClass(Constructor, protoProps, staticProps) { if (protoProps) Search_defineProperties(Constructor.prototype, protoProps); if (staticProps) Search_defineProperties(Constructor, staticProps); return Constructor; }

function Search_possibleConstructorReturn(self, call) { if (call && (Search_typeof(call) === "object" || typeof call === "function")) { return call; } return Search_assertThisInitialized(self); }

function Search_getPrototypeOf(o) { Search_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Search_getPrototypeOf(o); }

function Search_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Search_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Search_setPrototypeOf(subClass, superClass); }

function Search_setPrototypeOf(o, p) { Search_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Search_setPrototypeOf(o, p); }

function Search_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var searchPath = "".concat(location.origin, "/wp-json/wp/v2/pages?search=");

var Search_Search =
/*#__PURE__*/
function (_React$Component) {
  Search_inherits(Search, _React$Component);

  function Search(props) {
    var _getPrototypeOf2;

    var _this;

    Search_classCallCheck(this, Search);

    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    _this = Search_possibleConstructorReturn(this, (_getPrototypeOf2 = Search_getPrototypeOf(Search)).call.apply(_getPrototypeOf2, [this, props].concat(rest)));

    Search_defineProperty(Search_assertThisInitialized(_this), "locationListener", undefined);

    Search_defineProperty(Search_assertThisInitialized(_this), "onSubmit", function (e) {
      e.preventDefault();
      var _this$props = _this.props,
          pathname = _this$props.location.pathname,
          history = _this$props.history;
      var inputVal = _this.state.inputVal;
      history.push({
        pathname: pathname,
        search: "?query=".concat(inputVal)
      });
    });

    Search_defineProperty(Search_assertThisInitialized(_this), "onChange", function (e) {
      _this.setState({
        inputVal: e.target.value
      });
    });

    Search_defineProperty(Search_assertThisInitialized(_this), "onLocationChange", function () {
      var searchTerm = location.search.replace('?query=', '');

      _this.performSearch(searchTerm);
    });

    var _searchTerm = _this.props.location.search.replace('?query=', '');

    _this.state = {
      result: [],
      searchTerm: _searchTerm,
      inputVal: _searchTerm
    };
    return _this;
  }

  Search_createClass(Search, [{
    key: "performSearch",
    value: function performSearch(searchTerm) {
      var _this2 = this;

      if (searchTerm) {
        external_axios_default.a.get("".concat(searchPath).concat(searchTerm)).then(function (result) {
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
      var _this$state = this.state,
          result = _this$state.result,
          searchTerm = _this$state.searchTerm,
          inputVal = _this$state.inputVal;
      var _this$props2 = this.props,
          title = _this$props2.title,
          searchPlaceholder = _this$props2.searchPlaceholder,
          buttonText = _this$props2.buttonText;
      return external_React_default.a.createElement(Container_Container, {
        className: 'search-page',
        outerWrap: true
      }, external_React_default.a.createElement("h2", {
        className: 'h1'
      }, title.rendered), external_React_default.a.createElement("form", {
        onSubmit: this.onSubmit,
        className: 'form'
      }, external_React_default.a.createElement(TypedInput_TypedInput, {
        onChange: this.onChange,
        placeholder: searchPlaceholder,
        id: 'email',
        label: 'email-address',
        type: 'search',
        required: true,
        value: inputVal,
        className: 'text-input'
      }), external_React_default.a.createElement(Button_Button, {
        type: 'submit',
        className: 'button'
      }, buttonText)), result.map(function (page) {
        return external_React_default.a.createElement(SearchResult_SearchResult, {
          key: page.id,
          page: page,
          searchTerm: searchTerm
        });
      }), result.length === 0 && external_React_default.a.createElement("h3", {
        className: 'no-results'
      }, "No results found"));
    }
  }]);

  return Search;
}(external_React_default.a.Component);

Search_defineProperty(Search_Search, "propTypes", {
  title: external_PropTypes_default.a.object,
  searchPlaceholder: external_PropTypes_default.a.string,
  buttonText: external_PropTypes_default.a.string
});

Search_defineProperty(Search_Search, "defaultProps", {
  title: {
    rendered: 'Search Results'
  },
  searchPlaceholder: 'Search',
  buttonText: 'Search'
});

/* harmony default export */ var js_pages_Search = (Object(external_ReactRouterDOM_["withRouter"])(Search_Search));
// CONCATENATED MODULE: ./src/js/App.js
function App_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { App_typeof = function _typeof(obj) { return typeof obj; }; } else { App_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return App_typeof(obj); }

function App_extends() { App_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return App_extends.apply(this, arguments); }

function App_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = App_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function App_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function App_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function App_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function App_createClass(Constructor, protoProps, staticProps) { if (protoProps) App_defineProperties(Constructor.prototype, protoProps); if (staticProps) App_defineProperties(Constructor, staticProps); return Constructor; }

function App_possibleConstructorReturn(self, call) { if (call && (App_typeof(call) === "object" || typeof call === "function")) { return call; } return App_assertThisInitialized(self); }

function App_getPrototypeOf(o) { App_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return App_getPrototypeOf(o); }

function App_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function App_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) App_setPrototypeOf(subClass, superClass); }

function App_setPrototypeOf(o, p) { App_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return App_setPrototypeOf(o, p); }

function App_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















var templates = {
  'home.php': js_pages_Home,
  'faq.php': Faq_Faq,
  'news.php': js_pages_News,
  'contact-us.php': js_pages_ContactUs,
  'news-post.php': NewsPost_NewsPost,
  'case-study.php': Page_Page
};

var App_App =
/*#__PURE__*/
function (_React$Component) {
  App_inherits(App, _React$Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    App_classCallCheck(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = App_possibleConstructorReturn(this, (_getPrototypeOf2 = App_getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    App_defineProperty(App_assertThisInitialized(_this), "state", {
      mounted: false,
      navOpen: false
    });

    App_defineProperty(App_assertThisInitialized(_this), "pageRoutes", function (pages) {
      return pages.map(function (page, i) {
        var acf = page.acf,
            template = page.template,
            link = page.link,
            rest = App_objectWithoutProperties(page, ["acf", "template", "link"]);

        return external_React_default.a.createElement(external_ReactRouterDOM_["Route"], {
          key: i,
          component: function component() {
            var Template = templates[template] || Page_Page;
            return external_React_default.a.createElement(Template, App_extends({}, rest, acf));
          },
          exact: true,
          path: "".concat(link.replace(location.origin, ''))
        });
      });
    });

    App_defineProperty(App_assertThisInitialized(_this), "mobileNavOpen", function (val) {
      return _this.setState({
        navOpen: val
      });
    });

    return _this;
  }

  App_createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getInit();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          globalOptions = _this$props.globalOptions,
          primaryNavigation = _this$props.primaryNavigation;
      var _this$state = this.state,
          mounted = _this$state.mounted,
          navOpen = _this$state.navOpen;
      return external_React_default.a.createElement(external_ReactRouterDOM_["BrowserRouter"], null, external_React_default.a.createElement("div", {
        className: external_classNames_default()('root', {
          'nav-open': navOpen
        }),
        style: {
          opacity: mounted ? '1' : '0'
        }
      }, external_React_default.a.createElement(templates_Base, App_extends({}, globalOptions, {
        primaryNavigation: primaryNavigation,
        mobileNavOpen: this.mobileNavOpen
      }), external_React_default.a.createElement(external_ReactRouterDOM_["Switch"], null, this.pageRoutes(this.props.pages), external_React_default.a.createElement(external_ReactRouterDOM_["Route"], {
        component: function component() {
          return external_React_default.a.createElement(js_pages_Search, globalOptions);
        },
        exact: true,
        path: '/search'
      }), external_React_default.a.createElement(external_ReactRouterDOM_["Route"], {
        path: "*",
        component: function component() {
          return external_React_default.a.createElement(external_React_default.a.Fragment, null, external_React_default.a.createElement(Banner_Banner, {
            titleContent: '<h2>Page Not Found...</h2>'
          }), external_React_default.a.createElement(Container_Container, null, external_React_default.a.createElement("h3", null, external_React_default.a.createElement("br", null), "Sorry this page is not available. Click ", external_React_default.a.createElement(components_Link, {
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
}(external_React_default.a.Component);

App_defineProperty(App_App, "propTypes", {
  getPages: external_PropTypes_default.a.func,
  getPrimaryNavigation: external_PropTypes_default.a.func,
  getGlobalOptions: external_PropTypes_default.a.func,
  getInit: external_PropTypes_default.a.func
});

App_defineProperty(App_App, "defaultProps", {
  pages: [],
  posts: [],
  primaryNavigation: [],
  globalOptions: []
});

/* harmony default export */ var js_App = (Store_withConsumer(App_App));
// CONCATENATED MODULE: ./src/js/index.js




Object(external_ReactDOM_["render"])(external_React_default.a.createElement(Store_Store, null, external_React_default.a.createElement(js_App, null)), document.getElementById('app'));
// EXTERNAL MODULE: ./src/scss/index.scss
var scss = __webpack_require__(53);

// CONCATENATED MODULE: ./src/main.js



/***/ })
/******/ ]);
});