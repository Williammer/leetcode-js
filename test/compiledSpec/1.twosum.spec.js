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

/*
 * Solution 1: brutal force loop
 *
 * "N" is nums.length.
 * Time complexity: O(N^2)
 * Space complexity: O(1)
 */
function brutal(nums, target) {
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
function hash(nums, target) {
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
let extend = {}; // extend is for inspired solutions for similar problem, it doesn't solve the problem directly so may move it elsewhere in future.
extend.sortThenSearch = function(nums, target) {
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

describe('# Problem 1 - Two sum (assume that each input would have exactly one solution)', function() {

// # Solution 1: brutal loop tests
	describe('Solution 1: brutal loop tests', function() {
	    it('return expected result for even nums array:  [2, 7, 11, 15] & 9 => [0, 1]', function() {
	    	var nums = [2, 7, 11, 15];
	    	var target = 9;

	    	var result = brutal(nums, target);
	        expect(result).toEqual([0, 1]);
	    });

	    it('return expected result for odd nums array:  [2, 20, 11, 7, 15] & 9 => [0, 3]', function() {
	    	var nums = [2, 20, 11, 7, 15];
	    	var target = 9;

	    	var result = brutal(nums, target);
	        expect(result).toEqual([0, 3]);
	    });

	    it('return undefined if no desired result:  [2, 7, 11, 15] & 8 => undefined', function() {
	    	var nums = [2, 7, 11, 15];
	    	var target = 8;

	    	var result = brutal(nums, target);
	        expect(result).toBeUndefined();
	    });

	    it('return undefined if nums is not array', function() {
	    	var foo= 42,
				bar= 'baz',
				wow= undefined,
				much= {},
				fn= function() {},
				test= null;

	    	var target = 9;

	        expect(brutal(foo, target)).toBeUndefined();
	        expect(brutal(bar, target)).toBeUndefined();
	        expect(brutal(wow, target)).toBeUndefined();
	        expect(brutal(much, target)).toBeUndefined();
	        expect(brutal(fn, target)).toBeUndefined();
	        expect(brutal(test, target)).toBeUndefined();
	    });

	    it('return undefined if nums is an array with less than 2 values:  [2] & 9 => undefined', function() {
	    	var nums = [2];
	    	var target = 9;

	    	var result = brutal(nums, target);
	        expect(result).toBeUndefined();
	    });

	    it('return undefined if target is not a number', function() {
	    	var foo= [],
				bar= 'baz',
				wow= undefined,
				much= {},
				fn= function() {},
				test= null;

			var nums = [2, 7, 11, 15];

	        expect(brutal(nums, foo)).toBeUndefined();
	        expect(brutal(nums, bar)).toBeUndefined();
	        expect(brutal(nums, wow)).toBeUndefined();
	        expect(brutal(nums, much)).toBeUndefined();
	        expect(brutal(nums, fn)).toBeUndefined();
	        expect(brutal(nums, test)).toBeUndefined();
	    });
	});


// # Solution 2: hash
	describe('Solution 2: hash', function() {
	    it('return expected result for even nums array:  [2, 7, 11, 15] & 9 => [0, 1]', function() {
	    	var nums = [2, 7, 11, 15];
	    	var target = 9;

	    	var result = hash(nums, target);
	        expect(result).toEqual([0, 1]);
	    });

	    it('return expected result for odd nums array:  [2, 20, 11, 7, 15] & 9 => [0, 3]', function() {
	    	var nums = [2, 20, 11, 7, 15];
	    	var target = 9;

	    	var result = hash(nums, target);
	        expect(result).toEqual([0, 3]);
	    });

	    it('return undefined if no desired result:  [2, 7, 11, 15] & 8 => undefined', function() {
	    	var nums = [2, 7, 11, 15];
	    	var target = 8;

	    	var result = hash(nums, target);
	        expect(result).toBeUndefined();
	    });

	    it('return undefined if nums is not array', function() {
	    	var foo= 42,
				bar= 'baz',
				wow= undefined,
				much= {},
				fn= function() {},
				test= null;

	    	var target = 9;

	        expect(hash(foo, target)).toBeUndefined();
	        expect(hash(bar, target)).toBeUndefined();
	        expect(hash(wow, target)).toBeUndefined();
	        expect(hash(much, target)).toBeUndefined();
	        expect(hash(fn, target)).toBeUndefined();
	        expect(hash(test, target)).toBeUndefined();
	    });

	    it('return undefined if nums is an array with less than 2 values:  [2] & 9 => undefined', function() {
	    	var nums = [2];
	    	var target = 9;

	    	var result = hash(nums, target);
	        expect(result).toBeUndefined();
	    });

	    it('return undefined if target is not a number', function() {
	    	var foo= [],
				bar= 'baz',
				wow= undefined,
				much= {},
				fn= function() {},
				test= null;

			var nums = [2, 7, 11, 15];

	        expect(hash(nums, foo)).toBeUndefined();
	        expect(hash(nums, bar)).toBeUndefined();
	        expect(hash(nums, wow)).toBeUndefined();
	        expect(hash(nums, much)).toBeUndefined();
	        expect(hash(nums, fn)).toBeUndefined();
	        expect(hash(nums, test)).toBeUndefined();
	    });
	});


	// # Extended idea: sort then search
	describe('Extended idea: sort then search, note it expects val pairs instead of key pairs to be returned now.', function() {
	    it('return expected result for even nums array:  [2, 7, 11, 15] & 9 => [2, 7]', function() {
	    	var nums = [2, 7, 11, 15];
	    	var target = 9;

	    	var result = extend.sortThenSearch(nums, target);
	        expect(result).toEqual([2, 7]);
	    });

	    it('return expected result for odd nums array:  [2, 20, 11, 7, 15] & 9 => [2, 7]', function() {
	    	var nums = [2, 20, 11, 7, 15];
	    	var target = 9;

	    	var result = extend.sortThenSearch(nums, target);
	        expect(result).toEqual([2, 7]);
	    });

	    it('return undefined if no desired result:  [2, 7, 11, 15] & 8 => undefined', function() {
	    	var nums = [2, 7, 11, 15];
	    	var target = 8;

	    	var result = extend.sortThenSearch(nums, target);
	        expect(result).toBeUndefined();
	    });

	    it('return undefined if nums is not array', function() {
	    	var foo= 42,
				bar= 'baz',
				wow= undefined,
				much= {},
				fn= function() {},
				test= null;

	    	var target = 9;

	        expect(extend.sortThenSearch(foo, target)).toBeUndefined();
	        expect(extend.sortThenSearch(bar, target)).toBeUndefined();
	        expect(extend.sortThenSearch(wow, target)).toBeUndefined();
	        expect(extend.sortThenSearch(much, target)).toBeUndefined();
	        expect(extend.sortThenSearch(fn, target)).toBeUndefined();
	        expect(extend.sortThenSearch(test, target)).toBeUndefined();
	    });

	    it('return undefined if nums is an array with less than 2 values:  [2] & 9 => undefined', function() {
	    	var nums = [2];
	    	var target = 9;

	    	var result = extend.sortThenSearch(nums, target);
	        expect(result).toBeUndefined();
	    });

	    it('return undefined if target is not a number', function() {
	    	var foo= [],
				bar= 'baz',
				wow= undefined,
				much= {},
				fn= function() {},
				test= null;

			var nums = [2, 7, 11, 15];

	        expect(extend.sortThenSearch(nums, foo)).toBeUndefined();
	        expect(extend.sortThenSearch(nums, bar)).toBeUndefined();
	        expect(extend.sortThenSearch(nums, wow)).toBeUndefined();
	        expect(extend.sortThenSearch(nums, much)).toBeUndefined();
	        expect(extend.sortThenSearch(nums, fn)).toBeUndefined();
	        expect(extend.sortThenSearch(nums, test)).toBeUndefined();
	    });
	});

});