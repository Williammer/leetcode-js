/**
 * Problem: https://leetcode.com/problems/valid-anagram/
    Given two strings s and t, write a function to determine if t is an anagram of s.
 	You may assume the string contains only lowercase alphabets.

 * Example:
    s = "anagram", t = "nagaram", return true.
	s = "rat", t = "car", return false.


 * @param {string} s
 * @param {string} t
 * @return {boolean}

 * Analysis: This is a compare question, thus we can think of solutions like hash, sort, etc.

 */

export const validAnagram = {};

/**
 * Solution 1: use hash to compare
 *
 * "N" is string length
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
validAnagram.hash = (s, t) => {
  if (typeof s !== "string" || typeof t !== "string" || s.length !== t.length) {
    return false;
  }

  const len = s.length;

  const _hash = {};

  let i = 0;
  while (i < len) {
    if (typeof _hash[s[i]] === "number") {
      _hash[s[i]] += 1;
    } else {
      _hash[s[i]] = 1;
    }

    if (typeof _hash[t[i]] === "number") {
      _hash[t[i]]--;
    } else {
      _hash[t[i]] = -1;
    }

    i += 1;
  }

  for (const key in _hash) {
    if (_hash[key] !== 0) {
      return false;
    }
  }

  return true;
};

/**
 * Solution 2: use str->array to sort
 *
 * "N" is string length
 * Time complexity: O(NlogN)
 * Space complexity: O(N)
 */
validAnagram.sort = (s, t) => {
  if (typeof s !== "string" || typeof t !== "string" || s.length !== t.length) {
    return false;
  }

  const sortStr = str => str.split("").sort();

  const compareArr = (arr, arr2) => {
    if (arr.length !== arr2.length) {
      return false;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] !== arr2[i]) {
        return false;
      }
    }

    return true;
  };

  return compareArr(sortStr(s), sortStr(t));
};

/**
 * Solution 3: use alphabets array as mediator(unlike Hash, Array needs the alphabets pre-condition)
 *
 * "N" is string length
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
validAnagram.alphaTable = (s, t) => {
  if (typeof s !== "string" || typeof t !== "string" || s.length !== t.length) {
    return false;
  }

  const alphaTable = [];
  const baseCode = 97;

  for (let i = s.length - 1; i >= 0; i--) {
    if (typeof alphaTable[s[i].charCodeAt(0) - baseCode] !== "number") {
      alphaTable[s[i].charCodeAt(0) - baseCode] = 1;
    } else {
      alphaTable[s[i].charCodeAt(0) - baseCode] += 1;
    }

    if (typeof alphaTable[t[i].charCodeAt(0) - baseCode] !== "number") {
      alphaTable[t[i].charCodeAt(0) - baseCode] = -1;
    } else {
      alphaTable[t[i].charCodeAt(0) - baseCode]--;
    }
  }

  return alphaTable.every(val => !val);
};

/**
 * Lessons:
   1. The alphaTable solution is most efficient epecially on case that has many same chars in both strings.
   2. Some restrictions on Array make it unable to handle specific chars well.
   3. Array#forEach doesn't hv native ability to break, it needs thrown exception to break! Use Array#some/every instead.

 */
