function ownMap (array, callback) {
    var arr = [];
    for (var i = 0; i < array.length; i++)
        arr.push(callback(array[i], i, array));
    return arr;
};

var nums = [2, 4, 6],
    sqr = ownMap(nums,function (num) {
        return Math.sqrt(num);
    });
console.log(sqr);

module.exports = ownMap;
