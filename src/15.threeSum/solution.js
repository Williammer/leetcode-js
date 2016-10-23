/************************************************************

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

 * Analysis: We can try to find simliarity from 1.twoSum. We can still use Hash for recording and searching purpose and use 2 pointers to loop over.

************************************************************/


export const threeSum = {};

/**
 * Solution 1: Use two Pointers to loop over and Hash to record and match.
 *
 * "N" is nums.length.
 * Time complexity: O(N^2)
 * Space complexity: O(N^2)
 */
threeSum.twoPointersHash = (nums) => {
    if (!(Array.isArray(nums) && nums.length > 2)) {
        return [];
    }

    const isUndefined = (obj) => {
            return typeof obj === "undefined";
        },
        get3rdNum = (p1, p2) => {
            return (nums[p1] + nums[p2] !== 0) ? -(nums[p1] + nums[p2]) : 0;
        },
        _getInnerSortedArray = (pLeft, pRight) => {
            let innerArr = [];
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
            } else {
                if (nums[pRight] <= get3rdNum(pRight, pLeft)) {
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
            }
            return innerArr;
        },
        _resultContains = (result, _sortedArray) => {
            return result.some((innerArr) => {
                return (innerArr.length === _sortedArray.length) && innerArr.every((v, i) => {
                    return v === _sortedArray[i];
                });
            });
        },
        _markAllMatches = (_hash, pLeft, pRight) => {
            const num1 = nums[pLeft],
                num2 = nums[pRight],
                num3 = get3rdNum(pRight, pLeft);

            _hash[num2] = true;

            if (isUndefined(_hash[num3])) {
                _hash[num3] = {};
            }
            _hash[num3] = true;
        };



    let len = nums.length - 1,
        pLeft = 0,
        pRight = 1,
        _hash = {},
        result = [];

    if (len === 2) {
        if ((nums[pLeft] + nums[pRight] + nums[pRight + 1] === 0)) {
            result.push(_getInnerSortedArray(pLeft, pRight));
        }
        return result;
    }

    for (pLeft = 0; pLeft < len; pLeft++) {
        for (pRight = pLeft + 1; pRight < len + 1; pRight++) {
            if (_hash[nums[pRight]] === false) { // got a desired num
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


/************************************************************

 * Lessons:
   1. Handling sorting and duplication edge cases is so hard :(, which needs constant practice to be quicker and sharper.
   2. Use array-comparsion in js to avoid inserting duplicated inner array result.

************************************************************/
