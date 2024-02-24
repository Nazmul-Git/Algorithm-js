const binaryToDecimal = (binary) => {
  let text = binary + "";
  let arr = text.split("");
  let sum=0;
  let pow=arr.length-1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "1") {
      arr[i] = parseInt(arr[i]) * Math.pow(2, pow);
      sum=sum+parseInt(arr[i]);
    }
    pow--;
  }
  return sum;
};
console.log(binaryToDecimal(1111101));
