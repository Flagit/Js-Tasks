function lazyEval(fn) {
    return fn.bind.apply(fn, arguments);
}

module.exports = lazyEval;

// test
function add(a, b) {
    return a + b;
}
var later = lazyEval(add, 4, 5);
console.log(later());
