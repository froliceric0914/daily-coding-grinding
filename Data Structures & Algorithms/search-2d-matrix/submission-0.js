class Solution {
    /**
     * @param {number[row][col]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix.length//row
        const n = matrix[0].length//col
        let left = 0;
        let right =m*n-1
        while (left<=right) {
            let mid =left + Math.floor((right-left)/2)
            let row = Math.floor(mid/n)
            let col = mid%n
            if (matrix[row][col]===target) {
                return true
            } else if ( matrix[row][col]>target) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        return false

    }
}
