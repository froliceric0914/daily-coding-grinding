class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    //function to identify if it matches: hash

    groupAnagrams(strs) {
        let res = {}
        for (let str of strs) {
            const sorted = str.split('').sort().join('')
            if (!res[sorted]) {
                res[sorted] = []
            }
            res[sorted].push(str)
        }
        return Object.values(res)
    }
}
