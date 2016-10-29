import { ListNode, arrToLList, lListToArr } from "../../src/_.util/linkedList";
import { TreeNode, generatorBinaryTree } from "../../src/_.util/binaryTree";

// # linkedList
describe("[Util] linkedList - convert between array and linkedList.", () => {
    it("arrToLList return (2 -> 4 -> 3) for [2,4,3]", () => {
        const testArr = [2, 4, 3];

        const result = arrToLList(testArr);
        expect(result instanceof ListNode).toBeTruthy();
        expect(result.val).toEqual(2);
        expect(result.next.val).toEqual(4);
        expect(result.next.next.val).toEqual(3);
    });

    it("lListToArr return [2,4,3] for (2 -> 4 -> 3)", () => {
        const testlList = new ListNode(2);
        testlList.next = new ListNode(4);
        testlList.next.next = new ListNode(3);

        const result = lListToArr(testlList);
        expect(result).toEqual([2, 4, 3]);
    });
});


// # binaryTree
describe("[Util] binaryTree - Generate binary tree base on node values array, the value evaluated as false will be considered null node.", () => {
    it("[1, 2, 3, null, 4, 5]", () => {
        const array = [1, 2, 3, null, 4, 5];
        const rootNode = generatorBinaryTree(array);

        expect(rootNode.val).toEqual(1);
        expect(rootNode.left.val).toEqual(2);
        expect(rootNode.right.val).toEqual(3);

        expect(rootNode.left.left).toBeNull();
        expect(rootNode.left.right.val).toEqual(4);
        expect(rootNode.right.left.val).toEqual(5);
        expect(rootNode.right.right).toBeNull();
    });
});
