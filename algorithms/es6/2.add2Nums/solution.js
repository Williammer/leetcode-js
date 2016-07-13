/************************************************************

 * Problem: https://leetcode.com/problems/add-two-numbers/
    You are given two linked lists representing two non-negative numbers.
    The digits are stored in reverse order and each of their nodes contain a single digit.
    Add the two numbers and return it as a linked list.

 * Example:
    Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    Output: 7 -> 0 -> 8

 * Definition for singly-linked list:
    function ListNode(val) {
      this.val = val;
      this.next = null;
    }

 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}


 * Analysis: It's hard to insert nodes by recusively setting its next nodes for linklist, so at first I consider use a stack to cache those sum digits.
   Later I've learned we can utilize the mutable feature of 2 referenced objects by having one doing the recursive insert work and the other to take the result, which is great.

************************************************************/
export function ListNode(val) {
    this.val = val;
    this.next = null;
};

export function arrToLList(arr) {
    var lastNode, newNode;
    while (arr.length > 0) {
        newNode = new ListNode(arr.pop());

        if (lastNode) {
            newNode.next = lastNode;
        }
        lastNode = newNode;
    }

    return newNode;
};

export function lListToArr(lList) {
    var curNode = lList,
        arr = [];

    while (curNode && typeof curNode.val === "number") {
        arr.push(curNode.val);

        curNode = curNode.next;
    }

    return arr;
};

export var add2Nums = {};
/*
 * Solution 1: Intro a stack helper to reversely insert each node into linklist.
 *
 * "N" is the max calcated sum digit length L in range [max(l1.length,l2.length), max(l1.length,l2.length)+1].
 * Time complexity: O(2N)
 * Space complexity: O(N)
 */
add2Nums.stackHelper = function(l1, l2) {
    var sumVal = 0,
        overflowedVal = 0,
        tmpStack = [],
        newNode, lastNode, l1Val, l2Val;

    while ((l1 && typeof l1.val === "number") || (l2 && typeof l2.val === "number") || overflowedVal > 0) {
        if (!(l1 && typeof l1.val === "number") && !(l2 && typeof l2.val === "number") && overflowedVal > 0) {
            tmpStack[tmpStack.length] = overflowedVal;
            break;
        }

        l1Val = (l1 && typeof l1.val === "number") ? l1.val : 0;
        l2Val = (l2 && typeof l2.val === "number") ? l2.val : 0;

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

/*
 * Solution 2: js reference. Utilized js object reference change feature.
 *
 * "N" is the max calcated sum digit length L in range [max(l1.length,l2.length), max(l1.length,l2.length)+1].
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
add2Nums.reference = function(l1, l2) {
    var List = new ListNode(-1), // dummy head
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

/*
 * Solution 3: Recursion.
 *
 * m: l1.length, n: l2.length
 * Time complexity: O(?)
 * Space complexity: O(?)
 */
add2Nums.recursion = function(l1, l2) {
    var List, val;
    // Base case
    if (!(l1 instanceof ListNode)) {
        return l2;
    } else if (!(l2 instanceof ListNode)) {
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



/************************************************************

 * Lessons:
   1. Consider introduce stack data structure to reversely insert each node into linklist as it's hard to insert from head to tail for linklist.

   2. Utilize mutable object reference feature.

   3. Multi base case recursion. To recursion well, we need to consider head/tail of child when design parent, so that child-recur can utilize its parent's base case.

************************************************************/
