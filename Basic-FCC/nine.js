function findElement(arr, func) {
  const num = 0;

  arr.filter(item => item === func(item));

  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
