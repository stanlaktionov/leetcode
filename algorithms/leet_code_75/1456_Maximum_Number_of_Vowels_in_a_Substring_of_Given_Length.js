//https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    const vowels = ["a", "e", "i", "o", "u"];
    let left = 0;
    let maxVowels = 0;
    let window = 0;
    for (let right = 0; right < s.length; right++) {
        if (vowels.includes(s[right])) {
            window++;
        }
        if (right + 1 > k) {
            if (vowels.includes(s[left])) {
                window--;
            }
            left++;
        }
        if (window > maxVowels) {
            maxVowels = window;
        }
    }
    return maxVowels;
};

console.log(maxVowels("abciiidef", 3) === 3);
console.log(maxVowels("aeiou", 2) === 2);
console.log(maxVowels("leetcode", 3) === 2);