// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

// 算法的时间复杂度应该为 O(log (m+n)) 。

//  
// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/median-of-two-sorted-arrays
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let arr = [...nums1, ...nums2]
  arr = arr.sort((a,b) => a-b)
  if (arr.length % 2 === 0) {
    return ((arr[arr.length / 2 ] + arr[(arr.length) / 2 - 1]) /2).toFixed(5)
  } else {
    return (arr[(arr.length - 1) / 2]).toFixed(5)
  }
};