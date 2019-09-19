function sumPrimes(num) {
  const numbers = [];

  // create an array of numbers up to and including num
  for (let i = 2; i <= num; i++) {
    numbers.push(i);
  }

  // filter all numbers in the 'numbers' array, that are not divisible by any number other than themselves without a remainder
  return numbers
    .filter(function(item, index, array) {
      for (let j = 0; j < index; j++) {
        if (item % array[j] === 0) return false;
      }
      return true;

      // sum up all numbers in the filtered array (primes)
    })
    .reduce(function(a, b) {
      return a + b;
    });
}
