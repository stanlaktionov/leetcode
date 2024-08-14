//https://leetcode.com/problems/find-pivot-index/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    const prefixSum = [nums[0]];
    const suffixSum = [nums[nums.length - 1]];
    suffixSum[nums.length - 1] = nums[nums.length - 1];
    for (let i = 1; i < nums.length; i++) {
        prefixSum[i] = nums[i] + prefixSum[i - 1];
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        suffixSum[i] = nums[i] + suffixSum[i + 1];
    }

    for (let i = 0; i < nums.length; i++) {
        const prev = prefixSum[i - 1] || 0;
        const next = suffixSum[i + 1] || 0;
        if (next === prev) return i;
    } 
    return -1;
};

console.log(pivotIndex([1,7,3,6,5,6]) === 3);
console.log(pivotIndex([1,2,3]) === -1);
console.log(pivotIndex([2,1,-1]) === 0);