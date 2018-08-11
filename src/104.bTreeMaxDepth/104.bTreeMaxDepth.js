/**
 * Problem: https://leetcode.com/problems/maximum-depth-of-binary-tree/
    Given a binary tree, find its maximum depth.
    The maximum depth is the number of nodes along the longest path from the root node down to the
      farthest leaf node.

 * Definition for a binary tree node:
    function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
    }

 * Example 1:    root
                /  \
               l1  r1
              /
             l2
     Binary tree like above will return 2.

 * @param {TreeNode} root
 * @return {number}

 * Analysis: Traverse is surely needed, dfs(pre-order traverse) and bfs(level-order traverse) are
    available options; another main problem to solve is record and calculate the maxDepth, so we can
    record each parentNode's depth before dfs into its sub trees.
 */

import { isTreeNode, maxDepth } from "../_.general/binaryTree";

/**
 * Solution 1: Use dfs/preorder traversal and record the depth of each node before recursion to its
 *  sub trees.
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
export const dfsFat = (root) => {
  if (!isTreeNode(root)) return 0;

  const nodeDepths = new WeakMap();
  let max = 1;

  const dfs = (node) => {
    const curDepth = nodeDepths.get(node);

    if (isTreeNode(node.left) || isTreeNode(node.right)) {
      if (isTreeNode(node.left)) {
        nodeDepths.set(node.left, curDepth + 1);
        dfs(node.left);
      }

      if (isTreeNode(node.right)) {
        nodeDepths.set(node.right, curDepth + 1);
        dfs(node.right);
      }
    } else if (max < curDepth) {
      max = curDepth;
    }
  };
  nodeDepths.set(root, max);
  dfs(root);

  return max;
};

/**
 * Solution 2: Super concise dfs recursion.
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
export const dfs = maxDepth;

/**
 * Solution 3: Use bfs/level-order traversal
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
export const bfs = (root) => {
  if (!isTreeNode(root)) return 0;

  let max = 0;
  const nodeQueue = [];
  nodeQueue.push(root);

  while (nodeQueue.length > 0) {
    let i = 0;
    max += 1;
    const lenThisDepth = nodeQueue.length;

    // loop nodes of each depth
    while (i < lenThisDepth) {
      const curNode = nodeQueue.shift();
      if (isTreeNode(curNode.left)) nodeQueue.push(curNode.left);
      if (isTreeNode(curNode.right)) nodeQueue.push(curNode.right);
      i += 1;
    }
  }
  return max;
};

/**
 * Lessons:
   1. Try to consider if it's possible to recursion the function itself with the basic pattern to
    achieve super simplicity.
   2. Dynamic programming with loop is powerful by making well-designed terminate conditions.
 */
