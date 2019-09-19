function checkPalindrome(inputString) {
  return (
    inputString
      .split('')
      .reverse()
      .join('') === inputString
  );
}

console.log(checkPalindrome('aabbaa'));
