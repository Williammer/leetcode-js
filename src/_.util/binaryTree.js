/**
 * Definition for a binaryTree node:
 */
export class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

/****
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
 ***/
export const arrayToBinaryTree = (valArray) => {
    if (!(Array.isArray(valArray) && valArray.length > 0 && valArray[0])) {
        return null;
    }

    let rootNode = new TreeNode(valArray[0]),
        arrAnchorIndex = 1,
        parentNodes = [rootNode];

    while (parentNodes.length > 0 && arrAnchorIndex < valArray.length) {
        let parentNodesIndex = 0,
            curDepthLength = parentNodes.length;

        // assign children for parentNodes
        while (parentNodesIndex < curDepthLength) {
            let curParentNode = parentNodes.shift(),
                childNodesIndex = 0;

            while (childNodesIndex < 2) {
                let val = valArray[arrAnchorIndex],
                    curNode = null;

                if (val !== null) {
                    curNode = new TreeNode(val);
                    parentNodes.push(curNode); // push non-null nodes to parentNode for next loop
                }

                if (childNodesIndex === 0) {
                    curParentNode.left = curNode;
                } else {
                    curParentNode.right = curNode;
                }

                childNodesIndex++;
                arrAnchorIndex++;

                // avoid in vain looping out of valArray's bound
                if (arrAnchorIndex >= valArray.length) {
                    return rootNode;
                }
            }

            parentNodesIndex++;
        }
    }

    return rootNode;
};

/****
 * Convert binaryTree to array.
 * Basic idea:
    1. loop each depth of the tree in bfs style
    2. check each child node of nodes in queue, only care each node's next generations.
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 ***/
export const binaryTreeToArray = (root) => {
    const isNode = (node) => {
        return (node instanceof TreeNode) && node.val !== null;
    };

    if (!isNode(root)) {
        return [];
    }

    let _queue = [root],
        bTreeArray = [root.val],
        nullChainCount = 0;

    while (_queue.length > 0) {
        let curDepthLength = _queue.length,
            curNode = _queue.shift();

        if (isNode(curNode.left)) {
            bTreeArray.push(curNode.left.val);
            _queue.push(curNode.left);

            nullChainCount = 0;
        } else {
            bTreeArray.push(null);
            nullChainCount++;
        }

        if (isNode(curNode.right)) {
            bTreeArray.push(curNode.right.val);
            _queue.push(curNode.right);

            nullChainCount = 0;
        } else {
            bTreeArray.push(null);
            nullChainCount++;
        }
    }

    if (nullChainCount > 0) {
        bTreeArray = bTreeArray.slice(0, -nullChainCount); // any ways to optimize this? O(n) time complexity here
    }

    return bTreeArray;
};

/****
 * Check if two binaryTrees are equal or not
 *
 * "N" is min node count of 2 trees
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * More on: 100.sameTree
 *
 ***/
export const sameTreeFn = (p, q) => {
    const isNode = (node) => {
        return (node instanceof TreeNode) && node.val !== null;
    };

    if (isNode(p) && isNode(q)) {
        return p.val === q.val ? (sameTreeFn(p.left, q.left) && sameTreeFn(p.right, q.right)) : false;
    } else {
        return (!isNode(p) && !isNode(q)) ? true : false;
    }
};

/****
 * traversal - level order
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * More on: 102.bTreeLvOrderTraversal
 *
 ***/
export const bTreeLvOrderTraversalFn = (root) => {
    const isNode = (node) => {
        return (node instanceof TreeNode) && node.val !== null;
    };

    if (!isNode(root)) {
        return [];
    }

    let result = [],
        _queue = [];

    _queue.push(root);

    while (_queue.length > 0) {
        let i = 0,
            lengthThisDepth = _queue.length,
            arrayThisDepth = [];

        while (i < lengthThisDepth) {
            let curNode = _queue.shift();
            arrayThisDepth.push(curNode.val);

            if (isNode(curNode.left)) {
                _queue.push(curNode.left);
            }
            if (isNode(curNode.right)) {
                _queue.push(curNode.right);
            }

            i++;
        }

        result.push(arrayThisDepth);
    }

    return result;
};

/****
 * traversal - pre order
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * More on: 144.bTreePreOrderTraversal
 *
 ***/
export const bTreePreOrderTraversalFn = (root) => {
    const isNode = (node) => {
            return (node instanceof TreeNode) && node.val !== null;
        },
        result = [],
        dfsVal = (node) => {
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

/****
 * traversal - post order
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * More on: 145.bTreePostOrderTraversal
 *
 ***/
export const bTreePostOrderTraversalFn = (root) => {
    const isNode = (node) => {
            return (node instanceof TreeNode) && node.val !== null;
        },
        result = [],
        dfsVal = (node) => {
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

/****
 * traversal - in order
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * More on: 94.bTreeInOrderTraversal
 *
 ***/
export const bTreeInOrderTraversalFn = (root) => {
    const isNode = (node) => {
            return (node instanceof TreeNode) && node.val !== null;
        },
        result = [],
        dfsVal = (node) => {
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

/****
 * binaryTree get max depth
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * More on: 104.bTreeMaxDepth
 *
 ***/
export const bTreeMaxDepthFn = (root) => {
    const isNode = (node) => {
        return (node instanceof TreeNode) && node.val !== null;
    };

    if (!isNode(root)) {
        return 0;
    }

    return Math.max(bTreeMaxDepthFn(root.left), bTreeMaxDepthFn(root.right)) + 1; // basic recursion pattern, this '+1' is the key.

};

/****
 * binaryTree get min depth
 *
 * "N" is node count
 * Time complexity: O(1 ~ N)
 * Space complexity: O(1 ~ N)
 *
 * More on: 111.bTreeMinDepth
 *
 ***/
export const bTreeMinDepthFn = (root) => {
    const isNode = (node) => {
        return (node instanceof TreeNode) && node.val !== null;
    };

    if (!isNode(root)) {
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

/****
 * Invert a binaryTree
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * More on: 226.invertBTree
 *
 ***/
export const invertBTreeFn = (root) => {
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

/****
 * Build a BST with sorted array
 *
 * "N" is nums.length
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * More on: 108.sortedArrayToBST
 *
 ***/
export const sortedArrayToBSTFn = (nums) => {
    const createNode = (val) => {
            return typeof val === "number" ? new TreeNode(val) : null;
        },
        splitArray = (array) => {
            if (!(array && array.length > 0)) {
                return null;
            }

            const arrLen = array.length,
                lastIdx = arrLen - 1,
                midIdx = Math.floor(lastIdx / 2),
                leftArr = arrLen > 2 ? array.slice(0, midIdx) : null,
                rightArr = arrLen > 1 ? array.slice(midIdx + 1, lastIdx + 1) : null;

            return {
                midVal: array[midIdx],
                leftArr: leftArr,
                rightArr: rightArr
            };
        };

    const splittedArrObject = splitArray(nums);
    if (!splittedArrObject) {
        return null;
    }

    let rootNode = createNode(splittedArrObject.midVal);

    if (splittedArrObject.leftArr) {
        rootNode.left = sortedArrayToBSTFn(splittedArrObject.leftArr);
    }
    if (splittedArrObject.rightArr) {
        rootNode.right = sortedArrayToBSTFn(splittedArrObject.rightArr);
    }

    return rootNode;
};

/****
 * Find the kth smallest element in BST (with binary search).
 *
 * "N" is node count
 * Time complexity: O(logN)
 * Space complexity: O(logN)
 *
 * More on: 230.kthSmallInBST
 *
 ***/
export const kthSmallInBSTFn = (root, k) => {
    const isNode = (node) => {
            return (node instanceof TreeNode) && node.val !== null;
        },
        nodeCount = (node) => {
            if (!isNode(node)) {
                return 0;
            }
            return 1 + nodeCount(node.left) + nodeCount(node.right);
        };

    if (!isNode(root)) {
        return undefined;
    }

    let leftCount = nodeCount(root.left);
    if (k <= leftCount) {
        // within left sub-tree
        return kthSmallInBSTFn(root.left, k);
    } else if (k > leftCount + 1) {
        // within right sub-tree
        return kthSmallInBSTFn(root.right, k - leftCount - 1); // start from right sub-tree
    }

    // within root
    return root.val;
};
