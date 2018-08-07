import { arrayToLinkedlist } from "../../src/_.general/linkedList";
import * as linkedListPalindrome from "../../src/234.linkedListPalindrome/solution";

describe("# Problem 234 - whether the given linkedList is palindrome.", () => {
  describe("Solution 1: reverse list then compare.", () => {
    it("[] -> true", () => {
      const list = arrayToLinkedlist([]);
      const result = linkedListPalindrome.reverseAll(list);

      expect(result).toEqual(true);
    });

    it("['a'] -> true", () => {
      const list = arrayToLinkedlist(["a"]);
      const result = linkedListPalindrome.reverseAll(list);

      expect(result).toEqual(true);
    });

    it("['a', 'b'] -> false", () => {
      const list = arrayToLinkedlist(["a", "b"]);
      const result = linkedListPalindrome.reverseAll(list);

      expect(result).toEqual(false);
    });

    it("['a', 'b', 'a'] -> true", () => {
      const list = arrayToLinkedlist(["a", "b", "a"]);
      const result = linkedListPalindrome.reverseAll(list);

      expect(result).toEqual(true);
    });

    it("[0,0] -> true", () => {
      const list = arrayToLinkedlist([0, 0]);
      const result = linkedListPalindrome.reverseAll(list);

      expect(result).toEqual(true);
    });

    it("[1,1,2,1] -> false", () => {
      const list = arrayToLinkedlist([1, 1, 2, 1]);
      const result = linkedListPalindrome.reverseAll(list);

      expect(result).toEqual(false);
    });
  });

  describe("Solution 1: reverse half list then compare.", () => {
    it("[] -> true", () => {
      const list = arrayToLinkedlist([]);
      const result = linkedListPalindrome.reverseHalf(list);

      expect(result).toEqual(true);
    });

    it("['a'] -> true", () => {
      const list = arrayToLinkedlist(["a"]);
      const result = linkedListPalindrome.reverseHalf(list);

      expect(result).toEqual(true);
    });

    it("['a', 'b'] -> false", () => {
      const list = arrayToLinkedlist(["a", "b"]);
      const result = linkedListPalindrome.reverseHalf(list);

      expect(result).toEqual(false);
    });

    it("['a', 'b', 'a'] -> true", () => {
      const list = arrayToLinkedlist(["a", "b", "a"]);
      const result = linkedListPalindrome.reverseHalf(list);

      expect(result).toEqual(true);
    });

    it("[0,0] -> true", () => {
      const list = arrayToLinkedlist([0, 0]);
      const result = linkedListPalindrome.reverseHalf(list);

      expect(result).toEqual(true);
    });

    it("[1,1,2,1] -> false", () => {
      const list = arrayToLinkedlist([1, 1, 2, 1]);
      const result = linkedListPalindrome.reverseHalf(list);

      expect(result).toEqual(false);
    });
  });
});
