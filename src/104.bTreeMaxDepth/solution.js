/************************************************************

 * Problem: https://leetcode.com/problems/maximum-depth-of-binary-tree/
    Given a binary tree, find its maximum depth.
    The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 * Definition for a binary tree node:
    function TreeNode(val) {
        this.val = val;
        this.left = this.right = null;
    }

 * Example 1:    root
                /  \
               l1  r1
              /
             l2
     Binary tree like above will return 2.

 * @param {TreeNode} root
 * @return {number}

 * Analysis: Traverse is surely needed, dfs(pre-order traverse) and bfs(level-order traverse) are available options;
    another main problem to solve is record and calculate the maxDepth, so we can record each parentNode's depth before dfs into its sub trees.

************************************************************/


import { TreeNode } from "../_.util/binaryTree";

export const bTreeMaxDepth = {};

/**
 * Solution 1: Use dfs/preorder traversal and record the depth of each node before recursion to its sub trees.
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
bTreeMaxDepth.dfsFat = (root) => {
    const isNode = (node) => {
        return (node instanceof TreeNode) && node.val !== null;
    };

    if (!root || !isNode(root)) {
        return 0;
    }

    let nodeDepths = new WeakMap(),
        maxDepth = 1;

    const dfs = (node) => {
        const curDepth = nodeDepths.get(node);

        if (isNode(node.left) || isNode(node.right)) {
            if (isNode(node.left)) {
                nodeDepths.set(node.left, curDepth + 1);
                dfs(node.left);
            }

            if (isNode(node.right)) {
                nodeDepths.set(node.right, curDepth + 1);
                dfs(node.right);
            }
        } else {
            if (maxDepth < curDepth) {
                maxDepth = curDepth;
            }
        }
    };

    nodeDepths.set(root, maxDepth);
    dfs(root);

    return maxDepth;
};

/**
 * Solution 2: Super concise dfs recursion.
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
bTreeMaxDepth.dfs = (root) => {
    const isNode = (node) => {
        return (node instanceof TreeNode) && node.val !== null;
    };

    if (!root || !isNode(root)) {
        return 0;
    }

    return Math.max(bTreeMaxDepth.bfs(root.left), bTreeMaxDepth.bfs(root.right)) + 1; // basic recursion pattern, this '+1' is the key.

};

/**
 * Solution 3: Use bfs/level-order traversal
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
bTreeMaxDepth.bfs = (root) => {
    const isNode = (node) => {
            return (node instanceof TreeNode) && node.val !== null;
        };

    if (!root || !isNode(root)) {
        return 0;
    }

    let _queue = [],
        maxDepth = 0;

    _queue.push(root);

    while (_queue.length > 0) {
        let i = 0,
            lenThisDepth = _queue.length;

        maxDepth++;

        // loop nodes of each depth
        while (i < lenThisDepth) {
            let curNode = _queue.shift();

            if (isNode(curNode.left)) {
                _queue.push(curNode.left);
            }
            if (isNode(curNode.right)) {
                _queue.push(curNode.right);
            }

            i++;
        }
    }

    return maxDepth;
};


/************************************************************

 * Lessons:
   1. Try to consider if it's possible to recursion the function itself with the basic pattern to achieve super simplicity.
   2. Dynamic programming with loop is powerful by making well-designed terminate conditions.

************************************************************/
