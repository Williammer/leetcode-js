/************************************************************************************************************************

 * Problem: https://leetcode.com/problems/intersection-of-two-arrays/
    Given two arrays, write a function to compute their intersection.

 * Example:
    Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

 * Note:
    Each element in the result must be unique.
    The result can be in any order.

 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}

 * Analysis: we can either use hash or sort the input array then apply 2pointers or binary search.

************************************************************************************************************************/

export const intersectOf2Arr = {};

/**
 * Solution 1: use hash.
 *
 * "N" is max nums.length.
 * Time complexity: O(N)
 * Space complexity: O(N)
 */
intersectOf2Arr.hash = (nums1, nums2) => {
    if (!(nums1 && nums2 && typeof nums1 === "object" && typeof nums2 === "object" && nums1.length > 0 && nums2.length > 0)) {
        return [];
    }

    let _hash = {},
        intersectSet = new Set();

    for (let i = nums1.length - 1; i >= 0; i--) {
        _hash[nums1[i]] = true;
    }

    for (let i = nums2.length - 1; i >= 0; i--) {
        if (_hash[nums2[i]] && !intersectSet.has(nums2[i])) {
            intersectSet.add(nums2[i]);
        }
    }

    return Array.from(intersectSet);
};

/**
 * Solution 2: sort the array, then use binary search.
 *
 * "N" is nums.length.
 * Time complexity: O(NlgN)
 * Space complexity: O(N)
 */
intersectOf2Arr.sortedBSearch = (nums1, nums2) => {
    if (!(nums1 && nums2 && typeof nums1 === "object" && typeof nums2 === "object" && nums1.length > 0 && nums2.length > 0)) {
        return [];
    }
    const nums1Last = nums1.length - 1,
        nums2Last = nums2.length - 1,
        binarySearch = (arr, target, lo) => {
            let hi = arr.length - 1,
                mid;

            while (lo <= hi) {
                mid = Math.floor((lo + hi) / 2);
                if (arr[mid] > target) {
                    hi = mid - 1;
                } else if (arr[mid] < target) {
                    lo = mid + 1;
                } else {
                    lastTarget = target;
                    low2 = mid + 1;
                    return true;
                }
            }

            return false;
        },
        ascSort = (a, b) => {
            return a - b;
        };

    let low2 = 0,
        lastTarget = null,
        result = [];

    nums1.sort(ascSort);
    nums2.sort(ascSort);

    for (let low1 = 0; low1 <= nums1Last; low1++) {
        // check edge
        if (nums1[low1] > nums2[nums2Last] || nums2[low2] > nums1[nums1Last]) {
            return result;
        }
        // avoid duplication & binary Search
        if (lastTarget !== nums1[low1] && binarySearch(nums2, nums1[low1], low2)) {
            result.push(nums1[low1]);
        }
    }

    return result;
};

/**
 * Solution 3: sort the array, then use 2 pointer.
 *
 * "N" is nums.length.
 * Time complexity: O(NlgN)
 * Space complexity: O(1)
 */
intersectOf2Arr.sorted2Pointer = (nums1, nums2) => {
    if (!(nums1 && nums2 && typeof nums1 === "object" && typeof nums2 === "object" && nums1.length > 0 && nums2.length > 0)) {
        return [];
    }

    const nums1Last = nums1.length - 1,
        nums2Last = nums2.length - 1,
        ascSort = (a, b) => {
            return a - b;
        };

    nums1.sort(ascSort);
    nums2.sort(ascSort);

    let low2 = 0,
        result = [],
        lastTarget = null;

    for (let low1 = 0; low1 <= nums1Last; low1++) {
        // check edge
        if (nums1[low1] > nums2[nums2Last] || nums2[low2] > nums1[nums1Last]) {
            return result;
        }

        while (nums1[low1] >= nums2[low2]) {
            if (nums1[low1] !== lastTarget && nums1[low1] === nums2[low2]) {
                result.push(nums1[low1]);
                lastTarget = nums1[low1];
            }
            low2++;
        }
    }

    return result;
};


/************************************************************************************************************************

 * Lessons:
   1. 2-pointer is basically use index-pointers to loop over.

************************************************************************************************************************/
