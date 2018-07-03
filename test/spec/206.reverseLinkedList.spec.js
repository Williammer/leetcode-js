import { ListNode, arrayToLinkedlist, linkedlistToArray } from "../../src/_.util/linkedList";
import { reverseLinkedList } from "../../src/206.reverseLinkedList/solution";

describe("# Problem 206 - reverse linkedlist", () => {
  describe("Solution 1: iterative", () => {
    it("[] => []", () => {
      const l1 = arrayToLinkedlist([]);

      const result = reverseLinkedList.iterate(l1);
      expect(linkedlistToArray(result)).toEqual([]);
    });

    it("[9] => [9]", () => {
      const l1 = arrayToLinkedlist([9]);

      const result = reverseLinkedList.iterate(l1);
      expect(linkedlistToArray(result)).toEqual([9]);
    });

    it("[5, 9] => [9, 5]", () => {
      const l1 = arrayToLinkedlist([5, 9]);

      const result = reverseLinkedList.iterate(l1);
      expect(linkedlistToArray(result)).toEqual([9, 5]);
    });

    it("[2, 4, 9] => [9, 4, 2]", () => {
      const l1 = arrayToLinkedlist([2, 4, 9]);

      const result = reverseLinkedList.iterate(l1);
      expect(linkedlistToArray(result)).toEqual([9, 4, 2]);
    });

    it("[2, 4, 3] => [3, 4, 2]", () => {
      const l1 = arrayToLinkedlist([2, 4, 3]);

      const result = reverseLinkedList.iterate(l1);
      expect(linkedlistToArray(result)).toEqual([3, 4, 2]);
    });

    it("[5, 6, 4] => [4, 6, 5]", () => {
      const l1 = arrayToLinkedlist([5, 6, 4]);

      const result = reverseLinkedList.iterate(l1);
      expect(linkedlistToArray(result)).toEqual([4, 6, 5]);
    });

    it("[6, 9, 3]=> [3, 9, 6]", () => {
      const l1 = arrayToLinkedlist([6, 9, 3]);

      const result = reverseLinkedList.iterate(l1);
      expect(linkedlistToArray(result)).toEqual([3, 9, 6]);
    });

    it("[2, 3, 6, 9, 3]=> [3, 9, 6, 3, 2]", () => {
      const l1 = arrayToLinkedlist([2, 3, 6, 9, 3]);

      const result = reverseLinkedList.iterate(l1);
      expect(linkedlistToArray(result)).toEqual([3, 9, 6, 3, 2]);
    });
  });

  describe("Solution 2: recursion", () => {
    it("[] => []", () => {
      const l1 = arrayToLinkedlist([]);

      const result = reverseLinkedList.recursion(l1);
      expect(linkedlistToArray(result)).toEqual([]);
    });

    it("[9] => [9]", () => {
      const l1 = arrayToLinkedlist([9]);

      const result = reverseLinkedList.recursion(l1);
      expect(linkedlistToArray(result)).toEqual([9]);
    });

    it("[5, 9] => [9, 5]", () => {
      const l1 = arrayToLinkedlist([5, 9]);

      const result = reverseLinkedList.recursion(l1);
      expect(linkedlistToArray(result)).toEqual([9, 5]);
    });

    it("[2, 4, 9] => [9, 4, 2]", () => {
      const l1 = arrayToLinkedlist([2, 4, 9]);

      const result = reverseLinkedList.recursion(l1);
      expect(linkedlistToArray(result)).toEqual([9, 4, 2]);
    });

    it("[2, 4, 3] => [3, 4, 2]", () => {
      const l1 = arrayToLinkedlist([2, 4, 3]);

      const result = reverseLinkedList.recursion(l1);
      expect(linkedlistToArray(result)).toEqual([3, 4, 2]);
    });

    it("[5, 6, 4] => [4, 6, 5]", () => {
      const l1 = arrayToLinkedlist([5, 6, 4]);

      const result = reverseLinkedList.recursion(l1);
      expect(linkedlistToArray(result)).toEqual([4, 6, 5]);
    });

    it("[6, 9, 3]=> [3, 9, 6]", () => {
      const l1 = arrayToLinkedlist([6, 9, 3]);

      const result = reverseLinkedList.recursion(l1);
      expect(linkedlistToArray(result)).toEqual([3, 9, 6]);
    });

    it("[2, 3, 6, 9, 3]=> [3, 9, 6, 3, 2]", () => {
      const l1 = arrayToLinkedlist([2, 3, 6, 9, 3]);

      const result = reverseLinkedList.recursion(l1);
      expect(linkedlistToArray(result)).toEqual([3, 9, 6, 3, 2]);
    });
  });
});
