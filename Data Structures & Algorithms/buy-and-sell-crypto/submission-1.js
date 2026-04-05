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
        let minBuy = prices[0]
        for(let i =0;i<prices.length;i++){

            ans = Math.max(ans,prices[i]-minBuy)
            minBuy = Math.min(prices[i],minBuy)
        }
        return ans
    }
}
