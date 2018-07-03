/**
 * Problem: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
    Given a linked list, remove the nth node from the end of list and return its head.

 * Example:
   Given linked list: 1->2->3->4->5, and n = 2.
   After removing the second node from the end, the linked list becomes 1->2->3->5.


 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}

 * Analysis: We don't know linkedList length, but we can get target node by trying to touch tail and track node with two pointers.

 */

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
  const isNode = node => node instanceof ListNode && node.val !== null;

  if (n < 1 || !isNode(head)) {
    return head;
  }

  const resultParent = new ListNode(-1);

  let tailToucher;

  let tracker;

  resultParent.next = head;
  tracker = resultParent;
  tailToucher = resultParent;

  while (tailToucher) {
    if (--n === 0) {
      break;
    }
    tailToucher = tailToucher.next;
  }

  if (n === 0) {
    while (tailToucher.next && tailToucher.next.next) {
      tailToucher = tailToucher.next;
      tracker = tracker.next;
    }
  }

  tracker.next = tracker.next.next;

  return resultParent.next;
};

/**
 * Lessons:
   1. Touch tail can serve the purpose of getting the length of linkedList.

 */
