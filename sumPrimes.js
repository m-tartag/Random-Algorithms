function PRIME_OR_NOT(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function SUM_PRIMES(num) {
  let COUNTER = 0;

  for (let i = 2; i <= num; i++) {
    if (PRIME_OR_NOT(i)) {
      COUNTER += i;
    }
  }
  return COUNTER;
}

console.log(SUM_PRIMES(977));
