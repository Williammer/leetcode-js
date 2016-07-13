/************************************************************
 * Problem: https://leetcode.com/problems/two-sum/
   Given an array of integers, return indices of the two numbers such that they add up to a specific target.
   You may assume that each input would have exactly one solution.
   The return format had been changed to zero-based indices.

 * Example:
   Given var nums = [2, 7, 11, 15], var target = 9,
   Because nums[0] + nums[1] = 2 + 7 = 9,
   return [0, 1].
************************************************************/
import { brutal, hash, extend } from "../../algorithms/es6/1.twoSum/solution"

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
