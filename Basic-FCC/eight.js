function truncateString(str, num) {
  const storage = [];
  if (str.length <= num) {
    return (storage[0] = str);
  }
  for (let i = 0; i <= num - 1; i++) {
    storage.push(str[i]);
  }
  storage.push('...');

  return storage.join('');
}

console.log(truncateString('A-tisket a-tasket A green and yellow basket', 800));
