function whatIsInAName(collection, source) {
  const ARR = collection.filter(function(item) {
    for (const i in source) {
      if (source[i] !== item[i]) {
        return false;
      }
      return true;
    }
  });
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
