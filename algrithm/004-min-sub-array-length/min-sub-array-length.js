/**
 * https://leetcode.com/problems/squares-of-a-sorted-array/description/
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let start=0, end=0, sum = 0, minLen=Number.MAX_SAFE_INTEGER;
    if (!nums || !nums.length) {
      return 0;
    }
    while (end < nums.length) {
      sum += nums[end];
      while (sum >= target) {
        minLen = Math.min(minLen, end - start + 1);
        sum -= nums[start++];
      }
      end++;
    }
    return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
console.log(minSubArrayLen(4, [1,4,4]));
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]));
console.log(minSubArrayLen(11, []));
console.log(minSubArrayLen(11, [11]));
console.log(minSubArrayLen(11, [10]));