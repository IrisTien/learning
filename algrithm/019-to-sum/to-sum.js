/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const numMap = new Map();
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const pairNum = target - num;
    if (numMap.has(pairNum)) {
      return [numMap.get(pairNum), index];
    }
    numMap.set(num, index);
  };
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([0, 4, 3, 0], 0));
console.log(twoSum([-3,4,3,90], 0));