function testFunc(...args) {
  console.log(this, ...args);
}

var myProfile = {
  name: 'Iris'
};

testFunc.apply(myProfile, [24, 34]);
testFunc.call(myProfile, 24, 34);

var yourProfile = {
  name: 'Peter'
};

let bindTestFunc = testFunc.bind(yourProfile, 24, 25);
let bindTestFunc2 = bindTestFunc.bind(yourProfile, 26, 27);
bindTestFunc2(28, 29);


function log(...args) {
  console.log(this, ...args);
}
const boundLog = log.bind("this value", 1, 2);
const boundLog2 = boundLog.bind("new this value", 3, 4);
boundLog2(5, 6); // "this value", 1, 2, 3, 4, 5, 6


// 实现my bind
Function.prototype.myBind = function (context) {
  //
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  //
  const args = [...arguments].slice(1),
    fn = this;
  console.log('ARGUMENTS-BEFORE', arguments);
  return function Fn() {
    // 根据调用方式，传入不同绑定值
    console.log('instanceof Fn?', this instanceof Fn);
    // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
    // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
    console.log('ARGS', args, 'ARGUMENTS', arguments);
    return fn.apply(this instanceof Fn ? new fn(...arguments) : context, args.concat(...arguments));
  }
}

const boundLog3 = log.myBind("new this value", 7, 8);
const testContext = {
  boundLog3,
}
boundLog3();
testContext.boundLog3();
const boundLogNewTest = new boundLog3(9);