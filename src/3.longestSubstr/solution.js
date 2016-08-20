/************************************************************

 * Problem: https://leetcode.com/problems/longest-substring-without-repeating-characters/
    Given a string, find the length of the longest substring without repeating characters.

 * Example:
    Given "abcabcbb", the answer is "abc", which the length is 3.
    Given "bbbbb", the answer is "b", with the length of 1.
    Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

 * @param {string} s
 * @return {number}

 * Analysis: Substring-related problems are classic! In this no-repeated longest substring problem, we can have substr by using sth like 'slide window' with (left, right),
    and to check the repeatness of each char to be extended into current 'slide window'.

************************************************************/

export const longestSubstr = {};

/*
 * Solution 1: Slide Window, using substring and lastIndexOf to check if repeated.
 *
 * "N" is string.length.
 * Time complexity: O(N * ?)  "?": Big O for substring & includes/indexOf
 * Space complexity: O(1)
 */
longestSubstr.slideWin = (s) => {
    if (!(typeof s === "string" && s.length > 0)) {
        return 0;
    }

    const strLen = s.length;
    let idx = 0,
        curLen = 1,
        maxLen = 1,
        isRepeat = false;

    while (idx < strLen - 1 && maxLen < strLen - idx) {
        if (curLen === 1) {
            isRepeat = (s[idx] === s[idx + 1]);
        } else {
            // isRepeat = s.substring(idx, idx+curLen).lastIndexOf(s[idx + curLen]) > -1;
            isRepeat = (s.substring(idx, idx+curLen)).includes(s[idx + curLen]); // ES6 str.includes(), similar perf as indexOf/lastIndexOf
        }

        if (isRepeat) {
            idx++;
            curLen = 1;
        } else {
            curLen++;
            if (curLen > maxLen) {
                maxLen = curLen;
            }
        }
    }

    return maxLen;
};

/*
 * Solution 2: Slide Window enhanced, by using lastIndexOf alone, which is super fast!
 *
 * "N" is string.length.
 * Time complexity: O(N * ?) "?": Big O for lastIndexOf
 * Space complexity: O(1)
 */
longestSubstr.slideWinEnhanced = (s) => {
    let maxLen, left, right, i;

    if (s.length < 2) {
        return s.length;
    }

    maxLen = 0;

    for (left = 0, right = 1; right < s.length; right++) {
        i = s.lastIndexOf(s[right], right - 1);
        if (i >= 0) { // has repeated
            maxLen = Math.max(maxLen, right - left);
            left = Math.max(left, i + 1);
        }
    }
    return Math.max(maxLen, right - left);
};


/*
 * Solution 3: slide window with hash
 *
 * "N" is string.length.
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
longestSubstr.hash = (s) => {
    let res = {}, i, left = 0, maxLen = 0;

    for (i = 0; i < s.length; i++) {
        if (res[s[i]] === undefined) {
            res[s[i]] = i; // {char : idx} pair
        } else {
            if (res[s[i]] >= left) {// repeated in current sub str
                maxLen = Math.max(maxLen, i - left);
                left = res[s[i]] + 1; // start from repeated char's next char
            }
            res[s[i]] = i;
        }
    }
    return Math.max(maxLen, i - left);
};

/*
 * Solution 4: hash+reduce. loop string with array.reduce instead of for/while loop, more elegant.
 *
 * "N" is string.length.
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
longestSubstr.hashReduce = (s) => {
    let map = {}, left = 0;

    return s.split("").reduce((max, v, i) => {
        left = map[v] >= left ? map[v] + 1 : left;
        map[v] = i;
        return Math.max(max, i - left + 1);
    }, 0);
};

/************************************************************

 * Lessons:
   1. 'Slide window' is a good perspective for handling sub array/string problems.

   2. Hash is good for checking the existence of chars, and javaScript's lastIndexOf is super fast for this purpose.

   3. ES6's array reduce can loop array elegantly.

************************************************************/
