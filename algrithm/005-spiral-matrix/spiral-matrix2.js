/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  const arr = new Array(n).fill(0).map(() => new Array(n).fill(undefined));
  let x = 0, y = 0;
  let offset = 1;
  for (let index = 1; index <= n * n;) {
    if (n - offset === 0) {
      arr[x][y] = index;
      break;
    }
    for(let i = 0; i < n - offset; i++) {
      arr[x][y++] = index++;
    }
    for(let i = 0; i < n - offset; i++) {
      arr[x++][y] = index++;
    }
    for(let i = 0; y >= 0 && i < n - offset; i++) {
      arr[x][y--] = index++;
    }
    for(let i = 0; x >= 0 && i < n - offset; i++) {
      arr[x--][y] = index++;
    }
    offset += 2;
    x++;
    y++;
  }
  return arr;
};

console.log(generateMatrix(1));
console.log(generateMatrix(2));
console.log(generateMatrix(3));
console.log(generateMatrix(4));
console.log(generateMatrix(5));
console.log(generateMatrix(6));