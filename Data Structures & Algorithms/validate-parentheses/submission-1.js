class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     * if find the left half, lag ++
     * if find right half, flag --
     */
    isValid(s) {
        const keys = {
            "]":"[",
            "}":"{",
            ")":"("
            }
        let stack = []
        for (let key of s){
            if (Object.values(keys).includes(key)){//push if it is left half
                stack.push(key)
            } else {
                //else if it's a right half, 
                //then we need to check if the last one is matching the current key
                if (stack.pop() !== keys[key]) {
                    return false
                }
            }
        }
        return stack.length===0
    }
}
