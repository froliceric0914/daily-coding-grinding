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
     */
    diameterOfBinaryTree(root) {
        let ans = 0 //update the value inside of dfs
        //the dfs itself is to calculate the max height of its child
        function dfs(node) {
            if (!node) return 0
            let left = dfs(node.left)
            let right = dfs(node.right)
            ans = Math.max(ans,left+right)
            return 1 + Math.max(dfs(node.left),dfs(node.right))
 
        }
        dfs(root)
        return ans

    }
}
