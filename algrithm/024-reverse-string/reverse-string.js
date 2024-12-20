/**
 * https://leetcode.com/problems/reverse-string/
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  let start = 0, end = s.length - 1;
  while (start < end) {
    console.log(start, end);
    [s[start], s[end]] = [s[end], s[start]];
    start++;
    end--;
  }
  console.log(s);
};

reverseString(["h", "e", "l", "l", "o"]);
reverseString(["H", "a", "n", "n", "a", "h"]);
reverseString([]);
reverseString(["a"]);