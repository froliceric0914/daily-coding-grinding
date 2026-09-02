class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     * because only student rotate, when all student remains are the same, and the top of 
     * bread is different, then it ends
     */
    countStudents(students, sandwiches) {
        //how to rotate student
        //const curr = students[0]
        //if its the same, don't push back; else push back, need a counter,
        //each time counter +1, while counter === students.length, out; 
        //counter++ when push student back
        let counter = 0;
        while (counter !== students.length){
            const currStu = students.shift()
            if (currStu === sandwiches[0]){
                sandwiches.shift()
                counter = 0
            } else {
                students.push(currStu)
                counter++
            }
        }
        return students.length
    }
}
