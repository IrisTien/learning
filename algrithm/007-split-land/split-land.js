
/**
 * n * m
 * col: m,
 * row: n,
 * 3 * 2
 * 1, 2, 3
 * 4, 5, 6
 *
 * @param {*} arr
 * @param {*} n
 * @param {*} m
 */
function splitLand(arr, n, m) {
  let colSumArr = [], rowSumArr = [], splitIndex;
  let minDiff = Number.MAX_SAFE_INTEGER;
  for (let colIndex = 0; colIndex < m; colIndex++) {
    let sumPerRow = 0;
    for (let rowIndex = 0; rowIndex < n; rowIndex++) {
      sumPerRow += arr[rowIndex][colIndex];
    }
    colSumArr[colIndex] = sumPerRow + (colIndex > 0 ? colSumArr[colIndex - 1] : 0);
  }

  for (let rowIndex = 0; rowIndex < n; rowIndex++) {
    let sumPerRow = 0;
    for (let colIndex = 0; colIndex < m; colIndex++) {
      sumPerRow += arr[rowIndex][colIndex];
    }
    rowSumArr[rowIndex] = sumPerRow + (rowIndex > 0 ? rowSumArr[rowIndex - 1] : 0);
  }

  // column compare
  for (let colIndex = 0; colIndex <= m; colIndex++) {
    const diff = Math.abs(colSumArr[m - 1] - 2 * (colIndex > 0 && colIndex < m ? colSumArr[colIndex - 1] : 0));
    minDiff = Math.min(minDiff, diff);
  }

  // row compare
  for (let rowIndex = 0; rowIndex <= n; rowIndex++) {
    const diff = Math.abs(rowSumArr[n - 1] - 2 * (rowIndex > 0 && rowIndex < n ? rowSumArr[rowIndex - 1] : 0));
    minDiff = Math.min(minDiff, diff);
  }

  return minDiff;
}

function getLandInfo() {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let lineIndex = 0;
  let n, m, numArr = [];
  rl.on('line', (line) => {
    if (lineIndex === 0) {
      const items = line.trim().split(' ');
      if (!items || items.length !== 2) {
        return;
      }
      [n, m] = items.map((item) => parseInt(item));
    } else {
      const items = line.trim().split(' ');
      if (!items || items.length !== m) {
        return;
      }
      numArr[lineIndex - 1] = items.map((item) => parseInt(item));
    }
    lineIndex++;
  });

  rl.on('close', () => {
    console.log(splitLand(numArr, n, m));
  });
}

getLandInfo();