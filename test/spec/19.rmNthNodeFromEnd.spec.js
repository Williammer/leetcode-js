import { ListNode, arrayToLinkedlist, linkedlistToArray } from "../../src/_.util/linkedList";
import { rmNthNodeFromEnd } from "../../src/19.rmNthNodeFromEnd/solution";

describe("# Problem 19 - rm Nth linkedList node count from list end", () => {
  describe("Solution 1: use two parent pointers to touch tail", () => {
    it("[], 1 => []", () => {
      const l1 = arrayToLinkedlist([]);

      const result = rmNthNodeFromEnd.touchTail(l1, 1);
      expect(linkedlistToArray(result)).toEqual([]);
    });

    it("[1], 0 => [1]", () => {
      const l1 = arrayToLinkedlist([1]);

      const result = rmNthNodeFromEnd.touchTail(l1, 0);
      expect(linkedlistToArray(result)).toEqual([1]);
    });

    it("[1], 1 => []", () => {
      const l1 = arrayToLinkedlist([1]);

      const result = rmNthNodeFromEnd.touchTail(l1, 1);
      expect(linkedlistToArray(result)).toEqual([]);
    });

    it("[1], 20 => []", () => {
      const l1 = arrayToLinkedlist([1]);

      const result = rmNthNodeFromEnd.touchTail(l1, 20);
      expect(linkedlistToArray(result)).toEqual([]);
    });

    it("[1,2,3,4,5,6], 1 => [1,2,3,4,5]", () => {
      const l1 = arrayToLinkedlist([1, 2, 3, 4, 5, 6]);

      const result = rmNthNodeFromEnd.touchTail(l1, 1);
      expect(linkedlistToArray(result)).toEqual([1, 2, 3, 4, 5]);
    });

    it("[1,2,3,4,5,6], 2 => [1,2,3,4,6]", () => {
      const l1 = arrayToLinkedlist([1, 2, 3, 4, 5, 6]);

      const result = rmNthNodeFromEnd.touchTail(l1, 2);
      expect(linkedlistToArray(result)).toEqual([1, 2, 3, 4, 6]);
    });

    it("[1,2,3,4,5,6], 3 => [1,2,3,5,6]", () => {
      const l1 = arrayToLinkedlist([1, 2, 3, 4, 5, 6]);

      const result = rmNthNodeFromEnd.touchTail(l1, 3);
      expect(linkedlistToArray(result)).toEqual([1, 2, 3, 5, 6]);
    });

    it("[1,2,3,4,5,6], 4 => [1,2,4,5,6]", () => {
      const l1 = arrayToLinkedlist([1, 2, 3, 4, 5, 6]);

      const result = rmNthNodeFromEnd.touchTail(l1, 4);
      expect(linkedlistToArray(result)).toEqual([1, 2, 4, 5, 6]);
    });

    it("[1,2,3,4,5,6], 5 => [1,3,4,5,6]", () => {
      const l1 = arrayToLinkedlist([1, 2, 3, 4, 5, 6]);

      const result = rmNthNodeFromEnd.touchTail(l1, 5);
      expect(linkedlistToArray(result)).toEqual([1, 3, 4, 5, 6]);
    });

    it("[1,2,3,4,5,6], 6 => [2,3,4,5,6]", () => {
      const l1 = arrayToLinkedlist([1, 2, 3, 4, 5, 6]);

      const result = rmNthNodeFromEnd.touchTail(l1, 6);
      expect(linkedlistToArray(result)).toEqual([2, 3, 4, 5, 6]);
    });

    it("[1,2,3,4,5,6], 7 => [2,3,4,5,6]", () => {
      const l1 = arrayToLinkedlist([1, 2, 3, 4, 5, 6]);

      const result = rmNthNodeFromEnd.touchTail(l1, 7);
      expect(linkedlistToArray(result)).toEqual([2, 3, 4, 5, 6]);
    });

    it("[0,7,1,4,8,5,6,6,8,3,8,5,1,9,4,1], 13 => [0,7,1,8,5,6,6,8,3,8,5,1,9,4,1]", () => {
      const l1 = arrayToLinkedlist([0, 7, 1, 4, 8, 5, 6, 6, 8, 3, 8, 5, 1, 9, 4, 1]);

      const result = rmNthNodeFromEnd.touchTail(l1, 13);
      expect(linkedlistToArray(result)).toEqual([0, 7, 1, 8, 5, 6, 6, 8, 3, 8, 5, 1, 9, 4, 1]);
    });
  });
});
