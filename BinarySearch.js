// const binarySearch=(arr, key)=>{
//     let left=0;
//     let right= arr.length-1;
//     let mid;

//     while(right >= left){

//         mid= left + Math.floor((right-left)/2);

//         if(arr[mid] === key){
//             return 'data found at index = '+ mid;
//         }

//         if(arr[mid] > key){
//             right= mid-1;
//         }

//         else{
//             left= mid+1;
//         }
//     }
// };
// const arr= [2,3,4,6,9,12,16,20,25,30,40,80,81,99,100]
// const search= binarySearch(arr, 100);
// console.log(search);






/////////////////////// ORDER AGNOSTIC BINARY SEARCH //////////////////////////////////

const binarySearch=(arr, key)=>{
    let left=0;
    let right= arr.length-1;
    let mid;
    let isAscending;

    if(arr[0] <= arr[arr.length-1]){
        isAscending= true;
    }
    else{
        isAscending=false;
    }

    while(right >= left){

        mid= left + Math.floor((right-left)/2);

        if(arr[mid] === key){
            return 'data found at index = '+ mid;
        }

        if(isAscending){
            if(arr[mid] > key){
                right= mid-1;
            }
    
            else{
                left= mid+1;
            }
        }
        else{
            if(arr[mid] < key){
                left= mid-1;
            }
    
            else{
                right= mid+1;
            }
        }

        
    }
};
const arrAscending= [2,3,4,6,9,12,16,20,25,30,40,80,81,99,100]
const search= binarySearch(arrAscending, 100);
console.log(search);

const arrDescending=[55,48,47,33,25,25,17,12,9,8,5,1];
const search2= binarySearch(arrDescending, 25);
console.log(search2);