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
     * dfs, return if the val is bigger
     * end, the val should bigger thean the maxium in bwteen
     * [root],dfs,update the second bigger, as mid
     */
    goodNodes(root) {
        const dfs= (node,maxValue) => {
            if(!node) return 0
    
            let res = node.val >= maxValue? 1:0;
            maxValue = Math.max(node.val,maxValue)
            res += dfs(node.left,maxValue)
            res += dfs(node.right,maxValue)
            return res
        }
        return dfs(root,root.val)

    }
}
