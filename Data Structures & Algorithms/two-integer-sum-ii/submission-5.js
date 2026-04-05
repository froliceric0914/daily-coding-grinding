class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     * for each pos, we want to know the diff, which is target-value
     * so if we find the diff === [i], we can return to the index i1, and current
     * so in the hash map, it should be {[diff]:i,...}
     * space: hash_map, which is a set;,const diff
     * }
     * {
     * 
     * }
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;
        while (left < right) {
            const sum = numbers[left] + numbers[right];
            if (sum === target) {
                return [left + 1, right + 1];
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
        return null

    }
}

