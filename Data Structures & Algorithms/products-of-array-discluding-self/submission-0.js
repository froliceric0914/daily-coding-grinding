class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        //only product,
        //make a [n.length-1]to save product of itsleft
        //then when iterate from the right, [ans] will be n*[leftn-1]
        //n *=[i]
        //edge, if there is a zeo,the answ
        const numsLen = nums.length
        let leftP = Array(numsLen).fill(1)
        let ans = Array(numsLen).fill(0)
        for(let i = 1;i<numsLen;i++){
            leftP[i] = leftP[i-1]*nums[i-1]
        }
        let counter = 1
        for(let j = numsLen-1; j>=0;j--) {
            ans[j] = counter*leftP[j]
            counter *= nums[j]
        }
        return ans
    }
}
