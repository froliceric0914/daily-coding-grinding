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
        let ans = [];
        const dfs=(node,depth)=> {
            if (!node) return
            if (depth ===ans.length) {
               ans.push(node.val)
            }
            dfs(node.right,depth+1)
            dfs(node.left,depth+1)
         }
         dfs(root,0)
        //save the first right kid of each layer, use depth to record the depth
      //   let queue = [root]
      //   let ans = []
      //   while (queue.length > 0) {
      //       const layLen = queue.length
      //       ans.push(queue[layLen-1].val)
      //       for (let i = 0;i<layLen;i++) {
      //          const node = queue.shift()
      //          if (node.left) queue.push(node.left)
      //          if (node.right) queue.push(node.right)
      //       }
      //   }
        return ans
    }
}
