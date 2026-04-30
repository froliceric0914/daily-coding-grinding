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
     * //for each node, we need to use the dps to calculate
     * [node, height +1]
     */
    calculateHeight(node) {
        if (!node) return 0
        return 1 + Math.max(this.calculateHeight(node.left), this.calculateHeight(node.right))
    }

    diameterOfBinaryTree(root) {
      if(!root) return 0
      let stack = [root]
      let ans = 0
      while(stack.length>0) {
        const node = stack.pop()
        const left = this.calculateHeight(node.left)
        const right = this.calculateHeight(node.right)
        const diameter = left+right
        ans = Math.max(ans,diameter)
        if (node.left) stack.push(node.left)
        if (node.right) stack.push(node.right)

      }
      return ans
    }
}
