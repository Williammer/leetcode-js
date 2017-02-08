import { ListNode, arrayToLinkedlist, linkedlistToArray } from "../../src/_.util/linkedList";
import { add2Nums } from "../../src/2.add2Nums/solution";

describe("# Problem 2 - Add two non-negative numbers represented by two linked lists into a number represented by a linked list too", () => {

    describe("Solution 1: js reference. Utilized js object reference change feature", () => {
        it("return right sum for 2 nums with same digits num that has not carry num: [2, 4, 3]+[5, 2, 5] => [7, 6, 8]", () => {
            const l1 = arrayToLinkedlist([2, 4, 3]);
            const l2 = arrayToLinkedlist([5, 2, 5]);

            const result = add2Nums.reference(l1, l2);
            expect(linkedlistToArray(result)).toEqual([7, 6, 8]);

        });

        it("return right sum for 2 nums with same digits num that has carry num: [2, 4, 3]+[5, 6, 4] => [7, 0, 8]", () => {
            const l1 = arrayToLinkedlist([2, 4, 3]);
            const l2 = arrayToLinkedlist([5, 6, 4]);

            const result = add2Nums.reference(l1, l2);
            expect(linkedlistToArray(result)).toEqual([7, 0, 8]);
        });

        it("return sum should exceeds max input digit num limit with carry num: [2, 4, 9]+[5, 9] => [7, 3, 0, 1]", () => {
            const l1 = arrayToLinkedlist([2, 4, 9]);
            const l2 = arrayToLinkedlist([5, 9]);

            const result = add2Nums.reference(l1, l2);
            expect(linkedlistToArray(result)).toEqual([7, 3, 0, 1]);
        });

        it("return right sum for 2 nums with different digits num: [6, 9, 3]+[9] => [5, 0, 4]", () => {
            const l1 = arrayToLinkedlist([6, 9, 3]);
            const l2 = arrayToLinkedlist([9]);

            const result = add2Nums.reference(l1, l2);
            expect(linkedlistToArray(result)).toEqual([5, 0, 4]);
        });

    });


    describe("Solution 2: Recursion", () => {
        it("return right sum for 2 nums with same digits num that has not carry num: [2, 4, 3]+[5, 2, 5] => [7, 6, 8]", () => {
            const l1 = arrayToLinkedlist([2, 4, 3]);
            const l2 = arrayToLinkedlist([5, 2, 5]);

            const result = add2Nums.recursion(l1, l2);
            expect(linkedlistToArray(result)).toEqual([7, 6, 8]);

        });

        it("return right sum for 2 nums with same digits num that has carry num: [2, 4, 3]+[5, 6, 4] => [7, 0, 8]", () => {
            const l1 = arrayToLinkedlist([2, 4, 3]);
            const l2 = arrayToLinkedlist([5, 6, 4]);

            const result = add2Nums.recursion(l1, l2);
            expect(linkedlistToArray(result)).toEqual([7, 0, 8]);
        });

        it("return sum should exceeds max input digit num limit with carry num: [2, 4, 9]+[5, 9] => [7, 3, 0, 1]", () => {
            const l1 = arrayToLinkedlist([2, 4, 9]);
            const l2 = arrayToLinkedlist([5, 9]);

            const result = add2Nums.recursion(l1, l2);
            expect(linkedlistToArray(result)).toEqual([7, 3, 0, 1]);
        });

        it("return right sum for 2 nums with different digits num: [6, 9, 3]+[9] => [5, 0, 4]", () => {
            const l1 = arrayToLinkedlist([6, 9, 3]);
            const l2 = arrayToLinkedlist([9]);

            const result = add2Nums.recursion(l1, l2);
            expect(linkedlistToArray(result)).toEqual([5, 0, 4]);
        });

    });
});
