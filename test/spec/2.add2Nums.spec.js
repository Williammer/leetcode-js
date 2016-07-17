/************************************************************
  * Problem: https://leetcode.com/problems/add-two-numbers/
    You are given two linked lists representing two non-negative numbers.
    The digits are stored in reverse order and each of their nodes contain a single digit.
    Add the two numbers and return it as a linked list.

 * Example:
    Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    Output: 7 -> 0 -> 8

 * Definition for singly-linked list:
    function ListNode(val) {
      this.val = val;
      this.next = null;
    }
************************************************************/
import { ListNode, arrToLList, lListToArr, add2Nums } from "../../src/2.add2Nums/solution";

describe('# Problem 2 - Add two non-negative numbers represented by two linked lists into a number represented by a linked list too', function() {
    // # Helper tests
    describe('Helper method tests', function() {
        it('arrToLList return (2 -> 4 -> 3) for [2,4,3]', function() {
            var testArr = [2, 4, 3];

            var result = arrToLList(testArr);
            expect(result instanceof ListNode).toBeTruthy();
            expect(result.val).toEqual(2);
            expect(result.next.val).toEqual(4);
            expect(result.next.next.val).toEqual(3);
        });

        it('lListToArr return [2,4,3] for (2 -> 4 -> 3)', function() {
            var testlList = new ListNode(2);
            testlList.next = new ListNode(4);
            testlList.next.next = new ListNode(3);

            var result = lListToArr(testlList);
            expect(result).toEqual([2, 4, 3]);
        });
    });


    // # Solution 1: Intro a stack helper to reversely insert each node into linklist
    describe('Solution 1: Intro a stack helper to reversely insert each node into linklist', function() {
        it('return right sum for 2 nums with same digits num that has not carry num: [2, 4, 3]+[5, 2, 5] => [7, 6, 8]', function() {
            var l1, l2, result;
            l1 = arrToLList([2, 4, 3]);
            l2 = arrToLList([5, 2, 5]);

            var result = add2Nums.stackHelper(l1, l2);
            expect(lListToArr(result)).toEqual([7, 6, 8]);

        });

        it('return right sum for 2 nums with same digits num that has carry num: [2, 4, 3]+[5, 6, 4] => [7, 0, 8]', function() {
            var l1, l2, result;
            l1 = arrToLList([2, 4, 3]);
            l2 = arrToLList([5, 6, 4]);

            var result = add2Nums.stackHelper(l1, l2);
            expect(lListToArr(result)).toEqual([7, 0, 8]);
        });

        it('return sum should exceeds max input digit num limit with carry num: [2, 4, 9]+[5, 9] => [7, 3, 0, 1]', function() {
            var l1, l2, result;
            l1 = arrToLList([2, 4, 9]);
            l2 = arrToLList([5, 9]);

            var result = add2Nums.stackHelper(l1, l2);
            expect(lListToArr(result)).toEqual([7, 3, 0, 1]);
        });

        it('return right sum for 2 nums with different digits num: [6, 9, 3]+[9] => [5, 0, 4]', function() {
            var l1, l2, result;
            l1 = arrToLList([6, 9, 3]);
            l2 = arrToLList([9]);

            var result = add2Nums.stackHelper(l1, l2);
            expect(lListToArr(result)).toEqual([5, 0, 4]);
        });

    });


    // # Solution 2: js reference. Utilized js object reference change feature
    describe('Solution 2: js reference. Utilized js object reference change feature', function() {
        it('return right sum for 2 nums with same digits num that has not carry num: [2, 4, 3]+[5, 2, 5] => [7, 6, 8]', function() {
            var l1, l2, result;
            l1 = arrToLList([2, 4, 3]);
            l2 = arrToLList([5, 2, 5]);

            var result = add2Nums.reference(l1, l2);
            expect(lListToArr(result)).toEqual([7, 6, 8]);

        });

        it('return right sum for 2 nums with same digits num that has carry num: [2, 4, 3]+[5, 6, 4] => [7, 0, 8]', function() {
            var l1, l2, result;
            l1 = arrToLList([2, 4, 3]);
            l2 = arrToLList([5, 6, 4]);

            var result = add2Nums.reference(l1, l2);
            expect(lListToArr(result)).toEqual([7, 0, 8]);
        });

        it('return sum should exceeds max input digit num limit with carry num: [2, 4, 9]+[5, 9] => [7, 3, 0, 1]', function() {
            var l1, l2, result;
            l1 = arrToLList([2, 4, 9]);
            l2 = arrToLList([5, 9]);

            var result = add2Nums.reference(l1, l2);
            expect(lListToArr(result)).toEqual([7, 3, 0, 1]);
        });

        it('return right sum for 2 nums with different digits num: [6, 9, 3]+[9] => [5, 0, 4]', function() {
            var l1, l2, result;
            l1 = arrToLList([6, 9, 3]);
            l2 = arrToLList([9]);

            var result = add2Nums.reference(l1, l2);
            expect(lListToArr(result)).toEqual([5, 0, 4]);
        });

    });


    // # Solution 3: recursion
    describe('Solution 3: Recursion', function() {
        it('return right sum for 2 nums with same digits num that has not carry num: [2, 4, 3]+[5, 2, 5] => [7, 6, 8]', function() {
            var l1, l2, result;
            l1 = arrToLList([2, 4, 3]);
            l2 = arrToLList([5, 2, 5]);

            var result = add2Nums.recursion(l1, l2);
            expect(lListToArr(result)).toEqual([7, 6, 8]);

        });

        it('return right sum for 2 nums with same digits num that has carry num: [2, 4, 3]+[5, 6, 4] => [7, 0, 8]', function() {
            var l1, l2, result;
            l1 = arrToLList([2, 4, 3]);
            l2 = arrToLList([5, 6, 4]);

            var result = add2Nums.recursion(l1, l2);
            expect(lListToArr(result)).toEqual([7, 0, 8]);
        });

        it('return sum should exceeds max input digit num limit with carry num: [2, 4, 9]+[5, 9] => [7, 3, 0, 1]', function() {
            var l1, l2, result;
            l1 = arrToLList([2, 4, 9]);
            l2 = arrToLList([5, 9]);

            var result = add2Nums.recursion(l1, l2);
            expect(lListToArr(result)).toEqual([7, 3, 0, 1]);
        });

        it('return right sum for 2 nums with different digits num: [6, 9, 3]+[9] => [5, 0, 4]', function() {
            var l1, l2, result;
            l1 = arrToLList([6, 9, 3]);
            l2 = arrToLList([9]);

            var result = add2Nums.recursion(l1, l2);
            expect(lListToArr(result)).toEqual([5, 0, 4]);
        });

    });


});
