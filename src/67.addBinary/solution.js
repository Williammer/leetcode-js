/************************************************************

 * Problem:https://leetcode.com/problems/add-binary/
     Given two binary strings, return their sum (also a binary string).

 * Example 1:
    a = "11", b = "1"
	Return "100".


 * @param {string} a
 * @param {string} b
 * @return {string}

 * Analysis: Loop over each num and handle the carry num.

************************************************************/


export const addBinary = {};

/**
 * Solution 1: Iterate over the 2 str and calc its sum with good care of carry num.
 *
 * "N" is the max length between a and b.
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
addBinary.iterate = (a, b) => {
	// NOTE: here could hv a input check for int-string;
    let i = a.length - 1,
        j = b.length - 1,
        carry = 0,
        result = "";

    while (i >= 0 || j >= 0 || carry === 1) {
        carry += (i >= 0) ? parseInt(a[i--], 10) : 0;
        carry += (j >= 0) ? parseInt(b[j--], 10) : 0;

        result = (carry % 2) + result;
        carry = parseInt((carry / 2), 10);
    }

    return result;
};


/************************************************************

 * Lessons:
   1. Good practice of looping and handling of various cases of carry num.
   2. Mutiple condition while loop is powerful.

************************************************************/
