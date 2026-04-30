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
     * //cut and merge the list
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let dummy = new ListNode(null,head)
        let slow = head
        let fast = head
        //find the half
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }
        let temp2 = slow.next
        let list2nd = temp2 //2nd half
        //create the first half
        slow.next = null

        //reverse the 2nd half
        let p2 = list2nd
        let prev = null
        
        while (p2) {
            let temp = p2.next
            p2.next = prev
            prev = p2
            p2 = temp
        }
        //prev is the start
        let list2 = prev
        let list1 = head.next

        let curr = head

        while (list1 && list2) {
          curr.next = list2
          list2 = list2.next
          curr = curr.next

          curr.next = list1
          list1 = list1.next
          curr= curr.next

        }
        if (list1) {
            curr.next = list1
        } else {
            curr.next = list2
        }
        return dummy.next
    }
}
