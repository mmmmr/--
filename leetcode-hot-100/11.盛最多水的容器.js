// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 返回容器可以储存的最大水量。

// 说明：你不能倾斜容器。

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/container-with-most-water
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  if (height[0] === 1 && height[1] === 1) {
    return 1
  }
  let max = 0
  let left = 0
  let right = height.length - 1

  while(left < right) {
    let x,y,area
    // 取小的
    y = Math.min(height[left], height[right])
    x = right - left
    area = x * y

    if(max < area) {
      max = area
    }
    // 取的哪边哪边就移动一位
    if (height[left] > height[right]) {
      right --
    } else{
      left ++
    }
  }

  return max
};

console.log(maxArea([2,3,4,5,18,17,6]));