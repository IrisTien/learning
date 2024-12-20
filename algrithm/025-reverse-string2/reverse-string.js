/**
 * https://leetcode.com/problems/reverse-string-ii/
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let charArr = s.split('');
  for (let start = 0; start < charArr.length; start += 2 *k) {
    let end = Math.min(charArr.length -1, start + k - 1);
    doReverse(charArr, start, end);
  }
  return charArr.join('');
};

function doReverse(charArr, start, end, k) {
  while (start < end) {
    [charArr[start], charArr[end]] = [charArr[end], charArr[start]];
    start++;
    end--;
  }
}

console.log(reverseStr('abcdefg', 2));
console.log(reverseStr('abcd', 2));
console.log(reverseStr('abcd', 3));