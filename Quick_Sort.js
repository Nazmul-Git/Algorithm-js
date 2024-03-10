const process = (arr, l, r) => {
  let pivot = arr[r];
  let i = l-1;
  for (let j = l; j < r; j++) {
    if (arr[j] <= pivot){
        i++;
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }
  }

  [arr[i+1],arr[r]]=[arr[r],arr[i+1]];
  return i+1;
};

const quickSort = (arr, l, r) => {
  if (l >= r) return;
  let index = process(arr, l, r);
  console.log(index);
  quickSort(arr, l, index - 1);
  quickSort(arr, index + 1, r);
};
let arr = [4, 9, 1, 0, 7];
quickSort(arr, (l = 0), (r = arr.length - 1));
console.log(arr);

////////////////////////////////////////////////////////////

/**
 const process = (arr, l, r) => {
    let first = arr[l];
    let count = l;
    for (let i = l + 1; i <= r; i++) {
        if (arr[i] <= first) {
            count++;
            let temp = arr[count];
            arr[count] = arr[i];
            arr[i] = temp;
        }
    }

    // sort again for 4 and 0 --> [ 4, 1, 0, 9, 7 ]
    let temp = arr[count];
    arr[count] = arr[l];
    arr[l] = temp;

    return count;
}
 */
