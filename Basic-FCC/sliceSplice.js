function frankenSplice(arr1, arr2, n) {
  const NEW = arr1.slice(0, arr1.length);
  return arr2.splice(NEW.length, NEW);
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
