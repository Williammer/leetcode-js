import { binaryTreeToArray } from "../../src/_.util/binaryTree";
import { sortedArrayToBST } from "../../src/108.sortedArrayToBST/solution";

describe("# Problem 108 - convert sorted array to a height balanced BST.", () => {
  describe("Solution 1: use dfs", () => {
    it("null --> []", () => {
      const array = null;

      const result = binaryTreeToArray(sortedArrayToBST.dfs(array));

      expect(result).toEqual([]);
    });

    it("[] --> []", () => {
      const array = [];

      const result = binaryTreeToArray(sortedArrayToBST.dfs(array));

      expect(result).toEqual([]);
    });

    it("[1] --> [1]", () => {
      const array = [1];

      const result = binaryTreeToArray(sortedArrayToBST.dfs(array));

      expect(result).toEqual([1]);
    });

    it("[1, 2] --> [1, null, 2]", () => {
      const array = [1, 2];

      const result = binaryTreeToArray(sortedArrayToBST.dfs(array));

      expect(result).toEqual([1, null, 2]);
    });

    it("[1, 2, 3] --> [2, 1, 3]", () => {
      const array = [1, 2, 3];

      const result = binaryTreeToArray(sortedArrayToBST.dfs(array));

      expect(result).toEqual([2, 1, 3]);
    });

    it("[1, 2, 3, 4] --> [1, 2, 3, null, null, null, 4]", () => {
      const array = [1, 2, 3, 4];

      const result = binaryTreeToArray(sortedArrayToBST.dfs(array));

      expect(result).toEqual([2, 1, 3, null, null, null, 4]);
    });

    it("[-1, 0, 1, 2] --> [0,-1,1,null,null,null,2]", () => {
      const array = [-1, 0, 1, 2];

      const result = binaryTreeToArray(sortedArrayToBST.dfs(array));

      expect(result).toEqual([0, -1, 1, null, null, null, 2]);
    });

    it("[1, 2, 3, 4, 5] --> [3, 1, 4, null, 2, null, 5]", () => {
      const array = [1, 2, 3, 4, 5];

      const result = binaryTreeToArray(sortedArrayToBST.dfs(array));

      expect(result).toEqual([3, 1, 4, null, 2, null, 5]);
    });

    it("[1, 2, 3, 4, 5, 6] --> [3, 1, 5, null, 2, 4, 6]", () => {
      const array = [1, 2, 3, 4, 5, 6];

      const result = binaryTreeToArray(sortedArrayToBST.dfs(array));

      expect(result).toEqual([3, 1, 5, null, 2, 4, 6]);
    });

    it("[1, 2, 3, 4, 5, 6, 7] --> [4, 2, 6, 1, 3, 5, 7]", () => {
      const array = [1, 2, 3, 4, 5, 6, 7];

      const result = binaryTreeToArray(sortedArrayToBST.dfs(array));

      expect(result).toEqual([4, 2, 6, 1, 3, 5, 7]);
    });
  });
});
