/************************************************************************************************************************

 * Problem: https://leetcode.com/problems/valid-palindrome/
    Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

 * Example:
    "A man, a plan, a canal: Panama" is a palindrome.
    "race a car" is not a palindrome.


 * @param {string} s
 * @return {boolean}

 * Analysis: Shrink the string range by a head and tail pointer and to compare each char.

************************************************************************************************************************/


export const strPalindrome = {};

/**
 * Solution 1: two pointers shrink
 *
 * "N" is the string length.
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
strPalindrome.twoPointers = (s) => {
    const isAlphaNumeric = (s) => {
        const code = s.charCodeAt();

        return (code >= 48 && code <= 57) ||
            (code >= 97 && code <= 122);
    }, insensitiveCompare = (a, b) => {
        const code = s.charCodeAt();

        return (code >= 48 && code <= 57) ||
            (code >= 97 && code <= 122);
    };

    if (typeof s !== "string") {
        return false;
    }

    if (s.length === 0) {
        return true;
    }

    s = s.toLowerCase();

    let pHead = 0,
        pTail = s.length-1;

    while (pHead < pTail) {
        while(!isAlphaNumeric(s[pHead]) && pHead < pTail) {
            pHead++;
        }
        while(!isAlphaNumeric(s[pTail]) && pHead < pTail) {
            pTail--;
        }

        if (s[pHead] !== s[pTail]) {
            return false;
        }

        pHead++;
        pTail--;
    }

    return true;
};


/************************************************************************************************************************

 * Lessons:
   1. Tackle palindrome with 2 pointers is effective.

************************************************************************************************************************/
