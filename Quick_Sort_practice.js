
const partition=(arr,l,r)=>{
    let pivot=arr[r];
    let i=l-1;    
    for(let j=l;j<r;j++){
        if(arr[j]<=pivot){
            i++;
            // console.log(i)
            [arr[i],arr[j]]=[arr[j],arr[i]];
        }
    }
    // After swap in loop arr is = [ 10, 30, 80, 90, 40 ]
    [arr[i+1],arr[r]]=[arr[r],arr[i+1]];
    return i+1;
}


const quickSort=(arr,l,r)=>{
    if(l>=r) return;
    let index=partition(arr,l,r);
    quickSort(arr,l,index-1,);
    quickSort(arr,index+1,r);
};
let arr=[10,80,30,90,40];
quickSort(arr,l=0,r=arr.length-1);
console.log(arr);