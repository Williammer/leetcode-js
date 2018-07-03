/**
 * Problem: https://leetcode.com/problems/3sum/
    Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

 * Example 1:
    given array S = [-1, 0, 1, 2, -1, -4],
	A solution set is:
	[
	  [-1, 0, 1],
	  [-1, -1, 2]
	]

 * @param {number[]} nums
 * @return {number[][]}

 * Analysis: We can try to find simliarity from 1.twoSum. We can still use Hash for recording and searching and use 2 pointers to loop over. But using Hash to record and search may still work, but the workload to avoid duplication is too much;
    Because this problem has strong requirement on sorting order, we need to sort the source array first; then with a sorted array, we can 2 pointer shrink to find.
    We may also use binarySearch for the 3rd pointer's search while having 2 anchor points, but it'll have N^2*logN complexity.

 */

export const threeSum = {};

/**
 * Solution 2: Sort the src array first then use two Pointers(and an anchor point) to shrink, just like 167.twoSumSorted Solution 2.
 *
 * "N" is nums.length.
 * Time complexity: O(N^2) <= O(N^2) + O(N)[Moz] ~ O(NlogN)[Chrome]
 * Space complexity: O(1)[Chrome] ~ O(N)[Moz]
 */
threeSum.sortedtwoPointers = (nums) => {
  if (!(Array.isArray(nums) && nums.length > 2)) {
    return [];
  }

  nums = nums.sort((a, b) => a - b);

  const len = nums.length - 1;

  let pLeft;

  let pRight;

  const result = [];

  for (let pAnchor = 0; pAnchor < len - 1; pAnchor += 1) {
    if (pAnchor === 0 || nums[pAnchor] !== nums[pAnchor - 1]) {
      pLeft = pAnchor + 1;
      pRight = len;

      while (pLeft < pRight) {
        if (nums[pAnchor] + nums[pLeft] + nums[pRight] > 0) {
          pRight--;
        } else if (nums[pAnchor] + nums[pLeft] + nums[pRight] < 0) {
          pLeft += 1;
        } else {
          // push the match at first time
          result.push([nums[pAnchor], nums[pLeft], nums[pRight]]);

          // avoid duplicated nums - sliding wipe
          while (pLeft < pRight && nums[pLeft] === nums[pLeft + 1]) pLeft += 1;
          while (pLeft < pRight && nums[pRight] === nums[pRight - 1]) pRight--;

          // go on to next compare
          pLeft += 1;
          pRight--;
        }
      }
    }
  }

  return result;
};

/**
 * !! Bad sample !!
 * Solution 1: Use two Pointers to loop over and Hash to record and match. (bad sample of not sorting the array first)
 *
 * "N" is nums.length.
 * Time complexity: O(N^2)
 * Space complexity: O(N^2)
 */
threeSum.twoPointersHash = (nums) => {
  if (!(Array.isArray(nums) && nums.length > 2)) {
    return [];
  }

  const isUndefined = obj => typeof obj === "undefined";

  const get3rdNum = (p1, p2) => (nums[p1] + nums[p2] !== 0 ? -(nums[p1] + nums[p2]) : 0);

  const _getInnerSortedArray = (pLeft, pRight) => {
    const innerArr = [];
    if (nums[pLeft] <= nums[pRight]) {
      if (nums[pLeft] <= get3rdNum(pRight, pLeft)) {
        innerArr.push(nums[pLeft]);

        if (nums[pRight] <= get3rdNum(pRight, pLeft)) {
          innerArr.push(nums[pRight]);
          innerArr.push(get3rdNum(pRight, pLeft));
        } else {
          innerArr.push(get3rdNum(pRight, pLeft));
          innerArr.push(nums[pRight]);
        }
      } else {
        innerArr.push(get3rdNum(pRight, pLeft));
        innerArr.push(nums[pLeft]);
        innerArr.push(nums[pRight]);
      }
    } else if (nums[pRight] <= get3rdNum(pRight, pLeft)) {
      innerArr.push(nums[pRight]);

      if (nums[pLeft] <= get3rdNum(pRight, pLeft)) {
        innerArr.push(nums[pLeft]);
        innerArr.push(get3rdNum(pRight, pLeft));
      } else {
        innerArr.push(get3rdNum(pRight, pLeft));
        innerArr.push(nums[pLeft]);
      }
    } else {
      innerArr.push(get3rdNum(pRight, pLeft));
      innerArr.push(nums[pRight]);
      innerArr.push(nums[pLeft]);
    }
    return innerArr;
  };

  const _resultContains = (result, _sortedArray) => result.some(
    innerArr => innerArr.length === _sortedArray.length && innerArr.every((v, i) => v === _sortedArray[i]),
  );

  const _markAllMatches = (_hash, pLeft, pRight) => {
    const num1 = nums[pLeft];

    const num2 = nums[pRight];

    const num3 = get3rdNum(pRight, pLeft);

    _hash[num2] = true;

    if (isUndefined(_hash[num3])) {
      _hash[num3] = {};
    }
    _hash[num3] = true;
  };

  const len = nums.length - 1;

  let pLeft = 0;

  let pRight = 1;

  let _hash = {};

  const result = [];

  if (len === 2) {
    if (nums[pLeft] + nums[pRight] + nums[pRight + 1] === 0) {
      result.push(_getInnerSortedArray(pLeft, pRight));
    }
    return result;
  }

  for (pLeft = 0; pLeft < len; pLeft += 1) {
    for (pRight = pLeft + 1; pRight < len + 1; pRight += 1) {
      if (_hash[nums[pRight]] === false) {
        // got a desired num
        const _sortedArray = _getInnerSortedArray(pLeft, pRight);

        if (!_resultContains(result, _sortedArray)) {
          result.push(_sortedArray);
        }

        _markAllMatches(_hash, pLeft, pRight);
      }

      if (isUndefined(_hash[get3rdNum(pRight, pLeft)])) {
        _hash[get3rdNum(pRight, pLeft)] = false; // put a desired yet not matched num in _hash
      }
    }
    _hash = {};
  }

  return result;
};

/**
 * Lessons:
   1. Handling sorting and duplication edge cases is so hard :(, which needs constant practice to be quicker and sharper.
   2. The use of while loop to slide-wipe the duplication is elegant.

 */
