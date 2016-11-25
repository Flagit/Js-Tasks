var map = require('./Task5.js');
var reduce = require('./Task3.js');

function getRandomInt(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var length = 10,
    array = new Array(length);

function sumRandom() {
    return reduce(
                map(array, function () {
                    return getRandomInt(0, 100);
                }),
                function (sum, current) {
                    return sum + current;
                }
            );
}

console.log(sumRandom())