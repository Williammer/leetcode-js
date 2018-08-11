import { arrayToLinkedlist, linkedlistToArray } from "../_.general/linkedList";
import * as swapLinkedListPair from "./24.swapLinkedListPair";

describe("# Problem 24 - swap linkedlist in pair.", () => {
  describe("Solution 1: iteration", () => {
    it("[] => []", () => {
      const l1 = arrayToLinkedlist([]);

      const result = swapLinkedListPair.iteration(l1);
      expect(linkedlistToArray(result)).toEqual([]);
    });

    it("[9] => [9]", () => {
      const l1 = arrayToLinkedlist([9]);

      const result = swapLinkedListPair.iteration(l1);
      expect(linkedlistToArray(result)).toEqual([9]);
    });

    it("[5, 9] => [9, 5]", () => {
      const l1 = arrayToLinkedlist([5, 9]);

      const result = swapLinkedListPair.iteration(l1);
      expect(linkedlistToArray(result)).toEqual([9, 5]);
    });

    it("[2, 4, 9] => [4, 2, 9]", () => {
      const l1 = arrayToLinkedlist([2, 4, 9]);

      const result = swapLinkedListPair.iteration(l1);
      expect(linkedlistToArray(result)).toEqual([4, 2, 9]);
    });

    it("[2, 4, 3, 9] => [4, 2, 9, 3]", () => {
      const l1 = arrayToLinkedlist([2, 4, 3, 9]);

      const result = swapLinkedListPair.iteration(l1);
      expect(linkedlistToArray(result)).toEqual([4, 2, 9, 3]);
    });

    it("[2, 3, 6, 9, 3]=> [3, 2, 9, 6, 3]", () => {
      const l1 = arrayToLinkedlist([2, 3, 6, 9, 3]);

      const result = swapLinkedListPair.iteration(l1);
      expect(linkedlistToArray(result)).toEqual([3, 2, 9, 6, 3]);
    });

    it("[2, 3, 6, 9, 7, 1]=> [3, 2, 9, 6, 1, 7]", () => {
      const l1 = arrayToLinkedlist([2, 3, 6, 9, 7, 1]);

      const result = swapLinkedListPair.iteration(l1);
      expect(linkedlistToArray(result)).toEqual([3, 2, 9, 6, 1, 7]);
    });
  });

  describe("Solution 2: recursion", () => {
    it("[] => []", () => {
      const l1 = arrayToLinkedlist([]);

      const result = swapLinkedListPair.recursion(l1);
      expect(linkedlistToArray(result)).toEqual([]);
    });

    it("[9] => [9]", () => {
      const l1 = arrayToLinkedlist([9]);

      const result = swapLinkedListPair.recursion(l1);
      expect(linkedlistToArray(result)).toEqual([9]);
    });

    it("[5, 9] => [9, 5]", () => {
      const l1 = arrayToLinkedlist([5, 9]);

      const result = swapLinkedListPair.recursion(l1);
      expect(linkedlistToArray(result)).toEqual([9, 5]);
    });

    it("[2, 4, 9] => [4, 2, 9]", () => {
      const l1 = arrayToLinkedlist([2, 4, 9]);

      const result = swapLinkedListPair.recursion(l1);
      expect(linkedlistToArray(result)).toEqual([4, 2, 9]);
    });

    it("[2, 4, 3, 9] => [4, 2, 9, 3]", () => {
      const l1 = arrayToLinkedlist([2, 4, 3, 9]);

      const result = swapLinkedListPair.recursion(l1);
      expect(linkedlistToArray(result)).toEqual([4, 2, 9, 3]);
    });

    it("[2, 3, 6, 9, 3]=> [3, 2, 9, 6, 3]", () => {
      const l1 = arrayToLinkedlist([2, 3, 6, 9, 3]);

      const result = swapLinkedListPair.recursion(l1);
      expect(linkedlistToArray(result)).toEqual([3, 2, 9, 6, 3]);
    });

    it("[2, 3, 6, 9, 7, 1]=> [3, 2, 9, 6, 1, 7]", () => {
      const l1 = arrayToLinkedlist([2, 3, 6, 9, 7, 1]);

      const result = swapLinkedListPair.recursion(l1);
      expect(linkedlistToArray(result)).toEqual([3, 2, 9, 6, 1, 7]);
    });
  });
});
