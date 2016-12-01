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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _logger = __webpack_require__(1);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @class ExtendedLogger
	 * @extends {Logger}
	 * 7. As a developer I want to be able to extend the library with custom logging methods.
	 */
	var ExtendedLogger = function (_Logger) {
	    _inherits(ExtendedLogger, _Logger);

	    function ExtendedLogger(name) {
	        _classCallCheck(this, ExtendedLogger);

	        var _this = _possibleConstructorReturn(this, (ExtendedLogger.__proto__ || Object.getPrototypeOf(ExtendedLogger)).call(this, name));

	        _this.date = _this.getDate();
	        return _this;
	    }

	    _createClass(ExtendedLogger, [{
	        key: 'toConsoleWithDate',
	        value: function toConsoleWithDate(message) {
	            console.log(this.name + ': [' + this.date + ' ] : ' + message);
	        }
	    }, {
	        key: 'getDate',
	        value: function getDate() {
	            return new Date();
	        }
	    }]);

	    return ExtendedLogger;
	}(_logger.Logger);

	var log1 = new _logger.Logger('Standart logger');
	var log2 = new ExtendedLogger('Extended logger');

	log1.toConsole('Message to console');
	log1.toWindow('Message to window');
	log1.toAlert("Message to Alert");

	log2.toConsoleWithDate("Message to console with date");

	/** 11. As a developer extending the library I want to see clear errors and warning in case if I
	* violate the contract of logging or instrumentation methods.
	* For testing need uncomment log3 bellow
	*/
	//var log3 = new ExtendedLogger();
	//log3.toConsoleWithDate("Message to console with date");

	var eventManager = new _logger.EventManager();

	eventManager.registerEvent('event 1', function () {
	    return console.log('event 1');
	});
	eventManager.registerEvent('sssss', function () {
	    return console.log('event 1');
	});
	eventManager.registerEvent('event 2', function () {
	    return console.log('event 2');
	});

	eventManager.unregisterEvent('event 2');

	eventManager.fireEvent('event 1');
	//eventListener.fireEvent('event 2');

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * 1. As a developer I want to have an ability to log information.
	 * 6. As a developer I want to have an ability to select from built-in logging methods.
	 * 12. As a developer I want an ability to access the library through global variable, AMD module or CommonJS module.
	 * 10. As a developer extending the library with my own logging or instrumentation methods I want to have established 
	 * contracts in a form of base class of API documentation so that I can easily know how to extend the library.
	 * 
	 * Below implemented loggger libriary as ES6 module, and some documentation for classes and methods
	 */

	/**
	 * Implemetning main functionality of logger
	 * @class Logger
	 */
	var Logger = function () {
	    /**
	     * @param {string} name name of the logger
	     */
	    function Logger(name) {
	        _classCallCheck(this, Logger);

	        if (!name) throw Error("Name for logger isn't provided "); //TB Done

	        this.name = name;
	    }
	    /**
	     * @param {string} message message for logging
	     * 2. As a developer I want to have an ability to send log information to the console.
	     * @memberOf Logger 
	     */


	    _createClass(Logger, [{
	        key: "toConsole",
	        value: function toConsole(message) {
	            console.log(this.name + ": " + message);
	        }

	        /**
	         * @param {string} message message for logging
	         *  3. As a developer I want to have an ability to send log information to an alert window.
	         * @memberOf Logger
	         */

	    }, {
	        key: "toAlert",
	        value: function toAlert(message) {
	            alert(this.name + ": " + message);
	        }

	        /**
	         * @param {string} message
	         * 4. As a developer I want to have an ability to send log information to the current window.
	         * @memberOf Logger
	         */

	    }, {
	        key: "toWindow",
	        value: function toWindow(message) {
	            var logBox = document.getElementsByClassName("log-box")[0];
	            logBox.innerHTML += message;
	        }

	        /**
	         * @param {any} message
	         * 5. As a developer I want to have an ability to send log information to abstract Web API endpoint.
	         * @memberOf Logger
	         */

	    }, {
	        key: "toUrl",
	        value: function toUrl(message) {
	            var request = new XMLHttpRequest();
	            request.open('POST', 'http://someUrl........', true);
	            request.send(this.name + ': ' + message);
	        }
	    }]);

	    return Logger;
	}();
	/*
	 * 8. As a developer I want to library to automatically log all unhandled client-side exceptions.
	 */


	var unhadledErrorsLogger = new Logger('Unhandled error');

	window.addEventListener('error', function onError(message) {
	    unhadledErrorsLogger.toConsole(message.message);
	});

	/**
	* 9. As a developer I want to have an ability to extend library with my own instrumentation
	* methods so that the library can monitor not only exceptions but other events too.
	 * @class EventManager
	 */

	var EventManager = function () {
	    function EventManager() {
	        _classCallCheck(this, EventManager);

	        this.logger = new Logger('Event listener logger');
	        this.events = [];
	    }

	    _createClass(EventManager, [{
	        key: "registerEvent",
	        value: function registerEvent(eventName, callback) {
	            if (!eventName) throw Error('Name is absent');
	            this.events.push({ name: eventName, callback: callback });
	        }

	        /**
	         * 
	         * 
	         * @param {any} eventName
	         * 
	         * @memberOf EventListener
	         */

	    }, {
	        key: "unregisterEvent",
	        value: function unregisterEvent(eventName) {
	            this.events = this.events.filter(function (e) {
	                return e.name !== eventName;
	            });
	        }

	        /**
	         * @param {any} eventName
	         * 
	         * @memberOf EventListener
	         */

	    }, {
	        key: "fireEvent",
	        value: function fireEvent(eventName) {
	            var event = this.events.find(function (e) {
	                return e.name === eventName;
	            });

	            if (!event) throw Error('No such event');

	            event.callback();

	            this.logger.toConsole(eventName + " fired");
	        }
	    }]);

	    return EventManager;
	}();

	exports.default = { Logger: Logger, EventManager: EventManager };
	module.exports = exports["default"];

/***/ }
/******/ ]);