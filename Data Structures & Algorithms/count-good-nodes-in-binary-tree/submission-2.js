/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *  record the max so far, in each dps, compare if the current val is bigger;
 * if so, record the ans, and update the max
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
 
    goodNodes(root) {
        let ans = 0
        function dfs(node,max) {
            if (!node) return 
            if (node.val>=max) {
                max = Math.max(max,node.val)
                ans+=1
            }
            dfs(node.left,max)
            dfs(node.right,max)
        }
        dfs(root,root.val)
        return ans
    }
}
