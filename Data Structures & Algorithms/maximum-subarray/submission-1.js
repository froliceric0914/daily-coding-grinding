class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * if the pre sum is less than 0, restart
     * need ans,and sum
     */

    maxSubArray(nums) {
        let ans = -Infinity
        let sum = 0
        for (let num of nums) {
            sum = Math.max(num, sum + num)//if the previous is below 0, restart at num
            ans = Math.max(ans, sum)
        }
        return ans
    }
}
