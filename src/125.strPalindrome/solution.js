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
 * Solution 1: two pointers shrink, with tolowercase
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
    };

    if (typeof s !== "string") {
        return false;
    }

    if (s.length === 0) {
        return true;
    }

    s = s.toLowerCase();

    let pHead = 0,
        pTail = s.length - 1;

    while (pHead < pTail) {
        while (!isAlphaNumeric(s[pHead]) && pHead < pTail) {
            pHead++;
        }
        while (!isAlphaNumeric(s[pTail]) && pHead < pTail) {
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

/**
 * Solution 2: two pointers shrink, no tolowercase
 *
 * "N" is the string length.
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
strPalindrome.twoPointersInsens = (s) => {
    const isAlphaNumeric = (s) => {
            const code = s.charCodeAt();

            return (code >= 48 && code <= 57) ||
                (code >= 65 && code <= 90) ||
                (code >= 97 && code <= 122);
        },
        insensitiveCompare = (a, b) => {
            const codeA = a.charCodeAt(),
                codeB = b.charCodeAt();

            return (a === b ||
                (codeA >= 65 && codeA <= 90 || codeA >= 97 && codeA <= 122) &&
                (codeB >= 65 && codeB <= 90 || codeB >= 97 && codeB <= 122) &&
                Math.abs(codeA - codeB) === 32);
        };

    if (typeof s !== "string") {
        return false;
    }

    if (s.length === 0) {
        return true;
    }

    let pHead = 0,
        pTail = s.length - 1;

    while (pHead < pTail) {
        while (!isAlphaNumeric(s[pHead]) && pHead < pTail) {
            pHead++;
        }
        while (!isAlphaNumeric(s[pTail]) && pHead < pTail) {
            pTail--;
        }

        if (!insensitiveCompare(s[pHead], s[pTail])) {
            return false;
        }

        pHead++;
        pTail--;
    }

    return true;
};


/************************************************************************************************************************

 * Lessons:
   1. Tackle palindrome with 2 pointers is effective and strightforward.
   2. Be careful for the brackets added in the multiple boolean logic expressions,
    '||' returns true if the before-part is true, so it needs proper brackets to restrict the scope.
    eg. (ca >= 65 && ca <= 90) || (cb >= 97 && cb <= 122) will be different from (ca >= 65 && ca <= 90 || cb >= 97 && cb <= 122).

************************************************************************************************************************/
