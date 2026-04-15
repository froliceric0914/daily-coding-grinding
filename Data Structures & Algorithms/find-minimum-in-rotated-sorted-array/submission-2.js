class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * find out how many times it is rotated
     * then the miniumn, will be the nums[k%nums.length]
     * left and right
     * when [left]<[right],means we are in the asceding zone
     * //we need to find where the [left]>[right]
     * do a reverse binary seach, left = right - .flor
     */
    findMin(nums) {
        let left = 0,
        right = nums.length-1
        let min = Infinity
        while (left<=right) {
            let mid = left + Math.floor((right-left)/2)
            min = Math.min(min,nums[mid])
            if (nums[mid]<nums[right]) {
                right = mid-1
            } else {
                left = mid+1
            } 
        }

        return min
    }
}
