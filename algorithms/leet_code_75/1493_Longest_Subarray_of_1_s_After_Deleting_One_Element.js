//https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let l = 0;
    let zeroesCount = 0;
    let res = 0;
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] === 0) {
            zeroesCount++;
        }

        while (zeroesCount > 1) {
            if (nums[l] === 0) {
                zeroesCount--;
            }
            l++;
        }
        res = Math.max(res, r - l);
    }
    return res;
};

console.log(longestSubarray([1,1,0,1]) === 3);
console.log(longestSubarray([0,1,1,1,0,1,1,0,1]) === 5);
console.log(longestSubarray([1,1,1]) === 2);