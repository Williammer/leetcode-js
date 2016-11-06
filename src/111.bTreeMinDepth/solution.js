/************************************************************

 * Problem: https://leetcode.com/problems/minimum-depth-of-binary-tree/
    Given a binary tree, find its minimum depth. The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

 * Example 1:    root
                /  \
               l1  r1
              /
             l2
     Binary tree like above will return 1.

 * @param {TreeNode} root
 * @return {number}

 * Analysis: we need to traverse tree until a leaf node that has shortest path from root is found, which is essentially a shortest-path problem. So apparently bfs is more suitable and efficient to handle it.

************************************************************/


import { TreeNode } from "../_.util/binaryTree";

export const bTreeMinDepth = {};

/**
 * Solution 1: Use bfs/level-order traveral to find
 *
 * "N" is Node count
 * Time complexity: O(1 ~ N)
 * Space complexity: O(1 ~ N)
 */
bTreeMinDepth.bfs = (root) => {
    const isNode = (node) => {
        return (node instanceof TreeNode) && node.val !== null;
    };

    if (!root || !isNode(root)) {
        return 0;
    }

    let _queue = [root],
        minDepth = 1;

    while (_queue.length > 0) {
        const lengthThisDepth = _queue.length;
        let i = 0;

        while (i < lengthThisDepth) {
            const curNode = _queue.shift();

            if (!isNode(curNode.left) && !isNode(curNode.right)) {
                return minDepth;
            } else {
                if (isNode(curNode.left)) {
                    _queue.push(curNode.left);
                }
                if (isNode(curNode.right)) {
                    _queue.push(curNode.right);
                }
            }

            i++;

            // increase min depth at the end of bfs for this depth
            if (i === lengthThisDepth) {
                minDepth++;
            }
        }
    }

    return minDepth;
};

/**
 * Solution 2: Use dfs/pre-order traveral to find
 *
 * "N" is Node count
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
bTreeMinDepth.dfs = (root) => {
    const isNode = (node) => {
        return (node instanceof TreeNode) && node.val !== null;
    };

    if (!root || !isNode(root)) {
        return 0;
    }

    if (root.left && isNode(root.left) && root.right && isNode(root.right)) {
    	return Math.min(bTreeMinDepth.dfs(root.left), bTreeMinDepth.dfs(root.right)) + 1;
    } else {
    	return Math.max(bTreeMinDepth.dfs(root.left), bTreeMinDepth.dfs(root.right)) + 1;
    }
};


/************************************************************

 * Lessons:
   1. bfs is useful in shortest-path problems, it's beneficial to master it.

************************************************************/
