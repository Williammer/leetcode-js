import { arrayToBinaryTree } from "../../src/_.util/binaryTree";
import { sumLeftLeaves } from "../../src/404.sumLeftLeaves/solution";

describe("# Problem 404 - Find the sum of all left leaves in a given binary tree..", () => {
  describe("Solution 1: Use dfs traversal", () => {
    it("[] ----> sumOfLeftLeaves: 0 ", () => {
      const array = [];
      const tree = arrayToBinaryTree(array);

      const sumOfLeftLeaves = sumLeftLeaves.dfs(tree);
      expect(sumOfLeftLeaves).toEqual(0);
    });

    it("[1] ----> sumOfLeftLeaves: 0 ", () => {
      const array = [0];
      const tree = arrayToBinaryTree(array);

      const sumOfLeftLeaves = sumLeftLeaves.dfs(tree);
      expect(sumOfLeftLeaves).toEqual(0);
    });

    it("[1, null, null, 1, 2, 3, 4] ----> sumOfLeftLeaves: 0 ", () => {
      const array = [1, null, null, 1, 2, 3, 4];
      const tree = arrayToBinaryTree(array);

      const sumOfLeftLeaves = sumLeftLeaves.dfs(tree);
      expect(sumOfLeftLeaves).toEqual(0);
    });

    it("[1, 2, 3, null, 4, 5] ----> sumOfLeftLeaves: 5 ", () => {
      const array = [1, 2, 3, null, 4, 5];
      const tree = arrayToBinaryTree(array);

      const sumOfLeftLeaves = sumLeftLeaves.dfs(tree);
      expect(sumOfLeftLeaves).toEqual(5);
    });

    it("[1, 2, 3, null, 4, 5, 6, 7] ----> sumOfLeftLeaves: 12 ", () => {
      const array = [1, 2, 3, null, 4, 5, 6, 7];
      const tree = arrayToBinaryTree(array);

      const sumOfLeftLeaves = sumLeftLeaves.dfs(tree);
      expect(sumOfLeftLeaves).toEqual(12);
    });

    it("[1, 2, 3, null, 4, 5, null, 6, 7] ----> sumOfLeftLeaves: 11 ", () => {
      const array = [1, 2, 3, null, 4, 5, null, 6, 7];
      const tree = arrayToBinaryTree(array);

      const sumOfLeftLeaves = sumLeftLeaves.dfs(tree);
      expect(sumOfLeftLeaves).toEqual(11);
    });

    it("[3,9,20,null,null,15,7] ----> sumOfLeftLeaves: 24 ", () => {
      const array = [3, 9, 20, null, null, 15, 7];
      const tree = arrayToBinaryTree(array);

      const sumOfLeftLeaves = sumLeftLeaves.dfs(tree);
      expect(sumOfLeftLeaves).toEqual(24);
    });
  });

  describe("Solution 2: Use bfs/level-order traversal", () => {
    it("[] ----> sumOfLeftLeaves: 0 ", () => {
      const array = [];
      const tree = arrayToBinaryTree(array);

      const sumOfLeftLeaves = sumLeftLeaves.bfs(tree);
      expect(sumOfLeftLeaves).toEqual(0);
    });

    it("[1] ----> sumOfLeftLeaves: 0 ", () => {
      const array = [0];
      const tree = arrayToBinaryTree(array);

      const sumOfLeftLeaves = sumLeftLeaves.bfs(tree);
      expect(sumOfLeftLeaves).toEqual(0);
    });

    it("[1, null, null, 1, 2, 3, 4] ----> sumOfLeftLeaves: 0 ", () => {
      const array = [1, null, null, 1, 2, 3, 4];
      const tree = arrayToBinaryTree(array);

      const sumOfLeftLeaves = sumLeftLeaves.bfs(tree);
      expect(sumOfLeftLeaves).toEqual(0);
    });

    it("[1, 2, 3, null, 4, 5] ----> sumOfLeftLeaves: 5 ", () => {
      const array = [1, 2, 3, null, 4, 5];
      const tree = arrayToBinaryTree(array);

      const sumOfLeftLeaves = sumLeftLeaves.bfs(tree);
      expect(sumOfLeftLeaves).toEqual(5);
    });

    it("[1, 2, 3, null, 4, 5, 6, 7] ----> sumOfLeftLeaves: 12 ", () => {
      const array = [1, 2, 3, null, 4, 5, 6, 7];
      const tree = arrayToBinaryTree(array);

      const sumOfLeftLeaves = sumLeftLeaves.bfs(tree);
      expect(sumOfLeftLeaves).toEqual(12);
    });

    it("[1, 2, 3, null, 4, 5, null, 6, 7] ----> sumOfLeftLeaves: 11 ", () => {
      const array = [1, 2, 3, null, 4, 5, null, 6, 7];
      const tree = arrayToBinaryTree(array);

      const sumOfLeftLeaves = sumLeftLeaves.bfs(tree);
      expect(sumOfLeftLeaves).toEqual(11);
    });

    it("[3,9,20,null,null,15,7] ----> sumOfLeftLeaves: 24 ", () => {
      const array = [3, 9, 20, null, null, 15, 7];
      const tree = arrayToBinaryTree(array);

      const sumOfLeftLeaves = sumLeftLeaves.bfs(tree);
      expect(sumOfLeftLeaves).toEqual(24);
    });
  });
});
