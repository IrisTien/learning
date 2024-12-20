
/**
 * https://leetcode.com/problems/design-linked-list/description/
 *
 * @class LinkNode
 */
class LinkNode {
  public val: number;
  public next: LinkNode;
  constructor(val: number, next: LinkNode) {
    this.val = val === undefined ? null : val;
    this.next = next === undefined ? null : next;
  }
}
class MyLinkedList {
  public head: LinkNode | null;
  public tail: LinkNode | null;
  public size: number;
  constructor() {
    this.head = new LinkNode(null, null);
    this.tail = null;
    this.size = 0;
  }

  get(index: number): number {
    if (index >= this.size) {
      return -1;
    }
    let cur: LinkNode = this.head;
    for (let i = 0; i <= index; i++) {
      cur = cur.next;
    }
    return cur.val;
  }

  addAtHead(val: number): void {
    const next = this.head.next;
    const newHead = new LinkNode(val, next);
    this.head.next = newHead;
    if (this.size === 0) {
      this.tail = newHead;
    }
    this.size++;
  }

  addAtTail(val: number): void {
    const newTail = new LinkNode(val, null);
    if (this.tail === null) {
      this.addAtHead(val);
    } else {
      this.tail.next = newTail;
      this.tail = newTail;
      this.size++;
    }
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.size) {
      return;
    }
    if (index === this.size) {
      this.addAtTail(val);
      return;
    }
    let prev = this.head;
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }
    const cur = prev.next;
    prev.next = new LinkNode(val, cur);
    this.size++;
  }

  deleteAtIndex(index: number): void {
    if (index >= this.size) {
      return;
    }
    let prev: LinkNode = this.head;
    for (let i = 0; i < index; i++) {
      prev = prev.next;
    }
    const cur: LinkNode = prev.next;
    prev.next = cur.next;
    cur.next = null;
    if (index === this.size - 1) {
      this.tail = prev;
    }
    this.size--;
  }

  print(): void {
    const arr: number[] = [];
    let cur = this.head;
    while (cur.next !== null) {
      cur = cur.next;
      arr.push(cur.val);
    }
    console.log(arr);
  }
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
