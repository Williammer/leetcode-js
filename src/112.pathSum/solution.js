/**
 * Problem: https://leetcode.com/problems/path-sum/
    Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

 * Example:
	Given the below binary tree and sum = 22,
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
	return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.


 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}

 * Analysis: Pre-order dfs can be helpful for finding the path info.
 	And since this problem is about root-to-leaf path, we can replace values of each sub-node with root2node value sum.

 */

import { TreeNode } from "../_.util/binaryTree";

export const pathSum = {};

/**
 * Solution 1: use dfs and reduce node values from root to leaf
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
pathSum.dfsReducer = (root, sum) => {
  const isNode = node => (node instanceof TreeNode) && node.val !== null;


  const isLeaf = node => isNode(node) && !isNode(node.left) && !isNode(node.right);


  const dfsVal = (node) => {
    if (isNode(node)) {
      if (isLeaf(node) && node.val === sum) {
        return true;
      }

      if (isNode(node.left)) {
        node.left.val += node.val; // accumulate path sum on each node
        if (isLeaf(node.left) && node.left.val === sum || dfsVal(node.left)) {
          return true;
        }
      }

      if (isNode(node.right)) {
        node.right.val += node.val; // accumulate path sum on each node
        if (isLeaf(node.right) && node.right.val === sum || dfsVal(node.right)) {
          return true;
        }
      }
    }
  };

  return !!dfsVal(root);
};

/**
 * Solution 2: use dfs and sum minus which is more concise
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
pathSum.dfs = (root, sum) => {
  const isNode = node => (node instanceof TreeNode) && node.val !== null;


  const isLeaf = node => isNode(node) && !isNode(node.left) && !isNode(node.right);

  if (!isNode(root)) {
    return false;
  }
  if (isLeaf(root)) {
    return root.val === sum;
  }

  return pathSum.dfs(root.left, sum - root.val) || pathSum.dfs(root.right, sum - root.val);
};


/**
 * Lessons:
   1. Reduce node values to get path Sum.
   2. Minus sum to match node values.

 */
