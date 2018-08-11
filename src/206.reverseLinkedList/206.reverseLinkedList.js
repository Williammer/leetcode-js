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

import { reverse } from "../_.general/linkedList";

/**
 * Solution 1: normal iteration
 *
 * "N" is linkedList length
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
export const iteration = reverse;

/**
 * Solution 2: Recursion.
 *
 * "N" is linkedList length
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
export const recursion = (head) => {
  const innerReverse = (oldHead, newHead) => {
    if (!oldHead) return newHead;
    const { next } = oldHead;
    oldHead.next = newHead;

    return innerReverse(next, oldHead);
  };
  return innerReverse(head, null);
};

/**
 * Lessons:
   1. LinkedList handling on the code(such as those assignments) is a bit abstract, better think in
    the visualized way.
 */
