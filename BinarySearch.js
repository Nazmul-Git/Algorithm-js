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

const binarySearch = (arr, key) => {
  // console.log(arr);
  let left = 0;
  let right = arr.length - 1;
  let mid;
  let isAscending;

  if (arr[0] <= arr[arr.length - 1]) {
    isAscending = true;
  } else {
    isAscending = false;
  }

  while (right >= left) {
    mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === key) {
      return "data found at index = " + mid;
    }

    if (isAscending) {
      if (arr[mid] > key) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (arr[mid] < key) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
};
const arrAscending = [
  2, 3, 4, 6, 9, 12, 16, 20, 25, 30, 40, 80, 80, 81, 99, 100,
];
// const search= binarySearch(arrAscending, 80);
// console.log(search);

//           - no need -
// const arrDescending=[55,48,47,33,25,25,17,12,9,8,5,1];
// const search2= binarySearch(arrDescending, 25);
// console.log(search2);

const arrDescending = arrAscending.reverse();
// console.log(arrDescending); //[100, 99, 81, 80, 80, 40, 30, 25, 20, 16, 12,  9, 6,  4,  3,  2 ]
const search2 = binarySearch(arrDescending, 80);
// console.log(search2);

//////////////////////////////////////////////////////////////

// Flooring/ Ceiling number in array
// let arr2 = [5, 7, 10, 13, 17, 22, 25, 30, 31, 39];
// const key= 28;
// ceiling = 30
// floor = 25
const findCeiling = (arr2, key) => {
    let l=0;
    let r= arr2.length-1;
    let m;

    while(r>=l){
        m= l + Math.floor((r-l)/2);
        if(arr2[m] === key){
            return arr[m];
        }
        if(arr2[m] > key){
            r= m-1;
        }
        else{
            l= m+1;
        }
    }
    return arr2[m+1];
};
const arr2 = [5, 7, 10, 13, 17, 22, 25, 30, 31, 39];

const ceil= findCeiling(arr2, 28);
console.log(ceil);
