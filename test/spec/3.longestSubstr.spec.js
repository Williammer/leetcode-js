import { longestSubstr } from "../../src/3.longestSubstr/solution";

describe("# Problem 3 - Given a string, find the length of the longest substring without repeating characters.", () => {

    describe("Solution 1: Slide Window, using substring and lastIndexOf to check if repeated", () => {
        it("return 0 if s has no char: ''", () => {
            const result = longestSubstr.slideWin("");

            expect(result).toEqual(0);
        });

        it("return 1 if s has 1 char: 'a'", () => {
            const result = longestSubstr.slideWin("a");

            expect(result).toEqual(1);
        });

        it("return 2 if s has 2 different char: 'ab'", () => {
            const result = longestSubstr.slideWin("ab");

            expect(result).toEqual(2);
        });

        it("return expected result for longest substring that not start from the head of string: 'anviaj'", () => {
            const result = longestSubstr.slideWin("anviaj");

            expect(result).toEqual(5);
        });

        it("return expected result for longest substring that start from the head of string: 'abcabcbb'", () => {
            const result = longestSubstr.slideWin("abcabcbb");

            expect(result).toEqual(3);
        });

    });

    describe("Solution 2: Slide Window enhanced, by using lastIndexOf alone", () => {
        it("return 0 if s has no char: ''", () => {
            const result = longestSubstr.slideWinEnhanced("");

            expect(result).toEqual(0);
        });

        it("return 1 if s has 1 char: 'a'", () => {
            const result = longestSubstr.slideWinEnhanced("a");

            expect(result).toEqual(1);
        });

        it("return 2 if s has 2 different char: 'ab'", () => {
            const result = longestSubstr.slideWinEnhanced("ab");

            expect(result).toEqual(2);
        });

        it("return expected result for longest substring that not start from the head of string: 'anviaj'", () => {
            const result = longestSubstr.slideWinEnhanced("anviaj");

            expect(result).toEqual(5);
        });

        it("return expected result for longest substring that start from the head of string: 'abcabcbb'", () => {
            const result = longestSubstr.slideWinEnhanced("abcabcbb");

            expect(result).toEqual(3);
        });

    });

    describe("Solution 3: slide window with hash", () => {
        it("return 0 if s has no char: ''", () => {
            const result = longestSubstr.hash("");

            expect(result).toEqual(0);
        });

        it("return 1 if s has 1 char: 'a'", () => {
            const result = longestSubstr.hash("a");

            expect(result).toEqual(1);
        });

        it("return 2 if s has 2 different char: 'ab'", () => {
            const result = longestSubstr.hash("ab");

            expect(result).toEqual(2);
        });

        it("return expected result for longest substring that not start from the head of string: 'anviaj'", () => {
            const result = longestSubstr.hash("anviaj");

            expect(result).toEqual(5);
        });

        it("return expected result for longest substring that start from the head of string: 'abcabcbb'", () => {
            const result = longestSubstr.hash("abcabcbb");

            expect(result).toEqual(3);
        });

    });

    describe("Solution 4: hash+reduce. loop string with array.reduce instead of for/while loop, more elegant.", () => {
        it("return 0 if s has no char: ''", () => {
            const result = longestSubstr.hashReduce("");

            expect(result).toEqual(0);
        });

        it("return 1 if s has 1 char: 'a'", () => {
            const result = longestSubstr.hashReduce("a");

            expect(result).toEqual(1);
        });

        it("return 2 if s has 2 different char: 'ab'", () => {
            const result = longestSubstr.hashReduce("ab");

            expect(result).toEqual(2);
        });

        it("return expected result for longest substring that not start from the head of string: 'anviaj'", () => {
            const result = longestSubstr.hashReduce("anviaj");

            expect(result).toEqual(5);
        });

        it("return expected result for longest substring that start from the head of string: 'abcabcbb'", () => {
            const result = longestSubstr.hashReduce("abcabcbb");

            expect(result).toEqual(3);
        });

    });

});
