import * as sorting from "../../src/_.general/sorting";

describe("Array Sorting algorithms", () => {
  const arrStr = JSON.stringify;
  const testCases = [
    {
      original: [],
      sorted: [],
    },
    {
      original: [2],
      sorted: [2],
    },
    {
      original: [2, 1],
      sorted: [1, 2],
    },
    {
      original: [1, 2, 3, 4],
      sorted: [1, 2, 3, 4],
    },
    {
      original: [2, 1, 3, 5, 4],
      sorted: [1, 2, 3, 4, 5],
    },
    {
      original: [3, 2, 5, 4, 1, 11, 9, 7, 2],
      sorted: [1, 2, 2, 3, 4, 5, 7, 9, 11],
    },
  ];

  testCases.forEach(({ original, sorted }) => {
    Object.values(sorting).forEach((sortAlgorithm) => {
      const { name } = sortAlgorithm;
      it(`should sort ${arrStr(original)} to ${arrStr(sorted)} with "${name}" algorithm`, () => {
        // console.time(`----> [benchmark] sorted with ${sortAlgorithm.name}`);
        expect(sortAlgorithm(original)).toEqual(sorted);
        // console.timeEnd(`----> [benchmark] sorted with ${sortAlgorithm.name}`);
      });
    });
  });
});
