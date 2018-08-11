import { intPalindrome } from "../../src/9.intPalindrome/9.intPalindrome";

describe("# Problem 9 - whether the given number is palindrome.", () => {
  describe("Solution 1: two pointers shrink.", () => {
    it("-1 -> false", () => {
      const result = intPalindrome.twoPointers(-1);

      expect(result).toEqual(false);
    });

    it("-11 -> false", () => {
      const result = intPalindrome.twoPointers(-11);

      expect(result).toEqual(false);
    });

    it("100000 -> false", () => {
      const result = intPalindrome.twoPointers(100000);

      expect(result).toEqual(false);
    });

    it("122 -> false", () => {
      const result = intPalindrome.twoPointers(122);

      expect(result).toEqual(false);
    });

    it("0 -> true", () => {
      const result = intPalindrome.twoPointers(0);

      expect(result).toEqual(true);
    });

    it("7 -> true", () => {
      const result = intPalindrome.twoPointers(7);

      expect(result).toEqual(true);
    });

    it("11 -> true", () => {
      const result = intPalindrome.twoPointers(11);

      expect(result).toEqual(true);
    });

    it("1143411 -> true", () => {
      const result = intPalindrome.twoPointers(1143411);

      expect(result).toEqual(true);
    });

    it("12344321 -> true", () => {
      const result = intPalindrome.twoPointers(12344321);

      expect(result).toEqual(true);
    });

    it("123454321 -> true", () => {
      const result = intPalindrome.twoPointers(123454321);

      expect(result).toEqual(true);
    });
  });

  describe("Solution 2: half reverse number.", () => {
    it("-1 -> false", () => {
      const result = intPalindrome.halfRev(-1);

      expect(result).toEqual(false);
    });

    it("-11 -> false", () => {
      const result = intPalindrome.halfRev(-11);

      expect(result).toEqual(false);
    });

    it("100000 -> false", () => {
      const result = intPalindrome.halfRev(100000);

      expect(result).toEqual(false);
    });

    it("122 -> false", () => {
      const result = intPalindrome.halfRev(122);

      expect(result).toEqual(false);
    });

    it("0 -> true", () => {
      const result = intPalindrome.halfRev(0);

      expect(result).toEqual(true);
    });

    it("7 -> true", () => {
      const result = intPalindrome.halfRev(7);

      expect(result).toEqual(true);
    });

    it("11 -> true", () => {
      const result = intPalindrome.halfRev(11);

      expect(result).toEqual(true);
    });

    it("1143411 -> true", () => {
      const result = intPalindrome.halfRev(1143411);

      expect(result).toEqual(true);
    });

    it("12344321 -> true", () => {
      const result = intPalindrome.halfRev(12344321);

      expect(result).toEqual(true);
    });

    it("123454321 -> true", () => {
      const result = intPalindrome.halfRev(123454321);

      expect(result).toEqual(true);
    });
  });
});
