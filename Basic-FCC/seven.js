function repeatStringNumTimes(str, num) {
  const storage = [];
  for (let i = 1; i <= num; i++) {
    storage.push(str);
  }
  return storage.join('');
}

console.log(repeatStringNumTimes('abc', 3));
