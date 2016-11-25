var reduce = require('./Task3.js');
var filter = require('./Task6.js');

function sum (accum, current) {
    return accum + current;
}

function sumEven(array) {
    var filtered = filter(array, (el) => el % 2 === 0);
    return reduce(filtered, sum) / filtered.length;
}


console.log(sumEven([2, 4, 5, 1]))