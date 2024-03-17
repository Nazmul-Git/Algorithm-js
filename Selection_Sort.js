const SelectionSort = (arr) => {
  let min_idx;

  for (let i = 0; i < arr.length - 1; i++) {
    min_idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }
    if (min_idx !== i) {
      let temp = arr[min_idx]; 
      arr[min_idx] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
};

console.log(SelectionSort([9, 4, 7, 2, 1]));

// 

// const selectionSort = arr => {
//   const swap =(arr, indx1, indx2) =>{
//       return [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]
//   }
//   for (let i = 0; i < arr.length; i++) {
//       let lowest = i;
//       for (let j = i + 1; j < arr.length; j++) {
//           if (arr[j] < arr[lowest]) lowest = j;
//       }
//       if (i !== lowest) swap(arr, i, lowest)
//   }
//   return arr;
// }

// console.log(selectionSort([23, 43, 32, -3, 15]))