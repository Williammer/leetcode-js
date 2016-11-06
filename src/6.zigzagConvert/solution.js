/************************************************************

 * Problem: The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
    (you may want to display this pattern in a fixed font for better legibility)
        P   A   H   N
        A P L S I I G
        Y   I   R
    And then read line by line: "PAHNAPLSIIGYIR"

 * Example 1:
    string convert(string text, int nRows);
    convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".


 * @param {string} s
 * @param {number} numRows
 * @return {string}

 * Analysis: An obvious idea is to use a 2d array that keeps track of it's x/y indexes. But it'll be a bit different for Odd/Even numRows.

************************************************************/

export const zigzagConvert = {};

zigzagConvert.array2D = (s, numRows) => {
    if (!(typeof s === "string" && s.length > 0 && typeof numRows === "number" && numRows > 0)) {
        console.error("invalid inputs.");
        return;
    }

    const strLen = s.length,
        isEven = (row) => (row % 2 === 0),
        mod = (num, n) => ((num % n) + n) % n;

    let outputString = "",
        x, y;

    for (let i = 0; i < strLen; i++) {
        // figure out each char in the new string

        if (i >= numRows) {
            y = mod(i, numRows);
            x = i / numRows;
        } else {
            y = i;
            x = 0;
        }

        if (!isEven(y) || isEven(x)) {
            outputString
        }
    }


    return outputString;
};





/************************************************************

 * Lessons:
   1. 

************************************************************/




/************************************************************

 * Extended idea: What if we lay it out horizontally and veritically re-construct to another string instead:
    let's regard each char+space as a unit for 1st row, suppose we have n units in 1st row, which is n chars, including the last single char;
    Then we can calculate that the 2nd row has 2n-1 chars; 3rd row has n chars; 4th has 2n-1, etc. if it's complete row.
    Now let's consider the constraints we have: 1. we need to divide it to be certain num of rows(numRows), and the num of chars should be larger than (numRows-1)'s and lessOrEqual than numRows's.
    But it'll be a bit different for odd or even numRows.
        For Odd numRows, it should satisfy:
            n * numRows/2 + (2n-1) * numRows/2 < s.length;
            n * (numRows/2 + 1) + (2n-1) * numRows/2 >= s.length;
        For Even numRows, it should satisfy:
            n * numRows/2 + (2n-1) * (numRows/2 - 1) < s.length;
            n * numRows/2 + (2n-1) * numRows/2 >= s.length;
    After divided the string into ZigZag pattern, we can re-construct it based on the index of each rows that has chars.

************************************************************/
