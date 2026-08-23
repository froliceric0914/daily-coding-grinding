class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     * //push, pop,
     */

    
    calPoints(operations) {
        let ans = []
        for (let op of operations) {
            if (!isNaN(parseInt(op))) {
                ans.push(parseInt(op))
            } else if (op === "+") {
                let i = ans[ans.length-2]
                let j = ans[ans.length-1]
                const m = i + j
                ans.push(m)
            } else if (op === "C") {
                ans.pop()
            } else if (op === "D"){
                let prev = ans[ans.length-1]
                ans.push(prev*2)
            }
        }
        return ans.length !== 0?  ans.reduce((acc,rcc)=>acc+rcc) : 0
    }

}
