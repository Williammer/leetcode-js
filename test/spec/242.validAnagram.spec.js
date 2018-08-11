import { validAnagram } from "./242.validAnagram";

describe("# Problem 242 - Given two strings s and t, write a function to determine if t is an anagram of s..", () => {
  describe("Solution 1: use hash to compare", () => {
    it("invalid input => false", () => {
      const foo = 42;

      const bar = true;

      const bar2 = false;

      const wow = undefined;

      const much = {};

      const fn = () => {};

      const test = null;

      const str = "sste2w";

      expect(validAnagram.hash(foo, str)).toBe(false);
      expect(validAnagram.hash(bar, str)).toBe(false);
      expect(validAnagram.hash(bar2, str)).toBe(false);
      expect(validAnagram.hash(wow, str)).toBe(false);
      expect(validAnagram.hash(much, str)).toBe(false);
      expect(validAnagram.hash(fn, str)).toBe(false);
      expect(validAnagram.hash(test, str)).toBe(false);

      expect(validAnagram.hash(str, foo)).toBe(false);
      expect(validAnagram.hash(str, bar)).toBe(false);
      expect(validAnagram.hash(str, bar2)).toBe(false);
      expect(validAnagram.hash(str, wow)).toBe(false);
      expect(validAnagram.hash(str, much)).toBe(false);
      expect(validAnagram.hash(str, fn)).toBe(false);
      expect(validAnagram.hash(str, test)).toBe(false);
    });

    it("'' & '' => true", () => {
      const str = "";
      const str2 = "";

      expect(validAnagram.hash(str, str2)).toBe(true);
    });

    it("'a' & 'b' => false", () => {
      const str = "a";
      const str2 = "b";

      expect(validAnagram.hash(str, str2)).toBe(false);
    });

    it("'absc' & 'scba' => true", () => {
      const str = "absc";
      const str2 = "scba";

      expect(validAnagram.hash(str, str2)).toBe(true);
    });

    it("'abscd' & 'scba' => false", () => {
      const str = "abscd";
      const str2 = "scba";

      expect(validAnagram.hash(str, str2)).toBe(false);
    });

    it("Has Other chars: 'abscd=><((**' & 's=>d<(**(cba' => true", () => {
      const str = "abscd=><((**";
      const str2 = "s=>d<(**(cba";

      expect(validAnagram.hash(str, str2)).toBe(true);
    });

    it("Has Unicode: '\u03A9abscd=><((**' & 's=>d<(*\u03A9*(cba' => true", () => {
      const str = "\u03A9abscd=><((**";
      const str2 = "s=>d<(*\u03A9*(cba";

      expect(validAnagram.hash(str, str2)).toBe(true);
    });
  });

  describe("Solution 2: use str->array to sort.", () => {
    it("invalid input => false", () => {
      const foo = 42;

      const bar = true;

      const bar2 = false;

      const wow = undefined;

      const much = {};

      const fn = () => {};

      const test = null;

      const str = "sste2w";

      expect(validAnagram.sort(foo, str)).toBe(false);
      expect(validAnagram.sort(bar, str)).toBe(false);
      expect(validAnagram.sort(bar2, str)).toBe(false);
      expect(validAnagram.sort(wow, str)).toBe(false);
      expect(validAnagram.sort(much, str)).toBe(false);
      expect(validAnagram.sort(fn, str)).toBe(false);
      expect(validAnagram.sort(test, str)).toBe(false);

      expect(validAnagram.sort(str, foo)).toBe(false);
      expect(validAnagram.sort(str, bar)).toBe(false);
      expect(validAnagram.sort(str, bar2)).toBe(false);
      expect(validAnagram.sort(str, wow)).toBe(false);
      expect(validAnagram.sort(str, much)).toBe(false);
      expect(validAnagram.sort(str, fn)).toBe(false);
      expect(validAnagram.sort(str, test)).toBe(false);
    });

    it("'' & '' => true", () => {
      const str = "";
      const str2 = "";

      expect(validAnagram.sort(str, str2)).toBe(true);
    });

    it("'a' & 'b' => false", () => {
      const str = "a";
      const str2 = "b";

      expect(validAnagram.sort(str, str2)).toBe(false);
    });

    it("'absc' & 'scba' => true", () => {
      const str = "absc";
      const str2 = "scba";

      expect(validAnagram.sort(str, str2)).toBe(true);
    });

    it("'abscd' & 'scba' => false", () => {
      const str = "abscd";
      const str2 = "scba";

      expect(validAnagram.sort(str, str2)).toBe(false);
    });

    it("Has Other chars: 'abscd=><((**' & 's=>d<(**(cba' => true", () => {
      const str = "abscd=><((**";
      const str2 = "s=>d<(**(cba";

      expect(validAnagram.sort(str, str2)).toBe(true);
    });

    it("Has Unicode: '\u03A9abscd=><((**' & 's=>d<(*\u03A9*(cba' => true", () => {
      const str = "\u03A9abscd=><((**";
      const str2 = "s=>d<(*\u03A9*(cba";

      expect(validAnagram.sort(str, str2)).toBe(true);
    });
  });

  describe("Solution 3: use alphabets array as mediator.", () => {
    it("invalid input => false", () => {
      const foo = 42;

      const bar = true;

      const bar2 = false;

      const wow = undefined;

      const much = {};

      const fn = () => {};

      const test = null;

      const str = "sste2w";

      expect(validAnagram.alphaTable(foo, str)).toBe(false);
      expect(validAnagram.alphaTable(bar, str)).toBe(false);
      expect(validAnagram.alphaTable(bar2, str)).toBe(false);
      expect(validAnagram.alphaTable(wow, str)).toBe(false);
      expect(validAnagram.alphaTable(much, str)).toBe(false);
      expect(validAnagram.alphaTable(fn, str)).toBe(false);
      expect(validAnagram.alphaTable(test, str)).toBe(false);

      expect(validAnagram.alphaTable(str, foo)).toBe(false);
      expect(validAnagram.alphaTable(str, bar)).toBe(false);
      expect(validAnagram.alphaTable(str, bar2)).toBe(false);
      expect(validAnagram.alphaTable(str, wow)).toBe(false);
      expect(validAnagram.alphaTable(str, much)).toBe(false);
      expect(validAnagram.alphaTable(str, fn)).toBe(false);
      expect(validAnagram.alphaTable(str, test)).toBe(false);
    });

    it("'' & '' => true", () => {
      const str = "";
      const str2 = "";

      expect(validAnagram.alphaTable(str, str2)).toBe(true);
    });

    it("'a' & 'b' => false", () => {
      const str = "a";
      const str2 = "b";

      expect(validAnagram.alphaTable(str, str2)).toBe(false);
    });

    it("'absc' & 'scba' => true", () => {
      const str = "absc";
      const str2 = "scba";

      expect(validAnagram.alphaTable(str, str2)).toBe(true);
    });

    it("'abscd' & 'scba' => false", () => {
      const str = "abscd";
      const str2 = "scba";

      expect(validAnagram.alphaTable(str, str2)).toBe(false);
    });

    it("Has Other chars: 'abscd=><((**' & 's=>d<(**(cba' => true", () => {
      const str = "abscd=><((**";
      const str2 = "s=>d<(**(cba";

      expect(validAnagram.alphaTable(str, str2)).toBe(true);
    });

    it("Has Unicode: '\u03A9abscd=><((**' & 's=>d<(*\u03A9*(cba' => true", () => {
      const str = "\u03A9abscd=><((**";
      const str2 = "s=>d<(*\u03A9*(cba";

      expect(validAnagram.alphaTable(str, str2)).toBe(true);
    });
  });
});
