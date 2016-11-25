function reduce (array, callback, init) {
    var accumumValue = (init === undefined) ? array[0] : init,
        i = (init === undefined) ? 1 : 0;
    for (; i < array.length; i++) {
        accumumValue = callback(accumumValue, array[i], i, array);
    }
    return accumumValue;
};

console.log(reduce([3]))
module.exports = reduce