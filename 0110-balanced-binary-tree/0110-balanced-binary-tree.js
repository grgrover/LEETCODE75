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
 * @return {boolean}
 */
var isBalanced = function(root) {
  var result = true;
  const findHeight = function (root) {
    if (!root) {
      return 0
    }
    var left = findHeight(root.left);
    var right = findHeight(root.right);
    if (Math.abs(right-left)>1) {
      result = false;
    }
    return Math.max(left, right) + 1;
  }
  findHeight(root)
  return result;
}
