/************************************************************************************************************************

 * Problem: https://leetcode.com/problems/house-robber-iii/
    "all houses in this place forms a binary tree".
    It will automatically contact the police if two directly-linked houses were broken into on the same night.
    Determine the maximum amount of money the thief can rob tonight without alerting the police.

 * Example:
         3
        / \
       2   3
        \   \
         3   1
    Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.

         3
        / \
       4   5
      / \   \
     1   3   1
    Maximum amount of money the thief can rob = 4 + 5 = 9.


 * @param {TreeNode} root
 * @return {number}

 * Analysis: This problem needs to solve the sub-set values recusively.

************************************************************************************************************************/


import { TreeNode } from "../_.util/binaryTree";

export const houseRobberIII = {};

/**
 * Solution 1: memoization
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
houseRobberIII.memo = (root) => {
    const isNode = (node) => {
            return (node instanceof TreeNode) && node.val !== null;
        },
        dpRob = (root, weakMap) => {
            if (!isNode(root)) {
                return 0;
            }
            if (weakMap.has(root)) {
                return weakMap.get(root);
            }

            let value = 0,
                result = 0;
            if (isNode(root.left)) {
                value += dpRob(root.left.left, weakMap) + dpRob(root.left.right, weakMap);
            }
            if (isNode(root.right)) {
                value += dpRob(root.right.left, weakMap) + dpRob(root.right.right, weakMap);
            }

            result = Math.max(root.val + value, dpRob(root.left, weakMap) + dpRob(root.right, weakMap));
            weakMap.set(root, result);
            return result;
        };

    return dpRob(root, new WeakMap());
};

/**
 * Solution 2: recursion with flag(0: rob root, 1: not rob root)
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
houseRobberIII.recursion = (root) => {
    const isNode = (node) => {
            return (node instanceof TreeNode) && node.val !== null;
        },
        dpRob = (root) => {
            if (!isNode(root)) {
                return [0, 0];
            }

            let result = [],
                leftSub = dpRob(root.left),
                rightSub = dpRob(root.right);

            result[0] = root.val + leftSub[1] + rightSub[1];
            result[1] = Math.max(leftSub[0], leftSub[1]) + Math.max(rightSub[0], rightSub[1]);
            return result;
        };

    let result = dpRob(root);
    return Math.max(result[0], result[1]);
};


/************************************************************************************************************************

 * Lessons:
   1. Dynamic programming idea to avoid overlapped subsets with memoization is used here.
   2. Using flag to mark the significant state is very helpful in solving the problem.

************************************************************************************************************************/
