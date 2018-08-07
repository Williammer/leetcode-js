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

import { TreeNode, bTreePostOrderTraversalFn } from "../_.general/binaryTree";

export const bTreePostOrderTraversal = {};

/**
 * Solution 1: use dfs
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
bTreePostOrderTraversal.dfs = bTreePostOrderTraversalFn;

/**
 * Solution 2: use iteration
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
bTreePostOrderTraversal.iteration = (root) => {
  const isNode = (node) => node instanceof TreeNode && node.val !== null;

  const result = [];

  const _stack = [];

  let curNode = root;

  let newNode;

  while (isNode(curNode) || _stack.length > 0) {
    if (isNode(curNode)) {
      _stack.push(curNode);
      result.unshift(curNode.val);
      curNode = curNode.right;
    } else {
      // process a node in stack
      newNode = _stack.pop();
      curNode = newNode.left;
    }
  }

  return result;
};

/**
 * Lessons:
   1. post-order is basically dfs, and dfs is recursion.

 */
