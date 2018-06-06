import {
  normal,
} from "../../src/632.shortestRangeInKSortedList/solution";

describe("# Problem 632 - Shortest range for K sorted lists.", () => {
  const inputs = [{
    desc: 'regular, not same length',
    data: [[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]],
    result: [20, 24],
  }];

  inputs.forEach(({ desc, data: lists, result }) => {
    describe(`Solution 1:  (input : ${desc})`, () => {
      it("the range should contain at least one item from each list", () => {
        const [ start, end ] = normal(lists);
        const allListInRange = lists.every((list) => !!list.find((item) => (item >= start && item <= end)));
        expect(allListInRange).toBe(true);
      });

      it("should find the shortest range of items from K sorted lists", () => {
        expect(normal(lists)).toEqual(result);
      });
    });
  });

  describe('Extra cases', () => {
    describe("Solution 1", () => {
      it("prefer the range with smaller start number if two or more ranges are same", () => {
        const input = [[4, 10, 15, 24, 26], [0, 9, 11, 20], [5, 14, 18, 22, 30]];

        expect(normal(input)).toEqual([10, 14]);
      });
    });
  });

});