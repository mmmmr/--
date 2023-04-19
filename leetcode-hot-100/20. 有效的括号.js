// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/valid-parentheses
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

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