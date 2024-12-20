function myNew (func, ...arguments) {
  var object = {};
  object.__proto__ = func.prototype;
  const result = func.apply(object, arguments);
  return result instanceof Object ? result : object;
}


function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = myNew(Person, 'Lin', 22);
console.log(person1);