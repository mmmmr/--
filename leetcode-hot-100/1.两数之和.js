
// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = {}
    nums.forEach((num, index) => {
        numMap[num] = index
    })
    let cur = null
    let nex = null
    nums.find((num, index) => {
        if(numMap[target - num] && numMap[target - num] !== index) {
            cur = index
            nex = numMap[target - num]
            return true
        }
    })
    return [cur, nex]
}

