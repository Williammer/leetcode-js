/************************************************************************************************************************

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

************************************************************************************************************************/

import { TreeNode, bTreeInOrderTraversalFn } from "../_.util/binaryTree";

export const bTreeInOrderTraversal = {};

/**
 * Solution 1: use dfs
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
bTreeInOrderTraversal.dfs = bTreeInOrderTraversalFn;

/**
 * Solution 2: use iterative
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
bTreeInOrderTraversal.iterative = (root) => {
    const isNode = (node) => {
        return (node instanceof TreeNode) && node.val !== null;
    };

    let result = [],
        _stack = [],
        curNode = root,
        newNode;

    while (isNode(curNode) || _stack.length > 0) {
        if (isNode(curNode)) {
            _stack.push(curNode);
            curNode = curNode.left;
        } else {
            // process a node in stack
            newNode = _stack.pop();
            result.push(newNode.val);
            curNode = newNode.right;
        }
    }

    return result;
};


/************************************************************************************************************************

 * Lessons:
   1. In-order is basically dfs, and dfs is recursion.
   2. One thing to note is that in-order for BST will traverse the tree in sorted order.

************************************************************************************************************************/
