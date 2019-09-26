function whatIsInAName(collection, source) {
  // What's in a name?
  const ARR = collection.forEach(item => {
    if (item.hasOwnProperty('last') && item.hasOwnValue('Capulet')) {
      return true;
    }
  });
  return ARR;
}

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' },
  ],
  { last: 'Capulet' }
);
