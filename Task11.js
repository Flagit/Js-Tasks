var lazy = require('./Task10.js');

function memoization() {
    var result,
        later = lazy.apply(null, arguments);
    return function () {
        if (!result) {
            result = later();
        }
        return result;
    };
}

var m = memoization((a, b) => a + b, 1, 2);
console.log(m());
console.log(m());
console.log(m());
