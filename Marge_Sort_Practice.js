

const margeTwoArr=(arr,l,mid,r)=>{
    let sizeL=m-l+1;
    let sizeR=r-m;

    let leftArr= new Array(sizeL);
    let rightArr= new Array(sizeR);

    for(let i=0; i<sizeL; i++){
        leftArr[i]=arr[l+i];
    }
    for(let j=0; j<sizeR; j++){
        rightArr[j]=arr[mid+1+j];
    }

    

    
}

const margeSort=(arr,l,r)=>{
    if(l>=r) return;
    let mid=Math.floor((l+r)/2);
    margeSort(arr,l,mid);
    margeSort(arr,mid+1,r);
    margeTwoArr(arr,l,mid,r);
}
const arr=[30,19,1,5,3,10,15];
margeSort(arr,l=0,r=arr.length-1);