//https://leetcode.com/problems/string-compression/description/
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let l = 0;
    let i = 0;
    for (let r = 0; r <= chars.length; r++) {
        if (chars[r] !== chars[l]) {
            const count = r - l;
            let resStr = "";
            if (count === 1) {
                resStr += chars[l];
            } else {
                resStr += chars[l];
                resStr += count;
            }
            for (let j = 0; j < resStr.length; j++) {
                chars[i] = resStr[j];
                i++;
            }
            l = r;
        }
    }

    return i;
};

console.log(compress(["a","a","b","b","c","c","c"]), ["a","2","b","2","c","3"]);
console.log(compress(["a"]), ["a"]);
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]), ["a","b","1","2"]);