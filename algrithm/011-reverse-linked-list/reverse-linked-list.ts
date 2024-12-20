/**
 * https://leetcode.com/problems/reverse-linked-list/description/
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

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null;
  }
  if (head.next === null) {
    return head;
  }
  let prev: ListNode = head;
  let cur: ListNode = head.next;
  let next: ListNode = head.next.next;
  while (cur !== null) {
    if (prev === head) {
      prev.next = null;
    }
    let newCur: ListNode = next;
    cur.next = prev;
    prev = cur;
    cur = newCur;
    next = cur?.next || null;
  }
  return prev;
}

function print(head: ListNode | null) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  console.log(arr);
}

// const listNode5 = new ListNode(5);
// const listNode4 = new ListNode(4, listNode5);
// const listNode3 = new ListNode(3, listNode4);
// const listNode2 = new ListNode(2, listNode3);
// const listNode1 = new ListNode(1, listNode2);
// print(reverseList(listNode1));

// const listNodeB2 = new ListNode(2, null);
// const listNodeB1 = new ListNode(3, listNodeB2);
// print(reverseList(listNodeB1));

// const listNodeC1 = new ListNode(4, null);
// print(reverseList(listNodeC1));

// print(reverseList(null));
