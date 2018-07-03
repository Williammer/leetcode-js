import { twoSum } from "../../src/1.twoSum/solution";
import { runSuites } from "../helper.js";


describe("# Problem 1 - Two sum (assume that each input would have exactly one solution)", () => {
  const solutions = ["brutal", "hash"];

  const allTestSuites = [{
    title: "return expected result for even nums array:  [2, 7, 11, 15] & 9 => [0, 1]",
    suite: solutionName => () => {
      const nums = [2, 7, 11, 15];
      const target = 9;

      const result = twoSum[solutionName](nums, target);
      expect(result).toEqual([0, 1]);
    },
  }, {

    title: "return expected result for odd nums array:  [2, 20, 11, 7, 15] & 9 => [0, 3]",
    suite: solutionName => () => {
      const nums = [2, 20, 11, 7, 15];
      const target = 9;

      const result = twoSum[solutionName](nums, target);
      expect(result).toEqual([0, 3]);
    },
  }, {

    title: "return undefined if no desired result:  [2, 7, 11, 15] & 8 => undefined",
    suite: solutionName => () => {
      const nums = [2, 7, 11, 15];
      const target = 8;

      const result = twoSum[solutionName](nums, target);
      expect(result).toBeUndefined();
    },
  }, {

    title: "return undefined if nums is not array",
    suite: solutionName => () => {
      const foo = 42;


      const bar = "baz";


      const wow = undefined;


      const much = {};


      const fn = () => {};


      const test = null;

      const target = 9;

      expect(twoSum[solutionName](foo, target)).toBeUndefined();
      expect(twoSum[solutionName](bar, target)).toBeUndefined();
      expect(twoSum[solutionName](wow, target)).toBeUndefined();
      expect(twoSum[solutionName](much, target)).toBeUndefined();
      expect(twoSum[solutionName](fn, target)).toBeUndefined();
      expect(twoSum[solutionName](test, target)).toBeUndefined();
    },
  }, {

    title: "return undefined if nums is an array with less than 2 values:  [2] & 9 => undefined",
    suite: solutionName => () => {
      const nums = [2];
      const target = 9;

      const result = twoSum[solutionName](nums, target);
      expect(result).toBeUndefined();
    },
  }, {

    title: "return undefined if target is not a number",
    suite: solutionName => () => {
      const foo = [];


      const bar = "baz";


      const wow = undefined;


      const much = {};


      const fn = () => {};


      const test = null;

      const nums = [2, 7, 11, 15];

      expect(twoSum[solutionName](nums, foo)).toBeUndefined();
      expect(twoSum[solutionName](nums, bar)).toBeUndefined();
      expect(twoSum[solutionName](nums, wow)).toBeUndefined();
      expect(twoSum[solutionName](nums, much)).toBeUndefined();
      expect(twoSum[solutionName](nums, fn)).toBeUndefined();
      expect(twoSum[solutionName](nums, test)).toBeUndefined();
    },
  }];


  runSuites(allTestSuites, solutions);
});
