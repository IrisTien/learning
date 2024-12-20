
/**
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const next = findNext(needle);

  let j = 0;
  for (let i = 0; i < haystack.length; i++) {
    while (haystack.charAt(i) !== needle.charAt(j) && j > 0) {
      j = next[j - 1];
    }
    if (haystack.charAt(i) === needle.charAt(j)) {
      j++;
    }
    if (j === needle.length) {
      return i - needle.length + 1;
    }
  }
  return -1;
};

function findNext(needle) {
  if (needle.length === 0) {
    return [];
  }
  const next = [0];
  let j = 0;
  for (let i = 1; i < needle.length; i++) {
    while (j > 0 && needle.charAt(i) !== needle.charAt(j)) {
      j = next[j - 1];
    }
    if (needle.charAt(i) === needle.charAt(j)) {
      j++;
    }
    next[i] = j;
  }
  console.log(next);
  return next;
}

console.log(strStr('aabaabaaf', 'aabaaf'));
console.log(strStr('aabaabaabaaf', 'aabaaf'));