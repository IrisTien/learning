
/**
 *https://leetcode.cn/problems/implement-queue-using-stacks/description/
 *
 */
var MyQueue = function() {
  this.inStack = [];
  this.outStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.inStack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.outStack.length) {
    return this.outStack.pop();
  }
  let item;
  while (this.inStack.length) {
    item = this.inStack.pop();
    this.outStack.push(item);
  }
  return this.outStack.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  const peekItem = this.pop();
  this.outStack.push(peekItem);
  return peekItem;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.inStack.length === 0 && this.outStack.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

var obj = new MyQueue();
obj.push(1);
obj.push(2);
obj.push(3);
obj.push(4);
console.log(obj);
console.log(obj.pop());
console.log(obj);
obj.push(5);

console.log(obj);
console.log(obj.pop());
console.log(obj);
console.log(obj.pop());
console.log(obj);
console.log(obj.pop());
console.log(obj);
console.log(obj.peek());
console.log(obj);