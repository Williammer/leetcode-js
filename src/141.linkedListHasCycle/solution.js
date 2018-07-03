/**
 * Problem: https://leetcode.com/problems/linked-list-cycle/
    Given a linked list, determine if it has a cycle in it. Can you solve it without using extra space?

 * Example:
    has Cycle: (2 -> 4 -> 3 -> 1 -> 2) => true
    has No Cycle: (3 -> 4 -> 2) => false


 * @param {ListNode} head
 * @return {boolean}

 * Analysis: If a linkedList has cycle, we'll encounter same old nodes more than once during list traversal.

 */

import { ListNode, linkedListHasCycleFn } from "../_.util/linkedList";

export const linkedListHasCycle = {};

/**
 * Solution 1: 2 pointers
 *
 * "N" is linkedList length
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
linkedListHasCycle.twoPointers = linkedListHasCycleFn;

/**
 * Solution 2: Hash (WeakSet)
 *
 * "N" is linkedList length
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
linkedListHasCycle.hash = (head) => {
  const _hash = new WeakSet();

  while (head) {
    if (_hash.has(head)) {
      return true;
    }

    _hash.add(head);
    head = head.next;
  }

  return false;
};

/**
 * Lessons:
   1. This problem is a pretty good use case of WeakSet on linkedList nodes.

 */
