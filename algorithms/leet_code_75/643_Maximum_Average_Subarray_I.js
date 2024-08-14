//https://leetcode.com/problems/maximum-average-subarray-i/description/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let left = 0;
    let maxAvg = -Infinity;
    let window = 0;
    for (let right = 0; right < nums.length; right++) {
        window += nums[right];
        if (right > k - 1) {
            window -= nums[left];
            left++;
        }
        if (right >= k - 1) {
            let avg = window / k;
            console.log(avg);
            if (avg > maxAvg) {
                maxAvg = avg;
            }
        }
    }
    return maxAvg;
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4) === 12.75);
console.log(findMaxAverage([5], 1) === 5.0);