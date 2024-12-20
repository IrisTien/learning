/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  return binarySearch(nums, target, 0, nums.length - 1);
};

function binarySearch(nums, target, start, end) {
    if (!nums.length || start > end) {
        return -1;
    }
    const mid = start + ((end - start) >> 1);
    if (nums[mid] === target) {
        return mid;
    }
    if (nums[mid] > target) {
        return binarySearch(nums, target, start, mid - 1);
    } else {
        return binarySearch(nums, target, mid + 1, end);
    }
}

console.log(search([-1,0,3,5,9,12], 2));
console.log(search([-1,0,3,5,9,12, 13], 9));

console.log(search([0], 0));
console.log(search([0], 1));
