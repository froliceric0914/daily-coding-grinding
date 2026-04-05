class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let sizes = [],
        res=""
        for (let str of strs) {
            sizes.push(str.length)
        }
        for (let size of sizes){
            res = res + size.toString() +","
        }
        res+="#"
        strs.forEach((e)=>{
            res+=e
        })
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log("str",str)
        //get all the size,
        //counter ++, till the start of the string
        //then the res will be from (i,size),i+=size
        //how to identify the s.length and 
        let sizes = [],
        i = 0,
        res=[]
        while(str[i]!=="#"){
            let curr = ""
            while (str[i]!==",") {
                curr+=str[i]
                i++
            }
            
            sizes.push(parseInt(curr))
            i++
        }
        i++
        for (let size of sizes) {
            res.push(str.substring(i,i+size))
            i+=size
        }
        return res
    }
}
