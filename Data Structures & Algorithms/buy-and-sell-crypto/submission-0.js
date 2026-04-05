class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     * keep one pointer moving
     * set the buying pointer when meet a small number
     * keep ans = Math.max(ans,(curr-buy))
     */
    maxProfit(prices) {
        let ans = 0
        let buyIn = Infinity
        for(let i =0;i<prices.length;i++){
            if (prices[i]<buyIn) {
                buyIn = prices[i]
            }
            let diff = prices[i]-buyIn
            ans = Math.max(ans,diff)
        }
        return ans
    }
}
