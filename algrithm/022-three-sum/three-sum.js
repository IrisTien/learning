/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length < 3) {
    return [];
  }
  const arr = [];
  const numMap = new Map();
  nums.forEach((num, index) => {
    numMap.set(num, index);
  });
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const twoSum = nums[i] + nums[j];
      const pairSum = 0 - twoSum;
      const k = numMap.get(pairSum);
      if (k > i && k > j) {
        const sortedNums = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
        const existing = arr.find((numArr) => {
          return numArr[0] === sortedNums[0] && numArr[1] === sortedNums[1] && numArr[2] === sortedNums[2];
        })
        if (!existing) {
          arr.push(sortedNums);
        }
      }
    }
  }
  return arr;
};

console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([0,1,1]));
console.log(threeSum([0,0,0]));