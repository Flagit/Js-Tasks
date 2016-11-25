function ownFilter (array, callback, context) {
    var arr = [];
    for (var i = 0; i < array.length; i++) {
        if (callback.call(context || global || window , array[i], i, array))
            arr.push(array[i]);
    }
    return arr;
};

//Test
var nums = [1, 26, 33, 86, 2, 9, 3],
    newNum = ownFilter(nums, function (n) {
        return n >= 8;
    });
console.log(newNum);

module.exports = ownFilter;
