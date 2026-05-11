/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 * //this is a in-order, compare, the right to root, and then root to left
 * // if valid, continue,so we could use either dfs ot bfs
 * // for dfs, !root return;, then if left, go,
 * //base: if (node.left && node.left.val < root.val) {dfs(root.left)} 
 * if dfs(node.left) dfs(node.right)
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     * so we need a max and min for the node, we are going to visit
     * the max on the left, with be so far the biggest, on the right ,will be a min,
     * it the the maxnumber that we visited
     */
    
    isValidBST(root) {
       function dfs(node,min=-Infinity,max=Infinity) {
            if(!node) return true
            if (node.val >= max || node.val<=min) return false
            return dfs(node.left, min, node.val) && dfs(node.right, node.val,max)
       }
       return dfs(root)
       
    }
}
