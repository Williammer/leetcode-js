/** **********************************************************************************************************************

 * Problem: https://leetcode.com/problems/reverse-integer/
    Reverse digits of an integer.

 * Example 1:
	x = 123, return 321
 * Example 2:
	x = -123, return -321


 * @param {number} x
 * @return {number}

 * Analysis: The difficulty for this problem is how to use js to reverse digits of each pos, while keep some edge case in mind.

*********************************************************************************************************************** */


export const reverseInt = {};

/**
 * Solution 1: Use "%" and "/" to slice each digit of the number and reversely add it back.
 *
 * "N" is the length of num x.
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
reverseInt.fn = (x) => {
  const MAX_INT_32 = Math.pow(2, 31) - 1;

  let result = 0;


  const sign = (x >= 0) ? 1 : -1;


  let absX = Math.abs(x);

  while (absX > 0) {
    result = (absX % 10) + (result * 10); // (absX % 10) is the digits of this pos starting from last one.
    absX = Math.floor(absX / 10);

    if (result > MAX_INT_32) {
      return 0;
    }
  }

  return sign * result;
};


/** **********************************************************************************************************************

 * Lessons:
   1. "%" and "/" are very useful in javaScript especially in number-related tasks; it's elegant yet powerful, unlike some js operators.

*********************************************************************************************************************** */
