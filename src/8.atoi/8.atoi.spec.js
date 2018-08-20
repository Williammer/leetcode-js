import * as atoi from "./8.atoi";

describe("# Problem 8 - Implement atoi to convert a string to an integer.", () => {
  const testCases = [
    ["", 0],
    ["-0", 0],
    ["0b", 0],
    ["-0b", 0],
    ["-012", -12],
    ["12", 12],
    ["-123", -123],
    ["123sb", 123],
    ["  124sb", 124],
    [" sb   -125", -125],
    ["sb   2147483647sc346", 2147483647],
    ["sb   -2147983648sc346", -2147983648],
  ];

  Object.keys(atoi).forEach((method) => {
    describe(`Solution: ${method}`, () => {
      testCases.forEach(([input, output]) => {
        it(`"${input}" -> ${output} using ${method}`, () => {
          expect(atoi[method](input)).toEqual(output);
        });
      });
    });
  });
});
