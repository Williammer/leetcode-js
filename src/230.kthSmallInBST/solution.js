/************************************************************

 * Problem: https://leetcode.com/problems/kth-smallest-element-in-a-bst/
    Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.


 * @param {TreeNode} root
 * @param {number} k
 * @return {number}

 * Analysis: Try in-order, which traverse nodes in sorted order of values.

************************************************************/

import { TreeNode } from "../_.util/binaryTree";

export const kthSmallInBST = {};

/**
 * Solution 1: use inOrder recusion
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
kthSmallInBST.inOrder = (root, k) => {
    let i = 1,
        result;
    const isNode = (node) => {
            return (node instanceof TreeNode) && node.val !== null;
        },
        dfsVal = (node) => {
            if (i > k) {
                return;
            }

            if (isNode(node)) {
                if (isNode(node.left)) {
                    dfsVal(node.left);
                }

                if (i === k) {
                    result = node.val;
                    i++;
                    return;
                } else {
                    i++;
                }

                if (isNode(node.right)) {
                    dfsVal(node.right);
                }
            }
        };

    if (!isNode(root)) {
        return undefined;
    }

    dfsVal(root);

    return result;
};


/************************************************************

 * Lessons:
   1. in-order for BST will traverse the tree in sorted order.

************************************************************/
