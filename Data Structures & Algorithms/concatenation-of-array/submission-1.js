class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const len = nums.length
        let ans = new Array(2*len)
        let i = 0
        while(i<len) {
            ans[i] = nums[i]
            ans[i+len] = nums[i]
            i++
        }
        return ans

    }
}
