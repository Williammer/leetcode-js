import { ListNode, getLinkedlistFromArray, getArrayFromLinkedlist } from "../../src/_.util/linkedList";
import { TreeNode, getBinaryTreeFromArray } from "../../src/_.util/binaryTree";

// # linkedList
describe("[Util] linkedList - convert between array and linkedList.", () => {
    it("getLinkedlistFromArray return (2 -> 4 -> 3) for [2,4,3]", () => {
        const testArr = [2, 4, 3];

        const result = getLinkedlistFromArray(testArr);
        expect(result instanceof ListNode).toBeTruthy();
        expect(result.val).toEqual(2);
        expect(result.next.val).toEqual(4);
        expect(result.next.next.val).toEqual(3);
    });

    it("getArrayFromLinkedlist return [2,4,3] for (2 -> 4 -> 3)", () => {
        const testlList = new ListNode(2);
        testlList.next = new ListNode(4);
        testlList.next.next = new ListNode(3);

        const result = getArrayFromLinkedlist(testlList);
        expect(result).toEqual([2, 4, 3]);
    });
});


// # binaryTree
describe("[Util] binaryTree - Generate binary tree base on node values array, the value evaluated as false will be considered null node.", () => {
    it("[1, null, null, 1, 2, 3, 4]", () => {
        const array =  [1, null, null, 1, 2, 3, 4];
        const rootNode = getBinaryTreeFromArray(array);

        expect(rootNode.val).toEqual(1);
        expect(rootNode.left).toBeNull();
        expect(rootNode.right).toBeNull();

    });

    it("[1, 2, 3, null, 4, 5]", () => {
        const array = [1, 2, 3, null, 4, 5];
        const rootNode = getBinaryTreeFromArray(array);

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
        const rootNode = getBinaryTreeFromArray(array);

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
});
