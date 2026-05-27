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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */

    compareTree(node1,node2) {
      if (!node1&&!node2) return true
      if(!node1&&node2 || node1&&!node2) {
         return false
      }
      if (node1 && node2 && node1.val!==node2.val) {
         return false
      }
      return this.compareTree(node1.left,node2.left) && this.compareTree(node1.right, node2.right)
    }
    isSubtree(root, subRoot) {
      if (!root&&!subRoot) return true

      let stack = [root]
      while (stack.length>0) {
         const curr = stack.pop()
         if (curr.val ===subRoot.val && this.compareTree(curr,subRoot)) {
            return true
         }
         if (curr.left) stack.push(curr.left)
         if (curr.right) stack.push(curr.right)
      }
      return false
    }
}
