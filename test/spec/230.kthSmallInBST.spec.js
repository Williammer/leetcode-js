import { arrayToBinaryTree } from "../../src/_.general/binaryTree";
import * as kthSmallInBST from "../../src/230.kthSmallInBST/solution";

describe("# Problem 230 - Find the kth smallest element in BST.", () => {
  describe("Solution 1: use inOrder", () => {
    it("[], 3 --> undefined", () => {
      const array = [];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrder(tree, 3);

      expect(result).toBeUndefined();
    });

    it("[1], 1 --> 1", () => {
      const array = [1];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrder(tree, 1);

      expect(result).toEqual(1);
    });

    it("[1], 2 --> undefined", () => {
      const array = [1];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrder(tree, 2);

      expect(result).toBeUndefined();
    });

    it("[1, null, null, 1, 2, 3, 4], 1 --> 1", () => {
      const array = [1, null, null, 1, 2, 3, 4];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrder(tree, 1);

      expect(result).toEqual(1);
    });

    it("[1, null, null, 1, 2, 3, 4], 2 --> undefined", () => {
      const array = [1, null, null, 1, 2, 3, 4];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrder(tree, 2);

      expect(result).toBeUndefined();
    });

    it("[3, null, 5, 4], 1 --> 3", () => {
      const array = [3, null, 5, 4];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrder(tree, 1);

      expect(result).toEqual(3);
    });

    it("[3, null, 5, 4], 2 --> 4", () => {
      const array = [3, null, 5, 4];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrder(tree, 2);

      expect(result).toEqual(4);
    });

    it("[3, null, 5, 4], 3 --> 5", () => {
      const array = [3, null, 5, 4];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrder(tree, 3);

      expect(result).toEqual(5);
    });

    it("[6, null, 8, 7, 9], 1 --> 6", () => {
      const array = [6, null, 8, 7, 9];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrder(tree, 1);

      expect(result).toEqual(6);
    });

    it("[6, null, 8, 7, 9], 2 --> 7", () => {
      const array = [6, null, 8, 7, 9];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrder(tree, 2);

      expect(result).toEqual(7);
    });

    it("[6, null, 8, 7, 9], 3 --> 8", () => {
      const array = [6, null, 8, 7, 9];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrder(tree, 3);

      expect(result).toEqual(8);
    });

    it("[6, null, 8, 7, 9], 4 --> 9", () => {
      const array = [6, null, 8, 7, 9];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrder(tree, 4);

      expect(result).toEqual(9);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 1 --> 2", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrder(tree, 1);

      expect(result).toEqual(2);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 2 --> 3", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrder(tree, 2);

      expect(result).toEqual(3);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 3 --> 4", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrder(tree, 3);

      expect(result).toEqual(4);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 4 --> 6", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrder(tree, 4);

      expect(result).toEqual(6);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 5 --> 7", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrder(tree, 5);

      expect(result).toEqual(7);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 6 --> 9", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrder(tree, 6);

      expect(result).toEqual(9);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 7 --> 10", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrder(tree, 7);

      expect(result).toEqual(10);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 8 --> undefined", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrder(tree, 8);

      expect(result).toBeUndefined();
    });
  });

  describe("Solution 2: use inOrder iteration", () => {
    it("[], 3 --> undefined", () => {
      const array = [];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrderIter(tree, 3);

      expect(result).toBeUndefined();
    });

    it("[1], 1 --> 1", () => {
      const array = [1];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrderIter(tree, 1);

      expect(result).toEqual(1);
    });

    it("[1], 2 --> undefined", () => {
      const array = [1];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrderIter(tree, 2);

      expect(result).toBeUndefined();
    });

    it("[1, null, null, 1, 2, 3, 4], 1 --> 1", () => {
      const array = [1, null, null, 1, 2, 3, 4];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrderIter(tree, 1);

      expect(result).toEqual(1);
    });

    it("[1, null, null, 1, 2, 3, 4], 2 --> undefined", () => {
      const array = [1, null, null, 1, 2, 3, 4];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrderIter(tree, 2);

      expect(result).toBeUndefined();
    });

    it("[3, null, 5, 4], 1 --> 3", () => {
      const array = [3, null, 5, 4];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrderIter(tree, 1);

      expect(result).toEqual(3);
    });

    it("[3, null, 5, 4], 2 --> 4", () => {
      const array = [3, null, 5, 4];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrderIter(tree, 2);

      expect(result).toEqual(4);
    });

    it("[3, null, 5, 4], 3 --> 5", () => {
      const array = [3, null, 5, 4];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrderIter(tree, 3);

      expect(result).toEqual(5);
    });

    it("[6, null, 8, 7, 9], 1 --> 6", () => {
      const array = [6, null, 8, 7, 9];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrderIter(tree, 1);

      expect(result).toEqual(6);
    });

    it("[6, null, 8, 7, 9], 2 --> 7", () => {
      const array = [6, null, 8, 7, 9];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrderIter(tree, 2);

      expect(result).toEqual(7);
    });

    it("[6, null, 8, 7, 9], 3 --> 8", () => {
      const array = [6, null, 8, 7, 9];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrderIter(tree, 3);

      expect(result).toEqual(8);
    });

    it("[6, null, 8, 7, 9], 4 --> 9", () => {
      const array = [6, null, 8, 7, 9];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrderIter(tree, 4);

      expect(result).toEqual(9);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 1 --> 2", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrderIter(tree, 1);

      expect(result).toEqual(2);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 2 --> 3", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrderIter(tree, 2);

      expect(result).toEqual(3);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 3 --> 4", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrderIter(tree, 3);

      expect(result).toEqual(4);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 4 --> 6", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrderIter(tree, 4);

      expect(result).toEqual(6);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 5 --> 7", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrderIter(tree, 5);

      expect(result).toEqual(7);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 6 --> 9", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrderIter(tree, 6);

      expect(result).toEqual(9);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 7 --> 10", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrderIter(tree, 7);

      expect(result).toEqual(10);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 8 --> undefined", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.inOrderIter(tree, 8);

      expect(result).toBeUndefined();
    });
  });

  describe("Solution 3: use binary search", () => {
    it("[], 3 --> undefined", () => {
      const array = [];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.binarySearch(tree, 3);

      expect(result).toBeUndefined();
    });

    it("[1], 1 --> 1", () => {
      const array = [1];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.binarySearch(tree, 1);

      expect(result).toEqual(1);
    });

    it("[1], 2 --> undefined", () => {
      const array = [1];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.binarySearch(tree, 2);

      expect(result).toBeUndefined();
    });

    it("[1, null, null, 1, 2, 3, 4], 1 --> 1", () => {
      const array = [1, null, null, 1, 2, 3, 4];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.binarySearch(tree, 1);

      expect(result).toEqual(1);
    });

    it("[1, null, null, 1, 2, 3, 4], 2 --> undefined", () => {
      const array = [1, null, null, 1, 2, 3, 4];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.binarySearch(tree, 2);

      expect(result).toBeUndefined();
    });

    it("[3, null, 5, 4], 1 --> 3", () => {
      const array = [3, null, 5, 4];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.binarySearch(tree, 1);

      expect(result).toEqual(3);
    });

    it("[3, null, 5, 4], 2 --> 4", () => {
      const array = [3, null, 5, 4];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.binarySearch(tree, 2);

      expect(result).toEqual(4);
    });

    it("[3, null, 5, 4], 3 --> 5", () => {
      const array = [3, null, 5, 4];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.binarySearch(tree, 3);

      expect(result).toEqual(5);
    });

    it("[6, null, 8, 7, 9], 1 --> 6", () => {
      const array = [6, null, 8, 7, 9];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.binarySearch(tree, 1);

      expect(result).toEqual(6);
    });

    it("[6, null, 8, 7, 9], 2 --> 7", () => {
      const array = [6, null, 8, 7, 9];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.binarySearch(tree, 2);

      expect(result).toEqual(7);
    });

    it("[6, null, 8, 7, 9], 3 --> 8", () => {
      const array = [6, null, 8, 7, 9];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.binarySearch(tree, 3);

      expect(result).toEqual(8);
    });

    it("[6, null, 8, 7, 9], 4 --> 9", () => {
      const array = [6, null, 8, 7, 9];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.binarySearch(tree, 4);

      expect(result).toEqual(9);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 1 --> 2", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.binarySearch(tree, 1);

      expect(result).toEqual(2);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 2 --> 3", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.binarySearch(tree, 2);

      expect(result).toEqual(3);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 3 --> 4", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.binarySearch(tree, 3);

      expect(result).toEqual(4);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 4 --> 6", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.binarySearch(tree, 4);

      expect(result).toEqual(6);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 5 --> 7", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.binarySearch(tree, 5);

      expect(result).toEqual(7);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 6 --> 9", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.binarySearch(tree, 6);

      expect(result).toEqual(9);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 7 --> 10", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.binarySearch(tree, 7);

      expect(result).toEqual(10);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3], 8 --> undefined", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const result = kthSmallInBST.binarySearch(tree, 8);

      expect(result).toBeUndefined();
    });
  });
});
