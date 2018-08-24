import * as merge2SortedArrays from "./88.merge2SortedArrays";

describe("# Problem 88 - Merge two sorted array", () => {
  const testCases = [
    {
      inputs: [[], []],
      output: [],
    },
    {
      inputs: [[0, 2, 3, 4], []],
      output: [0, 2, 3, 4],
    },
    {
      inputs: [[0, 2, 3, 4], [9]],
      output: [0, 2, 3, 4, 9],
    },
    {
      inputs: [[0], [2]],
      output: [0, 2],
    },
    {
      inputs: [[0, 2, 3], [2, 4]],
      output: [0, 2, 2, 3, 4],
    },
    {
      inputs: [[0, 0, 1, 3, 5, 7, 9], [2, 2, 4, 5, 6, 8]],
      output: [0, 0, 1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9],
    },
  ];

  Object.values(merge2SortedArrays).forEach((algorithm) => {
    describe(`Solution: using ${algorithm.name}`, () => {
      testCases.forEach(({ inputs, output }) => {
        it(`${JSON.stringify(inputs)} -> ${JSON.stringify(output)}`, () => {
          expect(algorithm(...inputs)).toEqual(output);
        });
      });
    });
  });
});
