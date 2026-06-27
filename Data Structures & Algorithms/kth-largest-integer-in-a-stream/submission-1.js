class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     * minPriorityQueue,
     * enqueue, dequeue, and front
     * when exceed the size, then dequeue
     * add and check gthe size again
     */
    constructor(k, nums) {
        this.queue = new MinPriorityQueue()
        this.size = k
        for (let num of nums) {
            this.queue.enqueue(num)
        }
        while (this.queue.size()>this.size) {
            this.queue.dequeue()
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.queue.enqueue(val)
        if (this.queue.size()>this.size) {
            this.queue.dequeue()
        }
        return this.queue.front()

    }

}
