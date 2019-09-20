function titleCase(str) {
  const CLEANED = str.toLowerCase().split(' ');
  const NEW_CLEANED = CLEANED.map(item =>
    item.replace(item[0], item[0].toUpperCase())
  );

  return NEW_CLEANED.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
