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
    //use pre-order, travese from left -> node -> left, and counter ++
    kthSmallest(root, k) {
        let counter = 0
        let ans = null
        function dfs(node) {
            if(!node) return
            dfs(node.left)
            counter++
            if (counter === k) {
                ans = node.val
                return
            }
            dfs(node.right)
        }

        dfs(root)
        return ans
       
    }
}
