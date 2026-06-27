
/**
 * const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
 */
class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        let maxQueue = new MaxPriorityQueue()
        for (let stone of stones) {
            maxQueue.enqueue(stone)
        }
        while (maxQueue.size() >= 2){
            let stone1 = maxQueue.dequeue()
            let stone2 = maxQueue.dequeue()
            const diff = stone1 - stone2
            if (diff > 0) {
                maxQueue.enqueue(diff)
            }
        }
        return maxQueue.size() === 0 ? 0 : maxQueue.front()
        
    }
}