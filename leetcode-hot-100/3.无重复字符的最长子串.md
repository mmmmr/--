/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const arr = s.split('')
    let total = 0
    let result = 0
    let arr2 = []
    arr.forEach((item) => {
        if (arr2.length >= total && !arr2.includes(item)) {
            arr2.push(item)
            total = arr2.length
        } else if (arr2.includes(item)) {
            result = result > total ? result : total
            const index = arr2.findIndex(it => it === item)
            arr2 = arr2.slice(index + 1)
            arr2.push(item)
            total = 0
        }
    })
    result = result > total ? result : total
    return result
};