/**
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

 */

import { TreeNode, binaryTreeToString, arrayToBinaryTree } from "../_.util/binaryTree";

export const serializeBT = {};

/**
 * Solution 1: Just bfs it and convert it to string
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
serializeBT.serialize = binaryTreeToString;

serializeBT.deserialize = (data) => {
  const inputArray = data.split(",").map(val => (val === "" ? null : Number(val)));

  return arrayToBinaryTree(inputArray);
};


/**
 * Lessons:
   1. Compression is about converting the form of the data (structure), which is deep.

 */
