
const partition=(arr,l,r)=>{
    let pivot=arr[r];
    let i=l-1;    
    for(let j=l;j<r;j++){
        if(arr[j]<=pivot){
            i++;
            [arr[i],arr[j]]=[arr[j],arr[i]];
        };
    };
    // console.log(i); //Last function call from inside quickSort function -> partition function return = 2
    // After swap in loop the arr is = [ 10, 30, 80, 90, 40 ]
    [arr[i+1],arr[r]]=[arr[r],arr[i+1]]; // i+1 or 2+1 = 3   Swap index 3, value 90 with r or right = 40. "90-><-40"
    // After swap the arr is = [ 10, 30, 80, 40, 90 ]
    return i+1; //3
}


const quickSort=(arr,l,r)=>{
    if(l>=r) return;
    let index=partition(arr,l,r);
    // For Left arr SORTED
    quickSort(arr,l,index-1,);
    // For right arr SORTED
    quickSort(arr,index+1,r);
};

let arr=[10,80,30,90,40];
quickSort(arr,l=0,r=arr.length-1);
console.log(arr);