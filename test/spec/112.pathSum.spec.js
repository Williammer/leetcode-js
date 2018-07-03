import { arrayToBinaryTree } from "../../src/_.util/binaryTree";
import { pathSum } from "../../src/112.pathSum/solution";

describe("# Problem 112 - Has root2leaf path sum certain.", () => {
  describe("Solution 1: use dfs and reduce node values from root to leaf", () => {
    it("[], 3 --> false", () => {
      const array = [];
      const tree = arrayToBinaryTree(array);

      const result = pathSum.dfsReducer(tree, 3);

      expect(result).toEqual(false);
    });

    it("[1], 1 --> true", () => {
      const array = [1];
      const tree = arrayToBinaryTree(array);

      const result = pathSum.dfsReducer(tree, 1);

      expect(result).toEqual(true);
    });

    it("[1], 2 --> false", () => {
      const array = [1];
      const tree = arrayToBinaryTree(array);

      const result = pathSum.dfsReducer(tree, 2);

      expect(result).toEqual(false);
    });

    it("[1, null, null, 1, 2, 3, 4], 1 --> true", () => {
      const array = [1, null, null, 1, 2, 3, 4];
      const tree = arrayToBinaryTree(array);

      const result = pathSum.dfsReducer(tree, 1);

      expect(result).toEqual(true);
    });

    it("[1, null, null, 1, 2, 3, 4], 2 --> false", () => {
      const array = [1, null, null, 1, 2, 3, 4];
      const tree = arrayToBinaryTree(array);

      const result = pathSum.dfsReducer(tree, 2);

      expect(result).toEqual(false);
    });

    it("[3, null, 5, 4], 1 --> false", () => {
      const array = [3, null, 5, 4];
      const tree = arrayToBinaryTree(array);

      const result = pathSum.dfsReducer(tree, 1);

      expect(result).toEqual(false);
    });

    it("[3, null, 5, 4], 3 --> false", () => {
      const array = [3, null, 5, 4];
      const tree = arrayToBinaryTree(array);

      const result = pathSum.dfsReducer(tree, 3);

      expect(result).toEqual(false);
    });

    it("[6, null, 8, 7, 9], 23 --> true", () => {
      const array = [6, null, 8, 7, 9];
      const tree = arrayToBinaryTree(array);

      const result = pathSum.dfsReducer(tree, 23);

      expect(result).toEqual(true);
    });

    it("[6, null, 8, 7, 9], 21 --> true", () => {
      const array = [6, null, 8, 7, 9];
      const tree = arrayToBinaryTree(array);

      const result = pathSum.dfsReducer(tree, 21);

      expect(result).toEqual(true);
    });

    it("[6, null, 8, 7, 9], 33 --> false", () => {
      const array = [6, null, 8, 7, 9];
      const tree = arrayToBinaryTree(array);

      const result = pathSum.dfsReducer(tree, 33);

      expect(result).toEqual(false);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 15 --> true", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = pathSum.dfsReducer(tree, 15);

      expect(result).toEqual(true);
    });


    it("[6, 2, 9, null, 4, 7, 10, 3], 37 --> false", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = pathSum.dfsReducer(tree, 37);

      expect(result).toEqual(false);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 25 --> true", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = pathSum.dfsReducer(tree, 25);

      expect(result).toEqual(true);
    });
  });

  describe("Solution 2: use dfs and sum minus which is more concise", () => {
    it("[], 3 --> false", () => {
      const array = [];
      const tree = arrayToBinaryTree(array);

      const result = pathSum.dfs(tree, 3);

      expect(result).toEqual(false);
    });

    it("[1], 1 --> true", () => {
      const array = [1];
      const tree = arrayToBinaryTree(array);

      const result = pathSum.dfs(tree, 1);

      expect(result).toEqual(true);
    });

    it("[1], 2 --> false", () => {
      const array = [1];
      const tree = arrayToBinaryTree(array);

      const result = pathSum.dfs(tree, 2);

      expect(result).toEqual(false);
    });

    it("[1, null, null, 1, 2, 3, 4], 1 --> true", () => {
      const array = [1, null, null, 1, 2, 3, 4];
      const tree = arrayToBinaryTree(array);

      const result = pathSum.dfs(tree, 1);

      expect(result).toEqual(true);
    });

    it("[1, null, null, 1, 2, 3, 4], 2 --> false", () => {
      const array = [1, null, null, 1, 2, 3, 4];
      const tree = arrayToBinaryTree(array);

      const result = pathSum.dfs(tree, 2);

      expect(result).toEqual(false);
    });

    it("[3, null, 5, 4], 1 --> false", () => {
      const array = [3, null, 5, 4];
      const tree = arrayToBinaryTree(array);

      const result = pathSum.dfs(tree, 1);

      expect(result).toEqual(false);
    });

    it("[3, null, 5, 4], 3 --> false", () => {
      const array = [3, null, 5, 4];
      const tree = arrayToBinaryTree(array);

      const result = pathSum.dfs(tree, 3);

      expect(result).toEqual(false);
    });

    it("[6, null, 8, 7, 9], 23 --> true", () => {
      const array = [6, null, 8, 7, 9];
      const tree = arrayToBinaryTree(array);

      const result = pathSum.dfs(tree, 23);

      expect(result).toEqual(true);
    });

    it("[6, null, 8, 7, 9], 21 --> true", () => {
      const array = [6, null, 8, 7, 9];
      const tree = arrayToBinaryTree(array);

      const result = pathSum.dfs(tree, 21);

      expect(result).toEqual(true);
    });

    it("[6, null, 8, 7, 9], 33 --> false", () => {
      const array = [6, null, 8, 7, 9];
      const tree = arrayToBinaryTree(array);

      const result = pathSum.dfs(tree, 33);

      expect(result).toEqual(false);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 15 --> true", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = pathSum.dfs(tree, 15);

      expect(result).toEqual(true);
    });


    it("[6, 2, 9, null, 4, 7, 10, 3], 37 --> false", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = pathSum.dfs(tree, 37);

      expect(result).toEqual(false);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 25 --> true", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = pathSum.dfs(tree, 25);

      expect(result).toEqual(true);
    });
  });
});
