function fearNotLetter(str) {
  const MAP = str.split('').map(item => item.charCodeAt(0));

  for (let i = 0; i < MAP.length - 1; i++) {
    if (MAP[i + 1] - MAP[i] !== 1) {
      return String.fromCharCode(MAP[i] + 1);
    }
  }
  return undefined;
}

console.log(fearNotLetter('abce'));
