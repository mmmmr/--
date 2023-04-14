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