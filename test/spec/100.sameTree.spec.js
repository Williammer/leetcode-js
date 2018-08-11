import { arrayToBinaryTree } from "../../src/_.general/binaryTree";
import * as sameTree from "../../src/100.sameTree/100.sameTree";

describe("# Problem 100 - check if two binary trees are equal or not.", () => {
  describe("Solution 1: use converted array to compare.", () => {
    it("[], [] --> true", () => {
      const array = [];
      const qArr = [];
      const tree = arrayToBinaryTree(array);
      const qTree = arrayToBinaryTree(qArr);

      const result = sameTree.toArray(tree, qTree);

      expect(result).toEqual(true);
    });

    it("[1], [] --> false", () => {
      const array = [1];
      const qArr = [];
      const tree = arrayToBinaryTree(array);
      const qTree = arrayToBinaryTree(qArr);

      const result = sameTree.toArray(tree, qTree);

      expect(result).toEqual(false);
    });

    it("[1], [2] --> false", () => {
      const array = [1];
      const qArr = [2];
      const tree = arrayToBinaryTree(array);
      const qTree = arrayToBinaryTree(qArr);

      const result = sameTree.toArray(tree, qTree);

      expect(result).toEqual(false);
    });

    it("[1], [1] --> true", () => {
      const array = [1];
      const qArr = [1];
      const tree = arrayToBinaryTree(array);
      const qTree = arrayToBinaryTree(qArr);

      const result = sameTree.toArray(tree, qTree);

      expect(result).toEqual(true);
    });

    it("[1], [1,1] --> false", () => {
      const array = [1];
      const qArr = [1, 1];
      const tree = arrayToBinaryTree(array);
      const qTree = arrayToBinaryTree(qArr);

      const result = sameTree.toArray(tree, qTree);

      expect(result).toEqual(false);
    });

    it("[1, null, null, null], [1, null] --> true", () => {
      const array = [1, null, null, null];
      const qArr = [1, null];
      const tree = arrayToBinaryTree(array);
      const qTree = arrayToBinaryTree(qArr);

      const result = sameTree.toArray(tree, qTree);

      expect(result).toEqual(true);
    });

    it("[1,1,1,1], [1,1,1,1] --> true", () => {
      const array = [1, 1, 1, 1];
      const qArr = [1, 1, 1, 1];
      const tree = arrayToBinaryTree(array);
      const qTree = arrayToBinaryTree(qArr);

      const result = sameTree.toArray(tree, qTree);

      expect(result).toEqual(true);
    });

    it("[1, 2, 3, null, 4, 5], [1, 2, 3, null, null, 4, 5] --> false", () => {
      const array = [1, 2, 3, null, 4, 5];
      const qArr = [1, 2, 3, null, null, 4, 5];
      const tree = arrayToBinaryTree(array);
      const qTree = arrayToBinaryTree(qArr);

      const result = sameTree.toArray(tree, qTree);

      expect(result).toEqual(false);
    });

    it("[1, 2, 3, null, 4, 5], [1, 2, 3, null, 4, 5] --> true", () => {
      const array = [1, 2, 3, null, 4, 5];
      const qArr = [1, 2, 3, null, 4, 5];
      const tree = arrayToBinaryTree(array);
      const qTree = arrayToBinaryTree(qArr);

      const result = sameTree.toArray(tree, qTree);

      expect(result).toEqual(true);
    });

    it("[1, 2, 3, null, 5, 4], [1, 2, 3, null, 4, 5] --> false", () => {
      const array = [1, 2, 3, null, 5, 4];
      const qArr = [1, 2, 3, null, 4, 5];
      const tree = arrayToBinaryTree(array);
      const qTree = arrayToBinaryTree(qArr);

      const result = sameTree.toArray(tree, qTree);

      expect(result).toEqual(false);
    });

    it("[1, 2, 3, null, 5, 4], [1, 2, 3, null, 4, 5] --> false", () => {
      const array = [1, 2, 3, null, 5, 4];
      const qArr = [1, 2, 3, null, 4, 5];
      const tree = arrayToBinaryTree(array);
      const qTree = arrayToBinaryTree(qArr);

      const result = sameTree.toArray(tree, qTree);

      expect(result).toEqual(false);
    });

    it("[1, 2, 3, null, 4, 5, null, 6, 7], [1, 2, 3, null, 4, 5, null, 6, 7] --> true", () => {
      const array = [1, 2, 3, null, 4, 5, 6, 7];
      const qArr = [1, 2, 3, null, 4, 5, 6, 7];
      const tree = arrayToBinaryTree(array);
      const qTree = arrayToBinaryTree(qArr);

      const result = sameTree.toArray(tree, qTree);

      expect(result).toEqual(true);
    });

    it("[1, 2, 3, null, 4, 5, null, 6, 7, 8], [1, 2, 3, null, 4, 5, null, 6, 7] --> false", () => {
      const array = [1, 2, 3, null, 4, 5, 6, 7, 8];
      const qArr = [1, 2, 3, null, 4, 5, 6, 7];
      const tree = arrayToBinaryTree(array);
      const qTree = arrayToBinaryTree(qArr);

      const result = sameTree.toArray(tree, qTree);

      expect(result).toEqual(false);
    });
  });

  describe("Solution 2: recursively compare nodes of same pos for both trees.", () => {
    it("[], [] --> true", () => {
      const array = [];
      const qArr = [];
      const tree = arrayToBinaryTree(array);
      const qTree = arrayToBinaryTree(qArr);

      const result = sameTree.recursion(tree, qTree);

      expect(result).toEqual(true);
    });

    it("[1], [] --> false", () => {
      const array = [1];
      const qArr = [];
      const tree = arrayToBinaryTree(array);
      const qTree = arrayToBinaryTree(qArr);

      const result = sameTree.recursion(tree, qTree);

      expect(result).toEqual(false);
    });

    it("[1], [2] --> false", () => {
      const array = [1];
      const qArr = [2];
      const tree = arrayToBinaryTree(array);
      const qTree = arrayToBinaryTree(qArr);

      const result = sameTree.recursion(tree, qTree);

      expect(result).toEqual(false);
    });

    it("[1], [1] --> true", () => {
      const array = [1];
      const qArr = [1];
      const tree = arrayToBinaryTree(array);
      const qTree = arrayToBinaryTree(qArr);

      const result = sameTree.recursion(tree, qTree);

      expect(result).toEqual(true);
    });

    it("[1], [1,1] --> false", () => {
      const array = [1];
      const qArr = [1, 1];
      const tree = arrayToBinaryTree(array);
      const qTree = arrayToBinaryTree(qArr);

      const result = sameTree.recursion(tree, qTree);

      expect(result).toEqual(false);
    });

    it("[1, null, null, null], [1, null] --> true", () => {
      const array = [1, null, null, null];
      const qArr = [1, null];
      const tree = arrayToBinaryTree(array);
      const qTree = arrayToBinaryTree(qArr);

      const result = sameTree.recursion(tree, qTree);

      expect(result).toEqual(true);
    });

    it("[1,1,1,1], [1,1,1,1] --> true", () => {
      const array = [1, 1, 1, 1];
      const qArr = [1, 1, 1, 1];
      const tree = arrayToBinaryTree(array);
      const qTree = arrayToBinaryTree(qArr);

      const result = sameTree.recursion(tree, qTree);

      expect(result).toEqual(true);
    });

    it("[1, 2, 3, null, 4, 5], [1, 2, 3, null, null, 4, 5] --> false", () => {
      const array = [1, 2, 3, null, 4, 5];
      const qArr = [1, 2, 3, null, null, 4, 5];
      const tree = arrayToBinaryTree(array);
      const qTree = arrayToBinaryTree(qArr);

      const result = sameTree.recursion(tree, qTree);

      expect(result).toEqual(false);
    });

    it("[1, 2, 3, null, 4, 5], [1, 2, 3, null, 4, 5] --> true", () => {
      const array = [1, 2, 3, null, 4, 5];
      const qArr = [1, 2, 3, null, 4, 5];
      const tree = arrayToBinaryTree(array);
      const qTree = arrayToBinaryTree(qArr);

      const result = sameTree.recursion(tree, qTree);

      expect(result).toEqual(true);
    });

    it("[1, 2, 3, null, 5, 4], [1, 2, 3, null, 4, 5] --> false", () => {
      const array = [1, 2, 3, null, 5, 4];
      const qArr = [1, 2, 3, null, 4, 5];
      const tree = arrayToBinaryTree(array);
      const qTree = arrayToBinaryTree(qArr);

      const result = sameTree.recursion(tree, qTree);

      expect(result).toEqual(false);
    });

    it("[1, 2, 3, null, 5, 4], [1, 2, 3, null, 4, 5] --> false", () => {
      const array = [1, 2, 3, null, 5, 4];
      const qArr = [1, 2, 3, null, 4, 5];
      const tree = arrayToBinaryTree(array);
      const qTree = arrayToBinaryTree(qArr);

      const result = sameTree.recursion(tree, qTree);

      expect(result).toEqual(false);
    });

    it("[1, 2, 3, null, 4, 5, null, 6, 7], [1, 2, 3, null, 4, 5, null, 6, 7] --> true", () => {
      const array = [1, 2, 3, null, 4, 5, 6, 7];
      const qArr = [1, 2, 3, null, 4, 5, 6, 7];
      const tree = arrayToBinaryTree(array);
      const qTree = arrayToBinaryTree(qArr);

      const result = sameTree.recursion(tree, qTree);

      expect(result).toEqual(true);
    });

    it("[1, 2, 3, null, 4, 5, null, 6, 7, 8], [1, 2, 3, null, 4, 5, null, 6, 7] --> false", () => {
      const array = [1, 2, 3, null, 4, 5, 6, 7, 8];
      const qArr = [1, 2, 3, null, 4, 5, 6, 7];
      const tree = arrayToBinaryTree(array);
      const qTree = arrayToBinaryTree(qArr);

      const result = sameTree.recursion(tree, qTree);

      expect(result).toEqual(false);
    });
  });
});
