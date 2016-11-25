function unfold(callback, initialValue) {
    var array = [],
        state = callback(initialValue);
    while (state !== false) {
        array.push(state);
        state = callback(state);
    }   
    return array;
}

var res = unfold(function dec (val) {
        return val - 1 ? val - 1 : false;
    }, 5);

    console.log(res);