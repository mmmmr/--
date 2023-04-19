// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

// 你返回所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/3sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a, b) => a-b)
    let result = []

    // 先找到一个i 双指针数组中 i 后方的数据
    for (let i = 0; i < nums.length; i++) {
        // 如果i > 0 i后方的 数据也都> 0 所以相加不可能 = 0
        if (nums[i] > 0) {
            break
        }
        
        // 如果数据与下一条相同，忽略当前，执行下一个循环
        if (i > 0 && nums[i] === nums[i -1]) {
            continue
        }

        let left = i + 1
        let right = nums.length - 1

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (sum === 0) {
                result.push([nums[left], nums[i], nums[right]])
                // 如果有相同数据忽略
                while(nums[left] === nums[left +1]) {
                    left ++
                }
                while(nums[right] === nums[right -1]) {
                    right ++
                }
                right -- 
                left ++ 
            }
            if (sum > 0) { 
                right --
            } 
            if (sum < 0){
                left ++ 
            }
        }
    }

    return result
};


console.log(threeSum([-1,0,1,2,-1,-4]));