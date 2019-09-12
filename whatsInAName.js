function whatIsInAName(collection, source) {
  // What's in a name?
  const arr = [];
  // Only change code below this line

  const SOURCE = Object.entries(source);
  const COLLECTION = Object.values(collection);

  console.log('SOURCE :', SOURCE);
  console.log('COLLECTION :', COLLECTION);
  // Only change code above this line
  return arr;
}

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' },
  ],
  { last: 'Capulet' }
);
