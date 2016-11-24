/************************************************************************************************************************

 * Problem: https://leetcode.com/problems/invert-binary-tree/

 * Example 1:
    Invert a binary tree:
		     4
		   /   \
		  2     7
		 / \   / \
		1   3 6   9
	to be:
			 4
		   /   \
		  7     2
		 / \   / \
		9   6 3   1


 * @param {TreeNode} root
 * @return {TreeNode}

 * Analysis: bfs is my first reaction when found the invert is done from top to bottom of the tree.

************************************************************************************************************************/

import { TreeNode } from "../_.util/binaryTree";

export const invertBTree = {};

/**
 * Solution 1: bfs.
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
invertBTree.bfs = (root) => {
    const isNode = (node) => {
        return (node instanceof TreeNode) && node.val !== null;
    };

    if (!isNode(root)) {
        return [];
    }

    let _queue = [root];

    while (_queue.length > 0) {
        let curNode = _queue.shift(),
            tmp;

        if (isNode(curNode.left) || isNode(curNode.right)) {
            // invert left, right child of each Node
            tmp = curNode.left;
            curNode.left = curNode.right;
            curNode.right = tmp;

            if (isNode(curNode.left)) {
                _queue.push(curNode.left);
            }
            if (isNode(curNode.right)) {
                _queue.push(curNode.right);
            }
        }
    }

    return root;
};

/**
 * Solution 2: recursively invert each sub-tree.
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(1) ?
 */
invertBTree.recursion = (root) => {
    const isNode = (node) => {
        return (node instanceof TreeNode) && node.val !== null;
    };

    if (!isNode(root)) {
        return [];
    }

    if (isNode(root.left) || isNode(root.right)) {
        // invert left, right child of each Node
        let tmp = root.left;
        root.left = root.right;
        root.right = tmp;
    }

    if (isNode(root.left)) {
        invertBTree.recursion(root.left);
    }
    if (isNode(root.right)) {
        invertBTree.recursion(root.right);
    }

    return root;
};


/************************************************************************************************************************

 * Lessons:
   1. Observe the pattern then choose the proper way to solve, and always have the problem picture in mind.

************************************************************************************************************************/
