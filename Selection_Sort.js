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
