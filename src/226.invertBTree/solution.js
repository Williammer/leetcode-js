/**
 * Problem: https://leetcode.com/problems/invert-binary-tree/

 * Example 1:
    Invert a binary tree:
             4
           /   \
          2     7
         / \   / \
        1   3 6   9
    to be:
             4
           /   \
          7     2
         / \   / \
        9   6 3   1

 * @param {TreeNode} root
 * @return {TreeNode}

 * Analysis: bfs is my first reaction when found the invert is done from top to bottom of the tree.
 */

import { isTreeNode, invert } from "../_.general/binaryTree";

/**
 * Solution 1: bfs.
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
export const bfs = (root) => {
  if (!isTreeNode(root)) return [];

  const nodeQueue = [root];
  while (nodeQueue.length > 0) {
    const curNode = nodeQueue.shift();

    if (isTreeNode(curNode.left) || isTreeNode(curNode.right)) {
      // invert left, right child of each Node
      [curNode.left, curNode.right] = [curNode.right, curNode.left];

      if (isTreeNode(curNode.left)) nodeQueue.push(curNode.left);
      if (isTreeNode(curNode.right)) nodeQueue.push(curNode.right);
    }
  }
  return root;
};

/**
 * Solution 2: recursively invert each sub-tree.
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * Because of recursion, O(h) function calls will be placed on the stack in the worst case, where h
 *  is the height of the tree. And because h ∈ O(n), the space complexity is O(n).
 */
export const recursion = invert;

/**
 * Lessons:
   1. Observe the pattern then choose the proper way to solve, and always have the problem picture
    in mind.
 */
