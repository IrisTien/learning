const readline = require('readline');
const rd = readline.createInterface(
  process.stdin,
  process.stdout
);

const code0 = '0'.charCodeAt(0);
const code9 = '9'.charCodeAt(0);
const replaceStrArr = 'number'.split('');

function isNumber(char) {
  return char >= code0 && char <= code9;
}

rd.on('line', (input) => {
  let numberCount = 0;
  for (let i = 0; i < input.length; i++) {
    const charCode = input.charCodeAt(i);
    if (isNumber(charCode)) {
      numberCount++;
    }
  }

  if (numberCount === 0) {
    console.log(input);
    return;
  }
  const length = input.length + numberCount * 5;
  const res = new Array(length);
  let left = input.length - 1, right = length - 1;
  while (left >= 0) {
    const cur = input.charCodeAt(left);
    if (isNumber(cur)) {
      let numberStrIndex = replaceStrArr.length - 1;
      while (numberStrIndex >= 0) {
        res[right--] = replaceStrArr[numberStrIndex];
        numberStrIndex--;
      }
    } else {
      res[right--] = input[left];
    }
    left--;
  }
  console.log(res.join(''));
});