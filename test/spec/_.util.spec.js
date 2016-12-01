import { ListNode, arrayToLinkedlist, linkedlistToArray } from "../../src/_.util/linkedList";
import { TreeNode, arrayToBinaryTree, binaryTreeToArray } from "../../src/_.util/binaryTree";

// # linkedList
describe("[Util] linkedList - convert between array and linkedList.", () => {
    it("arrayToLinkedlist return (2 -> 4 -> 3) for [2,4,3]", () => {
        const testArr = [2, 4, 3];

        const result = arrayToLinkedlist(testArr);
        expect(result instanceof ListNode).toBeTruthy();
        expect(result.val).toEqual(2);
        expect(result.next.val).toEqual(4);
        expect(result.next.next.val).toEqual(3);
    });

    it("linkedlistToArray return [2,4,3] for (2 -> 4 -> 3)", () => {
        const testlList = new ListNode(2);
        testlList.next = new ListNode(4);
        testlList.next.next = new ListNode(3);

        const result = linkedlistToArray(testlList);
        expect(result).toEqual([2, 4, 3]);
    });
});


// # binaryTree
describe("[Util] binaryTree - Generate binary tree base on node values array, the value evaluated as false will be considered null node.", () => {
    it("[1, null, null, 1, 2, 3, 4]", () => {
        const array =  [1, null, null, 1, 2, 3, 4];
        const rootNode = arrayToBinaryTree(array);

        expect(rootNode.val).toEqual(1);
        expect(rootNode.left).toBeNull();
        expect(rootNode.right).toBeNull();

    });

    it("[1, 2, 3, null, 4, 5]", () => {
        const array = [1, 2, 3, null, 4, 5];
        const rootNode = arrayToBinaryTree(array);

        expect(rootNode.val).toEqual(1);
        expect(rootNode.left.val).toEqual(2);
        expect(rootNode.right.val).toEqual(3);

        expect(rootNode.left.left).toBeNull();
        expect(rootNode.left.right.val).toEqual(4);
        expect(rootNode.right.left.val).toEqual(5);
        expect(rootNode.right.right).toBeNull();
    });

    it("[1, 2, 3, null, 4, 5, null, 6, 7]", () => {
        const array = [1, 2, 3, null, 4, 5, null, 6, 7];
        const rootNode = arrayToBinaryTree(array);

        expect(rootNode.val).toEqual(1);

        expect(rootNode.left.val).toEqual(2);
        expect(rootNode.right.val).toEqual(3);

        expect(rootNode.left.left).toBeNull();
        expect(rootNode.left.right.val).toEqual(4);
        expect(rootNode.right.left.val).toEqual(5);
        expect(rootNode.right.right).toBeNull();

        expect(rootNode.left.right.left.val).toEqual(6);
        expect(rootNode.left.right.right.val).toEqual(7);
    });

    it("[1, 2, 3, 4, null, null, 5, null, null, null, 6]", () => {
        const array = [1, 2, 3, 4, null, null, 5, null, null, null, 6];
        const rootNode = arrayToBinaryTree(array);

        expect(rootNode.val).toEqual(1);

        expect(rootNode.left.val).toEqual(2);
        expect(rootNode.right.val).toEqual(3);

        expect(rootNode.left.left.val).toEqual(4);
        expect(rootNode.left.right).toBeNull();
        expect(rootNode.right.left).toBeNull();
        expect(rootNode.right.right.val).toEqual(5);

        expect(rootNode.left.left.left).toBeNull();
        expect(rootNode.left.left.right).toBeNull();
        expect(rootNode.right.right.left).toBeNull();
        expect(rootNode.right.right.right.val).toEqual(6);
    });
});


describe("[Util] binaryTree - Generate node values array base on binary tree.", () => {
    it("[1, null, null]", () => {
        const array =  [1, null, null];
        const rootNode = arrayToBinaryTree(array);
        const convertedArray = binaryTreeToArray(rootNode);

        expect(convertedArray).toEqual([1]);
    });

    it("[1, 2, 3, null, 4, 5]", () => {
        const array = [1, 2, 3, null, 4, 5];
        const rootNode = arrayToBinaryTree(array);
        const convertedArray = binaryTreeToArray(rootNode);

        expect(convertedArray).toEqual(array);
    });

    it("[1, 2, 3, null, 4, 5, null, 6, 7]", () => {
        const array = [1, 2, 3, null, 4, 5, null, 6, 7];
        const rootNode = arrayToBinaryTree(array);
        const convertedArray = binaryTreeToArray(rootNode);

        expect(convertedArray).toEqual(array);
    });

    it("[1, 2, 3, 4, null, null, 5, null, null, null, 6]", () => {
        const array = [1, 2, 3, 4, null, null, 5, null, null, null, 6];
        const rootNode = arrayToBinaryTree(array);
        const convertedArray = binaryTreeToArray(rootNode);

        expect(convertedArray).toEqual(array);
    });
});
