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
/*
 * Solution 1: brutal force loop
 *
 * "N" is nums.length.
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
 * Solution 2: Sort then search
 * Sorted list will be efficiently performed operations like binary search, etc.
 * It can be useful for large size collections.
 *
 * "N" is nums.length. depend on browser impl of Array:sort
 * Time complexity:  O([N+NlogN, 2NlogN])
 * Space complexity: O([1, N])
 */
twoSum.sortThenSearch = function(nums, target) {
    if (!(Array.isArray(nums) && nums.length > 1) || typeof target !== 'number') {
        return;
    }

    // sort nums for quicker search
    // js array sort() uses pretty efficient sort algorithms, could have O(N) to O(NlogN) time complexity depend on browser
    // some browser such as Mozilla uses mergeSort, which will add extra space complexity
    // (http://stackoverflow.com/questions/234683/javascript-array-sort-implementation)
    var sortedNums = nums.sort(),
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
            // Key is in a[lo..hi] or not present.
            mid = lo + (hi - lo) / 2;

            if (compensate < sortedNums[mid]) {
                hi = mid - 1;
            } else if (compensate > sortedNums[mid]) {
                lo = mid + 1;
            } else {
                return [lo, mid];
            }
        }
    }
    return;
};

/*
 * Solution 3: Hash
 * @Key: nums.value
 * @Value: nums.key
 *
 * "N" is nums.length.
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



/************************************************************
 * Lessons:
   1. Consider introduce appriorate helper data structures to solve problems.

   2. for list:array based problem, we can consider sort it first and utilize some of its treats like binary search.

   3. Key, Value are just relative and can be exchanged when needed.
   For js, with the ES6 Map/WeakMap that allows all types to be 'key', this trick can be applied easier.

************************************************************/