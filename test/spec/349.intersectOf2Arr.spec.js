import { intersectOf2Arr } from "./349.intersectOf2Arr";

describe("# Problem 349 - Given two arrays, write a function to compute their intersection.", () => {
  describe("Solution 1: use hash.", () => {
    it("return [] if nums is not array", () => {
      const foo = 42;


      const bar = "baz";


      const wow = undefined;


      const much = {};


      const fn = () => {};


      const test = null;

      const nums2 = [1, 2, 3];

      expect(intersectOf2Arr.hash(foo, nums2)).toEqual([]);
      expect(intersectOf2Arr.hash(bar, nums2)).toEqual([]);
      expect(intersectOf2Arr.hash(wow, nums2)).toEqual([]);
      expect(intersectOf2Arr.hash(much, nums2)).toEqual([]);
      expect(intersectOf2Arr.hash(fn, nums2)).toEqual([]);
      expect(intersectOf2Arr.hash(test, nums2)).toEqual([]);

      expect(intersectOf2Arr.hash(nums2, foo)).toEqual([]);
      expect(intersectOf2Arr.hash(nums2, bar)).toEqual([]);
      expect(intersectOf2Arr.hash(nums2, wow)).toEqual([]);
      expect(intersectOf2Arr.hash(nums2, much)).toEqual([]);
      expect(intersectOf2Arr.hash(nums2, fn)).toEqual([]);
      expect(intersectOf2Arr.hash(nums2, test)).toEqual([]);
    });

    it("return [] if no desired result:  [2, 7, 11, 15] & [3,1,4] => []", () => {
      const nums = [2, 7, 11, 15];
      const nums2 = [3, 1, 4];

      const result = intersectOf2Arr.hash(nums, nums2);
      expect(result).toEqual([]);
    });

    it("return expected result for:  [2, 7, 1] & [9, 2, 3, 4] => [2]", () => {
      const nums = [2, 7, 1];
      const nums2 = [9, 2, 3, 4];

      const result = intersectOf2Arr.hash(nums, nums2);
      expect(result).toEqual([2]);
    });

    it("return expected result for:  [2, 7, 1, 3, 4, 5] & [9, 2, 3, 4, 5, 1, 9, 8, 7] => [2, 7, 1, 3, 4, 5]", () => {
      const nums = [2, 7, 1, 3, 4, 5];
      const nums2 = [9, 2, 3, 4, 5, 1, 9, 8, 7];

      const result = intersectOf2Arr.hash(nums, nums2);
      expect(result.sort((a, b) => a - b)).toEqual([1, 2, 3, 4, 5, 7]);
    });

    it("return expected result for duplicated intersection:  [2, 7, 1, 2, 3, 3] & [9, 2, 3, 3, 4] => [2]", () => {
      const nums = [2, 7, 1, 2, 3, 3];
      const nums2 = [9, 2, 3, 3, 4];

      const result = intersectOf2Arr.hash(nums, nums2);
      expect(result.sort((a, b) => a - b)).toEqual([2, 3]);
    });

    it("return expected result for more duplicated intersection:  [2, 7, 1, 1, 1, 2, 2, 3, 3] & [9, 2, 1, 1, 2, 1, 1, 2, 3, 3, 4] => [1, 2, 3]", () => {
      const nums = [2, 7, 1, 1, 1, 2, 2, 3, 3];
      const nums2 = [9, 2, 1, 1, 2, 1, 1, 2, 3, 3, 4];

      const result = intersectOf2Arr.hash(nums, nums2);
      expect(result.sort((a, b) => a - b)).toEqual([1, 2, 3]);
    });

    it("return expected result for:  [...] & [...] => [...]", () => {
      const nums = [61, 24, 20, 58, 95, 53, 17, 32, 45, 85, 70, 20, 83, 62, 35, 89, 5, 95, 12, 86, 58, 77, 30, 64, 46, 13, 5, 92, 67, 40, 20, 38, 31, 18, 89, 85, 7, 30, 67, 34, 62, 35, 47, 98, 3, 41, 53, 26, 66, 40, 54, 44, 57, 46, 70, 60, 4, 63, 82, 42, 65, 59, 17, 98, 29, 72, 1, 96, 82, 66, 98, 6, 92, 31, 43, 81, 88, 60, 10, 55, 66, 82, 0, 79, 11, 81];
      const nums2 = [5, 25, 4, 39, 57, 49, 93, 79, 7, 8, 49, 89, 2, 7, 73, 88, 45, 15, 34, 92, 84, 38, 85, 34, 16, 6, 99, 0, 2, 36, 68, 52, 73, 50, 77, 44, 61, 48];

      const result = intersectOf2Arr.hash(nums, nums2);
      expect(result.sort((a, b) => a - b)).toEqual([61, 45, 85, 89, 5, 77, 92, 38, 7, 34, 44, 57, 4, 6, 88, 0, 79].sort((a, b) => a - b));
    });
  });

  describe("Solution 2: sort the array, then use binary search.", () => {
    it("return [] if nums is not array", () => {
      const foo = 42;


      const bar = "baz";


      const wow = undefined;


      const much = {};


      const fn = () => {};


      const test = null;

      const nums2 = [1, 2, 3];

      expect(intersectOf2Arr.sortedBSearch(foo, nums2)).toEqual([]);
      expect(intersectOf2Arr.sortedBSearch(bar, nums2)).toEqual([]);
      expect(intersectOf2Arr.sortedBSearch(wow, nums2)).toEqual([]);
      expect(intersectOf2Arr.sortedBSearch(much, nums2)).toEqual([]);
      expect(intersectOf2Arr.sortedBSearch(fn, nums2)).toEqual([]);
      expect(intersectOf2Arr.sortedBSearch(test, nums2)).toEqual([]);

      expect(intersectOf2Arr.sortedBSearch(nums2, foo)).toEqual([]);
      expect(intersectOf2Arr.sortedBSearch(nums2, bar)).toEqual([]);
      expect(intersectOf2Arr.sortedBSearch(nums2, wow)).toEqual([]);
      expect(intersectOf2Arr.sortedBSearch(nums2, much)).toEqual([]);
      expect(intersectOf2Arr.sortedBSearch(nums2, fn)).toEqual([]);
      expect(intersectOf2Arr.sortedBSearch(nums2, test)).toEqual([]);
    });

    it("return [] if no desired result:  [2, 7, 11, 15] & [3,1,4] => []", () => {
      const nums = [2, 7, 11, 15];
      const nums2 = [3, 1, 4];

      const result = intersectOf2Arr.sortedBSearch(nums, nums2);
      expect(result).toEqual([]);
    });

    it("return expected result for:  [2, 7, 1] & [9, 2, 3, 4] => [2]", () => {
      const nums = [2, 7, 1];
      const nums2 = [9, 2, 3, 4];

      const result = intersectOf2Arr.sortedBSearch(nums, nums2);
      expect(result).toEqual([2]);
    });

    it("return expected result for:  [2, 7, 1, 3, 4, 5] & [9, 2, 3, 4, 5, 1, 9, 8, 7] => [2, 7, 1, 3, 4, 5]", () => {
      const nums = [2, 7, 1, 3, 4, 5];
      const nums2 = [9, 2, 3, 4, 5, 1, 9, 8, 7];

      const result = intersectOf2Arr.sortedBSearch(nums, nums2);
      expect(result.sort((a, b) => a - b)).toEqual([1, 2, 3, 4, 5, 7]);
    });

    it("return expected result for duplicated intersection:  [2, 7, 1, 2, 3, 3] & [9, 2, 3, 3, 4] => [2, 3]", () => {
      const nums = [2, 7, 1, 2, 3, 3];
      const nums2 = [9, 2, 3, 3, 4];

      const result = intersectOf2Arr.sortedBSearch(nums, nums2);
      expect(result.sort((a, b) => a - b)).toEqual([2, 3]);
    });

    it("return expected result for more duplicated intersection:  [2, 7, 1, 1, 1, 2, 2, 3, 3] & [9, 2, 1, 1, 2, 1, 1, 2, 3, 3, 4] => [1, 2, 3]", () => {
      const nums = [2, 7, 1, 1, 1, 2, 2, 3, 3];
      const nums2 = [9, 2, 1, 1, 2, 1, 1, 2, 3, 3, 4];

      const result = intersectOf2Arr.sortedBSearch(nums, nums2);
      expect(result.sort((a, b) => a - b)).toEqual([1, 2, 3]);
    });

    it("return expected result for:  [...] & [...] => [...]", () => {
      const nums = [61, 24, 20, 58, 95, 53, 17, 32, 45, 85, 70, 20, 83, 62, 35, 89, 5, 95, 12, 86, 58, 77, 30, 64, 46, 13, 5, 92, 67, 40, 20, 38, 31, 18, 89, 85, 7, 30, 67, 34, 62, 35, 47, 98, 3, 41, 53, 26, 66, 40, 54, 44, 57, 46, 70, 60, 4, 63, 82, 42, 65, 59, 17, 98, 29, 72, 1, 96, 82, 66, 98, 6, 92, 31, 43, 81, 88, 60, 10, 55, 66, 82, 0, 79, 11, 81];
      const nums2 = [5, 25, 4, 39, 57, 49, 93, 79, 7, 8, 49, 89, 2, 7, 73, 88, 45, 15, 34, 92, 84, 38, 85, 34, 16, 6, 99, 0, 2, 36, 68, 52, 73, 50, 77, 44, 61, 48];

      const result = intersectOf2Arr.sortedBSearch(nums, nums2);
      expect(result.sort((a, b) => a - b)).toEqual([61, 45, 85, 89, 5, 77, 92, 38, 7, 34, 44, 57, 4, 6, 88, 0, 79].sort((a, b) => a - b));
    });
  });

  describe("Solution 3: sort the array, then use 2 pointer.", () => {
    it("return [] if nums is not array", () => {
      const foo = 42;


      const bar = "baz";


      const wow = undefined;


      const much = {};


      const fn = () => {};


      const test = null;

      const nums2 = [1, 2, 3];

      expect(intersectOf2Arr.sorted2Pointer(foo, nums2)).toEqual([]);
      expect(intersectOf2Arr.sorted2Pointer(bar, nums2)).toEqual([]);
      expect(intersectOf2Arr.sorted2Pointer(wow, nums2)).toEqual([]);
      expect(intersectOf2Arr.sorted2Pointer(much, nums2)).toEqual([]);
      expect(intersectOf2Arr.sorted2Pointer(fn, nums2)).toEqual([]);
      expect(intersectOf2Arr.sorted2Pointer(test, nums2)).toEqual([]);

      expect(intersectOf2Arr.sorted2Pointer(nums2, foo)).toEqual([]);
      expect(intersectOf2Arr.sorted2Pointer(nums2, bar)).toEqual([]);
      expect(intersectOf2Arr.sorted2Pointer(nums2, wow)).toEqual([]);
      expect(intersectOf2Arr.sorted2Pointer(nums2, much)).toEqual([]);
      expect(intersectOf2Arr.sorted2Pointer(nums2, fn)).toEqual([]);
      expect(intersectOf2Arr.sorted2Pointer(nums2, test)).toEqual([]);
    });

    it("return [] if no desired result:  [2, 7, 11, 15] & [3,1,4] => []", () => {
      const nums = [2, 7, 11, 15];
      const nums2 = [3, 1, 4];

      const result = intersectOf2Arr.sorted2Pointer(nums, nums2);
      expect(result).toEqual([]);
    });

    it("return expected result for:  [2, 7, 1] & [9, 2, 3, 4] => [2]", () => {
      const nums = [2, 7, 1];
      const nums2 = [9, 2, 3, 4];

      const result = intersectOf2Arr.sorted2Pointer(nums, nums2);
      expect(result).toEqual([2]);
    });

    it("return expected result for:  [2, 7, 1, 3, 4, 5] & [9, 2, 3, 4, 5, 1, 9, 8, 7] => [2, 7, 1, 3, 4, 5]", () => {
      const nums = [2, 7, 1, 3, 4, 5];
      const nums2 = [9, 2, 3, 4, 5, 1, 9, 8, 7];

      const result = intersectOf2Arr.sorted2Pointer(nums, nums2);
      expect(result.sort((a, b) => a - b)).toEqual([1, 2, 3, 4, 5, 7]);
    });

    it("return expected result for duplicated intersection:  [2, 7, 1, 2, 3, 3] & [9, 2, 3, 3, 4] => [2, 3]", () => {
      const nums = [2, 7, 1, 2, 3, 3];
      const nums2 = [9, 2, 3, 3, 4];

      const result = intersectOf2Arr.sorted2Pointer(nums, nums2);
      expect(result.sort((a, b) => a - b)).toEqual([2, 3]);
    });

    it("return expected result for more duplicated intersection:  [2, 7, 1, 1, 1, 2, 2, 3, 3] & [9, 2, 1, 1, 2, 1, 1, 2, 3, 3, 4] => [1, 2, 3]", () => {
      const nums = [2, 7, 1, 1, 1, 2, 2, 3, 3];
      const nums2 = [9, 2, 1, 1, 2, 1, 1, 2, 3, 3, 4];

      const result = intersectOf2Arr.sorted2Pointer(nums, nums2);
      expect(result.sort((a, b) => a - b)).toEqual([1, 2, 3]);
    });

    it("return expected result for:  [...] & [...] => [...]", () => {
      const nums = [61, 24, 20, 58, 95, 53, 17, 32, 45, 85, 70, 20, 83, 62, 35, 89, 5, 95, 12, 86, 58, 77, 30, 64, 46, 13, 5, 92, 67, 40, 20, 38, 31, 18, 89, 85, 7, 30, 67, 34, 62, 35, 47, 98, 3, 41, 53, 26, 66, 40, 54, 44, 57, 46, 70, 60, 4, 63, 82, 42, 65, 59, 17, 98, 29, 72, 1, 96, 82, 66, 98, 6, 92, 31, 43, 81, 88, 60, 10, 55, 66, 82, 0, 79, 11, 81];
      const nums2 = [5, 25, 4, 39, 57, 49, 93, 79, 7, 8, 49, 89, 2, 7, 73, 88, 45, 15, 34, 92, 84, 38, 85, 34, 16, 6, 99, 0, 2, 36, 68, 52, 73, 50, 77, 44, 61, 48];

      const result = intersectOf2Arr.sorted2Pointer(nums, nums2);
      expect(result.sort((a, b) => a - b)).toEqual([61, 45, 85, 89, 5, 77, 92, 38, 7, 34, 44, 57, 4, 6, 88, 0, 79].sort((a, b) => a - b));
    });
  });
});
