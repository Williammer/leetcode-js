/* eslint-disable no-continue */
/**
 * Problem: https://leetcode.com/problems/string-to-integer-atoi/
    Implement atoi to convert a string to an integer.
    Notes: It is intended for this problem to be specified vaguely (ie, no given input specs).
    You are responsible to gather all the input requirements up front.

 * Examples:
    Please see in spec.js file

 * @param {string} str
 * @return {number}

 * Analysis: we can traverse each char and put into result if valid.
 */

export const traverse = (str) => {
  if (typeof str !== "string" || str.length === 0) {
    return 0;
  }

  const { MAX_INT_32 } = Math;
  let curChar;
  let curCharCode;
  let result = 0;

  for (let i = 0; i < str.length; i += 1) {
    curChar = str[i];
    curCharCode = str.charCodeAt(i);

    if (result === 0) {
      // has nothing yet
      if (curChar === "-") {
        result = curChar;
      } else if (curCharCode > 48 && curCharCode <= 57) {
        // skip 0 as 1st digit
        result = curChar * 1;
      }
      continue;
    }
    // has something
    if (typeof result === "number") {
      if (!(curCharCode >= 48 && curCharCode <= 57)) {
        // end
        break;
      }
      // add num to result
      result = result > 0 ? result * 10 + curChar * 1 : result * 10 - curChar * 1;

      if (result >= MAX_INT_32) return MAX_INT_32;
      if (result <= -MAX_INT_32 - 1) return -MAX_INT_32 - 1;
      continue;
    }

    // result is "-"
    if (curCharCode > 48 && curCharCode <= 57) {
      // add num to "-" and convert it to num
      result = (result + curChar) * 1;
    } else if (curChar !== "-" && curCharCode !== 48) {
      // reset
      result = 0;
    }
  }

  if (result === "-") result = 0;

  return result;
};

/**
 * Lessons:
   1. Edge consideration like over/underflow, positive/negative number are the major things to
    practice here.
 */
