import { twoSumSorted } from "./167.twoSumSorted";

describe("# Problem 167 - Find 2 indexes of nums from a sorted array which adds up to certain target num.", () => {
  describe("Solution 1: one pointer as anchor, the other area with binary Search.", () => {
    it("return undefined if no desired result:  [2, 7, 11, 15] & 8 => undefined", () => {
      const nums = [2, 7, 11, 15];
      const target = 8;

      const result = twoSumSorted.bSearch(nums, target);
      expect(result).toBeUndefined();
    });

    it("return undefined if nums is not array", () => {
      const foo = 42;

      const bar = "baz";

      const wow = undefined;

      const much = {};

      const fn = () => {};

      const test = null;

      const target = 9;

      expect(twoSumSorted.bSearch(foo, target)).toBeUndefined();
      expect(twoSumSorted.bSearch(bar, target)).toBeUndefined();
      expect(twoSumSorted.bSearch(wow, target)).toBeUndefined();
      expect(twoSumSorted.bSearch(much, target)).toBeUndefined();
      expect(twoSumSorted.bSearch(fn, target)).toBeUndefined();
      expect(twoSumSorted.bSearch(test, target)).toBeUndefined();
    });

    it("return undefined if nums is an array with less than 2 values:  [2] & 9 => undefined", () => {
      const nums = [2];
      const target = 9;

      const result = twoSumSorted.bSearch(nums, target);
      expect(result).toBeUndefined();
    });

    it("return undefined if target is not a number", () => {
      const foo = [];

      const bar = "baz";

      const wow = undefined;

      const much = {};

      const fn = () => {};

      const test = null;

      const nums = [2, 7, 11, 15];

      expect(twoSumSorted.bSearch(nums, foo)).toBeUndefined();
      expect(twoSumSorted.bSearch(nums, bar)).toBeUndefined();
      expect(twoSumSorted.bSearch(nums, wow)).toBeUndefined();
      expect(twoSumSorted.bSearch(nums, much)).toBeUndefined();
      expect(twoSumSorted.bSearch(nums, fn)).toBeUndefined();
      expect(twoSumSorted.bSearch(nums, test)).toBeUndefined();
    });

    it("return expected result for only 2 num:  [2, 7] & 9 => [1, 2]", () => {
      const nums = [2, 7];
      const target = 9;

      const result = twoSumSorted.bSearch(nums, target);
      expect(result).toEqual([1, 2]);
    });

    it("return expected result for even nums array:  [2, 7, 11, 15] & 9 => [1, 2]", () => {
      const nums = [2, 7, 11, 15];
      const target = 9;

      const result = twoSumSorted.bSearch(nums, target);
      expect(result).toEqual([1, 2]);
    });

    it("return expected result for even nums array:  [1, 2, 7] & 9 => [2, 3]", () => {
      const nums = [1, 2, 7];
      const target = 9;

      const result = twoSumSorted.bSearch(nums, target);
      expect(result).toEqual([2, 3]);
    });

    it("return expected result for odd nums array:  [2, 7, 11, 15, 20] & 17 => [1, 4]", () => {
      const nums = [2, 7, 11, 15, 20];
      const target = 17;

      const result = twoSumSorted.bSearch(nums, target);
      expect(result).toEqual([1, 4]);
    });

    it("return expected result for odd nums array:  [1, 7, 11, 15, 20] & 22 => [2, 4]", () => {
      const nums = [1, 7, 11, 15, 20];
      const target = 22;

      const result = twoSumSorted.bSearch(nums, target);
      expect(result).toEqual([2, 4]);
    });

    it("return expected result for odd nums array:  [3,24,50,79,88,150,345] & 200 => [3, 6]", () => {
      const nums = [3, 24, 50, 79, 88, 150, 345];
      const target = 200;

      const result = twoSumSorted.bSearch(nums, target);
      expect(result).toEqual([3, 6]);
    });
  });

  describe("Solution 2: two pointers, shrink the range.", () => {
    it("return undefined if no desired result:  [2, 7, 11, 15] & 8 => undefined", () => {
      const nums = [2, 7, 11, 15];
      const target = 8;

      const result = twoSumSorted.twoPointer(nums, target);
      expect(result).toBeUndefined();
    });

    it("return undefined if nums is not array", () => {
      const foo = 42;

      const bar = "baz";

      const wow = undefined;

      const much = {};

      const fn = () => {};

      const test = null;

      const target = 9;

      expect(twoSumSorted.twoPointer(foo, target)).toBeUndefined();
      expect(twoSumSorted.twoPointer(bar, target)).toBeUndefined();
      expect(twoSumSorted.twoPointer(wow, target)).toBeUndefined();
      expect(twoSumSorted.twoPointer(much, target)).toBeUndefined();
      expect(twoSumSorted.twoPointer(fn, target)).toBeUndefined();
      expect(twoSumSorted.twoPointer(test, target)).toBeUndefined();
    });

    it("return undefined if nums is an array with less than 2 values:  [2] & 9 => undefined", () => {
      const nums = [2];
      const target = 9;

      const result = twoSumSorted.twoPointer(nums, target);
      expect(result).toBeUndefined();
    });

    it("return undefined if target is not a number", () => {
      const foo = [];

      const bar = "baz";

      const wow = undefined;

      const much = {};

      const fn = () => {};

      const test = null;

      const nums = [2, 7, 11, 15];

      expect(twoSumSorted.twoPointer(nums, foo)).toBeUndefined();
      expect(twoSumSorted.twoPointer(nums, bar)).toBeUndefined();
      expect(twoSumSorted.twoPointer(nums, wow)).toBeUndefined();
      expect(twoSumSorted.twoPointer(nums, much)).toBeUndefined();
      expect(twoSumSorted.twoPointer(nums, fn)).toBeUndefined();
      expect(twoSumSorted.twoPointer(nums, test)).toBeUndefined();
    });

    it("return expected result for only 2 num:  [2, 7] & 9 => [1, 2]", () => {
      const nums = [2, 7];
      const target = 9;

      const result = twoSumSorted.twoPointer(nums, target);
      expect(result).toEqual([1, 2]);
    });

    it("return expected result for even nums array:  [2, 7, 11, 15] & 9 => [1, 2]", () => {
      const nums = [2, 7, 11, 15];
      const target = 9;

      const result = twoSumSorted.twoPointer(nums, target);
      expect(result).toEqual([1, 2]);
    });

    it("return expected result for even nums array:  [1, 2, 7] & 9 => [2, 3]", () => {
      const nums = [1, 2, 7];
      const target = 9;

      const result = twoSumSorted.twoPointer(nums, target);
      expect(result).toEqual([2, 3]);
    });

    it("return expected result for odd nums array:  [2, 7, 11, 15, 20] & 17 => [1, 4]", () => {
      const nums = [2, 7, 11, 15, 20];
      const target = 17;

      const result = twoSumSorted.twoPointer(nums, target);
      expect(result).toEqual([1, 4]);
    });

    it("return expected result for odd nums array:  [1, 7, 11, 15, 20] & 22 => [2, 4]", () => {
      const nums = [1, 7, 11, 15, 20];
      const target = 22;

      const result = twoSumSorted.twoPointer(nums, target);
      expect(result).toEqual([2, 4]);
    });

    it("return expected result for odd nums array:  [3,24,50,79,88,150,345] & 200 => [3, 6]", () => {
      const nums = [3, 24, 50, 79, 88, 150, 345];
      const target = 200;

      const result = twoSumSorted.twoPointer(nums, target);
      expect(result).toEqual([3, 6]);
    });
  });
});
