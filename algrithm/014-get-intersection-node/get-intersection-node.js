/**
 * https://leetcode.cn/problems/intersection-of-two-linked-lists-lcci/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let lengthA = 0, lengthB = 0;
  let tempA = headA, tempB = headB;
  while (tempA) {
    lengthA++;
    tempA = tempA.next;
  }
  while (tempB) {
    lengthB++;
    tempB = tempB.next;
  }
  let diff = lengthA - lengthB;
  let [longHead, shortHead] = diff > 0 ? [headA, headB] : [headB, headA];
  let diffAbs = Math.abs(diff);
  while (diffAbs > 0) {
    longHead = longHead.next;
    diffAbs--;
  }
  while (longHead !== shortHead && longHead) {
    longHead = longHead.next;
    shortHead = shortHead.next;
  }
  return longHead;
};

const node4 = new ListNode(4, null);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);


const node7 = new ListNode(3, null);
const node6 = new ListNode(2, node7);
const node5 = new ListNode(1, node6);



const node10 = new ListNode(3, node3);
const node9 = new ListNode(2, node10);
const node8 = new ListNode(1, node9);

console.log(getIntersectionNode(node1, node5));
console.log(getIntersectionNode(node1, node8));


console.log(getIntersectionNode(node1, node2));
console.log(getIntersectionNode(node2, node1));