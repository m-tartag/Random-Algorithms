function pairElement(str) {
  const bank = [['A', 'T'], ['T', 'A'], ['G', 'C'], ['C', 'G']];
  const answer = [];
  const splitString = str.split('');

  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i] === 'A') {
      answer.push(bank[0]);
    } else if (splitString[i] === 'T') {
      answer.push(bank[1]);
    } else if (splitString[i] === 'G') {
      answer.push(bank[2]);
    } else if (splitString[i] === 'C') {
      answer.push(bank[3]);
    }
  }
  console.log(answer);
}

pairElement('GTCA');
