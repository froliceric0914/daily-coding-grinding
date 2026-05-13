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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) return null
        let queue = [root]
        while (queue.length>0) {
            let node = queue.shift()
            let temp = node.left
    
            if (node.right) {
                node.left = node.right
                queue.push(node.left)
            } else {
                node.left = null
            }
            if (temp) {
                node.right = temp
                queue.push(node.right)
            } else {
                node.right = null
            }
        }
        return root
    }
}
