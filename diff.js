function diffArray(arr1, arr2) {
  const newArr = [];

  const NEW = arr1.concat(arr2);

  NEW.filter(function(item) {
    return !arr1.includes(item) || !arr2.includes(item);
  });
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
