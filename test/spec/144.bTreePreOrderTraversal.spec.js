import { arrayToBinaryTree } from "../../src/_.util/binaryTree";
import { bTreePreOrderTraversal } from "../../src/144.bTreePreOrderTraversal/solution";

describe("# Problem 144 - return the Binary Tree preorder traversal of its nodes' values.", () => {
  describe("Solution 1: use dfs", () => {
    it("[] --> []", () => {
      const array = [];
      const tree = arrayToBinaryTree(array);

      const result = bTreePreOrderTraversal.dfs(tree);

      expect(result).toEqual([]);
    });

    it("[1] --> [1]", () => {
      const array = [1];
      const tree = arrayToBinaryTree(array);

      const result = bTreePreOrderTraversal.dfs(tree);

      expect(result).toEqual([1]);
    });

    it("[1, null, null, 1, 2, 3, 4] --> [1]", () => {
      const array = [1, null, null, 1, 2, 3, 4];
      const tree = arrayToBinaryTree(array);

      const result = bTreePreOrderTraversal.dfs(tree);

      expect(result).toEqual([1]);
    });

    it("[1, null, 2, 3] --> [1, 2, 3]", () => {
      const array = [1, null, 2, 3];
      const tree = arrayToBinaryTree(array);

      const result = bTreePreOrderTraversal.dfs(tree);

      expect(result).toEqual([1, 2, 3]);
    });

    it("[1, 2, 3, null, 4, 5] --> [1, 2, 4, 3, 5]", () => {
      const array = [1, 2, 3, null, 4, 5];
      const tree = arrayToBinaryTree(array);

      const result = bTreePreOrderTraversal.dfs(tree);

      expect(result).toEqual([1, 2, 4, 3, 5]);
    });

    it("[1, 2, 3, null, 4, 5, 6, 7] --> [1, 2, 4, 7, 3, 5, 6]", () => {
      const array = [1, 2, 3, null, 4, 5, 6, 7];
      const tree = arrayToBinaryTree(array);

      const result = bTreePreOrderTraversal.dfs(tree);

      expect(result).toEqual([1, 2, 4, 7, 3, 5, 6]);
    });

    it("[1, 2, 3, null, 4, 5, null, 6, 7] --> [1, 2, 4, 6, 7, 3, 5]", () => {
      const array = [1, 2, 3, null, 4, 5, null, 6, 7];
      const tree = arrayToBinaryTree(array);

      const result = bTreePreOrderTraversal.dfs(tree);

      expect(result).toEqual([1, 2, 4, 6, 7, 3, 5]);
    });
  });

  describe("Solution 2: use iterative", () => {
    it("[] --> []", () => {
      const array = [];
      const tree = arrayToBinaryTree(array);

      const result = bTreePreOrderTraversal.iterative(tree);

      expect(result).toEqual([]);
    });

    it("[1] --> [1]", () => {
      const array = [1];
      const tree = arrayToBinaryTree(array);

      const result = bTreePreOrderTraversal.iterative(tree);

      expect(result).toEqual([1]);
    });

    it("[1, null, null, 1, 2, 3, 4] --> [1]", () => {
      const array = [1, null, null, 1, 2, 3, 4];
      const tree = arrayToBinaryTree(array);

      const result = bTreePreOrderTraversal.iterative(tree);

      expect(result).toEqual([1]);
    });

    it("[1, null, 2, 3] --> [1, 2, 3]", () => {
      const array = [1, null, 2, 3];
      const tree = arrayToBinaryTree(array);

      const result = bTreePreOrderTraversal.iterative(tree);

      expect(result).toEqual([1, 2, 3]);
    });

    it("[1, 2, 3, null, 4, 5] --> [1, 2, 4, 3, 5]", () => {
      const array = [1, 2, 3, null, 4, 5];
      const tree = arrayToBinaryTree(array);

      const result = bTreePreOrderTraversal.iterative(tree);

      expect(result).toEqual([1, 2, 4, 3, 5]);
    });

    it("[1, 2, 3, null, 4, 5, 6, 7] --> [1, 2, 4, 7, 3, 5, 6]", () => {
      const array = [1, 2, 3, null, 4, 5, 6, 7];
      const tree = arrayToBinaryTree(array);

      const result = bTreePreOrderTraversal.iterative(tree);

      expect(result).toEqual([1, 2, 4, 7, 3, 5, 6]);
    });

    it("[1, 2, 3, null, 4, 5, null, 6, 7] --> [1, 2, 4, 6, 7, 3, 5]", () => {
      const array = [1, 2, 3, null, 4, 5, null, 6, 7];
      const tree = arrayToBinaryTree(array);

      const result = bTreePreOrderTraversal.iterative(tree);

      expect(result).toEqual([1, 2, 4, 6, 7, 3, 5]);
    });
  });
});
