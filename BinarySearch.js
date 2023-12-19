const binarySearch=(arr, key)=>{
    let left=0;
    let right= arr.length-1;
    let mid;

    while(right >= left){

        mid= left + Math.floor((right-left)/2);

        if(arr[mid] === key){
            return 'data found at index = '+ mid;
        }

        if(arr[mid] > key){
            right= mid-1;
        }

        else{
            left= mid+1;
        }
    }
};
const arr= [2,3,4,6,9,12,16,20,25,30,40,80,81,99,100]
const search= binarySearch(arr, 16);
console.log(search);