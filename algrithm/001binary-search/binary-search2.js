/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let low = 0;
  let high = nums.length;
  while (low <= high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

console.log(search([-1,0,3,5,9,12], 2));
console.log(search([-1,0,3,5,9,12], 9));

console.log(search([0], 0));
console.log(search([0], 1));