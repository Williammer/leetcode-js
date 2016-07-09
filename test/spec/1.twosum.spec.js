/************************************************************
 * Problem: https://leetcode.com/problems/two-sum/
   Given an array of integers, return indices of the two numbers such that they add up to a specific target.
   You may assume that each input would have exactly one solution.
   The return format had been changed to zero-based indices.

 * Example:
   Given nums = [2, 7, 11, 15], target = 9,
   Because nums[0] + nums[1] = 2 + 7 = 9,
   return [0, 1].
************************************************************/

describe('# Problem 1 - Two sum (assume that each input would have exactly one solution)', function() {
	beforeEach(function() {
		var nums, target, result;
    });

// # Solution 1: brutal loop tests
	describe('Solution 1: brutal loop tests', function() {
	    it('return expected result for even nums array', function() {
	    	nums = [2, 7, 11, 15];
	    	target = 9;

	    	result = twoSum.brutal(nums, target);
	        expect(result).toEqual([0, 1]);
	    });

	    it('return expected result for odd nums array', function() {
	    	nums = [2, 20, 11, 7, 15];
	    	target = 9;

	    	result = twoSum.brutal(nums, target);
	        expect(result).toEqual([0, 3]);
	    });

	    it('return undefined if no desired result', function() {
	    	nums = [2, 7, 11, 15];
	    	target = 8;

	    	result = twoSum.brutal(nums, target);
	        expect(result).toBeUndefined();
	    });

	    it('return undefined if nums is not array', function() {
	    	var foo= 42,
				bar= 'baz',
				wow= undefined,
				much= {},
				fn= function() {},
				test= null;

	    	target = 9;

	        expect(twoSum.brutal(foo, target)).toBeUndefined();
	        expect(twoSum.brutal(bar, target)).toBeUndefined();
	        expect(twoSum.brutal(wow, target)).toBeUndefined();
	        expect(twoSum.brutal(much, target)).toBeUndefined();
	        expect(twoSum.brutal(fn, target)).toBeUndefined();
	        expect(twoSum.brutal(test, target)).toBeUndefined();
	    });

	    it('return undefined if nums is an array with less than 2 values', function() {
	    	nums = [2];
	    	target = 9;

	    	result = twoSum.brutal(nums, target);
	        expect(result).toBeUndefined();
	    });

	    it('return undefined if target is not a number', function() {
	    	var foo= [],
				bar= 'baz',
				wow= undefined,
				much= {},
				fn= function() {},
				test= null;

			nums = [2, 7, 11, 15];

	        expect(twoSum.brutal(nums, foo)).toBeUndefined();
	        expect(twoSum.brutal(nums, bar)).toBeUndefined();
	        expect(twoSum.brutal(nums, wow)).toBeUndefined();
	        expect(twoSum.brutal(nums, much)).toBeUndefined();
	        expect(twoSum.brutal(nums, fn)).toBeUndefined();
	        expect(twoSum.brutal(nums, test)).toBeUndefined();
	    });
	});


// # Solution 2: hash
	describe('Solution 2: hash', function() {
	    it('return expected result for even nums array', function() {
	    	nums = [2, 7, 11, 15];
	    	target = 9;

	    	result = twoSum.hash(nums, target);
	        expect(result).toEqual([0, 1]);
	    });

	    it('return expected result for odd nums array', function() {
	    	nums = [2, 20, 11, 7, 15];
	    	target = 9;

	    	result = twoSum.hash(nums, target);
	        expect(result).toEqual([0, 3]);
	    });

	    it('return undefined if no desired result', function() {
	    	nums = [2, 7, 11, 15];
	    	target = 8;

	    	result = twoSum.hash(nums, target);
	        expect(result).toBeUndefined();
	    });

	    it('return undefined if nums is not array', function() {
	    	var foo= 42,
				bar= 'baz',
				wow= undefined,
				much= {},
				fn= function() {},
				test= null;

	    	target = 9;

	        expect(twoSum.hash(foo, target)).toBeUndefined();
	        expect(twoSum.hash(bar, target)).toBeUndefined();
	        expect(twoSum.hash(wow, target)).toBeUndefined();
	        expect(twoSum.hash(much, target)).toBeUndefined();
	        expect(twoSum.hash(fn, target)).toBeUndefined();
	        expect(twoSum.hash(test, target)).toBeUndefined();
	    });

	    it('return undefined if nums is an array with less than 2 values', function() {
	    	nums = [2];
	    	target = 9;

	    	result = twoSum.hash(nums, target);
	        expect(result).toBeUndefined();
	    });

	    it('return undefined if target is not a number', function() {
	    	var foo= [],
				bar= 'baz',
				wow= undefined,
				much= {},
				fn= function() {},
				test= null;

			nums = [2, 7, 11, 15];

	        expect(twoSum.hash(nums, foo)).toBeUndefined();
	        expect(twoSum.hash(nums, bar)).toBeUndefined();
	        expect(twoSum.hash(nums, wow)).toBeUndefined();
	        expect(twoSum.hash(nums, much)).toBeUndefined();
	        expect(twoSum.hash(nums, fn)).toBeUndefined();
	        expect(twoSum.hash(nums, test)).toBeUndefined();
	    });
	});


	// # Extended idea: sort then search
	describe('Extended idea: sort then search, note it expects val pairs instead of key pairs to be returned now.', function() {
	    it('return expected result for even nums array', function() {
	    	nums = [2, 7, 11, 15];
	    	target = 9;

	    	result = twoSum.extend.sortThenSearch(nums, target);
	        expect(result).toEqual([2, 7]);
	    });

	    it('return expected result for odd nums array', function() {
	    	nums = [2, 20, 11, 7, 15];
	    	target = 9;

	    	result = twoSum.extend.sortThenSearch(nums, target);
	        expect(result).toEqual([2, 7]);
	    });

	    it('return undefined if no desired result', function() {
	    	nums = [2, 7, 11, 15];
	    	target = 8;

	    	result = twoSum.extend.sortThenSearch(nums, target);
	        expect(result).toBeUndefined();
	    });

	    it('return undefined if nums is not array', function() {
	    	var foo= 42,
				bar= 'baz',
				wow= undefined,
				much= {},
				fn= function() {},
				test= null;

	    	target = 9;

	        expect(twoSum.extend.sortThenSearch(foo, target)).toBeUndefined();
	        expect(twoSum.extend.sortThenSearch(bar, target)).toBeUndefined();
	        expect(twoSum.extend.sortThenSearch(wow, target)).toBeUndefined();
	        expect(twoSum.extend.sortThenSearch(much, target)).toBeUndefined();
	        expect(twoSum.extend.sortThenSearch(fn, target)).toBeUndefined();
	        expect(twoSum.extend.sortThenSearch(test, target)).toBeUndefined();
	    });

	    it('return undefined if nums is an array with less than 2 values', function() {
	    	nums = [2];
	    	target = 9;

	    	result = twoSum.extend.sortThenSearch(nums, target);
	        expect(result).toBeUndefined();
	    });

	    it('return undefined if target is not a number', function() {
	    	var foo= [],
				bar= 'baz',
				wow= undefined,
				much= {},
				fn= function() {},
				test= null;

			nums = [2, 7, 11, 15];

	        expect(twoSum.extend.sortThenSearch(nums, foo)).toBeUndefined();
	        expect(twoSum.extend.sortThenSearch(nums, bar)).toBeUndefined();
	        expect(twoSum.extend.sortThenSearch(nums, wow)).toBeUndefined();
	        expect(twoSum.extend.sortThenSearch(nums, much)).toBeUndefined();
	        expect(twoSum.extend.sortThenSearch(nums, fn)).toBeUndefined();
	        expect(twoSum.extend.sortThenSearch(nums, test)).toBeUndefined();
	    });
	});

});
