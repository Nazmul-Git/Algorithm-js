const partition = (arr, l, r) => {
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
    let index = partition(arr, l, r);
    console.log(index);
    quickSort(arr, l, index - 1);
    quickSort(arr, index + 1, r);
  };
  let arr = [4, 9, 1, 0, 7];
  quickSort(arr, (l = 0), (r = arr.length - 1));
  console.log(arr);
