
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
console.log(removeDuplicate([1,2,2,3,4,5,5,6,7,7,8,10]));