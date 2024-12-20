/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  if (!nums.length) {
    return [];
  }
  let start = 0, end = nums.length - 1, newArrIndex = end;
  const newArr = new Array(end);
  while (start < end) {
    const squareEnd = Math.pow(nums[end], 2);
    const squareStart = Math.pow(nums[start], 2);
    if (squareStart <= squareEnd) {
      newArr[newArrIndex] = squareEnd;
      end--;
    } else {
      newArr[newArrIndex] = squareStart;
      start++;
    }
    newArrIndex--;
  }
  newArr[0] = Math.pow(nums[start], 2);
  return newArr;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
console.log(sortedSquares([-7, -3, 2, 3, 11]));

console.log(sortedSquares([-7]));
console.log(sortedSquares([0]));
console.log(sortedSquares([]));