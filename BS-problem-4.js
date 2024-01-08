/**
 Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 */

const findMedianSortedArrays = (nums1, nums2) => {
  let marge = nums1.concat(nums2).sort((a, b) => a - b);
  let l = 0;
  let n = marge.length;
  console.log(n);
  if (n % 2 === 0) {
    const m = n / 2;
    return (marge[m] + marge[m - 1]) / 2;
  } else {
    return marge[Math.floor(n / 2)];
  }
};
const median = findMedianSortedArrays([3], [-2, -1]);
console.log(median);

// console.log([3,-2,-1].sort((a,b)=>a-b))
