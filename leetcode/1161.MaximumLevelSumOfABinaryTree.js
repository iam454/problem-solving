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
 * @return {number}
 */
var maxLevelSum = function (root) {
  let sum = new Map();
  let q = [];
  q.push([root, 0]);

  while (q.length) {
    let tmp = q.shift();
    let node = tmp[0];
    let depth = tmp[1];

    sum.set(depth, (sum.get(depth) || 0) + node.val);

    if (node.left !== null) {
      q.push([node.left, depth + 1]);
    }
    if (node.right !== null) {
      q.push([node.right, depth + 1]);
    }
  }

  let arr = Array.from(sum.values());
  let max = Math.max(...arr);

  return arr.indexOf(max) + 1;
};
