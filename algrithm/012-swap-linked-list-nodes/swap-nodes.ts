/*
* https://leetcode.com/problems/swap-nodes-in-pairs/description/
*/

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

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
    const dummyHead = new ListNode(NaN, head);
    let pre = dummyHead;
    let item1 = head;
    let item2 = head?.next || null;
    while (item1 && item2) {
      swapPair(pre, item1, item2);
      pre = item1;
      item1 = item1.next;
      item2 = item1?.next || null;
    }
    return dummyHead.next;
};

function swapPair(pre: ListNode, item1: ListNode, item2: ListNode) {
  const temp = item2?.next || null;
  pre.next = item2;
  item2.next = item1;
  item1.next = temp;
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
print(swapPairs(node1));


const node7 = new ListNode(3, null);
const node6 = new ListNode(2, node7);
const node5 = new ListNode(1, node6);
print(swapPairs(node5));


const node9 = new ListNode(2, null);
const node8 = new ListNode(1, node9);
print(swapPairs(node8));

const node10 = new ListNode(1, null);
print(swapPairs(node10));

print(swapPairs(null));
