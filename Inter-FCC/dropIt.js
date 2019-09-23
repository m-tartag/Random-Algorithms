function dropElements(arr, func) {
  const ARR = [];
  for (let i = 0; i < arguments[0].length; i++) {
    if (func(arguments[0][i])) {
      arr.shift();
    }
  }
  return arr;
}

console.log(
  dropElements([1, 2, 3, 9, 2], function(n) {
    return n > 2;
  })
);
