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
  function dfs(node, curSum, counter) {
    if (!node) {
      return;
    }
    curSum += node.val;
    if (curSum === targetSum) {
      counter[0] += 1;
    }
    dfs(node.left, curSum, counter);
    dfs(node.right, curSum, counter);
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
