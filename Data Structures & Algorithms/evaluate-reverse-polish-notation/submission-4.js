class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = new Array()
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
                let ans = operators[token](j,i)
                stack.push(ans)
            }
        }
        return stack[0]
    }
}
