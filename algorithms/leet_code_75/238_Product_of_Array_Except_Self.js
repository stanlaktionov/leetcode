//https://leetcode.com/problems/product-of-array-except-self/description/
var productExceptSelf = function (nums) {
    const prefixProduct = [1];
    const suffixProduct = [];
    const result = [];
    suffixProduct[nums.length - 1] = 1;
    for (let i = 1; i < nums.length; i++) {
        prefixProduct[i] = prefixProduct[i - 1] * nums[i - 1];
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        suffixProduct[i] = suffixProduct[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < nums.length; i++) {
        result.push(suffixProduct[i] * prefixProduct[i]);
    }
    return result;
};

console.log(productExceptSelf([1,2,3,4]),  [24,12,8,6]);
console.log(productExceptSelf([[-1,1,0,-3,3]]), [0,0,9,0,0]);