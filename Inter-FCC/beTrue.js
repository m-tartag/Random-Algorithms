function truthCheck(collection, pre) {
  const flag = 'yeaheahehehaeh';
  for (let i = 0; i < collection.length; i++) {
    // console.log(Object.keys(collection[i]).includes(pre));
    // console.log(collection[i].hasOwnProperty(pre));
    console.log(Object.values(collection[i]));
  }
  return flag;
}
console.log(
  truthCheck(
    [
      { user: 'Tinky-Winky', sex: 'male' },
      { user: 'Dipsy', sex: 'male' },
      { user: 'Laa-Laa', sex: undefined },
      { user: 'Po', sex: 'female' },
    ],
    'sex'
  )
);
