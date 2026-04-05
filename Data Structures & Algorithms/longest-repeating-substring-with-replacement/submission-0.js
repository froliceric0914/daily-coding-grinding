class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     * slow and fast
     * ans = Math.max(ans, len)
     * hash Seen, remove the slow till K>0 till seen.keys().length <= k
     */
    characterReplacement(s, k) {
        let slow =0;
        let ans = 0
        let seen = new Map()
        let maxFreq = 0
        for (let fast = 0;fast<s.length;fast++) {
            seen.set(s[fast], (seen.get(s[fast])||0) +1)
            maxFreq = Math.max(maxFreq, seen.get(s[fast]))
            while (fast-slow+1-maxFreq>k) {
                seen.set(s[slow],seen.get(s[slow])-1)
                slow++
            }
            ans = Math.max(ans,fast-slow+1)
        }
        return ans
    }
}
