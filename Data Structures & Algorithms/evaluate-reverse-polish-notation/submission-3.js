class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = new Array()
        let ans = tokens.length === 1 ? parseInt(tokens[0]) : 0
        const operators = {
            "+":(a,b)=>a+b,
            "-":(a,b)=>a-b,
            "*":(a,b)=>a*b,
            "/":(a,b)=>Math.trunc(a/b)
        }
        for (let token of tokens) {
            if (!isNaN(parseInt(token))) {
                stack.push(parseInt(token))
            } else {
                const i = stack.pop()
                const j = stack.pop()
                ans = operators[token](j,i)
                stack.push(ans)
            }
        }
        return ans
    }
}
