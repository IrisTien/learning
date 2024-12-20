// const base = 44363.61;
const rate = 0.17;

console.log(90501.76 + 532363.32);
const annualBase = 532363.32;
const bonusFY24 = ((annualBase / 12) * 11 + ((annualBase / 12) / 30 * 28)) * rate;
const bonusFY25 = (annualBase * rate) / 364 * 137;
console.log(bonusFY24, bonusFY25);