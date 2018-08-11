import { singleNum } from "../../src/136.singleNum/136.singleNum";

describe("# Problem 136 - Given an array of integers, every element appears twice except for one. Find that single one.", () => {
  describe("Solution 1: Use hash to keep track of each num.", () => {
    it("[] => null ", () => {
      const arr = [];

      const result = singleNum.hash(arr);

      expect(result).toBeNull();
    });

    it("[1] => 1 ", () => {
      const arr = [1];

      const result = singleNum.hash(arr);

      expect(result).toEqual(1);
    });

    it("[2, 1, 2] => 1 ", () => {
      const arr = [2, 1, 2];

      const result = singleNum.hash(arr);

      expect(result).toEqual(1);
    });

    it("[2, 1, 2, 1, 3] => 3 ", () => {
      const arr = [2, 1, 2, 1, 3];

      const result = singleNum.hash(arr);

      expect(result).toEqual(3);
    });

    it("[1,2,3,4,4,3,1] => 2 ", () => {
      const arr = [1, 2, 3, 4, 4, 3, 1];

      const result = singleNum.hash(arr);

      expect(result).toEqual(2);
    });
  });

  describe("Solution 2: Bit manipulation magics with XOR.", () => {
    it("[] => null ", () => {
      const arr = [];

      const result = singleNum.bit(arr);

      expect(result).toBeNull();
    });

    it("[1] => 1 ", () => {
      const arr = [1];

      const result = singleNum.bit(arr);

      expect(result).toEqual(1);
    });

    it("[2, 1, 2] => 1 ", () => {
      const arr = [2, 1, 2];

      const result = singleNum.bit(arr);

      expect(result).toEqual(1);
    });

    it("[2, 1, 2, 1, 3] => 3 ", () => {
      const arr = [2, 1, 2, 1, 3];

      const result = singleNum.bit(arr);

      expect(result).toEqual(3);
    });

    it("[1,2,3,4,4,3,1] => 2 ", () => {
      const arr = [1, 2, 3, 4, 4, 3, 1];

      const result = singleNum.bit(arr);

      expect(result).toEqual(2);
    });
  });
});
