const binarySearch=(arr,l,r, key)=>{
    if(l>r) return false;
    let mid=Math.floor((l+r)/2);
    if(arr[mid]===key) return mid;
    else if(arr[mid]>key){
        return binarySearch(arr,l,mid-1,key);
    }
    else if(arr[mid]<key){
        return binarySearch(arr,mid+1,r,key);
    }
}
let arr=[9,18,27,36,45,54,63,72,81,90]
console.log(binarySearch(arr,l=0,r=arr.length-1,45));