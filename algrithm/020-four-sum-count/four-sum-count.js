/**
 * https://leetcode.com/problems/4sum-ii/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let count = 0;
  const sumMap1 = new Map();
  for (let index = 0; index < nums1.length; index++) {
    for (let j = 0; j < nums2.length; j++) {
      const sum = nums1[index] + nums2[j];
      sumMap1.set(sum, (sumMap1.get(sum) || 0) + 1);
    }
  }
  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      const sum = nums3[i] + nums4[j];
      const pairSum = 0 - sum;
      const pairCount = sumMap1.get(pairSum);
      if (pairCount) {
        count += pairCount;
      }
    }
  }
  return count;
};

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));
console.log(fourSumCount([0], [0], [0], [0]));
console.log(fourSumCount([0], [0], [0], [1]));