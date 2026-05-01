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
     * compare the height of left and right
     */

    calHeight (node) {
        if (!node) return 0
        return 1 + Math.max(this.calHeight(node.left), this.calHeight(node.right))
    }

    isBalanced(root) {
        if(!root) return true

        let left = this.calHeight(root.left)
        let right = this.calHeight(root.right)
        if (Math.abs(left-right)>1) return false
        return this.isBalanced(root.left) && this.isBalanced(root.right)
        //for the left and right, need to both cal it's height
        

    }
}
