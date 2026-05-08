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
     * @return {number[]}
     * using the BFS, and return to the last element of the queue
    each layer, return to the layer[]
    while queue; push left, and right, let layerL = queue.length
     */
    rightSideView(root) {
        if (!root) return []
        let queue = [root]
        let ans = []
        while (queue.length > 0) {
            let layerL = queue.length
            const rightE = queue[layerL-1].val //grab the last e's value
            ans.push(rightE)
            //push all the next layer to the queue
            for (let i = 0; i< layerL;i++) {
                const node = queue.shift()
                if(node.left) queue.push(node.left)
                if(node.right) queue.push(node.right)
            }
        }
        return ans
    }
}
