function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n-1);
}

function factorial_tail(n, total = 1) {
  if (n === 1) {
    return total;
  }
  return factorial_tail(n - 1, total * n);
}

console.log(factorial(5));
console.log(factorial_tail(5));


function sumArray(arr, total = 0) {
  if (arr.length === 0) {
    return total;
  }
  return sumArray(arr, total + arr.pop());
}

console.log(sumArray([2,3,5,6,8,9,10]));

//斐波那契
//1, 1, 2, 3, 5, 8, 13, ...
function fibonacci_next(n, pre1 = 1, pre2 = 1) {
  if (n === 1) {
    return pre1;
  }
  if (n === 2) {
    return pre2;
  }
  return fibonacci_next(n-1, pre2, pre1 + pre2);
}

console.log(fibonacci_next(6));
console.log(fibonacci_next(7));

//数组扁平化
//let a = [1,2,3, [1,2,3, [1,2,3]]]
//变成
//let a = [1,2,3,1,2,3,1,2,3]
function flatten(arr, result = []) {
  arr.forEach((arrItem) => {
    if (Array.isArray(arrItem)) {
      result = result.concat(flatten(arrItem, []))
    } else {
      result.push(arrItem);
    }
  });
  return result;
}

function flatten_tail(arr, result = []) {
  if (arr.length === 0) {
    return result;
  }
  const item = arr.pop();
  if (!Array.isArray(item)) {
    return flatten(arr, result.concat(item));
  }
  if (Array.isArray(item)) {
    return flatten(arr, result.concat(flatten(item, [])));
  }
}


let a = [1,2,3, [1,2,3, [1,2,3]]];
console.log(flatten_tail(a));

//对象格式化
// let obj = {
//   a: '1',
//   b: {
//     c: '2',
//     D: {
//       E: '3'
//     }
//   }
// }
// 变为
// let obj = {
//   a: '1',
//   b: {
//     c: '2',
//     d: {
//       e: '3'
//     }
//   }
// }

let obj = {
  a: '1',
  b: {
    c: '2',
    D: {
      E: '3'
    }
  }
}

function lowerCase(obj, convertedObj = {}) {
  const entries = Object.entries(obj);
  if (entries.length === 0) {
    return convertedObj;
  }
  const [key, value] = entries[0];
  delete obj[key];
  if (typeof value === 'object') {
    return lowerCase(obj, {
      ...convertedObj,
      [key.toLowerCase()]: lowerCase(value)
    });
  }
  return lowerCase(obj, {
    ...convertedObj,
    [key.toLowerCase()]: value
  });
}

console.log(lowerCase(obj));