/**
 * Problem: https://leetcode.com/problems/binary-tree-inorder-traversal/
    Given a binary tree, return the inorder traversal of its nodes' values.

 * Example 1:
        1
        \
         2
        /
       3
    return [1,3,2]

 * @param {TreeNode} root
 * @return {number[]}

 * Analysis: In theory, inorder should still be DFS, so we can try that.
 */

import { isTreeNode, inOrderTraversal } from "../_.general/binaryTree";

/**
 * Solution 1: use dfs
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
export const dfs = inOrderTraversal;

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
      curNode = curNode.left;
    } else {
      // process a node in stack
      const { val, right } = nodeStack.pop();
      result.push(val);
      curNode = right;
    }
  }
  return result;
};

/**
 * Lessons:
   1. In-order is basically dfs, and dfs is recursion.
   2. One thing to note is that in-order for BST will traverse the tree in sorted order.
 */
