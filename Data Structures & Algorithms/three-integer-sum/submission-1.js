class Solution {
    /**
     * @param {number[]}
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b)
        let ans =[]
        //basically, still need to iterate through the whole array
        //sum === 0, it's ans;
        //sum < 0, need to ascend=>move left
        //sum > 0, need to descend=>move right
        //when the 2 adjascent are the same, need to skip=> move left or right
        for (let i = 0; i < nums.length-2;i++) {
            if ( i>0 && nums[i]===nums[i-1]) continue
            let left = i + 1
            let right = nums.length-1
          
            while (left<right) {
                let sum = nums[i] + nums[left] + nums[right]
                if (sum===0) {
                    ans.push([nums[i],nums[left],nums[right]])
                    while (left< right && nums[left]===nums[left+1]) left++
                    while (left < right && nums[right]===nums[right-1]) right--
                    left++
                    right--
                } else if (sum<0) {
                    left++
                } else if (sum>0) {
                    right--
                }
                
            }
        }
     
        return ans
    }
}