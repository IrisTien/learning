
/**
 * https://leetcode.com/problems/design-linked-list/description/
 *
 * @class ListNode
 */
class ListNode {
  constructor (val, next) {
    this.val = val;
    this.next = next;
  }
}

var MyLinkedList = function() {
  this.size = 0;
  this.head = null;
  this.tail = null;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index >= this.size) {
    return -1;
  }
  let currentNode = this.head;
  for (let i = 0; i < index; i++) {
    currentNode = currentNode.next;
  }
  return currentNode ? currentNode.val : -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  const currentHead = this.head;
  this.head = new ListNode(val, currentHead);
  if (this.tail === null) {
    this.tail = this.head;
  }
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  console.log(this);
  const currentTail = this.tail;
  this.tail = new ListNode(val, null);
  console.log({currentTail});
  if (currentTail) {
    currentTail.next = this.tail;
  }
  if (this.head === null) {
    this.head = this.tail;
  }
  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index > this.size) {
    return;
  }
  if (index === 0) {
    this.addAtHead(val);
    return;
  }
  if (index === this.size) {
    this.addAtTail(val);
    return;
  }
  let prevNode = this.head;
  for (let i = 0; i < index - 1; i++) {
    prevNode = prevNode.next;
  }
  let currentNode = prevNode.next;
  prevNode.next = new ListNode(val, currentNode);
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index >= this.size ) {
    return;
  }
  let prevNode = this.head;
  for (let i = 0; i < index - 1; i++) {
    prevNode = prevNode.next;
  }
  let currentNode = prevNode.next;
  if (index === 0) {
    this.head = currentNode;
    if (currentNode === null) {
      this.tail = null;
    }
  }
  if (index === this.size - 1) {
    this.tail = prevNode;
  }
  if (currentNode) {
    prevNode.next = currentNode.next;
    currentNode.next = null;
  }
  this.size--;
};

MyLinkedList.prototype.print = function() {
  let current = this.head;
  const arr = [];
  while(current) {
    arr.push(current.val);
    current = current.next;
  }
  console.log(arr);
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

const linkedList1 = new MyLinkedList();
// linkedList1.addAtHead(1);
// linkedList1.addAtTail(3);
// linkedList1.addAtIndex(1, 2);
// console.log(linkedList1.get(0));
// console.log(linkedList1.get(1));
// linkedList1.print();
// linkedList1.deleteAtIndex(1);
// linkedList1.print();
// console.log(linkedList1.get(1));

// linkedList1.addAtTail(1);
// console.log(linkedList1.get(0));

// linkedList1.addAtIndex(0, 10);
// linkedList1.addAtIndex(0, 20);
// linkedList1.addAtIndex(1, 30);
// linkedList1.print();
// console.log(linkedList1.get(0));

const operations = ["addAtHead","addAtTail","addAtTail","get","get","addAtTail","addAtIndex","addAtHead","addAtHead","addAtTail","addAtTail","addAtTail","addAtTail","get","addAtHead","addAtHead","addAtIndex","addAtIndex","addAtHead","addAtTail","deleteAtIndex","addAtHead","addAtHead","addAtIndex","addAtTail","get","addAtIndex","addAtTail","addAtHead","addAtHead","addAtIndex","addAtTail","addAtHead","addAtHead","get","deleteAtIndex","addAtTail","addAtTail","addAtHead","addAtTail","get","deleteAtIndex","addAtTail","addAtHead","addAtTail","deleteAtIndex","addAtTail","deleteAtIndex","addAtIndex","deleteAtIndex","addAtTail","addAtHead","addAtIndex","addAtHead","addAtHead","get","addAtHead","get","addAtHead","deleteAtIndex","get","addAtHead","addAtTail","get","addAtHead","get","addAtTail","get","addAtTail","addAtHead","addAtIndex","addAtIndex","addAtHead","addAtHead","deleteAtIndex","get","addAtHead","addAtIndex","addAtTail","get","addAtIndex","get","addAtIndex","get","addAtIndex","addAtIndex","addAtHead","addAtHead","addAtTail","addAtIndex","get","addAtHead","addAtTail","addAtTail","addAtHead","get","addAtTail","addAtHead","addAtTail","get","addAtIndex"]
const params = [[84],            [2],        [39],      [3],   [1],  [42],       [1,80],     [14],         [1],        [53],      [98],        [19],      [12],      [2],     [16],       [33],       [4,17],     [6,8],       [37],       [43],      [11],           [80],       [31],       [13,23],     [17],        [4],   [10,0],     [21],       [73],     [22],          [24,37],     [14],     [97],         [8],     [6],     [17],          [50],          [28],     [76],     [79],       [18],     [30],          [5],          [9],     [83],          [3],          [40],          [26],     [20,90],          [30],          [40],     [56],     [15,23],          [51],     [21],     [26],     [83],  [30],  [12],          [8],       [4],     [20],     [45],       [10],   [56],     [18],  [33],     [2],     [70],     [57],        [31,24],     [16,92],     [40],          [23],     [26],         [1],     [92],     [3,78],     [42],     [18],     [39,9],    [13],  [33,17],   [51],[18,95],[18,33],[80],[21],[7],[17,46],[33],[60],[26],[4],[9],[45],[38],[95],[78],[54],[42,86]]
operations.forEach((op, index) => {
  console.log(`[${index}]`, op, ...params[index]);
  const res = MyLinkedList.prototype[op].call(linkedList1, ...params[index]);
  if (op === "get") {
    console.log(`[${index}]get index ${params[index]}: ${res}`);
  }
  linkedList1.print();
  console.log(`[${index}]size: ${linkedList1.size}`);
});

// 84
// linkedList1.addAtHead(84);
// linkedList1.addAtTail(2);
// linkedList1.addAtTail(39);
// console.log(linkedList1.get(3));
// console.log(linkedList1.get(1));