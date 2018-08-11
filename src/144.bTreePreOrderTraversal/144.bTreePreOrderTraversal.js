/**
 * Problem: https://leetcode.com/problems/binary-tree-preorder-traversal/
    Given a binary tree, return the preorder traversal of its nodes' values.

 * Example 1:
      1
      \
       2
      /
      3
  return [1,2,3]

 * @param {TreeNode} root
 * @return {number[]}

 * Analysis: In theory, preorder should be DFS, so we can try that.
 */

import { isTreeNode, preOrderTraversal } from "../_.general/binaryTree";

/**
 * Solution 1: use dfs
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
export const dfs = preOrderTraversal;

/**
 * Solution 2: use iteration
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
export const iteration = (root) => {
  const result = [];
  const nodeStack = [];
  let curNode = root;

  while (isTreeNode(curNode) || nodeStack.length > 0) {
    if (isTreeNode(curNode)) {
      nodeStack.push(curNode);
      result.push(curNode.val);
      curNode = curNode.left;
    } else {
      // process a node in stack
      curNode = nodeStack.pop().right;
    }
  }
  return result;
};

/**
 * Lessons:
   1. preorder is basically dfs, and dfs is basically recursion.
 */
