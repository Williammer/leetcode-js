/**
 * Problem: https://leetcode.com/problems/reverse-linked-list/
    Reverse a singly linked list.

 * Example:
    Input: (2 -> 4 -> 3)
    Output: (3 -> 4 -> 2)


 * @param {ListNode} head
 * @return {ListNode}

 * Analysis: Reverse is to break the old listNode's reference and point it to new listNode.

 */


import { ListNode, reverseLinkedListFn } from "../_.util/linkedList";

export const reverseLinkedList = {};

/**
 * Solution 1: normal iterative
 *
 * "N" is linkedList length
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
reverseLinkedList.iterate = reverseLinkedListFn;


/**
 * Solution 2: Recursion.
 *
 * "N" is linkedList length
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
reverseLinkedList.recursion = (head) => {
  const reverse = (head, newHead) => {
    if (!head) {
      return newHead;
    }
    const next = head.next;
    head.next = newHead;

    return reverse(next, head);
  };

  return reverse(head, null);
};


/**
 * Lessons:
   1. LinkedList handling on the code(such as those assignments) is a bit abstract, better think in the visualized way.

 */
