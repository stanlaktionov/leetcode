//https://leetcode.com/problems/find-the-highest-altitude/description/
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    const prefixArr = [0];
    for (let i = 0; i < gain.length; i++) {
        prefixArr[i + 1] = prefixArr[i] + gain[i];
    }
    return Math.max(...prefixArr);
};

console.log(largestAltitude([-5,1,5,0,-7]) === 1);
console.log(largestAltitude([-4,-3,-2,-1,4,3,2]) === 0);