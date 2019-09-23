function whatIsInAName(collection, source) {
  // What's in a name?
  const arr = [];
  // Only change code below this line

  // Only change code above this line
  console.log(collection[1].hasOwnProperty('last'));
}

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' },
  ],
  { last: 'Capulet' }
);
