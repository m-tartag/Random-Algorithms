function fearNotLetter(str) {
  const START = str.charCodeAt(0);
  const END = str.charCodeAt(str.length - 1);
  const NEW = [];

  // Map Array of CharCode Values
  const MAP = str.split('').map(item => item.charCodeAt(0));

  // Create New Array with no holes
  for (let i = START; i <= END; i++) {
    NEW.push(i);
  }
  // Compare the two arrays and find the missing letter
  for (let i = 0; i < NEW.length; i++) {
    if (MAP[i] !== NEW[i]) {
      return String.fromCharCode(NEW[i].toString());
    }
  }
}

console.log(fearNotLetter('abce'));
