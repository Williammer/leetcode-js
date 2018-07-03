/**
 * Problem: https://leetcode.com/problems/serialize-and-deserialize-bst/
    Serialization is the process of converting a data structure or object into a sequence of bits,
     so that it can be stored in a file or memory buffer.
    Design an algorithm to serialize and deserialize a BST, the encoded string should be as compact as possible.

   [Serialize]
 * @param {TreeNode} root
 * @return {string}

   [Deserialize]
 * @param {string} data
 * @return {TreeNode}

 * Analysis: This problem is to convert the representation of a BST.
    We know that BST can be Object or Array, we can explore other possible conversions like array->string->encode(str)...

 */

import { TreeNode, binaryTreeToString, arrayToBinaryTree } from "../_.util/binaryTree";

export const serializeBST = {};

/**
 * Solution 1: Just convert it to array
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
serializeBST.serialize = binaryTreeToString;

serializeBST.deserialize = (data) => {
  const inputArray = data.split(",").map(val => (val === "" ? null : Number(val)));

  return arrayToBinaryTree(inputArray);
};


/**
 * Lessons:
   1. What applies to BT also applies to BST.

 */
