//https://leetcode.com/problems/container-with-most-water/description/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxSpace = 0;
    let l = 0;
    let r = height.length - 1;
    while (l < r) {
        const w = r - l;
        const h = Math.min(height[l], height[r]);
        let newMaxSpace = w*h;

        if (newMaxSpace > maxSpace) {
            maxSpace = newMaxSpace;
        }
        if (height[l] <= height[r]) {
            l++
        } else {
            r--;
        }
    }
    return maxSpace;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]), 49);
console.log(maxArea([1,1]), 1);