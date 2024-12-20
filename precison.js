var a = 0.4000000000012;

var b = a.toPrecision(12);
console.log(b);
console.log(typeof b);

var c = parseFloat(b);
console.log(c);

//精确加法

function add(a, b) {
  const numberDigits1 = (a.toString().split('.')[1] || '').length;
  const numberDigits2 = (b.toString().split('.')[1] || '').length;
  const baseNum = Math.pow(10, Math.max(numberDigits1, numberDigits2));
  const result = (a * baseNum + b * baseNum) / baseNum;
  return result;
}

console.log(add(0.1, 0.2) === 0.3);
