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
  if (!head) {
    return head;
  }
  let current = head;
  let previousNode = null;
  while (current) {
    const nextNode = current.next;
    if (current.val === val) {
      if (current === head) {
        head = nextNode;
        current.next = null;
        current = head;
      } else {
        previousNode.next = nextNode;
        current.next = null;
        current = nextNode;
      }
    } else {
      previousNode = current;
      current = nextNode;
    }
  }

  return head;
};

function recursiveLinkedNode(head) {
  while (head) {
    console.log(head.val);
    head = head.next;
  }
}

const node6 = new ListNode(2, null);
const node5 = new ListNode(5, node6);
const node4 = new ListNode(3, node5);
const node3 = new ListNode(2, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(6, node2);
recursiveLinkedNode(removeElements(node1, 2));