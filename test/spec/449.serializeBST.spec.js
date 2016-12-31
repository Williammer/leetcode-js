import { arrayToBinaryTree, binaryTreeToArray } from "../../src/_.util/binaryTree";
import { serializeBST } from "../../src/449.serializeBST/solution";

describe("# Problem 449 - serialize/deserialize BST.", () => {

    describe("Solution 1: Just convert it to string", () => {
        it("[]", () => {
            const array = [];
            const tree = arrayToBinaryTree(array);

            const serializedTree = serializeBST.serialize(tree);
            expect(serializedTree).toEqual(jasmine.any(String));

            const result = serializeBST.deserialize(serializedTree);
            expect(binaryTreeToArray(result)).toEqual(array);
        });

        it("[1]", () => {
            const array = [1];
            const tree = arrayToBinaryTree(array);

            const serializedTree = serializeBST.serialize(tree);
            expect(serializedTree).toEqual(jasmine.any(String));

            const result = serializeBST.deserialize(serializedTree);
            expect(binaryTreeToArray(result)).toEqual(array);
        });

        it("[1, 2, null, 3]", () => {
            const array = [1, 2, null, 3];
            const tree = arrayToBinaryTree(array);

            const serializedTree = serializeBST.serialize(tree);
            expect(serializedTree).toEqual(jasmine.any(String));

            const result = serializeBST.deserialize(serializedTree);
            expect(binaryTreeToArray(result)).toEqual(array);
        });

        it("[3, null, 5, 4]", () => {
            const array = [3, null, 5, 4];
            const tree = arrayToBinaryTree(array);

            const serializedTree = serializeBST.serialize(tree);
            expect(serializedTree).toEqual(jasmine.any(String));

            const result = serializeBST.deserialize(serializedTree);
            expect(binaryTreeToArray(result)).toEqual(array);
        });

        it("[6, null, 8, 7, 9]", () => {
            const array = [6, null, 8, 7, 9];
            const tree = arrayToBinaryTree(array);

            const serializedTree = serializeBST.serialize(tree);
            expect(serializedTree).toEqual(jasmine.any(String));

            const result = serializeBST.deserialize(serializedTree);
            expect(binaryTreeToArray(result)).toEqual(array);
        });

        it("[6, 2, 9, null, 4, 7, 10, 3]", () => {
            const array = [6, 2, 9, null, 4, 7, 10, 3];
            const tree = arrayToBinaryTree(array);

            const serializedTree = serializeBST.serialize(tree);
            expect(serializedTree).toEqual(jasmine.any(String));

            const result = serializeBST.deserialize(serializedTree);
            expect(binaryTreeToArray(result)).toEqual(array);
        });
    });

});
