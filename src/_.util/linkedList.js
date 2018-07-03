/**
 * Definition for a linkedList node
 */
export class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
 * If the input is ListNode
 *
 * @param {ListNode} node
 * @return {boolean}
 *
 */
export const isListNode = node => (node instanceof ListNode) && node.val !== null;

/**
 * Convert array to linkedList
 *
 * "N" is item count
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * @param {Array} array
 * @return {ListNode}
 *
 */
export const arrayToLinkedlist = (arr) => {
  if (!arr || !arr.length) {
    return null;
  }

  // 1. The desc way, relative more concise.
  let curNode; let
    newNode;
  for (let i = arr.length - 1; i >= 0; i--) {
    newNode = new ListNode(arr[i]);

    if (curNode) {
      newNode.next = curNode;
    }

    curNode = newNode;
  }

  return newNode;

  /*
    // 2. The asc way, with a refNode on 1st step.
    let curNode, newNode, refNode;
    for (let i = 0; i < arr.length; i++) {
        newNode = new ListNode(arr[i]);

        if (curNode) {
            curNode.next = newNode;
            curNode = curNode.next;
        } else {
            refNode = curNode = newNode;
        }
    }

    return refNode;
    */
};

/**
 * Convert linkedList to array
 *
 * "N" is item count
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * @param {ListNode} head
 * @return {Array}
 *
 */
export const linkedlistToArray = (lList) => {
  let curNode = lList;


  const arr = [];

  while (curNode && typeof curNode.val === "number") {
    arr.push(curNode.val);

    curNode = curNode.next;
  }

  return arr;
};

/**
 * Clone linkedList
 *
 * "N" is item count
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * @param {ListNode} head
 * @return {ListNode}
 *
 */
export const cloneLinkedlist = (lList) => {
  const newList = new ListNode(-1);


  let curNode = newList;

  while (lList) {
    curNode.next = new ListNode(lList.val);

    lList = lList.next;
    curNode = curNode.next;
  }

  return newList.next;
};

/**
 * Add Node to List front
 *
 * "N" is item count
 * Time complexity: O(1)
 * Space complexity: O(1)
 *
 * @param {number} val, {ListNode} lList
 * @return {ListNode}
 *
 */
export const addToLinkedListFront = (val, lList) => {
  if (typeof val !== "number") {
    return lList;
  }
  const newHead = new ListNode(val);
  newHead.next = lList;

  return newHead;
};

/**
 * Reverse linkedList
 *
 * "N" is item count
 * Time complexity: O(N)
 * Space complexity: O(1)
 *
 * @param {ListNode} head
 * @return {ListNode}
 *
 * More on 206.reverseLinkedList
 *
 */
export const reverseLinkedListFn = function (head) {
  let newHead = null;


  let next = null;

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
  const newHead = head;


  let index = 0;


  let cycleHead;

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
    index++;
  }

  return newHead;
};

/**
 * Has cycle
 *
 * "N" is item count
 * Time complexity: O(N)
 * Space complexity: O(1)
 *
 * @param {ListNode} head
 * @return {boolean}
 *
 * More on 141.linkedListHasCycle
 *
 */
export const linkedListHasCycleFn = function (head) {
  let walk = head;


  let run = head;

  while (walk && run && run.next) {
    walk = walk.next;
    run = run.next.next;

    if (walk === run) {
      return true;
    }
  }

  return false;
};
