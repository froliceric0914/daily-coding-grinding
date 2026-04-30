/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     * prev = null
     * temp = curr.next
     * curr.next to prev
     * prev to curr
     */
    reverseList(head) {
        let prev = null
        let curr = head
        while (curr) {
            const temp = curr.next
            curr.next = prev
            prev = curr
            curr = temp
        }
        return prev
    }
}
