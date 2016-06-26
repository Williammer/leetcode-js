/*****
 * Problem: https://leetcode.com/problems/two-sum/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 *
 * Analysis: requirement is mainly on getting 'key' from valid 'value',
 * which makes Hash to be an efficient data structure to use.
 *
 *
 *****/

var twoSum = {};
/*
 * Solution 1: brutal force loop
 * O(n^2)
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





return twoSum;