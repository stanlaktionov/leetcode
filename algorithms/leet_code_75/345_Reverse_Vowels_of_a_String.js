//https://leetcode.com/problems/reverse-vowels-of-a-string/description/
var reverseVowels = function (s) {
    s = s.split("");
    const vowels = ["a", "e", "i", "o", "u"];
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        while (l < r && !vowels.includes(s[l].toLowerCase())) {
            l++;
        }
        while (l < r && !vowels.includes(s[r].toLowerCase())) {
            r--;
        }
        const temp = s[l];
        s[l] = s[r];
        s[r] = temp;
        l++;
        r--;
    }

    return s.join("");
};

console.log(reverseVowels("hello") === "holle");
console.log(reverseVowels("leetcode") === "leotcede");