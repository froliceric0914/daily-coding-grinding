class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const len = nums.length
        let ans = new Array()
        let i = 0
        while(i<2*len) {
            ans[i] = nums[i%len]
            i++
        }
        return ans

    }
}
