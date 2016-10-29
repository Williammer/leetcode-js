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
 */
export const arrToLList = (arr) => {
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
 */
export const lListToArr = (lList) => {
    let curNode = lList,
        arr = [];

    while (curNode && typeof curNode.val === "number") {
        arr.push(curNode.val);

        curNode = curNode.next;
    }

    return arr;
};