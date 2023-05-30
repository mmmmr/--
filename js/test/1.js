function findLengthOfLIS(nums) {
  const n = nums.length;
  if (n === 0) return 0;

  // 创建一个辅助数组 dp，初始时每个元素的值都为 1
  const dp = new Array(n).fill(1);

  let maxLength = 1; // 记录最大递增子序列的长度

  // 遍历数组
  for (let i = 1; i < n; i++) {
    // 对于每个元素，再次遍历它之前的所有元素
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    maxLength = Math.max(maxLength, dp[i]);
  }

  return maxLength;
}

// 测试
const nums = [10, 9, 2, 5, 3, 7, 101, 18];
console.log(findLengthOfLIS(nums)); // 输出: 4