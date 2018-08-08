/**
 * Problem: https://leetcode.com/problems/minimum-depth-of-binary-tree/
    Given a binary tree, find its minimum depth. The minimum depth is the number of nodes along the
    shortest path from the root node down to the nearest leaf node.

 * Example 1:    root
                /  \
               l1  r1
              /
             l2
     Binary tree like above will return 1.

 * @param {TreeNode} root
 * @return {number}

 * Analysis: we need to traverse tree until a leaf node that has shortest path from root is found,
 *  which is essentially a shortest-path problem. So apparently bfs is more suitable and efficient
 *  to handle it.
 */

import { isTreeNode, minDepth } from "../_.general/binaryTree";

/**
 * Solution 1: Use bfs/level-order traveral to find
 *
 * "N" is Node count
 * Time complexity: O(1 ~ N)
 * Space complexity: O(1 ~ N)
 */
export const bfs = (root) => {
  if (!isTreeNode(root)) return 0;

  const nodeQueue = [root];
  let min = 1;

  while (nodeQueue.length > 0) {
    let i = 0;
    const lengthThisDepth = nodeQueue.length;

    while (i < lengthThisDepth) {
      const curNode = nodeQueue.shift();

      if (!isTreeNode(curNode.left) && !isTreeNode(curNode.right)) return min;
      if (isTreeNode(curNode.left)) nodeQueue.push(curNode.left);
      if (isTreeNode(curNode.right)) nodeQueue.push(curNode.right);

      i += 1;
      // increase min depth at the end of bfs for this depth
      if (i === lengthThisDepth) min += 1;
    }
  }
  return min;
};

/**
 * Solution 2: Use dfs/pre-order traveral to find
 *
 * "N" is Node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
export const dfs = minDepth;

/**
 * Lessons:
   1. bfs is useful in shortest-path problems, it's beneficial to master it.
 */
