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

import { TreeNode, invertBTreeFn } from "../_.util/binaryTree";

export const invertBTree = {};

/**
 * Solution 1: bfs.
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
invertBTree.bfs = invertBTreeFn;

/**
 * Solution 2: recursively invert each sub-tree.
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * Because of recursion, O(h) function calls will be placed on the stack in the worst case, where h is the height of the tree.
 *  And because h ∈ O(n), the space complexity is O(n).
 */
invertBTree.recursion = (root) => {
  const isNode = node => node instanceof TreeNode && node.val !== null;

  if (!isNode(root)) {
    return [];
  }

  if (isNode(root.left) || isNode(root.right)) {
    // invert left, right child of each Node
    const tmp = root.left;
    root.left = root.right;
    root.right = tmp;
  }

  if (isNode(root.left)) {
    invertBTree.recursion(root.left);
  }
  if (isNode(root.right)) {
    invertBTree.recursion(root.right);
  }

  return root;
};

/**
 * Lessons:
   1. Observe the pattern then choose the proper way to solve, and always have the problem picture in mind.

 */
