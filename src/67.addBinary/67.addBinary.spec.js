import * as addBinary from "./67.addBinary";

describe("# Problem 67 - Calc the sum of two binary strings.", () => {
  describe("Solution 1: Loop over each num and handle the carry.", () => {
    it("with zero: 0, 11 -> 1000", () => {
      const result = addBinary.iteration("0", "11");

      expect(result).toEqual("11");
    });

    it("all odd num: 101, 11 -> 1000", () => {
      const result = addBinary.iteration("101", "11");

      expect(result).toEqual("1000");
    });

    it("all even num: 11110, 10100 -> 110010", () => {
      const result = addBinary.iteration("11110", "10100");

      expect(result).toEqual("110010");
    });

    it("one odd one even num: 1100, 111 -> 10011", () => {
      const result = addBinary.iteration("1100", "111");

      expect(result).toEqual("10011");
    });
  });
});
