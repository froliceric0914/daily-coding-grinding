class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     * 
     * 
     * map= [[[target - [index],[index]]]
     * in map, it is [target value, origin_index]
     * if map.has([index_1]), return [index_x,map.get(value)]
     */
    twoSum(nums, target) {
        let seen = new Map()
        for (let i = 0; i < nums.length; i++) {
            const remain = target - nums[i]
            if (seen.has(nums[i])) {
                //
                return [seen.get(nums[i]),i]
            }
            seen.set(remain,i)
        }
        return
    }
}
