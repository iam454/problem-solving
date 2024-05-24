/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let arr = [];
  let n = 0;

  while (head) {
    arr.push(head.val);
    head = head.next;
    n += 1;
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, arr[i] + arr[n - 1 - i]);
  }

  return ans;
};
