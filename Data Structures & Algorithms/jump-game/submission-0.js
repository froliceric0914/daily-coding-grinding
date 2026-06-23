class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     * on each accessible spot,
     * index + [index] <= length, then true
     **/
    canJump(nums) {
        const n = nums.length;
        let goal =n-1;
        for(let i=n-2; i>=0 ;i--) {
            if (nums[i]+i>=goal) {
                goal = i//on each step we need to meet the goal
            }
        }
        return goal===0//
    }
}
