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
     * @param {number} key
     * @return {TreeNode}
     * after find the node, we need to find the replacement and move it up
     * then reconnect the node
     */
    deleteNode(root, key) {
        if (!root) return null

        if (key > root.val) {
            root.right = this.deleteNode(root.right,key) //?
        } else if (key < root.val) {
            
            root.left = this.deleteNode(root.left,key)
        } else {
            if (!root.left) {
                root = root.right
            } else if (!root.right) {
                root = root.left
            } else {
                let curr = root.left
                while (curr.right) {
                    curr = curr.right
                }
                root.val = curr.val
                //modify the root.left
                root.left = this.deleteNode(root.left,root.val)

            }
        }
        return root
    }
}
