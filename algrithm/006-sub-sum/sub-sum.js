
/**
 * https://kamacoder.com/problempage.php?pid=1070
 *
 */
function prefixSum() {
  const readline = require('readline');

  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });

  let inputLines = [];
  rl.on('line', (line) => {
      inputLines.push(line.trim());
  });

  rl.on('close', () => {
    if (!inputLines || !inputLines.length) {
      return;
    }
    const num = parseInt(inputLines[0]);
    if (num <= 0) {
        return;
    }
    if (inputLines.length < num + 1) {
      return;
    }
    let sumArr = new Array(num);
    for (let index = 0; index <= num; index++) {
      sumArr[index] = parseInt(inputLines[index + 1]) + (index >= 1 ? sumArr[index-1] : 0);
    }
    for (let rangeIndex = num + 1; rangeIndex < inputLines.length; rangeIndex++) {
      const rangeArr = inputLines[rangeIndex].split(' ');
      if (!rangeArr || rangeArr.length !== 2) {
        return;
      }
      const ranges = rangeArr.map((str) => parseInt(str));
      if (ranges[0] >= num || ranges[1] >= num || ranges[1] < ranges[0]) {
        return;
      }
      if (ranges[0] === 0) {
        console.log(sumArr[ranges[1]]);
      } else {
        console.log(sumArr[ranges[1]] - sumArr[ranges[0] - 1]);
      }
    }
  });
}

prefixSum();