/* eslint-disable default-case */

function convertHTML(str) {
  const ARR = str.split('');
  for (let i = 0; i < ARR.length; i++) {
    switch (ARR[i]) {
      case '&':
        ARR[i] = '&​amp;';
        break;
      case '<':
        ARR[i] = '&​lt;';
        break;
      case '>':
        ARR[i] = '&​gt;';
        break;
      case '"':
        ARR[i] = '&​quot;';
        break;
      case "'":
        ARR[i] = '&​apos;';
        break;
    }
  }
  return ARR.join('');
}

console.log(convertHTML('<>'));

// &  = &​amp;
// < = &​lt;
// > = &​gt;
// " = &​quot;
// ' = &​apos;
