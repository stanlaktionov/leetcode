//https://leetcode.com/problems/max-consecutive-ones-iii/description/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let l = 0;
    let r = 0
    for (r = 0; r < nums.length; r++) {
        if (nums[r] === 0) {
            k--;
        }
        if (k < 0) {
            if (nums[l] === 0) {
                k++;
            }
            l++;
        }
    }
    return r - l;
};

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2) === 6);
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3) === 10);