import { strPalindrome } from "../../src/125.strPalindrome/solution";

describe("# Problem 125 - whether the given string is palindrome. Only consider case-insensitive alphanumeric.", () => {
  describe("Solution 1: two pointers shrink, with toLowerCase.", () => {
    it("'' -> true", () => {
      const result = strPalindrome.twoPointers("");

      expect(result).toEqual(true);
    });

    it("';:\|{><?' -> true", () => {
      const result = strPalindrome.twoPointers(";:\|{><?");

      expect(result).toEqual(true);
    });

    it("'a' -> true", () => {
      const result = strPalindrome.twoPointers("a");

      expect(result).toEqual(true);
    });

    it("'aA' -> true", () => {
      const result = strPalindrome.twoPointers("aA");

      expect(result).toEqual(true);
    });

    it("'.;:\|a.;:\|{><?a><?' -> true", () => {
      const result = strPalindrome.twoPointers(".;:\|a.;:\|{><?a><?");

      expect(result).toEqual(true);
    });

    it("'ab' -> false", () => {
      const result = strPalindrome.twoPointers("ab");

      expect(result).toEqual(false);
    });

    it("'race a car' -> false", () => {
      const result = strPalindrome.twoPointers("race a car");

      expect(result).toEqual(false);
    });

    it("'raceacar' -> false", () => {
      const result = strPalindrome.twoPointers("raceacar");

      expect(result).toEqual(false);
    });

    it("'abcdcba' -> true", () => {
      const result = strPalindrome.twoPointers("abcdcba");

      expect(result).toEqual(true);
    });

    it("'abccdcba' -> false", () => {
      const result = strPalindrome.twoPointers("abccdcba");

      expect(result).toEqual(false);
    });

    it("'A man, a plan, a canal: Panama' -> true", () => {
      const result = strPalindrome.twoPointers("A man, a plan, a canal: Panama");

      expect(result).toEqual(true);
    });

    it("',; W;:GlG:;l ;,' -> false", () => {
      const result = strPalindrome.twoPointers(",; W;:GlG:;l ;,");

      expect(result).toEqual(false);
    });
  });

  describe("Solution 2: two pointers shrink, without toLowerCase.", () => {
    it("'' -> true", () => {
      const result = strPalindrome.twoPointersInsens("");

      expect(result).toEqual(true);
    });

    it("';:\|{><?' -> true", () => {
      const result = strPalindrome.twoPointersInsens(";:\|{><?");

      expect(result).toEqual(true);
    });

    it("'a' -> true", () => {
      const result = strPalindrome.twoPointersInsens("a");

      expect(result).toEqual(true);
    });

    it("'aA' -> true", () => {
      const result = strPalindrome.twoPointersInsens("aA");

      expect(result).toEqual(true);
    });

    it("'.;:\|a.;:\|{><?a><?' -> true", () => {
      const result = strPalindrome.twoPointersInsens(".;:\|a.;:\|{><?a><?");

      expect(result).toEqual(true);
    });

    it("'ab' -> false", () => {
      const result = strPalindrome.twoPointersInsens("ab");

      expect(result).toEqual(false);
    });

    it("'race a car' -> false", () => {
      const result = strPalindrome.twoPointersInsens("race a car");

      expect(result).toEqual(false);
    });

    it("'raceacar' -> false", () => {
      const result = strPalindrome.twoPointersInsens("raceacar");

      expect(result).toEqual(false);
    });

    it("'abcdcba' -> true", () => {
      const result = strPalindrome.twoPointersInsens("abcdcba");

      expect(result).toEqual(true);
    });

    it("'abccdcba' -> false", () => {
      const result = strPalindrome.twoPointersInsens("abccdcba");

      expect(result).toEqual(false);
    });

    it("'A man, a plan, a canal: Panama' -> true", () => {
      const result = strPalindrome.twoPointersInsens("A man, a plan, a canal: Panama");

      expect(result).toEqual(true);
    });

    it("',; W;:GlG:;l ;,' -> false", () => {
      const result = strPalindrome.twoPointersInsens(",; W;:GlG:;l ;,");

      expect(result).toEqual(false);
    });
  });
});
