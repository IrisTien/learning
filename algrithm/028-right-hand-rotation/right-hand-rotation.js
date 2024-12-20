/*
* https://kamacoder.com/problempage.php?pid=1065
*/
const readline = require('readline');
const rd = readline.createInterface(process.stdin, process.stdout);

const inputs = [];
rd.on('line', (input) => {
  inputs.push(input);
  if (inputs.length === 2) {
    rd.close();
  }
});

rd.on('close', () => {
  const k = Number(inputs[0]);
  const s = inputs[1];

  const charArr = s.split('');
  let rightCount = s.length - k;
  if (rightCount <= 0) {
    console.log(s);
    return;
  }

  let copyIndex = charArr.length;
  for (let i = 0; i < rightCount; i++) {
    charArr[copyIndex++] = charArr[i];
  }

  let replaceIndex = 0;
  for (let i = rightCount; i < charArr.length; i++) {
    charArr[replaceIndex++] = charArr[i];
  }
  charArr.length -= rightCount;
  console.log(charArr.join(''));
});