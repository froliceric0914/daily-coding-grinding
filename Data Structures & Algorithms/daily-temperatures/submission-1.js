class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const daysLen = temperatures.length
        if (daysLen === 1) return [0]
        let results = new Array(daysLen).fill(0)
        let stack = []
     
        for (let curr = 0; curr < daysLen; curr++) {
            const currTemp = temperatures[curr] 
            while(stack.length>0 && stack[stack.length-1][1]<currTemp) {
                const [past, pastTemp] = stack.pop()
                results[past] = curr - past
            }
            stack.push([curr,currTemp])
        }
        return results
    }
}
