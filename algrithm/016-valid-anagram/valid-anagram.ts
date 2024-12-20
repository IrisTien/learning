/**
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const charArr = new Array(26).fill(0);
  const baseCode = 'a'.codePointAt(0);
  for (let i = 0; i < s.length; i++) {
    charArr[s.codePointAt(i) - baseCode]++;
    charArr[t.codePointAt(i) - baseCode]--;
  }
  return charArr.every((appearTimes) => appearTimes === 0);
}

function isAnagram_useMap(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const charMap = new Map();
  const baseCode = 'a'.codePointAt(0);
  for (let i = 0; i < s.length; i++) {
    const charCode = s.codePointAt(i);
    const charKey = charCode - baseCode;
    charMap.set(charKey, (charMap.get(charKey) || 0) + 1);
  }
  for (let i = 0; i < t.length; i++) {
    const charCode = t.codePointAt(i);
    const charKey = charCode - baseCode;
    let appearTimes = charMap.get(charKey);
    if (!appearTimes) {
      return false;
    }
    appearTimes--;
    charMap.set(charKey, appearTimes);
    if (appearTimes === 0) {
      charMap.delete(charKey);
    }
  }
  return true;
}

console.log(isAnagram_useMap('anagram', 'nagaram'));
console.log(isAnagram_useMap('rat', 'car'));
console.log(isAnagram_useMap('aacc', 'ccac'));

console.log(isAnagram_useMap('a', 'a'));
console.log(isAnagram_useMap('aca', 'ac'));

const icons = '𠮷☃★♲';
console.log(icons.charAt(0));

console.log(icons.charCodeAt(0));

console.log(icons.codePointAt(0));

console.log("\ud842\udfb7");//𠮷, an example of hexadecimal digits
console.log("\u20bb7\udfb7");//₻7�
console.log("\u{20bb7}");//𠮷 an unicode code point escapes the "\ud842\udfb7"