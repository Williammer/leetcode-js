import { twoIntSum, twoIntSubstract } from "../../src/371.twoIntSum/solution";

describe("# Problem 371 - Calculate the sum of two integers without operator + and -.", () => {
  describe("Solution 1: use ^, & and << in recursion way.", () => {
    it("all positive num; no carry: 41 + 7", () => {
      const result = twoIntSum.recursion(41, 7);

      expect(result).toEqual(48);
    });

    it("all positive num; carry once: 47 + 19", () => {
      const result = twoIntSum.recursion(47, 19);

      expect(result).toEqual(66);
    });

    it("all positive num; carry twice: 47 + 59", () => {
      const result = twoIntSum.recursion(47, 59);

      expect(result).toEqual(106);
    });

    it("positive with zero: 1 + 0", () => {
      const result = twoIntSum.recursion(1, 0);

      expect(result).toEqual(1);
    });

    it("negative with zero: -73 + 0", () => {
      const result = twoIntSum.recursion(-73, 0);

      expect(result).toEqual(-73);
    });

    it("all negative num; carry once: -27 + (-39)", () => {
      const result = twoIntSum.recursion(-27, -39);

      expect(result).toEqual(-66);
    });

    it("all negative num; carry twice: -87 + (-69)", () => {
      const result = twoIntSum.recursion(-87, -69);

      expect(result).toEqual(-156);
    });

    it("all negative num; no carry: -62 + (-34)", () => {
      const result = twoIntSum.recursion(-62, -34);

      expect(result).toEqual(-96);
    });

    it("all not a num: 's' + 'ee'", () => {
      const result = twoIntSum.recursion("s", "ee");

      expect(result).toEqual(0);
    });

    it("with not a num: 's' + 12", () => {
      const result = twoIntSum.recursion("s", 12);

      expect(result).toEqual(12);
    });
  });

  describe("Solution 2: use ^, & and << in iterating way.", () => {
    it("all positive num; no carry: 41 + 7", () => {
      const result = twoIntSum.iterate(41, 7);

      expect(result).toEqual(48);
    });

    it("all positive num; carry once: 47 + 19", () => {
      const result = twoIntSum.iterate(47, 19);

      expect(result).toEqual(66);
    });

    it("all positive num; carry twice: 47 + 59", () => {
      const result = twoIntSum.iterate(47, 59);

      expect(result).toEqual(106);
    });

    it("positive with zero: 1 + 0", () => {
      const result = twoIntSum.iterate(1, 0);

      expect(result).toEqual(1);
    });

    it("negative with zero: -73 + 0", () => {
      const result = twoIntSum.iterate(-73, 0);

      expect(result).toEqual(-73);
    });

    it("all negative num; carry once: -27 + (-39)", () => {
      const result = twoIntSum.iterate(-27, -39);

      expect(result).toEqual(-66);
    });

    it("all negative num; carry twice: -87 + (-69)", () => {
      const result = twoIntSum.iterate(-87, -69);

      expect(result).toEqual(-156);
    });

    it("all negative num; no carry: -62 + (-34)", () => {
      const result = twoIntSum.iterate(-62, -34);

      expect(result).toEqual(-96);
    });

    it("all not a num: 's' + 'ee'", () => {
      const result = twoIntSum.iterate("s", "ee");

      expect(result).toEqual(0);
    });

    it("with not a num: 's' + 12", () => {
      const result = twoIntSum.iterate("s", 12);

      expect(result).toEqual(12);
    });
  });
});


describe("# Problem 371 - extended - Calculate the substraction of two integers without operator + and -.", () => {
  describe("Solution 1: use ^, & and << in recursion way.", () => {
    it("all positive num; a > b: 47 - 19", () => {
      const result = twoIntSubstract.recursion(47, 19);

      expect(result).toEqual(28);
    });

    it("all positive num; a < b: 47 - 59", () => {
      const result = twoIntSubstract.recursion(47, 59);

      expect(result).toEqual(-12);
    });

    it("substract zero: 1 - 0", () => {
      const result = twoIntSubstract.recursion(1, 0);

      expect(result).toEqual(1);
    });

    it("substract by zero: 0 - 10", () => {
      const result = twoIntSubstract.recursion(0, 10);

      expect(result).toEqual(-10);
    });

    it("all negative num; a > b: -27 - (-39)", () => {
      const result = twoIntSubstract.recursion(-27, -39);

      expect(result).toEqual(12);
    });

    it("all negative num; a < b: -62 + (-34)", () => {
      const result = twoIntSubstract.recursion(-62, -34);

      expect(result).toEqual(-28);
    });

    it("all not a num: 's' - 'ee'", () => {
      const result = twoIntSubstract.recursion("s", "ee");

      expect(result).toEqual(0);
    });

    it("with not a num: 12 - 's'", () => {
      const result = twoIntSubstract.recursion(12, "s");

      expect(result).toEqual(12);
    });

    it("with not a num: 's' - 12", () => {
      const result = twoIntSubstract.recursion("s", 12);

      expect(result).toEqual(12);
    });
  });

  describe("Solution 2: use ^, & and << in iterating way.", () => {
    it("all positive num; a > b: 47 - 19", () => {
      const result = twoIntSubstract.iterate(47, 19);

      expect(result).toEqual(28);
    });

    it("all positive num; a < b: 47 - 59", () => {
      const result = twoIntSubstract.iterate(47, 59);

      expect(result).toEqual(-12);
    });

    it("substract zero: 1 - 0", () => {
      const result = twoIntSubstract.iterate(1, 0);

      expect(result).toEqual(1);
    });

    it("substract by zero: 0 - 10", () => {
      const result = twoIntSubstract.iterate(0, 10);

      expect(result).toEqual(-10);
    });

    it("all negative num; a > b: -27 - (-39)", () => {
      const result = twoIntSubstract.iterate(-27, -39);

      expect(result).toEqual(12);
    });

    it("all negative num; a < b: -62 + (-34)", () => {
      const result = twoIntSubstract.iterate(-62, -34);

      expect(result).toEqual(-28);
    });

    it("all not a num: 's' - 'ee'", () => {
      const result = twoIntSubstract.iterate("s", "ee");

      expect(result).toEqual(0);
    });

    it("with not a num: 12 - 's'", () => {
      const result = twoIntSubstract.iterate(12, "s");

      expect(result).toEqual(12);
    });

    it("with not a num: 's' - 12", () => {
      const result = twoIntSubstract.iterate("s", 12);

      expect(result).toEqual(12);
    });
  });
});
