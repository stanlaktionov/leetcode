//https://leetcode.com/problems/reverse-words-in-a-string/description/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    s = s.split(" ");
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        const temp = s[r];
        s[r] = s[l];
        s[l] = temp;
        l++;
        r--;
    }
    return s.filter(Boolean).join(" ");
};

console.log(reverseWords("the sky is blue") === "blue is sky the");
console.log(reverseWords("  hello world  ") === "world hello");
console.log(reverseWords("a good   example") === "example good a");