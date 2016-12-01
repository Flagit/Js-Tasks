/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _logger = __webpack_require__(1);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//var log = new Logger('MyLog');
	var log2 = new ExtendedLogger('22 22 22', 'MyLog222');

	//log.toConsole("Message to console");
	//12. As a developer I want an ability to access the library through global variable, AMD module or CommonJS module. 
	log2.toConsoleWithDate("Message to console with date");
	log2.toConsole("Message to console");
	//log2.toWindow("Message to consoledsfdsfdsfdfs");

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Logger = function () {
	    function Logger(name) {
	        _classCallCheck(this, Logger);

	        this.name = name;
	    }

	    _createClass(Logger, [{
	        key: "toConsole",
	        value: function toConsole(message) {
	            console.log(this.name + ": " + message);
	        }
	    }, {
	        key: "toAlert",
	        value: function toAlert(message) {
	            alert(this.name + ": " + message);
	        }
	    }, {
	        key: "toWindow",
	        value: function toWindow(message) {
	            var logBox = document.getElementsByClassName("log-box");
	            logbox.appendChild(message);
	        }
	    }]);

	    return Logger;
	}();

	var ExtendedLogger = function (_Logger) {
	    _inherits(ExtendedLogger, _Logger);

	    function ExtendedLogger(date, message) {
	        _classCallCheck(this, ExtendedLogger);

	        var _this = _possibleConstructorReturn(this, (ExtendedLogger.__proto__ || Object.getPrototypeOf(ExtendedLogger)).call(this, message));

	        _this.date = _this.getDate();
	        return _this;
	    }

	    _createClass(ExtendedLogger, [{
	        key: "toConsoleWithDate",
	        value: function toConsoleWithDate(message) {
	            console.log(this.name + ": [" + this.date + " ] : " + message);
	        }
	    }, {
	        key: "getDate",
	        value: function getDate() {
	            return new Date();
	        }
	    }]);

	    return ExtendedLogger;
	}(Logger);

	exports.default = ExtendedLogger;

/***/ }
/******/ ]);