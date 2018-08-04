/**
 * Problem: https://leetcode.com/problems/remove-duplicates-from-sorted-list/
    Given a sorted linked list, delete all duplicates such that each element appear only once.

 * Example,
    Given 1->1->2, return 1->2.
    Given 1->1->2->3->3, return 1->2->3.


 * @param {ListNode} head
 * @return {ListNode}

 * Analysis: Remove duplicates in sorted (linked)list can easily achieved with iterative or recursion;
    use Set to remove duplicates in even the unsorted (linked)list.

 */

import { ListNode } from "../_.general/linkedList";

export const rmDuplicateInLinkedList = {};

/**
 * Solution 1: concise
 *
 * "N" is linkedList length
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
rmDuplicateInLinkedList.concise = (head) => {
  const isNode = (node) => node instanceof ListNode && node.val !== null;

  const result = head;

  while (isNode(head) && isNode(head.next)) {
    while (isNode(head.next) && head.val === head.next.val) {
      head.next = head.next.next;
    }
    head = head.next;
  }

  return result;
};

/**
 * Solution 2: recursion
 *
 * "N" is linkedList length
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
rmDuplicateInLinkedList.recursion = (head) => {
  const isNode = (node) => node instanceof ListNode && node.val !== null;

  // // 1. Termination condition
  if (!isNode(head) || !isNode(head.next)) {
    return head; // [getter]
  }

  // 2. recursion occurence
  head.next = rmDuplicateInLinkedList.recursion(head.next); // [setter] update next, trigger next recursion
  return head.val === head.next.val ? head.next : head; // [getter] return node base on duplicate condition.
};

/**
 * Solution 3: Use Set for unsorted linkedlist
 *
 * "N" is linkedList length
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
rmDuplicateInLinkedList.useSet = (head) => {
  const _record = new Set();

  const isNode = (node) => node instanceof ListNode && node.val !== null;

  const result = head;

  isNode(head) && _record.add(head.val);
  while (isNode(head) && isNode(head.next)) {
    if (_record.has(head.next.val)) {
      head.next = head.next.next;
    } else {
      _record.add(head.next.val);
      head = head.next;
    }
  }

  return result;
};

/**
 * Lessons:
   1. Handling 'next' pointer/reference of linkedList is so common that needs to be good at.
   2. Recursion can has getter and setter logics, think that way can help the implementation.

 */
