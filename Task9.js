function first(array, callback) {
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return array[i];
        }
    }
}

console.log(first([1,3,5,7], (el) => el < 3 ));