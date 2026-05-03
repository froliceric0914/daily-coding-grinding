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
     * base: the algoritm!
     * post order: process the result after return
     * standard dps(node)
     */
   
    dfs(node) {
        if(!node) return [true,0]
        let left = this.dfs(node.left)
        let right = this.dfs(node.right)
        let isBalance = left[0]&&right[0] && Math.abs(left[1]-right[1])<=1
        return [isBalance, Math.max(left[1],right[1])+1]

    }

    isBalanced(root) {
        if (!root) return true
        return this.dfs(root)[0]
    }
}
