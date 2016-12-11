/************************************************************

 * Problem: https://leetcode.com/problems/binary-tree-inorder-traversal/
    Given a binary tree, return the inorder traversal of its nodes' values.

 * Example 1:
        1
        \
         2
        /
       3
    return [1,3,2]

 * @param {TreeNode} root
 * @return {number[]}

 * Analysis: In theory, inorder should still be DFS, so we can try that.

************************************************************/

import { TreeNode } from "../_.util/binaryTree";

export const bTreeInOrderTraversal = {};

/**
 * Solution 1: use dfs
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
bTreeInOrderTraversal.dfs = (root) => {
    const isNode = (node) => {
            return (node instanceof TreeNode) && node.val !== null;
        },
        result = [],
        dfsVal = (node) => {
            if (isNode(node)) {
                if (isNode(node.left)) {
                    dfsVal(node.left);
                }

                result.push(node.val);

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
   1. In-order is basically dfs, and dfs is recursion.
   2. One thing to note is that in-order for BST will traverse the tree in sorted order.

************************************************************/
