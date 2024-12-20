/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0, j = nums.length - 1;
    while (nums[j] === val) {
      j--;
    }
    while (i <= j) {
      if (nums[i] === val) {
        nums[i] = nums[j];
        j--;
      }
      i++;
      while (nums[j] === val) {
        j--;
      }
    }
    return j+1;
};

var removeElement2 = function(nums, val) {
  let i = 0, j = 0;
  while (i < nums.length) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j++;
    }
    i++;
  }
  return j;
};

console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));

console.log(removeElement([3], 3));
console.log(removeElement([0], 2));