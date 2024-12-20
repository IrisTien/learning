
/**
 *https://leetcode.com/problems/sliding-window-maximum/
 *
 */
var SlideQueue = function () {
  this.queue = [];
}

SlideQueue.prototype.enqueue = function (value) {
  let back = this.queue.length > 0 ? this.queue[this.queue.length - 1] : undefined;
  while (back < value) {
    this.queue.pop();
    back = this.queue.length > 0 ? this.queue[this.queue.length - 1] : undefined;
  }
  this.queue.push(value);
}

SlideQueue.prototype.dequeue = function (value) {
  if (this.front() === value) {
    this.queue.shift();
  }
}

SlideQueue.prototype.front = function () {
  return this.queue.length >= 0 ? this.queue[0] : undefined;
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const maxWindowArr = [];
  var slideQueue = new SlideQueue();
  for (let i = 0; i < k; i++) {
    slideQueue.enqueue(nums[i]);
  }
  maxWindowArr.push(slideQueue.front());
  for (let i = k; i < nums.length; i++) {
    slideQueue.dequeue(nums[i - k]);
    slideQueue.enqueue(nums[i]);
    maxWindowArr.push(slideQueue.front());
  }
  return maxWindowArr;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1], 1));
console.log(maxSlidingWindow([7, 2, 4], 2));
console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3));