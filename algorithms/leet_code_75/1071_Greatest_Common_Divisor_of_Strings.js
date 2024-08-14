//https://leetcode.com/problems/greatest-common-divisor-of-strings/description/
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const l1 = str1.length;
    const l2 = str2.length;
    const min = Math.min(l1, l2);
    const multString = (str, times) => {
        let res = ""
        for (let i = 0; i < times; i++) {
            res += str;
        }
        return res
    }
    const isDivisor = (i) => {
        if (l1 % i !== 0 || l2 % i !== 0) {
            return false;
        }
        const f1 = Math.floor(l1 / i);
        const f2 = Math.floor(l2 / i);
        return multString(str1.slice(0, i), f1) === str1 && multString(str1.slice(0, i), f2) === str2
    };

    for (let i = min; i >=0; i--) {
        if (isDivisor(i)) {
            return str1.slice(0, i);
        }
    }
    return "";
};

console.log(gcdOfStrings("ABCABC", "ABC") ==="ABC");
console.log(gcdOfStrings("ABABAB", "ABAB") === "AB");
console.log(gcdOfStrings("LEET", "CODE") === "");