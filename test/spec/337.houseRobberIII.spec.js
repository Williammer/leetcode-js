import { arrayToBinaryTree } from "../../src/_.general/binaryTree";
import { houseRobberIII } from "../../src/337.houseRobberIII/337.houseRobberIII";

describe("# Problem 337 - Max sum of unlinked nodes values in BT.", () => {
  describe("Solution 1: use DP memoization", () => {
    it("[] --> 0", () => {
      const array = [];
      const tree = arrayToBinaryTree(array);

      const result = houseRobberIII.memo(tree);

      expect(result).toEqual(0);
    });

    it("[1] --> 1", () => {
      const array = [1];
      const tree = arrayToBinaryTree(array);

      const result = houseRobberIII.memo(tree);

      expect(result).toEqual(1);
    });

    it("[1, null, null, 1, 2, 3, 4] --> 1", () => {
      const array = [1, null, null, 1, 2, 3, 4];
      const tree = arrayToBinaryTree(array);

      const result = houseRobberIII.memo(tree);

      expect(result).toEqual(1);
    });

    it("[3, null, 5, 4] --> 7", () => {
      const array = [3, null, 5, 4];
      const tree = arrayToBinaryTree(array);

      const result = houseRobberIII.memo(tree);

      expect(result).toEqual(7);
    });

    it("[3, null, 8, 4] --> 8", () => {
      const array = [3, null, 8, 4];
      const tree = arrayToBinaryTree(array);

      const result = houseRobberIII.memo(tree);

      expect(result).toEqual(8);
    });

    it("[3, null, 5, 4, null, 4] --> 9", () => {
      const array = [3, null, 5, 4, null, 4];
      const tree = arrayToBinaryTree(array);

      const result = houseRobberIII.memo(tree);

      expect(result).toEqual(9);
    });

    it("[4, 1, null, 2, null, 3] --> 7", () => {
      const array = [4, 1, null, 2, null, 3];
      const tree = arrayToBinaryTree(array);

      const result = houseRobberIII.memo(tree);

      expect(result).toEqual(7);
    });

    it("[6, null, 8, 7, 9] --> 22", () => {
      const array = [6, null, 8, 7, 9];
      const tree = arrayToBinaryTree(array);

      const result = houseRobberIII.memo(tree);

      expect(result).toEqual(22);
    });

    it("[6, null, 8, null, 7, 9] --> 17", () => {
      const array = [6, null, 8, null, 7, 9];
      const tree = arrayToBinaryTree(array);

      const result = houseRobberIII.memo(tree);

      expect(result).toEqual(17);
    });

    it("[6, null, 8, 7, 1, 7] --> 15", () => {
      const array = [6, null, 8, 7, 1, 7];
      const tree = arrayToBinaryTree(array);

      const result = houseRobberIII.memo(tree);

      expect(result).toEqual(15);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3] --> 27", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = houseRobberIII.memo(tree);

      expect(result).toEqual(27);
    });

    it("[6, null, 8, null, 7, 1, 9] --> 18", () => {
      const array = [6, null, 8, null, 7, 1, 9];
      const tree = arrayToBinaryTree(array);

      const result = houseRobberIII.memo(tree);

      expect(result).toEqual(18);
    });

    it("[6, null, 5, null, 7, 1, 9] --> 16", () => {
      const array = [6, null, 5, null, 7, 1, 9];
      const tree = arrayToBinaryTree(array);

      const result = houseRobberIII.memo(tree);

      expect(result).toEqual(16);
    });
  });

  describe("Solution 2: use recursion with root-robbed flag", () => {
    it("[] --> 0", () => {
      const array = [];
      const tree = arrayToBinaryTree(array);

      const result = houseRobberIII.recursion(tree);

      expect(result).toEqual(0);
    });

    it("[1] --> 1", () => {
      const array = [1];
      const tree = arrayToBinaryTree(array);

      const result = houseRobberIII.recursion(tree);

      expect(result).toEqual(1);
    });

    it("[1, null, null, 1, 2, 3, 4] --> 1", () => {
      const array = [1, null, null, 1, 2, 3, 4];
      const tree = arrayToBinaryTree(array);

      const result = houseRobberIII.recursion(tree);

      expect(result).toEqual(1);
    });

    it("[3, null, 5, 4] --> 7", () => {
      const array = [3, null, 5, 4];
      const tree = arrayToBinaryTree(array);

      const result = houseRobberIII.recursion(tree);

      expect(result).toEqual(7);
    });

    it("[3, null, 8, 4] --> 8", () => {
      const array = [3, null, 8, 4];
      const tree = arrayToBinaryTree(array);

      const result = houseRobberIII.recursion(tree);

      expect(result).toEqual(8);
    });

    it("[3, null, 5, 4, null, 4] --> 9", () => {
      const array = [3, null, 5, 4, null, 4];
      const tree = arrayToBinaryTree(array);

      const result = houseRobberIII.recursion(tree);

      expect(result).toEqual(9);
    });

    it("[4, 1, null, 2, null, 3] --> 7", () => {
      const array = [4, 1, null, 2, null, 3];
      const tree = arrayToBinaryTree(array);

      const result = houseRobberIII.recursion(tree);

      expect(result).toEqual(7);
    });

    it("[6, null, 8, 7, 9] --> 22", () => {
      const array = [6, null, 8, 7, 9];
      const tree = arrayToBinaryTree(array);

      const result = houseRobberIII.recursion(tree);

      expect(result).toEqual(22);
    });

    it("[6, null, 8, null, 7, 9] --> 17", () => {
      const array = [6, null, 8, null, 7, 9];
      const tree = arrayToBinaryTree(array);

      const result = houseRobberIII.recursion(tree);

      expect(result).toEqual(17);
    });

    it("[6, null, 8, 7, 1, 7] --> 15", () => {
      const array = [6, null, 8, 7, 1, 7];
      const tree = arrayToBinaryTree(array);

      const result = houseRobberIII.recursion(tree);

      expect(result).toEqual(15);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3] --> 27", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = houseRobberIII.recursion(tree);

      expect(result).toEqual(27);
    });

    it("[6, null, 8, null, 7, 1, 9] --> 18", () => {
      const array = [6, null, 8, null, 7, 1, 9];
      const tree = arrayToBinaryTree(array);

      const result = houseRobberIII.recursion(tree);

      expect(result).toEqual(18);
    });

    it("[6, null, 5, null, 7, 1, 9] --> 16", () => {
      const array = [6, null, 5, null, 7, 1, 9];
      const tree = arrayToBinaryTree(array);

      const result = houseRobberIII.recursion(tree);

      expect(result).toEqual(16);
    });
  });
});
