function largestOfFour(arr) {
  const storage = [-100, -100, -100, -100];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > storage[i]) {
        storage[i] = arr[i][j];
      }
    }
  }
  return storage;
}

console.log(
  largestOfFour([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10],
  ])
);
