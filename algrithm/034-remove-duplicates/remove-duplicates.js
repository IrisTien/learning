/**
 * https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
  var strArr = new Array();
  for (const char of s) {
    const topChar = strArr.pop();
    if (topChar !== char) {
      strArr.push(topChar);
      strArr.push(char);
    }
  }
  return strArr.join('');
};

//双指针
var removeDuplicates2 = function(s) {
  let left = -1;
  const strArr = [...s];
  for (const char of strArr) {
    if (left === -1 || strArr[left] !== char) {
      strArr[++left] = char;
    } else {
      left--;
    }
  }
  strArr.length = left + 1;
  return strArr.join('');
};

console.log(removeDuplicates2('abbaa'));
console.log(removeDuplicates2('abbaccddaa'));