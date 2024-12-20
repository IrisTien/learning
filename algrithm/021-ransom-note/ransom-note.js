/**
 * https://leetcode.com/problems/ransom-note/
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const magazineArr = new Array(26).fill(0);
  const base = 'a'.charCodeAt(0);
  for (let index = 0; index < magazine.length; index++) {
    const charCode = magazine.charCodeAt(index);
    magazineArr[charCode - base]++;
  }
  for (let index = 0; index < ransomNote.length; index++) {
    const charCode = ransomNote.charCodeAt(index);
    if (magazineArr[charCode - base] === 0) {
      return false;
    } else {
      magazineArr[charCode - base]--;
    }
  }
  return true;
};

console.log(canConstruct('a', 'b'));
console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aa', 'aab'));
console.log(canConstruct('aa', 'aacb'));