
const removeDuplicate=(arr)=>{
    // console.log(arr.length)
    let i=0, j=1;
    let newArr=[]
    for(i,j ; j <= arr.length; i++,j++){
        if(arr[i]!==arr[j]){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(removeDuplicate([1,1,2]));


//////////////////////////////////////////another problem
function removeDuplicates(nums) {
    if (nums.length === 0) {
      return 0;
    }
  
    let slow = 0;
    let fast = 1;
  
    while (fast < nums.length) {
      if (nums[fast] !== nums[slow]) {
        // Move the slow pointer and update the value
        slow++;
        nums[slow] = nums[fast];
      }
  
      // Move the fast pointer
      fast++;
    }
  
    // The first (slow + 1) elements contain the unique elements
    return slow + 1;
  }
  
  // Example usage:
  const nums = [1, 1, 2, 2, 3, 4, 4, 5];
  const k = removeDuplicates(nums);
  
  console.log(nums.slice(0, k)); // Display the unique elements
  console.log("Number of unique elements:", k);