class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     * if find the left half, lag ++
     * if find right half, flag --
     */
    isValid(s) {
        const keys = {"]":"[","}":"{",")":"("}
        let stack = []
        const open = new Set(Object.values(keys))
        // const close = Object(keys).values()
        for (let half of s.split('')) {
            if (open.has(half)) {
                stack.push(half)
            } else {
                if (stack[stack.length-1]=== keys[half]) {
                    stack.pop()
                } else {
                    return false
                }
            }
        }
        return stack.length===0
    }
}
