/************************************************************
 * Problem: https://leetcode.com/problems/two-sum/
   Given an array of integers, return indices of the two numbers such that they add up to a specific target.
   You may assume that each input would have exactly one solution.
   The return format had been changed to zero-based indices.

   Example:
   Given nums = [2, 7, 11, 15], target = 9,
   Because nums[0] + nums[1] = 2 + 7 = 9,
   return [0, 1].

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}


 * Analysis: requirement is mainly on getting 'key' from valid 'value',
   which makes Hash to be an efficient data structure to use.

************************************************************/

var twoSum = {};
/*
 * Solution 1: brutal force loop
 *
 * Time complexity: O(N^2)
 * Space complexity: O(1)
 */
twoSum.brutal = function(nums, target) {
    if (!(Array.isArray(nums) && nums.length > 1) || typeof target !== 'number') {
        return;
    }

    var i, j, len = nums.length,
        compensate;

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

/*
 * Solution 2: Hash
 * @Key: nums.value
 * @Value: nums.key
 *
 * Time complexity:  O(N)
 * Space complexity: O(N)
 */
twoSum.hash = function(nums, target) {
    if (!(Array.isArray(nums) && nums.length > 1) || typeof target !== 'number') {
        return;
    }

    var i, hash = {}, key,
        len = nums.length,
        compensate;

    for (i = 0; i < len; i++) {
        compensate = target - nums[i];

        key = hash[compensate];
        if (typeof key === 'number' && key !== i) {
            return [key, i];
        }
        hash[nums[i]] = i;
    }
    return;
};


return twoSum;


/************************************************************
 * Lessons:
   1. Consider introduce appriorate helper data structures to solve problems.

   2. Key, Value are just relative and can be exchanged when needed.
   For js, with the ES6 Map/WeakMap that allows all types to be 'key', this trick can be applied easier.

************************************************************/