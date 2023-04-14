/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (s.length < 2) {
        return s
    }
    
    let left = 0
    let right = 0

    for (let i = 0; i < s.length; i++) {
        check(i, i)
        check(i, i + 1)
    }
    console.log(left, right);
    return s.slice(left, right)

    function check(l, r) {
        while (l >= 0 && r < s.length && s[l] === s[r]) {
            console.log( s[l], l , s[r], r);
            // 每次有符合条件后 l r 都 - 1 
            l --
            r ++ 
        }

        if (r - l > right - left) {
            // 因为每次符合条件后又 -1 寻找下一组， 所以left， right需要加 1
            left = l + 1
            right = r
        }
    }
};


console.log(longestPalindrome("bb"));