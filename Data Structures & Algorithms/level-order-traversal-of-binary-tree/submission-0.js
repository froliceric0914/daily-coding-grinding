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
     * @return {number[][]}
     * //bfs, queue = [root]
     * each layer, make a layer =[], for i< queue.lenght, push the val to the ans, and push to the ans[] 
     */
    levelOrder(root) {
        if (!root || root.length===0) return []
        let queue = [root]
        let ans =[]
        while(queue.length > 0) {
            const layerLen = queue.length
            let layer = []
            for (let i = 0;i<layerLen; i++) {
                let node = queue.shift()
                layer.push(node.val)
                if (node.left) queue.push(node.left)
                if (node.right) queue.push(node.right)
            }
            ans.push(layer)
        }
        return ans
    }
}
