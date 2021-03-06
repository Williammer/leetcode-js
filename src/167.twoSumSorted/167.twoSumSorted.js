/**
 * Problem: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
    Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
	NOTE: index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

 * Example 1:
    Input: numbers={2, 7, 11, 15}, target=9
	Output: index1=1, index2=2


 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}

 * Analysis: Binary Search is the natural choice for sorted array.

 * A bit background info for js sort in major browsers:
    js array sort() uses pretty efficient sort algorithms, could have O(N) to O(NlogN) time complexity depend on browser.
    some browser such as Mozilla uses mergeSort, which will add extra space complexity. (http://stackoverflow.com/questions/234683/javascript-array-sort-implementation)

    NOTE: Array:sort by default didn't sort nums in ascending order, so need the helper function 'sortNumber' to set the rule.

 */

export const twoSumSorted = {};

/**
 * Solution 1: one pointer as anchor, the other area with bSearch
 *
 * "N" is sortedNums.length.
 * Time complexity: O(NlgN)
 * Space complexity: O(1)
 */
twoSumSorted.bSearch = (sortedNums, target) => {
  if (!(Array.isArray(sortedNums) && sortedNums.length > 1) || typeof target !== "number") {
    return;
  }

  let i;
  let lo;
  let hi;
  let mid;
  let compensate;

  // loop over the anchor num starting from smallest num.
  anchorEleLoop: for (i = 0; i < sortedNums.length - 1; i += 1) {
    lo = i + 1;
    hi = sortedNums.length - 1;
    compensate = target - sortedNums[i];

    // skip in vain searches
    if (compensate > sortedNums[hi]) {
      continue;
    }

    // binary search the compensate target
    while (lo <= hi) {
      // handle 1 or 2 nums on the binarySearch area's case
      if (lo === hi) {
        if (compensate === sortedNums[hi]) {
          return [i + 1, hi + 1];
        }
        continue anchorEleLoop;
      } else if (lo + 1 === hi) {
        if (compensate === sortedNums[hi]) {
          return [i + 1, hi + 1];
        }
        if (compensate === sortedNums[lo]) {
          return [i + 1, lo + 1];
        }
        continue anchorEleLoop;
      }

      // Key is in a[lo..hi] or not present, goes to N/2 if has even nums
      mid = Math.floor((hi + lo) / 2);

      if (compensate < sortedNums[mid]) {
        hi = mid - 1;
      } else if (compensate > sortedNums[mid]) {
        lo = mid + 1;
      } else {
        return [i + 1, mid + 1];
      }
    }
  }
};

/**
 * Solution 2: two pointers, shrink the range.
 *
 * "N" is sortedNums.length.
 * Time complexity: O(N)
 * Space complexity: O(1)
 */
twoSumSorted.twoPointer = (sortedNums, target) => {
  if (!(Array.isArray(sortedNums) && sortedNums.length > 1) || typeof target !== "number") {
    return;
  }

  let lo = 0;

  let hi = sortedNums.length - 1;

  while (lo < hi) {
    if (sortedNums[lo] + sortedNums[hi] > target) {
      hi -= 1;
    } else if (sortedNums[lo] + sortedNums[hi] < target) {
      lo += 1;
    } else {
      return [lo + 1, hi + 1];
    }
  }
};

/**
 * Lessons:
   1. Some edge cases of binary search needs to be handled carefully.
   2. Nested loop can be continue respectively with label, which was rarely used.
   3. two pointer solution is an efficient yet easy to understand solution, sometimes we efficiency and concise can be achieved together.

 */
