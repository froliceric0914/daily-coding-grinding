class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    //create the hash of the string, and return
    //or iterate through, and create the [seen], the value of [seen] needs to be 0 at the end
    isAnagram(s, t) {
        let seen = new Map()
        const s_arr = s.split('')
        const t_arr = t.split('')
        const s_len = s_arr.length
        const t_len = t_arr.length

        if (s_len!==t_len) {return false}
        for (let i = 0; i < s_len; i++) {
            const l = s_arr[i]
            seen.set(l,(seen.get(l)||0)+1)
        }
        for (let i = 0; i < t_len; i++) {
            const l = t_arr[i]
            if (!seen.has(l)) {
                return false
            } else {
               seen.set(l   ,seen.get(l)-1)
               if (seen.get(l)===0){
                seen.delete(l)
               }
            }
        }
        return  seen.size ===0 ? true: false
    }
}
