/**
 * Problem: https://leetcode.com/problems/add-two-numbers/
    You are given two linked lists representing two non-negative numbers.
    The digits are stored in reverse order and each of their nodes contain a single digit.
    Add the two numbers and return it as a linked list.

 * Example:
    Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    Output: 7 -> 0 -> 8


 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}

 * Analysis: At first I consider use a stack to cache the sum digits.
   Later I've learned we can utilize the basic mutable reference feature for linkedList traversal, which is commonly used.

 */

import { ListNode, isListNode } from "../_.general/linkedList";

export const add2Nums = {};
/**
 * Solution 1: basic js reference.
 *
 * "N" is max(l1.length,l2.length)
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
add2Nums.reference = (l1, l2) => {
  const List = new ListNode(-1);
  // dummy head

  let head = List;
  // referenced List with head

  let sum = 0;

  let carry = 0;

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }

    head.next = new ListNode(sum); // List will update with it
    head = head.next;

    sum = carry;
    carry = 0;
  }

  return List.next; // skip dummy head
};

/**
 * Solution 2: Recursion.
 *
 * "N" is max(l1.length,l2.length)
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
add2Nums.recursion = (l1, l2) => {
  let List;
  let val;
  // Base case
  if (!isListNode(l1)) {
    return l2;
  }
  if (!isListNode(l2)) {
    return l1;
  }

  List = new ListNode(0);
  List.next = add2Nums.recursion(l1.next, l2.next);

  val = l1.val + l2.val;

  if (val < 10) {
    // case 1: no carry num
    List.val = val;
  } else {
    // case 2: has carry num
    val -= 10;
    List.val = val;
    List.next = add2Nums.recursion(List.next, new ListNode(1));
  }

  return List;
};

/**
 * Lessons:
   1. Mutable object reference is common for traverse linkedList.
   2. Base case for recursion needs to be well-designed for different edge cases.

 */
