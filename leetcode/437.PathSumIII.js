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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  function dfs(node, sum, counter) {
    if (!node) {
      return;
    }
    sum += node.val;
    if (sum === targetSum) {
      counter[0] += 1;
    }
    dfs(node.left, sum, counter);
    dfs(node.right, sum, counter);
  }

  function helper(node) {
    if (!node) {
      return 0;
    }
    let counter = [0];
    dfs(node, 0, counter);
    return counter[0] + helper(node.left) + helper(node.right);
  }

  return helper(root);
};
