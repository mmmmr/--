/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !==0) return false

    const length = s.length /2

    // 注意遍历的不是字符串， 而是字符串一半的长度次
    for (let index = 0; index < length; index++) {
        // 每次去掉最里层的括号
        s = s.replace('()', '')
        s = s.replace('{}', '')
        s = s.replace('[]', '')
    }

    return s.length === 0
};

console.log(isValid("([)]"));