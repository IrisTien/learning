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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummyHead = new ListNode(NaN, head);
  let slow: ListNode = dummyHead;
  let fast: ListNode = dummyHead;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
    if (fast === null) {
      return head;
    }
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  const temp: ListNode = slow.next;
  if (temp) {
    slow.next = temp.next;
    temp.next = null;
  }
  return dummyHead.next;
}

function print(head: ListNode | null) {
  const arr = [];
  while(head) {
    arr.push(head.val);
    head = head.next;
  }
  console.log(arr);
}

const node4 = new ListNode(4, null);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);
print(removeNthFromEnd(node1, 2));


const node7 = new ListNode(3, null);
const node6 = new ListNode(2, node7);
const node5 = new ListNode(1, node6);
print(removeNthFromEnd(node5, 3));


const node9 = new ListNode(2, null);
const node8 = new ListNode(1, node9);
print(removeNthFromEnd(node8, 2));

const node10 = new ListNode(1, null);
print(removeNthFromEnd(node10, 1));

print(removeNthFromEnd(null, 0));