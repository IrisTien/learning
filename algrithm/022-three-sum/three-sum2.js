/**
 * @param {number[]} sortedNums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }

  const matchingArr = [];
  const sortedNums = nums.sort((a, b) => a - b);
  let index = 0, leftIndex, rightIndex;
  while (index < sortedNums.length - 2) {
    while (index > 0 && sortedNums[index] === sortedNums[index - 1]) {
      index++;
    }
    leftIndex = index + 1;
    rightIndex = sortedNums.length - 1;
    while (leftIndex < rightIndex) {
      const sum = sortedNums[index] + sortedNums[leftIndex] + sortedNums[rightIndex];
      if (sum < 0) {
        leftIndex++;
      } else if (sum > 0) {
        rightIndex--;
      } else if (sum === 0) {
        matchingArr.push([sortedNums[index], sortedNums[leftIndex], sortedNums[rightIndex]]);
        leftIndex++;
        rightIndex--;
        while (sortedNums[leftIndex] === sortedNums[leftIndex - 1]) {
          leftIndex++;
        }
        while (rightIndex < sortedNums.length - 1 && sortedNums[rightIndex] === sortedNums[rightIndex + 1]) {
          rightIndex--;
        }
      }
    }
    index++;
  }
  return matchingArr;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));

