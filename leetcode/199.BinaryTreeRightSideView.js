/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  let ans = [];
  let q = [];

  if (!root) {
    return ans;
  }

  q.push([root, 0]);

  while (q.length) {
    let tmp = q.shift();
    let node = tmp[0];
    let depth = tmp[1];

    ans[depth] = node.val;

    if (node.left) {
      q.push([node.left, depth + 1]);
    }

    if (node.right) {
      q.push([node.right, depth + 1]);
    }
  }

  return ans;
};
