/**
 * https://leetcode.com/problems/reverse-words-in-a-string/
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let tailingIndex = s.length - 1;
  const charArr = s.split('');
  while (charArr[tailingIndex] === ' ') {
    tailingIndex--;
    charArr.length--;
  }

  let j = 0;
  for (let i = 0; i < charArr.length; i++) {
    if (charArr[i] !== ' ' || (j > 0 && charArr[j - 1] !== ' ')) {
      charArr[j] = charArr[i];
      j++;
    }
  }
  charArr.length = j;

  let start = 0, end = charArr.length - 1;
  doReverse(charArr, start, end);
  for (let index = 0; index < charArr.length; index++) {
    if (charArr[index] === ' ') {
      doReverse(charArr, start, index - 1);
      start = index + 1;
    } else if (index === charArr.length - 1) {
      doReverse(charArr, start, index);
      start = index + 1;
    }
  }
  return charArr.join('');
};

function doReverse(arr, start, end) {
  while (start < end) {

    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}


console.log(reverseWords('   Hello      World '));
console.log(reverseWords('Example A      World '));

console.log(reverseWords(' Happy '));
console.log(reverseWords('Happy'));