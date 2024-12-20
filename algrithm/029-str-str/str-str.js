/**
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  for (let index = 0; index < haystack.length; index++) {
    if (haystack.charAt(index) === needle.charAt(0)) {
      let left = index;
      let right = 0;
      let isMatching = true;
      while (right < needle.length) {
        if (haystack.charAt(left) !== needle.charAt(right)) {
          isMatching = false;
          break;
        } else {
          left++;
          right++;
        }
      }
      if (isMatching) {
        return index;
      }
    }
  }
  return -1;
};

console.log(strStr('abdfsdf', 'bdf'));
console.log(strStr('leetcode', 'leeto'));
console.log(strStr('sadbutsad', 'sad'));