function dropElements(arr, func) {
  // Drop them elements.

  for (let i = 0; i <= arr.length; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }

  if (arr.length > 0) {
    return arr;
  }
  return [];
}

dropElements([1, 2, 3], function(n) {
  return n < 3;
});
