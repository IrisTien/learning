/**
 * https://leetcode.com/problems/repeated-substring-pattern/
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  const str = s + s;
  const subStr = s;

  const next = findNext(subStr);
  if (next[next.length-1] !== 0 && (subStr.length % (subStr.length - next[next.length-1]) === 0)) {
    return true;
  }
  return false;
};

function findNext(str) {
  if (str.length === 0) {
    return [];
  }
  const next = [0];
  let j = 0;
  for (let index = 1; index < str.length; index++) {
    while (str.charAt(index) !== str.charAt(j) && j > 0) {
      j = next[j - 1];
    }
    if (str.charAt(index) === str.charAt(j)) {
      j++;
    }
    next[index] = j;
  }
  return next;
}

console.log(repeatedSubstringPattern('abcabc'));
console.log(repeatedSubstringPattern('ababababac'));
console.log(repeatedSubstringPattern('defdefabcabcdefdefabcabc'));
console.log(repeatedSubstringPattern('ccccccc'));
console.log(repeatedSubstringPattern('abeeeeab'));
console.log(repeatedSubstringPattern('abababab'));