class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     * sliding window, add the current, compare
     * remove the last in
     * comparision, compare the queuewith hash,after sorted, it should be equal
     */

    compare(s1,s2) {
        return s1.split('').sort().join('') ===  s2.split('').sort().join('')
    }

    checkInclusion(s1, s2) {
        const s1Len = s1.length
        for (let i = 0; i <=s2.length-s1Len;i++){
            
            let sub = s2.slice(i,i+s1Len)
            console.log("i: ", {i,sub})
            const flag = this.compare(s1,sub)
            if (flag) {
                return true
            }
        }
        return false
    }
}
