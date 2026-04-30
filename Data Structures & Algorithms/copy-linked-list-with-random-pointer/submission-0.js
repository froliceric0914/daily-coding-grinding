// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let dummy = new Node(null)
        let curr = head
        let pointer = dummy
        let hash = new Map()

        while (curr) {
            hash.set(curr, new Node(curr.val))
            curr = curr.next
        }

        let curr1=head

        while (curr1) {
            const newNode = hash.get(curr1)
            newNode.next = hash.get(curr1.next) || null
            newNode.random = hash.get(curr1.random) || null
            pointer.next = newNode
            pointer = pointer.next
            curr1 = curr1.next
        }
        return dummy.next
    }
  
}
