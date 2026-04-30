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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode(null)
        let curr = dummy
        let carry = 0
        while (l1 || l2 || (carry!==0)){
            let digit = 0
            if (l1&&l2) {
                digit = l1.val + l2.val
            } else if (l1 && !l2) {
                digit = l1.val
            } else if (!l1 && l2){
                digit = l2.val
            }
             
            let newNode = new ListNode((digit+carry)%10)
            carry = Math.floor((carry + digit)/10)
            curr.next = newNode
            curr = curr.next
            if (l1) l1 = l1.next
            if (l2) l2 = l2.next
        }
        
        return dummy.next
    }
}
