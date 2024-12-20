/**
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const bracketStack = new Array();
  for (let index = 0; index < s.length; index++) {
    const char = s.charAt(index);
    if (char === '(' || char === '[' || char === '{') {
      bracketStack.push(char);
      continue;
    }
    const popChar = bracketStack.pop();
    if ((char === ')' && popChar !== '(') || (char === ']' && popChar !== '[') || (char === '}' && popChar !== '{')) {
      return false;
    }
  }
  if (bracketStack.length > 0) {
    return false;
  }
  return true;
};

var isValid2 = function (s) {
  const bracketStack = new Array();
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
  for (const char of s) {
    if (char in map) {
      bracketStack.push(char);
      continue;
    }
    if (map[bracketStack.pop()] !== char ) {
      return false;
    }
  }
  return bracketStack.length === 0;
};

console.log(isValid2('()'));
console.log(isValid2('(())'));
console.log(isValid2('(()'));
console.log(isValid2('(([{[]}]))'));
console.log(isValid2('(([))'));