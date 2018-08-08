/**
 * Problem: https://leetcode.com/problems/binary-tree-postorder-traversal/
    Given a binary tree, return the post-order traversal of its nodes' values.

 * Example 1:
        1
        \
         2
        /
       3
    return [3,2,1]

 * @param {TreeNode} root
 * @return {number[]}

 * Analysis: In theory, postorder should still be DFS, so we can try that.
 */

import { isTreeNode, postOrderTraversal } from "../_.general/binaryTree";

/**
 * Solution 1: use dfs
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
export const dfs = postOrderTraversal;

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
      result.unshift(curNode.val);
      curNode = curNode.right;
    } else {
      // process a node in stack
      curNode = nodeStack.pop().left;
    }
  }
  return result;
};

/**
 * Lessons:
   1. post-order is basically dfs, and dfs is recursion.
 */
