/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 * //if we use a dfs, we reach the farest left, 
 * and each time we reach, we reach the smallest, return k time that will be the answer
 * if (!node) return -1
 * while k - 1 we call the dfs,;/;//''';;
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
    
        function dfs(node) {
            if (!node) return null
            let left = dfs(node.left)
            if (left!==null) {return left}
            k -=1
            if (k === 0) return node.val
          
            return dfs(node.right)
        }
     
        return dfs(root)
    }
}
