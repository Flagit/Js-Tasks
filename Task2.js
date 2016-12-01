function sum () {
    var sumArgs = function (args) {
            var s = 0,
                i = 0;
            for (; i < args.length; i++) {
                s += args[i];
            }
            return s;
        },
        s = sumArgs(arguments);

    return function sumInner () {
        if (arguments.length) {
            s += sumArgs(arguments);
            return sumInner;
        } else {
            return s;
        }
    }  
}
 var s = sum(3 , 3 ,3)
console.log(s(2)(4)(6))