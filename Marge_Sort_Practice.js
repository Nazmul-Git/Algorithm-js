

const margeSort=(arr,l,r)=>{
    if(l>=r) return;
    let mid=Math.floor((l+r)/2);
    margeSort(arr,l,mid);
    margeSort(arr,mid+1,r);
    margeTwoArr(arr,l,mid,r);
}
const arr=[30,19,1,5,3,10,15];
margeSort(arr,l=0,r=arr.length-1);