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
  let m = new Map();
  let q = [];
  q.push([root, 0]);

  while (q.length) {
    let [node, level] = q.shift();

    m.set(level, (m.get(level) || 0) + node.val);

    if (node.left) {
      q.push([node.left, level + 1]);
    }
    if (node.right) {
      q.push([node.right, level + 1]);
    }
  }

  let arr = Array.from(m.values());
  let max = Math.max(...arr);

  return arr.indexOf(max) + 1;
};
