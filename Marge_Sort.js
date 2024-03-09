function margeTwoArr(arr, l, m, r)
{
    
    let n1 = m - l + 1;
    let n2 = r - m;
 
    let leftArr = new Array(n1); 
    let rightArr = new Array(n2);
 
    for (let i = 0; i < n1; i++)
        leftArr[i] = arr[l + i];
    for (let j = 0; j < n2; j++)
        rightArr[j] = arr[m + 1 + j];
 
    let i = 0;
    let j = 0;
    let k = l;
 
    while (i < n1 && j < n2) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        }
        else {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }
 
    while (i < n1) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}

const margeSort=(arr,l,r)=>{
    if(l>=r) return;
    let mid=Math.floor((l+r)/2);
    margeSort(arr,l,mid);
    margeSort(arr,mid+1,r);
    margeTwoArr(arr,l,mid,r);
}
let arr=[72,13,30,30,16];
margeSort(arr,l=0,r=arr.length-1);
console.log(arr); 