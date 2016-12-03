/************************************************************

 * Problem: https://leetcode.com/problems/binary-tree-postorder-traversal/
    Given a binary tree, return the post-order traversal of its nodes' values.

 * Example 1:
        1
        \
         2
        /
       3
    return [3,2,1]

 * @param {TreeNode} root
 * @return {number[]}

 * Analysis: In theory, postorder should still be DFS, so we can try that.

************************************************************/

import { TreeNode } from "../_.util/binaryTree";

export const bTreePostOrderTraversal = {};

/**
 * Solution 1: use dfs
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
bTreePostOrderTraversal.dfs = (root) => {
    const isNode = (node) => {
            return (node instanceof TreeNode) && node.val !== null;
        },
        result = [],
        dfsVal = (node) => {
            if (isNode(node)) {
                if (isNode(node.left)) {
                    dfsVal(node.left);
                }
                if (isNode(node.right)) {
                    dfsVal(node.right);
                }

                result.push(node.val);
            }
        };

    dfsVal(root);

    return result;
};


/************************************************************

 * Lessons:
   1. post-order is basically dfs, and dfs is recursion.

************************************************************/
