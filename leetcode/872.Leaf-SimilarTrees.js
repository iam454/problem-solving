/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  let arr1 = [];
  let arr2 = [];

  function dfs(node, arr) {
    if (node.left === null && node.right === null) {
      arr.push(node.val);
    }
    if (node.left) {
      dfs(node.left, arr);
    }
    if (node.right) {
      dfs(node.right, arr);
    }
  }

  dfs(root1, arr1);
  dfs(root2, arr2);

  return JSON.stringify(arr1) === JSON.stringify(arr2);
};
