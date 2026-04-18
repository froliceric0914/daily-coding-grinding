class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     * [1,2,3],[3,1,2],[2,3,1]
     */
    search(nums, target) {
        let left = 0,
            right = nums.length-1
        //how to find the cut;
        while (left < right) {
            let mid = Math.floor((left+right)/2)
            if (nums[mid]<nums[right] ) {
                right = mid
            } else {
                left = mid + 1
            }
        }
        //pivot
        let pivot = left
        let leftArr = nums.slice(0,pivot)
        let rightArr = nums.slice(pivot,nums.length)
        let sorted = [...rightArr,...leftArr]
        let left1 = 0;
        let right1= sorted.length-1

        while (left1<=right1) {
            let mid1 = Math.floor((left1+right1)/2)
            if (sorted[mid1]===target) {
                let originalIdx = (mid1 + pivot) % nums.length
                return originalIdx
            } else if (sorted[mid1]<target) {
                left1 = mid1 +1
            } else {
                right1 = mid1 -1
            }
        }
        return -1

    }

}