class MinStack {
    constructor() {
        this.stack = new Array()
        this.minStack = new Array()
    }
/** stack method
 * last in, first out
 * method, array.push, and array pop()
 * 
*/
    /**
     * @param {number} val
     * @return {void} // test
     */
    push(val) {
        this.stack.push(val)
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const last = this.stack.pop()
        if (last === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop()
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1]

    }
}
