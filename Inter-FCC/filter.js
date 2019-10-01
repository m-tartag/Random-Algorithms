function whatIsInAName(collection, source) {
  // What's in a name?
  const keys = Object.keys(source);

  const arr = collection.filter(item => {
    for (let key = 0; key < keys.length; key++) {
      if (
        !item.hasOwnProperty(keys[key]) ||
        item[keys[key]] !== source[keys[key]]
      )
        return false;
    }
    return true;
  });
  return arr;
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
