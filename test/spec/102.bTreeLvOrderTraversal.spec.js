import { arrayToBinaryTree } from "../../src/_.util/binaryTree";
import { bTreeLvOrderTraversal } from "../../src/102.bTreeLvOrderTraversal/solution";

describe("# Problem 102 - Given a binary tree, return the level order traversal of its nodes' values..", () => {
  describe("Solution 1: Use bfs to traverse.", () => {
    it("[] ----> [] ", () => {
      const array = [];
      const tree = arrayToBinaryTree(array);

      const result = bTreeLvOrderTraversal.bfs(tree);
      expect(result).toEqual([]);
    });

    it("[1, 2, 3, null, 4, 5] ----> [[1], [2,3], [4,5]] ", () => {
      const array = [1, 2, 3, null, 4, 5];
      const tree = arrayToBinaryTree(array);

      const result = bTreeLvOrderTraversal.bfs(tree);
      expect(result).toEqual([[1], [2, 3], [4, 5]]);
    });

    it("[3,9,20,null,null,15,7] ----> [[3],[9, 20],[15, 7]] ", () => {
      const array = [3, 9, 20, null, null, 15, 7];
      const tree = arrayToBinaryTree(array);

      const result = bTreeLvOrderTraversal.bfs(tree);
      expect(result).toEqual([[3], [9, 20], [15, 7]]);
    });

    it("[1, 2, 3, null, null, 4, 5, 6, 7] ----> [[1], [2,3], [4, 5], [6,7]] ", () => {
      const array = [1, 2, 3, null, null, 4, 5, 6, 7];
      const tree = arrayToBinaryTree(array);

      const result = bTreeLvOrderTraversal.bfs(tree);
      expect(result).toEqual([[1], [2, 3], [4, 5], [6, 7]]);
    });

    it("[1, 2, 3, null, null, 4, null, 5, 6, 7] ----> [[1], [2,3], [4], [5,6], [7]] ", () => {
      const array = [1, 2, 3, null, null, 4, null, 5, 6, 7];
      const tree = arrayToBinaryTree(array);

      const result = bTreeLvOrderTraversal.bfs(tree);
      expect(result).toEqual([[1], [2, 3], [4], [5, 6], [7]]);
    });
  });

  describe("Solution 2: Use dfs while keeping the depth state.", () => {
    it("[] ----> [] ", () => {
      const array = [];
      const tree = arrayToBinaryTree(array);

      const result = bTreeLvOrderTraversal.dfs(tree);
      expect(result).toEqual([]);
    });

    it("[1, 2, 3, null, 4, 5] ----> [[1], [2,3], [4,5]] ", () => {
      const array = [1, 2, 3, null, 4, 5];
      const tree = arrayToBinaryTree(array);

      const result = bTreeLvOrderTraversal.dfs(tree);
      expect(result).toEqual([[1], [2, 3], [4, 5]]);
    });

    it("[3,9,20,null,null,15,7] ----> [[3],[9, 20],[15, 7]] ", () => {
      const array = [3, 9, 20, null, null, 15, 7];
      const tree = arrayToBinaryTree(array);

      const result = bTreeLvOrderTraversal.dfs(tree);
      expect(result).toEqual([[3], [9, 20], [15, 7]]);
    });

    it("[1, 2, 3, null, null, 4, 5, 6, 7] ----> [[1], [2,3], [4, 5], [6,7]] ", () => {
      const array = [1, 2, 3, null, null, 4, 5, 6, 7];
      const tree = arrayToBinaryTree(array);

      const result = bTreeLvOrderTraversal.dfs(tree);
      expect(result).toEqual([[1], [2, 3], [4, 5], [6, 7]]);
    });

    it("[1, 2, 3, null, null, 4, null, 5, 6, 7] ----> [[1], [2,3], [4], [5,6], [7]] ", () => {
      const array = [1, 2, 3, null, null, 4, null, 5, 6, 7];
      const tree = arrayToBinaryTree(array);

      const result = bTreeLvOrderTraversal.dfs(tree);
      expect(result).toEqual([[1], [2, 3], [4], [5, 6], [7]]);
    });
  });
});
