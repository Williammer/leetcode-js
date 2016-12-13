/************************************************************************************************************************

 * Problem: https://leetcode.com/problems/single-number/
    Given an array of integers, every element appears twice except for one. Find that single one.
    Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

 * Example 1:
    [1,2,3,4,4,3,1] => 2


 * @param {number[]} nums
 * @return {number}

 * Analysis: Array traveral is needed.
    One idea is to sort the array first, but it's gonna cost some time complexity and potentially mem complexity, which won't be linear time complexity.
    The other idea is to use the hash to keep records while looping over the array, which is similar to 1.twoSum, 15.threeSum, it can hv linear time, but the hash will cost mem complexity.
    Another idea is use the magical bit manipulation, XOR is the trick.

************************************************************************************************************************/


export const singleNum = {};

/**
 * Solution 1: Use hash to keep track of each num.
 *
 * "N" is nums.length
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
singleNum.hash = (nums) => {
    if (!Array.isArray(nums) || nums.length === 0) {
        return null;
    }

    let _hash = new Map(),
        result = null;

    for (let i = 0; i < nums.length; i++) {
        let curNum = nums[i];

        if (_hash.has(curNum)) {
            _hash.delete(curNum);
        } else {
            _hash.set(curNum, true);
        }
    }

    if (_hash.size === 1) {
        result = _hash.keys().next().value;
    }

    return result;
};

/**
 * Solution 2: Bit manipulation magics with XOR.
 *  One thing to note here is that it needs a precondition that there is no num zero in the array, or there is surely 1 single num in array.
 *
 * "N" is nums.length
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
singleNum.bit = (nums) => {
    if (!Array.isArray(nums) || nums.length === 0) {
        return null;
    }

    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        result ^= nums[i];
    }

    return result;
};


/************************************************************************************************************************

 * Lessons:
   1. XOR is powerful for its self organizing ability. eg. (2^1^4^5^2^4^1) => ((2^2)^(1^1)^(4^4)^(5)) => (0^0^0^5) => 5.
   2. hash is useful for searching, this problem included.
   3. ES6 Map is pretty handy for collection update tasks like getting size, getting keys and delete entry.

************************************************************************************************************************/
