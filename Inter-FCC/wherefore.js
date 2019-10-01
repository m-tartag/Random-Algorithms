function whatIsInAName(collection, source) {
  const ARR = [];
  // console.log(Object.values(source));
  // console.log(Object.values(collection[0]));

  for (let i = 0; i <= collection.length - 1; i++) {
    console.log(Object.values(collection[i]));
    // console.log(source[i]);
    // console.log(Object.values(source));
    for (let j = 0; j <= Object.values(collection[i]).length; j++) {
      // console.log(Object.values(collection[i])[j]);
      console.log(Object.values(source)[i]);
      console.log(Object.values(collection[i])[j]);

      if (
        Object.values(source)[i] === Object.values(collection[i])[j] &&
        Object.keys(source)[i] === Object.keys(collection[i])[j]
      ) {
        ARR.push(collection[i]);
      }
    }
  }
  return ARR;
}

console.log(
  whatIsInAName(
    [
      { first: 'Romeo', last: 'Montague' },
      { first: 'Mercutio', last: null },
      { first: 'Tybalt', last: 'Capulet' },
    ],
    { last: 'Capulet' }
  )
);
