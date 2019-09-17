function sumFibs(num) {
  const FIBBY = [1, 1];
  let COUNTER = 1;

  for (let i = 1; FIBBY[i] <= num; i++) {
    FIBBY[i + 1] = FIBBY[i] + FIBBY[i - 1];
    if (FIBBY[i] % 2 !== 0) {
      COUNTER += FIBBY[i];
    }
  }
  return COUNTER;
}

console.log(sumFibs(1000));
