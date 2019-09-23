// found flat() method.. takes an argument in terms of the depth of the nesting..
// Infinity takes care of all varying depths

function steamrollArray(arr) {
  return arr.flat(Infinity);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
