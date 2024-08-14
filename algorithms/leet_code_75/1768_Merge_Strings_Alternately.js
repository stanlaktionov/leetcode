//https://leetcode.com/problems/merge-strings-alternately/description/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let res = "";
    let p1 = 0;
    let p2 = 0;

    while(p1 < word1.length && p2 < word2.length) {
        res += word1[p1];
        res += word2[p2];
        p1++;
        p2++;
    }
    if (p1 < word1.length) {
        for (let i = p1; i < word1.length; i++) {
            res += word1[i]
        }
    } else if (p2 < word2.length) {
        for (let i = p2; i < word2.length; i++) {
            res +=word2[i]
        }
    }
    return res;
};

console.log(mergeAlternately("abc", "pqr") === "apbqcr");
console.log(mergeAlternately("ab", "pqrs") === "apbqrs");
console.log(mergeAlternately("abcd", "pq") === "apbqcd");