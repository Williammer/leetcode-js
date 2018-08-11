/* eslint-disable no-bitwise */
/**
 * Problem: https://leetcode.com/problems/sum-of-two-integers/
    Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

 * Example 1:
    Given a = 1 and b = 2, return 3.

 * @param {number} a
 * @param {number} b
 * @return {number}

 * Analysis: Bitwise for sum. "&" can find a carry; "^" can find the different bit, which is the
 *  rest part of the sum besides the carry-related bits.
 */

export const twoIntSum = {};

function checkInputs(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    if (typeof a !== "number" && typeof b !== "number") return 0;
    if (typeof b === "number") return b;
    return a;
  }
  return true;
}

twoIntSum.recursion = (a, b) => {
  if (checkInputs(a, b) !== true) return checkInputs(a, b);
  let result;

  if (b === 0) {
    result = a;
  } else {
    result = twoIntSum.recursion(a ^ b, (a & b) << 1);
  }
  return result;
};

twoIntSum.iteration = (a, b) => {
  if (checkInputs(a, b) !== true) return checkInputs(a, b);

  while ((a & b) !== 0) {
    const tmpA = a ^ b;
    b = (a & b) << 1;
    a = tmpA;
  }
  return a ^ b;
};

/** *********
 * Extended: Calculate the substraction result of two integers a and b

 * Analysis: Substraction is to add its complement. the complement of x is (~x).
 ********** */
export const twoIntSubstract = {};

twoIntSubstract.recursion = (a, b) => {
  if (checkInputs(a, b) !== true) return checkInputs(a, b);
  let result;

  if (b === 0) {
    result = a;
  } else {
    result = twoIntSubstract.recursion(a ^ b, (~a & b) << 1);
  }
  return result;
};

twoIntSubstract.iteration = (a, b) => {
  if (checkInputs(a, b) !== true) return checkInputs(a, b);

  while ((~a & b) !== 0) {
    const tmpA = a ^ b;
    b = (~a & b) << 1;
    a = tmpA;
  }
  return a ^ b;
};

/**
 * Lessons:
  1. Be patient, don't try to assume that the result can be achieved in one or two operation;
    think about using iteration or recursion.
 */
