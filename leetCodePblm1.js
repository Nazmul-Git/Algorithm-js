var targetIndices = function(nums, target) {
    nums.sort((a,b)=>a-b);

    let indexArr=[];
    for(let i=0; i<= nums.length; i++){
        if(nums[i] === target){
            indexArr.push(i);
        }
    }
    return indexArr;
};
const output=targetIndices([1,2,5,2,3], 2);
console.log(output);
// console.log(Math.floor(5.5))