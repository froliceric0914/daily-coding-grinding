class MinStack {
    constructor() {
        this.stack = new Array()
        this.minStack = new Array()
    
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        if(this.minStack.length===0 || this.minStack[this.minStack.length-1] >= val) {
            this.minStack.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        const last = this.stack.pop()
        if (last === this.minStack[this.minStack.length-1]) {
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
        return this.minStack[this.minStack.length-1]
    }
}
