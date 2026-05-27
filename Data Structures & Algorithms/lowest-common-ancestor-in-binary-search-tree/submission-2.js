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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     * //dfs, when root p,q < root,go to left
     * //when bigger, go to right,if root laid between, then it is
     */

    dfs(node,p,q) {
      if (!node) return
      if (node.val ===p.val) return p
      if (node.val === q.val) return q
      if (p.val<node.val && q.val<node.val) {
         return this.dfs(node.left,p,q)
      } else if (p.val>node.val&&q.val>node.val) {
         return this.dfs(node.right,p,q)
      } else return node
    }
    lowestCommonAncestor(root, p, q) {
      return this.dfs(root,p,q)

    }
}
