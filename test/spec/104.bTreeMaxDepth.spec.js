import { TreeNode, getBinaryTreeFromArray } from "../../src/_.util/binaryTree";
import { bTreeMaxDepth } from "../../src/104.bTreeMaxDepth/solution";

describe("# Problem 104 - Given a binary tree, find its maximum depth.", () => {

    describe("Solution 1: Use dfs/preorder traversal and record the depth of each node before recursion to its sub trees.", () => {
        it("[] ----> maxDepth: 0 ", () => {
            const array = [];
            const tree = getBinaryTreeFromArray(array);

            const maxDepth = bTreeMaxDepth.dfsFat(tree);
            expect(maxDepth).toEqual(0);
        });

        it("[1] ----> maxDepth: 1 ", () => {
            const array = [1];
            const tree = getBinaryTreeFromArray(array);

            const maxDepth = bTreeMaxDepth.dfsFat(tree);
            expect(maxDepth).toEqual(1);
        });

        it("[1, null, null, 1, 2, 3, 4] ----> maxDepth: 1 ", () => {
            const array = [1, null, null, 1, 2, 3, 4];
            const tree = getBinaryTreeFromArray(array);

            const maxDepth = bTreeMaxDepth.dfsFat(tree);
            expect(maxDepth).toEqual(1);
        });

        it("[1, 2, 3, null, 4, 5] ----> maxDepth: 3 ", () => {
            const array = [1, 2, 3, null, 4, 5];
            const tree = getBinaryTreeFromArray(array);

            const maxDepth = bTreeMaxDepth.dfsFat(tree);
            expect(maxDepth).toEqual(3);
        });

        it("[1, 2, 3, null, 4, 5, null, 6, 7] ----> maxDepth: 4 ", () => {
            const array = [1, 2, 3, null, 4, 5, 6, 7];
            const tree = getBinaryTreeFromArray(array);

            const maxDepth = bTreeMaxDepth.dfsFat(tree);
            expect(maxDepth).toEqual(4);
        });
    });

    describe("Solution 2: Use concise dfs/preorder traversal.", () => {
        it("[] ----> maxDepth: 0 ", () => {
            const array = [];
            const tree = getBinaryTreeFromArray(array);

            const maxDepth = bTreeMaxDepth.dfs(tree);
            expect(maxDepth).toEqual(0);
        });

        it("[1] ----> maxDepth: 1 ", () => {
            const array = [1];
            const tree = getBinaryTreeFromArray(array);

            const maxDepth = bTreeMaxDepth.dfs(tree);
            expect(maxDepth).toEqual(1);
        });

        it("[1, null, null, 1, 2, 3, 4] ----> maxDepth: 1 ", () => {
            const array = [1, null, null, 1, 2, 3, 4];
            const tree = getBinaryTreeFromArray(array);

            const maxDepth = bTreeMaxDepth.dfs(tree);
            expect(maxDepth).toEqual(1);
        });

        it("[1, 2, 3, null, 4, 5] ----> maxDepth: 3 ", () => {
            const array = [1, 2, 3, null, 4, 5];
            const tree = getBinaryTreeFromArray(array);

            const maxDepth = bTreeMaxDepth.dfs(tree);
            expect(maxDepth).toEqual(3);
        });

        it("[1, 2, 3, null, 4, 5, null, 6, 7] ----> maxDepth: 4 ", () => {
            const array = [1, 2, 3, null, 4, 5, 6, 7];
            const tree = getBinaryTreeFromArray(array);

            const maxDepth = bTreeMaxDepth.dfs(tree);
            expect(maxDepth).toEqual(4);
        });
    });

    describe("Solution 3: Use bfs/level-order traversal.", () => {
        it("[] ----> maxDepth: 0 ", () => {
            const array = [];
            const tree = getBinaryTreeFromArray(array);

            const maxDepth = bTreeMaxDepth.bfs(tree);
            expect(maxDepth).toEqual(0);
        });

        it("[1] ----> maxDepth: 1 ", () => {
            const array = [1];
            const tree = getBinaryTreeFromArray(array);

            const maxDepth = bTreeMaxDepth.bfs(tree);
            expect(maxDepth).toEqual(1);
        });

        it("[1, null, null, 1, 2, 3, 4] ----> maxDepth: 1 ", () => {
            const array = [1, null, null, 1, 2, 3, 4];
            const tree = getBinaryTreeFromArray(array);

            const maxDepth = bTreeMaxDepth.bfs(tree);
            expect(maxDepth).toEqual(1);
        });

        it("[1, 2, 3, null, 4, 5] ----> maxDepth: 3 ", () => {
            const array = [1, 2, 3, null, 4, 5];
            const tree = getBinaryTreeFromArray(array);

            const maxDepth = bTreeMaxDepth.bfs(tree);
            expect(maxDepth).toEqual(3);
        });

        it("[1, 2, 3, null, 4, 5, null, 6, 7] ----> maxDepth: 4 ", () => {
            const array = [1, 2, 3, null, 4, 5, 6, 7];
            const tree = getBinaryTreeFromArray(array);

            const maxDepth = bTreeMaxDepth.bfs(tree);
            expect(maxDepth).toEqual(4);
        });
    });

});
