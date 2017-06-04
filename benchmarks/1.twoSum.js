// import { twoSum } from "../../src/1.twoSum/solution";
// import Benchmark from 'benchmark';
var Benchmark = require('benchmark');

// import { runSuites } from "../helper.js";

const twoSum = {};
/**
 * Solution 1: brutal force loop
 *
 * "N" is nums.length.
 * Time complexity: O(N^2)
 * Space complexity: O(1)
 */
twoSum.brutal = (nums, target) => {
  if (!(Array.isArray(nums) && nums.length > 1) || typeof target !== "number") {
    return;
  }

  const len = nums.length;
  let i, j, compensate;

  for (i = 0; i < len; i++) {
    compensate = target - nums[i];

    for (j = i + 1; j < len; j++) {
      if (nums[j] === compensate) {
        return [i, j];
      }
    }
  }
  return;
};

/**
 * Solution 2: Hash
 * @Key: nums.value
 * @Value: nums.key
 *
 * "N" is nums.length.
 * Time complexity:  O(N)
 * Space complexity: O(N)
 */
twoSum.hash = (nums, target) => {
  if (!(Array.isArray(nums) && nums.length > 1) || typeof target !== "number") {
    return;
  }

  const len = nums.length;
  let i, hash = {},
    key, compensate;

  for (i = 0; i < len; i++) {
    compensate = target - nums[i];

    key = hash[compensate];
    if (typeof key === "number" && key !== i) {
      return [key, i];
    }
    hash[nums[i]] = i;
  }
  return;
};

// describe("# Problem 1 - Two sum (assume that each input would have exactly one solution)", () => {
Benchmark.runInContext({});
let benchSuite = new Benchmark.Suite;

const allTestSuites = [{
  title: "return expected result for even nums array:  [2, 7, 11, 15] & 9 => [0, 1]",
  suite: (solutionName) => () => {
    const nums = [2, 7, 11, 15];
    const target = 9;

    const result = twoSum[solutionName](nums, target);
    // expect(result).toEqual([0, 1]);
  }
}, {
  title: "return expected result for odd nums array:  [2, 20, 11, 7, 15] & 9 => [0, 3]",
  suite: (solutionName) => () => {
    const nums = [2, 20, 11, 7, 15];
    const target = 9;

    const result = twoSum[solutionName](nums, target);
    // expect(result).toEqual([0, 3]);
  }
}];

const solutions = ["brutal", "hash"];

allTestSuites.forEach((t) => {
  solutions.forEach((solution) => {

    if (benchSuite && typeof benchSuite === "object") {
      // add test suites for benchmark
      benchSuite.add(`${t.title} || ${solution}`, t.suite(solution));
    }
  });
});

try {
  // Benchmark.support.browser = false;

  benchSuite.on('cycle', (event) => {
      console.log('[benchmark]' + event.target);
    })
    .on('complete', function() {
      console.log('[benchmark] Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({ 'async': false });
} catch (e) {
  console.warn('[benchmark error] e stack: ' + e.stack);
}

