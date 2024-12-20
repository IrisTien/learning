/**
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let charSet = new Map();
  for (let i = 0; i < s.length; i++) {
    const char = s.at(i);
    let charValue = charSet.get(char);
    if (charValue !== undefined) {
      charSet.set(char, ++charValue);
    } else {
      charSet.set(char, 1);
    }
  }
  for (let i = 0; i < t.length; i++) {
    const char = t.at(i);
    let charValue = charSet.get(char);
    if (!charSet.has(char)) {
      return false;
    }
    charSet.set(char, --charValue);
    if (charValue === 0) {
      charSet.delete(char);
    }
  }
  return true;
};

console.log(isAnagram('anagram', 'nagaram'));
console.log(isAnagram('rat', 'car'));
console.log(isAnagram('aacc', 'ccac'));

console.log(isAnagram('a', 'a'));
console.log(isAnagram('aca', 'ac'));