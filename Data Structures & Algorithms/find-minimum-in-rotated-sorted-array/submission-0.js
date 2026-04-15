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
        while (left<right) {
            let mid = left + Math.floor((right-left)/2)
            if (nums[mid]<nums[right]) {
                right = mid
            } else if (nums[left]<nums[mid]) {
                left = mid
            } else if (nums[left]<nums[right]) {
                return nums[left]
            } else {
                break
            }
        }

        const k = nums[left]<nums[right]?left:right

        return nums[k%nums.length]
    }
}
