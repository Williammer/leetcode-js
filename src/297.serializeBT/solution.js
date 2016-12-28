/************************************************************************************************************************

 * Problem: https://leetcode.com/problems/serialize-and-deserialize-bst/
    Serialization is the process of converting a data structure or object into a sequence of bits,
     so that it can be stored in a file or memory buffer.
    Design an algorithm to serialize and deserialize a BinaryTree, the encoded string should be as compact as possible.

   [Serialize]
 * @param {TreeNode} root
 * @return {string}

   [Deserialize]
 * @param {string} data
 * @return {TreeNode}

 * Analysis: This problem is to convert the representation of a BinaryTree.
    We know that BinaryTree can be Object or Array, we can explore other possible conversions.

************************************************************************************************************************/

import { TreeNode, binaryTreeToArray, arrayToBinaryTree } from "../_.util/binaryTree";

export const serializeBT = {};

/**
 * Solution 1: Just convert it to array
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
serializeBT.serialize = (root) => {
    return binaryTreeToArray(root);
};

serializeBT.deserialize = (data) => {
    return arrayToBinaryTree(data);
};


/************************************************************************************************************************

 * Lessons:
   1. 

************************************************************************************************************************/
