import { getBinaryTreeFromArray } from "../../src/_.util/binaryTree";
import { bTreeMinDepth } from "../../src/111.bTreeMinDepth/solution";

describe("# Problem 111 - Given a binary tree, find its minimum depth..", () => {

    describe("Solution 1: Use bfs/level-order traversal", () => {
        it("[] ----> minDepth: 0 ", () => {
            const array = [];
            const tree = getBinaryTreeFromArray(array);

            const minDepth = bTreeMinDepth.bfs(tree);
            expect(minDepth).toEqual(0);
        });

        it("[1] ----> minDepth: 1 ", () => {
            const array = [1];
            const tree = getBinaryTreeFromArray(array);

            const minDepth = bTreeMinDepth.bfs(tree);
            expect(minDepth).toEqual(1);
        });

        it("[1, null, null, 1, 2, 3, 4] ----> minDepth: 1 ", () => {
            const array = [1, null, null, 1, 2, 3, 4];
            const tree = getBinaryTreeFromArray(array);

            const minDepth = bTreeMinDepth.bfs(tree);
            expect(minDepth).toEqual(1);
        });

        it("[1, 2, 3, null, 4, 5] ----> minDepth: 3 ", () => {
            const array = [1, 2, 3, null, 4, 5];
            const tree = getBinaryTreeFromArray(array);

            const minDepth = bTreeMinDepth.bfs(tree);
            expect(minDepth).toEqual(3);
        });

        it("[1, 2, 3, null, 4, 5, null, 6, 7] ----> minDepth: 3 ", () => {
            const array = [1, 2, 3, null, 4, 5, 6, 7];
            const tree = getBinaryTreeFromArray(array);

            const minDepth = bTreeMinDepth.bfs(tree);
            expect(minDepth).toEqual(3);
        });
    });

});
