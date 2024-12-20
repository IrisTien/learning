
/**
 *https://leetcode.cn/problems/implement-queue-using-stacks/description/
 *
 */
var MyStack = function() {
  this.data = [];
}

MyStack.prototype.push = function(x) {
  this.data[this.data.length] = x;
}

MyStack.prototype.pop = function() {
  if (this.data.length === 0) {
    return null;
  }
  const res = this.data[this.data.length - 1];
  this.data.length--;
  return res;
}

MyStack.prototype.size = function() {
  return this.data.length;
}

var MyQueue = function() {
  this.inStack = new MyStack();
  this.outStack = new MyStack();
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
  if (this.outStack.size() > 0) {
    return this.outStack.pop();
  }
  if (this.inStack.size() === 0) {
    return null;
  }
  let item = this.inStack.pop()
  while (item !== null) {
    this.outStack.push(item);
    item = this.inStack.pop();
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
  return this.inStack.size() === 0 && this.outStack.size() === 0;
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