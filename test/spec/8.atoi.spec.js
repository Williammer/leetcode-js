import { atoi } from "../../src/8.atoi/8.atoi";

describe("# Problem 8 - Implement atoi to convert a string to an integer.", () => {
  describe("Solution 1: traverse string from 1st char to find and convert", () => {
    it(": '' -> 0", () => {
      expect(atoi.traverse("")).toEqual(0);
    });

    it(": '12' -> 12", () => {
      expect(atoi.traverse("12")).toEqual(12);
    });

    it(": '-123' -> -123", () => {
      expect(atoi.traverse("-123")).toEqual(-123);
    });

    it(": '123sb' -> 123", () => {
      expect(atoi.traverse("123sb")).toEqual(123);
    });

    it(": '  124sb' -> 124", () => {
      expect(atoi.traverse("  124sb")).toEqual(124);
    });

    it(": ' sb   -125' -> -125", () => {
      expect(atoi.traverse(" sb   -125")).toEqual(-125);
    });

    it(": 'sb   2147483649sc346' -> 2147483647", () => {
      expect(atoi.traverse("sb   2147483649sc346")).toEqual(2147483647);
    });

    it(": 'sb   -2147983648sc346' -> -2147483648", () => {
      expect(atoi.traverse("sb   -2147983648sc346")).toEqual(-2147483648);
    });
  });
});
