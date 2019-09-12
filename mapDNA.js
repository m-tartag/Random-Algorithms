const bank = {
  A: 'T',
  T: 'A',
  G: 'C',
  C: 'G',
};

function pairElement(str) {
  return str.split('').map(element => [element, bank[element]]);
}

console.log(pairElement('GTCA'));
