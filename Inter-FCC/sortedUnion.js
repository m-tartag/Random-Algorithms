function uniteUnique(arr) {
  const ARR = [];
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      if (!ARR.includes(arguments[i][j])) {
        ARR.push(arguments[i][j]);
      }
    }
  }
  return ARR;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
