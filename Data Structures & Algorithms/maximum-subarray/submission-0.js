class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * //iterate through the array, if the sum is minus, forfeit it and restart
     */
    maxSubArray(nums) {
        let ans = -Infinity

        let sum = 0
        for (let num of nums) {
            sum = Math.max(sum + num, num)
            ans = Math.max(ans,sum)
        }
        return ans
    }
}
