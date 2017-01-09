/**
 * Definition for a linkedList node
 */
export class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
};

/**
 * Convert array to linkedList
 *
 * "N" is item count
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * Used in: [2]
 */
export const arrayToLinkedlist = (arr) => {
    let lastNode, newNode;
    while (arr.length > 0) {
        newNode = new ListNode(arr.pop());

        if (lastNode) {
            newNode.next = lastNode;
        }
        lastNode = newNode;
    }

    return newNode;
};

/**
 * Convert linkedList to array
 *
 * "N" is item count
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * Used in: [2]
 */
export const linkedlistToArray = (lList) => {
    let curNode = lList,
        arr = [];

    while (curNode && typeof curNode.val === "number") {
        arr.push(curNode.val);

        curNode = curNode.next;
    }

    return arr;
};

/**
 * Reverse linkedList
 *
 * "N" is item count
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * More on 206.reverseLinkedList
 *
 */
export const reverseLinkedListFn = function(head) {
    let newHead = null,
        next = null;

    while (head) {
        next = head.next;
        head.next = newHead;
        newHead = head;
        head = next;
    }

    return newHead;
};

/**
 * Cycle a linkedList
 *
 * "N" is item count
 * Time complexity: O(N)
 * Space complexity: O(1)
 *
 * @param {ListNode} head
 * @param {number} cycleHeadIndex the index of node to be the cycle head
 * @param {number} cycleTailIndex the index of node to be the cycle tail
 * @return {ListNode}
 *
 */
export const makeCycle = (head, cycleHeadIndex, cycleTailIndex) => {
    let newHead = head,
        index = 0,
        cycleHead;

    cycleHeadIndex = cycleHeadIndex || 0;
    cycleTailIndex = cycleTailIndex >= cycleHeadIndex ? cycleTailIndex : cycleHeadIndex;

    while (head) {
        if (cycleHeadIndex === index) {
            cycleHead = head;
        }

        // create cycle by connecting cycleTail to cycleHead
        if (!head.next || cycleTailIndex === index) {
            head.next = cycleHead;
            break;
        }
        head = head.next;
