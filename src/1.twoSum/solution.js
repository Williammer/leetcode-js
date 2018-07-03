/**
 * Problem: https://leetcode.com/problems/two-sum/
   Given an array of integers, return indices of the two numbers such that they add up to a specific target.
   You may assume that each input would have exactly one solution.
   The return format had been changed to zero-based indices.

 * Example:
   Given nums = [2, 7, 11, 15], target = 9,
   Because nums[0] + nums[1] = 2 + 7 = 9,
   return [0, 1].


 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}

 * Analysis: requirement is mainly on getting 'key' from valid 'value',
   which makes Hash to be an efficient data structure to use.

 */

export const twoSum = {};
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
  let i;
  let j;
  let compensate;

  for (i = 0; i < len; i += 1) {
    compensate = target - nums[i];

    for (j = i + 1; j < len; j += 1) {
      if (nums[j] === compensate) {
        return [i, j];
      }
    }
  }
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
  let i;
  const hash = {};

  let key;
  let compensate;

  for (i = 0; i < len; i += 1) {
    compensate = target - nums[i];

    key = hash[compensate];
    if (typeof key === "number" && key !== i) {
      return [key, i];
    }
    hash[nums[i]] = i;
  }
};

/**
 * Lessons:
   1. Consider introduce appriorate helper data structures to solve problems.

   2. Key, Value are just relative and can be exchanged when needed.
   For js, with the ES6 Map/WeakMap that allows all types to be 'key', this trick can be applied easier.

   3.  For list:array based problem that aims at finding values than keys, we can consider sort it first and utilize some of its treats like binary search.

 */
