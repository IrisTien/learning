/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const arr = new Array(n).fill(0).map(() => new Array(n).fill(undefined));
    let x = 0, y = 0;
    for (let index = 1; index <= n * n;) {
      while ( y < n && arr[x][y] === undefined) {
        arr[x][y] = index;
        y++;
        index++;
      }
      y--;
      x++;
      while ( x < n && arr[x][y] === undefined) {
        arr[x][y] = index;
        x++;
        index++;
      }
      x--;
      y--;
      while ( y >= 0 && arr[x][y] === undefined) {
        arr[x][y] = index;
        y--;
        index++;
      }
      y++;
      x--;
      while ( x >= 0 && arr[x][y] === undefined) {
        arr[x][y] = index;
        x--;
        index++;
      }
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