function factorialize(num) {
  let storage = 1;
  for (let i = 1; i <= num; i++) {
    storage *= i;
  }
  return storage;
}

console.log(factorialize(10));
