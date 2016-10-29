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

 * Used in: 104.bTreeMaxDepth
 ***/
export const generatorBinaryTree = (valArray) => {
    if (!(Array.isArray(valArray) && valArray.length > 0 && valArray[0])) {
        return null;
    }

    let rootNode = new TreeNode(valArray[0]),
        arrAnchorIndex = 1,
        parentNodes = [];

    // Push root to parentNodes array.
    parentNodes.push(rootNode);

    while (arrAnchorIndex < valArray.length) {
        let parentNodesIndex = 0,
            curParentNodes = parentNodes;

        parentNodes = []; // reset parentNodes to be used for current loop

        // assign children for parentNodes
        while (parentNodesIndex < curParentNodes.length) {
            let curParentNode = curParentNodes[parentNodesIndex],
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
