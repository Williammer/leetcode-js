/** **********************************************************************************************************************

 * Problem: https://leetcode.com/problems/sum-of-left-leaves/
    Find the sum of all left leaves in a given binary tree.

 * Example 1:
    3
   / \
  9  20
    /  \
   15   7
There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.


 * @param {TreeNode} root
 * @return {number}

 * Analysis: Easy to do it with bfs/dfs.

*********************************************************************************************************************** */


import { TreeNode } from "../_.util/binaryTree";

export const sumLeftLeaves = {};


/**
 * Solution 1: Use dfs traveral to find and sum
 *
 * "N" is Node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
sumLeftLeaves.dfs = (root) => {
  const isNode = node => (node instanceof TreeNode) && node.val !== null;


  const isLeaf = node => isNode(node) && !isNode(node.left) && !isNode(node.right);

  let sum = 0;

  const getSum = (node) => {
    if (!isNode(node)) {
      return 0;
    }

    if (isNode(node.left)) {
      if (isLeaf(node.left)) {
        sum += node.left.val;
      } else {
        getSum(node.left);
      }
    }
    if (isNode(node.right) && !isLeaf(node.right)) {
      getSum(node.right);
    }
  };

  getSum(root);

  return sum;
};

/**
 * Solution 2: Use bfs/level-order traveral to find
 *
 * "N" is Node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
sumLeftLeaves.bfs = (root) => {
  const isNode = node => (node instanceof TreeNode) && node.val !== null;


  const isLeaf = node => isNode(node) && !isNode(node.left) && !isNode(node.right);

  if (!isNode(root)) {
    return 0;
  }

  const _queue = [root];


  let sum = 0;

  while (_queue.length > 0) {
    const curNode = _queue.shift();

    if (isNode(curNode.left)) {
      if (isLeaf(curNode.left)) {
        sum += curNode.left.val;
      } else {
        _queue.push(curNode.left);
      }
    }

    if (isNode(curNode.right) && !isLeaf(curNode.right)) {
      _queue.push(curNode.right);
    }
  }

  return sum;
};


/** **********************************************************************************************************************

 * Lessons:
   1. Yet another bfs/dfs BT problem.

*********************************************************************************************************************** */
