/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const numArr = new Array();
  const operators = new Set(['+', '-', '*', '/']);
  for (const char of tokens) {
    if (operators.has(char)) {
      const num2 = numArr.pop();
      const num1 = numArr.pop();
      let res;
      switch (char) {
        case '+':
          res = num1 + num2;
          break;
        case '-':
          res = num1 - num2;
          break;
        case '*':
          res = num1 * num2;
          break;
        case '/':
          res = Math.trunc(num1 / num2);
          break;
      }
      numArr.push(res);
    } else {
      numArr.push(Number(char));
    }
  }
  return numArr.pop();
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]));