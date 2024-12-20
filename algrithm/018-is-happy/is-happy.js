/**
 * https://leetcode.cn/problems/happy-number/
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  if (!n) {
    return false;
  }
  const resultSet = new Set();
  return converstion(n, resultSet);
};

function converstion(num, resultSet) {
  if (num === 1) {
    return true;
  }
  const nStr = num.toString();
  let result = 0;
  for (let i = 0; i < nStr.length; i++) {
    const digit = Number(nStr.charAt(i));
    result += Math.pow(digit, 2);
  }
  if (resultSet.has(result)) {
    return false;
  }
  resultSet.add(result);
  return converstion(result, resultSet);
}

console.log(isHappy(1));
console.log(isHappy(19));
console.log(isHappy(0));
console.log(isHappy(22));