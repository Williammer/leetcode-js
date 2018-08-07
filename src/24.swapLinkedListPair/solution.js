/**
 * Problem: https://leetcode.com/problems/swap-nodes-in-pairs/
    Given a linked list, swap every two adjacent nodes and return its head.

 * Example:
    Given 1->2->3->4, you should return the list as 2->1->4->3.

 * @param {ListNode} head
 * @return {ListNode}

 * Analysis: Swap in pair needs to change reference relations in linkedList;
    and since the head changed after swap, we need to have a dummyHead which points to head.
 */

import { isListNode, ListNode } from "../_.general/linkedList";

/**
 * Solution 1: normal iteration
 *
 * "N" is linkedList length
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
export const iteration = (head) => {
  if (!isListNode(head) || !isListNode(head.next)) {
    return head;
  }
  const dummyHead = new ListNode(-1);
  let parentHead = dummyHead;
  dummyHead.next = head;

  while (isListNode(parentHead) && isListNode(head) && isListNode(head.next)) {
    parentHead.next = head.next;
    head.next = head.next.next;
    parentHead.next.next = head;

    parentHead = parentHead.next.next;
    head = parentHead.next;
  }
  return dummyHead.next;
};

/**
 * Solution 2: Recursion
 *
 * "N" is linkedList length
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
export const recursion = (head) => {
  const swap = (parentHead, childHead) => {
    if (!isListNode(parentHead) || !isListNode(childHead) || !isListNode(childHead.next)) {
      return parentHead;
    }
    parentHead.next = childHead.next;
    childHead.next = childHead.next.next;
    parentHead.next.next = swap(childHead, childHead.next);

    return parentHead;
  };

  const dummyHead = new ListNode(-1);
  dummyHead.next = head;

  return swap(dummyHead, head).next;
};

/**
 * Lessons:
   1. Infinite loop may happen for LinkedList recursion, use enough variable to avoid it while
    changing the references relation.
 */
