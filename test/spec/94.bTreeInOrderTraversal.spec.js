import { arrayToBinaryTree } from "../../src/_.general/binaryTree";
import { bTreeInOrderTraversal } from "../../src/94.bTreeInOrderTraversal/solution";

describe("# Problem 94 - return the Binary Tree In-order traversal of its nodes' values.", () => {
  describe("Solution 1: use dfs", () => {
    it("[] --> []", () => {
      const array = [];
      const tree = arrayToBinaryTree(array);

      const result = bTreeInOrderTraversal.dfs(tree);

      expect(result).toEqual([]);
    });

    it("[1] --> [1]", () => {
      const array = [1];
      const tree = arrayToBinaryTree(array);

      const result = bTreeInOrderTraversal.dfs(tree);

      expect(result).toEqual([1]);
    });

    it("[1, null, null, 1, 2, 3, 4] --> [1]", () => {
      const array = [1, null, null, 1, 2, 3, 4];
      const tree = arrayToBinaryTree(array);

      const result = bTreeInOrderTraversal.dfs(tree);

      expect(result).toEqual([1]);
    });

    it("[1, null, 2, 3] --> [1, 3, 2]", () => {
      const array = [1, null, 2, 3];
      const tree = arrayToBinaryTree(array);

      const result = bTreeInOrderTraversal.dfs(tree);

      expect(result).toEqual([1, 3, 2]);
    });

    it("[1, 2, 3, null, 4, 5] --> [2, 4, 1, 5, 3]", () => {
      const array = [1, 2, 3, null, 4, 5];
      const tree = arrayToBinaryTree(array);

      const result = bTreeInOrderTraversal.dfs(tree);

      expect(result).toEqual([2, 4, 1, 5, 3]);
    });

    it("[1, 2, 3, null, 4, 5, 6, 7] --> [2, 7, 4, 1, 5, 3, 6]", () => {
      const array = [1, 2, 3, null, 4, 5, 6, 7];
      const tree = arrayToBinaryTree(array);

      const result = bTreeInOrderTraversal.dfs(tree);

      expect(result).toEqual([2, 7, 4, 1, 5, 3, 6]);
    });

    it("[1, 2, 3, null, 4, 5, null, 6, 7] --> [2, 6, 4, 7, 1, 5, 3]", () => {
      const array = [1, 2, 3, null, 4, 5, null, 6, 7];
      const tree = arrayToBinaryTree(array);

      const result = bTreeInOrderTraversal.dfs(tree);

      expect(result).toEqual([2, 6, 4, 7, 1, 5, 3]);
    });
  });

  describe("Solution 2: use iteration", () => {
    it("[] --> []", () => {
      const array = [];
      const tree = arrayToBinaryTree(array);

      const result = bTreeInOrderTraversal.iteration(tree);

      expect(result).toEqual([]);
    });

    it("[1] --> [1]", () => {
      const array = [1];
      const tree = arrayToBinaryTree(array);

      const result = bTreeInOrderTraversal.iteration(tree);

      expect(result).toEqual([1]);
    });

    it("[1, null, null, 1, 2, 3, 4] --> [1]", () => {
      const array = [1, null, null, 1, 2, 3, 4];
      const tree = arrayToBinaryTree(array);

      const result = bTreeInOrderTraversal.iteration(tree);

      expect(result).toEqual([1]);
    });

    it("[1, null, 2, 3] --> [1, 3, 2]", () => {
      const array = [1, null, 2, 3];
      const tree = arrayToBinaryTree(array);

      const result = bTreeInOrderTraversal.iteration(tree);

      expect(result).toEqual([1, 3, 2]);
    });

    it("[1, 2, 3, null, 4, 5] --> [2, 4, 1, 5, 3]", () => {
      const array = [1, 2, 3, null, 4, 5];
      const tree = arrayToBinaryTree(array);

      const result = bTreeInOrderTraversal.iteration(tree);

      expect(result).toEqual([2, 4, 1, 5, 3]);
    });

    it("[1, 2, 3, null, 4, 5, 6, 7] --> [2, 7, 4, 1, 5, 3, 6]", () => {
      const array = [1, 2, 3, null, 4, 5, 6, 7];
      const tree = arrayToBinaryTree(array);

      const result = bTreeInOrderTraversal.iteration(tree);

      expect(result).toEqual([2, 7, 4, 1, 5, 3, 6]);
    });

    it("[1, 2, 3, null, 4, 5, null, 6, 7] --> [2, 6, 4, 7, 1, 5, 3]", () => {
      const array = [1, 2, 3, null, 4, 5, null, 6, 7];
      const tree = arrayToBinaryTree(array);

      const result = bTreeInOrderTraversal.iteration(tree);

      expect(result).toEqual([2, 6, 4, 7, 1, 5, 3]);
    });
  });
});
