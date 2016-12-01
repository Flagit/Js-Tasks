import { Logger, EventManager } from './logger';

/**
 * @class ExtendedLogger
 * @extends {Logger}
 * 7. As a developer I want to be able to extend the library with custom logging methods.
 */
class ExtendedLogger extends Logger {
    constructor(name) {
        super(name);
        this.date = this.getDate();
    }

    toConsoleWithDate(message) {
        console.log(`${this.name}: [${this.date} ] : ${message}`);
    }
    
    getDate() {
        return new Date();
    }
}

var log1 = new Logger('Standart logger');
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

const eventManager = new EventManager();

eventManager.registerEvent('event 1', () => console.log('event 1'));
eventManager.registerEvent('sssss', () => console.log('event 1'));
eventManager.registerEvent('event 2', () => console.log('event 2'));

eventManager.unregisterEvent('event 2');

eventManager.fireEvent('event 1');
//eventListener.fireEvent('event 2');
