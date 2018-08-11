/**
 * Problem: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
    Given an array where elements are sorted in ascending order, convert it to a height balanced BST

 * @param {number[]} nums
 * @return {TreeNode}

 * Analysis: This is to build the balanced BST. Try to break the sorted array into 3 parts, and
 *  apply recursively.
 */

import { sortedArrayToBST } from "../_.general/binaryTree";

/**
 * Solution 1: use dfs pre-order
 *
 * "N" is nums.length
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
export const dfs = sortedArrayToBST;

/**
 * Lessons:
   1. BST is basically Binary Tree that stem from sorted array.
   2. Balanced BST is to build up the BST in a middle-out manner.
 */
