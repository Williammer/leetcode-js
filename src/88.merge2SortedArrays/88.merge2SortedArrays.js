/**
 * Problem: https://leetcode.com/problems/merge-sorted-array/description/
    Given two sorted integer arrays nums1 and nums2, merge nums2 and nums1 as one sorted array.

 * Example 1:
    Input:
      nums1 = [1,2,3,0,0,0]
      nums2 = [2,5,6]
    Output: [1,2,2,3,5,6]

* @param {number[]} nums1
* @param {number[]} nums2
 * @return {number[]}

 * Analysis:
 *  We can utilize the sorted attribute of the 2 arrays to compare one by one.
 *  We can also use the larger array as the body for the merged array. We can start to find the
 *  largest num and put it to the `nums1.length + nums2.length - 1` position of the larger array,
 *  and so on so forth until all nums are in place.
 */

/**
 * Solution 1:
 *
 * "N" is
 * Time complexity: O()
 * Space complexity: O()
 */
export function expandLargerArray(nums1, nums2) {
  const bigArr = nums1.length >= nums2.length ? nums1 : nums2;
  const smallArr = nums1.length < nums2.length ? nums1 : nums2;

  let i = bigArr.length - 1;
  let j = smallArr.length - 1;
  let k = bigArr.length + smallArr.length - 1;
  while (k >= 0) {
    if (j < 0) {
      break;
    }
    if (bigArr[i] > smallArr[j]) {
      bigArr[k] = bigArr[i];
      i -= 1;
      k -= 1;
    } else if (bigArr[i] < smallArr[j]) {
      bigArr[k] = smallArr[j];
      j -= 1;
      k -= 1;
    } else if (bigArr[i] === smallArr[j]) {
      bigArr[k] = bigArr[i];
      i -= 1;
      k -= 1;
      bigArr[k] = smallArr[j];
      j -= 1;
      k -= 1;
    }
  }

  return bigArr;
}

/**
 * Lessons:
 */
