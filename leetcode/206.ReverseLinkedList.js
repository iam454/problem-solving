/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let ans = null;
  let curNode = head;

  while (curNode) {
    let nextNode = curNode.next;
    curNode.next = ans;
    ans = curNode;
    curNode = nextNode;
  }

  return ans;
};
