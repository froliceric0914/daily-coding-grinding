class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     * the target === pos + speed*h
     *  create a new array with all speed of the vehicle to the end
     * then iterate, if find time bigger than the before stack,
     * they arrive together
     * time = (target - postion)/speed
     */
    carFleet(target, position, speed) {
        //the position is not in a descending way [pos,time]

        let cars = position.map((pos,i)=>[pos,(target-pos)/speed[i]])
        cars.sort((a,b)=>a[0]-b[0])//sort the position
        let stack = new Array()
        for(let i = 0; i <cars.length; i++) {
            //if the time consumes in stack is less, than pop

            while (stack.length>0 && stack[stack.length-1][1]<=cars[i][1]) {
                stack.pop()
            }
            //add the car costs more time into the stack
            stack.push(cars[i])
        }
        //the fleets, keep in descending way
        return stack.length
    }
}
