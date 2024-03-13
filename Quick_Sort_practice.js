
const partition=(arr,l,r)=>{
    let pivot=arr[r];
    let i=l-1;    
    for(let j=0;j<r;j++){
        if(arr[j]<=pivot){
            i++;
            [arr[i],arr[j]]=[arr[j],arr[i]];
        }
    }
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