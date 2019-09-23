function spinalCase(str) {
  const STR = str.replace(/([A-Z])/g, ' $1').trim();

  return STR;
}

console.log(spinalCase('This-Is-Spinal-Tap'));
