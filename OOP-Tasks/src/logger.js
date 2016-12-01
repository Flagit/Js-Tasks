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
class Logger {
    /**
     * @param {string} name name of the logger
     */
    constructor(name) {
        if (!name) throw Error(`Name for logger isn't provided `);//TB Done

        this.name = name;
    }
    /**
     * @param {string} message message for logging
     * 2. As a developer I want to have an ability to send log information to the console.
     * @memberOf Logger 
     */
    toConsole(message) {
        console.log(this.name + ": " + message);
    }

    /**
     * @param {string} message message for logging
     *  3. As a developer I want to have an ability to send log information to an alert window.
     * @memberOf Logger
     */
    toAlert(message) {
        alert(this.name + ": " + message);
    }

    /**
     * @param {string} message
     * 4. As a developer I want to have an ability to send log information to the current window.
     * @memberOf Logger
     */
    toWindow(message) {
        var logBox = document.getElementsByClassName("log-box")[0];
        logBox.innerHTML += message;
    }

    /**
     * @param {any} message
     * 5. As a developer I want to have an ability to send log information to abstract Web API endpoint.
     * @memberOf Logger
     */
    toUrl(message) {
        var request = new XMLHttpRequest();
        request.open('POST', 'http://someUrl........', true);
        request.send(this.name + ': ' + message);
    }
}
/*
 * 8. As a developer I want to library to automatically log all unhandled client-side exceptions.
 */
const unhadledErrorsLogger = new Logger('Unhandled error');

window.addEventListener('error', function onError(message) {
    unhadledErrorsLogger.toConsole(message.message);
});

/**
* 9. As a developer I want to have an ability to extend library with my own instrumentation
* methods so that the library can monitor not only exceptions but other events too.
 * @class EventManager
 */
class EventManager {
    constructor() {
        this.logger = new Logger('Event listener logger');
        this.events = [];
    }

    registerEvent(eventName, callback) {
        if (!eventName) throw Error('Name is absent')
        this.events.push({ name: eventName, callback });
    }

    /**
     * 
     * 
     * @param {any} eventName
     * 
     * @memberOf EventListener
     */
    unregisterEvent(eventName) {
        this.events = this.events.filter(e => e.name !== eventName);
    }

    /**
     * @param {any} eventName
     * 
     * @memberOf EventListener
     */
    fireEvent(eventName) {
        const event = this.events.find(e => e.name === eventName);

        if (!event) throw Error('No such event');

        event.callback();

        this.logger.toConsole(`${eventName} fired`);
    }
}

export default { Logger, EventManager };
