class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     * use map, to counter the freq: Map.set(k, (Map.get(k)||0)+1)
     */
    topKFrequent(nums, k) {
        let hashNums = new Map ()
        for(let num of nums){//map
            hashNums.set(num, (hashNums.get(num)||0)+1)
        }
        console.log("hashNums",hashNums)
        //[[key,freq]]
        //descending by frequncy
        const sortedEntries = [...hashNums.entries()].sort((a,b)=>b[1]-a[1])
        console.log("sortedEntries: ", sortedEntries)
        let counter = k
        //[[freq,key]]
        let ans = []
        for (let [key, freq] of sortedEntries) {
            if (counter > 0) {
                ans.push(key)
                counter--
            }
            if (counter ===0) {
                break
            }
        }
        return ans
    }
}
