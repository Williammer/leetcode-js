/************************************************************************************************************************

 * Problem: https://leetcode.com/problems/kth-smallest-element-in-a-bst/
    Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.


 * @param {TreeNode} root
 * @param {number} k
 * @return {number}

 * Analysis: Try in-order, which traverse nodes in sorted order of values.

************************************************************************************************************************/

import { TreeNode, kthSmallInBSTFn } from "../_.util/binaryTree";

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

/**
 * Solution 2: use inOrder iterative - stack can prevent the stackoverflow of recursion.
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
kthSmallInBST.inOrderIter = (root, k) => {
    const isNode = (node) => {
        return (node instanceof TreeNode) && node.val !== null;
    };

    if (!isNode(root) || k <= 0) {
        return undefined;
    }

    let _stack = [],
        curNode = root;

    while (isNode(curNode) || _stack.length > 0) {
        // push curNode and each left node to stack until reach left leaf
        while (isNode(curNode)) {
            _stack.push(curNode);
            curNode = curNode.left;
        }

        // process a node in stack
        curNode = _stack.pop();
        if (--k === 0) {
            return curNode.val;
        }

        // refer to the right node of cur popped node
        curNode = curNode.right;
    }
};

/**
 * Solution 3: use binary search
 *
 * "N" is node count
 * Time complexity: O(logN)
 * Space complexity: O(logN)
 */
kthSmallInBST.binarySearch = kthSmallInBSTFn;


/************************************************************************************************************************

 * Lessons:
   1. in-order for BST will traverse the tree in sorted order.
   2. the iterative in-order traverse is delicated, with using 'while' and 'stack' to full power to fullfill recursion.
   3. the count of a node & its child is a useful derived data.

************************************************************************************************************************/
