const CountingSort=(arr,range)=>{
    let newArray=new Array(range).fill(0);
    for(let i=0; i<arr.length; i++){
        newArray[arr[i]]++;
    }
    for(let i=0; i<newArray.length; i++){
        console.log(i ,newArray[i]);
    }
    return newArray;
}
console.log(CountingSort([5,4,4,5,2,5], 6));