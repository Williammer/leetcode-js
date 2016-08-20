/************************************************************

 * Problem: https://leetcode.com/problems/median-of-two-sorted-arrays/
    There are two sorted arrays nums1 and nums2 of size m and n respectively.
    Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

 * Example 1:
    nums1 = [1, 3]
    nums2 = [2]
    The median is 2.0

 * Example 2:
    nums1 = [1, 2]
    nums2 = [3, 4]
    The median is (2 + 3)/2 = 2.5

 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}

************************************************************/

import { medianOf2sortedArr } from "../../src/4.medianOf2sortedArr/solution";

describe("# Problem 4 - Find the median of the two sorted arrays.", () => {

    describe("Solution 1: ", () => {
        it("return undefined for invalid inputs: [], []", () => {
            const arr1 = [],
                arr2 = [],
                foo= 42,
                bar= "baz",
                wow= undefined,
                much= {},
                fn= () => {},
                test= null;

            expect(medianOf2sortedArr.fn(foo, arr1)).toBeUndefined();
            expect(medianOf2sortedArr.fn(bar, arr1)).toBeUndefined();
            expect(medianOf2sortedArr.fn(wow, arr1)).toBeUndefined();
            expect(medianOf2sortedArr.fn(much, arr1)).toBeUndefined();
            expect(medianOf2sortedArr.fn(fn, arr1)).toBeUndefined();
            expect(medianOf2sortedArr.fn(test, arr1)).toBeUndefined();

            expect(medianOf2sortedArr.fn(arr2, foo)).toBeUndefined();
            expect(medianOf2sortedArr.fn(arr2, bar)).toBeUndefined();
            expect(medianOf2sortedArr.fn(arr2, wow)).toBeUndefined();
            expect(medianOf2sortedArr.fn(arr2, much)).toBeUndefined();
            expect(medianOf2sortedArr.fn(arr2, fn)).toBeUndefined();
            expect(medianOf2sortedArr.fn(arr2, test)).toBeUndefined();

            expect(medianOf2sortedArr.fn(arr1, arr2)).toBeUndefined();
        });

        it("has 0-element array: [], [1, 3, 5]", () => {
            const arr1 = [];
            const arr2 = [1, 3, 5];

            const median = medianOf2sortedArr.fn(arr1, arr2);
            expect(median).toEqual(3);
        });

        it("has 1-element array: [1], [3, 5]", () => {
            const arr1 = [1];
            const arr2 = [3, 5];

            const median = medianOf2sortedArr.fn(arr1, arr2);
            expect(median).toEqual(3);
        });

        it("works fine for odd length merged array: [1, 7, 9], [3, 5]", () => {
            const arr1 = [1, 7, 9];
            const arr2 = [3, 5];

            const median = medianOf2sortedArr.fn(arr1, arr2);
            expect(median).toEqual(5);
        });

        it("works fine for even length merged array: [1, 6, 7], [3, 5, 8]", () => {
            const arr1 = [1, 6, 7];
            const arr2 = [3, 5, 8];

            const median = medianOf2sortedArr.fn(arr1, arr2);
            expect(median).toEqual(5.5);
        });

        it("works fine for array contains the other: [1, 5, 7], [5, 7]", () => {
            const arr1 = [1, 5, 7, 9, 11];
            const arr2 = [5, 7];

            const median = medianOf2sortedArr.fn(arr1, arr2);
            expect(median).toEqual(7);
        });

        it("works fine for arrays with overlapped num: [1, 5, 7], [3, 5, 7, 8]", () => {
            const arr1 = [1, 5, 7];
            const arr2 = [3, 5, 7, 8];

            const median = medianOf2sortedArr.fn(arr1, arr2);
            expect(median).toEqual(5);
        });



    });

});
