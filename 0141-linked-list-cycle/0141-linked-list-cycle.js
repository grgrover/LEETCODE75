/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let position1 = head;
  let position2 = head;
  while (position2?.next?.next) {
    position1 = position1.next;
    if (position2.next.next) {
      position2 = position2.next.next
    }
    if (position1 === position2) {
      return true;
    }
  }
  return false;
};