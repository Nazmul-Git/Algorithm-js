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

//1. Flooring/ Ceiling number in array

// let arr2 = [5, 7, 10, 13, 17, 22, 25, 30, 31, 39];
// const key= 28;
// ceiling = 30
// floor = 25
const findCeiling = (arr2, key) => {
  let l = 0;
  let r = arr2.length - 1;
  let m;

  while (r >= l) {
    m = l + Math.floor((r - l) / 2);
    if (arr2[m] === key) {
      return arr2[m];
    }
    if (arr2[m] > key) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return `Here ${key}'s Ceiling = ${arr2[m + 1]} & Floor = ${arr2[m - 1]}`;
};
const arr2 = [5, 7, 10, 13, 17, 22, 25, 30, 31, 39];

const ceil = findCeiling(arr2, 28);
console.log(ceil);




// 2. Make 1 sorted array from 2 other stored array, then search data

const countDuplicateNumber = (arr1, arr2, key) => {
  const makeOne = arr1.concat(arr2);
  const sorted = makeOne.sort((a, b) => a - b);

  let l = 0;
  let r = sorted.length - 1;
  let m;
  let count = 0;

  while (r >= l) {
    m = l + Math.floor((r - l) / 2);
    if (sorted[m] === key) {
      count++;
      // Move left to find more occurrences
      let leftPointer = m - 1;
      while (leftPointer >= 0 && sorted[leftPointer] === key) {
        count++;
        leftPointer--;
      }

      // Move right to find more occurrences
      let rightPointer = m + 1;
      while (rightPointer < sorted.length && sorted[rightPointer] === key) {
        count++;
        rightPointer++;
      }

      return count;
    } else if (sorted[m] > key) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return count;
};

const array1 = [5, 2, 9, 1, 7, 15, 20, 11, 10, 19, 25, 33];
const array2 = [45, 50, 30, 33, 27, 44, 31, 33, 50, 33];

const result = countDuplicateNumber(array1, array2, 33);
console.log(result);
