/** **********************************************************************************************************************

 * Problem: https://leetcode.com/problems/binary-tree-level-order-traversal/
    Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

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

*********************************************************************************************************************** */


import { TreeNode, bTreeLvOrderTraversalFn } from "../_.util/binaryTree";

export const bTreeLvOrderTraversal = {};

/**
 * Solution 1: Use bfs to traverse.
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
bTreeLvOrderTraversal.bfs = bTreeLvOrderTraversalFn;

/**
 * Solution 2: Use dfs while keeping the depth state.
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
bTreeLvOrderTraversal.dfs = (root) => {
  const isNode = node => (node instanceof TreeNode) && node.val !== null;

  if (!isNode(root)) {
    return [];
  }

  const result = [];

  const dfs = (node, depth) => {
    if (result.length === depth) {
      // add new depth array when it's on the limit of result array.
      result.push([]);
    }

    result[depth].push(node.val);

    if (isNode(node.left)) {
      dfs(node.left, depth + 1);
    }
    if (isNode(node.right)) {
      dfs(node.right, depth + 1);
    }
  };

  dfs(root, 0);

  return result;
};


/** **********************************************************************************************************************

 * Lessons:
	1. level-order traversal is in many ways similar to bfs. One key for bfs is to use a reusable queue to loop over nodes of each depth.
	2. dfs can also achieve it, just need to keep track of depth state, which corresponds to each result array index - 1.

*********************************************************************************************************************** */
