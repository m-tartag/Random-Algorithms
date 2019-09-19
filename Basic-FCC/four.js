function findLongestWordLength(str) {
  let storage = 0;
  const ARRAY = str.split(' ');
  for (let i = 0; i <= ARRAY.length - 1; i++) {
    if (ARRAY[i].length > storage) {
      storage = ARRAY[i].length;
    }
  }
  return storage;
}

console.log(
  findLongestWordLength('The quick brown fox jumped over the lazy dog')
);
