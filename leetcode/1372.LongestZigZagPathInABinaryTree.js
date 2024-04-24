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
var longestZigZag = function (root) {
  let ans = 0;

  function dfs(node, prev) {
    if (!node) {
      return 0;
    }
    let l = dfs(node.left, "l");
    let r = dfs(node.right, "r");
    ans = Math.max(l, r, ans);

    if (prev === "l") {
      return r + 1;
    } else {
      return l + 1;
    }
  }

  dfs(root, -1);

  return ans;
};
