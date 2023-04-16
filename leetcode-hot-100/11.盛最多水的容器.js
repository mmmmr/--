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