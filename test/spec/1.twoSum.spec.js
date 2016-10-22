import { twoSum } from "../../src/1.twoSum/solution"

describe("# Problem 1 - Two sum (assume that each input would have exactly one solution)", () => {

    // # Solution 1: brutal loop
    describe("Solution 1: brutal loop", () => {
        it("return expected result for even nums array:  [2, 7, 11, 15] & 9 => [0, 1]", () => {
            const nums = [2, 7, 11, 15];
            const target = 9;

            const result = twoSum.brutal(nums, target);
            expect(result).toEqual([0, 1]);
        });

        it("return expected result for odd nums array:  [2, 20, 11, 7, 15] & 9 => [0, 3]", () => {
            const nums = [2, 20, 11, 7, 15];
            const target = 9;

            const result = twoSum.brutal(nums, target);
            expect(result).toEqual([0, 3]);
        });

        it("return undefined if no desired result:  [2, 7, 11, 15] & 8 => undefined", () => {
            const nums = [2, 7, 11, 15];
            const target = 8;

            const result = twoSum.brutal(nums, target);
            expect(result).toBeUndefined();
        });

        it("return undefined if nums is not array", () => {
            const foo = 42,
                bar = "baz",
                wow = undefined,
                much = {},
                fn = () => {},
                test = null;

            const target = 9;

            expect(twoSum.brutal(foo, target)).toBeUndefined();
            expect(twoSum.brutal(bar, target)).toBeUndefined();
            expect(twoSum.brutal(wow, target)).toBeUndefined();
            expect(twoSum.brutal(much, target)).toBeUndefined();
            expect(twoSum.brutal(fn, target)).toBeUndefined();
            expect(twoSum.brutal(test, target)).toBeUndefined();
        });

        it("return undefined if nums is an array with less than 2 values:  [2] & 9 => undefined", () => {
            const nums = [2];
            const target = 9;

            const result = twoSum.brutal(nums, target);
            expect(result).toBeUndefined();
        });

        it("return undefined if target is not a number", () => {
            const foo = [],
                bar = "baz",
                wow = undefined,
                much = {},
                fn = () => {},
                test = null;

            const nums = [2, 7, 11, 15];

            expect(twoSum.brutal(nums, foo)).toBeUndefined();
            expect(twoSum.brutal(nums, bar)).toBeUndefined();
            expect(twoSum.brutal(nums, wow)).toBeUndefined();
            expect(twoSum.brutal(nums, much)).toBeUndefined();
            expect(twoSum.brutal(nums, fn)).toBeUndefined();
            expect(twoSum.brutal(nums, test)).toBeUndefined();
        });
    });


    // # Solution 2: hash
    describe("Solution 2: hash", () => {
        it("return expected result for even nums array:  [2, 7, 11, 15] & 9 => [0, 1]", () => {
            const nums = [2, 7, 11, 15];
            const target = 9;

            const result = twoSum.hash(nums, target);
            expect(result).toEqual([0, 1]);
        });

        it("return expected result for odd nums array:  [2, 20, 11, 7, 15] & 9 => [0, 3]", () => {
            const nums = [2, 20, 11, 7, 15];
            const target = 9;

            const result = twoSum.hash(nums, target);
            expect(result).toEqual([0, 3]);
        });

        it("return undefined if no desired result:  [2, 7, 11, 15] & 8 => undefined", () => {
            const nums = [2, 7, 11, 15];
            const target = 8;

            const result = twoSum.hash(nums, target);
            expect(result).toBeUndefined();
        });

        it("return undefined if nums is not array", () => {
            const foo = 42,
                bar = "baz",
                wow = undefined,
                much = {},
                fn = () => {},
                test = null;

            const target = 9;

            expect(twoSum.hash(foo, target)).toBeUndefined();
            expect(twoSum.hash(bar, target)).toBeUndefined();
            expect(twoSum.hash(wow, target)).toBeUndefined();
            expect(twoSum.hash(much, target)).toBeUndefined();
            expect(twoSum.hash(fn, target)).toBeUndefined();
            expect(twoSum.hash(test, target)).toBeUndefined();
        });

        it("return undefined if nums is an array with less than 2 values:  [2] & 9 => undefined", () => {
            const nums = [2];
            const target = 9;

            const result = twoSum.hash(nums, target);
            expect(result).toBeUndefined();
        });

        it("return undefined if target is not a number", () => {
            const foo = [],
                bar = "baz",
                wow = undefined,
                much = {},
                fn = () => {},
                test = null;

            const nums = [2, 7, 11, 15];

            expect(twoSum.hash(nums, foo)).toBeUndefined();
            expect(twoSum.hash(nums, bar)).toBeUndefined();
            expect(twoSum.hash(nums, wow)).toBeUndefined();
            expect(twoSum.hash(nums, much)).toBeUndefined();
            expect(twoSum.hash(nums, fn)).toBeUndefined();
            expect(twoSum.hash(nums, test)).toBeUndefined();
        });
    });


    // # Extended idea: sort then search
    describe("Extended idea: sort then search, note it expects val pairs instead of key pairs to be returned now.", () => {
        it("return expected result for even nums array:  [2, 7, 11, 15] & 9 => [2, 7]", () => {
            const nums = [2, 7, 11, 15];
            const target = 9;

            const result = twoSum.extend.sortThenSearch(nums, target);
            expect(result).toEqual([2, 7]);
        });

        it("return expected result for odd nums array:  [2, 20, 11, 7, 15] & 9 => [2, 7]", () => {
            const nums = [2, 20, 11, 7, 15];
            const target = 9;

            const result = twoSum.extend.sortThenSearch(nums, target);
            expect(result).toEqual([2, 7]);
        });

        it("return undefined if no desired result:  [2, 7, 11, 15] & 8 => undefined", () => {
            const nums = [2, 7, 11, 15];
            const target = 8;

            const result = twoSum.extend.sortThenSearch(nums, target);
            expect(result).toBeUndefined();
        });

        it("return undefined if nums is not array", () => {
            const foo = 42,
                bar = "baz",
                wow = undefined,
                much = {},
                fn = () => {},
                test = null;

            const target = 9;

            expect(twoSum.extend.sortThenSearch(foo, target)).toBeUndefined();
            expect(twoSum.extend.sortThenSearch(bar, target)).toBeUndefined();
            expect(twoSum.extend.sortThenSearch(wow, target)).toBeUndefined();
            expect(twoSum.extend.sortThenSearch(much, target)).toBeUndefined();
            expect(twoSum.extend.sortThenSearch(fn, target)).toBeUndefined();
            expect(twoSum.extend.sortThenSearch(test, target)).toBeUndefined();
        });

        it("return undefined if nums is an array with less than 2 values:  [2] & 9 => undefined", () => {
            const nums = [2];
            const target = 9;

            const result = twoSum.extend.sortThenSearch(nums, target);
            expect(result).toBeUndefined();
        });

        it("return undefined if target is not a number", () => {
            const foo = [],
                bar = "baz",
                wow = undefined,
                much = {},
                fn = () => {},
                test = null;

            const nums = [2, 7, 11, 15];

            expect(twoSum.extend.sortThenSearch(nums, foo)).toBeUndefined();
            expect(twoSum.extend.sortThenSearch(nums, bar)).toBeUndefined();
            expect(twoSum.extend.sortThenSearch(nums, wow)).toBeUndefined();
            expect(twoSum.extend.sortThenSearch(nums, much)).toBeUndefined();
            expect(twoSum.extend.sortThenSearch(nums, fn)).toBeUndefined();
            expect(twoSum.extend.sortThenSearch(nums, test)).toBeUndefined();
        });
    });

});
