/**
 * Definition for a binary tree node:
 */
export class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

/****
 * Generate binary tree base on node values array.
 * Basic idea:
    1. Use parentNodes[node] to keep record;
    2. Search for needed num of child in valArray for each node in parentNodes;
    3. Loop until beyond length of valArray.
 *
 * "N" is node count
 * Time complexity: O(N)
 * Space complexity: O(N)
 *
 * Used in: [102, 104, 111, 226]
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

                if (val) {
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
 * Convert binary tree to array.
 * Basic idea:
    1. loop each depth of the tree in bfs style
    2. check each child node of nodes in queue, only care each node's next generations.
 *
 * "N" is node count
 * Time complexity: O(2N)
 * Space complexity: O(2N)
 *
 * Used in: [226]
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
