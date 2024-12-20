var memoize = function(func, context) {
  let cache = Object.create(null);
  context = context || this;

  return function(...key) {
    console.log(cache);
    if (!cache[key]) {
      cache[key] = func.apply(context, key);
    }
    return cache[key];
  }
}

function add(a, b) {
  return a + b;
}

var addWithCache = memoize(add);
console.log(addWithCache(20, 30));
console.log(addWithCache(20, 30));