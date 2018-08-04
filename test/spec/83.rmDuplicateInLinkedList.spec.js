import { ListNode, arrayToLinkedlist, linkedlistToArray } from "../../src/_.general/linkedList";
import { rmDuplicateInLinkedList } from "../../src/83.rmDuplicateInLinkedList/solution";

describe("# Problem 83 - remove duplicates in sorted linkedlist", () => {
  describe("Solution 1: concise", () => {
    it("[] => []", () => {
      const l1 = arrayToLinkedlist([]);

      const result = rmDuplicateInLinkedList.concise(l1);
      expect(linkedlistToArray(result)).toEqual([]);
    });

    it("[9, 9] => [9]", () => {
      const l1 = arrayToLinkedlist([9, 9]);

      const result = rmDuplicateInLinkedList.concise(l1);
      expect(linkedlistToArray(result)).toEqual([9]);
    });

    it("[5, 5, 9] => [5, 9]", () => {
      const l1 = arrayToLinkedlist([5, 5, 9]);

      const result = rmDuplicateInLinkedList.concise(l1);
      expect(linkedlistToArray(result)).toEqual([5, 9]);
    });

    it("[2, 2, 4, 4, 9] => [2, 4, 9]", () => {
      const l1 = arrayToLinkedlist([2, 2, 4, 4, 9]);

      const result = rmDuplicateInLinkedList.concise(l1);
      expect(linkedlistToArray(result)).toEqual([2, 4, 9]);
    });

    it("[1, 1, 2, 3, 3, 4]=> [1, 2, 3, 4]", () => {
      const l1 = arrayToLinkedlist([1, 1, 2, 3, 3, 4]);

      const result = rmDuplicateInLinkedList.concise(l1);
      expect(linkedlistToArray(result)).toEqual([1, 2, 3, 4]);
    });

    it("[1, 1, 1, 1, 2, 3, 3, 4]=> [1, 2, 3, 4]", () => {
      const l1 = arrayToLinkedlist([1, 1, 1, 1, 2, 3, 3, 4]);

      const result = rmDuplicateInLinkedList.concise(l1);
      expect(linkedlistToArray(result)).toEqual([1, 2, 3, 4]);
    });

    it("[1, 1, 1, 1, 3, 3, 3, 3, 3, 4]=> [1, 3, 4]", () => {
      const l1 = arrayToLinkedlist([1, 1, 1, 1, 3, 3, 3, 3, 3, 4]);

      const result = rmDuplicateInLinkedList.concise(l1);
      expect(linkedlistToArray(result)).toEqual([1, 3, 4]);
    });
  });

  describe("Solution 2: recursion", () => {
    it("[] => []", () => {
      const l1 = arrayToLinkedlist([]);

      const result = rmDuplicateInLinkedList.recursion(l1);
      expect(linkedlistToArray(result)).toEqual([]);
    });

    it("[9, 9] => [9]", () => {
      const l1 = arrayToLinkedlist([9, 9]);

      const result = rmDuplicateInLinkedList.recursion(l1);
      expect(linkedlistToArray(result)).toEqual([9]);
    });

    it("[5, 5, 9] => [5, 9]", () => {
      const l1 = arrayToLinkedlist([5, 5, 9]);

      const result = rmDuplicateInLinkedList.recursion(l1);
      expect(linkedlistToArray(result)).toEqual([5, 9]);
    });

    it("[2, 2, 4, 4, 9] => [2, 4, 9]", () => {
      const l1 = arrayToLinkedlist([2, 2, 4, 4, 9]);

      const result = rmDuplicateInLinkedList.recursion(l1);
      expect(linkedlistToArray(result)).toEqual([2, 4, 9]);
    });

    it("[1, 1, 2, 3, 3, 4]=> [1, 2, 3, 4]", () => {
      const l1 = arrayToLinkedlist([1, 1, 2, 3, 3, 4]);

      const result = rmDuplicateInLinkedList.recursion(l1);
      expect(linkedlistToArray(result)).toEqual([1, 2, 3, 4]);
    });

    it("[1, 1, 1, 1, 2, 3, 3, 4]=> [1, 2, 3, 4]", () => {
      const l1 = arrayToLinkedlist([1, 1, 1, 1, 2, 3, 3, 4]);

      const result = rmDuplicateInLinkedList.recursion(l1);
      expect(linkedlistToArray(result)).toEqual([1, 2, 3, 4]);
    });

    it("[1, 1, 1, 1, 3, 3, 3, 3, 3, 4]=> [1, 3, 4]", () => {
      const l1 = arrayToLinkedlist([1, 1, 1, 1, 3, 3, 3, 3, 3, 4]);

      const result = rmDuplicateInLinkedList.recursion(l1);
      expect(linkedlistToArray(result)).toEqual([1, 3, 4]);
    });
  });

  describe("Solution 3: use Set", () => {
    it("[] => []", () => {
      const l1 = arrayToLinkedlist([]);

      const result = rmDuplicateInLinkedList.useSet(l1);
      expect(linkedlistToArray(result)).toEqual([]);
    });

    it("[9, 9] => [9]", () => {
      const l1 = arrayToLinkedlist([9, 9]);

      const result = rmDuplicateInLinkedList.useSet(l1);
      expect(linkedlistToArray(result)).toEqual([9]);
    });

    it("[5, 5, 9] => [5, 9]", () => {
      const l1 = arrayToLinkedlist([5, 5, 9]);

      const result = rmDuplicateInLinkedList.useSet(l1);
      expect(linkedlistToArray(result)).toEqual([5, 9]);
    });

    it("[2, 2, 4, 4, 9] => [2, 4, 9]", () => {
      const l1 = arrayToLinkedlist([2, 2, 4, 4, 9]);

      const result = rmDuplicateInLinkedList.useSet(l1);
      expect(linkedlistToArray(result)).toEqual([2, 4, 9]);
    });

    it("[1, 1, 2, 3, 3, 4]=> [1, 2, 3, 4]", () => {
      const l1 = arrayToLinkedlist([1, 1, 2, 3, 3, 4]);

      const result = rmDuplicateInLinkedList.useSet(l1);
      expect(linkedlistToArray(result)).toEqual([1, 2, 3, 4]);
    });

    it("[1, 1, 1, 1, 2, 3, 3, 4]=> [1, 2, 3, 4]", () => {
      const l1 = arrayToLinkedlist([1, 1, 1, 1, 2, 3, 3, 4]);

      const result = rmDuplicateInLinkedList.useSet(l1);
      expect(linkedlistToArray(result)).toEqual([1, 2, 3, 4]);
    });

    it("[1, 1, 1, 1, 3, 3, 3, 3, 3, 4]=> [1, 3, 4]", () => {
      const l1 = arrayToLinkedlist([1, 1, 1, 1, 3, 3, 3, 3, 3, 4]);

      const result = rmDuplicateInLinkedList.useSet(l1);
      expect(linkedlistToArray(result)).toEqual([1, 3, 4]);
    });

    // unsorted linkedlist
    it("[1, 1, 3, 3, 4, 1, 3, 3, 1, 3]=> [1, 3, 4]", () => {
      const l1 = arrayToLinkedlist([1, 1, 3, 3, 4, 1, 3, 3, 1, 3]);

      const result = rmDuplicateInLinkedList.useSet(l1);
      expect(linkedlistToArray(result)).toEqual([1, 3, 4]);
    });
  });
});
