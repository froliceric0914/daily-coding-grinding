class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    //use left and right,volumn = Math.Min()* distance
    //how to iterate, after calculate, move the pointer for one position
    maxArea(heights) {
        let ans = 0
        let right = heights.length-1
        let left = 0
        while (left < right) {
            const height = Math.min(heights[left],heights[right])
            ans = Math.max(ans, height*(right - left))
            if(heights[left]<=heights[right]){
                left++
            } else {
                right--
            }
        }
        return ans
    }
}
