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
  let rightIndex = s.length - k;
  if (rightIndex <= 0) {
    console.log(s);
    return;
  }

  reverse(charArr, 0, charArr.length - 1);
  reverse(charArr, 0, k - 1);
  reverse(charArr, k, charArr.length);
  console.log(charArr.join(''));
});

function reverse(arr, start, end) {
  while (start < end ) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}