//https://leetcode.com/problems/increasing-triplet-subsequence/description/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let min = nums[0];
    let mid = Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= min) {
            min = nums[i];
        } else if (nums[i] <= mid) {
            mid = nums[i];
        } else {
            return true;
        }
    }
    return false;
};

console.log(increasingTriplet([1,2,3,4,5]) === true);
console.log(increasingTriplet([5,4,3,2,1]) === true);
console.log(increasingTriplet([2,1,5,0,4,6]) === true);