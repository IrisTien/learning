
/**
 *https://leetcode.com/problems/implement-stack-using-queues/
 *
 */
var MyStack = function () {
  this.inQueue = [];
  this.outQueue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  if (this.outQueue.length === 0) {
    this.inQueue.push(x);
  } else {
    this.outQueue.push(x);
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let currentQueue, nextQueue;
  if (this.outQueue.length === 0) {
    [currentQueue, nextQueue] = [this.inQueue, this.outQueue];
  } else {
    [currentQueue, nextQueue] = [this.outQueue, this.inQueue];
  }
  while (currentQueue.length > 1) {
    const item = currentQueue.shift();
    nextQueue.push(item);
  }
  return currentQueue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  const item = this.pop();
  this.push(item);
  return item;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.inQueue.length === 0 && this.outQueue.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

var obj = new MyStack();
obj.push(1);
obj.push(2);
obj.push(3);
console.log(obj);
console.log(obj.top());
console.log(obj);
console.log(obj.top());
console.log(obj);
console.log(obj.pop());
console.log(obj);
console.log(obj.pop());
console.log(obj.empty());
console.log(obj);
console.log(obj.pop());
console.log(obj);
console.log(obj.empty());
console.log(obj);