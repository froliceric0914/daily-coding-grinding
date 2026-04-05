class DynamicArray {
    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.array = new Array(capacity).fill(0)
        this.size = 0
        this.capacity = capacity
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.array[i]
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.array[i]=n
        return
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.getCapacity()===this.getSize()) {
            this.resize()
        }
      
        this.set(this.size,n)
        this.size+=1
    }

    /*
     * @returns {number}
     */
    popback() {
     
        this.size-=1

        return this.array[this.size]
    }

    /**
     * @returns {void}
     */
    resize() {
       this.array.length = this.array.length*2
       this.capacity *=2
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity
    }
}
