/************************************************************************************************************************

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

************************************************************************************************************************/


import { ListNode, isListNode } from "../_.util/linkedList";

export const add2Nums = {};
/**
 * Solution 1: Intro a stack helper to reversely insert each node into linklist.
 *
 * "N" is max(l1.length,l2.length)
 * Time complexity: O(2N)
 * Space complexity: O(2N)
 */
add2Nums.stackHelper = (l1, l2) => {
    let sumVal = 0,
        overflowedVal = 0,
        tmpStack = [],
        newNode, lastNode, l1Val, l2Val;

    while (isListNode(l1) || isListNode(l2) || overflowedVal > 0) {
        if (!isListNode(l1) && !isListNode(l2) && overflowedVal > 0) {
            tmpStack[tmpStack.length] = overflowedVal;
            break;
        }

        l1Val = isListNode(l1) ? l1.val : 0;
        l2Val = isListNode(l2) ? l2.val : 0;

        sumVal = (l1Val + l2Val + overflowedVal) % 10;
        overflowedVal = parseInt((l1Val + l2Val + overflowedVal) / 10, 10);

        tmpStack[tmpStack.length] = sumVal;

        l1 = (l1 && l1.next) || null;
        l2 = (l2 && l2.next) || null;
    }

    while (tmpStack.length > 0) {
        newNode = new ListNode(tmpStack.pop());

        if (lastNode) {
            newNode.next = lastNode;
        }
        lastNode = newNode;
    }

    return newNode;
};

/**
 * Solution 2: basic js reference.
 *
 * "N" is max(l1.length,l2.length)
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
add2Nums.reference = (l1, l2) => {
    let List = new ListNode(-1), // dummy head
        head = List, // referenced List with head
        sum = 0,
        carry = 0;

    while (l1 !== null || l2 !== null || sum > 0) {
        if (l1 !== null) {
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if (sum >= 10) {
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum); // List will update with it
        head = head.next;

        sum = carry;
        carry = 0;
    }

    return List.next; // skip dummy head
};

/**
 * Solution 3: Recursion.
 *
 * "N" is max(l1.length,l2.length)
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
add2Nums.recursion = (l1, l2) => {
    let List, val;
    // Base case
    if (!isListNode(l1)) {
        return l2;
    } else if (!isListNode(l2)) {
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
        val = val - 10;
        List.val = val;
        List.next = add2Nums.recursion(List.next, new ListNode(1)); // nested recursion!
    }

    return List;
};


/************************************************************************************************************************

 * Lessons:
   1. Consider introduce stack data structure to reversely insert each node into linklist as it's hard to insert from head to tail for linklist.
   2. Utilize mutable object reference feature.
   3. Multi base case recursion. To recursion well, we need to consider head/tail of child when design parent, so that child-recur can utilize its parent's base case.

************************************************************************************************************************/
