import { arrayToBinaryTree } from "../../src/_.util/binaryTree";
import { bTreePostOrderTraversal } from "../../src/145.bTreePostOrderTraversal/solution";

describe("# Problem 145 - return the Binary Tree post-order traversal of its nodes' values.", () => {
  describe("Solution 1: use dfs", () => {
    it("[] --> []", () => {
      const array = [];
      const tree = arrayToBinaryTree(array);

      const result = bTreePostOrderTraversal.dfs(tree);

      expect(result).toEqual([]);
    });

    it("[1] --> [1]", () => {
      const array = [1];
      const tree = arrayToBinaryTree(array);

      const result = bTreePostOrderTraversal.dfs(tree);

      expect(result).toEqual([1]);
    });

    it("[1, null, null, 1, 2, 3, 4] --> [1]", () => {
      const array = [1, null, null, 1, 2, 3, 4];
      const tree = arrayToBinaryTree(array);

      const result = bTreePostOrderTraversal.dfs(tree);

      expect(result).toEqual([1]);
    });

    it("[1, null, 2, 3] --> [3, 2, 1]", () => {
      const array = [1, null, 2, 3];
      const tree = arrayToBinaryTree(array);

      const result = bTreePostOrderTraversal.dfs(tree);

      expect(result).toEqual([3, 2, 1]);
    });

    it("[1, 2, 3, null, 4, 5] --> [4, 2, 5, 3, 1]", () => {
      const array = [1, 2, 3, null, 4, 5];
      const tree = arrayToBinaryTree(array);

      const result = bTreePostOrderTraversal.dfs(tree);

      expect(result).toEqual([4, 2, 5, 3, 1]);
    });

    it("[1, 2, 3, null, 4, 5, 6, 7] --> [7, 4, 2, 5, 6, 3, 1]", () => {
      const array = [1, 2, 3, null, 4, 5, 6, 7];
      const tree = arrayToBinaryTree(array);

      const result = bTreePostOrderTraversal.dfs(tree);

      expect(result).toEqual([7, 4, 2, 5, 6, 3, 1]);
    });

    it("[1, 2, 3, null, 4, 5, null, 6, 7] --> [6, 7, 4, 2, 5, 3, 1]", () => {
      const array = [1, 2, 3, null, 4, 5, null, 6, 7];
      const tree = arrayToBinaryTree(array);

      const result = bTreePostOrderTraversal.dfs(tree);

      expect(result).toEqual([6, 7, 4, 2, 5, 3, 1]);
    });
  });

  describe("Solution 2: use iterative", () => {
    it("[] --> []", () => {
      const array = [];
      const tree = arrayToBinaryTree(array);

      const result = bTreePostOrderTraversal.iterative(tree);

      expect(result).toEqual([]);
    });

    it("[1] --> [1]", () => {
      const array = [1];
      const tree = arrayToBinaryTree(array);

      const result = bTreePostOrderTraversal.iterative(tree);

      expect(result).toEqual([1]);
    });

    it("[1, null, null, 1, 2, 3, 4] --> [1]", () => {
      const array = [1, null, null, 1, 2, 3, 4];
      const tree = arrayToBinaryTree(array);

      const result = bTreePostOrderTraversal.iterative(tree);

      expect(result).toEqual([1]);
    });

    it("[1, null, 2, 3] --> [3, 2, 1]", () => {
      const array = [1, null, 2, 3];
      const tree = arrayToBinaryTree(array);

      const result = bTreePostOrderTraversal.iterative(tree);

      expect(result).toEqual([3, 2, 1]);
    });

    it("[1, 2, 3, null, 4, 5] --> [4, 2, 5, 3, 1]", () => {
      const array = [1, 2, 3, null, 4, 5];
      const tree = arrayToBinaryTree(array);

      const result = bTreePostOrderTraversal.iterative(tree);

      expect(result).toEqual([4, 2, 5, 3, 1]);
    });

    it("[1, 2, 3, null, 4, 5, 6, 7] --> [7, 4, 2, 5, 6, 3, 1]", () => {
      const array = [1, 2, 3, null, 4, 5, 6, 7];
      const tree = arrayToBinaryTree(array);

      const result = bTreePostOrderTraversal.iterative(tree);

      expect(result).toEqual([7, 4, 2, 5, 6, 3, 1]);
    });

    it("[1, 2, 3, null, 4, 5, null, 6, 7] --> [6, 7, 4, 2, 5, 3, 1]", () => {
      const array = [1, 2, 3, null, 4, 5, null, 6, 7];
      const tree = arrayToBinaryTree(array);

      const result = bTreePostOrderTraversal.iterative(tree);

      expect(result).toEqual([6, 7, 4, 2, 5, 3, 1]);
    });
  });
});
