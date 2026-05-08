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
     * dfs, return if the val is bigger
     * end, the val should bigger thean the maxium in bwteen
     * [root],dfs,update the second bigger, as mid
     */
    goodNodes(root) {
        if(!root) return 0
        let queue=[[root,root.val]]
        let ans = 0
        while(queue.length>0) {
            let [node, maxV] = queue.shift()
            if (node.val>=maxV) {
                ans++
                maxV = Math.max(maxV,node.val)
            }
            if (node.left) queue.push([node.left,maxV])
            if (node.right) queue.push([node.right,maxV])
        }
        return ans
    }
}

//  const dfs= (node,maxValue) => {
//             if(!node) return 0
    
//             let res = node.val >= maxValue? 1:0;
//             maxValue = Math.max(node.val,maxValue)
//             res += dfs(node.left,maxValue)
//             res += dfs(node.right,maxValue)
//             return res
//         }
//         return dfs(root,root.val)