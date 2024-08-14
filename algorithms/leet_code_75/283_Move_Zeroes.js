//https://leetcode.com/problems/move-zeroes/description/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let l = 0;
    let r = 0;
    while (r < nums.length) {
        if (nums[r] !== 0) {
            const temp = nums[l];
            nums[l] = nums[r];
            nums[r] = temp;
            l++;
        }
        r++;
    }
};

console.log(moveZeroes([0,1,0,3,12]), [1,3,12,0,0]);
console.log(moveZeroes([0]), [0]);