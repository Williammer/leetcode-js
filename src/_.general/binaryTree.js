/**
 * Definition for binaryTree node
 */
export class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

export const isTreeNode = (node) => node instanceof TreeNode;
export const isNonEmptyNode = (node) => isTreeNode(node) && node.val !== null;

/**
 * Generate binaryTree base on node values array.
 * Basic idea:
    1. Use parentNodes[node] to keep record;
    2. Search for needed num of child in valArray for each node in parentNodes;
    3. Loop until beyond length of valArray.
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * @param {Array} valArray
 * @return {TreeNode}
 *
 */
export const arrayToBinaryTree = (valArray) => {
  if (!(Array.isArray(valArray) && valArray.length > 0 && valArray[0])) {
    return null;
  }

  const rootNode = new TreeNode(valArray[0]);
  let arrAnchorIndex = 1;
  const parentNodes = [rootNode];

  while (parentNodes.length > 0 && arrAnchorIndex < valArray.length) {
    let parentNodesIndex = 0;
    const curDepthLength = parentNodes.length;

    // assign children for parentNodes
    while (parentNodesIndex < curDepthLength) {
      const curParentNode = parentNodes.shift();
      let childNodesIndex = 0;

      while (childNodesIndex < 2) {
        const val = valArray[arrAnchorIndex];
        let curNode = null;

        if (val !== null) {
          curNode = new TreeNode(val);
          parentNodes.push(curNode); // push non-null nodes to parentNode for next loop
        }

        if (childNodesIndex === 0) {
          curParentNode.left = curNode;
        } else {
          curParentNode.right = curNode;
        }

        childNodesIndex += 1;
        arrAnchorIndex += 1;

        // avoid in vain looping out of valArray's bound
        if (arrAnchorIndex >= valArray.length) {
          return rootNode;
        }
      }
      parentNodesIndex += 1;
    }
  }
  return rootNode;
};

/**
 * Convert binaryTree to array.
 * Basic idea:
    1. loop each depth of the tree in bfs style
    2. check each child node of nodes in queue, only care each node's next generations.
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * @param {TreeNode} root
 * @return {Array}
 *
 */
export const binaryTreeToArray = (root) => {
  if (!isTreeNode(root)) {
    return [];
  }

  const nodeQueue = [root];
  let bTreeArray = [root.val];
  let nullChainCount = 0;

  while (nodeQueue.length > 0) {
    const curNode = nodeQueue.shift();

    if (isTreeNode(curNode.left)) {
      bTreeArray.push(curNode.left.val);
      nodeQueue.push(curNode.left);
      nullChainCount = 0;
    } else {
      bTreeArray.push(null);
      nullChainCount += 1;
    }

    if (isTreeNode(curNode.right)) {
      bTreeArray.push(curNode.right.val);
      nodeQueue.push(curNode.right);
      nullChainCount = 0;
    } else {
      bTreeArray.push(null);
      nullChainCount += 1;
    }
  }

  if (nullChainCount > 0) {
    bTreeArray = bTreeArray.slice(0, -nullChainCount);
    // any ways to optimize this? O(n) time complexity here
  }
  return bTreeArray;
};

/**
 * Convert binaryTree to string.
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * @param {TreeNode} root
 * @return {String}
 *
 * More on: 297.serializeBT
 *
 */
export const binaryTreeToString = (root) => {
  if (!isTreeNode(root)) {
    return "";
  }

  const nodeQueue = [root];
  let bTreeStr = `${root.val}`;
  let nullChainCount = 0;

  while (nodeQueue.length > 0) {
    const curNode = nodeQueue.shift();

    if (isTreeNode(curNode.left)) {
      bTreeStr += `,${curNode.left.val}`;
      nodeQueue.push(curNode.left);
      nullChainCount = 0;
    } else {
      bTreeStr += ",";
      nullChainCount += 1;
    }

    if (isTreeNode(curNode.right)) {
      bTreeStr += `,${curNode.right.val}`;
      nodeQueue.push(curNode.right);
      nullChainCount = 0;
    } else {
      bTreeStr += ",";
      nullChainCount += 1;
    }
  }

  if (nullChainCount > 0) {
    bTreeStr = bTreeStr.slice(0, -nullChainCount);
  }
  return bTreeStr;
};

/**
 * Check if two binaryTrees are equal or not
 *
 * "N" is min node count of 2 trees
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * @param {TreeNode} p, q
 * @return {Boolean}
 *
 * More on: 100.sameTree
 *
 */
export const isSameTree = (p, q) => {
  if (isTreeNode(p) && isTreeNode(q)) {
    return p.val === q.val ? isSameTree(p.left, q.left) && isSameTree(p.right, q.right) : false;
  }
  return !isTreeNode(p) && !isTreeNode(q);
};

/**
 * traversal - level order, this solution is using DFS
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * @param {TreeNode} root
 * @return {Array}
 *
 * More on: 102.bTreelvOrderTraversal
 *
 */
export const lvOrderTraversal = (root) => {
  if (!isTreeNode(root)) return [];

  const result = [];
  const innerDfs = (node, depth) => {
    if (result.length === depth) {
      result.push([]);
    }
    result[depth].push(node.val);

    if (isTreeNode(node.left)) innerDfs(node.left, depth + 1);
    if (isTreeNode(node.right)) innerDfs(node.right, depth + 1);
  };

  innerDfs(root, 0);
  return result;
};

/**
 * traversal - pre order, this solution is using DFS
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * @param {TreeNode} root
 * @return {Array}
 *
 * More on: 144.bTreePreOrderTraversal
 *
 */
export const preOrderTraversal = (root) => {
  const result = [];
  const innerDfs = (node) => {
    if (!isTreeNode(node)) return;

    result.push(node.val);
    if (isTreeNode(node.left)) innerDfs(node.left);
    if (isTreeNode(node.right)) innerDfs(node.right);
  };

  innerDfs(root);
  return result;
};

/**
 * traversal - in order, using DFS
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * @param {TreeNode} root
 * @return {Array}
 *
 * More on: 94.bTreeInOrderTraversal
 *
 */
export const inOrderTraversal = (root) => {
  const result = [];
  const innerDfs = (node) => {
    if (!isTreeNode(node)) return;

    if (isTreeNode(node.left)) innerDfs(node.left);
    result.push(node.val);
    if (isTreeNode(node.right)) innerDfs(node.right);
  };

  innerDfs(root);
  return result;
};

/**
 * traversal - post order, using DFS
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * @param {TreeNode} root
 * @return {Array}
 *
 * More on: 145.bTreePostOrderTraversal
 *
 */
export const postOrderTraversal = (root) => {
  const result = [];
  const innerDfs = (node) => {
    if (!isTreeNode(node)) return;

    if (isTreeNode(node.left)) innerDfs(node.left);
    if (isTreeNode(node.right)) innerDfs(node.right);
    result.push(node.val);
  };

  innerDfs(root);
  return result;
};

/**
 * binaryTree get max depth
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * @param {TreeNode} root
 * @return {Number}
 *
 * More on: 104.bTreeMaxDepth
 *
 */
export const maxDepth = (root) => {
  if (!isTreeNode(root)) return 0;
  // basic recursion pattern, this '+1' is the key.
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

/**
 * binaryTree get min depth, using recursion.
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * @param {TreeNode} root
 * @return {Number}
 *
 * More on: 111.bTreeMinDepth
 *
 */
export const minDepth = (root) => {
  if (!isTreeNode(root)) return 0;

  if (isTreeNode(root.left) && isTreeNode(root.right)) {
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
  }
  return Math.max(minDepth(root.left), minDepth(root.right)) + 1;
};

/**
 * Invert a binaryTree
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 *
 * More on: 226.invertBTree
 *
 */
export const invert = (root) => {
  if (!isTreeNode(root)) return [];

  if (isTreeNode(root.left) || isTreeNode(root.right)) {
    // invert left, right child of each Node
    const tmp = root.left;
    root.left = root.right;
    root.right = tmp;
  }
  if (isTreeNode(root.left)) invert(root.left);
  if (isTreeNode(root.right)) invert(root.right);

  return root;
};

/**
 * Build a BST with sorted array
 *
 * "N" is nums.length
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * @param {Array} nums
 * @return {TreeNode}
 *
 * More on: 108.sortedArrayToBST
 *
 */
export const sortedArrayToBST = (nums) => {
  const createNode = (val) => (typeof val === "number" ? new TreeNode(val) : null);
  const splitArray = (array) => {
    if (!(array && array.length > 0)) return null;

    const arrLen = array.length;
    const midIdx = Math.floor((arrLen - 1) / 2);
    const leftArr = arrLen > 2 ? array.slice(0, midIdx) : null;
    const rightArr = arrLen > 1 ? array.slice(midIdx + 1) : null;

    return {
      midVal: array[midIdx],
      leftArr,
      rightArr,
    };
  };

  const splittedArrObject = splitArray(nums);
  if (!splittedArrObject) return null;

  const rootNode = createNode(splittedArrObject.midVal);
  if (splittedArrObject.leftArr) rootNode.left = sortedArrayToBST(splittedArrObject.leftArr);
  if (splittedArrObject.rightArr) rootNode.right = sortedArrayToBST(splittedArrObject.rightArr);

  return rootNode;
};
