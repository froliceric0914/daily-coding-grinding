class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubarraySumCircular(nums) {
        let ans = -Infinity
        let sum = 0
        let currMin = 0
        let minSum = Infinity

        let currMax = 0
        let maxSum = -Infinity
        for (let num of nums) {
            
            currMin = Math.min(num, num+currMin)
            minSum = Math.min(minSum, currMin)

            currMax = Math.max(num, currMax+num)
            maxSum = Math.max(maxSum, currMax)

            sum += num
        }
        if (maxSum < 0) return maxSum
        return Math.max(maxSum, sum-minSum)
    }
}
