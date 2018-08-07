/**
 * Problem: https://leetcode.com/problems/palindrome-linked-list/
    Given a singly linked list, determine if it is a palindrome.

 * Example:
    ['a'] -> true
    ['a', 'b'] -> false


 * @param {ListNode} head
 * @return {boolean}

 * Analysis: LinkedList looks bit different than string/array or number, we can create a reversed linkedList and compare.
    We can also try to reverse only half of the list with fast/slow pointers.

 */

import { ListNode, clone, reverse } from "../_.general/linkedList";

export const linkedListPalindrome = {};

/**
 * Solution 1: reverse list then compare
 *
 * "N" is the list length.
 * Time complexity: O(3N)
 * Space complexity: O(2N)
 */
linkedListPalindrome.reverseAll = (head) => {
  if (!head || !head.next) {
    return true;
  }
  const cloneHead = clone(head);
  let reversedHead = reverse(cloneHead);

  while (head) {
    if (head.val !== reversedHead.val) {
      return false;
    }

    head = head.next;
    reversedHead = reversedHead.next;
  }
  return true;
};

/**
 * Solution 1: reverse list then compare
 *
 * "N" is the list length.
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
linkedListPalindrome.reverseHalf = (head) => {
  if (!head || !head.next) {
    return true;
  }

  let fast = head;
  let slow = head;
  let reversedHead;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast) {
    slow = slow.next;
  }

  reversedHead = reverse(slow);
  fast = head;

  while (reversedHead) {
    if (reversedHead.val !== fast.val) {
      return false;
    }

    reversedHead = reversedHead.next;
    fast = fast.next;
  }
  return true;
};

/**
 * Lessons:
   1. palindrome problems can normally be handled by 2pointer shrink or half/all reverse compare.
   2. linkedList's fast/slow pointers can help decide middle position.
 */
