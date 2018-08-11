/**
 * Problem: https://leetcode.com/problems/binary-tree-level-order-traversal/
    Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to
      right, level by level).

 * Example 1:
    Given binary tree [3,9,20,null,null,15,7],
      3
     / \
    9  20
      /  \
     15   7
  return its level order traversal as:
  [
    [3],
    [9,20],
    [15,7]
  ]

 * @param {TreeNode} root
 * @return {number[][]}

 * Analysis: This is similar to the bfs solution in 104.maxDepth problem.
 */

import { isTreeNode, lvOrderTraversal } from "../_.general/binaryTree";

/**
 * Solution 1: Use bfs to traverse, accompanied by a node queue.
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
export const bfs = (root) => {
  if (!isTreeNode(root)) return [];
  const result = [];
  const nodeQueue = [];

  nodeQueue.push(root);

  while (nodeQueue.length > 0) {
    const lengthThisDepth = nodeQueue.length;
    const arrayThisDepth = [];

    for (let i = 0; i < lengthThisDepth; i += 1) {
      const curNode = nodeQueue.shift();
      arrayThisDepth.push(curNode.val);

      if (isTreeNode(curNode.left)) nodeQueue.push(curNode.left);
      if (isTreeNode(curNode.right)) nodeQueue.push(curNode.right);
    }
    result.push(arrayThisDepth);
  }
  return result;
};

/**
 * Solution 2: Use dfs while keeping the depth state.
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
export const dfs = lvOrderTraversal;

/**
 * Lessons:
  1. level-order traversal is in many ways similar to bfs. One key for bfs is to use a reusable
    queue to loop over nodes of each depth.
  2. dfs can also achieve it, just need to keep track of depth state, which corresponds to each
    result array index - 1.
 */
