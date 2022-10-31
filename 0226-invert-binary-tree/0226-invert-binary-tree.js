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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root) {
    var newRoot = new TreeNode(root.val)
    newRoot.left = invertTree(root.right)
    newRoot.right = invertTree(root.left)
  }
  return newRoot || root;
};
