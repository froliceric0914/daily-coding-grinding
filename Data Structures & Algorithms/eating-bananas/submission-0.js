class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
    //lower speed with be 1
    //hight speed will be total of piles
     */
    minEatingSpeed(piles, h) {
        let max = Math.max(...piles)
        let min = 1
        let ans = max
        while (min<=max) {
            let mid = Math.floor((min+max)/2)
            let totalTime = 0
            for (let pile of piles) {
                totalTime += Math.ceil(pile/mid)
            }
            if (totalTime<= h) {
                ans = mid
                max = mid - 1
            } else {
                min = mid + 1
            }
        }
        return ans

    }
}
