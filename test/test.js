// const map1 = new Map();
// map1.set('key1', "value1");
// map1.set('key2', 234);

// console.log(map1.size);

// const set1 = new Set();
// set1.add({a: 1});
// set1.add('234');
// set1.add(444);
// console.log(set1.has(444));
// for (item of set1) {
//   console.log(item);
// }

// function testSymbol() {
//   var symbol1 = Symbol('test symbol');
//   Symbol.keyFor(symbol1);
// }
// testSymbol();
// console.log(Symbol.for('test symbol'));


var p = document.getElementById('p');
// abc:
// p.innerHTML = 'ABC'; // <p id="p">ABC</p >
// HTML:
p.innerHTML = 'ABC <span style="color:red">RED</span> XYZ';


const bodyEle = document.querySelector('body');

const haskell = document.createElement('p');
haskell.id = 'haskell';
haskell.innerText = 'Haskell';
bodyEle.insertBefore(haskell, p);

function getType(obj){
  let type = typeof obj;
  if (type !== "object") { // typeof
  return type;
  }
  // typeof object
  return Object.prototype.toString.call(obj).replace(/^\[object (\S+)\]$/, '$1');
}

console.log(getType(new Date()));