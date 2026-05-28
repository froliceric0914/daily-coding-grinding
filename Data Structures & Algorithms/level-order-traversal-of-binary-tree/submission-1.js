/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 * //it is a queue- collect kids of each;shift(),and push()
 * //ans and sub,when finish, push the sub in
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
      if (!root) return []
      let ans = []
      let queue = [root]
      while (queue.length>0) {
         let queLen = queue.length
         let lay= new Array(queLen)
         for (let i = 0;i<queLen;i++){
            const node =  queue.shift()
            lay[i] = node.val
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
         }
         ans.push(lay)
      }
      return ans
    }
}
