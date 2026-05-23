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
     * //ans = math.max(ans, depth)
     * depth = (n)
     * base, if not node return 0
     * 
     */
    maxDepth(root) {

        function dfs(node) {
            if (!node) return 0
            //on each level, it collect hte max depth at the level and add one
            return 1+Math.max(dfs(node.left),dfs(node.right))
        }
        return dfs(root)
    }
}
