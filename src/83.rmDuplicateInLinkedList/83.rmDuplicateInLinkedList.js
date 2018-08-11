/**
 * Problem: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
    Given a sorted linked list, delete all duplicates such that each element appear only once.

 * Example,
    Given 1->1->2, return 1->2.
    Given 1->1->2->3->3, return 1->2->3.

 * @param {ListNode} head
 * @return {ListNode}

 * Analysis: Remove duplicates in sorted (linked)list can easily achieved with iteration or
    recursion; use Set to remove duplicates in even the unsorted (linked)list.
 */

import { isListNode, removeDuplicate } from "../_.general/linkedList";

/**
 * Solution 1: iteration
 *
 * "N" is linkedList length
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
export const iteration = removeDuplicate;

/**
 * Solution 2: recursion
 *
 * "N" is linkedList length
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
export const recursion = (head) => {
  // 1. Termination condition
  if (!isListNode(head) || !isListNode(head.next)) {
    return head;
  }
  // 2. recursion occurence
  head.next = recursion(head.next);
  return head.val === head.next.val ? head.next : head;
};

/**
 * Solution 3: Use Set for unsorted linkedlist
 *
 * "N" is linkedList length
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
export const useSet = (head) => {
  const nodeSets = new Set();
  const result = head;

  if (isListNode(head)) {
    nodeSets.add(head.val);
  }
  while (isListNode(head) && isListNode(head.next)) {
    if (nodeSets.has(head.next.val)) {
      head.next = head.next.next;
    } else {
      nodeSets.add(head.next.val);
      head = head.next;
    }
  }
  return result;
};

/**
 * Lessons:
   1. Handling 'next' pointer/reference of linkedList is so common.
   2. Recursion is mostly about the termination condition and recursive occurence.
 */
