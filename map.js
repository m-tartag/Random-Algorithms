const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

// Filter all positives into new array
const POSITIVE = realNumberArray.filter(item => item >= 0);

// Map new array with ONLY WHOLE NUMBERS
const KILL_DECIMAL = POSITIVE.filter(item => item % 1 === 0);

// Map new array of squared numbers (via ROUNDED array)
const SQUARED = KILL_DECIMAL.map(item => item * item);

console.log(POSITIVE);
console.log(KILL_DECIMAL);
console.log(SQUARED);
