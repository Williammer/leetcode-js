/**
 * Problem: https://leetcode.com/problems/valid-palindrome/
    Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

 * Example:
    "A man, a plan, a canal: Panama" is a palindrome.
    "race a car" is not a palindrome.


 * @param {string} s
 * @return {boolean}

 * Analysis: Shrink the string range by a head and tail pointer and to compare each char.

 */

/**
 * Solution 1: two pointers shrink, with toLowerCase
 *
 * "N" is the string length.
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
export const twoPointers = (s) => {
  const isAlphaNumeric = (s) => {
    const code = s.charCodeAt();

    return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
  };

  if (typeof s !== "string") {
    return false;
  }
  if (s.length === 0) {
    return true;
  }

  s = s.toLowerCase();

  let pHead = 0;
  let pTail = s.length - 1;

  while (pHead < pTail) {
    while (!isAlphaNumeric(s[pHead]) && pHead < pTail) {
      pHead += 1;
    }
    while (!isAlphaNumeric(s[pTail]) && pHead < pTail) {
      pTail -= 1;
    }

    if (s[pHead] !== s[pTail]) {
      return false;
    }

    pHead += 1;
    pTail -= 1;
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
export const twoPointersInsensitive = (s) => {
  const isAlphaNumeric = (s) => {
    const code = s.charCodeAt();
    return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
  };
  const insensitiveCompare = (a, b) => {
    const codeA = a.charCodeAt();
    const codeB = b.charCodeAt();

    return (
      a === b ||
      (((codeA >= 65 && codeA <= 90) || (codeA >= 97 && codeA <= 122)) &&
        ((codeB >= 65 && codeB <= 90) || (codeB >= 97 && codeB <= 122)) &&
        Math.abs(codeA - codeB) === 32)
    );
  };

  if (typeof s !== "string") {
    return false;
  }
  if (s.length === 0) {
    return true;
  }

  let pHead = 0;
  let pTail = s.length - 1;

  while (pHead < pTail) {
    while (!isAlphaNumeric(s[pHead]) && pHead < pTail) {
      pHead += 1;
    }
    while (!isAlphaNumeric(s[pTail]) && pHead < pTail) {
      pTail -= 1;
    }

    if (!insensitiveCompare(s[pHead], s[pTail])) {
      return false;
    }

    pHead += 1;
    pTail -= 1;
  }

  return true;
};

/**
 * Solution 3: pre-process the string then check the palindrome.
 *
 * "N" is the string length.
 * Time complexity: O(2N)
 * Space complexity: O(1)
 */
export const twoPointersPreProcess = (s) => {
  if (typeof s !== "string") {
    return false;
  }

  s = s.replace(/\W/g, '').toLowerCase(); // process in advance

  if (s.length === 0) {
    return true;
  }

  const last = s.length - 1;
  let i = 0;

  while (last - i >= i) {
    if (s[i] !== s[last - i]) {
      return false;
    }
    i += 1;
  }

  return true;
};

/**
 * Solution 4: Compare with reversed string
 *
 * "N" is the string length.
 * Time complexity: O(3N)
 * Space complexity: O(N)
 */
export const reverse = (s) => {
  if (typeof s !== "string") {
    return false;
  }

  s = s.replace(/\W/g, '').toLowerCase(); // process in advance

  if (s.length === 0) {
    return true;
  }

  return s === s.split("").reverse().join("");
};

/**
 * Lessons:
   1. Tackle palindrome with 2 pointers is effective and strightforward.
   2. Be careful for the brackets added in the multiple boolean logic expressions,
    '||' returns true if the before-part is true, so it needs proper brackets to restrict the scope.
    eg. (ca >= 65 && ca <= 90) || (cb >= 97 && cb <= 122) will be different from (ca >= 65 && ca <= 90 || cb >= 97 && cb <= 122).

 */