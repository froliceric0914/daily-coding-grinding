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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let point = new ListNode(null)
        let dummy= point
        while (list1 && list2) {
            if (list1.val <= list2.val) {
                point.next = list1
                list1 = list1.next
                point = point.next
            } else {
                point.next = list2
                list2 = list2.next
                point = point.next
            }
        }
        if (list1) {
            point.next = list1
        } else {
            point.next = list2
        }
        point = point.next
        return dummy.next
    }

}
