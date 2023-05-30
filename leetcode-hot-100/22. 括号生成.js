// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    if (n === 1) {
        return ['()']
    }

    const result = []

    function dfs(left, right, lastStr) {

        if (lastStr.length === 2 * n) {
            result.push(lastStr)
        }

        if (left > 0) {
            dfs(left - 1, right, lastStr + '(')
        }

        if (left < right) {
            dfs(left, right -1, lastStr + ')')
        }
    }

    dfs(n, n, '')

    return result
};


console.log(generateParenthesis(3));