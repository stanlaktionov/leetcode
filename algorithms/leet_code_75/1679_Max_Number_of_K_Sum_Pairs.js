//https://leetcode.com/problems/max-number-of-k-sum-pairs/description/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    nums.sort((a, b) => a - b);
    let l = 0;
    let r = nums.length - 1;
    let count = 0;
    while (l < r) {
        const sum = nums[l] + nums[r];
        if (sum === k) {
            l++;
            r--;
            count++;
        } else if (sum > k) {
            r--
        } else if (sum < k) {
            l++;
        }
    }
    return count;
};

console.log(maxOperations([1,2,3,4], 5) === 2);
console.log(maxOperations([3,1,3,4,3], 6) === 1);