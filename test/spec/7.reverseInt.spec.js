import { reverseInt } from "../../src/7.reverseInt/7.reverseInt";

describe("# Problem 7 - Reverse digits of an integer.", () => {
  describe("Solution 1: use while loop and '%', '/' to reverse digits of each postion.", () => {
    it("0 -> 0", () => {
      expect(reverseInt.fn(0)).toEqual(0);
    });

    it("-123 -> -321", () => {
      expect(reverseInt.fn(-123)).toEqual(-321);
    });

    it("-1234 -> -4321", () => {
      expect(reverseInt.fn(-1234)).toEqual(-4321);
    });

    it("123 -> 321", () => {
      expect(reverseInt.fn(123)).toEqual(321);
    });

    it("1234 -> 4321", () => {
      expect(reverseInt.fn(1234)).toEqual(4321);
    });

    it("100 -> 1", () => {
      expect(reverseInt.fn(100)).toEqual(1);
    });

    it("-100 -> -1", () => {
      expect(reverseInt.fn(-100)).toEqual(-1);
    });

    it("Max value for positive 32bit integer: 7463847412 -> Math.pow(2, 31)-1", () => {
      expect(reverseInt.fn(7463847412)).toEqual(Math.pow(2, 31) - 1);
    });

    it("Min value for negative 32bit integer: -7463847412 -> -Math.pow(2, 31)+1", () => {
      expect(reverseInt.fn(-7463847412)).toEqual(-Math.pow(2, 31) + 1);
    });

    it("overflow: 1000000003 -> 0", () => {
      expect(reverseInt.fn(1000000003)).toEqual(0);
    });

    it("underflow: -1000000003 -> 0", () => {
      expect(reverseInt.fn(-1000000003)).toEqual(0);
    });
  });
});
