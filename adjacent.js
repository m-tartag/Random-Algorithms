function adjacentElementsProduct(inputArray) {
  let storage = -1000;
  for (let i = 0; i < inputArray.length; i++) {
    const NEW = inputArray[i] * inputArray[i + 1];
    if (NEW > storage) {
      storage = NEW;
    }
  }
  console.log(storage);
  return storage;
}
