/*
 * Problem: https://leetcode.com/problems/two-sum/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}

   Please notice that the time complexity here is O(NlogN) rather than O(N), because Map is implemented with Black-Red Tree in C++ stdlib
 */
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        map<int, int> Hash;
        for (int i = 0; i < nums.size(); i++) {
            Hash[nums[i]] = i;
        }
        vector<int> result(2);
        for (int i = 0; i < nums.size(); i++) {
            if (Hash.find(target - nums[i]) != Hash.end() && Hash[target - nums[i]] != i) {
                result[0] = i;
                result[1] = Hash[target - nums[i]];
                break;
            }
        }
        return result;
    }
};
