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

const quickSort = (arr, l, r) => {
    if (l >= r) return;
    let index = process(arr, l, r);
    quickSort(arr, l, index - 1);
    quickSort(arr, index + 1, r);
}

let arr = [4, 9, 1, 0, 7];
quickSort(arr, 0, arr.length - 1);
console.log(arr); //[ 0, 1, 4, 7, 9 ]
