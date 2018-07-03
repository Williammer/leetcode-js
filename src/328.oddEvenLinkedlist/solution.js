/**
 * Problem: https://leetcode.com/problems/odd-even-linked-list/
    Given a singly linked list, group all odd nodes together followed by the even nodes.
    Please note here we are talking about the node number and not the value in the nodes.
    You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.

 * Example:
    Given 1->2->3->4->5->NULL,
    return 1->3->5->2->4->NULL.


 * @param {ListNode} head
 * @return {ListNode}

 * Analysis: Group linkedlist by odd/even is mainly about changing its node references, and connect them back at last.

 */

import { ListNode } from "../_.util/linkedList";

export const oddEvenLinkedlist = {};

/**
 * Solution 1: normal iterative
 *
 * "N" is linkedList length
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
oddEvenLinkedlist.iterate = (head) => {
  if (!head) {
    return head;
  }

  const result = head;


  const evenList = result.next;


  let evenHead = evenList;

  while (evenHead && evenHead.next) {
    head.next = head.next.next; // eventHead.next is refered on head.next.next
    evenHead.next = evenHead.next.next;

    head = head.next;
    evenHead = evenHead.next;
  }

  head.next = evenList;

  return result;
};


/**
 * Lessons:
   1. LinkedList pointer handling is an under-estimated and error-prone work. Need to practice more.
   2. Pointers is easy to get confused, better use visualized way to think.

 */
