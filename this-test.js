// var a = 10;
// var obj = {
//   a: 20
// }
// function fn() {
//   console.log(this.a);
// }
// fn();


// 隐式绑定
// var o = {
//   a: 10,
//   b: {
//     a: 12,
//     fn: function () {
//       console.log(this.a); //undefined
//       console.log(this); //window
//     }
//   }
// }
// // var j = o.b.fn;
// // j();

// o.b.fn();


// new 过程return一个对象，此时this指向return的对象：
// function fn() {
//   this.user = 'xxx';
//   return {};
// }
// var a = new fn();
// console.log(a.user); //undefined

// 箭头函数

// this.arrowTest="global";
// const obj = {
//   a: 'abc',
//   sayThis: () => {
//     console.log(this);
//   }
// };
// obj.sayThis(); // window JavaScript sayThis
// const globalSay = obj.sayThis;
// globalSay();


// 手动实现一个new方法
function myNew(func, ...args) {
  const object = {};
  object.__proto__ = func.prototype;
  const result = func.apply(object, args);
  return result instanceof Object? result : object;
}
function Person (name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sayName = function() {
  console.log(this.name);
}
const testPerson = myNew(Person, 'fred', '73');
testPerson.sayName();