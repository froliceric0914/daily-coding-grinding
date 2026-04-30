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
     * //stack, [node,depth+1]
     */
    maxDepth(root) {
        if (!root) return 0
        let stack = [[root,1]]
        let max = 0
        while (stack.length > 0) {
            const [node,depth] = stack.pop()
            max = Math.max(max,depth)
            if (node.left) {
                stack.push([node.left,depth+1])
            }
            if (node.right) {
                stack.push([node.right,depth+1])
            }
        }
        return max
    }   
}
