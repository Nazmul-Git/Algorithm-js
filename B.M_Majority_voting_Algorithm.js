const MajorityVoting = (arr) => {
  let candidate = -1,
    count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      candidate = arr[i];
      count = 1;
    } else {
      if (candidate === arr[i]) {
        count++;
      } else {
        count--;
      }
    }
  }

  // console.log(count, candidate);

  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === candidate) {
      count++;
    }
  }
  if (count > arr.length / 2) {
    return candidate;
  }
  return -1;
  // return count>Math.floor(arr.length/2);
};
console.log(MajorityVoting([4,4,3,7,2,4,4]));
