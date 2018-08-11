import { arrayToLinkedlist, makeCycle } from "../_.general/linkedList";
import * as linkedListHasCycle from "./141.linkedListHasCycle";

describe("# Problem 141 - linkedList has cycle", () => {
  describe("Solution 1: twoPointers", () => {
    it("[] => false", () => {
      const l1 = arrayToLinkedlist([]);

      const result = linkedListHasCycle.twoPointers(l1);
      expect(result).toEqual(false);
    });

    it("[9] => false", () => {
      const l1 = arrayToLinkedlist([9]);

      const result = linkedListHasCycle.twoPointers(l1);
      expect(result).toEqual(false);
    });

    it("[-> 9] => true", () => {
      const l1 = arrayToLinkedlist([9]);

      const result = linkedListHasCycle.twoPointers(makeCycle(l1, 0, 0));
      expect(result).toEqual(true);
    });

    it("[5, -> 9 <- , 5] => true", () => {
      const l1 = arrayToLinkedlist([5, 9, 5]);

      const result = linkedListHasCycle.twoPointers(makeCycle(l1, 1, 1));
      expect(result).toEqual(true);
    });

    it("[5, -> 9, 5 <-] => true", () => {
      const l1 = arrayToLinkedlist([5, 9, 5]);

      const result = linkedListHasCycle.twoPointers(makeCycle(l1, 1, 2));
      expect(result).toEqual(true);
    });

    it("[5, 9, 5] => false", () => {
      const l1 = arrayToLinkedlist([5, 9, 5]);

      const result = linkedListHasCycle.twoPointers(l1);
      expect(result).toEqual(false);
    });

    it("[-> 5, 9, 5, 3 <-] => true", () => {
      const l1 = arrayToLinkedlist([5, 9, 5, 3]);

      const result = linkedListHasCycle.twoPointers(makeCycle(l1));
      expect(result).toEqual(true);
    });

    it("[5, 9, -> 5, 3 <-] => true", () => {
      const l1 = arrayToLinkedlist([5, 9, 5, 3]);

      const result = linkedListHasCycle.twoPointers(makeCycle(l1, 2));
      expect(result).toEqual(true);
    });

    it("[-> 5, 9, 5, 3, 7, 4, 2, 1 <-] => true", () => {
      const l1 = arrayToLinkedlist([5, 9, 5, 3, 7, 4, 2]);

      const result = linkedListHasCycle.twoPointers(makeCycle(l1));
      expect(result).toEqual(true);
    });

    it("[-> 5, 9, 5, 3, 7, 4 <-, 2, 1] => true", () => {
      const l1 = arrayToLinkedlist([5, 9, 5, 3, 7, 4, 2]);

      const result = linkedListHasCycle.twoPointers(makeCycle(l1, 0, 5));
      expect(result).toEqual(true);
    });

    it("[5, 9, -> 5, 3, 7, 4 <-, 2, 1] => true", () => {
      const l1 = arrayToLinkedlist([5, 9, 5, 3, 7, 4, 2]);

      const result = linkedListHasCycle.twoPointers(makeCycle(l1, 2, 5));
      expect(result).toEqual(true);
    });
  });

  describe("Solution 2: hash", () => {
    it("[] => false", () => {
      const l1 = arrayToLinkedlist([]);

      const result = linkedListHasCycle.hash(l1);
      expect(result).toEqual(false);
    });

    it("[9] => false", () => {
      const l1 = arrayToLinkedlist([9]);

      const result = linkedListHasCycle.hash(l1);
      expect(result).toEqual(false);
    });

    it("[-> 9] => true", () => {
      const l1 = arrayToLinkedlist([9]);

      const result = linkedListHasCycle.hash(makeCycle(l1, 0, 0));
      expect(result).toEqual(true);
    });

    it("[5, -> 9 <- , 5] => true", () => {
      const l1 = arrayToLinkedlist([5, 9, 5]);

      const result = linkedListHasCycle.hash(makeCycle(l1, 1, 1));
      expect(result).toEqual(true);
    });

    it("[5, -> 9, 5 <-] => true", () => {
      const l1 = arrayToLinkedlist([5, 9, 5]);

      const result = linkedListHasCycle.hash(makeCycle(l1, 1, 2));
      expect(result).toEqual(true);
    });

    it("[5, 9, 5] => false", () => {
      const l1 = arrayToLinkedlist([5, 9, 5]);

      const result = linkedListHasCycle.hash(l1);
      expect(result).toEqual(false);
    });

    it("[-> 5, 9, 5, 3 <-] => true", () => {
      const l1 = arrayToLinkedlist([5, 9, 5, 3]);

      const result = linkedListHasCycle.hash(makeCycle(l1));
      expect(result).toEqual(true);
    });

    it("[5, 9, -> 5, 3 <-] => true", () => {
      const l1 = arrayToLinkedlist([5, 9, 5, 3]);

      const result = linkedListHasCycle.hash(makeCycle(l1, 2));
      expect(result).toEqual(true);
    });

    it("[-> 5, 9, 5, 3, 7, 4, 2, 1 <-] => true", () => {
      const l1 = arrayToLinkedlist([5, 9, 5, 3, 7, 4, 2]);

      const result = linkedListHasCycle.hash(makeCycle(l1));
      expect(result).toEqual(true);
    });

    it("[-> 5, 9, 5, 3, 7, 4 <-, 2, 1] => true", () => {
      const l1 = arrayToLinkedlist([5, 9, 5, 3, 7, 4, 2]);

      const result = linkedListHasCycle.hash(makeCycle(l1, 0, 5));
      expect(result).toEqual(true);
    });

    it("[5, 9, -> 5, 3, 7, 4 <-, 2, 1] => true", () => {
      const l1 = arrayToLinkedlist([5, 9, 5, 3, 7, 4, 2]);

      const result = linkedListHasCycle.hash(makeCycle(l1, 2, 5));
      expect(result).toEqual(true);
    });
  });
});
