/**
 * Problem: https://leetcode.com/problems/palindrome-number/
    Determine whether an integer is a palindrome. Do this without extra space. Negative num be regarded as false.

 * Example:
    1143411 -> true
    122 -> false


 * @param {number} num
 * @return {boolean}

 * Analysis: Compare it with string, it'll be good if we can somehow use 2 pointers to shrink.
    We can achieve this by trying to get two digits with one from the start and one from the end of the number.
    Another thinking is to get the reversed half part of the num and compare.

 */

export const intPalindrome = {};

/**
 * Solution 1: two pointers shrink
 *
 * "N" is the number length.
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
intPalindrome.twoPointers = (num) => {
  if (typeof num !== "number" || num < 0 || (num !== 0 && num % 10 === 0)) {
    return false;
  }

  let digitEnd;

  let digitStart = num;

  let numBase = 1;

  while (digitStart >= 10) {
    numBase *= 10;
    digitStart /= 10;
  }

  while (numBase >= 10) {
    digitStart = Math.floor(num / numBase);
    digitEnd = num % 10;

    if (digitStart !== digitEnd) {
      return false;
    }

    // shrink digitStart/End
    num %= numBase;
    num = Math.floor(num / 10);
    numBase /= 100;
  }

  return true;
};

/**
 * Solution 2: reverse half of the number then compare
 *
 * "N" is the number length.
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
intPalindrome.halfRev = (num) => {
  if (typeof num !== "number" || num < 0 || (num !== 0 && num % 10 === 0)) {
    return false;
  }

  if (num < 10) {
    return true;
  }

  let revNum = 0;

  while (num > revNum) {
    revNum = revNum * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  return num === revNum || num === Math.floor(revNum / 10);
};

/**
 * Lessons:
   1. There are useful ways like '%', '/' and num reverse that enable us to manipulate numbers like string or array.

 */
