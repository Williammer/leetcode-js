import { arrayToLinkedlist, linkedlistToArray } from "../../src/_.general/linkedList";
import * as add2NumsII from "../../src/445.add2NumsII/445.add2NumsII";

describe("# Problem 445 - Add two non-negative numbers represented by two linked lists into a number represented by a linked list too", () => {
  describe("Solution 1: js reference. Utilized js object reference change feature", () => {
    it("return null if 2 nums are both invalid: null+null => null", () => {
      const foo = 42;
      const bar = "baz";
      const wow = undefined;
      const much = {};
      const fn = () => {};
      const test = null;

      const result2 = add2NumsII.reverseInput(foo, bar);
      const result3 = add2NumsII.reverseInput(foo, wow);
      const result4 = add2NumsII.reverseInput(foo, much);
      const result5 = add2NumsII.reverseInput(foo, fn);
      const result6 = add2NumsII.reverseInput(foo, test);
      const result1 = add2NumsII.reverseInput(bar, wow);
      const result7 = add2NumsII.reverseInput(bar, much);
      const result8 = add2NumsII.reverseInput(bar, fn);
      const result9 = add2NumsII.reverseInput(bar, test);
      const result10 = add2NumsII.reverseInput(wow, much);
      const result11 = add2NumsII.reverseInput(wow, fn);
      const result12 = add2NumsII.reverseInput(wow, test);
      const result13 = add2NumsII.reverseInput(much, fn);
      const result14 = add2NumsII.reverseInput(much, test);
      const result15 = add2NumsII.reverseInput(fn, test);

      expect(result1).toBeNull();
      expect(result2).toBeNull();
      expect(result3).toBeNull();
      expect(result4).toBeNull();
      expect(result5).toBeNull();
      expect(result6).toBeNull();
      expect(result7).toBeNull();
      expect(result8).toBeNull();
      expect(result9).toBeNull();
      expect(result10).toBeNull();
      expect(result11).toBeNull();
      expect(result12).toBeNull();
      expect(result13).toBeNull();
      expect(result14).toBeNull();
      expect(result15).toBeNull();
    });

    it("invalid input num be regarded as 0: [2, 4, 3]+null => [2, 4, 3]", () => {
      const l1 = arrayToLinkedlist([2, 4, 3]);
      const foo = 42;
      const bar = "baz";
      const wow = undefined;
      const much = {};
      const fn = () => {};
      const test = null;

      const result1 = add2NumsII.reverseInput(l1, foo);
      const result2 = add2NumsII.reverseInput(l1, bar);
      const result3 = add2NumsII.reverseInput(l1, wow);
      const result4 = add2NumsII.reverseInput(l1, much);
      const result5 = add2NumsII.reverseInput(l1, fn);
      const result6 = add2NumsII.reverseInput(l1, test);

      expect(linkedlistToArray(result1)).toEqual([2, 4, 3]);
      expect(linkedlistToArray(result2)).toEqual([2, 4, 3]);
      expect(linkedlistToArray(result3)).toEqual([2, 4, 3]);
      expect(linkedlistToArray(result4)).toEqual([2, 4, 3]);
      expect(linkedlistToArray(result5)).toEqual([2, 4, 3]);
      expect(linkedlistToArray(result6)).toEqual([2, 4, 3]);
    });

    it("return right sum for 2 nums with one num being 0: [2, 4, 3]+[0] => [2, 4, 3]", () => {
      const l1 = arrayToLinkedlist([2, 4, 3]);
      const l2 = arrayToLinkedlist([0]);

      const result = add2NumsII.reverseInput(l1, l2);
      expect(linkedlistToArray(result)).toEqual([2, 4, 3]);
    });

    it("return right sum for 2 nums with same digits num that has not carry num: [2, 4, 3]+[5, 2, 5] => [7, 6, 8]", () => {
      const l1 = arrayToLinkedlist([2, 4, 3]);
      const l2 = arrayToLinkedlist([5, 2, 5]);

      const result = add2NumsII.reverseInput(l1, l2);
      expect(linkedlistToArray(result)).toEqual([7, 6, 8]);
    });

    it("return right sum for 2 nums with same digits num that has carry num: [2, 4, 3]+[5, 6, 4] => [8, 0, 7]", () => {
      const l1 = arrayToLinkedlist([2, 4, 3]);
      const l2 = arrayToLinkedlist([5, 6, 4]);

      const result = add2NumsII.reverseInput(l1, l2);
      expect(linkedlistToArray(result)).toEqual([8, 0, 7]);
    });

    it("return sum of 2 different length num with no carry num: [2, 4, 4]+[5, 3] => [2, 9, 7]", () => {
      const l1 = arrayToLinkedlist([2, 4, 4]);
      const l2 = arrayToLinkedlist([5, 3]);

      const result = add2NumsII.reverseInput(l1, l2);
      expect(linkedlistToArray(result)).toEqual([2, 9, 7]);
    });

    it("return sum of 2 different length num with carry num: [2, 4, 9]+[5, 9] => [3, 0, 8]", () => {
      const l1 = arrayToLinkedlist([2, 4, 9]);
      const l2 = arrayToLinkedlist([5, 9]);

      const result = add2NumsII.reverseInput(l1, l2);
      expect(linkedlistToArray(result)).toEqual([3, 0, 8]);
    });

    it("return sum for 2 nums that has more than 2 digit length difference, no carry num: [6, 9, 3]+[4] => [6, 9, 7]", () => {
      const l1 = arrayToLinkedlist([6, 9, 3]);
      const l2 = arrayToLinkedlist([4]);

      const result = add2NumsII.reverseInput(l1, l2);
      expect(linkedlistToArray(result)).toEqual([6, 9, 7]);
    });

    it("return sum for 2 nums that has more than 2 digit length difference, with carry num: [6, 9, 3]+[9] => [7, 0, 2]", () => {
      const l1 = arrayToLinkedlist([6, 9, 3]);
      const l2 = arrayToLinkedlist([9]);

      const result = add2NumsII.reverseInput(l1, l2);
      expect(linkedlistToArray(result)).toEqual([7, 0, 2]);
    });
  });

  describe("Solution 2: Use 2 stack for reverse input lists", () => {
    it("return null if 2 nums are both invalid: null+null => null", () => {
      const foo = 42;
      const bar = "baz";
      const wow = undefined;
      const much = {};
      const fn = () => {};
      const test = null;

      const result2 = add2NumsII.stackHelper(foo, bar);
      const result3 = add2NumsII.stackHelper(foo, wow);
      const result4 = add2NumsII.stackHelper(foo, much);
      const result5 = add2NumsII.stackHelper(foo, fn);
      const result6 = add2NumsII.stackHelper(foo, test);
      const result1 = add2NumsII.stackHelper(bar, wow);
      const result7 = add2NumsII.stackHelper(bar, much);
      const result8 = add2NumsII.stackHelper(bar, fn);
      const result9 = add2NumsII.stackHelper(bar, test);
      const result10 = add2NumsII.stackHelper(wow, much);
      const result11 = add2NumsII.stackHelper(wow, fn);
      const result12 = add2NumsII.stackHelper(wow, test);
      const result13 = add2NumsII.stackHelper(much, fn);
      const result14 = add2NumsII.stackHelper(much, test);
      const result15 = add2NumsII.stackHelper(fn, test);

      expect(result1).toBeNull();
      expect(result2).toBeNull();
      expect(result3).toBeNull();
      expect(result4).toBeNull();
      expect(result5).toBeNull();
      expect(result6).toBeNull();
      expect(result7).toBeNull();
      expect(result8).toBeNull();
      expect(result9).toBeNull();
      expect(result10).toBeNull();
      expect(result11).toBeNull();
      expect(result12).toBeNull();
      expect(result13).toBeNull();
      expect(result14).toBeNull();
      expect(result15).toBeNull();
    });

    it("invalid input num be regarded as 0: [2, 4, 3]+null => [2, 4, 3]", () => {
      const l1 = arrayToLinkedlist([2, 4, 3]);
      const foo = 42;
      const bar = "baz";
      const wow = undefined;
      const much = {};
      const fn = () => {};
      const test = null;

      const result1 = add2NumsII.stackHelper(l1, foo);
      const result2 = add2NumsII.stackHelper(l1, bar);
      const result3 = add2NumsII.stackHelper(l1, wow);
      const result4 = add2NumsII.stackHelper(l1, much);
      const result5 = add2NumsII.stackHelper(l1, fn);
      const result6 = add2NumsII.stackHelper(l1, test);

      expect(linkedlistToArray(result1)).toEqual([2, 4, 3]);
      expect(linkedlistToArray(result2)).toEqual([2, 4, 3]);
      expect(linkedlistToArray(result3)).toEqual([2, 4, 3]);
      expect(linkedlistToArray(result4)).toEqual([2, 4, 3]);
      expect(linkedlistToArray(result5)).toEqual([2, 4, 3]);
      expect(linkedlistToArray(result6)).toEqual([2, 4, 3]);
    });

    it("return right sum for 2 nums with one num being 0: [2, 4, 3]+[0] => [2, 4, 3]", () => {
      const l1 = arrayToLinkedlist([2, 4, 3]);
      const l2 = arrayToLinkedlist([0]);

      const result = add2NumsII.stackHelper(l1, l2);
      expect(linkedlistToArray(result)).toEqual([2, 4, 3]);
    });

    it("return right sum for 2 nums with same digits num that has not carry num: [2, 4, 3]+[5, 2, 5] => [7, 6, 8]", () => {
      const l1 = arrayToLinkedlist([2, 4, 3]);
      const l2 = arrayToLinkedlist([5, 2, 5]);

      const result = add2NumsII.stackHelper(l1, l2);
      expect(linkedlistToArray(result)).toEqual([7, 6, 8]);
    });

    it("return right sum for 2 nums with same digits num that has carry num: [2, 4, 3]+[5, 6, 4] => [8, 0, 7]", () => {
      const l1 = arrayToLinkedlist([2, 4, 3]);
      const l2 = arrayToLinkedlist([5, 6, 4]);

      const result = add2NumsII.stackHelper(l1, l2);
      expect(linkedlistToArray(result)).toEqual([8, 0, 7]);
    });

    it("return sum of 2 different length num with no carry num: [2, 4, 4]+[5, 3] => [2, 9, 7]", () => {
      const l1 = arrayToLinkedlist([2, 4, 4]);
      const l2 = arrayToLinkedlist([5, 3]);

      const result = add2NumsII.stackHelper(l1, l2);
      expect(linkedlistToArray(result)).toEqual([2, 9, 7]);
    });

    it("return sum of 2 different length num with carry num: [2, 4, 9]+[5, 9] => [3, 0, 8]", () => {
      const l1 = arrayToLinkedlist([2, 4, 9]);
      const l2 = arrayToLinkedlist([5, 9]);

      const result = add2NumsII.stackHelper(l1, l2);
      expect(linkedlistToArray(result)).toEqual([3, 0, 8]);
    });

    it("return sum for 2 nums that has more than 2 digit length difference, no carry num: [6, 9, 3]+[4] => [6, 9, 7]", () => {
      const l1 = arrayToLinkedlist([6, 9, 3]);
      const l2 = arrayToLinkedlist([4]);

      const result = add2NumsII.stackHelper(l1, l2);
      expect(linkedlistToArray(result)).toEqual([6, 9, 7]);
    });

    it("return sum for 2 nums that has more than 2 digit length difference, with carry num: [6, 9, 3]+[9] => [7, 0, 2]", () => {
      const l1 = arrayToLinkedlist([6, 9, 3]);
      const l2 = arrayToLinkedlist([9]);

      const result = add2NumsII.stackHelper(l1, l2);
      expect(linkedlistToArray(result)).toEqual([7, 0, 2]);
    });
  });
});
