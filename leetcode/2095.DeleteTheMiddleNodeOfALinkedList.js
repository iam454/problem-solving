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
var deleteMiddle = function (head) {
  let cnt = 0;
  let tmp = head;
  while (tmp) {
    cnt += 1;
    tmp = tmp.next;
  }

  let target = Math.floor(cnt / 2);

  if (cnt === 1) {
    return null;
  }

  let ans = head;
  cnt = 0;

  while (ans) {
    cnt += 1;
    if (cnt === target) {
      ans.next = ans.next.next;
    }
    ans = ans.next;
  }

  return head;
};
