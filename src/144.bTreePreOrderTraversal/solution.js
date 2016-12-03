/************************************************************

 * Problem: https://leetcode.com/problems/binary-tree-preorder-traversal/
    Given a binary tree, return the preorder traversal of its nodes' values.

 * Example 1:
	    1
	    \
	     2
	    /
	   3
	return [1,2,3]

 * @param {TreeNode} root
 * @return {number[]}

 * Analysis: In theory, preorder should be DFS, so we can try that.

************************************************************/

import { TreeNode } from "../_.util/binaryTree";

export const bTreePreOrderTraversal = {};

/**
 * Solution 1: use dfs
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
bTreePreOrderTraversal.dfs = (root) => {
    const isNode = (node) => {
            return (node instanceof TreeNode) && node.val !== null;
        },
        result = [],
        dfsVal = (node) => {
            if (isNode(node)) {
                result.push(node.val);

                if (isNode(node.left)) {
                	dfsVal(node.left);
                }
                if (isNode(node.right)) {
                	dfsVal(node.right);
                }
            }
        };

    dfsVal(root);

    return result;
};


/************************************************************

 * Lessons:
   1. preorder is basically dfs, and dfs is recursion.

************************************************************/
