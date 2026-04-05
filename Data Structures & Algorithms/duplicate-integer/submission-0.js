class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     * create the hashmap in and create the [key]:value, if the valye >0, return true
     */
    hasDuplicate(nums) {
        if (nums.length<=1) {
            return false
        }
        let hash_nums = {};
        
        for (let i=0;i<nums.length; i++) {
            const num = nums[i]
            if (hash_nums[num]===undefined) {
               hash_nums[num] = 1 
            } else {
                return true
            }
        }
        return false
    }
}
