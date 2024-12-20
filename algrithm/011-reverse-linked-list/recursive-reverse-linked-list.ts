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

import { ListNode } from './reverse-linked-list';

function recursiveReverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }
  return doReverse(null, head);
}

function doReverse(pre: ListNode, cur: ListNode): ListNode {
  if (cur === null) {
    return pre;
  }
  const next: ListNode = cur.next;
  cur.next = pre;
  return doReverse(cur, next);
}

function print(head: ListNode | null) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  console.log(arr);
}

const node5 = new ListNode(5);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);
print(recursiveReverseList(node1));

const nodeB2 = new ListNode(2, null);
const nodeB1 = new ListNode(3, nodeB2);
print(recursiveReverseList(nodeB1));

const nodeC1 = new ListNode(4, null);
print(recursiveReverseList(nodeC1));

print(recursiveReverseList(null));
