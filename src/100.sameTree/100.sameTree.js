/**
 * Problem: https://leetcode.com/problems/same-tree/
    Given two binary trees, write a function to check if they are equal or not.
    Two binary trees are considered equal if they are structurally identical and the nodes have the
      same value.

 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}

 * Analysis: In order to compare the 2 bTrees, we need sth both tree shares, such as a pos pointer.
    Besides, it can be divided into smaller atom problem, which is suitable for recursion.
 */

import { isTreeNode, binaryTreeToArray, isSameTree } from "../_.general/binaryTree";

/**
 * Solution 1: use convert to array util to compare 2 array.
 *
 * "N" is min node count of 2 trees
 * Time complexity: O(3N)
 * Space complexity: O(2N)
 */
export const toArray = (p, q) => {
  if (!isTreeNode(p) || !isTreeNode(q)) return !isTreeNode(p) && !isTreeNode(q);

  const pArr = binaryTreeToArray(p);
  const qArr = binaryTreeToArray(q);
  if (pArr.length !== qArr.length) {
    return false;
  }
  return pArr.every((item, i) => item === qArr[i]);
};

/**
 * Solution 2: recursively compare nodes of same pos for both trees (aka dfs)
 *
 * "N" is min node count of 2 trees
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
export const recursion = isSameTree;

/**
 * Lessons:
   1. Recusion is beautiful, it's graceful for problem that can be divided into same atom.
 */
