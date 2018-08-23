import * as twoSum from "./1.twoSum";
import { runSuites } from "./helper";

describe("# Problem 1 - Two sum (assume that each input would have exactly one solution)", () => {
  const allTestSuites = [
    {
      title: "return expected result for even nums array:  [2, 7, 11, 15] & 9 => [0, 1]",
      suite: (solutionName) => () => {
        const nums = [2, 7, 11, 15];
        const target = 9;

        const result = twoSum[solutionName](nums, target);
        expect(result).toEqual([0, 1]);
      },
    },
    {
      title: "return expected result for odd nums array:  [2, 20, 11, 7, 15] & 9 => [0, 3]",
      suite: (solutionName) => () => {
        const nums = [2, 20, 11, 7, 15];
        const target = 9;

        const result = twoSum[solutionName](nums, target);
        expect(result).toEqual([0, 3]);
      },
    },
    {
      title: "return null if no desired result:  [2, 7, 11, 15] & 8 => null",
      suite: (solutionName) => () => {
        const nums = [2, 7, 11, 15];
        const target = 8;

        const result = twoSum[solutionName](nums, target);
        expect(result).toBeNull();
      },
    },
    {
      title: "return null if nums is not array",
      suite: (solutionName) => () => {
        const foo = 42;
        const bar = "baz";
        const wow = undefined;
        const much = {};
        const fn = () => {};
        const test = null;
        const target = 9;

        expect(twoSum[solutionName](foo, target)).toBeNull();
        expect(twoSum[solutionName](bar, target)).toBeNull();
        expect(twoSum[solutionName](wow, target)).toBeNull();
        expect(twoSum[solutionName](much, target)).toBeNull();
        expect(twoSum[solutionName](fn, target)).toBeNull();
        expect(twoSum[solutionName](test, target)).toBeNull();
      },
    },
    {
      title: "return null if nums is an array with less than 2 values:  [2] & 9 => null",
      suite: (solutionName) => () => {
        const nums = [2];
        const target = 9;

        const result = twoSum[solutionName](nums, target);
        expect(result).toBeNull();
      },
    },
    {
      title: "return null if target is not a number",
      suite: (solutionName) => () => {
        const foo = [];
        const bar = "baz";
        const wow = undefined;
        const much = {};
        const fn = () => {};
        const test = null;
        const nums = [2, 7, 11, 15];

        expect(twoSum[solutionName](nums, foo)).toBeNull();
        expect(twoSum[solutionName](nums, bar)).toBeNull();
        expect(twoSum[solutionName](nums, wow)).toBeNull();
        expect(twoSum[solutionName](nums, much)).toBeNull();
        expect(twoSum[solutionName](nums, fn)).toBeNull();
        expect(twoSum[solutionName](nums, test)).toBeNull();
      },
    },
  ];

  runSuites(allTestSuites, Object.keys(twoSum));
});
