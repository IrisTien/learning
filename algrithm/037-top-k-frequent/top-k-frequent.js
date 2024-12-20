class Heap {
  constructor() {
    this.queue = [];
  }

  push(value) {
    this.queue.push(value);

    let index = this.size() - 1;
    let parent = Math.floor((index - 1) / 2);

    while (parent >= 0 && this.compare(parent, index) > 0) {
      [this.queue[index], this.queue[parent]] = [this.queue[parent], this.queue[index]];

      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  pop() {
    if (this.size() <= 1) {
      return this.queue.pop();
    }

    const out = this.queue[0];
    this.queue[0] = this.queue.pop();

    let index = 0;
    let left = 1;
    let smallerChild = this.compare(this.queue[left], this.queue[left + 1]) > 0 ? left + 1 : left;
    while (left < this.size() && this.compare(index, smallerChild) > 0) {
      [this.queue[index], this.queue[smallerChild]] = [this.queue[smallerChild], this.queue[index]];
      index = smallerChild;
      left = 2 * index + 1;
      smallerChild = this.compare(this.queue[left], this.queue[left + 1]) > 0 ? left + 1 : left;
    }
    return out;
  }

  size() {
    return this.queue.length;
  }

  compare(index1, index2) {
    if (this.queue[index1] === undefined || this.queue[index2] === undefined) {
      return -1;
    }
    return this.queue[index1] - this.queue[index2];
  }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const heap = new Heap();
  heap.push(3);
  console.log(heap);
  heap.push(5);
  console.log(heap);
  heap.push(2);
  console.log(heap);
  heap.push(6);
  console.log(heap);
  heap.push(7);
  console.log(heap);
  heap.push(4);
  console.log(heap);
  heap.push(1);
  console.log(heap);
  heap.pop();
  console.log(heap);
};

topKFrequent();