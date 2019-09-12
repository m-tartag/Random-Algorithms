// function fibby(num) {
//   if (num <= 1) {
//     return 1;
//   }
//   return fibby(num - 1) + fibby(num - 2);
// }

// function sumFibs(num) {
//   if (num <= 1) {
//     return 1;
//   }
//   return sumFibs(num - 1) + sumFibs(num - 2);
// }

// console.log(sumFibs(8));

function whileFib(num) {
  let A = 0;
  let B = 1;
  let store;

  while (num >= 0) {
    store = A;
    A += B;
    B = store;
    num--;
  }
  return B;
}

console.log(whileFib(10));
