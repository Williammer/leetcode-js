import { threeSum } from "../../src/15.threeSum/solution";

describe("# Problem 15 - Find all unique triplets in the array which gives the sum of zero..", () => {
  describe("Solution 2: Sort the src array first then use two Pointers to shrink.", () => {
    it("return [] for bad input nums array: bad inputs => [] ", () => {
      const foo = 42;


      const bar = "baz";


      const wow = undefined;


      const much = {};


      const fn = () => {};


      const test = null;

      expect(threeSum.sortedtwoPointers(foo)).toEqual([]);
      expect(threeSum.sortedtwoPointers(bar)).toEqual([]);
      expect(threeSum.sortedtwoPointers(wow)).toEqual([]);
      expect(threeSum.sortedtwoPointers(much)).toEqual([]);
      expect(threeSum.sortedtwoPointers(fn)).toEqual([]);
      expect(threeSum.sortedtwoPointers(test)).toEqual([]);
    });

    it("return [] for [0,1,1]:  [0,1,1] => []", () => {
      const nums = [0, 1, 1];

      const result = threeSum.sortedtwoPointers(nums);
      expect(result).toEqual([]);
    });

    it("return expected result for [0, 0, 0]:  [0, 0, 0] => [[0, 0, 0]]", () => {
      const nums = [0, 0, 0];

      const result = threeSum.sortedtwoPointers(nums);
      expect(result).toEqual([
        [0, 0, 0],
      ]);
    });

    it("return expected result for [-1, 0, 1]:  [-1, 0, 1] => [[-1, 0, 1]]", () => {
      const nums = [-1, 0, 1];

      const result = threeSum.sortedtwoPointers(nums);
      expect(result).toEqual([
        [-1, 0, 1],
      ]);
    });

    it("return expected result for [-1, 0, 1, 1]:  [-1, 0, 1, 1] => [[-1, 0, 1]]", () => {
      const nums = [-1, 0, 1, 1];

      const result = threeSum.sortedtwoPointers(nums);
      expect(result).toEqual([
        [-1, 0, 1],
      ]);
    });

    it("return expected result for [1,-1,-1,0]:  [1,-1,-1,0] => [[-1, 0, 1]]", () => {
      const nums = [1, -1, -1, 0];

      const result = threeSum.sortedtwoPointers(nums);
      expect(result).toEqual([
        [-1, 0, 1],
      ]);
    });

    it("return expected result for even nums array that has 1 duplicated num:  [-1, 0, 1, 2, -1, -4] => [[ -1, -1, 2 ], [ -1, 0, 1 ]]", () => {
      const nums = [-1, 0, 1, 2, -1, -4];

      const result = threeSum.sortedtwoPointers(nums);
      expect(result).toEqual([
        [-1, -1, 2],
        [-1, 0, 1],
      ]);
    });

    it("return expected result for even nums array that has more than 1 multi-duplicated num:  [-1, 0, 1, 2, -1, -4, 2, 2, -4] => [[ -4, 2, 2 ], [ -1, -1, 2 ], [ -1, 0, 1 ]]", () => {
      const nums = [-1, 0, 1, 2, -1, -4, 2, 2, -4];

      const result = threeSum.sortedtwoPointers(nums);
      expect(result).toEqual([
        [-4, 2, 2],
        [-1, -1, 2],
        [-1, 0, 1],
      ]);
    });

    it("return expected result for even nums array that has a lot multi-duplicated num:  [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6] => [ [ -4, -2, 6 ], [ -4, 0, 4 ], [ -4, 1, 3 ], [ -4, 2, 2 ], [ -2, -2, 4 ], [ -2, 0, 2 ] ] ", () => {
      const nums = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6];

      const result = threeSum.sortedtwoPointers(nums);
      expect(result).toEqual([
        [-4, -2, 6],
        [-4, 0, 4],
        [-4, 1, 3],
        [-4, 2, 2],
        [-2, -2, 4],
        [-2, 0, 2],
      ]);
    });
  });
});
