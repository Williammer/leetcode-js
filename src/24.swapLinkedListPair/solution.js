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


import { ListNode } from "../_.util/linkedList";

export const swapLinkedListPair = {};

/**
 * Solution 1: normal iterative
 *
 * "N" is linkedList length
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
swapLinkedListPair.iterate = (head) => {
  const isNode = node => (node instanceof ListNode) && node.val !== null;

  if (!isNode(head) || !isNode(head.next)) {
    return head;
  }

  const dummyHead = new ListNode(-1);


  let parentHead = dummyHead;

  dummyHead.next = head;

  while (isNode(parentHead) && isNode(head) && isNode(head.next)) {
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
swapLinkedListPair.recursion = (head) => {
  const isNode = node => (node instanceof ListNode) && node.val !== null;


  const swap = (parentHead, head) => {
    if (!isNode(parentHead) || !isNode(head) || !isNode(head.next)) {
      return parentHead;
    }

    parentHead.next = head.next;
    head.next = head.next.next;
    parentHead.next.next = swap(head, head.next);

    return parentHead;
  };

  const dummyHead = new ListNode(-1);
  dummyHead.next = head;

  return swap(dummyHead, head).next;
};


/**
 * Lessons:
   1. Infinite loop may happen for LinkedList recursion, use enough var to avoid it during changing the references relation.

 */
