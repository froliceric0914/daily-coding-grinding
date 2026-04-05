class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    //create the hash of the string, and return
    //or iterate through, and create the [seen], the value of [seen] needs to be 0 at the end
    isAnagram(s, t) {
        let seen = {}
        const s_arr = s.split('')
        const t_arr = t.split('')
        const s_len = s_arr.length
        const t_len = t_arr.length

        if (s_len!==t_len) {return false}
        for (let i = 0; i < s_len; i++) {
            if (seen[s_arr[i]]===undefined) {
                seen[s_arr[i]] = 1
            } else {
                seen[s_arr[i]]++
            }
        }
        for (let i = 0; i < t_len; i++) {
            if (seen[t_arr[i]]===undefined) {
                return false
            } else {
                seen[t_arr[i]]--
                if (seen[t_arr[i]]===0) {
                    delete seen[t_arr[i]]
                }
            }
        }
        return Object.keys(seen).length===0 ? true : false
    }
}
