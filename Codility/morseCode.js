decodeMorse = function(morseCode) {
  // take arg split into new array
  const ARR = morseCode.split(' ');
  console.log(ARR);
  const ARR2 = [];

  for (let i = 0; i <= ARR.length; i++) {
    if (ARR[i].length) {
      ARR2.push(ARR[i]);
    } else continue;
  }
  return ARR2;
};

console.log(decodeMorse('... --- ...'));
