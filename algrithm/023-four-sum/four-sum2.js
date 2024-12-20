/**
 * https://leetcode.com/problems/4sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  if (nums.length < 4) {
    return [];
  }
  const arr = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && i < nums.length - 3 && nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    for (; j < nums.length - 2; j++) {
      const firstTwoSum = nums[i] + nums[j];
      const matchingSum = target - firstTwoSum;
      let left = j + 1;
      let right = nums.length - 1;
      while (left < right) {
        const lastTwoSum = nums[left] + nums[right];
        if (lastTwoSum < matchingSum) {
          left++;
        } else if (lastTwoSum > matchingSum) {
          right--;
        } else {
          arr.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;
          while (left < right && nums[left] === nums[left - 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right + 1]) {
            right++;
          }
        }
      }
      while (j < nums.length - 3 && nums[j + 1] === nums[j]) {
        j++;
      }
    }
  }
  return arr;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([2, 2, 2, 2, 2], 8));
console.log(fourSum([-2, -1, -1, 1, 1, 2, 2], 0));
console.log(fourSum([-1, -5, -5, -3, 2, 5, 0, 4], -7));