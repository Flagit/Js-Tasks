var slice = [].slice;

function partial() {
  var funcIndex = arguments.length - 1,
      func = arguments[funcIndex],
      args = slice.call(arguments, 0, funcIndex);

  return function () {
    return func.apply(this, args.concat(slice.call(arguments, 0)))
  }
}

function sum() {
  var s = 0, i = 0;
  for (; i < arguments.length; i++) {
    s += arguments[i];
  }
  return s;
}

//Test
var someMore = partial(1, sum);

console.log(someMore(2, 4, 6));
