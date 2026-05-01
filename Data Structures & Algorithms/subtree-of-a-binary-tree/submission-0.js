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
     * //find the node of root of the subroot,
     * //then compare, 
     * !q && !p || p&&q, &&p==q
     */

    compareTree(node1, node2) {
        if (!node1 && !node2) {
            return true
        }

        if(node1&&node2&&node1.val===node2.val) {
            return this.compareTree(node1.right,node2.right) && this.compareTree(node1.left,node2.left)
        } else {
            return false
        }

    }
    isSubtree(root, subRoot) {
        if (!root && !subRoot) return true
        if (!root) return false
        
        if (this.compareTree(root, subRoot)) return true;
        
        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }
}
