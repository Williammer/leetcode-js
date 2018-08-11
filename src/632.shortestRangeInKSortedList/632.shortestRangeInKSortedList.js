/**
 * Problem: https://leetcode.com/problems/smallest-range/description/
    You have k lists of sorted integers in ascending order.
    Find the smallest range that includes at least one number from each of the k lists.
    We define the range [a,b] is smaller than range [c,d] if b-a < d-c or a < c if b-a == d-c.
 *
 * Example 1:
    Input:[[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]
    Output: [20,24]
 *
 * @param {number[][]} nums
 * @return {number[]}
 *
 */

/**
 * Solution 1: Bump up the list pointer of the smallest num to seek smaller range.
 * Start from smallest num of each list, find the minimized num and move its pointer to next num,
 *  in an attempt to seek for smaller range.
 *
 * (N: The num of times to get the num range of each number combination of lists.)
 * Time complexity: [O(1), O(K * N/2), O(K * N)]
 * Space complexity: O(K)
 */
export function normal(nums) {
  if (!Array.isArray(nums) || nums.length <= 0) {
    throw new Error("Invalid lists input provided");
  }

  const pointers = nums.map(() => 0);
  let minIndex = 0;
  let result = [null, null];
  if (nums.length === 1) {
    return [nums[0][0], nums[0][0]];
  }

  while (pointers[minIndex] < nums[minIndex].length) {
    let minValue = null;
    let maxValue = null;

    for (let i = 0; i < pointers.length; i += 1) {
      const pointer = pointers[i];
      const value = nums[i][pointer];
      if (minValue === null) {
        minValue = value;
        minIndex = i;
      } else if (maxValue === null) {
        if (value < minValue) {
          maxValue = minValue;
          minValue = value;
          minIndex = i;
        } else {
          maxValue = value;
        }
      } else if (value < minValue) {
        minValue = value;
        minIndex = i;
      } else if (value > maxValue) {
        maxValue = value;
      }
    }

    if (result[0] === null || result[1] === null || maxValue - minValue < result[1] - result[0]) {
      result = [minValue, maxValue];
    }

    if (maxValue === minValue) {
      break;
    }

    pointers[minIndex] += 1;
  }

  return result;
}

/**
 *
 * Lessons:
   1. Analyse what is needed to do to get closer to find the smallest range, which is to
      bump up the index of the min edge of the current smallest range.
 */
