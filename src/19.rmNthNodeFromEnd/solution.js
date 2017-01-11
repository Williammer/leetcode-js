/************************************************************************************************************************

 * Problem: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
    Given a linked list, remove the nth node from the end of list and return its head.

 * Example:
   Given linked list: 1->2->3->4->5, and n = 2.
   After removing the second node from the end, the linked list becomes 1->2->3->5.


 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}

 * Analysis: We don't know linkedList length, but we can get target node by trying to touch tail and track node with two pointers.

************************************************************************************************************************/


import { ListNode } from "../_.util/linkedList";

export const rmNthNodeFromEnd = {};

/**
 * Solution 1: use two parent pointers to touch tail and track node
 *
 * "N" is linkedList length
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
rmNthNodeFromEnd.touchTail = (head, n) => {
    const isNode = (node) => {
        return (node instanceof ListNode) && node.val !== null;
    };

    if (n < 1 || !isNode(head)) {
        return head;
    }

    let refParent = new ListNode(-1),
        nthHeadParent,
        resultParent;

    refParent.next = head;
    resultParent = refParent;

    while (refParent) {
        if (--n === 0) {
            nthHeadParent = refParent;
            break;
        }

        refParent = refParent.next;
    }

    refParent = resultParent; // reuse refParent
    if (n === 0) {
        while (nthHeadParent.next && nthHeadParent.next.next) {
            nthHeadParent = nthHeadParent.next;
            refParent = refParent.next;
        }
    }

    refParent.next = refParent.next.next;

    return resultParent.next;
};


/************************************************************************************************************************

 * Lessons:
   1. Touch tail can serve the purpose of getting the length of linkedList.

************************************************************************************************************************/
