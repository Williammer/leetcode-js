/**
 * Problem: https://leetcode.com/problems/minimum-depth-of-binary-tree/
    Given a binary tree, find its minimum depth. The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

 * Example 1:    root
                /  \
               l1  r1
              /
             l2
     Binary tree like above will return 1.

 * @param {TreeNode} root
 * @return {number}

 * Analysis: we need to traverse tree until a leaf node that has shortest path from root is found, which is essentially a shortest-path problem. So apparently bfs is more suitable and efficient to handle it.

 */

import { TreeNode, bTreeMinDepthFn } from "../_.general/binaryTree";

export const bTreeMinDepth = {};

/**
 * Solution 1: Use bfs/level-order traveral to find
 *
 * "N" is Node count
 * Time complexity: O(1 ~ N)
 * Space complexity: O(1 ~ N)
 */
bTreeMinDepth.bfs = bTreeMinDepthFn;

/**
 * Solution 2: Use dfs/pre-order traveral to find
 *
 * "N" is Node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
bTreeMinDepth.dfs = (root) => {
  const isNode = (node) => node instanceof TreeNode && node.val !== null;

  if (!isNode(root)) {
    return 0;
  }

  if (root.left && isNode(root.left) && root.right && isNode(root.right)) {
    return Math.min(bTreeMinDepth.dfs(root.left), bTreeMinDepth.dfs(root.right)) + 1;
  }
  return Math.max(bTreeMinDepth.dfs(root.left), bTreeMinDepth.dfs(root.right)) + 1;
};

/**
 * Lessons:
   1. bfs is useful in shortest-path problems, it's beneficial to master it.

 */
