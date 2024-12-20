Function.prototype.myBind = function (contenxt) {
  if (typeof this !== "function") {
    throw new TypeError("not a function!");
  }

  const agrs = [...arguments].slice(1);
  const fn = this;

  return function Fn() {
    return fn.apply(this instanceof Fn ? new Fn(...args) : contenxt, agrs.concat(...arguments));
  };
}

var StoryA = {
  name: 'A Story',
}

function TellMeSomething(...args) {
  console.log(this.name);
  console.log(...args);
}

const bindTellMeSomething = TellMeSomething.myBind(StoryA, '2024');
bindTellMeSomething();