/**
 Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 */
var twoSum = function(nums, target) {
    const numsWithIndex = nums.map((value, index) => ({ value, index }));
    numsWithIndex.sort((a, b) => a.value - b.value);
    // console.log(numsWithIndex)
    let l=0, r=numsWithIndex.length-1;
    while(l<r){
        let sum=numsWithIndex[l].value +numsWithIndex[r].value
        if(sum===target) return [numsWithIndex[l].index, numsWithIndex[r].index]
        else if(sum<target) l++
        else r--
    }
    return []
};
let arr=[3,2,4];
const result=twoSum(arr, 6)
console.log(result);



//////////////////////////////////////////////

/**
 Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 

Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
 */


var twoSum2 = function(numbers, target) {
    let l=0, r=numbers.length-1;
    while(l<=r){
        let sum=numbers[l]+numbers[r]
        if(sum===target) return [l+1,r+1]
        else if(sum<target) l++
        else r--
    }   
};
let arr2=[3,2,4];
const result2=twoSum(arr, 6)
console.log(result2);