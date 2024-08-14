//https://leetcode.com/problems/is-subsequence/description/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let l = 0;
    for (let r = 0; r < t.length; r++) {
        if (t[r] === s[l]) {
            l++;
        }
    }
    return l === s.length;
};

console.log(isSubsequence("abc", "ahbgdc") === true);
console.log(isSubsequence("axc", "ahbgdc") ===  false);