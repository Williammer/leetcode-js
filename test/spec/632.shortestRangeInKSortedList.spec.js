import { normal } from "../../src/632.shortestRangeInKSortedList/solution";

describe("# Problem 632 - Shortest range for K sorted lists.", () => {
  const dataSets = [
    {
      data: [[1]],
      result: [1, 1],
    },
    {
      data: [[11, 11], [10, 10]],
      result: [10, 11],
    },
    {
      data: [[0, 9, 11, 20], [3, 10, 12, 13]],
      result: [9, 10],
    },
    {
      data: [[11], [11], [11], [11], [11], [11]],
      result: [11, 11],
    },
    {
      data: [[1, 5, 7, 14], [0, 9, 11, 20], [3, 10, 12, 13]],
      result: [0, 3],
    },
    {
      data: [[4, 8, 12, 14], [0, 9, 11, 20], [5, 10, 12, 30]],
      result: [11, 12],
    },
    {
      data: [[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]],
      result: [20, 24],
    },
    {
      data: [[4, 10, 15, 24, 26], [0, 9, 11, 20], [5, 14, 18, 22, 30]],
      result: [10, 14],
    },
  ];

  describe("Solution 1: move the pointer of smallest num", () => {
    dataSets.forEach(({ data: lists, result }) => {
      describe(`input: ${JSON.stringify(lists)} => output: ${JSON.stringify(result)}`, () => {
        it("the range should contain at least one item from each list", () => {
          const [start, end] = normal(lists);
          const allListInRange = lists.every(
            (list) => list.find((item) => item >= start && item <= end) !== undefined
          );
          expect(allListInRange).toBe(true);
        });

        it("should find the shortest range of items from K sorted lists", () => {
          expect(normal(lists)).toEqual(result);
        });
      });
    });
  });
});
