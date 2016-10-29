import { ListNode, arrToLList, lListToArr } from "../../src/_.util/linkedList";
import { TreeNode, generatorBinaryTree } from "../../src/_.util/binaryTree";

// # Helper tests
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
