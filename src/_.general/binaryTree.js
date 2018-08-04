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
  const isNode = node => node instanceof TreeNode && node.val !== null;

  if (!isNode(root)) {
    return [];
  }

  const _queue = [root];

  let bTreeArray = [root.val];

  let nullChainCount = 0;

  while (_queue.length > 0) {
    const curDepthLength = _queue.length;

    const curNode = _queue.shift();

    if (isNode(curNode.left)) {
      bTreeArray.push(curNode.left.val);
      _queue.push(curNode.left);

      nullChainCount = 0;
    } else {
      bTreeArray.push(null);
      nullChainCount += 1;
    }

    if (isNode(curNode.right)) {
      bTreeArray.push(curNode.right.val);
      _queue.push(curNode.right);

      nullChainCount = 0;
    } else {
      bTreeArray.push(null);
      nullChainCount += 1;
    }
  }

  if (nullChainCount > 0) {
    bTreeArray = bTreeArray.slice(0, -nullChainCount); // any ways to optimize this? O(n) time complexity here
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
  const isNode = node => node instanceof TreeNode && node.val !== null;

  if (!isNode(root)) {
    return "";
  }

  const _queue = [root];

  let bTreeStr = `${root.val}`;

  let nullChainCount = 0;

  while (_queue.length > 0) {
    const curDepthLength = _queue.length;

    const curNode = _queue.shift();

    if (isNode(curNode.left)) {
      bTreeStr += `,${curNode.left.val}`;
      _queue.push(curNode.left);

      nullChainCount = 0;
    } else {
      bTreeStr += ",";
      nullChainCount += 1;
    }

    if (isNode(curNode.right)) {
      bTreeStr += `,${curNode.right.val}`;
      _queue.push(curNode.right);

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
export const sameTreeFn = (p, q) => {
  const isNode = node => node instanceof TreeNode && node.val !== null;

  if (isNode(p) && isNode(q)) {
    return p.val === q.val ? sameTreeFn(p.left, q.left) && sameTreeFn(p.right, q.right) : false;
  }
  return !!(!isNode(p) && !isNode(q));
};

/**
 * traversal - level order
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * @param {TreeNode} root
 * @return {Array}
 *
 * More on: 102.bTreeLvOrderTraversal
 *
 */
export const bTreeLvOrderTraversalFn = (root) => {
  const isNode = node => node instanceof TreeNode && node.val !== null;

  if (!isNode(root)) {
    return [];
  }

  const result = [];

  const _queue = [];

  _queue.push(root);

  while (_queue.length > 0) {
    let i = 0;

    const lengthThisDepth = _queue.length;

    const arrayThisDepth = [];

    while (i < lengthThisDepth) {
      const curNode = _queue.shift();
      arrayThisDepth.push(curNode.val);

      if (isNode(curNode.left)) {
        _queue.push(curNode.left);
      }
      if (isNode(curNode.right)) {
        _queue.push(curNode.right);
      }

      i += 1;
    }

    result.push(arrayThisDepth);
  }

  return result;
};

/**
 * traversal - pre order
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
export const bTreePreOrderTraversalFn = (root) => {
  const isNode = node => node instanceof TreeNode && node.val !== null;

  const result = [];

  const dfsVal = (node) => {
    if (isNode(node)) {
      result.push(node.val);

      if (isNode(node.left)) {
        dfsVal(node.left);
      }
      if (isNode(node.right)) {
        dfsVal(node.right);
      }
    }
  };

  dfsVal(root);

  return result;
};

/**
 * traversal - post order
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
export const bTreePostOrderTraversalFn = (root) => {
  const isNode = node => node instanceof TreeNode && node.val !== null;

  const result = [];

  const dfsVal = (node) => {
    if (isNode(node)) {
      if (isNode(node.left)) {
        dfsVal(node.left);
      }
      if (isNode(node.right)) {
        dfsVal(node.right);
      }

      result.push(node.val);
    }
  };

  dfsVal(root);

  return result;
};

/**
 * traversal - in order
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
export const bTreeInOrderTraversalFn = (root) => {
  const isNode = node => node instanceof TreeNode && node.val !== null;

  const result = [];

  const dfsVal = (node) => {
    if (isNode(node)) {
      if (isNode(node.left)) {
        dfsVal(node.left);
      }

      result.push(node.val);

      if (isNode(node.right)) {
        dfsVal(node.right);
      }
    }
  };

  dfsVal(root);

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
export const bTreeMaxDepthFn = (root) => {
  const isNode = node => node instanceof TreeNode && node.val !== null;

  if (!isNode(root)) {
    return 0;
  }

  return Math.max(bTreeMaxDepthFn(root.left), bTreeMaxDepthFn(root.right)) + 1; // basic recursion pattern, this '+1' is the key.
};

/**
 * binaryTree get min depth
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
export const bTreeMinDepthFn = (root) => {
  const isNode = node => node instanceof TreeNode && node.val !== null;

  if (!isNode(root)) {
    return 0;
  }

  const _queue = [root];

  let minDepth = 1;

  while (_queue.length > 0) {
    const lengthThisDepth = _queue.length;
    let i = 0;

    while (i < lengthThisDepth) {
      const curNode = _queue.shift();

      if (!isNode(curNode.left) && !isNode(curNode.right)) {
        return minDepth;
      }
      if (isNode(curNode.left)) {
        _queue.push(curNode.left);
      }
      if (isNode(curNode.right)) {
        _queue.push(curNode.right);
      }

      i += 1;

      // increase min depth at the end of bfs for this depth
      if (i === lengthThisDepth) {
        minDepth += 1;
      }
    }
  }

  return minDepth;
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
export const invertBTreeFn = (root) => {
  const isNode = node => node instanceof TreeNode && node.val !== null;

  if (!isNode(root)) {
    return [];
  }

  const _queue = [root];

  while (_queue.length > 0) {
    const curNode = _queue.shift();

    let tmp;

    if (isNode(curNode.left) || isNode(curNode.right)) {
      // invert left, right child of each Node
      [curNode.left, curNode.right] = [curNode.right, curNode.left];

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
export const sortedArrayToBSTFn = (nums) => {
  const createNode = val => (typeof val === "number" ? new TreeNode(val) : null);

  const splitArray = (array) => {
    if (!(array && array.length > 0)) {
      return null;
    }

    const arrLen = array.length;

    const lastIdx = arrLen - 1;

    const midIdx = Math.floor(lastIdx / 2);

    const leftArr = arrLen > 2 ? array.slice(0, midIdx) : null;

    const rightArr = arrLen > 1 ? array.slice(midIdx + 1, lastIdx + 1) : null;

    return {
      midVal: array[midIdx],
      leftArr,
      rightArr,
    };
  };

  const splittedArrObject = splitArray(nums);
  if (!splittedArrObject) {
    return null;
  }

  const rootNode = createNode(splittedArrObject.midVal);

  if (splittedArrObject.leftArr) {
    rootNode.left = sortedArrayToBSTFn(splittedArrObject.leftArr);
  }
  if (splittedArrObject.rightArr) {
    rootNode.right = sortedArrayToBSTFn(splittedArrObject.rightArr);
  }

  return rootNode;
};
