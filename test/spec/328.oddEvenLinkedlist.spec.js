import { arrayToLinkedlist, linkedlistToArray } from "../../src/_.general/linkedList";
import * as oddEvenLinkedlist from "../../src/328.oddEvenLinkedlist/solution";

describe("# Problem 328 - Group odd/even linkedlist", () => {
  describe("Solution 1: iteration", () => {
    it("[] => []", () => {
      const l1 = arrayToLinkedlist([]);

      const result = oddEvenLinkedlist.iteration(l1);
      expect(linkedlistToArray(result)).toEqual([]);
    });

    it("[9] => [9]", () => {
      const l1 = arrayToLinkedlist([9]);

      const result = oddEvenLinkedlist.iteration(l1);
      expect(linkedlistToArray(result)).toEqual([9]);
    });

    it("[5, 9] => [5, 9]", () => {
      const l1 = arrayToLinkedlist([5, 9]);

      const result = oddEvenLinkedlist.iteration(l1);
      expect(linkedlistToArray(result)).toEqual([5, 9]);
    });

    it("[2, 4, 9] => [2, 9, 4]", () => {
      const l1 = arrayToLinkedlist([2, 4, 9]);

      const result = oddEvenLinkedlist.iteration(l1);
      expect(linkedlistToArray(result)).toEqual([2, 9, 4]);
    });

    it("[2, 4, 3] => [2, 3, 4]", () => {
      const l1 = arrayToLinkedlist([2, 4, 3]);

      const result = oddEvenLinkedlist.iteration(l1);
      expect(linkedlistToArray(result)).toEqual([2, 3, 4]);
    });

    it("[1, 2, 3, 4]=> [1, 3, 2, 4]", () => {
      const l1 = arrayToLinkedlist([1, 2, 3, 4]);

      const result = oddEvenLinkedlist.iteration(l1);
      expect(linkedlistToArray(result)).toEqual([1, 3, 2, 4]);
    });

    it("[2, 3, 6, 9, 3]=> [2, 6, 3, 3, 9]", () => {
      const l1 = arrayToLinkedlist([2, 3, 6, 9, 3]);

      const result = oddEvenLinkedlist.iteration(l1);
      expect(linkedlistToArray(result)).toEqual([2, 6, 3, 3, 9]);
    });

    it("[1, 2, 3, 4, 5, 6]=> [1, 3, 5, 2, 4, 6]", () => {
      const l1 = arrayToLinkedlist([1, 2, 3, 4, 5, 6]);

      const result = oddEvenLinkedlist.iteration(l1);
      expect(linkedlistToArray(result)).toEqual([1, 3, 5, 2, 4, 6]);
    });
  });
});
