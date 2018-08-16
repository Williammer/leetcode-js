/**
 * Problem: https://leetcode.com/problems/add-two-numbers-ii/
    You are given two non-empty linked lists representing two non-negative integers.
     The most significant digit comes first and each of their nodes contain a single digit.
     Add the two numbers and return it as a linked list.
     You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 * Example:
    Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
    Output: 7 -> 8 -> 0 -> 7

 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}

 * Analysis: The sum is added start from the tail node of 2 nums, reversed the input list will turn
    it into 2.add2Nums. The other way to reverse is use stack(s) as helper.
 */

import {
  ListNode, isListNode, reverse, prepend,
} from "../_.general/linkedList";
import * as add2Nums from "../2.add2Nums/2.add2Nums";

/**
 * Solution 1: reverse input list then use #2.add2Nums.
 *
 * "N" is max(l1.length, l2.length)
 * Time complexity: O(4N)
 * Space complexity: O(N)
 */
export const reverseInput = (l1, l2) => {
  if (!isListNode(l1) || !isListNode(l2)) {
    if (!isListNode(l1) && !isListNode(l2)) return null;
    if (!isListNode(l1)) return l2;
    return l1;
  }
  const rl1 = reverse(l1);
  const rl2 = reverse(l2);
  const rSum = add2Nums.reference(rl1, rl2);

  return reverse(rSum);
};

/**
 * Solution 2: Use 2 stack for reverse input list
 *
 * "N" is max(l1.length, l2.length)
 * Time complexity: O(3N)
 * Space complexity: O(3N)
 */
export const stackHelper = (l1, l2) => {
  if (!isListNode(l1) || !isListNode(l2)) {
    if (!isListNode(l1) && !isListNode(l2)) return null;
    if (!isListNode(l1)) return l2;
    return l1;
  }
  const _stackL1 = [];
  const _stackL2 = [];
  let curSum = 0;
  let carry = 0;
  let l1Head = l1;
  let l2Head = l2;
  let result = null;

  while (l1Head || l2Head) {
    if (l1Head) {
      _stackL1.push(l1Head.val);
      l1Head = l1Head.next;
    }
    if (l2Head) {
      _stackL2.push(l2Head.val);
      l2Head = l2Head.next;
    }
  }
  while (_stackL1.length > 0 || _stackL2.length > 0 || curSum > 0) {
    if (_stackL1.length > 0) {
      curSum += _stackL1.pop();
    }
    if (_stackL2.length > 0) {
      curSum += _stackL2.pop();
    }

    carry = Math.floor(curSum / 10);
    curSum %= 10;

    result = !result ? new ListNode(curSum) : prepend(curSum, result);
    curSum = carry;
  }
  return result;
};

/**
 * Lessons:
   1. Although seems bit complex, introducing more than one helper data structure is effective for
    solving the problem.
 */
