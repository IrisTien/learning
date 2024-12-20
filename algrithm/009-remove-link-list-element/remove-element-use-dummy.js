/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let dummyHead = new ListNode(NaN, head);
  let current = dummyHead;
  let previousNode = null;
  while (current) {
    const nextNode = current.next;
    if (current.val === val) {
      previousNode.next = nextNode;
      current.next = null;
    } else {
      previousNode = current;
    }
    current = nextNode;
  }

  const finalHead = dummyHead.next;
  dummyHead.next = null
  return finalHead;
};

function recursiveLinkedNode(head) {
  while (head) {
    console.log(head.val);
    head = head.next;
  }
}


const node6 = new ListNode(2, null);
const node5 = new ListNode(2, node6);
const node4 = new ListNode(3, node5);
const node3 = new ListNode(2, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(2, node2);
recursiveLinkedNode(removeElements(node1, 2));