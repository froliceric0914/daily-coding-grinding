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
     * @return {number}
     * //ans = left+right
     * bottom up
     * //we need the max length of its left
     * and the max of its right
     */
    diameterOfBinaryTree(root) {
        //height
        let ans = 0
        function maxDepth(node) {
            if (!node) return 0
            let left = maxDepth(node.left)
            let right = maxDepth(node.right)
            ans = Math.max(ans,left+right)
            return 1 + Math.max(left,right)
        }
        maxDepth(root)
        return ans
       
    }
}
