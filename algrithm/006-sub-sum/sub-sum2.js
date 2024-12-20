
/**
 * https://kamacoder.com/problempage.php?pid=1070
 *
 */
function subSum() {
  const readLine = require('readline');
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let inputIndex = 0;
  let sumArr = [];
  const rangesArr = [];
  let arrLength;
  rl.on('line', (line) => {
    if (inputIndex === 0) {
      arrLength = parseInt(line.trim());
      if (arrLength <= 0) {
        return;
      }
    } else if (inputIndex >= 1 && inputIndex <= arrLength) {
      sumArr[inputIndex - 1] = parseInt(line.trim()) + (inputIndex >= 2 ? sumArr[inputIndex - 2] : 0);
    } else {
      const ranges = line.trim().split(' ').map((range) => parseInt(range));
      if (ranges[0] < 0 || ranges[1] < 0 || ranges[1] < ranges[0]) {
        return;
      }
      rangesArr.push(ranges);
    }
    inputIndex++;
  });

  rl.on('close', () => {
    if (!rangesArr.length) {
      return;
    }
    rangesArr.forEach((ranges) => {
      if (ranges[0] === 0 ) {
        console.log(sumArr[ranges[1]]);
      } else {
        console.log(sumArr[ranges[1]] - sumArr[ranges[0] - 1]);
      }
    })
  });
}

subSum();