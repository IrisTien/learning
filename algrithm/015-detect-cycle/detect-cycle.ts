/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }
  const slowDummyHead = new ListNode(NaN, head);
  const fastDummyHead = new ListNode(NaN, head);
  let slow = slowDummyHead,
    fast = fastDummyHead;
  while (slow && fast && slow !== fast) {
    slow = slow.next;
    fast = fast.next?.next || null;
  }

  if (fast === null || slow === null) {
    return null;
  }
  let temp = slowDummyHead;
  while (temp !== fast) {
    temp = temp.next;
    fast = fast.next;
  }
  return temp;
}

const node7 = new ListNode(7, null);
const node6 = new ListNode(6, node7);
const node5 = new ListNode(5, node6);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);
node7.next = node3;
console.log(detectCycle(node1));


const nodeB2 = new ListNode(2, null);
const nodeB1 = new ListNode(1, nodeB2);
nodeB2.next = nodeB1;
console.log(detectCycle(nodeB1));


const nodeC1 = new ListNode(1, null);
console.log(detectCycle(nodeC1));
