class Solution {
    /**
     * @param {string} s
     * @return {number}
     * fast and slow, the fast move along, and slow at 0
     * if [fast] === [slow], move slow forward
     * ans = Math.max(ans,fast-slow)
     */
    lengthOfLongestSubstring(s) {
        let fast = 0,
        slow = 0,
        ans = 0;
        let seen = new Set()
        const sArr = s.split('')
        while (fast<sArr.length) {
            //remove the slow one by one until the duplicate is removed
            while (seen.has(sArr[fast])) {
                seen.delete(sArr[slow])
                slow++
            } 
            seen.add(sArr[fast])
            ans = Math.max(ans,fast-slow+1)
            fast++
        }
        return ans
    }
}
