/************************************************************************************************************************

 * Problem: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
    Given an array where elements are sorted in ascending order, convert it to a height balanced BST.


 * @param {number[]} nums
 * @return {TreeNode}

 * Analysis: This is to build the balanced BST. Try to break the sorted array into 3 parts, and apply recursively.

************************************************************************************************************************/

import { TreeNode } from "../_.util/binaryTree";

export const sortedArrayToBST = {};

/**
 * Solution 1: use dfs pre-order
 *
 * "N" is nums.length
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
sortedArrayToBST.dfs = (nums) => {
    const createNode = (val) => {
            return typeof val === "number" ? new TreeNode(val) : null;
        },
        splitArray = (array) => {
            if (!(array && array.length > 0)) {
                return null;
            }

            const arrLen = array.length,
                lastIdx = arrLen - 1,
                midIdx = Math.floor(lastIdx / 2),
                leftArr = arrLen > 2 ? array.slice(0, midIdx) : null,
                rightArr = arrLen > 1 ? array.slice(midIdx + 1, lastIdx + 1) : null;

            return {
                midVal: array[midIdx],
                leftArr: leftArr,
                rightArr: rightArr
            };
        };

    const splittedArrObject = splitArray(nums);
    if (!splittedArrObject) {
        return null;
    }

    let rootNode = createNode(splittedArrObject.midVal);

    if (splittedArrObject.leftArr) {
        rootNode.left = sortedArrayToBST.dfs(splittedArrObject.leftArr);
    }
    if (splittedArrObject.rightArr) {
        rootNode.right = sortedArrayToBST.dfs(splittedArrObject.rightArr);
    }

    return rootNode;
};


/************************************************************************************************************************

 * Lessons:
   1. BST is basically Binary Tree that stem from sorted array.
   2. Balanced BST is to build up the BST in a middle-out manner.

************************************************************************************************************************/
