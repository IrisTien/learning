/**
 * https://leetcode.com/problems/intersection-of-two-arrays/
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
function intersection(nums1: number[], nums2: number[]): number[] {
  const nums1Set = new Set(nums1);
  const resultSet = new Set<number>();
  nums2.forEach((num: number) => {
    if (nums1Set.has(num)) {
      resultSet.add(num);
    }
  });
  return Array.from(resultSet);
}

console.log(intersection([1, 2, 3], [2, 3]));
console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
