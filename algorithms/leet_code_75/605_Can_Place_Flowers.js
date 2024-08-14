//https://leetcode.com/problems/can-place-flowers/description/
var canPlaceFlowers = function (flowerbed, n) {
    if (n === 0) return true;
    for (let i = 0; i < flowerbed.length; i++) {
        if (
            flowerbed[i] === 0 &&
            (flowerbed[i - 1] === 0 || flowerbed[i - 1] === undefined) &&
            (flowerbed[i + 1] === 0 || flowerbed[i + 1] === undefined)
        ) {
            flowerbed[i] = 1;
            n--;
            if (n === 0) return true;
        }
    }
    return n === 0;
};

console.log(canPlaceFlowers([1,0,0,0,1], 1) === true);
console.log(canPlaceFlowers([1,0,0,0,1], 2) === false);