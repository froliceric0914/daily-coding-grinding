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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(null)
        dummy.next = head
        let fast = head
        let slow = dummy
        while (n>0) {
            fast = fast.next
            n-=1
        }
        while (fast ) {
            fast = fast.next
            slow = slow.next
        }
        slow.next = slow.next.next
        return dummy.next
    }   
}
