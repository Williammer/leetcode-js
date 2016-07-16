/************************************************************

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

************************************************************/

var twoSum = {};
twoSum.extend = {}; // extend is for inspired solutions for similar problem, it doesn't solve the problem directly so may move it elsewhere in future.
/*
 * Solution 1: brutal force loop
 *
 * "N" is nums.length.
 * Time complexity: O(N^2)
 * Space complexity: O(1)
 */
twoSum.brutal = function(nums, target) {
    if (!(Array.isArray(nums) && nums.length > 1) || typeof target !== "number") {
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
 * "N" is nums.length.
 * Time complexity:  O(N)
 * Space complexity: O(N)
 */
twoSum.hash = function(nums, target) {
    if (!(Array.isArray(nums) && nums.length > 1) || typeof target !== "number") {
        return;
    }

    var i, hash = {},
        key,
        len = nums.length,
        compensate;

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


/*
 * Extended idea: Sort then search if the problem aims to find the value pair that add up to the target.
 * NOTE: here the return value changes to [val1, val2] instead of [idx1, idx2] where val1+val2=target.
 *
 * Sorted list will be efficiently performed operations like binary search, etc.
 * It can be useful for large size collections.
 *
 * "N" is nums.length. depend on browser impl of Array:sort
 * Time complexity:  O([N+NlogN, 2NlogN])
 * Space complexity: O([1, N])
 */
twoSum.extend.sortThenSearch = function(nums, target) {
    if (!(Array.isArray(nums) && nums.length > 1) || typeof target !== "number") {
        return;
    }

    // sort nums for quicker search
    // js array sort() uses pretty efficient sort algorithms, could have O(N) to O(NlogN) time complexity depend on browser
    // some browser such as Mozilla uses mergeSort, which will add extra space complexity
    // (http://stackoverflow.com/questions/234683/javascript-array-sort-implementation)
    // NOTE: Array:sort by default didn't sort nums in ascending order, so need the helper function 'sortNumber' to set the rule.
    var sortNumber = function(a, b) {
            return a - b;
        },
        sortedNums = nums.sort(sortNumber),
        i, lo, hi, mid, compensate;

    for (i = 0; i < sortedNums.length; i++) {
        lo = i;
        hi = sortedNums.length - 1;
        compensate = target - sortedNums[lo];

        // skip in vain searches
        if (compensate > sortedNums[hi]) {
            continue;
        }

        // binary search the compensate target
        while (lo <= hi) {
            if (hi - lo === 1) {
                return (compensate === sortedNums[hi]) ? [sortedNums[lo], sortedNums[hi]] : undefined;
            }
            // Key is in a[lo..hi] or not present, goes to N/2 if has even nums.
            mid = Math.floor((hi + lo) / 2);

            if (compensate < sortedNums[mid]) {
                hi = mid - 1;
            } else if (compensate > sortedNums[mid]) {
                lo = mid + 1;
            } else {
                return [sortedNums[lo], sortedNums[mid]];
            }
        }
    }
    return;
};


/************************************************************

 * Lessons:
   1. Consider introduce appriorate helper data structures to solve problems.

   2. Key, Value are just relative and can be exchanged when needed.
   For js, with the ES6 Map/WeakMap that allows all types to be 'key', this trick can be applied easier.

   3.  For list:array based problem that aims at finding values than keys, we can consider sort it first and utilize some of its treats like binary search.

************************************************************/
