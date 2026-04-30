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
     */
    reverseList(head) {
        if (!head) return null
        let prev = null
        let curr = head
        while (curr) {
            //store the curr.next
            let temp = curr.next
            //reverse the curr 
            curr.next = prev
            //move prev to the curr
            prev = curr
            //move curr to the original curr.next
            curr = temp
        }
        return prev
    }
}
