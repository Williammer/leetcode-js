import { arrayToBinaryTree, binaryTreeToArray } from "../_.general/binaryTree";
import { serializeBT } from "./297.serializeBT";

describe("# Problem 297 - serialize/deserialize BinaryTree.", () => {
  const testCases = [
    [],
    [1],
    [1, 2, null, 3],
    [3, null, 5, 4],
    [6, null, 8, 7, 9],
    [6, 2, 9, null, 4, 7, 10, 3]
  ];
  describe("Solution 1: Just convert it to string", () => {
    testCases.forEach((array) => {
      it(`should serialize and deserialize: ${array.toString()}`, () => {
        const tree = arrayToBinaryTree(array);

        const serializedTree = serializeBT.serialize(tree);
        expect(serializedTree).toEqual(jasmine.any(String));

        const result = serializeBT.deserialize(serializedTree);
        expect(binaryTreeToArray(result)).toEqual(array);
      });
    });
  });
});
