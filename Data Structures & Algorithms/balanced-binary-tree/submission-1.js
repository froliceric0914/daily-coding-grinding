/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     * bottom-up: need value from the sub-tree
     * return: [isBalanced, height]
     * base: [true, 0] !
     * combine left and right: left[0]&&right[0] || abs(left[1]-right[1])<1
     */
    height(node) {
        /*
         return 1 + this.height(node)
         base: 0 // 1
         combine: Math.max
        */
        if (!node) return 0
        let left = this.height(node.left)
        let right = this.height(node.right)
        return 1 + Math.max(left,right)
    }

    isBalanced(root) {
        if (!root) return true
        let left = this.height(root.left)
        let right = this.height(root.right)
        if (Math.abs(left-right)<=1) {
            return this.isBalanced(root.left) && this.isBalanced(root.right)
        } else {
            return false
        }
    }
}
