/**
 * Problem: https://leetcode.com/problems/linked-list-cycle/
    Given a linked list, determine if it has a cycle in it.
    Can you solve it without using extra space?

 * Example:
    has Cycle: (2 -> 4 -> 3 -> 1 -> 2) => true
    has No Cycle: (3 -> 4 -> 2) => false

 * @param {ListNode} head
 * @return {boolean}

 * Analysis: If a linkedList has cycle, we'll encounter same nodes more than once during traversal.
 */

import { hasCycle } from "../_.general/linkedList";

/**
 * Solution 1: 2 pointers
 *
 * "N" is linkedList length
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
export const twoPointers = hasCycle;

/**
 * Solution 2: Hash (WeakSet)
 *
 * "N" is linkedList length
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
export const hash = (head) => {
  const nodeSets = new WeakSet();
  while (head) {
    if (nodeSets.has(head)) {
      return true;
    }
    nodeSets.add(head);
    head = head.next;
  }
  return false;
};

/**
 * Lessons:
   1. This problem is a pretty good use case of WeakSet on linkedList nodes.
 */
