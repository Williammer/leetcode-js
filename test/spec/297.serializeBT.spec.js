import { arrayToBinaryTree, binaryTreeToArray } from "../../src/_.general/binaryTree";
import { serializeBT } from "../../src/297.serializeBT/297.serializeBT";

describe("# Problem 297 - serialize/deserialize BinaryTree.", () => {
  describe("Solution 1: Just convert it to string", () => {
    it("[]", () => {
      const array = [];
      const tree = arrayToBinaryTree(array);

      const serializedTree = serializeBT.serialize(tree);
      expect(serializedTree).toEqual(jasmine.any(String));

      const result = serializeBT.deserialize(serializedTree);
      expect(binaryTreeToArray(result)).toEqual(array);
    });

    it("[1]", () => {
      const array = [1];
      const tree = arrayToBinaryTree(array);

      const serializedTree = serializeBT.serialize(tree);
      expect(serializedTree).toEqual(jasmine.any(String));

      const result = serializeBT.deserialize(serializedTree);
      expect(binaryTreeToArray(result)).toEqual(array);
    });

    it("[1, 2, null, 3]", () => {
      const array = [1, 2, null, 3];
      const tree = arrayToBinaryTree(array);

      const serializedTree = serializeBT.serialize(tree);
      expect(serializedTree).toEqual(jasmine.any(String));

      const result = serializeBT.deserialize(serializedTree);
      expect(binaryTreeToArray(result)).toEqual(array);
    });

    it("[3, null, 5, 4]", () => {
      const array = [3, null, 5, 4];
      const tree = arrayToBinaryTree(array);

      const serializedTree = serializeBT.serialize(tree);
      expect(serializedTree).toEqual(jasmine.any(String));

      const result = serializeBT.deserialize(serializedTree);
      expect(binaryTreeToArray(result)).toEqual(array);
    });

    it("[6, null, 8, 7, 9]", () => {
      const array = [6, null, 8, 7, 9];
      const tree = arrayToBinaryTree(array);

      const serializedTree = serializeBT.serialize(tree);
      expect(serializedTree).toEqual(jasmine.any(String));

      const result = serializeBT.deserialize(serializedTree);
      expect(binaryTreeToArray(result)).toEqual(array);
    });

    it("[6, 2, 9, null, 4, 7, 10, 3]", () => {
      const array = [6, 2, 9, null, 4, 7, 10, 3];
      const tree = arrayToBinaryTree(array);

      const serializedTree = serializeBT.serialize(tree);
      expect(serializedTree).toEqual(jasmine.any(String));

      const result = serializeBT.deserialize(serializedTree);
      expect(binaryTreeToArray(result)).toEqual(array);
    });
  });
});
