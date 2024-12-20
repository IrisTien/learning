function debounce(fn, delay) {
  let timer;

  return function() {
    console.log('execute');
    let args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => fn.apply(this, args), delay);
  }
}

function add(a, b) {
  console.log(new Date());
  console.log('result', a+b);
  return a + b;
}

// Try debounce
// const debounceFunc = debounce(add, 2000);
// for(let index = 0; index < 50; index++) {
//   setTimeout(() => debounceFunc(1, 2), (1750 + Math.random() * 500) * index);
// }


function throttle(fn, delay) {
  let timer;
  return function () {
    console.log('execute');
    if (timer) {
      return;
    }
    console.log('time does not exist, create timer');
    timer = setTimeout(() => { fn.apply(this, arguments); timer = undefined; }, delay);
  }
}

function throttle_accurcy(fn, delay) {
  let timer;
  let startTime = Date.now();
  return function() {
    const currentTime = Date.now();
    const remainingTime = delay - (currentTime - startTime);
    clearTimeout(timer);
    if (remainingTime <= 0) {
      fn.apply(this, arguments);
      startTime = Date.now();
    } else {
      timer = setTimeout(() => fn.apply(this, arguments), delay);
    }
  }
}

// Try throttle
const throttleFunc = throttle_accurcy(add, 2000);
for(let index = 0; index < 50; index++) {
  setTimeout(() => throttleFunc(1, 2), (1750 + Math.random() * 500) * index);
}